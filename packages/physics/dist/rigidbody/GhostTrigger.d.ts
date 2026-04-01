import { ComponentBase, Vector3 } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
import { CollisionFlags } from "./RigidbodyEnum";
/**
 * The GhostTrigger Component represents a non-physical trigger in the physics world.
 * It uses a ghost object to detect overlapping collisions without producing physical responses.
 */
export declare class GhostTrigger extends ComponentBase {
    private _initResolve;
    private _initializationPromise;
    private _ghostObject;
    private _userIndex;
    private _shape;
    private collisionEventHandler;
    get shape(): Ammo.btCollisionShape;
    set shape(value: Ammo.btCollisionShape);
    get userIndex(): number;
    set userIndex(value: number);
    private _collisionFlags;
    /**
     * 获取碰撞标志
     */
    get collisionFlags(): number;
    /**
     * 添加单个碰撞标志
     */
    addCollisionFlag(value: CollisionFlags): void;
    /**
     * 删除单个碰撞标志
     */
    removeCollisionFlag(value: CollisionFlags): void;
    start(): Promise<void>;
    /**
     * 创建幽灵对象并添加到物理世界。
     * @param shape - 碰撞形状。
     * @param position - 幽灵对象的位置。
     * @param rotation - 幽灵对象的旋转。
     * @param collisionFlags - 可选参数，碰撞标志，默认值为 4 `NO_CONTACT_RESPONSE` 表示对象不参与碰撞响应，但仍会触发碰撞事件。
     * @param userIndex - 可选参数，用户索引，可作为物理对象标识。
     * @returns 新创建的 Ammo.btPairCachingGhostObject 对象。
     */
    static createAndAddGhostObject(shape: Ammo.btCollisionShape, position: Vector3, rotation: Vector3, collisionFlags?: number, userIndex?: number): Ammo.btPairCachingGhostObject;
    /**
     * 获取幽灵对象
     */
    get ghostObject(): Ammo.btPairCachingGhostObject;
    /**
     * 异步获取完成初始化的幽灵对象
     */
    wait(): Promise<Ammo.btPairCachingGhostObject>;
    /**
     * 启用/禁用碰撞回调
     */
    get enableCollisionEvent(): boolean;
    set enableCollisionEvent(value: boolean);
    /**
     * 碰撞事件回调
     */
    get collisionEvent(): (contactPoint: Ammo.btManifoldPoint, selfBody: Ammo.btRigidBody, otherBody: Ammo.btRigidBody) => void;
    set collisionEvent(callback: (contactPoint: Ammo.btManifoldPoint, selfBody: Ammo.btRigidBody, otherBody: Ammo.btRigidBody) => void);
    destroy(force?: boolean): void;
}
