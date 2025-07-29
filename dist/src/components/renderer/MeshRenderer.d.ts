import { Object3D } from "../../core/entities/Object3D";
import { View3D } from "../../core/View3D";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
import { GeometryBase } from "../../core/geometry/GeometryBase";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { MorphTargetData } from "../anim/morphAnim/MorphTargetData";
import { RenderNode } from "./RenderNode";
import { Material } from "../../materials/Material";
export declare class MeshRenderer extends RenderNode {
    receiveShadow: boolean;
    morphData: MorphTargetData;
    constructor();
    onEnable(): void;
    onDisable(): void;
    cloneTo(obj: Object3D): void;
    copyComponent(from: this): this;
    get geometry(): GeometryBase;
    set geometry(value: GeometryBase);
    get material(): Material;
    set material(value: Material);
    setMorphInfluence(key: string, value: number): void;
    setMorphInfluenceIndex(index: number, value: number): void;
    onCompute(view: View3D, command: GPUCommandEncoder): void;
    nodeUpdate(view: View3D, passType: PassType, renderPassState: RendererPassState, clusterLightingBuffer: ClusterLightingBuffer): void;
    destroy(force?: boolean): void;
}
