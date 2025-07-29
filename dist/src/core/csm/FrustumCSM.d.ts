import { Color } from "../../math/Color";
import { Matrix4 } from "../../math/Matrix4";
import { Vector3 } from "../../math/Vector3";
import { ShadowSetting } from "../../setting/ShadowSetting";
import { Camera3D } from "../Camera3D";
import { BoundingBox } from "../bound/BoundingBox";
declare class FrustumSection {
    corners: Vector3[];
    index: number;
    constructor(index: number);
}
declare class FrustumChild {
    bound: BoundingBox;
    twoSections: FrustumSection[];
    name: string;
    color: Color;
    shadowCamera: Camera3D;
    readonly index: number;
    constructor(near: FrustumSection, far: FrustumSection, index: number);
    updateBound(): this;
}
export declare class FrustumCSM {
    sections: FrustumSection[];
    children: FrustumChild[];
    name: string;
    constructor(blockCount: number);
    update(p: Matrix4, pvInv: Matrix4, near: number, far: number, shadowSetting: ShadowSetting): this;
    private squareSplit;
    private uniformSplit;
    private logSplit;
}
export {};
