import { ConditionalFilter, CrudFilters, CrudOperators, LogicalFilter, keys } from "@refinedev/core";

export const mapOperator = (operator: CrudOperators) => {
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
}

export const generateLogicalFilter = (filter: LogicalFilter) => {
    const { field, operator, value } = filter;

    const mappedOperator = mapOperator(operator);
    return {
        [field]: { [mappedOperator]: value, }
    };
}

export const generateConditionalFilter = (filter: ConditionalFilter) => {
    const { operator, value } = filter;
    return "bb";
}

export const generateFilter = (filters?: CrudFilters) => {
    let rawFilters: any[] = []; // 暫定的にany型にしている

    if (filters) {
        filters.map((filter) => {
            if (
                filter.operator !== "or" &&
                filter.operator !== "and" &&
                "field" in filter
            ) {
                rawFilters.push(generateLogicalFilter(filter));
            } else {
                rawFilters.push(generateConditionalFilter(filter));
            }
        });

        console.log(rawFilters);

        if (filters.length === 1) {
            return { filter: rawFilters[0] };
        } else {
            return { filter: { and: rawFilters } };
        }
    }

    return {};
};