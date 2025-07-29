import { SkeletonAnimationClip } from "./SkeletonAnimationClip";
import { SkeletonPose } from "./SkeletonPose";
export declare class SkeletonAnimationClipState {
    loop: boolean;
    speed: number;
    t: number;
    time: number;
    weight: number;
    currFrame: number;
    lastFrame: number;
    nextFrame: number;
    clip: SkeletonAnimationClip;
    animation: any;
    protected _isEnd: boolean;
    protected _currSkeletonPose: SkeletonPose;
    constructor(clip: SkeletonAnimationClip);
    reset(): void;
    get name(): string;
    get currSkeletonPose(): SkeletonPose;
    update(delta: number): void;
}
