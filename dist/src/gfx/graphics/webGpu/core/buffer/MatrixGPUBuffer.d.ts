import { FloatArray } from "@rings/wasm-matrix/WasmMatrix";
import { ArrayBufferData } from "./ArrayBufferData";
import { GPUBufferBase } from "./GPUBufferBase";
export declare class MatrixGPUBuffer extends GPUBufferBase {
    size: number;
    constructor(size: number, usage?: number, data?: ArrayBufferData);
    writeBufferByHeap(floatArray: FloatArray, len: number): void;
}
