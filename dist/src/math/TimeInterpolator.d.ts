export interface TimeInterpolator {
    getInterpolation(input: number): number;
}
export declare class AccelerateInterpolator implements TimeInterpolator {
    private _factor;
    private _doubleFactor;
    constructor();
    get accelerateInterpolator(): number;
    set accelerateInterpolator(factor: number);
    getInterpolation(input: number): number;
}
export declare class DecelerateInterpolator implements TimeInterpolator {
    private _factor;
    constructor();
    get decelerateInterpolator(): number;
    set decelerateInterpolator(factor: number);
    getInterpolation(input: number): number;
}
export declare class AccelerateDecelerateInterpolator implements TimeInterpolator {
    private _factor;
    constructor();
    getInterpolation(input: number): number;
}
export declare class LinearInterpolator implements TimeInterpolator {
    getInterpolation(input: number): number;
}
export declare class JumperInterpolator implements TimeInterpolator {
    getInterpolation(t: number): number;
}
export declare class BounceInterpolator implements TimeInterpolator {
    constructor();
    private static bounce;
    getInterpolation(t: number): number;
    getBounceInterpolation(t: number): number;
    geJumpUp(v0: number, t: number): number;
}
export declare class AnticipateInterpolator implements TimeInterpolator {
    private _tension;
    constructor();
    get anticipateInterpolator(): number;
    set anticipateInterpolator(tension: number);
    getInterpolation(t: number): number;
}
export declare class AnticipateOvershootInterpolator implements TimeInterpolator {
    private _tension;
    constructor();
    anticipateOvershootInterpolator(tension: number): void;
    anticipateOvershootInterpolator2(tension: number, extraTension: number): void;
    getInterpolation(t: any): number;
    private static a;
    private static o;
}
export declare class CycleInterpolator implements TimeInterpolator {
    private _cycles;
    constructor(cycles: any);
    getInterpolation(t: any): number;
}
export declare class OvershootInterpolator implements TimeInterpolator {
    private _tension;
    constructor();
    getInterpolation(t: any): number;
}
export declare enum InterpolatorEnum {
    /**
     * Acceleration interpolator, animation acceleration runs to the end.
     */
    AccelerateInterpolator = 0,
    /**
     * Slow down interpolator, animation slow down run to end.
     */
    DecelerateInterpolator = 1,
    /**
     * Acceleration and deceleration interpolator, animation first speed up and then decelerate.
     */
    AccelerateDecelerateInterpolator = 2,
    /**
     * Linear interpolator, animation uniform motion.
     */
    LinearInterpolator = 3,
    /**
     * Elastic interpolator, before the end of the animation will have an elastic animation effect.
     */
    BounceInterpolator = 4,
    /**
     * Step back and then speed up to the end.
     */
    AnticipateInterpolator = 5,
    /**
     * Take a small step back, then speed up, then go a little beyond the finish line and then come back.
     */
    AnticipateOvershootInterpolator = 6,
    /**
     * Cyclic motion
     */
    CycleInterpolator = 7,
    /**
     * Finish the animation quickly, go a little beyond the end point and then go back to the end point.
     */
    OvershootInterpolator = 8,
    /**
     * @internal
     */
    JumperInterpolator = 9
}
export declare class Interpolator {
    /**
     * @internal
     */
    static interpolators: Interpolator[];
    /**
     * @internal
     */
    complete: boolean;
    /**
     * @internal
     */
    onComplete: Function;
    /**
     * @internal
     */
    onProgress: Function;
    /**
     * @internal
     */
    target: any;
    /**
     * @internal
     */
    property: any;
    /**
     * @internal
     */
    targetProperty: any;
    /**
     * @internal
     */
    durtion: number;
    /**
     * @internal
     */
    interpolatorEnum: InterpolatorEnum;
    /**
     * @internal
     */
    delayTime: number;
    private _interpolator;
    private _ct;
    private _p;
    /**
     * Creates an animation from the current property to the specified target property.
     * @param target Objects that need to be animated
     * @param property Animation parameter
     * @param durtion Animation duration, usually seconds
     * @param interpolatorEnum Interpolator type
     * @returns
     */
    static to(target: any, property: any, durtion: number, interpolatorEnum?: InterpolatorEnum): Interpolator;
    /**
     * @internal
     */
    static tick(delta: number): void;
    /**
     * @internal
     */
    static remove(interpolator: Interpolator, dispose?: boolean): void;
    static removeList(interpolators: Interpolator[], dispose?: boolean): void;
    /**
     * @internal
     */
    start(): void;
    /**
     * @internal
     */
    tick(delta: number): void;
    /**
     * @internal
     */
    dispose(): void;
}
