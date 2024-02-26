import { generateClient } from 'aws-amplify/api';
import dataProvider, { DataProvider } from "../src/dataProvider";

const operations = {
    queries: {
        listResources: "listResourcesQuery",
    },
    mutations: {
    }
}

afterAll(() => {
    jest.restoreAllMocks();
});

test("get list", async () => {
    const mockGraphql = jest.fn(async () => {
        return {
            data: {
                listResources: {
                    items: [
                        {
                            id: "1",
                            name: "Resource 1",
                        },
                        {
                            id: "2",
                            name: "Resource 2",
                        },
                    ],
                    nextToken: null,
                    __typename: "ModelResourceConnection",
                },
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
    expect(call[1]).toEqual({ limit: 10, nextToken: null });

    expect(result).toEqual({
        data: [{ id: '1', name: 'Resource 1' }, { id: '2', name: 'Resource 2' }],
        total: 2
    });
});