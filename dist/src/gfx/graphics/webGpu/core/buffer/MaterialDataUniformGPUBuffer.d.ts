import { UniformNode } from "../uniforms/UniformNode";
import { GPUBufferBase } from "./GPUBufferBase";
export declare class MaterialDataUniformGPUBuffer extends GPUBufferBase {
    uniformNodes: UniformNode[];
    private _onChange;
    constructor();
    initDataUniform(uniformNodes: UniformNode[]): void;
    onChange(): void;
    apply(): void;
}
