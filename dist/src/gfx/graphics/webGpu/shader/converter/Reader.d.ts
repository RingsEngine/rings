/**
 * @internal
 * @group GFX
 */
export declare class Reader {
    protected _char: string;
    protected _line: number;
    protected _column: number;
    protected _source: string;
    protected _currPosition: number;
    protected _nextPosition: number;
    constructor(source: string);
    reset(source: string): void;
    get source(): string;
    getChar(): string;
    get currPosition(): number;
    peekChar(): string;
    readChar(): void;
    readCharAndSkipWhitespace(): void;
    readIdentifier(): string;
    isIdentifier(char: string): boolean;
    skipWhitespace(): void;
    IsWhitespace(char: string): boolean;
    skipComment(): void;
    skipMultilineComment(): void;
    isDigit(char: string): boolean;
    readNumber(): string;
    readValue(): string;
    readLine(): string;
}
