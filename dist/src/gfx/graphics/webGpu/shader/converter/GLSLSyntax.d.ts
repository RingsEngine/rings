import { GLSLLexer } from "./GLSLLexer";
import { StatementNode } from "./StatementNode";
export declare class GLSLSyntax {
    private _lexer;
    private _rootNode;
    constructor(input: GLSLLexer);
    get lexer(): GLSLLexer;
    private parse;
    private parseStatement;
    private skipToken;
    private peekToken;
    private getNextToken;
    get ASTRoot(): StatementNode;
}
