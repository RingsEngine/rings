import { RenderNode } from "../../../components/renderer/RenderNode";
import { PassType } from "../passRenderer/state/PassType";
export type RenderGroup = {
    key: string;
    bundleMap: Map<PassType, GPURenderBundle>;
    renderNodes: RenderNode[];
};
