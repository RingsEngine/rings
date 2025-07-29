import { BytesArray } from "../../../../util/BytesArray";
import { PrefabBoneData } from "./PrefabBoneData";
export declare class PrefabAvatarData {
    name: string;
    count: number;
    boneData: PrefabBoneData[];
    boneMap: Map<string, PrefabBoneData>;
    formBytes(bytes: BytesArray): void;
}
