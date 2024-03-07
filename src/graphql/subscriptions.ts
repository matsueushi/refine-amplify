/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateResourceForCreate = /* GraphQL */ `subscription OnCreateResourceForCreate(
  $filter: ModelSubscriptionResourceForCreateFilterInput
) {
  onCreateResourceForCreate(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateResourceForCreateSubscriptionVariables,
  APITypes.OnCreateResourceForCreateSubscription
>;
export const onUpdateResourceForCreate = /* GraphQL */ `subscription OnUpdateResourceForCreate(
  $filter: ModelSubscriptionResourceForCreateFilterInput
) {
  onUpdateResourceForCreate(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateResourceForCreateSubscriptionVariables,
  APITypes.OnUpdateResourceForCreateSubscription
>;
export const onDeleteResourceForCreate = /* GraphQL */ `subscription OnDeleteResourceForCreate(
  $filter: ModelSubscriptionResourceForCreateFilterInput
) {
  onDeleteResourceForCreate(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourceForCreateSubscriptionVariables,
  APITypes.OnDeleteResourceForCreateSubscription
>;
export const onCreateResourceForUpdate = /* GraphQL */ `subscription OnCreateResourceForUpdate(
  $filter: ModelSubscriptionResourceForUpdateFilterInput
) {
  onCreateResourceForUpdate(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateResourceForUpdateSubscriptionVariables,
  APITypes.OnCreateResourceForUpdateSubscription
>;
export const onUpdateResourceForUpdate = /* GraphQL */ `subscription OnUpdateResourceForUpdate(
  $filter: ModelSubscriptionResourceForUpdateFilterInput
) {
  onUpdateResourceForUpdate(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateResourceForUpdateSubscriptionVariables,
  APITypes.OnUpdateResourceForUpdateSubscription
>;
export const onDeleteResourceForUpdate = /* GraphQL */ `subscription OnDeleteResourceForUpdate(
  $filter: ModelSubscriptionResourceForUpdateFilterInput
) {
  onDeleteResourceForUpdate(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourceForUpdateSubscriptionVariables,
  APITypes.OnDeleteResourceForUpdateSubscription
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
export const onCreateResourceForGetMany = /* GraphQL */ `subscription OnCreateResourceForGetMany(
  $filter: ModelSubscriptionResourceForGetManyFilterInput
) {
  onCreateResourceForGetMany(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateResourceForGetManySubscriptionVariables,
  APITypes.OnCreateResourceForGetManySubscription
>;
export const onUpdateResourceForGetMany = /* GraphQL */ `subscription OnUpdateResourceForGetMany(
  $filter: ModelSubscriptionResourceForGetManyFilterInput
) {
  onUpdateResourceForGetMany(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateResourceForGetManySubscriptionVariables,
  APITypes.OnUpdateResourceForGetManySubscription
>;
export const onDeleteResourceForGetMany = /* GraphQL */ `subscription OnDeleteResourceForGetMany(
  $filter: ModelSubscriptionResourceForGetManyFilterInput
) {
  onDeleteResourceForGetMany(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourceForGetManySubscriptionVariables,
  APITypes.OnDeleteResourceForGetManySubscription
>;
