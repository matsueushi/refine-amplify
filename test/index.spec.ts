import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";

import amplifyconfig from "../src/amplifyconfiguration.json"

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

    test("create todo", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });

        const result = await provider.create({
            resource: "Todos",
            variables: { name: "Todo 1" },
        });
        expect(result).toEqual({
            data: {
                id: expect.any(String),
                name: "Todo 1",
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "Todo",
            },
        });

        // const result2 = await provider.create({
        //     resource: "Todos",
        //     variables: { name: "Todo 2" },
        // });
        // expect(result2).toEqual({
        //     data: {
        //         id: expect.any(String),
        //         name: "Todo 2",
        //         createdAt: expect.any(String),
        //         updatedAt: expect.any(String),
        //         __typename: "Todo",
        //     },
        // });
    });

    test("get list", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });

        const result = await provider.getList({ resource: "Todos" });
        expect(result).toEqual({
            data: [
                {
                    id: expect.any(String),
                    name: "Todo 1",
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    __typename: 'Todo'
                },
                {
                    id: expect.any(String),
                    name: "Todo 2",
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    __typename: 'Todo'
                },
            ],
            total: 2,
        });
    });

    test("get list with limit", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });
        const result = await provider.getList({
            resource: "Todos",
            pagination: { current: 1, pageSize: 1 }
        });

        expect(result).toEqual({
            data: [
                {
                    id: expect.any(String),
                    name: "Todo 2",
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    __typename: 'Todo'
                },
            ],
            total: 2,
        });
    });

    // test("update todo", async () => {
    //     const mockGraphql = jest.fn(async () => {
    //         return {
    //             updateTodo: {
    //                 id: "1",
    //                 name: "Todo 2",
    //                 createdAt: "2024-02-26T09:26:44.908Z",
    //                 updatedAt: "2024-02-26T09:26:44.908Z",
    //                 owner: "ownerId",
    //                 __typename: "Todo",
    //             },
    //         };
    //     });

    //     const client = generateClient();

    //     jest.spyOn(DataProvider.prototype, "graphql").mockImplementation(mockGraphql);
    //     const provider = dataProvider(client, { queries, mutations });

    //     const result = await provider.update({
    //         resource: "Todos",
    //         id: "1",
    //         variables: { name: "Todo 2" },
    //     });

    //     const calls = mockGraphql.mock.calls;
    //     const call = calls[0] as Array<unknown>;

    //     expect(call[0]).toBe(mutations.updateTodo);
    //     expect(call[1]).toEqual({ input: { id: "1", name: "Todo 2" } });

    //     expect(result).toEqual({
    //         data: {
    //             id: "1",
    //             name: "Todo 2",
    //             createdAt: "2024-02-26T09:26:44.908Z",
    //             updatedAt: "2024-02-26T09:26:44.908Z",
    //             owner: "ownerId",
    //             __typename: "Todo",
    //         },
    //     });
    // });

    // test("delete todo", async () => {
    //     const mockGraphql = jest.fn(async () => {
    //         return {
    //             deleteTodo: {
    //                 id: "1",
    //                 name: "Todo 1",
    //                 createdAt: "2024-02-26T09:26:44.908Z",
    //                 updatedAt: "2024-02-26T09:26:44.908Z",
    //                 owner: "ownerId",
    //                 __typename: "Todo",
    //             },
    //         };
    //     });

    //     const client = generateClient();

    //     jest.spyOn(DataProvider.prototype, "graphql").mockImplementation(mockGraphql);
    //     const provider = dataProvider(client, { queries, mutations });

    //     const result = await provider.deleteOne({
    //         resource: "Todos",
    //         id: "1",
    //     });

    //     const calls = mockGraphql.mock.calls;
    //     const call = calls[0] as Array<unknown>;

    //     expect(call[0]).toBe(mutations.deleteTodo);
    //     expect(call[1]).toEqual({ input: { id: "1" } });

    //     expect(result).toEqual({
    //         data: {
    //             id: "1",
    //             name: "Todo 1",
    //             createdAt: "2024-02-26T09:26:44.908Z",
    //             updatedAt: "2024-02-26T09:26:44.908Z",
    //             owner: "ownerId",
    //             __typename: "Todo",
    //         },
    //     });
    // });

    // test("get todo", async () => {
    //     const mockGraphql = jest.fn(async () => {
    //         return {
    //             getTodo: {
    //                 id: "1",
    //                 name: "Todo 1",
    //                 createdAt: "2024-02-26T09:26:44.908Z",
    //                 updatedAt: "2024-02-26T09:26:44.908Z",
    //                 owner: "ownerId",
    //                 __typename: "Todo",
    //             },
    //         };
    //     });

    //     const client = generateClient();

    //     jest.spyOn(DataProvider.prototype, "graphql").mockImplementation(mockGraphql);
    //     const provider = dataProvider(client, { queries, mutations });

    //     const result = await provider.getOne({
    //         resource: "Todos",
    //         id: "1",
    //     });

    //     const calls = mockGraphql.mock.calls;
    //     const call = calls[0] as Array<unknown>;

    //     expect(call[0]).toBe(queries.getTodo);
    //     expect(call[1]).toEqual({ id: "1" });

    //     expect(result).toEqual({
    //         data: {
    //             id: "1",
    //             name: "Todo 1",
    //             createdAt: "2024-02-26T09:26:44.908Z",
    //             updatedAt: "2024-02-26T09:26:44.908Z",
    //             owner: "ownerId",
    //             __typename: "Todo",
    //         },
    //     });
    // });
});
