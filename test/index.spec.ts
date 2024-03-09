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

        const result = await provider.create({
            resource: "ResourceForCreates",
            variables: { id: "id0", priority: 0 },
        });
        expect(result).toEqual({
            data: {
                id: "id0",
                priority: 0,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForCreate",
            },
        });
    });

    test("getList", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });

        // create resource
        for (let i = 0; i < 3; i++) {
            await provider.create({
                resource: "ResourceForGetLists",
                variables: { id: `id${i}`, priority: i },
            });
        }

        const result = await provider.getList({ resource: "ResourceForGetLists" });
        expect(result.total).toEqual(3);
        expect(
            Array.from(result.data).sort((a, b) => a.priority - b.priority),
        ).toEqual([
            {
                id: "id0",
                priority: 0,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForGetList",
            },
            {
                id: "id1",
                priority: 1,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForGetList",
            },
            {
                id: "id2",
                priority: 2,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForGetList",
            },
        ]);
    });

    test("getList with limit", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });

        // create resource
        for (let i = 0; i < 5; i++) {
            await provider.create({
                resource: "ResourceForGetListWithLimits",
                variables: { id: `id${i}`, priority: i },
            });
        }

        const result = await provider.getList({
            resource: "ResourceForGetListWithLimits",
            pagination: { pageSize: 3 },
        });
        expect(result.total).toEqual(4);
        expect(
            Array.from(result.data).sort((a, b) => a.priority - b.priority),
        ).toEqual([
            {
                id: "id0",
                priority: 0,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForGetListWithLimit",
            },
            {
                id: "id1",
                priority: 1,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForGetListWithLimit",
            },
            {
                id: "id2",
                priority: 2,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForGetListWithLimit",
            },
        ]);
    });

    test("getList - logical filter", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });

        // create resource
        for (let i = 0; i < 5; i++) {
            await provider.create({
                resource: "ResourceForGetListWithLogicalFilters",
                variables: { id: `id${i}`, priority: i },
            });
        }

        const result = await provider.getList({
            resource: "ResourceForGetListWithLogicalFilters",
            filters: [
                {
                    field: "priority",
                    operator: "eq",
                    value: 1,
                }
            ],
        });

        expect(result).toEqual({
            data: [
                {
                    id: "id1",
                    priority: 1,
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    __typename: "ResourceForGetListWithLogicalFilter",
                },
            ],
            total: 1,
        });
    });

    test("getList - conditional filter", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });

        // create resource
        for (let i = 0; i < 5; i++) {
            await provider.create({
                resource: "ResourceForGetListWithConditionalFilters",
                variables: { id: `id${i}`, priority: i },
            });
        }

        const result = await provider.getList({
            resource: "ResourceForGetListWithConditionalFilters",
            filters: [
                {
                    operator: "or",
                    value: [{
                        field: "priority",
                        operator: "eq",
                        value: 1,
                    }, {
                        field: "priority",
                        operator: "eq",
                        value: 2,
                    }],
                }
            ],
        });

        expect(result).toEqual({
            data: [
                {
                    id: "id1",
                    priority: 1,
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    __typename: "ResourceForGetListWithConditionalFilter",
                },
                {
                    id: "id2",
                    priority: 2,
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    __typename: "ResourceForGetListWithConditionalFilter",
                },
            ],
            total: 2,
        });
    });

    test("update", async () => {
        const client = generateClient();
        const provider = dataProvider(client, { queries, mutations });

        // create resource
        await provider.create({
            resource: "ResourceForUpdates",
            variables: { id: "id0", priority: 0 },
        });

        // update resource
        const result = await provider.update({
            resource: "ResourceForUpdates",
            id: "id0",
            variables: { priority: 100 },
        });

        expect(result).toEqual({
            data: {
                id: "id0",
                priority: 100,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForUpdate",
            },
        });
    });

    test("deleteOne", async () => {
        const client = generateClient();
        const provider = dataProvider(client, { queries, mutations });

        // create resource
        await provider.create({
            resource: "ResourceForDeleteOnes",
            variables: { id: "id0", priority: 0 },
        });

        // delete resource
        const result = await provider.deleteOne({
            resource: "ResourceForDeleteOnes",
            id: "id0",
        });

        expect(result).toEqual({
            data: {
                id: "id0",
                priority: 0,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForDeleteOne",
            },
        });

        // after deletion, the resource should not be found
        expect(async () => {
            await provider.getOne({
                resource: "ResourceForDeleteOnes",
                id: "id0",
            });
        }).rejects.toThrow();
    });

    test("getOne", async () => {
        const client = generateClient();
        const provider = dataProvider(client, { queries, mutations });

        // resource not found
        await expect(async () => {
            await provider.getOne({
                resource: "ResourceForGetOnes",
                id: "id0",
            });
        }).rejects.toThrow();

        // create resource
        await provider.create({
            resource: "ResourceForGetOnes",
            variables: { id: "id0", priority: 0 },
        });

        // get resource
        const result = await provider.getOne({
            resource: "ResourceForGetOnes",
            id: "id0",
        });
        expect(result).toEqual({
            data: {
                id: "id0",
                priority: 0,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForGetOne",
            },
        });
    });

    test("getMany", async () => {
        const client = generateClient();
        const provider = dataProvider(client, { queries, mutations });

        for (let i = 0; i < 5; i++) {
            // create resource
            await provider.create({
                resource: "ResourceForGetManys",
                variables: { id: `id${i}`, priority: i },
            });
        }

        // get resource
        const result = await provider.getMany({
            resource: "ResourceForGetManys", // Manys? Manies?
            ids: ["id0", "id1", "id2"],
        });
        expect(result).toEqual({
            data: [
                {
                    id: "id0",
                    priority: 0,
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    __typename: "ResourceForGetMany",
                },
                {
                    id: "id1",
                    priority: 1,
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    __typename: "ResourceForGetMany",
                },
                {
                    id: "id2",
                    priority: 2,
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    __typename: "ResourceForGetMany",
                },
            ],
        });
    });
});
