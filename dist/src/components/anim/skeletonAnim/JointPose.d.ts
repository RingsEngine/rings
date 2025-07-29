import { Matrix4 } from "../../../math/Matrix4";
export declare class JointPose {
    index: number;
    worldMatrix: Matrix4;
    constructor(index: number, useGlobalMatrix?: boolean);
}
