import { CEvent } from "../../../event/CEvent";
import { PropertyAnimation } from "./PropertyAnimation";

export class AnimatorEventKeyframe {
  public clipName: string;
  public data: any;
  public time: number;
}

export class PropertyAnimationEvent extends CEvent {
  public static SEEK: string = "SEEK";
  public static COMPLETE: string = "COMPLETE";

  public animation: PropertyAnimation;
  public frame: AnimatorEventKeyframe;

  constructor(animation: PropertyAnimation, name: string) {
    super(name);
    this.animation = animation;
  }
}
