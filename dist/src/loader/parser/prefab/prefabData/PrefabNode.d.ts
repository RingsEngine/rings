import { Quaternion } from "../../../../math/Quaternion";
import { Vector3 } from "../../../../math/Vector3";
import { BytesArray } from "../../../../util/BytesArray";
import { KV } from "./KVData";
export declare class ComData {
    comName: string;
    data: KV[];
    static parser(bytesArray: BytesArray): ComData;
}
export declare class PrefabNode {
    name: string;
    parentName: string;
    position: Vector3;
    rotation: Quaternion;
    scale: Vector3;
    comDatas: ComData[];
    child: PrefabNode[];
    static parser(bytesArray: BytesArray): PrefabNode;
}
