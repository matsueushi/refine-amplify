/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
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
