import { Ammo } from "../Physics";
type Callback = (contactPoint: Ammo.btManifoldPoint, bodyA: Ammo.btRigidBody, bodyB: Ammo.btRigidBody) => void;
/**
 * 碰撞处理工具
 */
export declare class ContactProcessedUtil {
    private static callbacks;
    private static ignoredPointers;
    private static contactProcessedCallbackPointer;
    /**
     * 注册碰撞事件
     * @param pointer 物理对象指针
     * @param callback 事件回调
     */
    static registerCollisionCallback(pointer: number, callback: Callback): void;
    /**
     * 注销碰撞事件
     * @param pointer 物理对象指针
     */
    static unregisterCollisionCallback(pointer: number): void;
    /**
     * 注册全局碰撞处理回调
     */
    private static registerContactProcessedCallback;
    /**
     * 注销全局碰撞处理回调
     */
    private static unregisterContactProcessedCallback;
    /**
     * 将指针添加到忽略集合中，添加后，任何物体与该指针对象碰撞时都无法触发碰撞事件
     * @param pointer 物理对象指针
     */
    static addIgnoredPointer(pointer: number): void;
    /**
     * 从忽略集合中移除指针
     * @param pointer 物理对象指针
     */
    static removeIgnoredPointer(pointer: number): void;
    /**
     * 检查指针是否在忽略集合中
     * @param pointer 物理对象指针
     */
    static isIgnored(pointer: number): boolean;
    /**
     * 检查指针是否注册了碰撞事件
     * @param pointer 物理对象指针
     */
    static isCollision(pointer: number): boolean;
    /**
     * 全局接触（碰撞）事件回调函数
     */
    private static contactProcessedCallback;
    /**
     * 执行一次性的碰撞测试。
     * 如果提供了 bodyB，则检测 bodyA 与 bodyB 是否碰撞。
     * 否则，检测 bodyA 是否与其他所有刚体碰撞。
     * @param bodyA - 第一个刚体。
     * @param bodyB - （可选）第二个刚体。
     * @returns 如果发生碰撞，返回包含碰撞信息的对象；否则返回 null。
     */
    static performCollisionTest(bodyA: Ammo.btRigidBody, bodyB?: Ammo.btRigidBody): {
        cpPtr: number;
        colObj0Wrap: Ammo.btCollisionObjectWrapper;
        colObj1Wrap: Ammo.btCollisionObjectWrapper;
        partId0: number;
        index0: number;
        partId1: number;
        index1: number;
    };
    /**
     * 碰撞检测，判断两个刚体是否正在发生碰撞
     * @param bodyA
     * @param bodyB
     * @returns boolean
     */
    static checkCollision(bodyA: Ammo.btRigidBody, bodyB: Ammo.btRigidBody): boolean;
}
export {};
