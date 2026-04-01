import { Vector3, Quaternion } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
/**
 * Temporary Physics Math Utility
 *
 * 提供临时的 Ammo btVector3 和 btQuaternion 实例，并支持与引擎数据相互转换
 */
export declare class TempPhyMath {
    static readonly tmpVecA: Ammo.btVector3;
    static readonly tmpVecB: Ammo.btVector3;
    static readonly tmpVecC: Ammo.btVector3;
    static readonly tmpVecD: Ammo.btVector3;
    static readonly tmpQuaA: Ammo.btQuaternion;
    static readonly tmpQuaB: Ammo.btQuaternion;
    /**
     * 初始化 Ammo 后创建预定义的 btVector3 和 btQuaternion 实例，以便复用
     */
    static init(): void;
    /**
     * Quaternion to Ammo.btQuaternion
     */
    static toBtQua(qua: Quaternion, btQua?: Ammo.btQuaternion): Ammo.btQuaternion;
    /**
     * Vector3 to Ammo.btVector3
     */
    static toBtVec(vec: Vector3, btVec?: Ammo.btVector3): Ammo.btVector3;
    /**
     * Set Ammo.btVector3 using x, y, z
     */
    static setBtVec(x: number, y: number, z: number, btVec?: Ammo.btVector3): Ammo.btVector3;
    /**
     * Set Ammo.btQuaternion using x, y, z, w
     */
    static setBtQua(x: number, y: number, z: number, w: number, btQua?: Ammo.btQuaternion): Ammo.btQuaternion;
    /**
     * Ammo.btVector3 to Vector3
     */
    static fromBtVec(btVec: Ammo.btVector3, vec?: Vector3): Vector3;
    /**
     * Ammo.btQuaternion to Quaternion
     */
    static fromBtQua(btQua: Ammo.btQuaternion, qua?: Quaternion): Quaternion;
    /**
     * Euler Vector3 to Ammo.Quaternion
     */
    static eulerToBtQua(vec: Vector3, qua?: Ammo.btQuaternion): Ammo.btQuaternion;
    /**
     * Sets the given Ammo.btVector3 to (0, 0, 0)
     */
    static zeroBtVec(btVec?: Ammo.btVector3): Ammo.btVector3;
    /**
     * Sets the given Ammo.btQuaternion to (0, 0, 0, 1)
     */
    static resetBtQua(btQua?: Ammo.btQuaternion): Ammo.btQuaternion;
}
