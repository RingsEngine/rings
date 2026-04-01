import Ammo from "@rings-webgpu/ammo";
import { Vector3, Object3D } from "@rings-webgpu/core";
import { ContactProcessedUtil } from "./utils/ContactProcessedUtil";
import { RigidBodyUtil } from "./utils/RigidBodyUtil";
import { Rigidbody } from "./rigidbody/Rigidbody";
import { PhysicsDebugDrawer } from "./visualDebug/PhysicsDebugDrawer";
import { DebugDrawerOptions } from "./visualDebug/DebugDrawModeEnum";
import { PhysicsDragger } from "./utils/PhysicsDragger";
declare class _Physics {
    private _world;
    private _isInited;
    private _isStop;
    private _gravity;
    private _worldInfo;
    private _debugDrawer;
    private _physicsDragger;
    private _physicBound;
    private _destroyObjectBeyondBounds;
    readonly contactProcessedUtil: typeof ContactProcessedUtil;
    readonly rigidBodyUtil: typeof RigidBodyUtil;
    maxSubSteps: number;
    fixedTimeStep: number;
    /**
     * 物理调试绘制器
     */
    get debugDrawer(): PhysicsDebugDrawer;
    /**
     * 物理拖拽器
     */
    get physicsDragger(): PhysicsDragger;
    TEMP_TRANSFORM: Ammo.btTransform;
    /**
     * 初始化物理引擎和相关配置。
     *
     * @param options - 初始化选项参数对象。
     * @param options.useSoftBody - 是否启用软体模拟。
     * @param options.useDrag - 是否启用刚体拖拽功能。
     * @param options.dragLockToSurface - 为 true 时拖拽点约束在当前刚体碰撞表面上（多连杆场景建议开启）。默认 `false`。
     * @param options.physicBound - 物理边界，默认范围：2000 2000 2000，超出边界时将会销毁该刚体。
     * @param options.destroyObjectBeyondBounds - 是否在超出边界时销毁3D对象。默认 `false` 仅销毁刚体。
     */
    init(options?: {
        useSoftBody?: boolean;
        useDrag?: boolean;
        dragLockToSurface?: boolean;
        physicBound?: Vector3;
        destroyObjectBeyondBounds?: boolean;
    }): Promise<void>;
    /**
     * 初始化物理调试绘制器
     *
     * @param {Graphic3D} graphic3D - Type: `Graphic3D` A graphic object used to draw lines.
     * @param {DebugDrawerOptions} [options] - 调试绘制选项，用于配置物理调试绘制器。 {@link DebugDrawerOptions}
     */
    initDebugDrawer(graphic3D: Object3D, options?: DebugDrawerOptions): void;
    private initWorld;
    /**
     * 物理模拟更新
     * @param timeStep - 时间步长
     * @default Time.delta * 0.001
     */
    update(timeStep?: number): void;
    get world(): Ammo.btDiscreteDynamicsWorld | Ammo.btSoftRigidDynamicsWorld;
    get isInited(): boolean;
    set isStop(value: boolean);
    get isStop(): boolean;
    set gravity(value: Vector3);
    get gravity(): Vector3;
    get worldInfo(): Ammo.btSoftBodyWorldInfo;
    get isSoftBodyWord(): boolean;
    checkBound(body: Rigidbody): void;
    /**
     * 将物理对象的位置和旋转同步至三维对象
     * @param object3D - 三维对象
     * @param tm - 物理对象变换
     */
    syncGraphic(object3D: Object3D, tm: Ammo.btTransform): void;
}
/**
 * Only init one physics instance
 * ```ts
 * await Physics.init();
 * ```
 * @group Plugin
 */
/**
 * @internal
 */
export declare let Physics: _Physics;
export { Ammo };
