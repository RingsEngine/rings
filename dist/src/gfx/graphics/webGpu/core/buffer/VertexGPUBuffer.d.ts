import { MemoryInfo } from "../../../../../core/pool/memory/MemoryInfo";
import { GPUBufferBase } from "./GPUBufferBase";
export declare class VertexGPUBuffer extends GPUBufferBase {
    node: MemoryInfo;
    constructor(size: number);
    protected createVertexBuffer(usage: GPUBufferUsageFlags, size: number): void;
}
