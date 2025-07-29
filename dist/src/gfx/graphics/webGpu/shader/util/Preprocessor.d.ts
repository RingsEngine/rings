export declare class Preprocessor {
    static parse(code: string, defineValue: {
        [name: string]: any;
    }): string;
    static parseComputeShader(code: string, defineValue: {
        [name: string]: any;
    }): string;
    protected static parsePreprocess(context: PreprocessorContext, code: string, defineValue: {
        [name: string]: any;
    }): string;
    protected static parseAutoBindingForAllGroup(code: string): string;
    protected static parseAutoBindingForGroupX(code: string, nGroup: number): string;
    protected static parseAutoLocation(code: string): string;
    protected static parseAutoLocationBlock(code: string): string;
    protected static parsePreprocessCommand(context: PreprocessorContext, code: string, defineValue: {
        [name: string]: any;
    }): string;
    protected static parseCondition(condition: string, defineValue: {
        [name: string]: any;
    }): boolean;
    static filterComment(code: string): string;
    protected static extract(str: string, leftStr: string, rightStr: string): string;
}
declare class PreprocessorContext {
    includeMap: Map<string, boolean>;
    constructor();
}
export {};
