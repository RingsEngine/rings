import { Ammo } from '../Physics';
import { ConstraintBase } from './ConstraintBase';
/**
 * 固定约束
 */
export declare class FixedConstraint extends ConstraintBase<Ammo.btFixedConstraint> {
    protected createConstraint(selfBody: Ammo.btRigidBody, targetBody: Ammo.btRigidBody | null): void;
}
