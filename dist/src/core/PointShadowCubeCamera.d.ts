import { Camera3D } from "./Camera3D";
import { Object3D } from "./entities/Object3D";
export declare class PointShadowCubeCamera extends Object3D {
    up_camera: Camera3D;
    down_camera: Camera3D;
    left_camera: Camera3D;
    right_camera: Camera3D;
    front_camera: Camera3D;
    back_camera: Camera3D;
    set label(v: string);
    constructor(near?: number, far?: number, fov?: number, isShadow?: boolean);
    initCubeCamera(near: number, far: number, fov?: number, isShadow?: boolean): void;
}
