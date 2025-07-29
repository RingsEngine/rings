import { View3D } from "../../core/View3D";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { Reflection } from "./Reflection";
export declare class SphereReflection extends Reflection {
    init(): void;
    debug(index: number, scale?: number): void;
    onEnable(): void;
    onDisable(): void;
    renderPass2(view: View3D, passType: PassType, rendererPassState: RendererPassState, clusterLightingBuffer: ClusterLightingBuffer, encoder: GPURenderPassEncoder, useBundle?: boolean): void;
}
