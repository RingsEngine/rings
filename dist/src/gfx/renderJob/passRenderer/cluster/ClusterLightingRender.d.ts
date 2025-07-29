import { View3D } from "../../../../core/View3D";
import { OcclusionSystem } from "../../occlusion/OcclusionSystem";
import { RendererBase } from "../RendererBase";
import { ClusterLightingBuffer } from "./ClusterLightingBuffer";
/**
 * 集群光照
 */
export declare class ClusterLightingRender extends RendererBase {
    maxNumLightsPerCluster: number;
    clusterPix: number;
    clusterLightingBuffer: ClusterLightingBuffer;
    private _currentLightCount;
    private _clusterGenerateCompute;
    private _clusterLightingCompute;
    private _useCamera;
    private resize;
    constructor(view: View3D);
    private initCompute;
    render(view: View3D, occlusionSystem: OcclusionSystem): void;
}
