import { View3D } from "../../core/View3D";
import { MeshRenderer } from "./MeshRenderer";
import { Texture } from "../../gfx/graphics/webGpu/core/texture/Texture";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { SkyMaterial } from "../../materials/SkyMaterial";
export declare class SkyRenderer extends MeshRenderer {
    skyMaterial: SkyMaterial;
    init(): void;
    onEnable(): void;
    onDisable(): void;
    nodeUpdate(view: View3D, passType: PassType, renderPassState: RendererPassState, clusterLightingBuffer?: ClusterLightingBuffer): void;
    renderPass2(view: View3D, passType: PassType, rendererPassState: RendererPassState, clusterLightingBuffer: ClusterLightingBuffer, encoder: GPURenderPassEncoder, useBundle?: boolean): void;
    set map(texture: Texture);
    get map(): Texture;
    get exposure(): number;
    set exposure(value: number);
    get roughness(): number;
    set roughness(value: number);
    useSkyReflection(): void;
}
