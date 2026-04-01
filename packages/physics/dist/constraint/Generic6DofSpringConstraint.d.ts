import { Vector3 } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
import { ConstraintBase } from "./ConstraintBase";
/**
 * 弹簧特性六自由度约束
 */
export declare class Generic6DofSpringConstraint extends ConstraintBase<Ammo.btGeneric6DofSpringConstraint> {
    private _linearLowerLimit;
    private _linearUpperLimit;
    private _angularLowerLimit;
    private _angularUpperLimit;
    private _springParams;
    private _stiffnessParams;
    private _dampingParams;
    private _equilibriumPointParams;
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
     * 启用或禁用弹簧功能。
     * @param index 弹簧的索引
     * @param onOff 是否启用
     */
    enableSpring(index: number, onOff: boolean): void;
    /**
     * 设置弹簧的刚度。
     * @param index 弹簧的索引
     * @param stiffness 刚度值
     */
    setStiffness(index: number, stiffness: number): void;
    /**
     * 设置弹簧的阻尼。
     * @param index 弹簧的索引
     * @param damping 阻尼值
     */
    setDamping(index: number, damping: number): void;
    /**
     * 设置弹簧的平衡点。
     *
     * @param index 弹簧的索引（可选）。如果不提供，则重置所有弹簧的平衡点。
     * @param val 平衡点值（可选）。如果提供，则设置指定弹簧的平衡点为该值。
     *
     * - 不带参数时，重置所有弹簧的平衡点。
     * - 只带 `index` 参数时，设置指定弹簧的平衡点（值由系统内部处理）。
     * - 带 `index` 和 `val` 参数时，设置指定弹簧的平衡点为 `val`。
     */
    setEquilibriumPoint(index?: number, val?: number): void;
    /**
     * 是否使用线性参考坐标系。
     * 默认值 `true`
     */
    useLinearFrameReferenceFrame: boolean;
    protected createConstraint(selfBody: Ammo.btRigidBody, targetBody: Ammo.btRigidBody | null): void;
    private setConstraint;
}
