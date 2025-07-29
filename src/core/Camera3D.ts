import { ComponentBase } from "../components/ComponentBase";
import { Engine3D } from "../Engine3D";
import { HaltonSeq } from "../math/HaltonSeq";
import { MathUtil } from "../math/MathUtil";
import { Matrix4, matrixMultiply } from "../math/Matrix4";
import { Ray } from "../math/Ray";
import { Rect } from "../math/Rect";
import { Vector2 } from "../math/Vector2";
import { Vector3 } from "../math/Vector3";
import { CameraUtil } from "../util/CameraUtil";
import { Frustum } from "./bound/Frustum";
import { CameraType } from "./CameraType";
import { CubeCamera } from "./CubeCamera";
import { webGPUContext } from "../gfx/graphics/webGpu/Context3D";
import { FrustumCSM } from "./csm/FrustumCSM";
import { CSM } from "./csm/CSM";
import { CResizeEvent } from "../event/CResizeEvent";

/**
 * Camera3D类表示3D场景中的相机组件。
 * 它支持透视投影和正交投影，并提供视锥体裁剪、阴影计算、坐标转换等功能。
 * 相机是渲染3D场景的视角，决定了场景中哪些部分会被渲染到屏幕上。
 */
export class Camera3D extends ComponentBase {
  /**
   * 相机视野角度（度），用于透视投影
   */
  public fov: number = 60;

  /**
   * 相机名称
   */
  public name: string;

  /**
   * 视口宽高比（宽度/高度）
   */
  public aspect: number = 1;

  /**
   * 近裁剪面距离
   */
  public near: number = 1;

  /**
   * 远裁剪面距离
   */
  public far: number = 5000;

  /**
   * 正交投影左边界
   */
  public left: number = -100;

  /**
   * 正交投影右边界
   */
  public right: number = 100;

  /**
   * 正交投影上边界
   */
  public top: number = 100;

  /**
   * 正交投影下边界
   */
  public bottom: number = -100;

  /**
   * 正交投影视锥体大小
   */
  public frustumSize: number = 100;

  /**
   * 相机视口矩形
   */
  public viewPort: Rect = new Rect();

  /**
   * 视锥体，用于视锥体裁剪
   */
  public frustum: Frustum;

  /**
   * 球谐光照系数数组
   */
  public sh: Float32Array = new Float32Array(36);

  /**
   * 标记此相机是否为阴影相机
   */
  public isShadowCamera: boolean = false;
  private _projectionMatrixInv: Matrix4 = new Matrix4();
  private _projectionMatrix: Matrix4 = new Matrix4();
  private _viewMatrix: Matrix4 = new Matrix4();
  private _viewMatrixInv: Matrix4 = new Matrix4();
  private _unprojection: Matrix4 = new Matrix4();
  private _pvMatrixInv: Matrix4 = new Matrix4();
  private _pvMatrix: Matrix4 = new Matrix4();
  private _halfw: number;
  private _halfh: number;
  private _ray: Ray;
  private _enableCSM: boolean = false;
  public mainCamera: Camera3D;

  public get projectionMatrix() {
    return this._projectionMatrix;
  }

  public lookTarget: Vector3;

  public type: CameraType = CameraType.perspective;

  public csm: FrustumCSM;

  public cubeShadowCameras: CubeCamera[] = [];

  public get enableCSM(): boolean {
    return this._enableCSM;
  }

  public set enableCSM(value: boolean) {
    if (value && !this.csm) {
      this.csm = new FrustumCSM(CSM.Cascades);
    }
    this._enableCSM = value;
  }

  /**
   * 创建一个新的Camera3D实例
   */
  constructor() {
    super();
  }

  /**
   * 初始化相机
   * 创建射线、视锥体和观察目标
   * 设置视口并更新投影矩阵
   * 监听窗口大小变化事件
   */
  public init() {
    super.init();
    this._ray = new Ray();
    this.frustum = new Frustum();
    this.lookTarget = new Vector3(0, 0, 0);

    // TODO: set viewport based on View3D size
    this.viewPort.x = 0;
    this.viewPort.y = 0;
    this.viewPort.w = webGPUContext.presentationSize[0];
    this.viewPort.h = webGPUContext.presentationSize[1];

    this.updateProjection();
    webGPUContext.addEventListener(
      CResizeEvent.RESIZE,
      this.updateProjection,
      this
    );
  }

  /**
   * 根据当前相机类型更新投影矩阵
   * 透视投影或正交投影
   */
  public updateProjection() {
    this.aspect = webGPUContext.aspect;
    if (this.type == CameraType.perspective) {
      this.perspective(this.fov, this.aspect, this.near, this.far);
    } else if (this.type == CameraType.ortho) {
      if (this.frustumSize) this.ortho(this.frustumSize, this.near, this.far);
      else
        this.orthoOffCenter(
          this.left,
          this.right,
          this.bottom,
          this.top,
          this.near,
          this.far
        );
    }
  }

  /**
   * 计算阴影偏移值，用于阴影贴图采样
   * @param depthTexSize 深度纹理大小
   * @returns 阴影偏移值
   */
  public getShadowBias(depthTexSize: number): number {
    let sizeOnePixel = (2.0 * this.getShadowWorldExtents()) / depthTexSize;
    let depth = this.far - this.near;
    return sizeOnePixel / depth - Engine3D.setting.shadow.shadowBias * 0.01;
  }

  /**
   * 获取阴影世界空间范围
   * @returns 阴影世界空间范围值
   */
  public getShadowWorldExtents(): number {
    let shadowBound = Engine3D.setting.shadow.shadowBound;
    if (!shadowBound) {
      shadowBound = Math.round(0.05 * this.frustum.boundingBox.extents.length);
    } else {
      shadowBound *= 0.5;
    }
    return shadowBound;
  }

  /**
   * 获取级联阴影映射(CSM)的阴影偏移缩放因子
   * 根据当前相机和基础相机的深度范围计算缩放因子
   * @param shadowCamera 阴影相机
   * @returns 阴影偏移缩放因子
   */
  public getCSMShadowBiasScale(shadowCamera: Camera3D): number {
    if (shadowCamera == this) return 1.0;

    let currentSize = this.far - this.near;
    let baseCamera = this.csm.children[0].shadowCamera;
    let baseSize = baseCamera.far - baseCamera.near;
    return baseSize / currentSize;
  }

  /**
   * 获取级联阴影映射(CSM)指定级联的世界空间范围
   * @param index 级联索引
   * @returns 指定级联的世界空间范围值
   */
  public getCSMShadowWorldExtents(index: number): number {
    return Math.round(this.csm.children[index].bound.extents.length);
  }

  /**
   * 设置透视投影参数
   * @param fov 视野角度（度）
   * @param aspect 宽高比
   * @param near 近裁剪面距离
   * @param far 远裁剪面距离
   */
  public perspective(fov: number, aspect: number, near: number, far: number) {
    this.fov = fov;
    this.aspect = aspect;
    this.near = Math.max(0.001, near);
    this.far = far;
    this._projectionMatrix.perspective(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );
    this.type = CameraType.perspective;
  }

  /**
   * 设置正交投影参数（基于尺寸）
   * @param frustumSize 视锥体大小
   * @param near 近裁剪面距离
   * @param far 远裁剪面距离
   */
  public ortho(frustumSize: number, near: number, far: number) {
    this.frustumSize = frustumSize;
    let w = frustumSize * 0.5 * this.aspect;
    let h = frustumSize * 0.5;
    let left = -w / 2;
    let right = w / 2;
    let top = h / 2;
    let bottom = -h / 2;
    this.orthoOffCenter(left, right, bottom, top, near, far);
  }

  /**
   * 设置正交投影参数（基于边界）
   * @param left 左边界
   * @param right 右边界
   * @param bottom 下边界
   * @param top 上边界
   * @param near 近裁剪面距离
   * @param far 远裁剪面距离
   */
  public orthoOffCenter(
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number
  ) {
    this.near = near;
    this.far = far;
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.type = CameraType.ortho;
    this._projectionMatrix.orthoOffCenter(
      this.left,
      this.right,
      this.bottom,
      this.top,
      this.near,
      this.far
    );
  }

  /**
   * 获取视图矩阵
   * 视图矩阵是相机世界矩阵的逆矩阵，用于将世界坐标转换为相机坐标
   * @returns 视图矩阵
   */
  public get viewMatrix(): Matrix4 {
    this._viewMatrix.copyFrom(this.transform.worldMatrix);
    this._viewMatrix.invert();
    return this._viewMatrix;
  }

  /**
   * 获取阴影视图矩阵
   * 用于阴影贴图渲染的特殊视图矩阵
   * @returns 阴影视图矩阵
   */
  public get shadowViewMatrix(): Matrix4 {
    this._viewMatrix.copyFrom(this.transform.worldMatrix);
    this._viewMatrix.appendScale(1, 1.0, 1.0);
    this._viewMatrix.invert();
    return this._viewMatrix;
  }

  /**
   * 将3D对象坐标转换为屏幕坐标
   * @param n 3D对象坐标
   * @param target 目标向量，如果为null则创建新向量
   * @returns 屏幕坐标
   */
  public object3DToScreenRay(n: Vector3, target: Vector3 = null): Vector3 {
    if (!target) {
      target = new Vector3(0, 0, 0, 1);
    }
    this._halfw = this.viewPort.width * 0.5;
    this._halfh = this.viewPort.height * 0.5;

    MathUtil.transformVector(this.viewMatrix, n, target);
    this.project(target, target);

    target.x = this._halfw + target.x * this._halfw;
    target.y = this.viewPort.height - (this._halfh - target.y * this._halfh);
    return target;
  }

  /**
   * 将屏幕坐标转换为3D对象坐标
   * @param n 屏幕坐标
   * @param target 目标向量，如果为null则创建新向量
   * @returns 3D对象坐标
   */
  public screenRayToObject3D(n: Vector3, target: Vector3 = null): Vector3 {
    if (!target) {
      target = new Vector3();
    }
    this._halfw = this.viewPort.width * 0.5;
    this._halfh = this.viewPort.height * 0.5;

    let fScreenPtX = n.x;
    let fScreenPtY = n.y;
    target.x = fScreenPtX / this.viewPort.width - 0.25;
    target.y = fScreenPtY / this.viewPort.height - 0.25;

    this.unProject(target.x, target.y, n.z, target);
    return target;
  }

  /**
   * 获取投影-视图组合矩阵
   * 用于将世界坐标直接转换为裁剪空间坐标
   * @returns 投影-视图矩阵
   */
  public get pvMatrix(): Matrix4 {
    matrixMultiply(this._projectionMatrix, this.viewMatrix, this._pvMatrix);
    return this._pvMatrix;
  }

  /**
   * 获取投影-世界组合矩阵的逆矩阵
   * @returns 投影-世界矩阵的逆矩阵
   */
  public get pvMatrix2(): Matrix4 {
    matrixMultiply(
      this._projectionMatrix,
      this.transform.worldMatrix,
      this._pvMatrix
    );
    let matrix = this._pvMatrixInv.copyFrom(this.pvMatrix);
    matrix.invert();
    return matrix;
  }

  /**
   * 获取投影-视图矩阵的逆矩阵
   * 用于从裁剪空间坐标转换回世界坐标
   * @returns 投影-视图矩阵的逆矩阵
   */
  public get pvMatrixInv(): Matrix4 {
    let matrix = this._pvMatrixInv.copyFrom(this.pvMatrix);
    matrix.invert();
    return matrix;
  }

  /**
   * 获取视图矩阵的逆矩阵
   * 用于从相机空间坐标转换回世界坐标
   * @returns 视图矩阵的逆矩阵
   */
  public get vMatrixInv(): Matrix4 {
    let matrix = this._viewMatrixInv.copyFrom(this.viewMatrix);
    matrix.invert();
    return matrix;
  }

  /**
   * 获取从相机空间到世界空间的变换矩阵
   * @returns 相机到世界的变换矩阵
   */
  public get cameraToWorld(): Matrix4 {
    let cameraToWorld = Matrix4.helpMatrix;
    cameraToWorld.identity();
    cameraToWorld.copyFrom(this.projectionMatrixInv);
    cameraToWorld.multiply(this.vMatrixInv);
    return cameraToWorld;
  }

  /**
   * 获取从标准化设备坐标(NDC)到视图空间的变换矩阵
   * @returns NDC到视图空间的变换矩阵
   */
  public get ndcToView(): Matrix4 {
    let cameraToWorld = Matrix4.helpMatrix;
    cameraToWorld.identity();
    cameraToWorld.copyFrom(this.projectionMatrixInv);
    return cameraToWorld;
  }

  /**
   * 获取投影矩阵的逆矩阵
   * 用于从裁剪空间坐标转换回相机空间坐标
   * @returns 投影矩阵的逆矩阵
   */
  public get projectionMatrixInv(): Matrix4 {
    this._projectionMatrixInv.copyFrom(this._projectionMatrix);
    this._projectionMatrixInv.invert();
    return this._projectionMatrixInv;
  }

  /**
   * 将屏幕坐标反投影到世界空间
   * @param nX 屏幕X坐标
   * @param nY 屏幕Y坐标
   * @param sZ 深度值
   * @param target 目标向量，如果为null则创建新向量
   * @returns 世界空间中的向量
   */
  public unProject(
    nX: number,
    nY: number,
    sZ: number,
    target?: Vector3
  ): Vector3 {
    if (!target) target = new Vector3();
    target.x = nX;
    target.y = -nY;
    target.z = sZ;
    target.w = 1.0;

    target.x *= sZ;
    target.y *= sZ;

    this._unprojection.copyFrom(this._projectionMatrix);
    this._unprojection.invert();

    MathUtil.transformVector(this._unprojection, target, target);
    target.z = sZ;

    return target;
  }

  /**
   * 将向量从相机空间投影到裁剪空间
   * @param n 相机空间中的向量
   * @param target 目标向量
   * @returns 裁剪空间中的向量
   * @private
   */
  private project(n: Vector3, target: Vector3): Vector3 {
    this._projectionMatrix.perspectiveMultiplyPoint3(n, target);
    target.x = target.x / target.w;
    target.y = -target.y / target.w;
    target.z = n.z;
    return target;
  }

  /**
   * 从屏幕坐标创建射线
   * 用于拾取和碰撞检测
   * @param viewPortPosX 视口X坐标
   * @param viewPortPosY 视口Y坐标
   * @returns 从相机位置指向屏幕点的射线
   */
  public screenPointToRay(viewPortPosX: number, viewPortPosY: number): Ray {
    let ray: Ray = this._ray;

    let start = CameraUtil.UnProjection(viewPortPosX, viewPortPosY, 0.01, this);
    let end = CameraUtil.UnProjection(viewPortPosX, viewPortPosY, 1.0, this);
    end = end.subtract(start).normalize();

    ray.origin.copyFrom(start);
    // ray.dir.copyFrom(end);
    ray.direction = end;

    return ray;
  }

  /**
   * 将屏幕坐标转换为世界坐标
   * @param viewPortPosX 视口X坐标
   * @param viewPortPosY 视口Y坐标
   * @param z 深度值
   * @returns 世界空间中的坐标
   */
  public screenPointToWorld(
    viewPortPosX: number,
    viewPortPosY: number,
    z: number
  ): Vector3 {
    let pos = CameraUtil.UnProjection(viewPortPosX, viewPortPosY, z, this);
    return pos;
  }

  /**
   * 将世界坐标转换为屏幕坐标
   * @param point 世界空间中的点
   * @param target 目标向量，如果为null则创建新向量
   * @returns 屏幕空间中的坐标
   */
  public worldToScreenPoint(point: Vector3, target?: Vector3): Vector3 {
    let pos = CameraUtil.Projection(point, this, target);
    return pos;
  }

  /**
   * 使相机朝向指定目标点
   * @param pos 相机位置
   * @param target 目标点位置
   * @param up 上方向向量，默认为Y轴正方向
   */
  public lookAt(pos: Vector3, target: Vector3, up: Vector3 = Vector3.Y_AXIS) {
    this.transform.lookAt(pos, target, up);
    if (target) this.lookTarget.copyFrom(target);
  }

  /**
   * 相机更新方法，每帧调用
   * 更新抖动投影矩阵、视锥体和级联阴影映射
   */
  public onUpdate() {
    if (this._useJitterProjection) {
      this.getJitteredProjectionMatrix();
    }
    this.frustum.update(this.pvMatrix);
    this.frustum.updateBoundBox(this.pvMatrixInv);
    let shadow = Engine3D.setting.shadow;
    this.enableCSM &&
      this.csm?.update(
        this._projectionMatrix,
        this._pvMatrixInv,
        this.near,
        this.far,
        shadow
      );
  }

  private _haltonSeq: HaltonSeq;
  private _jitterOffsetList: Vector2[];
  private _useJitterProjection: boolean = false;
  private _jitterFrameIndex: number = 0;
  private _sampleIndex: number = 0;
  private _jitterX: number = 0;
  private _jitterY: number = 0;

  public get jitterFrameIndex() {
    return this._jitterFrameIndex;
  }

  public get jitterX(): number {
    return this._jitterX;
  }

  public get jitterY(): number {
    return this._jitterY;
  }

  /**
   * 启用或禁用投影抖动
   * 用于实现时间性抗锯齿(TAA)
   * @param value 是否启用投影抖动
   */
  public enableJitterProjection(value: boolean) {
    this._jitterFrameIndex = 0;
    this._useJitterProjection = value;
    this._haltonSeq ||= new HaltonSeq();
    this._jitterOffsetList = [];
    for (let i = 0; i < 32; i++) {
      let offset = this.generateRandomOffset();
      this._jitterOffsetList.push(offset);
    }
    this._jitterOffsetList.reverse();
  }

  /**
   * 生成随机偏移量用于投影抖动
   * 使用Halton序列生成低差异序列
   * @returns 随机偏移向量
   * @private
   */
  private generateRandomOffset(): Vector2 {
    let offset = new Vector2(
      HaltonSeq.get((this._sampleIndex & 1023) + 1, 2) - 0.5,
      HaltonSeq.get((this._sampleIndex & 1023) + 1, 3) - 0.5
    );
    const k_SampleCount = 32;
    if (++this._sampleIndex >= k_SampleCount) this._sampleIndex = 0;

    return offset;
  }

  /**
   * 获取抖动后的投影矩阵
   * 用于实现时间性抗锯齿(TAA)，通过在每一帧微调投影矩阵来实现
   * @private
   */
  private getJitteredProjectionMatrix() {
    let setting = Engine3D.setting.render.postProcessing.taa;
    let mat = this._projectionMatrix;
    let temporalJitterScale: number = setting.temporalJitterScale;
    let offsetIndex = this._jitterFrameIndex % setting.jitterSeedCount;
    let num1 = this._jitterOffsetList[offsetIndex].x * temporalJitterScale;
    let num2 = this._jitterOffsetList[offsetIndex].y * temporalJitterScale;

    let jitX = mat.get(0, 2);
    let jitY = mat.get(1, 2);

    this._jitterX = num1 / this.viewPort.width;
    this._jitterY = num2 / this.viewPort.height;
    jitX += this._jitterX;
    jitY += this._jitterY;
    mat.set(0, 2, jitX);
    mat.set(1, 2, jitY);

    this._jitterFrameIndex++;
  }

  /**
   * 获取相机在世界空间中的朝向向量
   * @param target 目标向量，如果为null则创建新向量
   * @returns 相机的朝向向量（已归一化）
   */
  public getWorldDirection(target?: Vector3) {
    target ||= new Vector3();
    // this.transform.updateWorldMatrix();
    const e = this.transform._worldMatrix.rawData;
    return target.set(-e[8], -e[9], -e[10]).normalize();
  }
}
