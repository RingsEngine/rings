import { Matrix4 } from "../../math/Matrix4";
import { Ray } from "../../math/Ray";
import { Vector3 } from "../../math/Vector3";
import { ColliderShape } from "./ColliderShape";
/**
 * 球形碰撞检测
 * @group Collider
 */
export declare class SphereColliderShape extends ColliderShape {
    private _pickRet;
    private readonly box;
    /**
     * 碰撞半径
     */
    radius: number;
    /**
     * @constructor
     * @param radius radius of this collider
     */
    constructor(radius: number);
    rayPick(ray: Ray, fromMatrix: Matrix4): {
        intersect: boolean;
        intersectPoint?: Vector3;
        distance: number;
    };
}
