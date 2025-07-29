import { Camera3D } from "../../../../core/Camera3D";
import { OcclusionSystem } from "../../occlusion/OcclusionSystem";
import { RendererBase } from "../RendererBase";
import { View3D } from "../../../../core/View3D";
import { GBufferFrame } from "../../frame/GBufferFrame";
import { ClusterLightingBuffer } from "../cluster/ClusterLightingBuffer";
import { RenderContext } from "../RenderContext";
import { RenderNode } from "../../../../components/renderer/RenderNode";
import { ComputeShader } from "../../../graphics/webGpu/shader/ComputeShader";
import { VirtualTexture } from "../../../../textures/VirtualTexture";
import { UniformGPUBuffer } from "../../../graphics/webGpu/core/buffer/UniformGPUBuffer";
export declare class ReflectionRenderer extends RendererBase {
    private cubeCamera;
    gBuffer: GBufferFrame;
    sizeW: number;
    sizeH: number;
    probeSize: number;
    probeCount: number;
    mipCount: number;
    preFilteredEnvironmentCompute: ComputeShader;
    outTexture: VirtualTexture;
    preFilteredEnvironmentUniform: UniformGPUBuffer;
    private onChange;
    private needUpdate;
    /**
     *
     * @param volume
     */
    constructor();
    forceUpdate(): void;
    compute(view: View3D, occlusionSystem: OcclusionSystem): void;
    render(view: View3D, occlusionSystem: OcclusionSystem, clusterLightingBuffer?: ClusterLightingBuffer, maskTr?: boolean, hasPost?: boolean): void;
    renderOnce(view: View3D, camera: Camera3D, encoder: any, occlusionSystem: OcclusionSystem, clusterLightingBuffer?: ClusterLightingBuffer, maskTr?: boolean): void;
    drawNodes(view: View3D, renderContext: RenderContext, nodes: RenderNode[], occlusionSystem: OcclusionSystem, clusterLightingBuffer: ClusterLightingBuffer): void;
    protected occlusionRenderNodeTest(i: number, id: number, occlusionSystem: OcclusionSystem): boolean;
}
