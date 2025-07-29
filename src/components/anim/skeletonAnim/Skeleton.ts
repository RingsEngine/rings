import { Joint } from "./Joint";

export class Skeleton {
  public joints: Array<Joint>;
  constructor(joints: Array<Joint> = []) {
    this.joints = joints;
  }

  public get numJoint(): number {
    return this.joints.length;
  }

  public addJoint(joint: Joint) {
    joint.index = this.joints.push(joint) - 1;
  }

  public getJointName(jointIndex: number): string {
    return this.joints[jointIndex].name;
  }

  public getJointParentIndex(jointIndex: number): number {
    let joint = this.joints[jointIndex];
    return joint.parent ? joint.parent.index : -1;
  }

  public getJointByName(name: string): Joint {
    for (let joint of this.joints) {
      if (joint.name == name) {
        return joint;
      }
    }
    return null;
  }
}
