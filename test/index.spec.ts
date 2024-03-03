import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";

import amplifyconfig from "../src/amplifyconfiguration.json";

import * as mutations from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";

import dataProvider from "../src/dataProvider";

afterAll(() => {
    jest.restoreAllMocks();
});

describe("dataProvider", () => {
    beforeAll(() => {
        Amplify.configure(amplifyconfig);
    });

    test("create", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });

        const result0 = await provider.create({
            resource: "Todos",
            variables: { id: "id0", name: "Todo 0" },
        });
        expect(result0).toEqual({
            data: {
                id: "id0",
                name: "Todo 0",
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "Todo",
            },
        });

        const result1 = await provider.create({
            resource: "Todos",
            variables: { id: "id1", name: "Todo 1" },
        });
        expect(result1).toEqual({
            data: {
                id: "id1",
                name: "Todo 1",
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "Todo",
            },
        });
    });

    test("getList", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });

        const result = await provider.getList({
            resource: "Todos",
            sorters: [{ field: "createdAt", order: "asc" }],
        });
        expect(result).toEqual({
            data: [
                {
                    id: "id1",
                    name: "Todo 1",
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    __typename: "Todo",
                },
                {
                    id: "id0",
                    name: "Todo 0",
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    __typename: "Todo",
                },
            ],
            total: 2,
        });
    });

    test("getList with limit", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });
        const result = await provider.getList({
            resource: "Todos",
            pagination: { pageSize: 1 },
        });

        expect(result).toEqual({
            data: [
                {
                    id: "id1",
                    name: "Todo 1",
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    __typename: "Todo",
                },
            ],
            total: 2,
        });
    });

    test("update", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });
        const result = await provider.update({
            resource: "Todos",
            id: "id1",
            variables: { name: "Updated Todo 1" },
        });

        expect(result).toEqual({
            data: {
                id: "id1",
                name: "Updated Todo 1",
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "Todo",
            },
        });
    });

    test("deleteOne", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });
        await provider.create({
            resource: "Todos",
            variables: { id: "id2", name: "Todo for deletion" },
        });
        const result = await provider.deleteOne({
            resource: "Todos",
            id: "id2",
        });

        expect(result).toEqual({
            data: {
                id: "id2",
                name: "Todo for deletion",
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "Todo",
            },
        });

        // after deletion, the resource should not be found
        expect(async () => {
            await provider.getOne({
                resource: "Todos",
                id: "id2",
            });
        }).rejects.toThrow();
    });

    test("getOne", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });
        const result = await provider.getOne({
            resource: "Todos",
            id: "id0",
        });
        expect(result).toEqual({
            data: {
                id: "id0",
                name: "Todo 0",
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "Todo",
            },
        });

        // resource not found
        expect(async () => {
            await provider.getOne({
                resource: "Todos",
                id: "id-notfound",
            });
        }).rejects.toThrow();
    });
});
