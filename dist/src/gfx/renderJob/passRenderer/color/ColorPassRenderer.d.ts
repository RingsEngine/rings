import { RenderNode } from "../../../../components/renderer/RenderNode";
import { View3D } from "../../../../core/View3D";
import { OcclusionSystem } from "../../occlusion/OcclusionSystem";
import { RenderContext } from "../RenderContext";
import { RendererBase } from "../RendererBase";
import { ClusterLightingBuffer } from "../cluster/ClusterLightingBuffer";
export declare class ColorPassRenderer extends RendererBase {
    constructor();
    render(view: View3D, occlusionSystem: OcclusionSystem, clusterLightingBuffer?: ClusterLightingBuffer, maskTr?: boolean): void;
    drawNodes(view: View3D, renderContext: RenderContext, nodes: RenderNode[], occlusionSystem: OcclusionSystem, clusterLightingBuffer: ClusterLightingBuffer): void;
    protected occlusionRenderNodeTest(i: number, id: number, occlusionSystem: OcclusionSystem): boolean;
}
