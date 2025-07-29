import { Object3D } from "../../core/entities/Object3D";
import { Vector3 } from "../../math/Vector3";
import { TransformAxisEnum } from "./TransformAxisEnum";
import { TransformControllerBaseComponent } from "./TransformControllerBaseComponent";
export declare class TranslationControlComponents extends TransformControllerBaseComponent {
    init(param?: any): void;
    protected applyLocalTransform(currentAxis: TransformAxisEnum, offset: Vector3, distance: number): void;
    protected applyGlobalTransform(currentAxis: TransformAxisEnum, offset: Vector3, distance: number): void;
    protected createCustomAxis(axis: TransformAxisEnum): Object3D;
    protected createArrows(axis: TransformAxisEnum): Object3D;
    protected createPlane(axis: TransformAxisEnum): Object3D;
}
