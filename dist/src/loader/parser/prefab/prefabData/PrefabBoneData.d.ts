import { Quaternion } from "../../../../math/Quaternion";
import { Vector3 } from "../../../../math/Vector3";
import { BytesArray } from "../../../../util/BytesArray";
export declare class PrefabBoneData {
    boneName: string;
    bonePath: string;
    parentBoneName: string;
    boneID: number;
    parentBoneID: number;
    instanceID: string;
    parentInstanceID: string;
    t: Vector3;
    q: Quaternion;
    s: Vector3;
    formBytes(bytes: BytesArray): void;
}
