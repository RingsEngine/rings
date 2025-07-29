import { PostBase } from "./PostBase";
import { View3D } from "../../../core/View3D";
export declare class OutlinePost extends PostBase {
    /**
     * @internal
     */
    private outlineTex;
    /**
     * @internal
     */
    private lowTex;
    /**
     * @internal
     */
    private rendererPassState;
    /**
     * @internal
     */
    private calcWeightCompute;
    /**
     * @internal
     */
    private outlineCompute;
    /**
     * @internal
     */
    private blendCompute;
    /**
     * @internal
     */
    private outlineSetting;
    /**
     * @internal
     */
    private slotsBuffer;
    /**
     * @internal
     */
    private slotsArray;
    /**
     * @internal
     */
    private entitiesArray;
    /**
     * @internal
     */
    private entitiesBuffer;
    /**
     * @internal
     */
    private weightBuffer;
    /**
     * @internal
     */
    private lowTexSize;
    /**
     * @internal
     */
    private oldOutlineColor;
    /**
     * @internal
     */
    private rtFrame;
    private view;
    constructor();
    /**
     * @internal
     */
    onAttach(view: View3D): void;
    /**
     * @internal
     */
    onDetach(view: View3D): void;
    set outlinePixel(value: number);
    get outlinePixel(): number;
    set fadeOutlinePixel(value: number);
    get fadeOutlinePixel(): number;
    set strength(value: number);
    get strength(): number;
    set useAddMode(value: boolean);
    get useAddMode(): boolean;
    private createGUI;
    private createCompute;
    private createResource;
    private fetchData;
    private fetchOutlineData;
    private computeList;
    /**
     * @internal
     */
    render(view: View3D, command: GPUCommandEncoder): void;
    onResize(): void;
}
