import { Scene3D } from "../../../../core/Scene3D";
import { ComputeGPUBuffer } from "../../../graphics/webGpu/core/buffer/ComputeGPUBuffer";
import { Texture } from "../../../graphics/webGpu/core/texture/Texture";
import { ComputeShader } from "../../../graphics/webGpu/shader/ComputeShader";
import { OcclusionSystem } from "../../occlusion/OcclusionSystem";
export declare class ZCullingCompute {
    computeShader: ComputeShader;
    visibleBuffer: ComputeGPUBuffer;
    texture: Texture;
    constructor();
    compute(scene: Scene3D, occlusionSystem: OcclusionSystem): void;
}
