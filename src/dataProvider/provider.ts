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
} from "@refinedev/core";
import { Client, GraphQLResult } from "aws-amplify/api";

export interface Operations {
    queries: Record<string, string>;
    mutations: Record<string, string>;
}


const dataProvider = (
    client: Client,
    operations: Operations,
): DataProviderInterface => {

    const graphql = async (
        query: string,
        variables: Record<string, unknown>,
    ): Promise<any> => {
        const queryResult = (await client.graphql({
            query,
            variables,
        })) as GraphQLResult;

        if (queryResult.errors || !queryResult.data) {
            console.error(queryResult.errors);
            throw new Error("Error in GraphQL query");
        }

        return queryResult.data;
    }

    const getQuery = (queryName: string): string => {
        if (operations.queries[queryName]) {
            return operations.queries[queryName];
        }

        if (operations.mutations[queryName]) {
            return operations.mutations[queryName];
        }

        console.log(`Query ${queryName} not found`);
        throw new Error(`Query ${queryName} not found`);
    }

    const getQueryName = (operation: string, resource: string): string => {
        const pluralOperations = ["list"];
        if (pluralOperations.includes(operation)) {
            return `${operation}${resource.charAt(0).toUpperCase() + resource.slice(1)}`;
        }
        // else singular operations ["create", "delete", "get", "update"]
        return `${operation}${resource.charAt(0).toUpperCase() + resource.slice(1, -1)}`;
    }

    return {
        getList: async <TData extends BaseRecord = BaseRecord>(
            {
                resource,
                pagination,
                sorters,
                filters,
                meta
            }: GetListParams): Promise<GetListResponse<TData>> => {

            const { current = 1, pageSize = 10 } = pagination ?? {};

            const queryName = getQueryName("list", resource);
            const query = getQuery(queryName);

            const variables = { limit: pageSize };

            const response = await graphql(query, variables);

            const { items, nextToken } = response[queryName];

            let total = (current - 1) * pageSize + items.length;
            if (nextToken) {
                total++;
            }

            return {
                data: items,
                total,
            };
        },
        create: async <
            TData extends BaseRecord = BaseRecord,
            TVariables = {},
        >({
            resource,
            variables,
            meta,
        }: CreateParams<TVariables>): Promise<CreateResponse<TData>> => {
            const queryName = getQueryName("create", resource);
            const query = getQuery(queryName);

            const response = await graphql(query, { input: variables });
            const data = response[queryName];
            return { data };
        },
        update: async <
            TData extends BaseRecord = BaseRecord,
            TVariables = {},
        >({
            resource,
            id,
            variables,
            meta,
        }: UpdateParams<TVariables>): Promise<UpdateResponse<TData>> => {
            const queryName = getQueryName("update", resource);
            const query = getQuery(queryName);

            const details = { id, ...variables } as BaseRecord;

            delete details.__typename;
            delete details._deleted;
            delete details._lastChangedAt;
            delete details.createdAt;
            delete details.updatedAt;
            delete details.owner;

            const response = await graphql(query, { input: details });
            const data = response[queryName];
            return { data };
        },
        deleteOne: async <
            TData extends BaseRecord = BaseRecord,
            TVariables = {},
        >({
            resource,
            id,
            variables,
            meta,
        }: DeleteOneParams<TVariables>): Promise<DeleteOneResponse<TData>> => {
            const queryName = getQueryName("delete", resource);
            const query = getQuery(queryName);

            const response = await graphql(query, { input: { id } });
            const data = response[queryName];

            if (!data) {
                throw new Error(`Resource ${resource} with id "${id}" not found`);
            }

            return { data };
        },
        getOne: async <TData extends BaseRecord = BaseRecord>({
            resource,
            id,
            meta,
        }: GetOneParams): Promise<GetOneResponse<TData>> => {
            const queryName = getQueryName("get", resource);
            const query = getQuery(queryName);

            const response = await graphql(query, { id });
            const data = response[queryName];

            if (!data) {
                throw new Error(`Resource ${resource} with id "${id}" not found`);
            }

            return { data };
        },
        getApiUrl: () => "",
    };
}

export default dataProvider;
