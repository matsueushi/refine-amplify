/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  priority?: number | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
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

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  priority?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  priority?: number | null,
};

export type DeleteTodoInput = {
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

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
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

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
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

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
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

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    priority?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    priority?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    priority?: number | null,
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

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    priority?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      priority?: number | null,
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

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    priority?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    priority?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    priority?: number | null,
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
