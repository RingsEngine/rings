import { FloatArray } from "@rings/wasm-matrix/WasmMatrix";
import { Object3D, PrefabAvatarData, RenderNode, SkinnedMeshRenderer2, StorageGPUBuffer, View3D } from "../..";
import { PropertyAnimationClip } from "../../math/AnimationCurveClip";
import { ComponentBase } from "../ComponentBase";
export declare class AnimatorComponent extends ComponentBase {
    timeScale: number;
    jointMatrixIndexTableBuffer: StorageGPUBuffer;
    playBlendShapeLoop: boolean;
    protected inverseBindMatrices: FloatArray[];
    protected _avatar: PrefabAvatarData;
    protected _rendererList: SkinnedMeshRenderer2[];
    protected propertyCache: Map<RenderNode, {
        [name: string]: any;
    }>;
    protected _clips: PropertyAnimationClip[];
    protected _clipsState: PropertyAnimationClipState[];
    protected _clipsMap: Map<string, PropertyAnimationClip>;
    protected _currentSkeletonClip: PropertyAnimationClipState;
    protected _currentBlendAnimClip: PropertyAnimationClip;
    private _skeletonTime;
    private _blendShapeTime;
    private _skeletonSpeed;
    private _blendShapeSpeed;
    private _skeletonStart;
    private _blendShapeStart;
    root: Object3D;
    private _avatarName;
    private _bonePos;
    private _boneScale;
    private _boneRot;
    private _crossFadeState;
    init(param?: any): void;
    start(): void;
    private debug;
    playAnim(anim: string, time?: number, speed?: number): void;
    crossFade(anim: string, crossTime: number): void;
    playBlendShape(shapeName: string, time?: number, speed?: number): void;
    set avatar(name: string);
    get numJoint(): number;
    getJointIndexTable(skinJointsName: Array<string>): number[];
    private skeltonPoseObject3D;
    private skeltonTPoseObject3D;
    private buildSkeletonPose;
    set clips(clips: PropertyAnimationClip[]);
    get clips(): PropertyAnimationClip[];
    get clipsState(): PropertyAnimationClipState[];
    cloneTo(obj: Object3D): void;
    private updateTime;
    onUpdate(view?: View3D): void;
    private updateSkeletonAnim;
    private updateMorphAnim;
    updateBlendShape(attributes: string[], key: string, value: number): void;
    private updateSkeletonAnimMix;
    private getPosition;
    private getRotation;
    private getScale;
    getAnimationClipState(name: string): PropertyAnimationClipState;
    cloneMorphRenderers(): {
        [key: string]: SkinnedMeshRenderer2[];
    };
}
export declare class PropertyAnimationClipState {
    clip: PropertyAnimationClip;
    weight: number;
    get totalTime(): number;
    constructor(clip: PropertyAnimationClip);
}
