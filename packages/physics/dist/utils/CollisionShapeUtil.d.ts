import { Object3D, Vector3, Quaternion } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
export interface ChildShape {
    shape: Ammo.btCollisionShape;
    position: Vector3;
    rotation: Quaternion;
}
/**
 * CollisionShapeUtil
 * 提供多种碰撞体构建功能
 */
export declare class CollisionShapeUtil {
    /**
     * 创建静态平面碰撞形状，适用于静态无限平面的碰撞，如地面或墙壁。
     * @param planeNormal - 平面法向量，默认值为 Vector3.UP。
     * @param planeConstant - 平面常数，表示平面距离原点的距离，默认值为 0。
     * @returns Ammo.btStaticPlaneShape - 静态平面碰撞形状实例。
     */
    static createStaticPlaneShape(planeNormal?: Vector3, planeConstant?: number): Ammo.btStaticPlaneShape;
    /**
     * 创建盒型碰撞形状，适用于具有明确尺寸的盒形物体。
     * 如果未指定尺寸，则使用三维对象的包围盒大小。
     * @param object3D - 用于创建碰撞体的三维对象。
     * @param size - 可选参数，盒型碰撞体的尺寸。
     * @returns Ammo.btBoxShape - 盒型碰撞形状实例。
     */
    static createBoxShape(object3D: Object3D, size?: Vector3): Ammo.btBoxShape;
    /**
     * 创建球型碰撞形状，适用于球形物体。
     * 如果未指定半径，则使用三维对象的包围盒半径 `X`。
     * @param object3D - 用于创建碰撞体的三维对象。
     * @param radius - 可选参数，球型碰撞体的半径。
     * @returns Ammo.btSphereShape - 球型碰撞形状实例。
     */
    static createSphereShape(object3D: Object3D, radius?: number): Ammo.btSphereShape;
    /**
     * 创建胶囊型碰撞形状，适用于胶囊形物体。
     * 如果未指定尺寸，则使用三维对象的包围盒半径 `X` 和高度 `Y`。
     * @param object3D - 用于创建碰撞体的三维对象。
     * @param radius - 可选参数，胶囊的半径。
     * @param height - 可选参数，胶囊中间的圆柱部分的高度。
     * @returns Ammo.btCapsuleShape - 胶囊型碰撞形状实例。
     */
    static createCapsuleShape(object3D: Object3D, radius?: number, height?: number): Ammo.btCapsuleShape;
    /**
     * 创建圆柱型碰撞形状，适用于圆柱形物体。
     * 如果未指定尺寸，则使用三维对象的包围盒半径 `X` 和高度 `Y`。
     * @param object3D - 用于创建碰撞体的三维对象。
     * @param radius - 可选参数，圆柱的半径。
     * @param height - 可选参数，圆柱的完整高度。
     * @returns Ammo.btCylinderShape - 圆柱型碰撞形状实例。
     */
    static createCylinderShape(object3D: Object3D, radius?: number, height?: number): Ammo.btCylinderShape;
    /**
     * 创建圆锥形碰撞形状，适用于圆锥形物体。
     * 如果未指定尺寸，则使用三维对象的包围盒半径 `X` 和高度 `Y`。
     * @param object3D - 用于创建碰撞体的三维对象。
     * @param radius - 可选参数，圆锥的半径。
     * @param height - 可选参数，圆锥的高度。
     * @returns Ammo.btConeShape - 圆锥形碰撞形状实例。
     */
    static createConeShape(object3D: Object3D, radius?: number, height?: number): Ammo.btConeShape;
    /**
     * 创建复合形状，将多个子形状组合成一个形状。
     * @param childShapes - 包含子形状实例与位置、旋转属性的数组。
     * @returns Ammo.btCompoundShape - 复合形状实例。
     */
    static createCompoundShape(childShapes: ChildShape[]): Ammo.btCompoundShape;
    /**
     * 根据 Object3D 对象及其子对象创建复合碰撞形状。
     * @param object3D - 三维对象，包含多个子对象。
     * @param includeParent - 是否包含父对象的几何体，默认值为 `true`。
     * @returns 复合碰撞形状。
     */
    static createCompoundShapeFromObject(object3D: Object3D, includeParent?: boolean): Ammo.btCompoundShape;
    /**
     * 根据 Object3D 对象的几何体类型创建相应的碰撞形状。
     *
     * 仅支持Box、Sphere、Plane、Cylinder类型的几何体。对于不匹配的几何体类型，返回 btConvexHullShape 凸包形状。
     * @param object3D
     * @returns Ammo.btCollisionShape
     */
    static createShapeFromObject(object3D: Object3D): Ammo.btCollisionShape | null;
    /**
     * 创建高度场形状，基于平面顶点数据模拟地形。
     * @param object3D - 用于创建碰撞体的三维对象。
     * @param heightScale - 高度缩放比例，默认值为 `1`。
     * @param upAxis - 高度场的上轴，默认值为 `1`。
     * @param hdt - 高度场的数据类型，默认值为 `Ammo.PHY_FLOAT`。
     * @param flipQuadEdges - 是否翻转四边形的边，默认值为 `false`。
     * @returns Ammo.btHeightfieldTerrainShape - 高度场形状实例。
     */
    static createHeightfieldTerrainShape(object3D: Object3D, heightScale?: number, upAxis?: number, hdt?: Ammo.PHY_ScalarType, flipQuadEdges?: boolean): Ammo.btHeightfieldTerrainShape;
    /**
     * 创建凸包形状，适用于具有凹陷填充的模型。
     * 此形状适用于动态物体并提供快速的碰撞检测。
     * @param object3D - 用于创建碰撞体的三维对象。
     * @param modelVertices - 可选参数，提供碰撞体所需的顶点数据，默认为三维对象的顶点数据。
     * @returns Ammo.btConvexHullShape - 凸包形状实例。
     */
    static createConvexHullShape(object3D: Object3D, modelVertices?: Float32Array): Ammo.btConvexHullShape;
    /**
     * 创建凸包网格形状，适用于需要复杂几何表示的动态物体。
     * 此形状不要求额外的凸包生成步骤，适用于凸的三角形网格。
     * @param object3D - 用于创建碰撞体的三维对象。
     * @param modelVertices - 可选参数，提供碰撞体所需的顶点数据。
     * @param modelIndices - 可选参数，提供碰撞体所需的索引数据。
     * @returns Ammo.btConvexTriangleMeshShape - 凸包网格形状实例。
     */
    static createConvexTriangleMeshShape(object3D: Object3D, modelVertices?: Float32Array, modelIndices?: Uint16Array): Ammo.btBvhTriangleMeshShape;
    /**
     * 创建边界体积层次（BVH）网格形状，适用于需要复杂几何表示的静态物体。
     * 此形状适合大规模静态网格，但对动态对象不适用。
     * @param object3D - 用于创建碰撞体的三维对象。
     * @param modelVertices - 可选参数，提供碰撞体所需的顶点数据。
     * @param modelIndices - 可选参数，提供碰撞体所需的索引数据。
     * @returns Ammo.btBvhTriangleMeshShape - BVH 网格形状实例。
     */
    static createBvhTriangleMeshShape(object3D: Object3D, modelVertices?: Float32Array, modelIndices?: Uint16Array): Ammo.btBvhTriangleMeshShape;
    /**
     * 创建 GImpact 网格形状，适用于需要复杂几何表示的动态物体。
     * 基于 GIMPACT 算法，可以用于复杂的三角网格碰撞检测，包括动态物体的交互，此形状性能消耗较高，但提供更精确的碰撞检测。
     * @param object3D - 用于创建碰撞体的三维对象。
     * @param modelVertices - 可选参数，提供碰撞体所需的顶点数据。
     * @param modelIndices - 可选参数，提供碰撞体所需的索引数据。
     * @returns Ammo.btGImpactMeshShape - GImpact 网格形状实例。
     */
    static createGImpactMeshShape(object3D: Object3D, modelVertices?: Float32Array, modelIndices?: Uint16Array): Ammo.btGImpactMeshShape;
    /**
     * 构建 btTriangleMesh 对象，用于创建网格形状。
     * @param vertices - 顶点数据，按 xyz 顺序排列。
     * @param indices - 索引数据，定义三角形的顶点索引。
     * @returns Ammo.btTriangleMesh - 构建的三角形网格。
     */
    static buildTriangleMesh(vertices: Float32Array, indices: Uint16Array): Ammo.btTriangleMesh;
    /**
     * 获取3D对象所有网格的顶点与索引。
     * @param object3D - 三维对象。
     * @param isTransformChildren - 是否将子对象的顶点转换到父对象的局部坐标系。默认值为 `true`。
     * @returns 顶点数据和索引数据。
     */
    static getAllMeshVerticesAndIndices(object3D: Object3D, isTransformChildren?: boolean): {
        vertices: Float32Array;
        indices: Uint16Array;
    };
    /**
     * 计算三维对象的局部包围盒
     * @param object3D - 三维对象
     * @returns 局部包围盒
     */
    private static calculateLocalBoundingBox;
}
