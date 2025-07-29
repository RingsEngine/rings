import { Object3D } from "../../core/entities/Object3D";
import { ComponentBase } from "../ComponentBase";
export declare class ThirdPersonCameraController extends ComponentBase {
    focus: Object3D;
    private _rotation;
    distance: number;
    private _camera;
    constructor();
    start(): void;
    private mouseDown;
    private mouseUp;
    private mouseMove;
    private mouseWheel;
    onUpdate(): void;
    destroy(force?: boolean): void;
}
