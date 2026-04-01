import { ComponentBase, Vector3, Quaternion } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
import { Rigidbody } from "../rigidbody/Rigidbody";
/**
 * 约束基类
 */
export declare class ConstraintBase<T extends Ammo.btTypedConstraint> extends ComponentBase {
    protected _targetRigidbody: Rigidbody;
    protected _constraint: T;
    private _initResolve;
    private _initializationPromise;
    private _breakingThreshold;
    /**
     * The pivot point for the self body
     * `FrameInA Origin`
     */
    pivotSelf: Vector3;
    /**
     * The pivot point for the target body
     * `FrameInB Origin`
     */
    pivotTarget: Vector3;
    /**
     * The rotation for the self body
     * `FrameInA Rotation`
     */
    rotationSelf: Quaternion;
    /**
     * The rotation for the target body
     * `FrameInB Rotation`
     */
    rotationTarget: Quaternion;
    disableCollisionsBetweenLinkedBodies: boolean;
    /**
     * 断裂脉冲阈值，值越大，约束越不易断裂。
     */
    get breakingThreshold(): number;
    set breakingThreshold(value: number);
    start(): Promise<void>;
    /**
     * 子类实现具体的约束创建逻辑
     * @param selfBody
     * @param targetBody
     */
    protected createConstraint(selfBody: Ammo.btRigidBody, targetBody: Ammo.btRigidBody | null): void;
    /**
     * 获取约束实例
     */
    get constraint(): T;
    /**
     * 异步获取完成初始化的约束实例
     */
    wait(): Promise<T>;
    /**
     * 重置约束，销毁当前约束实例后重新创建并返回新的约束实例
     */
    resetConstraint(): Promise<T>;
    /**
     * 目标刚体组件
     */
    get targetRigidbody(): Rigidbody;
    set targetRigidbody(value: Rigidbody);
    destroy(force?: boolean): void;
}
