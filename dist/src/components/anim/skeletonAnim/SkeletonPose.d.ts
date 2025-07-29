import { JointPose } from "./JointPose";
import { Skeleton } from "./Skeleton";
export declare class SkeletonPose {
    time: number;
    protected _skeleton: Skeleton;
    protected _jointsPose: Array<JointPose>;
    protected mJointMatrixIndexTable: Array<number>;
    constructor(skeleton: Skeleton, useGlobalMatrix?: boolean);
    buildSkeletonPose(poseData: Float32Array): void;
    get numJoint(): number;
    get joints(): Array<JointPose>;
    get jointMatrixIndexTable(): Array<number>;
    lerp(a: SkeletonPose, b: SkeletonPose, weight: number): void;
    copyFrom(other: SkeletonPose): void;
    reset(): void;
}
