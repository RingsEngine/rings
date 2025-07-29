import { Object3D } from "../../core/entities/Object3D";
import { Vector3 } from "../../math/Vector3";
export declare class CameraControllerBase {
    protected _autoUpdate: boolean;
    protected _target: Object3D | null;
    protected _lookAtObject: Object3D | null;
    protected _origin: Vector3;
    protected _speed: number;
    constructor(targetObject?: Object3D | null, lookAtObject?: Object3D | null);
    get target(): Object3D | null;
    set target(val: Object3D | null);
    get lookAtObject(): Object3D | null;
    set lookAtObject(val: Object3D | null);
    get speed(): number;
    set speed(val: number);
    update(): void;
}
