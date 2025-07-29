import { RenderNode } from "../../../components/renderer/RenderNode";
export declare class CollectInfo {
    opaqueList: RenderNode[];
    transparentList: RenderNode[];
    sky: RenderNode;
    clean(): void;
}
