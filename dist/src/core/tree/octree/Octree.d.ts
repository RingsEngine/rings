import { CollectInfo } from "../../..";
import { Ray } from "../../../math/Ray";
import { Vector3 } from "../../../math/Vector3";
import { BoundingBox } from "../../bound/BoundingBox";
import { Frustum } from "../../bound/Frustum";
import { OctreeEntity } from "./OctreeEntity";
export declare class Octree {
    private static _v1;
    private static _v2;
    readonly entities: Map<string, OctreeEntity>;
    readonly box: BoundingBox;
    readonly subTrees: Octree[];
    readonly parent: Octree;
    readonly level: number;
    static readonly maxSplitLevel = 6;
    private static readonly autoSplitLevel;
    readonly index: number;
    readonly uuid: string;
    constructor(size: BoundingBox, index?: number, parent?: Octree, level?: number);
    tryInsertEntity(entity: OctreeEntity): boolean;
    private splitTree;
    __rayCastTempVector: Vector3;
    rayCasts(ray: Ray, ret: OctreeEntity[]): boolean;
    frustumCasts(frustum: Frustum, ret: OctreeEntity[]): boolean;
    getRenderNode(frustum: Frustum, ret: CollectInfo): boolean;
    boxCasts(box: BoundingBox, ret: OctreeEntity[]): boolean;
    clean(): this;
}
