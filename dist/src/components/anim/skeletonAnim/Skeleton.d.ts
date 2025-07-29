import { Joint } from "./Joint";
export declare class Skeleton {
    joints: Array<Joint>;
    constructor(joints?: Array<Joint>);
    get numJoint(): number;
    addJoint(joint: Joint): void;
    getJointName(jointIndex: number): string;
    getJointParentIndex(jointIndex: number): number;
    getJointByName(name: string): Joint;
}
