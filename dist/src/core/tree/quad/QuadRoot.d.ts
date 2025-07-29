import { Vector3 } from "../../../math/Vector3";
import { IQuadNode } from "./IQuadNode";
export declare class QuadRoot {
    private _maxNodesPerCell;
    private _minCellSize;
    private _quadTree;
    private _collisionNodesIdx;
    private _segBox;
    private _collisionNodes;
    constructor(maxNodesPerCell?: number, minCellSize?: number);
    createQuadTree(nodes: Array<IQuadNode>): void;
    getNodesByAABB(minX: number, minY: number, maxX: number, maxY: number): Array<IQuadNode>;
    getTriangleAtPoint(point: Vector3, threshold?: number): IQuadNode;
}
