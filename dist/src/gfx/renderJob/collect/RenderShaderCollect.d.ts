import { RenderNode } from "../../../components/renderer/RenderNode";
import { View3D } from "../../../core/View3D";
export type RenderShaderList = Map<string, Map<string, RenderNode>>;
export declare class RenderShaderCollect {
    renderShaderUpdateList: Map<View3D, RenderShaderList>;
    renderNodeList: Map<View3D, Map<string, RenderNode>>;
    collect_add(node: RenderNode): void;
    collect_remove(node: RenderNode): void;
}
