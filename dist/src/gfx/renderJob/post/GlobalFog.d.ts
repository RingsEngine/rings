import { Color } from "../../../math/Color";
import { VirtualTexture } from "../../../textures/VirtualTexture";
import { PostBase } from "./PostBase";
import { View3D } from "../../../core/View3D";
import { RTFrame } from "../frame/RTFrame";
export declare class GlobalFog extends PostBase {
    /**
     * @internal
     */
    private fogSetting;
    fogOpTexture: VirtualTexture;
    private fogCompute;
    private fogUniform;
    private rendererPassState;
    constructor();
    private createCompute;
    private uploadSetting;
    rtFrame: RTFrame;
    private createResource;
    /**
     * @internal
     */
    onAttach(view: View3D): void;
    /**
     * @internal
     */
    onDetach(view: View3D): void;
    set fogType(v: number);
    get fogType(): number;
    set fogHeightScale(v: number);
    get fogHeightScale(): number;
    set start(v: number);
    get start(): number;
    set end(v: number);
    get end(): number;
    set ins(v: number);
    get ins(): number;
    set density(v: number);
    get density(): number;
    set skyRoughness(v: number);
    get skyRoughness(): number;
    set skyFactor(v: number);
    get skyFactor(): number;
    set overrideSkyFactor(v: number);
    get overrideSkyFactor(): number;
    /**
     * @internal
     */
    get fogColor(): Color;
    /**
     * @internal
     */
    set fogColor(value: Color);
    set falloff(v: number);
    get falloff(): number;
    set rayLength(v: number);
    get rayLength(): number;
    set scatteringExponent(v: number);
    get scatteringExponent(): number;
    set dirHeightLine(v: number);
    get dirHeightLine(): number;
    private _lastSkyTexture;
    private getSkyTexture;
    /**
     * @internal
     */
    render(view: View3D, command: GPUCommandEncoder): void;
    onResize(): void;
}
