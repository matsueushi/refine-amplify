/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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
};

export type ModelResourceForGetManyConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelResourceForGetManyConditionInput | null > | null,
  or?: Array< ModelResourceForGetManyConditionInput | null > | null,
  not?: ModelResourceForGetManyConditionInput | null,
};

export type ResourceForGetMany = {
  __typename: "ResourceForGetMany",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceForGetManyInput = {
  id: string,
  name?: string | null,
};

export type DeleteResourceForGetManyInput = {
  id: string,
};

export type ModelResourceForCreateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelResourceForCreateFilterInput | null > | null,
  or?: Array< ModelResourceForCreateFilterInput | null > | null,
  not?: ModelResourceForCreateFilterInput | null,
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
  and?: Array< ModelResourceForGetManyFilterInput | null > | null,
  or?: Array< ModelResourceForGetManyFilterInput | null > | null,
  not?: ModelResourceForGetManyFilterInput | null,
};

export type ModelResourceForGetManyConnection = {
  __typename: "ModelResourceForGetManyConnection",
  items:  Array<ResourceForGetMany | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionResourceForCreateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResourceForCreateFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForCreateFilterInput | null > | null,
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
  and?: Array< ModelSubscriptionResourceForGetManyFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourceForGetManyFilterInput | null > | null,
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
    createdAt: string,
    updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};
