import { ComponentBase } from "../components/ComponentBase";
import { Matrix4 } from "../math/Matrix4";
import { Ray } from "../math/Ray";
import { Rect } from "../math/Rect";
import { Vector3 } from "../math/Vector3";
import { Frustum } from "./bound/Frustum";
import { CameraType } from "./CameraType";
import { CubeCamera } from "./CubeCamera";
import { FrustumCSM } from "./csm/FrustumCSM";
/**
 * Camera3D类表示3D场景中的相机组件。
 * 它支持透视投影和正交投影，并提供视锥体裁剪、阴影计算、坐标转换等功能。
 * 相机是渲染3D场景的视角，决定了场景中哪些部分会被渲染到屏幕上。
 */
export declare class Camera3D extends ComponentBase {
    /**
     * 相机视野角度（度），用于透视投影
     */
    fov: number;
    /**
     * 相机名称
     */
    name: string;
    /**
     * 视口宽高比（宽度/高度）
     */
    aspect: number;
    /**
     * 近裁剪面距离
     */
    near: number;
    /**
     * 远裁剪面距离
     */
    far: number;
    /**
     * 正交投影左边界
     */
    left: number;
    /**
     * 正交投影右边界
     */
    right: number;
    /**
     * 正交投影上边界
     */
    top: number;
    /**
     * 正交投影下边界
     */
    bottom: number;
    /**
     * 正交投影视锥体大小
     */
    frustumSize: number;
    /**
     * 相机视口矩形
     */
    viewPort: Rect;
    /**
     * 视锥体，用于视锥体裁剪
     */
    frustum: Frustum;
    /**
     * 球谐光照系数数组
     */
    sh: Float32Array;
    /**
     * 标记此相机是否为阴影相机
     */
    isShadowCamera: boolean;
    private _projectionMatrixInv;
    private _projectionMatrix;
    private _viewMatrix;
    private _viewMatrixInv;
    private _unprojection;
    private _pvMatrixInv;
    private _pvMatrix;
    private _halfw;
    private _halfh;
    private _ray;
    private _enableCSM;
    mainCamera: Camera3D;
    get projectionMatrix(): Matrix4;
    lookTarget: Vector3;
    type: CameraType;
    csm: FrustumCSM;
    cubeShadowCameras: CubeCamera[];
    get enableCSM(): boolean;
    set enableCSM(value: boolean);
    /**
     * 创建一个新的Camera3D实例
     */
    constructor();
    /**
     * 初始化相机
     * 创建射线、视锥体和观察目标
     * 设置视口并更新投影矩阵
     * 监听窗口大小变化事件
     */
    init(): void;
    /**
     * 根据当前相机类型更新投影矩阵
     * 透视投影或正交投影
     */
    updateProjection(): void;
    /**
     * 计算阴影偏移值，用于阴影贴图采样
     * @param depthTexSize 深度纹理大小
     * @returns 阴影偏移值
     */
    getShadowBias(depthTexSize: number): number;
    /**
     * 获取阴影世界空间范围
     * @returns 阴影世界空间范围值
     */
    getShadowWorldExtents(): number;
    /**
     * 获取级联阴影映射(CSM)的阴影偏移缩放因子
     * 根据当前相机和基础相机的深度范围计算缩放因子
     * @param shadowCamera 阴影相机
     * @returns 阴影偏移缩放因子
     */
    getCSMShadowBiasScale(shadowCamera: Camera3D): number;
    /**
     * 获取级联阴影映射(CSM)指定级联的世界空间范围
     * @param index 级联索引
     * @returns 指定级联的世界空间范围值
     */
    getCSMShadowWorldExtents(index: number): number;
    /**
     * 设置透视投影参数
     * @param fov 视野角度（度）
     * @param aspect 宽高比
     * @param near 近裁剪面距离
     * @param far 远裁剪面距离
     */
    perspective(fov: number, aspect: number, near: number, far: number): void;
    /**
     * 设置正交投影参数（基于尺寸）
     * @param frustumSize 视锥体大小
     * @param near 近裁剪面距离
     * @param far 远裁剪面距离
     */
    ortho(frustumSize: number, near: number, far: number): void;
    /**
     * 设置正交投影参数（基于边界）
     * @param left 左边界
     * @param right 右边界
     * @param bottom 下边界
     * @param top 上边界
     * @param near 近裁剪面距离
     * @param far 远裁剪面距离
     */
    orthoOffCenter(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
    /**
     * 获取视图矩阵
     * 视图矩阵是相机世界矩阵的逆矩阵，用于将世界坐标转换为相机坐标
     * @returns 视图矩阵
     */
    get viewMatrix(): Matrix4;
    /**
     * 获取阴影视图矩阵
     * 用于阴影贴图渲染的特殊视图矩阵
     * @returns 阴影视图矩阵
     */
    get shadowViewMatrix(): Matrix4;
    /**
     * 将3D对象坐标转换为屏幕坐标
     * @param n 3D对象坐标
     * @param target 目标向量，如果为null则创建新向量
     * @returns 屏幕坐标
     */
    object3DToScreenRay(n: Vector3, target?: Vector3): Vector3;
    /**
     * 将屏幕坐标转换为3D对象坐标
     * @param n 屏幕坐标
     * @param target 目标向量，如果为null则创建新向量
     * @returns 3D对象坐标
     */
    screenRayToObject3D(n: Vector3, target?: Vector3): Vector3;
    /**
     * 获取投影-视图组合矩阵
     * 用于将世界坐标直接转换为裁剪空间坐标
     * @returns 投影-视图矩阵
     */
    get pvMatrix(): Matrix4;
    /**
     * 获取投影-世界组合矩阵的逆矩阵
     * @returns 投影-世界矩阵的逆矩阵
     */
    get pvMatrix2(): Matrix4;
    /**
     * 获取投影-视图矩阵的逆矩阵
     * 用于从裁剪空间坐标转换回世界坐标
     * @returns 投影-视图矩阵的逆矩阵
     */
    get pvMatrixInv(): Matrix4;
    /**
     * 获取视图矩阵的逆矩阵
     * 用于从相机空间坐标转换回世界坐标
     * @returns 视图矩阵的逆矩阵
     */
    get vMatrixInv(): Matrix4;
    /**
     * 获取从相机空间到世界空间的变换矩阵
     * @returns 相机到世界的变换矩阵
     */
    get cameraToWorld(): Matrix4;
    /**
     * 获取从标准化设备坐标(NDC)到视图空间的变换矩阵
     * @returns NDC到视图空间的变换矩阵
     */
    get ndcToView(): Matrix4;
    /**
     * 获取投影矩阵的逆矩阵
     * 用于从裁剪空间坐标转换回相机空间坐标
     * @returns 投影矩阵的逆矩阵
     */
    get projectionMatrixInv(): Matrix4;
    /**
     * 将屏幕坐标反投影到世界空间
     * @param nX 屏幕X坐标
     * @param nY 屏幕Y坐标
     * @param sZ 深度值
     * @param target 目标向量，如果为null则创建新向量
     * @returns 世界空间中的向量
     */
    unProject(nX: number, nY: number, sZ: number, target?: Vector3): Vector3;
    /**
     * 将向量从相机空间投影到裁剪空间
     * @param n 相机空间中的向量
     * @param target 目标向量
     * @returns 裁剪空间中的向量
     * @private
     */
    private project;
    /**
     * 从屏幕坐标创建射线
     * 用于拾取和碰撞检测
     * @param viewPortPosX 视口X坐标
     * @param viewPortPosY 视口Y坐标
     * @returns 从相机位置指向屏幕点的射线
     */
    screenPointToRay(viewPortPosX: number, viewPortPosY: number): Ray;
    /**
     * 将屏幕坐标转换为世界坐标
     * @param viewPortPosX 视口X坐标
     * @param viewPortPosY 视口Y坐标
     * @param z 深度值
     * @returns 世界空间中的坐标
     */
    screenPointToWorld(viewPortPosX: number, viewPortPosY: number, z: number): Vector3;
    /**
     * 将世界坐标转换为屏幕坐标
     * @param point 世界空间中的点
     * @param target 目标向量，如果为null则创建新向量
     * @returns 屏幕空间中的坐标
     */
    worldToScreenPoint(point: Vector3, target?: Vector3): Vector3;
    /**
     * 使相机朝向指定目标点
     * @param pos 相机位置
     * @param target 目标点位置
     * @param up 上方向向量，默认为Y轴正方向
     */
    lookAt(pos: Vector3, target: Vector3, up?: Vector3): void;
    /**
     * 相机更新方法，每帧调用
     * 更新抖动投影矩阵、视锥体和级联阴影映射
     */
    onUpdate(): void;
    private _haltonSeq;
    private _jitterOffsetList;
    private _useJitterProjection;
    private _jitterFrameIndex;
    private _sampleIndex;
    private _jitterX;
    private _jitterY;
    get jitterFrameIndex(): number;
    get jitterX(): number;
    get jitterY(): number;
    /**
     * 启用或禁用投影抖动
     * 用于实现时间性抗锯齿(TAA)
     * @param value 是否启用投影抖动
     */
    enableJitterProjection(value: boolean): void;
    /**
     * 生成随机偏移量用于投影抖动
     * 使用Halton序列生成低差异序列
     * @returns 随机偏移向量
     * @private
     */
    private generateRandomOffset;
    /**
     * 获取抖动后的投影矩阵
     * 用于实现时间性抗锯齿(TAA)，通过在每一帧微调投影矩阵来实现
     * @private
     */
    private getJitteredProjectionMatrix;
    /**
     * 获取相机在世界空间中的朝向向量
     * @param target 目标向量，如果为null则创建新向量
     * @returns 相机的朝向向量（已归一化）
     */
    getWorldDirection(target?: Vector3): Vector3;
}
