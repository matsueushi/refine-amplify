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
    name
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
      name
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
    name
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
      name
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
export const getResourceForCreate = /* GraphQL */ `query GetResourceForCreate($id: ID!) {
  getResourceForCreate(id: $id) {
    id
    name
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
      name
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
    name
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
      name
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
    name
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
      name
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
    name
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
      name
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
    name
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
      name
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
