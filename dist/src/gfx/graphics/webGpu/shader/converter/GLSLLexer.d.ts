import { GLSLLexerToken } from "./GLSLLexerToken";
import { GLSLPreprocessor } from "./GLSLPreprocessor";
import { Reader } from "./Reader";
export declare class GLSLLexer extends Reader {
    private _tokenPosition;
    private _tokens;
    constructor(input: GLSLPreprocessor);
    skipToken(offset: number): void;
    peekToken(offset: number): GLSLLexerToken;
    GetNextToken(): GLSLLexerToken;
    get currTokenPosition(): number;
    private parse;
    private nextToken;
    private readDecimal;
    private lookupIdentifier;
}
