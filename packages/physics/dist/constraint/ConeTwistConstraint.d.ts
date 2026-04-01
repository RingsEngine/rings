import { Ammo } from '../Physics';
import { ConstraintBase } from './ConstraintBase';
/**
 * 锥形扭转约束
 */
export declare class ConeTwistConstraint extends ConstraintBase<Ammo.btConeTwistConstraint> {
    private _twistSpan;
    private _swingSpan1;
    private _swingSpan2;
    /**
     * 扭转角度限制，绕 X 轴的扭转范围。
     * 默认值 `Math.PI`
     */
    get twistSpan(): number;
    set twistSpan(value: number);
    /**
     * 摆动角度限制1，绕 Y 轴的摆动范围。
     * 默认值 `Math.PI`
     */
    get swingSpan1(): number;
    set swingSpan1(value: number);
    /**
     * 摆动角度限制2，绕 Z 轴的摆动范围。
     * 默认值 `Math.PI`
     */
    get swingSpan2(): number;
    set swingSpan2(value: number);
    protected createConstraint(selfBody: Ammo.btRigidBody, targetBody: Ammo.btRigidBody | null): void;
}
