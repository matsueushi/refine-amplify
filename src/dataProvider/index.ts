import {
    DataProvider as DataProviderInterface,
    GetListParams,
    CreateParams,
    UpdateParams,
    DeleteOneParams,
    GetOneParams,
} from '@refinedev/core';
import { Client, GraphQLResult, get } from 'aws-amplify/api';

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

    const getList = async ({ resource, pagination, sorters, filters, meta }: GetListParams) => {
        const queryName = getQueryName("list", resource);
        const query = getQuery(queryName);
        const queryData = await graphql(query, {});

    };

    const create = async ({ resource, variables, meta }: CreateParams) => {

    };

    const update = async ({ resource, id, variables, meta }: UpdateParams) => {

    };

    const deleteOne = async ({ resource, id, variables, meta }: DeleteOneParams) => {

    };

    const getOne = async ({ resource, id, meta }: GetOneParams) => {

    };

    const getApiUrl = () => {

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
