import { RenderNode } from "../../../components/renderer/RenderNode";
import { RenderGroup } from "./RenderGroup";
export declare class EntityBatchCollect {
    renderGroup: Map<string, RenderGroup>;
    constructor();
    collect_add(node: RenderNode): void;
}
