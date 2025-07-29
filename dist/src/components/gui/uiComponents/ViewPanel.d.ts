import { Object3D } from "../../../core/entities/Object3D";
import { GUISpace } from "../GUIConfig";
import { UIPanel } from "./UIPanel";
export declare class ViewPanel extends UIPanel {
    readonly isViewPanel = true;
    readonly space: GUISpace;
    constructor();
    cloneTo(obj: Object3D): void;
}
