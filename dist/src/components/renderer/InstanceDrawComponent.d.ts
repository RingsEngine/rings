import { RenderContext } from "../../gfx/renderJob/passRenderer/RenderContext";
import { RenderNode } from "./RenderNode";
import { View3D } from "../../core/View3D";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
export declare class InstanceDrawComponent extends RenderNode {
    private _keyRenderGroup;
    private _keyBufferGroup;
    private _keyIdsGroup;
    constructor();
    init(param?: any): void;
    start(): void;
    reset(): void;
    nodeUpdate(view: View3D, passType: PassType, renderPassState: RendererPassState, clusterLightingBuffer?: ClusterLightingBuffer): void;
    renderPass(view: View3D, passType: PassType, renderContext: RenderContext): void;
    renderItem(view: View3D, passType: PassType, renderNode: RenderNode, renderContext: RenderContext): void;
    beforeDestroy(force?: boolean): void;
}
