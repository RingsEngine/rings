import { ComputeShader } from "../ComputeShader";
import { RenderShaderPass } from "../RenderShaderPass";
import { ShaderPassBase } from "../ShaderPassBase";
import { ShaderValue } from "./ShaderValue";
export type ShaderReflectionAttribute = {
    name: string;
    group: number;
    location: number;
    type: string;
    valueType: string;
    value: number;
    size: number;
    format: GPUVertexFormat;
};
export type ShaderReflectionVarInfo = {
    group: number;
    binding: number;
    varType: string;
    varName: string;
    dataType: string;
    dataIsBuiltinType: boolean;
    dataFields: ShaderReflectionStructInfo[];
};
export type ShaderReflectionStructInfo = {
    name: string;
    type: string;
};
export declare class ShaderReflection {
    private static _shaderReflectionMap;
    attributes: ShaderReflectionAttribute[];
    vs_variables: ShaderReflectionVarInfo[];
    fs_variables: ShaderReflectionVarInfo[];
    cs_variables: ShaderReflectionVarInfo[];
    groups: ShaderReflectionVarInfo[][];
    variables: {
        [name: string]: ShaderReflectionVarInfo;
    };
    useSplit: boolean;
    static parser(wgsl: string, shaderValue: ShaderValue): void;
    static parser2(wgsl: string, shaderBase: ShaderPassBase): void;
    static combineShaderReflectionVarInfo(shaderReflection: ShaderReflection, shader_variables: ShaderReflectionVarInfo[]): void;
    static final(shaderBase: ShaderPassBase): void;
    static getShaderReflection2(code: string, shaderBase: ShaderPassBase): void;
    static poolGetReflection(shaderVariant: string): ShaderReflection;
    static genShaderVar(shaderValue: ShaderValue): string;
    static genShaderVariant(shader: ShaderPassBase): string;
    static genRenderShaderVariant(renderShader: RenderShaderPass): string;
    static genComputeShaderVariant(computeShader: ComputeShader): string;
    combine(shaderValue: ShaderValue): void;
    private static parserVariables;
    private static extract;
    private static isBuiltinTypes;
    private static parserStructFields;
    private static parserVertexOld;
    private static parserVertex;
    private static parserAttribute;
}
