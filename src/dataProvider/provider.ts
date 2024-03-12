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
    GetManyParams,
    GetManyResponse,
    CreateManyParams,
    CreateManyResponse,
    DeleteManyParams,
    DeleteManyResponse,
    UpdateManyParams,
    UpdateManyResponse,
} from "@refinedev/core";
import { Client, GraphQLResult } from "aws-amplify/api";
import pluralize from "pluralize";
import camelCase from "camelcase";
import { Pagination } from "./utils";
import { generateFilter } from "./utils/handleFilter";

export interface Operations {
    queries: Record<string, string>;
    mutations: Record<string, string>;
}

const dataProvider = (
    client: Client,
    operations: Operations,
): Omit<Required<DataProviderInterface>, "custom"> => {
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
    };

    const getQuery = (queryName: string): string => {
        if (operations.queries[queryName]) {
            return operations.queries[queryName];
        }

        if (operations.mutations[queryName]) {
            return operations.mutations[queryName];
        }

        console.log(`Query ${queryName} not found`);
        throw new Error(`Query ${queryName} not found`);
    };

    const getQueryName = (operation: string, resource: string): string => {
        const pluralOperations = ["list"];
        if (pluralOperations.includes(operation)) {
            const pluralResource = pluralize.plural(resource);
            return camelCase(`${operation}-${pluralResource}`);
        }
        // else singular operations ["create", "delete", "get", "update"]
        const singularResource = pluralize.singular(resource);
        return camelCase(`${operation}-${singularResource}`);
    };

    return {
        // required methods
        getList: async <TData extends BaseRecord = BaseRecord>({
            resource,
            pagination,
            sorters,
            filters,
            meta,
        }: GetListParams): Promise<GetListResponse<TData>> => {
            const { current = 1, pageSize = 10 } = pagination ?? {};

            const queryName = meta?.operation ?? getQueryName("list", resource);
            const query = getQuery(queryName);

            // identifier for the pagination token
            const signature = JSON.stringify({
                queryName,
                filters,
                pageSize,
            });

            let sorterArguments = sorters ? {
                type: pluralize.singular(resource),
                sortDirection: sorters[0].order === "asc" ? "ASC" : "DESC"
            } : {};

            // get the next token for the current page
            const nextToken = Pagination.getNextToken(signature, current);

            let amplifyFilter = generateFilter(filters);

            if (nextToken === undefined) {
                return {
                    data: [],
                    total: 0,
                };
            }

            const variables = {
                ...amplifyFilter,
                ...sorterArguments,
                limit: pageSize,
                nextToken,
            };

            const response = await graphql(query, variables);
            const data = response[queryName];

            // set the next token for the next page
            Pagination.setNextToken(data.nextToken, signature, current);

            let total = (current - 1) * pageSize + data.items.length;
            if (data.nextToken) {
                total++; // there is at least one more page
            }

            return {
                data: data.items,
                total,
            };
        },
        create: async <TData extends BaseRecord = BaseRecord, TVariables = {}>({
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
        update: async <TData extends BaseRecord = BaseRecord, TVariables = {}>({
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
        deleteOne: async <TData extends BaseRecord = BaseRecord, TVariables = {}>({
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
        // optional methods
        getMany: async <TData extends BaseRecord = BaseRecord>({
            resource,
            ids,
            meta,
        }: GetManyParams): Promise<GetManyResponse<TData>> => {
            const queryName = getQueryName("get", resource);
            const query = getQuery(queryName);

            const queriesData = [];

            // Executes the queries
            for (const id of ids) {
                const response = await graphql(query, { id });
                const data = response[queryName];

                if (data) {
                    queriesData.push(data);
                }
            }

            return {
                data: queriesData,
            };
        },
        createMany: async <TData extends BaseRecord = BaseRecord, TVariables = {}>({
            resource,
            variables,
            meta,
        }: CreateManyParams<TVariables>): Promise<CreateManyResponse<TData>> => {
            const queryName = getQueryName("create", resource);
            const query = getQuery(queryName);

            const queriesData = [];

            // Executes the queries
            for (const vars of variables) {
                const response = await graphql(query, { input: vars });
                const data = response[queryName];

                if (data) {
                    queriesData.push(data);
                }
            }

            return {
                data: queriesData,
            };
        },
        deleteMany: async <TData extends BaseRecord = BaseRecord, TVariables = {}>({
            resource,
            ids,
            variables,
            meta,
        }: DeleteManyParams<TVariables>): Promise<DeleteManyResponse<TData>> => {
            const queryName = getQueryName("delete", resource);
            const query = getQuery(queryName);

            const queriesData = [];

            // Executes the queries
            for (const id of ids) {
                const response = await graphql(query, { input: { id } });
                const data = response[queryName];

                if (data) {
                    queriesData.push(data);
                }
            }

            return {
                data: queriesData,
            };
        },
        updateMany: async <TData extends BaseRecord = BaseRecord, TVariables = {}>({
            resource,
            ids,
            variables,
            meta,
        }: UpdateManyParams<TVariables>): Promise<UpdateManyResponse<TData>> => {
            const queryName = getQueryName("update", resource);
            const query = getQuery(queryName);

            const queriesData = [];

            // Executes the queries
            for (const id of ids) {
                const details = { id, ...variables } as BaseRecord;

                delete details.__typename;
                delete details._deleted;
                delete details._lastChangedAt;
                delete details.createdAt;
                delete details.updatedAt;
                delete details.owner;

                const response = await graphql(query, { input: details });
                const data = response[queryName];

                if (data) {
                    queriesData.push(data);
                }
            }

            return {
                data: queriesData,
            };
        },
    };
};

export default dataProvider;
