/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateResourceForGetList = /* GraphQL */ `subscription OnCreateResourceForGetList(
  $filter: ModelSubscriptionResourceForGetListFilterInput
) {
  onCreateResourceForGetList(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateResourceForGetListSubscriptionVariables,
  APITypes.OnCreateResourceForGetListSubscription
>;
export const onUpdateResourceForGetList = /* GraphQL */ `subscription OnUpdateResourceForGetList(
  $filter: ModelSubscriptionResourceForGetListFilterInput
) {
  onUpdateResourceForGetList(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateResourceForGetListSubscriptionVariables,
  APITypes.OnUpdateResourceForGetListSubscription
>;
export const onDeleteResourceForGetList = /* GraphQL */ `subscription OnDeleteResourceForGetList(
  $filter: ModelSubscriptionResourceForGetListFilterInput
) {
  onDeleteResourceForGetList(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourceForGetListSubscriptionVariables,
  APITypes.OnDeleteResourceForGetListSubscription
>;
export const onCreateResourceForGetListWithLimit = /* GraphQL */ `subscription OnCreateResourceForGetListWithLimit(
  $filter: ModelSubscriptionResourceForGetListWithLimitFilterInput
) {
  onCreateResourceForGetListWithLimit(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateResourceForGetListWithLimitSubscriptionVariables,
  APITypes.OnCreateResourceForGetListWithLimitSubscription
>;
export const onUpdateResourceForGetListWithLimit = /* GraphQL */ `subscription OnUpdateResourceForGetListWithLimit(
  $filter: ModelSubscriptionResourceForGetListWithLimitFilterInput
) {
  onUpdateResourceForGetListWithLimit(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateResourceForGetListWithLimitSubscriptionVariables,
  APITypes.OnUpdateResourceForGetListWithLimitSubscription
>;
export const onDeleteResourceForGetListWithLimit = /* GraphQL */ `subscription OnDeleteResourceForGetListWithLimit(
  $filter: ModelSubscriptionResourceForGetListWithLimitFilterInput
) {
  onDeleteResourceForGetListWithLimit(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourceForGetListWithLimitSubscriptionVariables,
  APITypes.OnDeleteResourceForGetListWithLimitSubscription
>;
export const onCreateResourceForGetListWithLogicalFilter = /* GraphQL */ `subscription OnCreateResourceForGetListWithLogicalFilter(
  $filter: ModelSubscriptionResourceForGetListWithLogicalFilterFilterInput
) {
  onCreateResourceForGetListWithLogicalFilter(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateResourceForGetListWithLogicalFilterSubscriptionVariables,
  APITypes.OnCreateResourceForGetListWithLogicalFilterSubscription
>;
export const onUpdateResourceForGetListWithLogicalFilter = /* GraphQL */ `subscription OnUpdateResourceForGetListWithLogicalFilter(
  $filter: ModelSubscriptionResourceForGetListWithLogicalFilterFilterInput
) {
  onUpdateResourceForGetListWithLogicalFilter(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateResourceForGetListWithLogicalFilterSubscriptionVariables,
  APITypes.OnUpdateResourceForGetListWithLogicalFilterSubscription
>;
export const onDeleteResourceForGetListWithLogicalFilter = /* GraphQL */ `subscription OnDeleteResourceForGetListWithLogicalFilter(
  $filter: ModelSubscriptionResourceForGetListWithLogicalFilterFilterInput
) {
  onDeleteResourceForGetListWithLogicalFilter(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourceForGetListWithLogicalFilterSubscriptionVariables,
  APITypes.OnDeleteResourceForGetListWithLogicalFilterSubscription
>;
export const onCreateResourceForGetListWithConditionalFilter = /* GraphQL */ `subscription OnCreateResourceForGetListWithConditionalFilter(
  $filter: ModelSubscriptionResourceForGetListWithConditionalFilterFilterInput
) {
  onCreateResourceForGetListWithConditionalFilter(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateResourceForGetListWithConditionalFilterSubscriptionVariables,
  APITypes.OnCreateResourceForGetListWithConditionalFilterSubscription
>;
export const onUpdateResourceForGetListWithConditionalFilter = /* GraphQL */ `subscription OnUpdateResourceForGetListWithConditionalFilter(
  $filter: ModelSubscriptionResourceForGetListWithConditionalFilterFilterInput
) {
  onUpdateResourceForGetListWithConditionalFilter(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateResourceForGetListWithConditionalFilterSubscriptionVariables,
  APITypes.OnUpdateResourceForGetListWithConditionalFilterSubscription
>;
export const onDeleteResourceForGetListWithConditionalFilter = /* GraphQL */ `subscription OnDeleteResourceForGetListWithConditionalFilter(
  $filter: ModelSubscriptionResourceForGetListWithConditionalFilterFilterInput
) {
  onDeleteResourceForGetListWithConditionalFilter(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourceForGetListWithConditionalFilterSubscriptionVariables,
  APITypes.OnDeleteResourceForGetListWithConditionalFilterSubscription
>;
export const onCreateResourceForGetListWithPagination = /* GraphQL */ `subscription OnCreateResourceForGetListWithPagination(
  $filter: ModelSubscriptionResourceForGetListWithPaginationFilterInput
) {
  onCreateResourceForGetListWithPagination(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateResourceForGetListWithPaginationSubscriptionVariables,
  APITypes.OnCreateResourceForGetListWithPaginationSubscription
>;
export const onUpdateResourceForGetListWithPagination = /* GraphQL */ `subscription OnUpdateResourceForGetListWithPagination(
  $filter: ModelSubscriptionResourceForGetListWithPaginationFilterInput
) {
  onUpdateResourceForGetListWithPagination(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateResourceForGetListWithPaginationSubscriptionVariables,
  APITypes.OnUpdateResourceForGetListWithPaginationSubscription
>;
export const onDeleteResourceForGetListWithPagination = /* GraphQL */ `subscription OnDeleteResourceForGetListWithPagination(
  $filter: ModelSubscriptionResourceForGetListWithPaginationFilterInput
) {
  onDeleteResourceForGetListWithPagination(filter: $filter) {
    id
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourceForGetListWithPaginationSubscriptionVariables,
  APITypes.OnDeleteResourceForGetListWithPaginationSubscription
>;
export const onCreateResourceForCreate = /* GraphQL */ `subscription OnCreateResourceForCreate(
  $filter: ModelSubscriptionResourceForCreateFilterInput
) {
  onCreateResourceForCreate(filter: $filter) {
    id
    priority
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
    priority
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
    priority
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
    priority
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
    priority
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
    priority
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
    priority
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
    priority
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
    priority
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
    priority
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
    priority
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
    priority
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
    priority
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
    priority
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
    priority
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourceForGetManySubscriptionVariables,
  APITypes.OnDeleteResourceForGetManySubscription
>;
