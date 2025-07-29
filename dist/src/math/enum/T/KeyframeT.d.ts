import { CurveValueType } from "../../../loader/parser/prefab/prefabData/ValueParser";
import { ValueEnumType } from "../../../loader/parser/prefab/prefabData/ValueType";
import { BytesArray } from "../../../util/BytesArray";
import { Keyframe } from "../Keyframe";
export declare class KeyframeT {
    serializedVersion: string;
    time: number;
    tangentMode: number;
    weightedMode: number;
    propertyKeyFrame: {
        [k: number]: Keyframe;
    };
    constructor(time?: number);
    getK(k: number): Keyframe;
    split(type: ValueEnumType, value: CurveValueType, property: string): void;
    private getKeyFrame;
    formBytes(bytes: BytesArray): void;
}
