import { generateClient } from "aws-amplify/api";
import dataProvider, { DataProvider } from "../src/dataProvider";
import * as mutations from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";

afterAll(() => {
    jest.restoreAllMocks();
});

describe("dataProvider", () => {
    const operations = { queries, mutations };

    test("get list", async () => {
        const mockGraphql = jest.fn(async () => {
            return {
                listTodos: {
                    items: [
                        {
                            id: "1",
                            name: "Todo 1",
                            createdAt: '2024-02-26T09:26:44.908Z',
                            updatedAt: '2024-02-26T09:26:44.908Z',
                            owner: 'ownerId',
                            __typename: 'Todo'
                        },
                        {
                            id: "2",
                            name: "Todo 2",
                            createdAt: '2024-02-11T02:27:32.223Z',
                            updatedAt: '2024-02-11T02:27:32.223Z',
                            owner: 'ownerId',
                            __typename: 'Todo'
                        },
                    ],
                    nextToken: null,
                    __typename: "ModelTodoConnection",
                },
            };
        });

        const client = generateClient();

        jest.spyOn(DataProvider.prototype, "graphql").mockImplementation(mockGraphql);
        const provider = dataProvider(client, operations);

        const result = await provider.getList({ resource: "Todos" });

        const calls = mockGraphql.mock.calls;
        const call = calls[0] as Array<unknown>;

        expect(call[0]).toBe("listTodosQuery");
        expect(call[1]).toEqual({ limit: 10 });

        expect(result).toEqual({
            data: [
                {
                    id: "1",
                    name: "Todo 1",
                    createdAt: '2024-02-26T09:26:44.908Z',
                    updatedAt: '2024-02-26T09:26:44.908Z',
                    owner: 'ownerId',
                    __typename: 'Todo'
                },
                {
                    id: "2",
                    name: "Todo 2",
                    createdAt: '2024-02-11T02:27:32.223Z',
                    updatedAt: '2024-02-11T02:27:32.223Z',
                    owner: 'ownerId',
                    __typename: 'Todo'
                },
            ],
            total: 2,
        });
    });

    test("get list with limit", async () => {
        const mockGraphql = jest.fn(async () => {
            return {
                listTodos: {
                    items: [
                        {
                            id: "1",
                            name: "Todo 1",
                            createdAt: '2024-02-26T09:26:44.908Z',
                            updatedAt: '2024-02-26T09:26:44.908Z',
                            owner: 'ownerId',
                            __typename: 'Todo'
                        },
                    ],
                    nextToken: "nextToken",
                    __typename: "ModelTodoConnection",
                },
            };
        });

        const client = generateClient();

        jest.spyOn(DataProvider.prototype, "graphql").mockImplementation(mockGraphql);
        const provider = dataProvider(client, operations);

        const result = await provider.getList({ resource: "Todos", pagination: { current: 1, pageSize: 1 } });

        const calls = mockGraphql.mock.calls;
        const call = calls[0] as Array<unknown>;

        expect(call[0]).toBe("listTodosQuery");
        expect(call[1]).toEqual({ limit: 1 });

        expect(result).toEqual({
            data: [
                {
                    id: "1",
                    name: "Todo 1",
                    createdAt: '2024-02-26T09:26:44.908Z',
                    updatedAt: '2024-02-26T09:26:44.908Z',
                    owner: 'ownerId',
                    __typename: 'Todo'
                },
            ],
            total: 2,
        });
    }
    );

    test("create todo", async () => {
        const mockGraphql = jest.fn(async () => {
            return {
                createTodo: {
                    id: "1",
                    name: "Todo 1",
                    createdAt: "2024-02-26T09:26:44.908Z",
                    updatedAt: "2024-02-26T09:26:44.908Z",
                    owner: "ownerId",
                    __typename: "Todo",
                },
            };
        });

        const client = generateClient();

        jest.spyOn(DataProvider.prototype, "graphql").mockImplementation(mockGraphql);
        const provider = dataProvider(client, operations);

        const result = await provider.create({
            resource: "Todos",
            variables: { name: "Todo 1" },
        });

        const calls = mockGraphql.mock.calls;
        const call = calls[0] as Array<unknown>;

        expect(call[0]).toBe("createTodoMutation");
        expect(call[1]).toEqual({ input: { name: "Todo 1" } });

        expect(result).toEqual({
            data: {
                id: "1",
                name: "Todo 1",
                createdAt: "2024-02-26T09:26:44.908Z",
                updatedAt: "2024-02-26T09:26:44.908Z",
                owner: "ownerId",
                __typename: "Todo",
            },
        });
    });

    test("update todo", async () => {
        const mockGraphql = jest.fn(async () => {
            return {
                updateTodo: {
                    id: "1",
                    name: "Todo 2",
                    createdAt: "2024-02-26T09:26:44.908Z",
                    updatedAt: "2024-02-26T09:26:44.908Z",
                    owner: "ownerId",
                    __typename: "Todo",
                },
            };
        });

        const client = generateClient();

        jest.spyOn(DataProvider.prototype, "graphql").mockImplementation(mockGraphql);
        const provider = dataProvider(client, operations);

        const result = await provider.update({
            resource: "Todos",
            id: "1",
            variables: { name: "Todo 2" },
        });

        const calls = mockGraphql.mock.calls;
        const call = calls[0] as Array<unknown>;

        expect(call[0]).toBe("updateTodoMutation");
        expect(call[1]).toEqual({ input: { id: "1", name: "Todo 2" } });

        expect(result).toEqual({
            data: {
                id: "1",
                name: "Todo 2",
                createdAt: "2024-02-26T09:26:44.908Z",
                updatedAt: "2024-02-26T09:26:44.908Z",
                owner: "ownerId",
                __typename: "Todo",
            },
        });
    });

    test("delete todo", async () => {
        const mockGraphql = jest.fn(async () => {
            return {
                deleteTodo: {
                    id: "1",
                    name: "Todo 1",
                    createdAt: "2024-02-26T09:26:44.908Z",
                    updatedAt: "2024-02-26T09:26:44.908Z",
                    owner: "ownerId",
                    __typename: "Todo",
                },
            };
        });

        const client = generateClient();

        jest.spyOn(DataProvider.prototype, "graphql").mockImplementation(mockGraphql);
        const provider = dataProvider(client, operations);

        const result = await provider.deleteOne({
            resource: "Todos",
            id: "1",
        });

        const calls = mockGraphql.mock.calls;
        const call = calls[0] as Array<unknown>;

        expect(call[0]).toBe("deleteTodoMutation");
        expect(call[1]).toEqual({ input: { id: "1" } });

        expect(result).toEqual({
            data: {
                id: "1",
                name: "Todo 1",
                createdAt: "2024-02-26T09:26:44.908Z",
                updatedAt: "2024-02-26T09:26:44.908Z",
                owner: "ownerId",
                __typename: "Todo",
            },
        });
    });

    test("get todo", async () => {
        const mockGraphql = jest.fn(async () => {
            return {
                getTodo: {
                    id: "1",
                    name: "Todo 1",
                    createdAt: "2024-02-26T09:26:44.908Z",
                    updatedAt: "2024-02-26T09:26:44.908Z",
                    owner: "ownerId",
                    __typename: "Todo",
                },
            };
        });

        const client = generateClient();

        jest.spyOn(DataProvider.prototype, "graphql").mockImplementation(mockGraphql);
        const provider = dataProvider(client, operations);

        const result = await provider.getOne({
            resource: "Todos",
            id: "1",
        });

        const calls = mockGraphql.mock.calls;
        const call = calls[0] as Array<unknown>;

        expect(call[0]).toBe("getTodoQuery");
        expect(call[1]).toEqual({ id: "1" });

        expect(result).toEqual({
            data: {
                id: "1",
                name: "Todo 1",
                createdAt: "2024-02-26T09:26:44.908Z",
                updatedAt: "2024-02-26T09:26:44.908Z",
                owner: "ownerId",
                __typename: "Todo",
            },
        });
    });
});
