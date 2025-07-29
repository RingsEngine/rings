import { Camera3D } from "../../../../core/Camera3D";
import { CubeCamera } from "../../../../core/CubeCamera";
import { VirtualTexture } from "../../../../textures/VirtualTexture";
import { OcclusionSystem } from "../../occlusion/OcclusionSystem";
import { RendererBase } from "../RendererBase";
import { RenderNode } from "../../../../components/renderer/RenderNode";
import { View3D } from "../../../../core/View3D";
import { DepthCubeArrayTexture } from "../../../../textures/DepthCubeArrayTexture";
import { ILight } from "../../../../components/lights/ILight";
import { RenderContext } from "../RenderContext";
import { ClusterLightingBuffer } from "../cluster/ClusterLightingBuffer";
type CubeShadowMapInfo = {
    cubeCamera: CubeCamera;
    depthTexture: VirtualTexture[];
    renderContext: RenderContext[];
};
export declare class PointLightShadowRenderer extends RendererBase {
    shadowPassCount: number;
    private _forceUpdate;
    private _shadowCameraDic;
    shadowCamera: Camera3D;
    cubeArrayTexture: DepthCubeArrayTexture;
    colorTexture: VirtualTexture;
    shadowSize: number;
    constructor();
    getShadowCamera(view: View3D, lightBase: ILight): CubeShadowMapInfo;
    render(view: View3D, occlusionSystem: OcclusionSystem): void;
    private renderSceneOnce;
    protected drawShadowRenderNodes(view: View3D, shadowCamera: Camera3D, renderContext: RenderContext, nodes: RenderNode[], occlusionSystem: OcclusionSystem): void;
    drawNodes(view: View3D, camera: Camera3D, renderContext: RenderContext, nodes: RenderNode[], occlusionSystem: OcclusionSystem, clusterLightingBuffer: ClusterLightingBuffer): void;
}
export {};
