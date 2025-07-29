import { PropertyAnimClip } from "./PropertyAnimClip";
import { PropertyAnimation } from "./PropertyAnimation";
export declare class AnimationMonitor {
    static readonly Complete: number;
    static readonly Seek: number;
    private _rootObject3D;
    private _animation;
    private _propertyCache;
    private _currentClip;
    private _frame;
    private _time;
    private _isPlaying;
    speed: number;
    private _propertyTagDic;
    constructor(animation: PropertyAnimation);
    private reset;
    get time(): number;
    get currentClip(): PropertyAnimClip;
    play(clip: PropertyAnimClip, reset?: boolean): void;
    private parseAnimClip;
    stop(): this;
    toggle(): this;
    get isPlaying(): boolean;
    update(time: number, delta: number): void;
    seek(time: number): this;
    private calcTime;
    private validProperty;
    private applyProperty;
}
