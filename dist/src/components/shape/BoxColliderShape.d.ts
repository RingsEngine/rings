import { Matrix4 } from "../../math/Matrix4";
import { Ray } from "../../math/Ray";
import { ColliderShape, HitInfo } from "./ColliderShape";
export declare class BoxColliderShape extends ColliderShape {
    private _pickRet;
    private readonly box;
    constructor();
    rayPick(ray: Ray, fromMatrix: Matrix4): HitInfo;
}
