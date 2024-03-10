/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createResourceForGetList = /* GraphQL */ `mutation CreateResourceForGetList(
  $input: CreateResourceForGetListInput!
  $condition: ModelResourceForGetListConditionInput
) {
  createResourceForGetList(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateResourceForGetListMutationVariables,
  APITypes.CreateResourceForGetListMutation
>;
export const updateResourceForGetList = /* GraphQL */ `mutation UpdateResourceForGetList(
  $input: UpdateResourceForGetListInput!
  $condition: ModelResourceForGetListConditionInput
) {
  updateResourceForGetList(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateResourceForGetListMutationVariables,
  APITypes.UpdateResourceForGetListMutation
>;
export const deleteResourceForGetList = /* GraphQL */ `mutation DeleteResourceForGetList(
  $input: DeleteResourceForGetListInput!
  $condition: ModelResourceForGetListConditionInput
) {
  deleteResourceForGetList(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceForGetListMutationVariables,
  APITypes.DeleteResourceForGetListMutation
>;
export const createResourceForGetListWithLimit = /* GraphQL */ `mutation CreateResourceForGetListWithLimit(
  $input: CreateResourceForGetListWithLimitInput!
  $condition: ModelResourceForGetListWithLimitConditionInput
) {
  createResourceForGetListWithLimit(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateResourceForGetListWithLimitMutationVariables,
  APITypes.CreateResourceForGetListWithLimitMutation
>;
export const updateResourceForGetListWithLimit = /* GraphQL */ `mutation UpdateResourceForGetListWithLimit(
  $input: UpdateResourceForGetListWithLimitInput!
  $condition: ModelResourceForGetListWithLimitConditionInput
) {
  updateResourceForGetListWithLimit(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateResourceForGetListWithLimitMutationVariables,
  APITypes.UpdateResourceForGetListWithLimitMutation
>;
export const deleteResourceForGetListWithLimit = /* GraphQL */ `mutation DeleteResourceForGetListWithLimit(
  $input: DeleteResourceForGetListWithLimitInput!
  $condition: ModelResourceForGetListWithLimitConditionInput
) {
  deleteResourceForGetListWithLimit(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceForGetListWithLimitMutationVariables,
  APITypes.DeleteResourceForGetListWithLimitMutation
>;
export const createResourceForGetListWithLogicalFilter = /* GraphQL */ `mutation CreateResourceForGetListWithLogicalFilter(
  $input: CreateResourceForGetListWithLogicalFilterInput!
  $condition: ModelResourceForGetListWithLogicalFilterConditionInput
) {
  createResourceForGetListWithLogicalFilter(
    input: $input
    condition: $condition
  ) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateResourceForGetListWithLogicalFilterMutationVariables,
  APITypes.CreateResourceForGetListWithLogicalFilterMutation
>;
export const updateResourceForGetListWithLogicalFilter = /* GraphQL */ `mutation UpdateResourceForGetListWithLogicalFilter(
  $input: UpdateResourceForGetListWithLogicalFilterInput!
  $condition: ModelResourceForGetListWithLogicalFilterConditionInput
) {
  updateResourceForGetListWithLogicalFilter(
    input: $input
    condition: $condition
  ) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateResourceForGetListWithLogicalFilterMutationVariables,
  APITypes.UpdateResourceForGetListWithLogicalFilterMutation
>;
export const deleteResourceForGetListWithLogicalFilter = /* GraphQL */ `mutation DeleteResourceForGetListWithLogicalFilter(
  $input: DeleteResourceForGetListWithLogicalFilterInput!
  $condition: ModelResourceForGetListWithLogicalFilterConditionInput
) {
  deleteResourceForGetListWithLogicalFilter(
    input: $input
    condition: $condition
  ) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceForGetListWithLogicalFilterMutationVariables,
  APITypes.DeleteResourceForGetListWithLogicalFilterMutation
>;
export const createResourceForGetListWithConditionalFilter = /* GraphQL */ `mutation CreateResourceForGetListWithConditionalFilter(
  $input: CreateResourceForGetListWithConditionalFilterInput!
  $condition: ModelResourceForGetListWithConditionalFilterConditionInput
) {
  createResourceForGetListWithConditionalFilter(
    input: $input
    condition: $condition
  ) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateResourceForGetListWithConditionalFilterMutationVariables,
  APITypes.CreateResourceForGetListWithConditionalFilterMutation
>;
export const updateResourceForGetListWithConditionalFilter = /* GraphQL */ `mutation UpdateResourceForGetListWithConditionalFilter(
  $input: UpdateResourceForGetListWithConditionalFilterInput!
  $condition: ModelResourceForGetListWithConditionalFilterConditionInput
) {
  updateResourceForGetListWithConditionalFilter(
    input: $input
    condition: $condition
  ) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateResourceForGetListWithConditionalFilterMutationVariables,
  APITypes.UpdateResourceForGetListWithConditionalFilterMutation
>;
export const deleteResourceForGetListWithConditionalFilter = /* GraphQL */ `mutation DeleteResourceForGetListWithConditionalFilter(
  $input: DeleteResourceForGetListWithConditionalFilterInput!
  $condition: ModelResourceForGetListWithConditionalFilterConditionInput
) {
  deleteResourceForGetListWithConditionalFilter(
    input: $input
    condition: $condition
  ) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceForGetListWithConditionalFilterMutationVariables,
  APITypes.DeleteResourceForGetListWithConditionalFilterMutation
>;
export const createResourceForGetListWithSorter = /* GraphQL */ `mutation CreateResourceForGetListWithSorter(
  $input: CreateResourceForGetListWithSorterInput!
  $condition: ModelResourceForGetListWithSorterConditionInput
) {
  createResourceForGetListWithSorter(input: $input, condition: $condition) {
    id
    priority
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateResourceForGetListWithSorterMutationVariables,
  APITypes.CreateResourceForGetListWithSorterMutation
>;
export const updateResourceForGetListWithSorter = /* GraphQL */ `mutation UpdateResourceForGetListWithSorter(
  $input: UpdateResourceForGetListWithSorterInput!
  $condition: ModelResourceForGetListWithSorterConditionInput
) {
  updateResourceForGetListWithSorter(input: $input, condition: $condition) {
    id
    priority
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateResourceForGetListWithSorterMutationVariables,
  APITypes.UpdateResourceForGetListWithSorterMutation
>;
export const deleteResourceForGetListWithSorter = /* GraphQL */ `mutation DeleteResourceForGetListWithSorter(
  $input: DeleteResourceForGetListWithSorterInput!
  $condition: ModelResourceForGetListWithSorterConditionInput
) {
  deleteResourceForGetListWithSorter(input: $input, condition: $condition) {
    id
    priority
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceForGetListWithSorterMutationVariables,
  APITypes.DeleteResourceForGetListWithSorterMutation
>;
export const createResourceForGetListWithPagination = /* GraphQL */ `mutation CreateResourceForGetListWithPagination(
  $input: CreateResourceForGetListWithPaginationInput!
  $condition: ModelResourceForGetListWithPaginationConditionInput
) {
  createResourceForGetListWithPagination(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateResourceForGetListWithPaginationMutationVariables,
  APITypes.CreateResourceForGetListWithPaginationMutation
>;
export const updateResourceForGetListWithPagination = /* GraphQL */ `mutation UpdateResourceForGetListWithPagination(
  $input: UpdateResourceForGetListWithPaginationInput!
  $condition: ModelResourceForGetListWithPaginationConditionInput
) {
  updateResourceForGetListWithPagination(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateResourceForGetListWithPaginationMutationVariables,
  APITypes.UpdateResourceForGetListWithPaginationMutation
>;
export const deleteResourceForGetListWithPagination = /* GraphQL */ `mutation DeleteResourceForGetListWithPagination(
  $input: DeleteResourceForGetListWithPaginationInput!
  $condition: ModelResourceForGetListWithPaginationConditionInput
) {
  deleteResourceForGetListWithPagination(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceForGetListWithPaginationMutationVariables,
  APITypes.DeleteResourceForGetListWithPaginationMutation
>;
export const createResourceForCreate = /* GraphQL */ `mutation CreateResourceForCreate(
  $input: CreateResourceForCreateInput!
  $condition: ModelResourceForCreateConditionInput
) {
  createResourceForCreate(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateResourceForCreateMutationVariables,
  APITypes.CreateResourceForCreateMutation
>;
export const updateResourceForCreate = /* GraphQL */ `mutation UpdateResourceForCreate(
  $input: UpdateResourceForCreateInput!
  $condition: ModelResourceForCreateConditionInput
) {
  updateResourceForCreate(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateResourceForCreateMutationVariables,
  APITypes.UpdateResourceForCreateMutation
>;
export const deleteResourceForCreate = /* GraphQL */ `mutation DeleteResourceForCreate(
  $input: DeleteResourceForCreateInput!
  $condition: ModelResourceForCreateConditionInput
) {
  deleteResourceForCreate(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceForCreateMutationVariables,
  APITypes.DeleteResourceForCreateMutation
>;
export const createResourceForUpdate = /* GraphQL */ `mutation CreateResourceForUpdate(
  $input: CreateResourceForUpdateInput!
  $condition: ModelResourceForUpdateConditionInput
) {
  createResourceForUpdate(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateResourceForUpdateMutationVariables,
  APITypes.CreateResourceForUpdateMutation
>;
export const updateResourceForUpdate = /* GraphQL */ `mutation UpdateResourceForUpdate(
  $input: UpdateResourceForUpdateInput!
  $condition: ModelResourceForUpdateConditionInput
) {
  updateResourceForUpdate(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateResourceForUpdateMutationVariables,
  APITypes.UpdateResourceForUpdateMutation
>;
export const deleteResourceForUpdate = /* GraphQL */ `mutation DeleteResourceForUpdate(
  $input: DeleteResourceForUpdateInput!
  $condition: ModelResourceForUpdateConditionInput
) {
  deleteResourceForUpdate(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceForUpdateMutationVariables,
  APITypes.DeleteResourceForUpdateMutation
>;
export const createResourceForDeleteOne = /* GraphQL */ `mutation CreateResourceForDeleteOne(
  $input: CreateResourceForDeleteOneInput!
  $condition: ModelResourceForDeleteOneConditionInput
) {
  createResourceForDeleteOne(input: $input, condition: $condition) {
    id
    priority
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
    priority
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
    priority
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
    priority
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
    priority
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
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceForGetOneMutationVariables,
  APITypes.DeleteResourceForGetOneMutation
>;
export const createResourceForGetMany = /* GraphQL */ `mutation CreateResourceForGetMany(
  $input: CreateResourceForGetManyInput!
  $condition: ModelResourceForGetManyConditionInput
) {
  createResourceForGetMany(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateResourceForGetManyMutationVariables,
  APITypes.CreateResourceForGetManyMutation
>;
export const updateResourceForGetMany = /* GraphQL */ `mutation UpdateResourceForGetMany(
  $input: UpdateResourceForGetManyInput!
  $condition: ModelResourceForGetManyConditionInput
) {
  updateResourceForGetMany(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateResourceForGetManyMutationVariables,
  APITypes.UpdateResourceForGetManyMutation
>;
export const deleteResourceForGetMany = /* GraphQL */ `mutation DeleteResourceForGetMany(
  $input: DeleteResourceForGetManyInput!
  $condition: ModelResourceForGetManyConditionInput
) {
  deleteResourceForGetMany(input: $input, condition: $condition) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceForGetManyMutationVariables,
  APITypes.DeleteResourceForGetManyMutation
>;
