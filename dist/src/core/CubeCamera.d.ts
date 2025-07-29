import { Camera3D } from "./Camera3D";
import { Object3D } from "./entities/Object3D";
export declare class CubeCamera extends Object3D {
    up_camera: Camera3D;
    down_camera: Camera3D;
    left_camera: Camera3D;
    right_camera: Camera3D;
    front_camera: Camera3D;
    back_camera: Camera3D;
    private _near;
    private _far;
    constructor(near?: number, far?: number, fov?: number, isShadow?: boolean);
    initCubeCamera(near: number, far: number, fov?: number, isShadow?: boolean): void;
    set near(value: number);
    get near(): number;
    set far(value: number);
    get far(): number;
}
