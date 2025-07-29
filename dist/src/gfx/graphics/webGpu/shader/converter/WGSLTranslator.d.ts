import { GLSLSyntax } from "./GLSLSyntax";
import { ShaderConverterResult } from "./ShaderConverter";
import { SN_Layout, StatementNode } from "./StatementNode";
/**
 * @internal
 * WGSLCode Translator
 * @group GFX
 */
export declare class WGSLTranslator {
    result: string;
    ASTRoot: StatementNode;
    protected _syntax: GLSLSyntax;
    constructor(syntax: GLSLSyntax);
    /**
     * Generate WGSL code
     * @returns WGSL code
     */
    generateWGSL(): ShaderConverterResult;
}
/**
 * The translator context
 * @internal
 * @group GFX
 */
export declare class TranslatorContext {
    protected _stage: string;
    protected _builtinIn: Array<string>;
    protected _builtinOut: Array<string>;
    protected _layoutsIn: Array<SN_Layout>;
    protected _layoutsOut: Array<SN_Layout>;
    protected _layoutUniformCount: number;
    protected _workGroupSize: SN_Layout;
    protected _parentContext?: TranslatorContext;
    protected _identifierEnv: Map<string, string>;
    constructor(context?: TranslatorContext);
    get stage(): string;
    set stage(value: string);
    get builtinIn(): Array<string>;
    get builtinOut(): Array<string>;
    get layoutsIn(): Array<SN_Layout>;
    get layoutsOut(): Array<SN_Layout>;
    get layoutUniformCount(): number;
    set layoutUniformCount(value: number);
    get workGroupSize(): SN_Layout;
    set workGroupSize(value: SN_Layout);
    get parentContext(): TranslatorContext | undefined;
    findIdentifier(name: string): string;
    addIdentifier(name: string, value: string): void;
    hasIdentifier(name: string): boolean;
}
