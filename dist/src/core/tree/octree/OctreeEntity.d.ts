import { RenderNode } from "../../../components/renderer/RenderNode";
import { Octree } from "./Octree";
export declare class OctreeEntity {
    readonly renderer: RenderNode;
    owner: Octree;
    readonly uuid: string;
    constructor(renderer: RenderNode);
    leaveNode(): void;
    enterNode(node: Octree): void;
    update(root: Octree): Octree;
}
