import { Vector3 } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
import { ConstraintBase } from "./ConstraintBase";
/**
 * 通用六自由度约束
 */
export declare class Generic6DofConstraint extends ConstraintBase<Ammo.btGeneric6DofConstraint> {
    private _linearLowerLimit;
    private _linearUpperLimit;
    private _angularLowerLimit;
    private _angularUpperLimit;
    /**
     * default: `-1e30, -1e30, -1e30`
     */
    get linearLowerLimit(): Vector3;
    set linearLowerLimit(value: Vector3);
    /**
     * default: `1e30, 1e30, 1e30`
     */
    get linearUpperLimit(): Vector3;
    set linearUpperLimit(value: Vector3);
    /**
     * default: `-Math.PI, -Math.PI, -Math.PI`
     */
    get angularLowerLimit(): Vector3;
    set angularLowerLimit(value: Vector3);
    /**
     * default: `Math.PI, Math.PI, Math.PI`
     */
    get angularUpperLimit(): Vector3;
    set angularUpperLimit(value: Vector3);
    /**
     * 是否使用线性参考坐标系。
     * 默认值: `true`
     */
    useLinearFrameReferenceFrame: boolean;
    protected createConstraint(selfBody: Ammo.btRigidBody, targetBody: Ammo.btRigidBody | null): void;
}
