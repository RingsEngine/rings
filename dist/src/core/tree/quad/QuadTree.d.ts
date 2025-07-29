import { IQuadNode } from "./IQuadNode";
import { QuadAABB } from "./QuadAABB";
export declare class QuadTree {
    private _cells;
    private _rootCell;
    private _quadNodes;
    private _aabb;
    private _cellsToTest;
    private _testID;
    constructor();
    getQuadNode(idx: number): IQuadNode;
    clear(): void;
    initNodes(nodes: Array<IQuadNode>): void;
    buildQuadTree(maxNodesPerCell: number, minCellSize: number): void;
    private createAABox;
    private doesNodeIntersectCell;
    getNodesIntersectingtAABox(result: Array<number>, aabb: QuadAABB): number;
    private pointInTriangle;
    private incrementTestCounter;
    private logDeep;
    private logTree;
}
