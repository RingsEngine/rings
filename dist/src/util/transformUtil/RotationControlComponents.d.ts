import { Object3D } from "../../core/entities/Object3D";
import { PointerEvent3D } from "../../event/eventConst/PointerEvent3D";
import { Vector3 } from "../../math/Vector3";
import { TransformAxisEnum } from "./TransformAxisEnum";
import { TransformControllerBaseComponent } from "./TransformControllerBaseComponent";
export declare class RotationControlComponents extends TransformControllerBaseComponent {
    protected applyLocalTransform(currentAxis: TransformAxisEnum, offset: Vector3, distance: number): void;
    protected getAngle(): number;
    protected mLastAngle: number;
    protected applyGlobalTransform(currentAxis: TransformAxisEnum, offset: Vector3, distance: number): void;
    onMouseDown(e: PointerEvent3D): void;
    onMouseUp(e: PointerEvent3D): void;
    protected createCustomAxis(axis: TransformAxisEnum): Object3D;
    protected createAxis(axis: TransformAxisEnum): Object3D;
    protected pickAxis(): {
        intersectPoint?: Vector3;
        distance: number;
        obj: Object3D;
        axis: TransformAxisEnum;
    };
}
