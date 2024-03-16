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

    test("getList - limit", async () => {
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

    test("getList - sorter", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });

        // create resource
        for (let i = 0; i < 3; i++) {
            await provider.create({
                resource: "ResourceForGetListWithSorters",
                variables: { id: `id${i}`, type: "ResourceForGetListWithSorter", priority: i },
            });
        }

        const result = await provider.getList({
            resource: "ResourceForGetListWithSorters",
            sorters: [
                {
                    field: "createdAt",
                    order: "desc",
                }
            ],
            meta: {
                operation: "listResourceForGetListWithSortersByCreatedAt"
            }
        });

        expect(result).toEqual({
            data: [
                {
                    id: "id2",
                    priority: 2,
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    type: "ResourceForGetListWithSorter",
                    __typename: "ResourceForGetListWithSorter",
                },
                {
                    id: "id1",
                    priority: 1,
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    type: "ResourceForGetListWithSorter",
                    __typename: "ResourceForGetListWithSorter",
                },
                {
                    id: "id0",
                    priority: 0,
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    type: "ResourceForGetListWithSorter",
                    __typename: "ResourceForGetListWithSorter",
                },
            ],
            total: 3,
        });
    });

    test("getList - pagination", async () => {
        const client = generateClient();

        const provider = dataProvider(client, { queries, mutations });

        // create resource
        for (let i = 0; i < 5; i++) {
            await provider.create({
                resource: "ResourceForGetListWithPaginations",
                variables: { id: `id${i}`, type: "ResourceForGetListWithPagination", priority: i },
            });
        }

        const result1 = await provider.getList({
            resource: "ResourceForGetListWithPaginations",
            pagination: { current: 1, pageSize: 2 },
            sorters: [
                {
                    field: "createdAt",
                    order: "asc",
                }
            ],
            meta: {
                operation: "listResourceForGetListWithPaginationsByCreatedAt"
            }
        });
        expect(result1.total).toEqual(3);
        expect(
            Array.from(result1.data).sort((a, b) => a.priority - b.priority),
        ).toEqual([
            {
                id: "id0",
                priority: 0,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                type: "ResourceForGetListWithPagination",
                __typename: "ResourceForGetListWithPagination",
            },
            {
                id: "id1",
                priority: 1,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                type: "ResourceForGetListWithPagination",
                __typename: "ResourceForGetListWithPagination",
            },
        ]);

        const result2 = await provider.getList({
            resource: "ResourceForGetListWithPaginations",
            pagination: { current: 2, pageSize: 2 },
            sorters: [
                {
                    field: "createdAt",
                    order: "asc",
                }
            ],
            meta: {
                operation: "listResourceForGetListWithPaginationsByCreatedAt"
            }
        });
        expect(result2.total).toEqual(5);
        expect(
            Array.from(result2.data).sort((a, b) => a.priority - b.priority),
        ).toEqual([
            {
                id: "id2",
                priority: 2,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                type: "ResourceForGetListWithPagination",
                __typename: "ResourceForGetListWithPagination",
            },
            {
                id: "id3",
                priority: 3,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                type: "ResourceForGetListWithPagination",
                __typename: "ResourceForGetListWithPagination",
            },
        ]);

        const result3 = await provider.getList({
            resource: "ResourceForGetListWithPaginations",
            pagination: { current: 3, pageSize: 2 },
            sorters: [
                {
                    field: "createdAt",
                    order: "asc",
                }
            ],
            meta: {
                operation: "listResourceForGetListWithPaginationsByCreatedAt"
            }
        });

        expect(result3.total).toEqual(5);
        expect(
            Array.from(result3.data).sort((a, b) => a.priority - b.priority),
        ).toEqual([
            {
                id: "id4",
                priority: 4,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                type: "ResourceForGetListWithPagination",
                __typename: "ResourceForGetListWithPagination",
            },
        ]);

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
                resource: "ResourceForGetManies",
                variables: { id: `id${i}`, priority: i },
            });
        }

        // get resource
        const result = await provider.getMany({
            resource: "ResourceForGetManies", // Manies? Manies?
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

    test("createMany", async () => {
        const client = generateClient();
        const provider = dataProvider(client, { queries, mutations });

        await provider.createMany({
            resource: "ResourceForCreateManies",
            variables: [{ id: "id0", priority: 0 }, { id: "id1", priority: 1 }],
        });

        const result = await provider.getList({ resource: "ResourceForCreateManies" });
        expect(result.total).toEqual(2);
        expect(
            Array.from(result.data).sort((a, b) => a.priority - b.priority),
        ).toEqual([
            {
                id: "id0",
                priority: 0,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForCreateMany",
            },
            {
                id: "id1",
                priority: 1,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForCreateMany",
            },
        ]);
    });

    test("deleteMany", async () => {
        const client = generateClient();
        const provider = dataProvider(client, { queries, mutations });

        for (let i = 0; i < 5; i++) {
            // create resource
            await provider.create({
                resource: "ResourceForDeleteManies",
                variables: { id: `id${i}`, priority: i },
            });
        }

        const result = await provider.deleteMany({
            resource: "ResourceForDeleteManies",
            ids: ["id0", "id2", "id4"],
        });
        expect(
            Array.from(result.data).sort((a, b) => a.priority - b.priority),
        ).toEqual([
            {
                id: "id0",
                priority: 0,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForDeleteMany",
            },
            {
                id: "id2",
                priority: 2,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForDeleteMany",
            },
            {
                id: "id4",
                priority: 4,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForDeleteMany",
            },
        ]);

        const getListResult = await provider.getList({ resource: "ResourceForDeleteManies" });
        expect(getListResult.total).toEqual(2);
        expect(
            Array.from(getListResult.data).sort((a, b) => a.priority - b.priority),
        ).toEqual([
            {
                id: "id1",
                priority: 1,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForDeleteMany",
            },
            {
                id: "id3",
                priority: 3,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForDeleteMany",
            },
        ]);
    });

    test("updateMany", async () => {
        const client = generateClient();
        const provider = dataProvider(client, { queries, mutations });

        for (let i = 0; i < 3; i++) {
            // create resource
            await provider.create({
                resource: "ResourceForUpdateManies",
                variables: { id: `id${i}`, priority: i },
            });
        }

        // update resource
        const result = await provider.updateMany({
            resource: "ResourceForUpdateManies",
            ids: ["id0", "id1"],
            variables: { priority: 100 },
        });

        expect(result).toEqual({
            data: [{
                id: "id0",
                priority: 100,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForUpdateMany",
            },
            {
                id: "id1",
                priority: 100,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                __typename: "ResourceForUpdateMany",
            }]
        });
    });
});
