export declare class MorePassShader {
    name: string;
    passMap: Map<string, PassShader[]>;
}
export declare class PassShader {
    passType: string;
    shaderState: Map<string, any>;
    vertexShader: string;
    fragmentShader: string;
}
export declare class MorePassParser {
    protected static passKeyword: string;
    protected static shaderKeyword: string;
    protected static vertexKeyword: string;
    protected static fragmentKeyword: string;
    protected static passTypeKeyword: string;
    static parser(code: string, defineValue: {
        [name: string]: any;
    }): MorePassShader;
    protected static splitPassBlock(code: string): string[];
    protected static parserPassBlock(code: string): PassShader;
    protected static parserShaderState(passShader: PassShader, code: string): boolean;
    protected static convertValue(str: string): number | boolean | string;
    private static extractBlock;
}
