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

const dataProvider = (client: Client, operations: Operations): DataProviderInterface => {
    const { queries, mutations } = operations;

    const getQuery = (queryName: string): string => {
        if (queries[queryName]) {
            return queries[queryName];
        }

        if (mutations[queryName]) {
            return mutations[queryName];
        }

        console.log(`Query ${queryName} not found`);
        throw new Error(`Query ${queryName} not found`);
    };

    const getQueryName = (operation: string, resource: string): string => {
        const pluralOperations = ["list"];
        if (pluralOperations.includes(operation)) {
            return `${operation}${resource.charAt(0).toUpperCase() + resource.slice(1)}`;
        }
        // else singular operations ["create", "delete", "get", "update"]
        return `${operation}${resource.charAt(0).toUpperCase() + resource.slice(1, -1)}`;
    }

    const graphql = async (
        query: string,
        variables: Record<string, unknown>
    ): Promise<any> => {
        const queryResult = await client.graphql({
            query,
            variables,
        }) as GraphQLResult;

        if (queryResult.errors || !queryResult.data) {
            console.error(queryResult.errors);
            throw new Error("Error in GraphQL query");
        }

        return queryResult.data;
    }

    const getList = async <TData extends BaseRecord = BaseRecord>(
        { resource, pagination, sorters, filters, meta }: GetListParams
    ): Promise<GetListResponse<TData>> => {
        const queryName = getQueryName("list", resource);
        const query = getQuery(queryName);
        const response = await graphql(query, {});

        const { items, nextToken } = response.data[queryName]

        return {
            data: items,
            total: items.length,
        }
    };

    const create = async <TData extends BaseRecord = BaseRecord, TVariables = {}>(
        { resource, variables, meta }: CreateParams<TVariables>
    ): Promise<CreateResponse<TData>> => {
        const queryName = getQueryName("create", resource);
        const query = getQuery(queryName);

        const response = await graphql(query, { input: variables });
        const data = response.data[queryName];
        return { data };
    };

    const update = async <TData extends BaseRecord = BaseRecord, TVariables = {}>(
        { resource, id, variables, meta }: UpdateParams<TVariables>
    ): Promise<UpdateResponse<TData>> => {
        const queryName = getQueryName("update", resource);
        const query = getQuery(queryName);

        const input = variables as BaseRecord;

        delete input.__typename;
        delete input._deleted;
        delete input._lastChangedAt;
        delete input.createdAt;
        delete input.updatedAt;
        delete input.owner;

        const response = await graphql(query, { input });
        const data = response.data[queryName];
        return { data };
    };

    const deleteOne = async <TData extends BaseRecord = BaseRecord, TVariables = {}>(
        { resource, id, variables, meta }: DeleteOneParams<TVariables>
    ): Promise<DeleteOneResponse<TData>> => {
        const queryName = getQueryName("delete", resource);
        const query = getQuery(queryName);

        const response = await graphql(query, { input: variables });
        const data = response.data[queryName];
        return { data };
    };

    const getOne = async <TData extends BaseRecord = BaseRecord>(
        { resource, id, meta }: GetOneParams
    ): Promise<GetOneResponse<TData>> => {
        const queryName = getQueryName("get", resource);
        const query = getQuery(queryName);

        const response = await graphql(query, { id });
        const data = response.data[queryName];

        if (!data) {
            throw new Error(`Resource ${resource} with id ${id} not found`);
        }

        return { data };
    };

    const getApiUrl = (): string => {
        return ""
    };

    return {
        getList,
        create,
        update,
        deleteOne,
        getOne,
        getApiUrl,
    };
};

export default dataProvider;
