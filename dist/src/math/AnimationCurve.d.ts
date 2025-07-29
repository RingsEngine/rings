import { FrameCache } from "./enum/FrameCache";
import { WrapTimeMode } from "./enum/WrapTimeMode";
import { Keyframe } from "./enum/Keyframe";
export declare class AnimationCurve {
    private _totalTime;
    private _cache;
    private _cacheOut;
    private _InvalidateCache;
    curve: Keyframe[];
    serializedVersion: number;
    preWarpMode: number;
    postWarpMode: number;
    rotationOrder: number;
    get cacheOut(): {
        lhsIndex: number;
        rhsIndex: number;
    };
    constructor(frames?: Keyframe[], preWarpMode?: WrapTimeMode, postWarpMode?: WrapTimeMode);
    get totalTime(): number;
    get first(): Keyframe;
    get last(): Keyframe;
    addKeyFrame(keyFrame: Keyframe): void;
    removeKeyFrame(keyFrame: Keyframe): void;
    calculateCacheData(cache: FrameCache, lhsIndex: number, rhsIndex: number, timeOffset?: number): void;
    getValue(time: number): number;
    getCurveFramesExtent(time: number): {
        lhsIndex: number;
        rhsIndex: number;
        time: number;
    };
    getKeyCount(): number;
    getKey(index: number): Keyframe;
    unSerialized(data: any): this;
    unSerialized2(data: Object): this;
    wrapTime(curveT: number): number;
    private evaluateCache;
    private findCurve;
    private setupStepped;
    private invalidateCache;
    private calcTotalTime;
    static scaleCurveValue(curve: AnimationCurve, scale: number): void;
}
