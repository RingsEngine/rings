import { Ray } from "../../../math/Ray";
import { Vector3 } from "../../../math/Vector3";
import { BoundingBox } from "../../bound/BoundingBox";
import { IKDTreeUserData } from "./IKDTreeUserData";
import { KDTreeEntity } from "./KDTreeEntity";
import { KDTreeSpace } from "./KDTreeSpace";
/**
 * @internal
 * @group Core
 */
export declare class KDTreeUUID {
    private static UUID;
    readonly uuid: string;
    constructor();
}
/**
 * @internal
 * @group Core
 */
declare class KDTreeNodeMap {
    map: {
        [key: string]: KDTreeEntity;
    };
    private _count;
    get count(): number;
    push(entity: KDTreeEntity): boolean;
    remove(uuid: string): boolean;
}
/**
 * @internal
 * @group Core
 */
export declare class KDTreeNode extends KDTreeUUID {
    protected _dimensionIndex: number;
    protected _dimensions: string[];
    protected _dimension: string;
    protected _left: KDTreeNode;
    protected _right: KDTreeNode;
    protected _space: KDTreeSpace;
    protected _parent: KDTreeNode;
    protected _entities: KDTreeNodeMap;
    protected readonly layer: any;
    get dimension(): string;
    constructor(layer?: number);
    initNode(parent: KDTreeNode, dimensions: string[], index: number): this;
    updateEntity(entity: KDTreeEntity): void;
    buildRoot(list: IKDTreeUserData[]): void;
    private _splitEntityList;
    protected autoSplit(): void;
    protected setSpace(less: boolean, value: number): this;
    protected isEmpty(): boolean;
    pushEntity(entity: KDTreeEntity): boolean;
    removeEntity(entity: KDTreeEntity): boolean;
    static nodeCount: number;
    autoClear(): void;
    protected clearLeaf(): boolean;
    isContain(value: number): boolean;
    private static rangeBox;
    protected nodeIntersectsBox(box: BoundingBox): boolean;
    protected nodeIntersectsRay(ray: Ray): boolean;
    pointCast(point: {
        [key: string]: number;
    }, squareDistance?: number, ret?: KDTreeEntity[]): void;
    boxCast(box: BoundingBox, ret?: KDTreeEntity[]): void;
    private pointIntersect;
    rayCast(ray: Ray, ret?: KDTreeEntity[], pts?: Vector3[]): void;
}
export {};
