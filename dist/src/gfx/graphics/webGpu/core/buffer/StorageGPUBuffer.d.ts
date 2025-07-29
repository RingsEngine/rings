import { ArrayBufferData } from "./ArrayBufferData";
import { GPUBufferBase } from "./GPUBufferBase";
export declare class StorageGPUBuffer extends GPUBufferBase {
    constructor(size: number, usage?: number, data?: ArrayBufferData);
}
