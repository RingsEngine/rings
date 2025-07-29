import { Struct } from "../../../../../util/struct/Struct";
import { GPUBufferBase } from "./GPUBufferBase";
export declare class StructStorageGPUBuffer<T extends Struct> extends GPUBufferBase {
    constructor(struct: {
        new (): T;
    }, count: number, usage?: number);
}
