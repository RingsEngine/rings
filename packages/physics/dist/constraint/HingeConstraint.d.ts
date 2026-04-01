import { Vector3 } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
import { ConstraintBase } from "./ConstraintBase";
/**
 * 铰链约束
 */
export declare class HingeConstraint extends ConstraintBase<Ammo.btHingeConstraint> {
    /**
     * 自身刚体上的铰链轴方向。
     * 默认值 `Vector3.UP`
     */
    axisSelf: Vector3;
    /**
     * 目标刚体上的铰链轴方向。
     * 默认值 `Vector3.UP`
     */
    axisTarget: Vector3;
    /**
     * 是否使用自身刚体的参考框架。
     * 默认值 `true`
     */
    useReferenceFrameA: boolean;
    /**
     * 是否使用两个刚体的变换重载方式。
     * 如果为 true，则使用两个刚体的变换作为约束的参考框架。
     * 默认值 `false`
     */
    useTwoBodiesTransformOverload: boolean;
    private _pendingLimits;
    private _pendingMotorConfig;
    /**
     * 获取当前的限制参数。
     */
    get limitInfo(): [number, number, number, number, number?];
    /**
     * 获取当前的马达配置参数。
     */
    get motorConfigInfo(): [boolean, number, number];
    /**
     * 设置铰链约束的旋转限制。
     * @param low - 铰链旋转的最小角度（下限）。
     * @param high - 铰链旋转的最大角度（上限）。
     * @param softness - 软限制系数，表示限制的柔软程度。值在0到1之间，1表示完全刚性。
     * @param biasFactor - 偏置因子，用于控制限制恢复力的力度。值通常在0到1之间。
     * @param relaxationFactor -（可选）松弛因子，控制限制恢复的速度。值越大，恢复越快。
     */
    setLimit(low: number, high: number, softness: number, biasFactor: number, relaxationFactor?: number): void;
    /**
     * 启用或禁用角度马达。
     * @param enableMotor - 是否启用马达。
     * @param targetVelocity - 马达的目标速度。
     * @param maxMotorImpulse - 马达的最大推力。
     */
    enableAngularMotor(enableMotor: boolean, targetVelocity: number, maxMotorImpulse: number): void;
    protected createConstraint(selfBody: Ammo.btRigidBody, targetBody: Ammo.btRigidBody | null): void;
}
