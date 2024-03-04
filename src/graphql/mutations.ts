/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createResourceForDeleteOne = /* GraphQL */ `mutation CreateResourceForDeleteOne(
  $input: CreateResourceForDeleteOneInput!
  $condition: ModelResourceForDeleteOneConditionInput
) {
  createResourceForDeleteOne(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateResourceForDeleteOneMutationVariables,
  APITypes.CreateResourceForDeleteOneMutation
>;
export const updateResourceForDeleteOne = /* GraphQL */ `mutation UpdateResourceForDeleteOne(
  $input: UpdateResourceForDeleteOneInput!
  $condition: ModelResourceForDeleteOneConditionInput
) {
  updateResourceForDeleteOne(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateResourceForDeleteOneMutationVariables,
  APITypes.UpdateResourceForDeleteOneMutation
>;
export const deleteResourceForDeleteOne = /* GraphQL */ `mutation DeleteResourceForDeleteOne(
  $input: DeleteResourceForDeleteOneInput!
  $condition: ModelResourceForDeleteOneConditionInput
) {
  deleteResourceForDeleteOne(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceForDeleteOneMutationVariables,
  APITypes.DeleteResourceForDeleteOneMutation
>;
export const createResourceForGetOne = /* GraphQL */ `mutation CreateResourceForGetOne(
  $input: CreateResourceForGetOneInput!
  $condition: ModelResourceForGetOneConditionInput
) {
  createResourceForGetOne(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateResourceForGetOneMutationVariables,
  APITypes.CreateResourceForGetOneMutation
>;
export const updateResourceForGetOne = /* GraphQL */ `mutation UpdateResourceForGetOne(
  $input: UpdateResourceForGetOneInput!
  $condition: ModelResourceForGetOneConditionInput
) {
  updateResourceForGetOne(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateResourceForGetOneMutationVariables,
  APITypes.UpdateResourceForGetOneMutation
>;
export const deleteResourceForGetOne = /* GraphQL */ `mutation DeleteResourceForGetOne(
  $input: DeleteResourceForGetOneInput!
  $condition: ModelResourceForGetOneConditionInput
) {
  deleteResourceForGetOne(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceForGetOneMutationVariables,
  APITypes.DeleteResourceForGetOneMutation
>;
