import { GLSLLexer } from "./GLSLLexer";
import { GLSLLexerToken } from "./GLSLLexerToken";
import { TranslatorContext } from "./WGSLTranslator";
/**
 * @internal
 * Statement node
 * @group GFX
 */
export declare class StatementNode {
    nodes: Array<StatementNode>;
    constructor();
    addNode(node: StatementNode): void;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: struct
 * @group GFX
 */
export declare class SN_Struct extends StatementNode {
    name: string;
    fields: Array<SN_Declaration>;
    constructor(name: string);
    static parse(r: GLSLLexer): SN_Struct;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: function
 * @group GFX
 */
export declare class SN_Function extends StatementNode {
    name: string;
    args: Array<SN_Declaration>;
    body: SN_CodeBlock;
    returnType: string;
    constructor(name: string, args: Array<SN_Declaration>, body: SN_CodeBlock, returnType: string);
    static parse(r: GLSLLexer): SN_Function;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: functionArg
 * @group GFX
 */
export declare class SN_FunctionArgs extends StatementNode {
    args: Array<SN_Expression>;
    constructor();
    static parse(r: GLSLLexer): SN_FunctionArgs;
}
/**
 * @internal
 * Statement node: functionCall
 * @group GFX
 */
export declare class SN_FunctionCall extends StatementNode {
    name: string;
    args: SN_FunctionArgs;
    constructor(name: string, args: SN_FunctionArgs);
    static parse(r: GLSLLexer): SN_FunctionCall;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: declaration
 * @group GFX
 */
export declare class SN_Declaration extends StatementNode {
    type: string;
    name: string;
    arraySize: SN_Expression;
    hasIn: boolean;
    hasOut: boolean;
    hasConst: boolean;
    constructor(type: string, name: string, arraySize?: SN_Expression);
    static parse(r: GLSLLexer): SN_Declaration;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: for
 * @group GFX
 */
export declare class SN_ForLoop extends StatementNode {
    expression1: StatementNode;
    condition: SN_Expression;
    expression2: SN_Expression;
    loopBody: SN_CodeBlock;
    constructor(expression1: StatementNode, condition: SN_Expression, expression2: SN_Expression, loopBody: SN_CodeBlock);
    static parse(r: GLSLLexer): SN_ForLoop;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: while
 * @group GFX
 */
export declare class SN_WhileLoop extends StatementNode {
    conditionExpr: SN_Expression;
    loopBody: SN_CodeBlock;
    constructor(condition: SN_Expression, loopBody: SN_CodeBlock);
    static parse(r: GLSLLexer): SN_WhileLoop;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: do-while
 * @group GFX
 */
export declare class SN_DoWhileLoop extends StatementNode {
    constructor();
}
/**
 * @internal
 * Statement node: if
 * @group GFX
 */
export declare class SN_IFBranch extends StatementNode {
    conditionExpr: SN_Expression;
    trueBranch: SN_CodeBlock;
    falseBranch: SN_CodeBlock;
    constructor(condition: SN_Expression, trueBranch: SN_CodeBlock, falseBranch: SN_CodeBlock);
    static parse(r: GLSLLexer): SN_IFBranch;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: expression
 * @group GFX
 */
export declare class SN_Expression extends StatementNode {
    constructor();
    static parse(r: GLSLLexer): SN_Expression;
    formatToWGSL(context: TranslatorContext, depth: number): string;
    protected static unionOperation(opStack: Array<GLSLLexerToken>, valueStack: Array<any>): boolean;
}
/**
 * @internal
 * Statement node: Paren expression
 * @group GFX
 */
export declare class SN_ParenExpression extends StatementNode {
    constructor();
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: identifier
 * @group GFX
 */
export declare class SN_Identifier extends StatementNode {
    name: string;
    constructor(name: string);
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: constant
 * @group GFX
 */
export declare class SN_Constant extends StatementNode {
    value: string;
    constructor(value: string);
    static parse(r: GLSLLexer): SN_Constant;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: array constant
 * @group GFX
 */
export declare class SN_ArrayConstant extends SN_Constant {
    arrayValue: SN_Constant[];
    constructor(value: SN_Constant[]);
    static parse(r: GLSLLexer): SN_ArrayConstant;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: process control(break)
 * @group GFX
 */
export declare class SN_Break extends StatementNode {
    constructor();
}
/**
 * @internal
 * Statement node: process control(discard)
 * @group GFX
 */
export declare class SN_Discard extends StatementNode {
    constructor();
}
/**
 * @internal
 * Statement node: process control(continue)
 * @group GFX
 */
export declare class SN_Continue extends StatementNode {
    constructor();
    static parse(r: GLSLLexer): SN_Continue;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: process control(return)
 * @group GFX
 */
export declare class SN_Return extends StatementNode {
    value: SN_Expression;
    constructor(value: SN_Expression);
    static parse(r: GLSLLexer): SN_Return;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: unary operation
 * @group GFX
 */
export declare class SN_UnaryOperation extends StatementNode {
    op: GLSLLexerToken;
    leftValue: StatementNode | undefined;
    rightValue: StatementNode | undefined;
    constructor(op: GLSLLexerToken, lValue: StatementNode | undefined, rValue: StatementNode | undefined);
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: binary operation
 * @group GFX
 */
export declare class SN_BinaryOperation extends StatementNode {
    op: GLSLLexerToken;
    leftValue: StatementNode;
    rightValue: StatementNode;
    constructor(op: GLSLLexerToken, lValue: StatementNode, rValue: StatementNode);
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: ternary operation
 * @group GFX
 */
export declare class SN_TernaryOperation extends StatementNode {
    condition: SN_Expression;
    expression1: SN_Expression;
    expression2: SN_Expression;
    constructor(condition: SN_Expression, expression1: SN_Expression, expression2: SN_Expression);
    static parse(r: GLSLLexer): SN_TernaryOperation;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: Expression of select(a.b)
 * @group GFX
 */
export declare class SN_SelectOperation extends StatementNode {
    leftValue: StatementNode;
    rightValue: StatementNode;
    constructor(lValue: StatementNode, rValue: StatementNode);
    static parse(r: GLSLLexer): SN_SelectOperation;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: Expression of index(a[b])
 * @group GFX
 */
export declare class SN_IndexOperation extends StatementNode {
    leftValue: StatementNode;
    indexValue: StatementNode;
    constructor(lValue: StatementNode, indexValue: StatementNode);
    static parse(r: GLSLLexer): SN_IndexOperation;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: code block
 * @group GFX
 */
export declare class SN_CodeBlock extends StatementNode {
    constructor();
    static parse(r: GLSLLexer): SN_CodeBlock;
}
/**
 * @internal
 * Statement node: precision
 * @group GFX
 */
export declare class SN_Precision extends StatementNode {
    type: string;
    qualifier: string;
    constructor(qualifier: string, type: string);
    static parse(r: GLSLLexer): SN_Precision;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
/**
 * @internal
 * Statement node: layout
 * @group GFX
 */
export declare class SN_Layout extends StatementNode {
    scope: string;
    qualifier: Map<string, string>;
    constructor();
    addQualifier(name: string, value?: string): void;
    static parse(r: GLSLLexer): SN_Layout;
    formatToWGSL(context: TranslatorContext, depth: number): string;
}
