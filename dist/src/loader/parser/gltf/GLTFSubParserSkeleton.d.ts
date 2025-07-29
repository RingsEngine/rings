import { PrefabAvatarData, PropertyAnimationClip } from "../../..";
import { Skeleton } from "../../../components/anim/skeletonAnim/Skeleton";
import { SkeletonAnimationClip } from "../../../components/anim/skeletonAnim/SkeletonAnimationClip";
import { GLTF_Info } from "./GLTFInfo";
import { GLTFSubParser } from "./GLTFSubParser";
export declare class GLTFSubParserSkeleton {
    protected gltf: GLTF_Info;
    protected subParser: GLTFSubParser;
    constructor(subParser: GLTFSubParser);
    parse(skeletonID: number): PrefabAvatarData;
    parseSkeletonAnimation(avatarData: PrefabAvatarData, animation: any): PropertyAnimationClip;
    parseSkeletonAnimationOld(skeleton: Skeleton, animation: any): SkeletonAnimationClip;
    private buildSkeleton;
    private buildSkeletonOld;
}
