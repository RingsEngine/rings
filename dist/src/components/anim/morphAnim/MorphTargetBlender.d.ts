import { MorphTargetMapper } from "./MorphTargetKey";
import { ComponentBase } from "../../ComponentBase";
import { MorphTargetFrame } from "./MorphTargetFrame";
import { SkinnedMeshRenderer2 } from "../../renderer/SkinnedMeshRenderer2";
export declare class MorphTargetBlender extends ComponentBase {
    private _targetRenderers;
    private _vec3;
    private _matrix4;
    private _quaternion;
    init(param?: any): void;
    getMorphRenderersByKey(key: string): SkinnedMeshRenderer2[];
    cloneMorphRenderers(): {
        [key: string]: SkinnedMeshRenderer2[];
    };
    applyBlendShape(frame: MorphTargetFrame, keyMapper: MorphTargetMapper, multiplier?: number): void;
    private applyMorphTargetInfluence;
    private fetchMorphRenderers;
}
