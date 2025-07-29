import { Quaternion } from "../../../math/Quaternion";
import { Vector3 } from "../../../math/Vector3";
export declare class Joint {
    name: string;
    index: number;
    instanceID: string;
    parent: Joint;
    scale: Vector3;
    rotation: Quaternion;
    translation: Vector3;
    constructor(name?: string);
}
