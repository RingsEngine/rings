import { Skeleton } from "./Skeleton";
import { SkeletonPose } from "./SkeletonPose";
import { OAnimationEvent } from "../OAnimationEvent";
export declare class SkeletonAnimationClip {
    name: string;
    protected _skeleton: Skeleton;
    protected _skeletonPoses: Array<SkeletonPose>;
    protected _animationClipData: Float32Array;
    protected _events: Array<OAnimationEvent>;
    constructor(name: string, skeleton: Skeleton, numFrame: number, bufferData: Float32Array);
    get totalTime(): number;
    get frameRate(): number;
    get skeleton(): Skeleton;
    get numFrame(): number;
    get animationClipData(): Float32Array;
    getSkeletonPose(frame: number): SkeletonPose;
    getLerpSkeletonPose(currFrame: number, nextFrame: number, weight: number, dst: SkeletonPose): SkeletonPose;
    createSubClip(name: string, startTime: number, endTime: number): SkeletonAnimationClip;
    addEvent(eventName: string, triggerTime: number): void;
    removeEvent(eventName: string): void;
    getEvents(): Array<OAnimationEvent>;
}
