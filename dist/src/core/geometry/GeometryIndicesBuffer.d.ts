import { ArrayBufferData } from "../../gfx/graphics/webGpu/core/buffer/ArrayBufferData";
import { IndicesGPUBuffer } from "../../gfx/graphics/webGpu/core/buffer/IndicesGPUBuffer";
import { VertexAttributeData } from "./VertexAttributeData";
export declare class GeometryIndicesBuffer {
    uuid: string;
    name: string;
    indicesGPUBuffer: IndicesGPUBuffer;
    indicesFormat: GPUIndexFormat;
    indicesCount: number;
    constructor();
    createIndicesBuffer(indicesData: VertexAttributeData): void;
    upload(data: ArrayBufferData): void;
    compute(): void;
    destroy(): void;
}
