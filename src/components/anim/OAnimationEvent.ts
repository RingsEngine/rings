import { CEvent } from "../../event/CEvent";
import { SkeletonAnimationComponent } from "../SkeletonAnimationComponent";

export class OAnimationEvent extends CEvent {
  public skeletonAnimation: SkeletonAnimationComponent;

  constructor(name: string, time: number) {
    super();
    this.type = name;
    this.time = time;
  }
}
