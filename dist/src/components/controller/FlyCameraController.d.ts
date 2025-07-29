import { Vector3 } from "../../math/Vector3";
import { ComponentBase } from "../ComponentBase";
export declare class FlyCameraController extends ComponentBase {
    moveSpeed: number;
    targetPos: Vector3;
    lookAtPos: Vector3;
    config: {
        shiftMoveScale: number;
    };
    private _moveScale;
    private _dir;
    private _mouseFactory;
    private _factory;
    private _mouseDown;
    private _lastPos;
    private _keyState;
    constructor();
    setCamera(cameraPos: Vector3, lookAt: Vector3): void;
    start(): void;
    private mouseWheel;
    private keyUp;
    private keyDown;
    private Reset;
    private mouseDown;
    private mouseUp;
    get factory(): number;
    set factory(value: number);
    get mouseFactory(): number;
    set mouseFactory(value: number);
    private internal;
    onUpdate(): void;
    /**
     * @internal
     */
    destroy(force?: boolean): void;
}
