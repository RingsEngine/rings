import { ComputeGPUBuffer } from "../../../graphics/webGpu/core/buffer/ComputeGPUBuffer";
import { UniformGPUBuffer } from "../../../graphics/webGpu/core/buffer/UniformGPUBuffer";
export declare class ClusterLightingBuffer {
    clusterBuffer: ComputeGPUBuffer;
    lightAssignBuffer: ComputeGPUBuffer;
    assignTableBuffer: ComputeGPUBuffer;
    clustersUniformBuffer: UniformGPUBuffer;
    constructor(numClusters: number, maxNumLightsPerCluster: number);
    update(width: number, height: number, clusterPix: number, clusterTileX: number, clusterTileY: number, clusterTileZ: number, numLights: number, maxNumLightsPerCluster: number, near: number, far: number): void;
}
