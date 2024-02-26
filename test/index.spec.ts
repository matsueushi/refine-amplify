import { generateClient } from "aws-amplify/api";
import dataProvider, { DataProvider } from "../src/dataProvider";

const operations = {
    queries: {
        listResources: "listResourcesQuery",
    },
    mutations: {
        createResource: "createResourceMutation",
    },
};

afterAll(() => {
    jest.restoreAllMocks();
});

test("get list", async () => {
    const mockGraphql = jest.fn(async () => {
        return {
            listResources: {
                items: [
                    {
                        id: "1",
                        name: "Resource 1",
                        createdAt: '2024-02-26T09:26:44.908Z',
                        updatedAt: '2024-02-26T09:26:44.908Z',
                        owner: 'ownerId',
                        __typename: 'Resource'
                    },
                    {
                        id: "2",
                        name: "Resource 2",
                        createdAt: '2024-02-11T02:27:32.223Z',
                        updatedAt: '2024-02-11T02:27:32.223Z',
                        owner: 'ownerId',
                        __typename: 'Resource'
                    },
                ],
                nextToken: null,
                __typename: "ModelResourceConnection",
            },
        };
    });

    const client = generateClient();

    jest.spyOn(DataProvider.prototype, "graphql").mockImplementation(mockGraphql);
    const provider = dataProvider(client, operations);

    const result = await provider.getList({ resource: "resources" });

    const calls = mockGraphql.mock.calls;
    const call = calls[0] as Array<unknown>;

    console.log(calls);
    expect(call[0]).toBe("listResourcesQuery");
    // expect(call[1]).toEqual({ limit: 10, nextToken: null });

    expect(result).toEqual({
        data: [
            {
                id: "1",
                name: "Resource 1",
                createdAt: '2024-02-26T09:26:44.908Z',
                updatedAt: '2024-02-26T09:26:44.908Z',
                owner: 'ownerId',
                __typename: 'Resource'
            },
            {
                id: "2",
                name: "Resource 2",
                createdAt: '2024-02-11T02:27:32.223Z',
                updatedAt: '2024-02-11T02:27:32.223Z',
                owner: 'ownerId',
                __typename: 'Resource'
            },
        ],
        total: 2,
    });
});

test("create resource", async () => {
    const mockGraphql = jest.fn(async () => {
        return {
            createResource: {
                id: "1",
                name: "Resource 1",
                createdAt: "2024-02-26T09:26:44.908Z",
                updatedAt: "2024-02-26T09:26:44.908Z",
                owner: "ownerId",
                __typename: "Resource",
            },
        };
    });

    const client = generateClient();

    jest.spyOn(DataProvider.prototype, "graphql").mockImplementation(mockGraphql);
    const provider = dataProvider(client, operations);

    const result = await provider.create({
        resource: "resources",
        variables: { name: "Resource 1" },
    });

    const calls = mockGraphql.mock.calls;
    const call = calls[0] as Array<unknown>;

    expect(call[0]).toBe("createResourceMutation");
    expect(call[1]).toEqual({ input: { name: "Resource 1" } });

    expect(result).toEqual({
        data: {
            id: "1",
            name: "Resource 1",
            createdAt: "2024-02-26T09:26:44.908Z",
            updatedAt: "2024-02-26T09:26:44.908Z",
            owner: "ownerId",
            __typename: "Resource",
        },
    });
});
