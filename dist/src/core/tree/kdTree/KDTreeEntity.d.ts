import { Ray } from "../../../math/Ray";
import { Vector3 } from "../../../math/Vector3";
import { BoundingBox } from "../../bound/BoundingBox";
import { IKDTreeUserData } from "./IKDTreeUserData";
import { KDTreeNode, KDTreeUUID } from "./KDTreeNode";
/**
 * @internal
 * @group Core
 */
export declare class KDTreeEntity extends KDTreeUUID {
    readonly userData: IKDTreeUserData;
    node: KDTreeNode;
    constructor(data: IKDTreeUserData);
    centerValue(dimension: string): number;
    isInNode(node: KDTreeNode, dimension: string): boolean;
    entityContainPoint(point: {
        [p: string]: number;
    }): boolean;
    squareDistanceTo(point: {
        [p: string]: number;
    }, dimensions: string[]): number;
    entityIntersectsBox(box: BoundingBox): boolean;
    entityIntersectsRay(ray: Ray, target: Vector3): boolean;
    attachTreeNode(node: KDTreeNode): boolean;
    detachTreeNode(): boolean;
    updateNode(root: KDTreeNode): void;
}
