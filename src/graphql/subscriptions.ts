/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateResourceForDeleteOne = /* GraphQL */ `subscription OnCreateResourceForDeleteOne(
  $filter: ModelSubscriptionResourceForDeleteOneFilterInput
) {
  onCreateResourceForDeleteOne(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateResourceForDeleteOneSubscriptionVariables,
  APITypes.OnCreateResourceForDeleteOneSubscription
>;
export const onUpdateResourceForDeleteOne = /* GraphQL */ `subscription OnUpdateResourceForDeleteOne(
  $filter: ModelSubscriptionResourceForDeleteOneFilterInput
) {
  onUpdateResourceForDeleteOne(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateResourceForDeleteOneSubscriptionVariables,
  APITypes.OnUpdateResourceForDeleteOneSubscription
>;
export const onDeleteResourceForDeleteOne = /* GraphQL */ `subscription OnDeleteResourceForDeleteOne(
  $filter: ModelSubscriptionResourceForDeleteOneFilterInput
) {
  onDeleteResourceForDeleteOne(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourceForDeleteOneSubscriptionVariables,
  APITypes.OnDeleteResourceForDeleteOneSubscription
>;
export const onCreateResourceForGetOne = /* GraphQL */ `subscription OnCreateResourceForGetOne(
  $filter: ModelSubscriptionResourceForGetOneFilterInput
) {
  onCreateResourceForGetOne(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateResourceForGetOneSubscriptionVariables,
  APITypes.OnCreateResourceForGetOneSubscription
>;
export const onUpdateResourceForGetOne = /* GraphQL */ `subscription OnUpdateResourceForGetOne(
  $filter: ModelSubscriptionResourceForGetOneFilterInput
) {
  onUpdateResourceForGetOne(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateResourceForGetOneSubscriptionVariables,
  APITypes.OnUpdateResourceForGetOneSubscription
>;
export const onDeleteResourceForGetOne = /* GraphQL */ `subscription OnDeleteResourceForGetOne(
  $filter: ModelSubscriptionResourceForGetOneFilterInput
) {
  onDeleteResourceForGetOne(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourceForGetOneSubscriptionVariables,
  APITypes.OnDeleteResourceForGetOneSubscription
>;
