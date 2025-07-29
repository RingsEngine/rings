import { Navi3DMesh } from "./Navi3DMesh";
import { Navi3DTriangle } from "./Navi3DTriangle";
export declare class Navi3DAstar {
    private _openedList;
    private _closedList;
    private _endNode;
    private _startNode;
    private _triangleChannel;
    private _navMesh;
    private _findIndex;
    constructor();
    findPath(navMesh: Navi3DMesh, startTriangle: Navi3DTriangle, endTriangle: Navi3DTriangle): boolean;
    private search;
    private buildPath;
    get channel(): Array<Navi3DTriangle>;
}
