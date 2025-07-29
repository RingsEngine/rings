import { CEvent } from "../../../event/CEvent";
import { PropertyAnimation } from "./PropertyAnimation";
export declare class AnimatorEventKeyframe {
    clipName: string;
    data: any;
    time: number;
}
export declare class PropertyAnimationEvent extends CEvent {
    static SEEK: string;
    static COMPLETE: string;
    animation: PropertyAnimation;
    frame: AnimatorEventKeyframe;
    constructor(animation: PropertyAnimation, name: string);
}
