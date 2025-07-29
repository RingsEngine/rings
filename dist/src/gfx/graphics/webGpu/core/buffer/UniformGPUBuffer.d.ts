import { GPUBufferBase } from "./GPUBufferBase";
export declare class UniformGPUBuffer extends GPUBufferBase {
    constructor(size: number, data?: Float32Array);
    genUniformNodes(): void;
}
