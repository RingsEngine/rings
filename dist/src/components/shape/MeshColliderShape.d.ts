import { GeometryBase, Matrix4, Ray, ColliderShape, HitInfo } from "@rings/core";
export declare class MeshColliderShape extends ColliderShape {
    mesh: GeometryBase;
    private static triangle;
    private _pickRet;
    constructor();
    rayPick(ray: Ray, fromMatrix: Matrix4): HitInfo;
}
