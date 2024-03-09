import {
    ConditionalFilter,
    CrudFilter,
    CrudFilters,
    CrudOperators,
    LogicalFilter,
} from "@refinedev/core";

export const mapOperator = (operator: CrudOperators): string => {
    switch (operator) {
        case "eq":
            return "eq";
        case "ne":
            return "ne";
        case "lt":
            return "lt";
        case "gt":
            return "gt";
        case "lte":
            return "lt";
        case "gte":
            return "ge";
        case "between":
            return "between";
        default:
            throw new Error("Invalid operator");
    }
};

export const generateRawFilter = (filter: CrudFilter) => {
    if (
        filter.operator !== "or" &&
        filter.operator !== "and" &&
        "field" in filter
    ) {
        // logical filter
        const { field, operator, value } = filter;
        const mappedOperator = mapOperator(operator);
        return {
            [field]: { [mappedOperator]: value },
        };
    } else {
        // conditional filter
        const { operator, value } = filter;
        const rawFilters: any[] = value.map(generateRawFilter);
        return { [operator]: rawFilters };
    }
};

export const generateFilter = (filters?: CrudFilters) => {
    if (filters) {
        const rawFilters = filters.map(generateRawFilter);
        if (filters.length === 1) {
            return { filter: rawFilters[0] };
        } else {
            return { filter: { and: rawFilters } };
        }
    }

    return {};
};
