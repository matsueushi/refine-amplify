interface Tokens {
    [index: string]: Array<string | null | undefined>
}

export class Pagination {
    static tokens: Tokens = {};

    static getNextToken(
        signature: string,
        page: number,
    ): string | null | undefined {
        if (!this.tokens[signature]) {
            this.tokens[signature] = [];
        }

        if (page > 1 && !this.tokens[signature][page - 1]) {
            return undefined;
        }

        return this.tokens[signature][page - 1] ?? null;
    }

    static setNextToken(
        nextToken: string | null,
        signature: string,
        page: number,
    ): void {
        if (!this.tokens[signature]) {
            this.tokens[signature] = [];
        }

        this.tokens[signature][page] = nextToken;
    }
}
