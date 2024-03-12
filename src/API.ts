/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateResourceForGetListInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForGetListConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListConditionInput | null > | null,
  or?: Array< ModelResourceForGetListConditionInput | null > | null,
  not?: ModelResourceForGetListConditionInput | null,
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


export type ResourceForGetList = {
  __typename: "ResourceForGetList",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetListInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForGetListInput = {
  id: string,
};

export type CreateResourceForGetListWithLimitInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForGetListWithLimitConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListWithLimitConditionInput | null > | null,
  or?: Array< ModelResourceForGetListWithLimitConditionInput | null > | null,
  not?: ModelResourceForGetListWithLimitConditionInput | null,
};

export type ResourceForGetListWithLimit = {
  __typename: "ResourceForGetListWithLimit",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetListWithLimitInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForGetListWithLimitInput = {
  id: string,
};

export type CreateResourceForGetListWithLogicalFilterInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForGetListWithLogicalFilterConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListWithLogicalFilterConditionInput | null > | null,
  or?: Array< ModelResourceForGetListWithLogicalFilterConditionInput | null > | null,
  not?: ModelResourceForGetListWithLogicalFilterConditionInput | null,
};

export type ResourceForGetListWithLogicalFilter = {
  __typename: "ResourceForGetListWithLogicalFilter",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetListWithLogicalFilterInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForGetListWithLogicalFilterInput = {
  id: string,
};

export type CreateResourceForGetListWithConditionalFilterInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForGetListWithConditionalFilterConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListWithConditionalFilterConditionInput | null > | null,
  or?: Array< ModelResourceForGetListWithConditionalFilterConditionInput | null > | null,
  not?: ModelResourceForGetListWithConditionalFilterConditionInput | null,
};

export type ResourceForGetListWithConditionalFilter = {
  __typename: "ResourceForGetListWithConditionalFilter",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetListWithConditionalFilterInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForGetListWithConditionalFilterInput = {
  id: string,
};

export type CreateResourceForGetListWithSorterInput = {
  id?: string | null,
  priority: number,
  type: string,
  createdAt?: string | null,
};

export type ModelResourceForGetListWithSorterConditionInput = {
  priority?: ModelIntInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelResourceForGetListWithSorterConditionInput | null > | null,
  or?: Array< ModelResourceForGetListWithSorterConditionInput | null > | null,
  not?: ModelResourceForGetListWithSorterConditionInput | null,
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

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ResourceForGetListWithSorter = {
  __typename: "ResourceForGetListWithSorter",
  id: string,
  priority: number,
  type: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetListWithSorterInput = {
  id: string,
  priority?: number | null,
  type?: string | null,
  createdAt?: string | null,
};

export type DeleteResourceForGetListWithSorterInput = {
  id: string,
};

export type CreateResourceForGetListWithPaginationInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForGetListWithPaginationConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListWithPaginationConditionInput | null > | null,
  or?: Array< ModelResourceForGetListWithPaginationConditionInput | null > | null,
  not?: ModelResourceForGetListWithPaginationConditionInput | null,
};

export type ResourceForGetListWithPagination = {
  __typename: "ResourceForGetListWithPagination",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetListWithPaginationInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForGetListWithPaginationInput = {
  id: string,
};

export type CreateResourceForCreateInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForCreateConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForCreateConditionInput | null > | null,
  or?: Array< ModelResourceForCreateConditionInput | null > | null,
  not?: ModelResourceForCreateConditionInput | null,
};

export type ResourceForCreate = {
  __typename: "ResourceForCreate",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForCreateInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForCreateInput = {
  id: string,
};

export type CreateResourceForUpdateInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForUpdateConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForUpdateConditionInput | null > | null,
  or?: Array< ModelResourceForUpdateConditionInput | null > | null,
  not?: ModelResourceForUpdateConditionInput | null,
};

export type ResourceForUpdate = {
  __typename: "ResourceForUpdate",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForUpdateInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForUpdateInput = {
  id: string,
};

export type CreateResourceForDeleteOneInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForDeleteOneConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForDeleteOneConditionInput | null > | null,
  or?: Array< ModelResourceForDeleteOneConditionInput | null > | null,
  not?: ModelResourceForDeleteOneConditionInput | null,
};

export type ResourceForDeleteOne = {
  __typename: "ResourceForDeleteOne",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForDeleteOneInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForDeleteOneInput = {
  id: string,
};

export type CreateResourceForGetOneInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForGetOneConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetOneConditionInput | null > | null,
  or?: Array< ModelResourceForGetOneConditionInput | null > | null,
  not?: ModelResourceForGetOneConditionInput | null,
};

export type ResourceForGetOne = {
  __typename: "ResourceForGetOne",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetOneInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForGetOneInput = {
  id: string,
};

export type CreateResourceForGetManyInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForGetManyConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetManyConditionInput | null > | null,
  or?: Array< ModelResourceForGetManyConditionInput | null > | null,
  not?: ModelResourceForGetManyConditionInput | null,
};

export type ResourceForGetMany = {
  __typename: "ResourceForGetMany",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetManyInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForGetManyInput = {
  id: string,
};

export type CreateResourceForCreateManyInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForCreateManyConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForCreateManyConditionInput | null > | null,
  or?: Array< ModelResourceForCreateManyConditionInput | null > | null,
  not?: ModelResourceForCreateManyConditionInput | null,
};

export type ResourceForCreateMany = {
  __typename: "ResourceForCreateMany",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForCreateManyInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForCreateManyInput = {
  id: string,
};

export type CreateResourceForDeleteManyInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForDeleteManyConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForDeleteManyConditionInput | null > | null,
  or?: Array< ModelResourceForDeleteManyConditionInput | null > | null,
  not?: ModelResourceForDeleteManyConditionInput | null,
};

export type ResourceForDeleteMany = {
  __typename: "ResourceForDeleteMany",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForDeleteManyInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForDeleteManyInput = {
  id: string,
};

export type CreateResourceForUpdateManyInput = {
  id?: string | null,
  priority: number,
};

export type ModelResourceForUpdateManyConditionInput = {
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForUpdateManyConditionInput | null > | null,
  or?: Array< ModelResourceForUpdateManyConditionInput | null > | null,
  not?: ModelResourceForUpdateManyConditionInput | null,
};

export type ResourceForUpdateMany = {
  __typename: "ResourceForUpdateMany",
  id: string,
  priority: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForUpdateManyInput = {
  id: string,
  priority?: number | null,
};

export type DeleteResourceForUpdateManyInput = {
  id: string,
};

export type ModelResourceForGetListFilterInput = {
  id?: ModelIDInput | null,
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

export type ModelResourceForGetListWithSorterFilterInput = {
  id?: ModelIDInput | null,
  priority?: ModelIntInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelResourceForGetListWithSorterFilterInput | null > | null,
  or?: Array< ModelResourceForGetListWithSorterFilterInput | null > | null,
  not?: ModelResourceForGetListWithSorterFilterInput | null,
};

export type ModelResourceForGetListWithSorterConnection = {
  __typename: "ModelResourceForGetListWithSorterConnection",
  items:  Array<ResourceForGetListWithSorter | null >,
  nextToken?: string | null,
};

export type ModelResourceForGetListWithPaginationFilterInput = {
  id?: ModelIDInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForGetListWithPaginationFilterInput | null > | null,
  or?: Array< ModelResourceForGetListWithPaginationFilterInput | null > | null,
  not?: ModelResourceForGetListWithPaginationFilterInput | null,
};

export type ModelResourceForGetListWithPaginationConnection = {
  __typename: "ModelResourceForGetListWithPaginationConnection",
  items:  Array<ResourceForGetListWithPagination | null >,
  nextToken?: string | null,
};

export type ModelResourceForCreateFilterInput = {
  id?: ModelIDInput | null,
  priority?: ModelIntInput | null,
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
  priority?: ModelIntInput | null,
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
  priority?: ModelIntInput | null,
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
  priority?: ModelIntInput | null,
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

export type ModelResourceForCreateManyFilterInput = {
  id?: ModelIDInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForCreateManyFilterInput | null > | null,
  or?: Array< ModelResourceForCreateManyFilterInput | null > | null,
  not?: ModelResourceForCreateManyFilterInput | null,
};

export type ModelResourceForCreateManyConnection = {
  __typename: "ModelResourceForCreateManyConnection",
  items:  Array<ResourceForCreateMany | null >,
  nextToken?: string | null,
};

export type ModelResourceForDeleteManyFilterInput = {
  id?: ModelIDInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForDeleteManyFilterInput | null > | null,
  or?: Array< ModelResourceForDeleteManyFilterInput | null > | null,
  not?: ModelResourceForDeleteManyFilterInput | null,
};

export type ModelResourceForDeleteManyConnection = {
  __typename: "ModelResourceForDeleteManyConnection",
  items:  Array<ResourceForDeleteMany | null >,
  nextToken?: string | null,
};

export type ModelResourceForUpdateManyFilterInput = {
  id?: ModelIDInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelResourceForUpdateManyFilterInput | null > | null,
  or?: Array< ModelResourceForUpdateManyFilterInput | null > | null,
  not?: ModelResourceForUpdateManyFilterInput | null,
};

export type ModelResourceForUpdateManyConnection = {
  __typename: "ModelResourceForUpdateManyConnection",
  items:  Array<ResourceForUpdateMany | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionResourceForGetListFilterInput = {
  id?: ModelSubscriptionIDInput | null,
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
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForGetListWithLimitFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetListWithLimitFilterInput | null > | null,
};

export type ModelSubscriptionResourceForGetListWithLogicalFilterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForGetListWithLogicalFilterFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetListWithLogicalFilterFilterInput | null > | null,
};

export type ModelSubscriptionResourceForGetListWithConditionalFilterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForGetListWithConditionalFilterFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetListWithConditionalFilterFilterInput | null > | null,
};

export type ModelSubscriptionResourceForGetListWithSorterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  priority?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResourceForGetListWithSorterFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetListWithSorterFilterInput | null > | null,
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

export type ModelSubscriptionResourceForGetListWithPaginationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForGetListWithPaginationFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetListWithPaginationFilterInput | null > | null,
};

export type ModelSubscriptionResourceForCreateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForCreateFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForCreateFilterInput | null > | null,
};

export type ModelSubscriptionResourceForUpdateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForUpdateFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForUpdateFilterInput | null > | null,
};

export type ModelSubscriptionResourceForDeleteOneFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForDeleteOneFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForDeleteOneFilterInput | null > | null,
};

export type ModelSubscriptionResourceForGetOneFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForGetOneFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetOneFilterInput | null > | null,
};

export type ModelSubscriptionResourceForGetManyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForGetManyFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetManyFilterInput | null > | null,
};

export type ModelSubscriptionResourceForCreateManyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForCreateManyFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForCreateManyFilterInput | null > | null,
};

export type ModelSubscriptionResourceForDeleteManyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForDeleteManyFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForDeleteManyFilterInput | null > | null,
};

export type ModelSubscriptionResourceForUpdateManyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionResourceForUpdateManyFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForUpdateManyFilterInput | null > | null,
};

export type CreateResourceForGetListMutationVariables = {
  input: CreateResourceForGetListInput,
  condition?: ModelResourceForGetListConditionInput | null,
};

export type CreateResourceForGetListMutation = {
  createResourceForGetList?:  {
    __typename: "ResourceForGetList",
    id: string,
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
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForGetListWithSorterMutationVariables = {
  input: CreateResourceForGetListWithSorterInput,
  condition?: ModelResourceForGetListWithSorterConditionInput | null,
};

export type CreateResourceForGetListWithSorterMutation = {
  createResourceForGetListWithSorter?:  {
    __typename: "ResourceForGetListWithSorter",
    id: string,
    priority: number,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForGetListWithSorterMutationVariables = {
  input: UpdateResourceForGetListWithSorterInput,
  condition?: ModelResourceForGetListWithSorterConditionInput | null,
};

export type UpdateResourceForGetListWithSorterMutation = {
  updateResourceForGetListWithSorter?:  {
    __typename: "ResourceForGetListWithSorter",
    id: string,
    priority: number,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForGetListWithSorterMutationVariables = {
  input: DeleteResourceForGetListWithSorterInput,
  condition?: ModelResourceForGetListWithSorterConditionInput | null,
};

export type DeleteResourceForGetListWithSorterMutation = {
  deleteResourceForGetListWithSorter?:  {
    __typename: "ResourceForGetListWithSorter",
    id: string,
    priority: number,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForGetListWithPaginationMutationVariables = {
  input: CreateResourceForGetListWithPaginationInput,
  condition?: ModelResourceForGetListWithPaginationConditionInput | null,
};

export type CreateResourceForGetListWithPaginationMutation = {
  createResourceForGetListWithPagination?:  {
    __typename: "ResourceForGetListWithPagination",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForGetListWithPaginationMutationVariables = {
  input: UpdateResourceForGetListWithPaginationInput,
  condition?: ModelResourceForGetListWithPaginationConditionInput | null,
};

export type UpdateResourceForGetListWithPaginationMutation = {
  updateResourceForGetListWithPagination?:  {
    __typename: "ResourceForGetListWithPagination",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForGetListWithPaginationMutationVariables = {
  input: DeleteResourceForGetListWithPaginationInput,
  condition?: ModelResourceForGetListWithPaginationConditionInput | null,
};

export type DeleteResourceForGetListWithPaginationMutation = {
  deleteResourceForGetListWithPagination?:  {
    __typename: "ResourceForGetListWithPagination",
    id: string,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForCreateManyMutationVariables = {
  input: CreateResourceForCreateManyInput,
  condition?: ModelResourceForCreateManyConditionInput | null,
};

export type CreateResourceForCreateManyMutation = {
  createResourceForCreateMany?:  {
    __typename: "ResourceForCreateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForCreateManyMutationVariables = {
  input: UpdateResourceForCreateManyInput,
  condition?: ModelResourceForCreateManyConditionInput | null,
};

export type UpdateResourceForCreateManyMutation = {
  updateResourceForCreateMany?:  {
    __typename: "ResourceForCreateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForCreateManyMutationVariables = {
  input: DeleteResourceForCreateManyInput,
  condition?: ModelResourceForCreateManyConditionInput | null,
};

export type DeleteResourceForCreateManyMutation = {
  deleteResourceForCreateMany?:  {
    __typename: "ResourceForCreateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForDeleteManyMutationVariables = {
  input: CreateResourceForDeleteManyInput,
  condition?: ModelResourceForDeleteManyConditionInput | null,
};

export type CreateResourceForDeleteManyMutation = {
  createResourceForDeleteMany?:  {
    __typename: "ResourceForDeleteMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForDeleteManyMutationVariables = {
  input: UpdateResourceForDeleteManyInput,
  condition?: ModelResourceForDeleteManyConditionInput | null,
};

export type UpdateResourceForDeleteManyMutation = {
  updateResourceForDeleteMany?:  {
    __typename: "ResourceForDeleteMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForDeleteManyMutationVariables = {
  input: DeleteResourceForDeleteManyInput,
  condition?: ModelResourceForDeleteManyConditionInput | null,
};

export type DeleteResourceForDeleteManyMutation = {
  deleteResourceForDeleteMany?:  {
    __typename: "ResourceForDeleteMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceForUpdateManyMutationVariables = {
  input: CreateResourceForUpdateManyInput,
  condition?: ModelResourceForUpdateManyConditionInput | null,
};

export type CreateResourceForUpdateManyMutation = {
  createResourceForUpdateMany?:  {
    __typename: "ResourceForUpdateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceForUpdateManyMutationVariables = {
  input: UpdateResourceForUpdateManyInput,
  condition?: ModelResourceForUpdateManyConditionInput | null,
};

export type UpdateResourceForUpdateManyMutation = {
  updateResourceForUpdateMany?:  {
    __typename: "ResourceForUpdateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceForUpdateManyMutationVariables = {
  input: DeleteResourceForUpdateManyInput,
  condition?: ModelResourceForUpdateManyConditionInput | null,
};

export type DeleteResourceForUpdateManyMutation = {
  deleteResourceForUpdateMany?:  {
    __typename: "ResourceForUpdateMany",
    id: string,
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
      priority: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForGetListWithSorterQueryVariables = {
  id: string,
};

export type GetResourceForGetListWithSorterQuery = {
  getResourceForGetListWithSorter?:  {
    __typename: "ResourceForGetListWithSorter",
    id: string,
    priority: number,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForGetListWithSortersQueryVariables = {
  filter?: ModelResourceForGetListWithSorterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForGetListWithSortersQuery = {
  listResourceForGetListWithSorters?:  {
    __typename: "ModelResourceForGetListWithSorterConnection",
    items:  Array< {
      __typename: "ResourceForGetListWithSorter",
      id: string,
      priority: number,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForGetListWithPaginationQueryVariables = {
  id: string,
};

export type GetResourceForGetListWithPaginationQuery = {
  getResourceForGetListWithPagination?:  {
    __typename: "ResourceForGetListWithPagination",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForGetListWithPaginationsQueryVariables = {
  filter?: ModelResourceForGetListWithPaginationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForGetListWithPaginationsQuery = {
  listResourceForGetListWithPaginations?:  {
    __typename: "ModelResourceForGetListWithPaginationConnection",
    items:  Array< {
      __typename: "ResourceForGetListWithPagination",
      id: string,
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
    priority: number,
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
      priority: number,
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
    priority: number,
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
      priority: number,
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
    priority: number,
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
      priority: number,
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
    priority: number,
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
      priority: number,
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
      priority: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForCreateManyQueryVariables = {
  id: string,
};

export type GetResourceForCreateManyQuery = {
  getResourceForCreateMany?:  {
    __typename: "ResourceForCreateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForCreateManiesQueryVariables = {
  filter?: ModelResourceForCreateManyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForCreateManiesQuery = {
  listResourceForCreateManies?:  {
    __typename: "ModelResourceForCreateManyConnection",
    items:  Array< {
      __typename: "ResourceForCreateMany",
      id: string,
      priority: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForDeleteManyQueryVariables = {
  id: string,
};

export type GetResourceForDeleteManyQuery = {
  getResourceForDeleteMany?:  {
    __typename: "ResourceForDeleteMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForDeleteManiesQueryVariables = {
  filter?: ModelResourceForDeleteManyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForDeleteManiesQuery = {
  listResourceForDeleteManies?:  {
    __typename: "ModelResourceForDeleteManyConnection",
    items:  Array< {
      __typename: "ResourceForDeleteMany",
      id: string,
      priority: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceForUpdateManyQueryVariables = {
  id: string,
};

export type GetResourceForUpdateManyQuery = {
  getResourceForUpdateMany?:  {
    __typename: "ResourceForUpdateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourceForUpdateManiesQueryVariables = {
  filter?: ModelResourceForUpdateManyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForUpdateManiesQuery = {
  listResourceForUpdateManies?:  {
    __typename: "ModelResourceForUpdateManyConnection",
    items:  Array< {
      __typename: "ResourceForUpdateMany",
      id: string,
      priority: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListResourceForGetListWithSortersByCreatedAtQueryVariables = {
  type: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelResourceForGetListWithSorterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceForGetListWithSortersByCreatedAtQuery = {
  listResourceForGetListWithSortersByCreatedAt?:  {
    __typename: "ModelResourceForGetListWithSorterConnection",
    items:  Array< {
      __typename: "ResourceForGetListWithSorter",
      id: string,
      priority: number,
      type: string,
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
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForGetListWithSorterSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithSorterFilterInput | null,
};

export type OnCreateResourceForGetListWithSorterSubscription = {
  onCreateResourceForGetListWithSorter?:  {
    __typename: "ResourceForGetListWithSorter",
    id: string,
    priority: number,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForGetListWithSorterSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithSorterFilterInput | null,
};

export type OnUpdateResourceForGetListWithSorterSubscription = {
  onUpdateResourceForGetListWithSorter?:  {
    __typename: "ResourceForGetListWithSorter",
    id: string,
    priority: number,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForGetListWithSorterSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithSorterFilterInput | null,
};

export type OnDeleteResourceForGetListWithSorterSubscription = {
  onDeleteResourceForGetListWithSorter?:  {
    __typename: "ResourceForGetListWithSorter",
    id: string,
    priority: number,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForGetListWithPaginationSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithPaginationFilterInput | null,
};

export type OnCreateResourceForGetListWithPaginationSubscription = {
  onCreateResourceForGetListWithPagination?:  {
    __typename: "ResourceForGetListWithPagination",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForGetListWithPaginationSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithPaginationFilterInput | null,
};

export type OnUpdateResourceForGetListWithPaginationSubscription = {
  onUpdateResourceForGetListWithPagination?:  {
    __typename: "ResourceForGetListWithPagination",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForGetListWithPaginationSubscriptionVariables = {
  filter?: ModelSubscriptionResourceForGetListWithPaginationFilterInput | null,
};

export type OnDeleteResourceForGetListWithPaginationSubscription = {
  onDeleteResourceForGetListWithPagination?:  {
    __typename: "ResourceForGetListWithPagination",
    id: string,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
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
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForCreateManySubscriptionVariables = {
  filter?: ModelSubscriptionResourceForCreateManyFilterInput | null,
};

export type OnCreateResourceForCreateManySubscription = {
  onCreateResourceForCreateMany?:  {
    __typename: "ResourceForCreateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForCreateManySubscriptionVariables = {
  filter?: ModelSubscriptionResourceForCreateManyFilterInput | null,
};

export type OnUpdateResourceForCreateManySubscription = {
  onUpdateResourceForCreateMany?:  {
    __typename: "ResourceForCreateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForCreateManySubscriptionVariables = {
  filter?: ModelSubscriptionResourceForCreateManyFilterInput | null,
};

export type OnDeleteResourceForCreateManySubscription = {
  onDeleteResourceForCreateMany?:  {
    __typename: "ResourceForCreateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForDeleteManySubscriptionVariables = {
  filter?: ModelSubscriptionResourceForDeleteManyFilterInput | null,
};

export type OnCreateResourceForDeleteManySubscription = {
  onCreateResourceForDeleteMany?:  {
    __typename: "ResourceForDeleteMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForDeleteManySubscriptionVariables = {
  filter?: ModelSubscriptionResourceForDeleteManyFilterInput | null,
};

export type OnUpdateResourceForDeleteManySubscription = {
  onUpdateResourceForDeleteMany?:  {
    __typename: "ResourceForDeleteMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForDeleteManySubscriptionVariables = {
  filter?: ModelSubscriptionResourceForDeleteManyFilterInput | null,
};

export type OnDeleteResourceForDeleteManySubscription = {
  onDeleteResourceForDeleteMany?:  {
    __typename: "ResourceForDeleteMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceForUpdateManySubscriptionVariables = {
  filter?: ModelSubscriptionResourceForUpdateManyFilterInput | null,
};

export type OnCreateResourceForUpdateManySubscription = {
  onCreateResourceForUpdateMany?:  {
    __typename: "ResourceForUpdateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceForUpdateManySubscriptionVariables = {
  filter?: ModelSubscriptionResourceForUpdateManyFilterInput | null,
};

export type OnUpdateResourceForUpdateManySubscription = {
  onUpdateResourceForUpdateMany?:  {
    __typename: "ResourceForUpdateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceForUpdateManySubscriptionVariables = {
  filter?: ModelSubscriptionResourceForUpdateManyFilterInput | null,
};

export type OnDeleteResourceForUpdateManySubscription = {
  onDeleteResourceForUpdateMany?:  {
    __typename: "ResourceForUpdateMany",
    id: string,
    priority: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
