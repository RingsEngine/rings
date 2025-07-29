import { Engine3D } from "../Engine3D";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { EntityCollect } from "../gfx/renderJob/collect/EntityCollect";
import { View3D } from "./View3D";
import { Object3D } from "./entities/Object3D";

/**
 * Scene3D类表示3D场景，是所有3D对象的容器。
 * 场景管理环境贴图、天空盒和与之关联的视图。
 * 它继承自Object3D，因此可以包含其他Object3D对象作为子对象。
 */
export class Scene3D extends Object3D {
  /**
   * 场景的环境贴图纹理
   * @private
   */
  private _envMap: Texture;

  /**
   * 天空盒对象
   * @private
   */
  private skyObject: Object3D;

  /**
   * 标记环境贴图是否已更改
   */
  public envMapChange: boolean = true;

  /**
   * 与场景关联的视图
   */
  public view: View3D;

  /**
   * 创建一个新的3D场景
   * 初始化场景的变换、天空盒和环境贴图
   */
  constructor() {
    super();
    this.transform.scene3D = this;
    this.skyObject = new Object3D();
    this.addChild(this.skyObject);
    this._isScene3D = true;
    this.envMap ||= Engine3D.res.defaultSky;
  }

  /**
   * 获取场景的环境贴图纹理
   * @returns 当前环境贴图纹理
   */
  public get envMap(): Texture {
    return this._envMap;
  }

  /**
   * 设置场景的环境贴图纹理
   * 当设置新的环境贴图时，会标记envMapChange为true
   * 同时更新天空盒的贴图
   * @param value 要设置的环境贴图纹理
   */
  public set envMap(value: Texture) {
    if (this._envMap != value) {
      this.envMapChange = true;
    }
    this._envMap = value;
    if (EntityCollect.instance.sky && `map` in EntityCollect.instance.sky)
      EntityCollect.instance.sky.map = value;
  }

  /**
   * 获取天空盒的曝光值
   * @returns 当前曝光值，如果天空盒不存在则返回0
   */
  public get exposure(): number {
    if (EntityCollect.instance.sky && `exposure` in EntityCollect.instance.sky)
      return EntityCollect.instance.sky.exposure as number;
    return 0;
  }

  /**
   * 设置天空盒的曝光值
   * 同时更新全局天空盒设置
   * @param value 要设置的曝光值
   */
  public set exposure(value: number) {
    if (
      EntityCollect.instance.sky &&
      `exposure` in EntityCollect.instance.sky
    ) {
      EntityCollect.instance.sky.exposure = value;
      Engine3D.setting.sky.skyExposure = value;
    }
  }

  /**
   * 获取天空盒的粗糙度值
   * @returns 当前粗糙度值，如果天空盒不存在则返回undefined
   */
  public get roughness(): number {
    if (
      EntityCollect.instance.sky &&
      `roughness` in EntityCollect.instance.sky
    ) {
      return EntityCollect.instance.sky.roughness as number;
    }
  }

  /**
   * 设置天空盒的粗糙度值
   * @param value 要设置的粗糙度值
   */
  public set roughness(value: number) {
    if (
      EntityCollect.instance.sky &&
      `roughness` in EntityCollect.instance.sky
    ) {
      EntityCollect.instance.sky.roughness = value;
    }
  }
}
