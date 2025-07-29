import { CEvent } from "../../event/CEvent";
import { SkeletonAnimationComponent } from "../SkeletonAnimationComponent";
export declare class OAnimationEvent extends CEvent {
    skeletonAnimation: SkeletonAnimationComponent;
    constructor(name: string, time: number);
}
