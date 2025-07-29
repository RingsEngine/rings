import { Camera3D } from "../core/Camera3D";
import { Object3D } from "../core/entities/Object3D";
import { ComponentBase } from "./ComponentBase";
import { BillboardType } from "./gui/GUIConfig";
export declare class BillboardComponent extends ComponentBase {
    type: BillboardType;
    camera: Camera3D;
    private _cameraPosition;
    constructor();
    onUpdate(): void;
    private updateBillboardMatrix;
    cloneTo(obj: Object3D): void;
}
