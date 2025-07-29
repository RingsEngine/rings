import { UniformNode } from "../../core/uniforms/UniformNode";
import { ConstValue } from "./ConstValue";
import { ShaderReflection } from "./ShaderReflectionInfo";
import { ShaderState } from "./ShaderState";
export type ShaderUniform = {
    [uniName: string]: UniformNode;
};
export type ShaderConst = {
    [uniName: string]: ConstValue;
};
export type ShaderDefines = {
    [uniName: string]: boolean | number | string;
};
export type ShaderValue = {
    vs?: string;
    fs?: string;
    compute?: string;
    vs_Source?: string;
    fs_Source?: string;
    compute_Source?: string;
    vs_shader?: string;
    fs_shader?: string;
    vsModule?: GPUShaderModule;
    fsModule?: GPUShaderModule;
    csModule?: GPUShaderModule;
    shaderVariant?: string;
    uniforms?: ShaderUniform;
    constValues?: ShaderConst;
    defines?: ShaderDefines;
    shaderState?: ShaderState;
    shaderReflection?: ShaderReflection;
};
