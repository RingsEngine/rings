import { Camera3D } from "../core/Camera3D";
import { Object3D } from "../core/entities/Object3D";
import { Vector3 } from "../math/Vector3";
export declare class CameraUtil {
    static createCamera3DObject(parent?: Object3D, name?: string): Camera3D;
    static createCamera3D(object3D?: Object3D, parent?: Object3D, name?: string): Camera3D;
    static UnProjection(sX: number, sY: number, sZ?: number, camera?: Camera3D): Vector3;
    static Projection(point: Vector3, camera: Camera3D, target?: Vector3): Vector3;
    static UnProjection2(sceneX: number, sceneY: number, z: number, camera: Camera3D, target: Vector3): Vector3;
}
