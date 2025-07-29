import { Texture } from "../core/texture/Texture";
import { ShaderPassBase } from "./ShaderPassBase";
import { ShaderReflectionVarInfo } from "./value/ShaderReflectionInfo";
export declare class ComputeShader extends ShaderPassBase {
    entryPoint: string;
    workerSizeX: number;
    workerSizeY: number;
    workerSizeZ: number;
    protected _computePipeline: GPUComputePipeline;
    protected _csShaderModule: GPUShaderModule;
    protected _destCS: string;
    protected _sourceCS: string;
    private _storageTextureDic;
    private _sampleTextureDic;
    private _groupsShaderReflectionVarInfos;
    private _groupCache;
    constructor(computeShader: string);
    setStorageTexture(name: string, texture: Texture): void;
    setSamplerTexture(name: string, texture: Texture): void;
    compute(computePass: GPUComputePassEncoder): void;
    private createBufferBindGroup;
    protected noticeBufferChange(name: string): void;
    protected genGroups(groupIndex: number, infos: ShaderReflectionVarInfo[][], force?: boolean): void;
    protected genComputePipeline(): void;
    protected preCompileShader(shader: string): void;
    protected compileShader(): GPUShaderModule;
    private genReflection;
}
