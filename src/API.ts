/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateResourceForGetListInput = {
  id?: string | null,
  name: string,
  priority: number,
};

export type ModelResourceForGetListConditionInput = {
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListConditionInput | null > | null,
  or?: Array< ModelResourceForGetListConditionInput | null > | null,
  not?: ModelResourceForGetListConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ResourceForGetList = {
  __typename: "ResourceForGetList",
  id: string,
  name: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetListInput = {
  id: string,
  name?: string | null,
  priority?: number | null,
};

export type DeleteResourceForGetListInput = {
  id: string,
};

export type CreateResourceForGetListWithLimitInput = {
  id?: string | null,
  name: string,
  priority: number,
};

export type ModelResourceForGetListWithLimitConditionInput = {
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListWithLimitConditionInput | null > | null,
  or?: Array< ModelResourceForGetListWithLimitConditionInput | null > | null,
  not?: ModelResourceForGetListWithLimitConditionInput | null,
};

export type ResourceForGetListWithLimit = {
  __typename: "ResourceForGetListWithLimit",
  id: string,
  name: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetListWithLimitInput = {
  id: string,
  name?: string | null,
  priority?: number | null,
};

export type DeleteResourceForGetListWithLimitInput = {
  id: string,
};

export type CreateResourceForGetListWithLogicalFilterInput = {
  id?: string | null,
  name: string,
  priority: number,
};

export type ModelResourceForGetListWithLogicalFilterConditionInput = {
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListWithLogicalFilterConditionInput | null > | null,
  or?: Array< ModelResourceForGetListWithLogicalFilterConditionInput | null > | null,
  not?: ModelResourceForGetListWithLogicalFilterConditionInput | null,
};

export type ResourceForGetListWithLogicalFilter = {
  __typename: "ResourceForGetListWithLogicalFilter",
  id: string,
  name: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetListWithLogicalFilterInput = {
  id: string,
  name?: string | null,
  priority?: number | null,
};

export type DeleteResourceForGetListWithLogicalFilterInput = {
  id: string,
};

export type CreateResourceForGetListWithConditionalFilterInput = {
  id?: string | null,
  name: string,
  priority: number,
};

export type ModelResourceForGetListWithConditionalFilterConditionInput = {
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListWithConditionalFilterConditionInput | null > | null,
  or?: Array< ModelResourceForGetListWithConditionalFilterConditionInput | null > | null,
  not?: ModelResourceForGetListWithConditionalFilterConditionInput | null,
};

export type ResourceForGetListWithConditionalFilter = {
  __typename: "ResourceForGetListWithConditionalFilter",
  id: string,
  name: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetListWithConditionalFilterInput = {
  id: string,
  name?: string | null,
  priority?: number | null,
};

export type DeleteResourceForGetListWithConditionalFilterInput = {
  id: string,
};

export type CreateResourceForCreateInput = {
  id?: string | null,
  name: string,
};

export type ModelResourceForCreateConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelResourceForCreateConditionInput | null > | null,
  or?: Array< ModelResourceForCreateConditionInput | null > | null,
  not?: ModelResourceForCreateConditionInput | null,
};

export type ResourceForCreate = {
  __typename: "ResourceForCreate",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForCreateInput = {
  id: string,
  name?: string | null,
};

export type DeleteResourceForCreateInput = {
  id: string,
};

export type CreateResourceForUpdateInput = {
  id?: string | null,
  name: string,
};

export type ModelResourceForUpdateConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelResourceForUpdateConditionInput | null > | null,
  or?: Array< ModelResourceForUpdateConditionInput | null > | null,
  not?: ModelResourceForUpdateConditionInput | null,
};

export type ResourceForUpdate = {
  __typename: "ResourceForUpdate",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForUpdateInput = {
  id: string,
  name?: string | null,
};

export type DeleteResourceForUpdateInput = {
  id: string,
};

export type CreateResourceForDeleteOneInput = {
  id?: string | null,
  name: string,
};

export type ModelResourceForDeleteOneConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelResourceForDeleteOneConditionInput | null > | null,
  or?: Array< ModelResourceForDeleteOneConditionInput | null > | null,
  not?: ModelResourceForDeleteOneConditionInput | null,
};

export type ResourceForDeleteOne = {
  __typename: "ResourceForDeleteOne",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForDeleteOneInput = {
  id: string,
  name?: string | null,
};

export type DeleteResourceForDeleteOneInput = {
  id: string,
};

export type CreateResourceForGetOneInput = {
  id?: string | null,
  name: string,
};

export type ModelResourceForGetOneConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelResourceForGetOneConditionInput | null > | null,
  or?: Array< ModelResourceForGetOneConditionInput | null > | null,
  not?: ModelResourceForGetOneConditionInput | null,
};

export type ResourceForGetOne = {
  __typename: "ResourceForGetOne",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetOneInput = {
  id: string,
  name?: string | null,
};

export type DeleteResourceForGetOneInput = {
  id: string,
};

export type CreateResourceForGetManyInput = {
  id?: string | null,
  name: string,
  priority: number,
};

export type ModelResourceForGetManyConditionInput = {
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetManyConditionInput | null > | null,
  or?: Array< ModelResourceForGetManyConditionInput | null > | null,
  not?: ModelResourceForGetManyConditionInput | null,
};

export type ResourceForGetMany = {
  __typename: "ResourceForGetMany",
  id: string,
  name: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetManyInput = {
  id: string,
  name?: string | null,
  priority?: number | null,
};

export type DeleteResourceForGetManyInput = {
  id: string,
};

export type ModelResourceForGetListFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListFilterInput | null > | null,
  or?: Array< ModelResourceForGetListFilterInput | null > | null,
  not?: ModelResourceForGetListFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelResourceForGetListConnection = {
  __typename: "ModelResourceForGetListConnection",
  items:  Array<ResourceForGetList | null >,
  nextToken?: string | null,
};

export type ModelResourceForGetListWithLimitFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListWithLimitFilterInput | null > | null,
  or?: Array< ModelResourceForGetListWithLimitFilterInput | null > | null,
  not?: ModelResourceForGetListWithLimitFilterInput | null,
};

export type ModelResourceForGetListWithLimitConnection = {
  __typename: "ModelResourceForGetListWithLimitConnection",
  items:  Array<ResourceForGetListWithLimit | null >,
  nextToken?: string | null,
};

export type ModelResourceForGetListWithLogicalFilterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListWithLogicalFilterFilterInput | null > | null,
  or?: Array< ModelResourceForGetListWithLogicalFilterFilterInput | null > | null,
  not?: ModelResourceForGetListWithLogicalFilterFilterInput | null,
};

export type ModelResourceForGetListWithLogicalFilterConnection = {
  __typename: "ModelResourceForGetListWithLogicalFilterConnection",
  items:  Array<ResourceForGetListWithLogicalFilter | null >,
  nextToken?: string | null,
};

export type ModelResourceForGetListWithConditionalFilterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListWithConditionalFilterFilterInput | null > | null,
  or?: Array< ModelResourceForGetListWithConditionalFilterFilterInput | null > | null,
  not?: ModelResourceForGetListWithConditionalFilterFilterInput | null,
};

export type ModelResourceForGetListWithConditionalFilterConnection = {
  __typename: "ModelResourceForGetListWithConditionalFilterConnection",
  items:  Array<ResourceForGetListWithConditionalFilter | null >,
  nextToken?: string | null,
};

export type ModelResourceForCreateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelResourceForCreateFilterInput | null > | null,
  or?: Array< ModelResourceForCreateFilterInput | null > | null,
  not?: ModelResourceForCreateFilterInput | null,
};

export type ModelResourceForCreateConnection = {
  __typename: "ModelResourceForCreateConnection",
  items:  Array<ResourceForCreate | null >,
  nextToken?: string | null,
};

export type ModelResourceForUpdateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelResourceForUpdateFilterInput | null > | null,
  or?: Array< ModelResourceForUpdateFilterInput | null > | null,
  not?: ModelResourceForUpdateFilterInput | null,
};

export type ModelResourceForUpdateConnection = {
  __typename: "ModelResourceForUpdateConnection",
  items:  Array<ResourceForUpdate | null >,
  nextToken?: string | null,
};

export type ModelResourceForDeleteOneFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelResourceForDeleteOneFilterInput | null > | null,
  or?: Array< ModelResourceForDeleteOneFilterInput | null > | null,
  not?: ModelResourceForDeleteOneFilterInput | null,
};

export type ModelResourceForDeleteOneConnection = {
  __typename: "ModelResourceForDeleteOneConnection",
  items:  Array<ResourceForDeleteOne | null >,
  nextToken?: string | null,
};

export type ModelResourceForGetOneFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelResourceForGetOneFilterInput | null > | null,
  or?: Array< ModelResourceForGetOneFilterInput | null > | null,
  not?: ModelResourceForGetOneFilterInput | null,
};

export type ModelResourceForGetOneConnection = {
  __typename: "ModelResourceForGetOneConnection",
  items:  Array<ResourceForGetOne | null >,
  nextToken?: string | null,
};

export type ModelResourceForGetManyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetManyFilterInput | null > | null,
  or?: Array< ModelResourceForGetManyFilterInput | null > | null,
  not?: ModelResourceForGetManyFilterInput | null,
};

export type ModelResourceForGetManyConnection = {
  __typename: "ModelResourceForGetManyConnection",
  items:  Array<ResourceForGetMany | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionResourceForGetListFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForGetListFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetListFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionResourceForGetListWithLimitFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForGetListWithLimitFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetListWithLimitFilterInput | null > | null,
};

export type ModelSubscriptionResourceForGetListWithLogicalFilterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForGetListWithLogicalFilterFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetListWithLogicalFilterFilterInput | null > | null,
};

export type ModelSubscriptionResourceForGetListWithConditionalFilterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForGetListWithConditionalFilterFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetListWithConditionalFilterFilterInput | null > | null,
};

export type ModelSubscriptionResourceForCreateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResourceForCreateFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForCreateFilterInput | null > | null,
};

export type ModelSubscriptionResourceForUpdateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResourceForUpdateFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForUpdateFilterInput | null > | null,
};

export type ModelSubscriptionResourceForDeleteOneFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResourceForDeleteOneFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForDeleteOneFilterInput | null > | null,
};

export type ModelSubscriptionResourceForGetOneFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResourceForGetOneFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetOneFilterInput | null > | null,
};

export type ModelSubscriptionResourceForGetManyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForGetManyFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetManyFilterInput | null > | null,
};

export type CreateResourceForGetListMutationVariables = {
  input: CreateResourceForGetListInput,
  condition?: ModelResourceForGetListConditionInput | null,
};

export type CreateResourceForGetListMutation = {
  createResourceForGetList?:  {
    __typename: "ResourceForGetList",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForGetListMutationVariables = {
  input: UpdateResourceForGetListInput,
  condition?: ModelResourceForGetListConditionInput | null,
};

export type UpdateResourceForGetListMutation = {
  updateResourceForGetList?:  {
    __typename: "ResourceForGetList",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForGetListMutationVariables = {
  input: DeleteResourceForGetListInput,
  condition?: ModelResourceForGetListConditionInput | null,
};

export type DeleteResourceForGetListMutation = {
  deleteResourceForGetList?:  {
    __typename: "ResourceForGetList",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForGetListWithLimitMutationVariables = {
  input: CreateResourceForGetListWithLimitInput,
  condition?: ModelResourceForGetListWithLimitConditionInput | null,
};

export type CreateResourceForGetListWithLimitMutation = {
  createResourceForGetListWithLimit?:  {
    __typename: "ResourceForGetListWithLimit",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForGetListWithLimitMutationVariables = {
  input: UpdateResourceForGetListWithLimitInput,
  condition?: ModelResourceForGetListWithLimitConditionInput | null,
};

export type UpdateResourceForGetListWithLimitMutation = {
  updateResourceForGetListWithLimit?:  {
    __typename: "ResourceForGetListWithLimit",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForGetListWithLimitMutationVariables = {
  input: DeleteResourceForGetListWithLimitInput,
  condition?: ModelResourceForGetListWithLimitConditionInput | null,
};

export type DeleteResourceForGetListWithLimitMutation = {
  deleteResourceForGetListWithLimit?:  {
    __typename: "ResourceForGetListWithLimit",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForGetListWithLogicalFilterMutationVariables = {
  input: CreateResourceForGetListWithLogicalFilterInput,
  condition?: ModelResourceForGetListWithLogicalFilterConditionInput | null,
};

export type CreateResourceForGetListWithLogicalFilterMutation = {
  createResourceForGetListWithLogicalFilter?:  {
    __typename: "ResourceForGetListWithLogicalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForGetListWithLogicalFilterMutationVariables = {
  input: UpdateResourceForGetListWithLogicalFilterInput,
  condition?: ModelResourceForGetListWithLogicalFilterConditionInput | null,
};

export type UpdateResourceForGetListWithLogicalFilterMutation = {
  updateResourceForGetListWithLogicalFilter?:  {
    __typename: "ResourceForGetListWithLogicalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForGetListWithLogicalFilterMutationVariables = {
  input: DeleteResourceForGetListWithLogicalFilterInput,
  condition?: ModelResourceForGetListWithLogicalFilterConditionInput | null,
};

export type DeleteResourceForGetListWithLogicalFilterMutation = {
  deleteResourceForGetListWithLogicalFilter?:  {
    __typename: "ResourceForGetListWithLogicalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForGetListWithConditionalFilterMutationVariables = {
  input: CreateResourceForGetListWithConditionalFilterInput,
  condition?: ModelResourceForGetListWithConditionalFilterConditionInput | null,
};

export type CreateResourceForGetListWithConditionalFilterMutation = {
  createResourceForGetListWithConditionalFilter?:  {
    __typename: "ResourceForGetListWithConditionalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForGetListWithConditionalFilterMutationVariables = {
  input: UpdateResourceForGetListWithConditionalFilterInput,
  condition?: ModelResourceForGetListWithConditionalFilterConditionInput | null,
};

export type UpdateResourceForGetListWithConditionalFilterMutation = {
  updateResourceForGetListWithConditionalFilter?:  {
    __typename: "ResourceForGetListWithConditionalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForGetListWithConditionalFilterMutationVariables = {
  input: DeleteResourceForGetListWithConditionalFilterInput,
  condition?: ModelResourceForGetListWithConditionalFilterConditionInput | null,
};

export type DeleteResourceForGetListWithConditionalFilterMutation = {
  deleteResourceForGetListWithConditionalFilter?:  {
    __typename: "ResourceForGetListWithConditionalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForCreateMutationVariables = {
  input: CreateResourceForCreateInput,
  condition?: ModelResourceForCreateConditionInput | null,
};

export type CreateResourceForCreateMutation = {
  createResourceForCreate?:  {
    __typename: "ResourceForCreate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForCreateMutationVariables = {
  input: UpdateResourceForCreateInput,
  condition?: ModelResourceForCreateConditionInput | null,
};

export type UpdateResourceForCreateMutation = {
  updateResourceForCreate?:  {
    __typename: "ResourceForCreate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForCreateMutationVariables = {
  input: DeleteResourceForCreateInput,
  condition?: ModelResourceForCreateConditionInput | null,
};

export type DeleteResourceForCreateMutation = {
  deleteResourceForCreate?:  {
    __typename: "ResourceForCreate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForUpdateMutationVariables = {
  input: CreateResourceForUpdateInput,
  condition?: ModelResourceForUpdateConditionInput | null,
};

export type CreateResourceForUpdateMutation = {
  createResourceForUpdate?:  {
    __typename: "ResourceForUpdate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForUpdateMutationVariables = {
  input: UpdateResourceForUpdateInput,
  condition?: ModelResourceForUpdateConditionInput | null,
};

export type UpdateResourceForUpdateMutation = {
  updateResourceForUpdate?:  {
    __typename: "ResourceForUpdate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForUpdateMutationVariables = {
  input: DeleteResourceForUpdateInput,
  condition?: ModelResourceForUpdateConditionInput | null,
};

export type DeleteResourceForUpdateMutation = {
  deleteResourceForUpdate?:  {
    __typename: "ResourceForUpdate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForDeleteOneMutationVariables = {
  input: CreateResourceForDeleteOneInput,
  condition?: ModelResourceForDeleteOneConditionInput | null,
};

export type CreateResourceForDeleteOneMutation = {
  createResourceForDeleteOne?:  {
    __typename: "ResourceForDeleteOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForDeleteOneMutationVariables = {
  input: UpdateResourceForDeleteOneInput,
  condition?: ModelResourceForDeleteOneConditionInput | null,
};

export type UpdateResourceForDeleteOneMutation = {
  updateResourceForDeleteOne?:  {
    __typename: "ResourceForDeleteOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForDeleteOneMutationVariables = {
  input: DeleteResourceForDeleteOneInput,
  condition?: ModelResourceForDeleteOneConditionInput | null,
};

export type DeleteResourceForDeleteOneMutation = {
  deleteResourceForDeleteOne?:  {
    __typename: "ResourceForDeleteOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForGetOneMutationVariables = {
  input: CreateResourceForGetOneInput,
  condition?: ModelResourceForGetOneConditionInput | null,
};

export type CreateResourceForGetOneMutation = {
  createResourceForGetOne?:  {
    __typename: "ResourceForGetOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForGetOneMutationVariables = {
  input: UpdateResourceForGetOneInput,
  condition?: ModelResourceForGetOneConditionInput | null,
};

export type UpdateResourceForGetOneMutation = {
  updateResourceForGetOne?:  {
    __typename: "ResourceForGetOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForGetOneMutationVariables = {
  input: DeleteResourceForGetOneInput,
  condition?: ModelResourceForGetOneConditionInput | null,
};

export type DeleteResourceForGetOneMutation = {
  deleteResourceForGetOne?:  {
    __typename: "ResourceForGetOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForGetManyMutationVariables = {
  input: CreateResourceForGetManyInput,
  condition?: ModelResourceForGetManyConditionInput | null,
};

export type CreateResourceForGetManyMutation = {
  createResourceForGetMany?:  {
    __typename: "ResourceForGetMany",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForGetManyMutationVariables = {
  input: UpdateResourceForGetManyInput,
  condition?: ModelResourceForGetManyConditionInput | null,
};

export type UpdateResourceForGetManyMutation = {
  updateResourceForGetMany?:  {
    __typename: "ResourceForGetMany",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForGetManyMutationVariables = {
  input: DeleteResourceForGetManyInput,
  condition?: ModelResourceForGetManyConditionInput | null,
};

export type DeleteResourceForGetManyMutation = {
  deleteResourceForGetMany?:  {
    __typename: "ResourceForGetMany",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetResourceForGetListQueryVariables = {
  id: string,
};

export type GetResourceForGetListQuery = {
  getResourceForGetList?:  {
    __typename: "ResourceForGetList",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForGetListsQueryVariables = {
  filter?: ModelResourceForGetListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForGetListsQuery = {
  listResourceForGetLists?:  {
    __typename: "ModelResourceForGetListConnection",
    items:  Array< {
      __typename: "ResourceForGetList",
      id: string,
      name: string,
      priority: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForGetListWithLimitQueryVariables = {
  id: string,
};

export type GetResourceForGetListWithLimitQuery = {
  getResourceForGetListWithLimit?:  {
    __typename: "ResourceForGetListWithLimit",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForGetListWithLimitsQueryVariables = {
  filter?: ModelResourceForGetListWithLimitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForGetListWithLimitsQuery = {
  listResourceForGetListWithLimits?:  {
    __typename: "ModelResourceForGetListWithLimitConnection",
    items:  Array< {
      __typename: "ResourceForGetListWithLimit",
      id: string,
      name: string,
      priority: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForGetListWithLogicalFilterQueryVariables = {
  id: string,
};

export type GetResourceForGetListWithLogicalFilterQuery = {
  getResourceForGetListWithLogicalFilter?:  {
    __typename: "ResourceForGetListWithLogicalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForGetListWithLogicalFiltersQueryVariables = {
  filter?: ModelResourceForGetListWithLogicalFilterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForGetListWithLogicalFiltersQuery = {
  listResourceForGetListWithLogicalFilters?:  {
    __typename: "ModelResourceForGetListWithLogicalFilterConnection",
    items:  Array< {
      __typename: "ResourceForGetListWithLogicalFilter",
      id: string,
      name: string,
      priority: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForGetListWithConditionalFilterQueryVariables = {
  id: string,
};

export type GetResourceForGetListWithConditionalFilterQuery = {
  getResourceForGetListWithConditionalFilter?:  {
    __typename: "ResourceForGetListWithConditionalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForGetListWithConditionalFiltersQueryVariables = {
  filter?: ModelResourceForGetListWithConditionalFilterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForGetListWithConditionalFiltersQuery = {
  listResourceForGetListWithConditionalFilters?:  {
    __typename: "ModelResourceForGetListWithConditionalFilterConnection",
    items:  Array< {
      __typename: "ResourceForGetListWithConditionalFilter",
      id: string,
      name: string,
      priority: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForCreateQueryVariables = {
  id: string,
};

export type GetResourceForCreateQuery = {
  getResourceForCreate?:  {
    __typename: "ResourceForCreate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForCreatesQueryVariables = {
  filter?: ModelResourceForCreateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForCreatesQuery = {
  listResourceForCreates?:  {
    __typename: "ModelResourceForCreateConnection",
    items:  Array< {
      __typename: "ResourceForCreate",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForUpdateQueryVariables = {
  id: string,
};

export type GetResourceForUpdateQuery = {
  getResourceForUpdate?:  {
    __typename: "ResourceForUpdate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForUpdatesQueryVariables = {
  filter?: ModelResourceForUpdateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForUpdatesQuery = {
  listResourceForUpdates?:  {
    __typename: "ModelResourceForUpdateConnection",
    items:  Array< {
      __typename: "ResourceForUpdate",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForDeleteOneQueryVariables = {
  id: string,
};

export type GetResourceForDeleteOneQuery = {
  getResourceForDeleteOne?:  {
    __typename: "ResourceForDeleteOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForDeleteOnesQueryVariables = {
  filter?: ModelResourceForDeleteOneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForDeleteOnesQuery = {
  listResourceForDeleteOnes?:  {
    __typename: "ModelResourceForDeleteOneConnection",
    items:  Array< {
      __typename: "ResourceForDeleteOne",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForGetOneQueryVariables = {
  id: string,
};

export type GetResourceForGetOneQuery = {
  getResourceForGetOne?:  {
    __typename: "ResourceForGetOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForGetOnesQueryVariables = {
  filter?: ModelResourceForGetOneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForGetOnesQuery = {
  listResourceForGetOnes?:  {
    __typename: "ModelResourceForGetOneConnection",
    items:  Array< {
      __typename: "ResourceForGetOne",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForGetManyQueryVariables = {
  id: string,
};

export type GetResourceForGetManyQuery = {
  getResourceForGetMany?:  {
    __typename: "ResourceForGetMany",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForGetManiesQueryVariables = {
  filter?: ModelResourceForGetManyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForGetManiesQuery = {
  listResourceForGetManies?:  {
    __typename: "ModelResourceForGetManyConnection",
    items:  Array< {
      __typename: "ResourceForGetMany",
      id: string,
      name: string,
      priority: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateResourceForGetListSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListFilterInput | null,
};

export type OnCreateResourceForGetListSubscription = {
  onCreateResourceForGetList?:  {
    __typename: "ResourceForGetList",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForGetListSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListFilterInput | null,
};

export type OnUpdateResourceForGetListSubscription = {
  onUpdateResourceForGetList?:  {
    __typename: "ResourceForGetList",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForGetListSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListFilterInput | null,
};

export type OnDeleteResourceForGetListSubscription = {
  onDeleteResourceForGetList?:  {
    __typename: "ResourceForGetList",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForGetListWithLimitSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithLimitFilterInput | null,
};

export type OnCreateResourceForGetListWithLimitSubscription = {
  onCreateResourceForGetListWithLimit?:  {
    __typename: "ResourceForGetListWithLimit",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForGetListWithLimitSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithLimitFilterInput | null,
};

export type OnUpdateResourceForGetListWithLimitSubscription = {
  onUpdateResourceForGetListWithLimit?:  {
    __typename: "ResourceForGetListWithLimit",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForGetListWithLimitSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithLimitFilterInput | null,
};

export type OnDeleteResourceForGetListWithLimitSubscription = {
  onDeleteResourceForGetListWithLimit?:  {
    __typename: "ResourceForGetListWithLimit",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForGetListWithLogicalFilterSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithLogicalFilterFilterInput | null,
};

export type OnCreateResourceForGetListWithLogicalFilterSubscription = {
  onCreateResourceForGetListWithLogicalFilter?:  {
    __typename: "ResourceForGetListWithLogicalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForGetListWithLogicalFilterSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithLogicalFilterFilterInput | null,
};

export type OnUpdateResourceForGetListWithLogicalFilterSubscription = {
  onUpdateResourceForGetListWithLogicalFilter?:  {
    __typename: "ResourceForGetListWithLogicalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForGetListWithLogicalFilterSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithLogicalFilterFilterInput | null,
};

export type OnDeleteResourceForGetListWithLogicalFilterSubscription = {
  onDeleteResourceForGetListWithLogicalFilter?:  {
    __typename: "ResourceForGetListWithLogicalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForGetListWithConditionalFilterSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithConditionalFilterFilterInput | null,
};

export type OnCreateResourceForGetListWithConditionalFilterSubscription = {
  onCreateResourceForGetListWithConditionalFilter?:  {
    __typename: "ResourceForGetListWithConditionalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForGetListWithConditionalFilterSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithConditionalFilterFilterInput | null,
};

export type OnUpdateResourceForGetListWithConditionalFilterSubscription = {
  onUpdateResourceForGetListWithConditionalFilter?:  {
    __typename: "ResourceForGetListWithConditionalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForGetListWithConditionalFilterSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithConditionalFilterFilterInput | null,
};

export type OnDeleteResourceForGetListWithConditionalFilterSubscription = {
  onDeleteResourceForGetListWithConditionalFilter?:  {
    __typename: "ResourceForGetListWithConditionalFilter",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForCreateSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForCreateFilterInput | null,
};

export type OnCreateResourceForCreateSubscription = {
  onCreateResourceForCreate?:  {
    __typename: "ResourceForCreate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForCreateSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForCreateFilterInput | null,
};

export type OnUpdateResourceForCreateSubscription = {
  onUpdateResourceForCreate?:  {
    __typename: "ResourceForCreate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForCreateSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForCreateFilterInput | null,
};

export type OnDeleteResourceForCreateSubscription = {
  onDeleteResourceForCreate?:  {
    __typename: "ResourceForCreate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForUpdateSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForUpdateFilterInput | null,
};

export type OnCreateResourceForUpdateSubscription = {
  onCreateResourceForUpdate?:  {
    __typename: "ResourceForUpdate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForUpdateSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForUpdateFilterInput | null,
};

export type OnUpdateResourceForUpdateSubscription = {
  onUpdateResourceForUpdate?:  {
    __typename: "ResourceForUpdate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForUpdateSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForUpdateFilterInput | null,
};

export type OnDeleteResourceForUpdateSubscription = {
  onDeleteResourceForUpdate?:  {
    __typename: "ResourceForUpdate",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForDeleteOneSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForDeleteOneFilterInput | null,
};

export type OnCreateResourceForDeleteOneSubscription = {
  onCreateResourceForDeleteOne?:  {
    __typename: "ResourceForDeleteOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForDeleteOneSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForDeleteOneFilterInput | null,
};

export type OnUpdateResourceForDeleteOneSubscription = {
  onUpdateResourceForDeleteOne?:  {
    __typename: "ResourceForDeleteOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForDeleteOneSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForDeleteOneFilterInput | null,
};

export type OnDeleteResourceForDeleteOneSubscription = {
  onDeleteResourceForDeleteOne?:  {
    __typename: "ResourceForDeleteOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForGetOneSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetOneFilterInput | null,
};

export type OnCreateResourceForGetOneSubscription = {
  onCreateResourceForGetOne?:  {
    __typename: "ResourceForGetOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForGetOneSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetOneFilterInput | null,
};

export type OnUpdateResourceForGetOneSubscription = {
  onUpdateResourceForGetOne?:  {
    __typename: "ResourceForGetOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForGetOneSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetOneFilterInput | null,
};

export type OnDeleteResourceForGetOneSubscription = {
  onDeleteResourceForGetOne?:  {
    __typename: "ResourceForGetOne",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForGetManySubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetManyFilterInput | null,
};

export type OnCreateResourceForGetManySubscription = {
  onCreateResourceForGetMany?:  {
    __typename: "ResourceForGetMany",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForGetManySubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetManyFilterInput | null,
};

export type OnUpdateResourceForGetManySubscription = {
  onUpdateResourceForGetMany?:  {
    __typename: "ResourceForGetMany",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForGetManySubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetManyFilterInput | null,
};

export type OnDeleteResourceForGetManySubscription = {
  onDeleteResourceForGetMany?:  {
    __typename: "ResourceForGetMany",
    id: string,
    name: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
