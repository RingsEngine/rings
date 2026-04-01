import { Ammo } from '../Physics';
import { ConstraintBase } from './ConstraintBase';
/**
 * 点到点约束
 */
export declare class PointToPointConstraint extends ConstraintBase<Ammo.btPoint2PointConstraint> {
    protected createConstraint(selfBody: Ammo.btRigidBody, targetBody: Ammo.btRigidBody | null): void;
}
