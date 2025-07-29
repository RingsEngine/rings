import { GeometryBase } from "../../..";
import { View3D } from "../../../core/View3D";
import { ClusterLightingBuffer } from "../../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
import { RendererPassState } from "../../../gfx/renderJob/passRenderer/state/RendererPassState";
import { PassType } from "../../../gfx/renderJob/passRenderer/state/PassType";
import { MeshRenderer } from "../../renderer/MeshRenderer";
import { GUIGeometry } from "./GUIGeometry";
export declare class GUIRenderer extends MeshRenderer {
    protected _guiGeometry: GUIGeometry;
    init(param?: any): void;
    get geometry(): GeometryBase;
    set geometry(value: GeometryBase);
    nodeUpdate(view: View3D, rendererType: PassType, renderPassState: RendererPassState, clusterLightingBuffer: ClusterLightingBuffer): void;
    onUpdate(view?: View3D): void;
}
