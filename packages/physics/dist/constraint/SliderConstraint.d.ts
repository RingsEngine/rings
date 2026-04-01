import { Ammo } from '../Physics';
import { ConstraintBase } from './ConstraintBase';
/**
 * 滑动关节约束
 */
export declare class SliderConstraint extends ConstraintBase<Ammo.btSliderConstraint> {
    private _lowerLinLimit;
    private _upperLinLimit;
    private _lowerAngLimit;
    private _upperAngLimit;
    private _poweredLinMotor;
    private _maxLinMotorForce;
    private _targetLinMotorVelocity;
    /**
     * 是否使用线性参考框架。
     * 默认值 `true`
     */
    useLinearReferenceFrame: boolean;
    protected createConstraint(selfBody: Ammo.btRigidBody, targetBody: Ammo.btRigidBody | null): void;
    /**
     * 线性运动的下限限制。
     * 默认值 `-1e30` 表示无限制
     */
    get lowerLinLimit(): number;
    set lowerLinLimit(value: number);
    /**
     * 线性运动的上限限制。
     * 默认值 `1e30` 表示无限制
     */
    get upperLinLimit(): number;
    set upperLinLimit(value: number);
    /**
     * 角度运动的下限限制。
     * 默认值 `-Math.PI`
     */
    get lowerAngLimit(): number;
    set lowerAngLimit(value: number);
    /**
     * 角度运动的上限限制。
     * 默认值 `Math.PI`
     */
    get upperAngLimit(): number;
    set upperAngLimit(value: number);
    /**
     * 是否启用线性马达。
     * 默认值 `false`
     */
    get poweredLinMotor(): boolean;
    set poweredLinMotor(value: boolean);
    /**
     * 线性马达的最大推力。
     * 默认值 `0`
     */
    get maxLinMotorForce(): number;
    set maxLinMotorForce(value: number);
    /**
     * 线性马达的目标速度。
     * 默认值 `0`
     */
    get targetLinMotorVelocity(): number;
    set targetLinMotorVelocity(value: number);
}
