import { Keyframe } from "./enum/Keyframe";
import { AnimationCurve, BytesArray, KeyframeT, Quaternion, Vector2, Vector3, Vector4 } from "..";
export type CurveValueT = number | Vector2 | Vector3 | Vector4 | Quaternion;
export declare class AnimationCurveT {
    path: string;
    attribute: string;
    propertys: string[];
    preInfinity: number;
    postInfinity: number;
    rotationOrder: number;
    m_curves: AnimationCurve[];
    private k;
    private _cacheValue;
    private _kValue;
    constructor(k?: number);
    private check;
    get totalTime(): number;
    addKeyFrame(keyFrame: KeyframeT): void;
    removeKeyFrame(keyFrame: KeyframeT): void;
    getValue(time: number): CurveValueT;
    getKeyCount(): number;
    getKey(index: number): Keyframe[];
    formBytes(bytes: BytesArray): void;
}
