/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getResourceForGetList = /* GraphQL */ `query GetResourceForGetList($id: ID!) {
  getResourceForGetList(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForGetListQueryVariables,
  APITypes.GetResourceForGetListQuery
>;
export const listResourceForGetLists = /* GraphQL */ `query ListResourceForGetLists(
  $filter: ModelResourceForGetListFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForGetLists(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForGetListsQueryVariables,
  APITypes.ListResourceForGetListsQuery
>;
export const getResourceForGetListWithLimit = /* GraphQL */ `query GetResourceForGetListWithLimit($id: ID!) {
  getResourceForGetListWithLimit(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForGetListWithLimitQueryVariables,
  APITypes.GetResourceForGetListWithLimitQuery
>;
export const listResourceForGetListWithLimits = /* GraphQL */ `query ListResourceForGetListWithLimits(
  $filter: ModelResourceForGetListWithLimitFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForGetListWithLimits(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForGetListWithLimitsQueryVariables,
  APITypes.ListResourceForGetListWithLimitsQuery
>;
export const getResourceForGetListWithLogicalFilter = /* GraphQL */ `query GetResourceForGetListWithLogicalFilter($id: ID!) {
  getResourceForGetListWithLogicalFilter(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForGetListWithLogicalFilterQueryVariables,
  APITypes.GetResourceForGetListWithLogicalFilterQuery
>;
export const listResourceForGetListWithLogicalFilters = /* GraphQL */ `query ListResourceForGetListWithLogicalFilters(
  $filter: ModelResourceForGetListWithLogicalFilterFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForGetListWithLogicalFilters(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForGetListWithLogicalFiltersQueryVariables,
  APITypes.ListResourceForGetListWithLogicalFiltersQuery
>;
export const getResourceForGetListWithConditionalFilter = /* GraphQL */ `query GetResourceForGetListWithConditionalFilter($id: ID!) {
  getResourceForGetListWithConditionalFilter(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForGetListWithConditionalFilterQueryVariables,
  APITypes.GetResourceForGetListWithConditionalFilterQuery
>;
export const listResourceForGetListWithConditionalFilters = /* GraphQL */ `query ListResourceForGetListWithConditionalFilters(
  $filter: ModelResourceForGetListWithConditionalFilterFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForGetListWithConditionalFilters(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForGetListWithConditionalFiltersQueryVariables,
  APITypes.ListResourceForGetListWithConditionalFiltersQuery
>;
export const getResourceForGetListWithSorter = /* GraphQL */ `query GetResourceForGetListWithSorter($id: ID!) {
  getResourceForGetListWithSorter(id: $id) {
    id
    priority
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForGetListWithSorterQueryVariables,
  APITypes.GetResourceForGetListWithSorterQuery
>;
export const listResourceForGetListWithSorters = /* GraphQL */ `query ListResourceForGetListWithSorters(
  $filter: ModelResourceForGetListWithSorterFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForGetListWithSorters(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForGetListWithSortersQueryVariables,
  APITypes.ListResourceForGetListWithSortersQuery
>;
export const getResourceForGetListWithPagination = /* GraphQL */ `query GetResourceForGetListWithPagination($id: ID!) {
  getResourceForGetListWithPagination(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForGetListWithPaginationQueryVariables,
  APITypes.GetResourceForGetListWithPaginationQuery
>;
export const listResourceForGetListWithPaginations = /* GraphQL */ `query ListResourceForGetListWithPaginations(
  $filter: ModelResourceForGetListWithPaginationFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForGetListWithPaginations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForGetListWithPaginationsQueryVariables,
  APITypes.ListResourceForGetListWithPaginationsQuery
>;
export const getResourceForCreate = /* GraphQL */ `query GetResourceForCreate($id: ID!) {
  getResourceForCreate(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForCreateQueryVariables,
  APITypes.GetResourceForCreateQuery
>;
export const listResourceForCreates = /* GraphQL */ `query ListResourceForCreates(
  $filter: ModelResourceForCreateFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForCreates(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForCreatesQueryVariables,
  APITypes.ListResourceForCreatesQuery
>;
export const getResourceForUpdate = /* GraphQL */ `query GetResourceForUpdate($id: ID!) {
  getResourceForUpdate(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForUpdateQueryVariables,
  APITypes.GetResourceForUpdateQuery
>;
export const listResourceForUpdates = /* GraphQL */ `query ListResourceForUpdates(
  $filter: ModelResourceForUpdateFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForUpdates(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForUpdatesQueryVariables,
  APITypes.ListResourceForUpdatesQuery
>;
export const getResourceForDeleteOne = /* GraphQL */ `query GetResourceForDeleteOne($id: ID!) {
  getResourceForDeleteOne(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForDeleteOneQueryVariables,
  APITypes.GetResourceForDeleteOneQuery
>;
export const listResourceForDeleteOnes = /* GraphQL */ `query ListResourceForDeleteOnes(
  $filter: ModelResourceForDeleteOneFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForDeleteOnes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForDeleteOnesQueryVariables,
  APITypes.ListResourceForDeleteOnesQuery
>;
export const getResourceForGetOne = /* GraphQL */ `query GetResourceForGetOne($id: ID!) {
  getResourceForGetOne(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForGetOneQueryVariables,
  APITypes.GetResourceForGetOneQuery
>;
export const listResourceForGetOnes = /* GraphQL */ `query ListResourceForGetOnes(
  $filter: ModelResourceForGetOneFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForGetOnes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForGetOnesQueryVariables,
  APITypes.ListResourceForGetOnesQuery
>;
export const getResourceForGetMany = /* GraphQL */ `query GetResourceForGetMany($id: ID!) {
  getResourceForGetMany(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForGetManyQueryVariables,
  APITypes.GetResourceForGetManyQuery
>;
export const listResourceForGetManies = /* GraphQL */ `query ListResourceForGetManies(
  $filter: ModelResourceForGetManyFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForGetManies(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForGetManiesQueryVariables,
  APITypes.ListResourceForGetManiesQuery
>;
export const getResourceForCreateMany = /* GraphQL */ `query GetResourceForCreateMany($id: ID!) {
  getResourceForCreateMany(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForCreateManyQueryVariables,
  APITypes.GetResourceForCreateManyQuery
>;
export const listResourceForCreateManies = /* GraphQL */ `query ListResourceForCreateManies(
  $filter: ModelResourceForCreateManyFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForCreateManies(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForCreateManiesQueryVariables,
  APITypes.ListResourceForCreateManiesQuery
>;
export const getResourceForDeleteMany = /* GraphQL */ `query GetResourceForDeleteMany($id: ID!) {
  getResourceForDeleteMany(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForDeleteManyQueryVariables,
  APITypes.GetResourceForDeleteManyQuery
>;
export const listResourceForDeleteManies = /* GraphQL */ `query ListResourceForDeleteManies(
  $filter: ModelResourceForDeleteManyFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForDeleteManies(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForDeleteManiesQueryVariables,
  APITypes.ListResourceForDeleteManiesQuery
>;
export const getResourceForUpdateMany = /* GraphQL */ `query GetResourceForUpdateMany($id: ID!) {
  getResourceForUpdateMany(id: $id) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceForUpdateManyQueryVariables,
  APITypes.GetResourceForUpdateManyQuery
>;
export const listResourceForUpdateManies = /* GraphQL */ `query ListResourceForUpdateManies(
  $filter: ModelResourceForUpdateManyFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForUpdateManies(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForUpdateManiesQueryVariables,
  APITypes.ListResourceForUpdateManiesQuery
>;
export const listResourceForGetListWithSortersByCreatedAt = /* GraphQL */ `query ListResourceForGetListWithSortersByCreatedAt(
  $type: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelResourceForGetListWithSorterFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceForGetListWithSortersByCreatedAt(
    type: $type
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceForGetListWithSortersByCreatedAtQueryVariables,
  APITypes.ListResourceForGetListWithSortersByCreatedAtQuery
>;
