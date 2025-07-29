import { RenderNode } from "../../../../components/renderer/RenderNode";
import { Camera3D } from "../../../../core/Camera3D";
import { View3D } from "../../../../core/View3D";
import { Depth2DTextureArray } from "../../../../textures/Depth2DTextureArray";
import { OcclusionSystem } from "../../occlusion/OcclusionSystem";
import { RendererPassState } from "../state/RendererPassState";
import { RendererBase } from "../RendererBase";
import { ClusterLightingBuffer } from "../cluster/ClusterLightingBuffer";
export declare class ShadowMapPassRenderer extends RendererBase {
    shadowPassCount: number;
    depth2DArrayTexture: Depth2DTextureArray;
    rendererPassStates: RendererPassState[];
    private _forceUpdate;
    constructor();
    setShadowMap(size: number, cascades: number): void;
    render(view: View3D, occlusionSystem: OcclusionSystem): void;
    private copyDepthTexture;
    private _shadowPos;
    private _shadowCameraTarget;
    private poseShadowCamera;
    compute(): void;
    private renderShadow;
    protected renderShadowBundleOp(view: View3D, shadowCamera: Camera3D, state: RendererPassState): any[];
    protected renderShadowBundleTr(view: View3D, shadowCamera: Camera3D, state: RendererPassState): any[];
    protected recordShadowRenderBundleNode(view: View3D, shadowCamera: Camera3D, encoder: any, nodes: RenderNode[], clusterLightingBuffer?: ClusterLightingBuffer): void;
    protected drawShadowRenderNodes(view: View3D, shadowCamera: Camera3D, encoder: GPURenderPassEncoder, nodes: RenderNode[], clusterLightingBuffer?: ClusterLightingBuffer): void;
}
