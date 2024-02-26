import {
    BaseRecord,
    DataProvider as DataProviderInterface,
    GetListParams,
    CreateParams,
    UpdateParams,
    DeleteOneParams,
    GetOneParams,
    GetListResponse,
    CreateResponse,
    UpdateResponse,
    DeleteOneResponse,
    GetOneResponse,
} from '@refinedev/core';
import { Client, GraphQLResult } from 'aws-amplify/api';

export interface Operations {
    queries: Record<string, string>;
    mutations: Record<string, string>;
}


export class DataProvider {
    public client: Client;
    public queries: Record<string, string>;
    public mutations: Record<string, string>;

    public constructor(client: Client, operations: Operations) {
        this.client = client;
        this.queries = operations.queries;
        this.mutations = operations.mutations;
    }

    public getList = async <TData extends BaseRecord = BaseRecord>(
        { resource, pagination, sorters, filters, meta }: GetListParams
    ): Promise<GetListResponse<TData>> => {
        const queryName = this.getQueryName("list", resource);
        const query = this.getQuery(queryName);
        const response = await this.graphql(query, {});

        const { items, nextToken } = response.data[queryName]

        return {
            data: items,
            total: items.length,
        }
    }

    public create = async <TData extends BaseRecord = BaseRecord, TVariables = {}>(
        { resource, variables, meta }: CreateParams<TVariables>
    ): Promise<CreateResponse<TData>> => {
        const queryName = this.getQueryName("create", resource);
        const query = this.getQuery(queryName);

        const response = await this.graphql(query, { input: variables });
        const data = response.data[queryName];
        return { data };
    }

    public update = async <TData extends BaseRecord = BaseRecord, TVariables = {}>(
        { resource, id, variables, meta }: UpdateParams<TVariables>
    ): Promise<UpdateResponse<TData>> => {
        const queryName = this.getQueryName("update", resource);
        const query = this.getQuery(queryName);

        const input = variables as BaseRecord;

        delete input.__typename;
        delete input._deleted;
        delete input._lastChangedAt;
        delete input.createdAt;
        delete input.updatedAt;
        delete input.owner;

        const response = await this.graphql(query, { input });
        const data = response.data[queryName];
        return { data };
    }

    public deleteOne = async <TData extends BaseRecord = BaseRecord, TVariables = {}>(
        { resource, id, variables, meta }: DeleteOneParams<TVariables>
    ): Promise<DeleteOneResponse<TData>> => {
        const queryName = this.getQueryName("delete", resource);
        const query = this.getQuery(queryName);

        const response = await this.graphql(query, { input: variables });
        const data = response.data[queryName];
        return { data };
    }

    public getOne = async <TData extends BaseRecord = BaseRecord>(
        { resource, id, meta }: GetOneParams
    ): Promise<GetOneResponse<TData>> => {
        const queryName = this.getQueryName("get", resource);
        const query = this.getQuery(queryName);

        const response = await this.graphql(query, { id });
        const data = response.data[queryName];

        if (!data) {
            throw new Error(`Resource ${resource} with id ${id} not found`);
        }

        return { data };
    }

    public getApiUrl(): string {
        return ""
    }

    public getQuery(queryName: string): string {
        if (this.queries[queryName]) {
            return this.queries[queryName];
        }

        if (this.mutations[queryName]) {
            return this.mutations[queryName];
        }

        console.log(`Query ${queryName} not found`);
        throw new Error(`Query ${queryName} not found`);
    }

    public getQueryName(operation: string, resource: string): string {
        const pluralOperations = ["list"];
        if (pluralOperations.includes(operation)) {
            return `${operation}${resource.charAt(0).toUpperCase() + resource.slice(1)}`;
        }
        // else singular operations ["create", "delete", "get", "update"]
        return `${operation}${resource.charAt(0).toUpperCase() + resource.slice(1, -1)}`;
    }

    public async graphql(
        query: string,
        variables: Record<string, unknown>
    ): Promise<any> {
        const queryResult = await this.client.graphql({
            query,
            variables,
        }) as GraphQLResult;

        if (queryResult.errors || !queryResult.data) {
            console.error(queryResult.errors);
            throw new Error("Error in GraphQL query");
        }

        return queryResult.data;
    }
}

const dataProvider = (client: Client, operations: Operations): DataProviderInterface => {
    const provider = new DataProvider(client, operations);
    return {
        getList: provider.getList,
        create: provider.create,
        update: provider.update,
        deleteOne: provider.deleteOne,
        getOne: provider.getOne,
        getApiUrl: provider.getApiUrl,
    };
};

export default dataProvider;
