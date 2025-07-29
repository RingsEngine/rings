import { Object3D } from "../../../core/entities/Object3D";
import { ComponentBase } from "../../ComponentBase";
export declare class GUICanvas extends ComponentBase {
    readonly isGUICanvas: boolean;
    index: number;
    /**
     *
     * Add an Object3D
     * @param child Object3D
     * @returns
     */
    addChild(child: Object3D): this;
    /**
     *
     * Remove the child
     * @param child Removed Object3D
     */
    removeChild(child: Object3D): this;
    cloneTo(obj: Object3D): void;
    copyComponent(from: this): this;
}
