import { Vector3, Quaternion, Object3D } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
/**
 * 提供一系列AMMO刚体相关的方法
 */
export declare class RigidBodyUtil {
    /**
     * 创建 Ammo 刚体。
     * @param object3D - 三维对象。
     * @param shape - 碰撞形状。
     * @param mass - 碰撞体的质量。
     * @param position - 可选参数，刚体的位置，默认使用三维对象的 `localPosition`
     * @param rotation - 可选参数，刚体的旋转，默认使用三维对象的 `localRotation`
     * @returns 新创建的 Ammo.btRigidBody 对象。
     */
    static createRigidBody(object3D: Object3D, shape: Ammo.btCollisionShape, mass: number, position?: Vector3, rotation?: Vector3 | Quaternion): Ammo.btRigidBody;
    /**
     * 更新刚体的位置和旋转。
     * 此函数将新的位置和旋转应用到刚体上。
     * @param bodyRb - 刚体对象。
     * @param position - 刚体的新位置，以 Vector3 形式表示。
     * @param rotation - 刚体的新旋转，可选，可以是 Vector3 形式表示的欧拉角（将自动转换为四元数），默认为四元数零值。
     * @param clearFV - 清除力和速度，可选，默认为 false 。
     */
    static updateTransform(bodyRb: Ammo.btRigidBody, position: Vector3, rotation: Vector3 | Quaternion, clearFV?: boolean): void;
    /**
     * 更新刚体位置
     * @param bodyRb
     * @param value
     */
    static updatePosition(bodyRb: Ammo.btRigidBody, value: Vector3): void;
    /**
     * 更新刚体旋转
     * @param bodyRb
     * @param value
     */
    static updateRotation(bodyRb: Ammo.btRigidBody, value: Vector3): void;
    /**
     * 更新刚体缩放
     * @param bodyRb
     * @param value
     * @param mass
     */
    static updateScale(bodyRb: Ammo.btRigidBody, value: Vector3, mass: number): void;
    /**
     * 清除力和速度
     * @param bodyRb
     */
    static clearForcesAndVelocities(bodyRb: Ammo.btRigidBody): void;
    /**
     * 激活物理世界中的全部碰撞对
     */
    static activateCollisionBodies(): void;
    /**
     * 销毁刚体及其状态和形状
     * @param bodyRb
     */
    static destroyRigidBody(bodyRb: Ammo.btRigidBody): void;
    /**
     * 销毁约束
     * @param constraint
     */
    static destroyConstraint(constraint: Ammo.btTypedConstraint): void;
}
