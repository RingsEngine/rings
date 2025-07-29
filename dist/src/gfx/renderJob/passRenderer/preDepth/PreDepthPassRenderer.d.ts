import { RenderNode } from "../../../../components/renderer/RenderNode";
import { View3D } from "../../../../core/View3D";
import { VirtualTexture } from "../../../../textures/VirtualTexture";
import { OcclusionSystem } from "../../occlusion/OcclusionSystem";
import { RendererBase } from "../RendererBase";
import { ClusterLightingBuffer } from "../cluster/ClusterLightingBuffer";
import { ZCullingCompute } from "./ZCullingCompute";
export declare class PreDepthPassRenderer extends RendererBase {
    zBufferTexture: VirtualTexture;
    useRenderBundle: boolean;
    shadowPassCount: number;
    zCullingCompute: ZCullingCompute;
    constructor();
    render(view: View3D, occlusionSystem: OcclusionSystem): void;
    protected drawRenderNodes(view: View3D, encoder: GPURenderPassEncoder, command: GPUCommandEncoder, nodes: RenderNode[], occlusionSystem: OcclusionSystem, clusterLightingBuffer?: ClusterLightingBuffer): void;
}
