interface Tokens {
    [index: string]: Array<string | null | undefined>;
}

export class Pagination {
    static tokens: Tokens = {};

    static getNextToken(
        signature: string,
        current: number,
    ): string | null | undefined {
        if (!this.tokens[signature]) {
            this.tokens[signature] = [];
        }

        if (current > 1 && this.tokens[signature][current - 1] === undefined) {
            return undefined;
        }

        return this.tokens[signature][current - 1] ?? null;
    }

    static setNextToken(
        nextToken: string | null,
        signature: string,
        current: number,
    ): void {
        if (!this.tokens[signature]) {
            this.tokens[signature] = [];
        }

        if (current < 1) {
            throw new Error("current should be greater than 0");
        }

        this.tokens[signature][current] = nextToken;
    }
}
