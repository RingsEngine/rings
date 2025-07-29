import { MemoryInfo } from "../../../../../core/pool/memory/MemoryInfo";
import { ArrayBufferData } from "./ArrayBufferData";
import { GPUBufferBase } from "./GPUBufferBase";
/**
 * 用于几何体索引的缓冲区
 * 可在计算着色器或CPU代码中写入
 * 使用标志: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.INDEX | GPUBufferUsage.INDIRECT
 * @group GFX
 */
export declare class IndicesGPUBuffer extends GPUBufferBase {
    indicesNode: MemoryInfo;
    constructor(data?: ArrayBufferData);
    protected createIndicesBuffer(usage: GPUBufferUsageFlags, data?: ArrayBufferData): void;
}
