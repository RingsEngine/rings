import { Object3D } from "..";
import { GUIPick } from "../components/gui/GUIPick";
import { GUICanvas } from "../components/gui/core/GUICanvas";
import { CEventListener } from "../event/CEventListener";
import { ShadowLightsCollect } from "../gfx/renderJob/collect/ShadowLightsCollect";
import { PickFire } from "../io/PickFire";
import { Vector4 } from "../math/Vector4";
import { Camera3D } from "./Camera3D";
import { Scene3D } from "./Scene3D";

/**
 * View3D类表示3D视图，负责管理场景、相机和视口。
 * 它是渲染管线的重要组成部分，处理场景渲染、拾取操作和UI画布。
 * 每个View3D实例代表一个独立的渲染视图，可以有自己的场景、相机和视口设置。
 */
export class View3D extends CEventListener {
  /**
   * 视图使用的相机
   * @private
   */
  private _camera: Camera3D;

  /**
   * 视图关联的场景
   * @private
   */
  private _scene: Scene3D;

  /**
   * 视口区域，定义了渲染区域在画布上的位置和大小
   * @private
   */
  private _viewPort: Vector4;

  /**
   * 是否启用拾取功能
   * @private
   */
  private _enablePick: boolean = false;

  /**
   * 视图是否启用
   * @private
   */
  private _enable: boolean = true;

  /**
   * 拾取事件处理器
   */
  public pickFire: PickFire;

  /**
   * GUI拾取处理器
   */
  public guiPick: GUIPick;

  /**
   * 视图中的UI画布列表
   */
  public readonly canvasList: GUICanvas[];

  /**
   * 创建一个新的3D视图
   * @param x 视口的X坐标，默认为0
   * @param y 视口的Y坐标，默认为0
   * @param width 视口的宽度，默认为0
   * @param height 视口的高度，默认为0
   */
  constructor(
    x: number = 0,
    y: number = 0,
    width: number = 0,
    height: number = 0
  ) {
    super();
    this.canvasList = [];
    this._viewPort = new Vector4(x, y, width, height);
  }

  public get enable(): boolean {
    return this._enable;
  }

  public set enable(value: boolean) {
    this._enable = value;
  }

  public get enablePick(): boolean {
    return this._enablePick;
  }

  public set enablePick(value: boolean) {
    if (this._enablePick != value) {
      this.pickFire = new PickFire(this);
      this.pickFire.start();
    }
    this._enablePick = value;
  }

  public get scene(): Scene3D {
    return this._scene;
  }

  public set scene(value: Scene3D) {
    this._scene = value;
    value.view = this;

    ShadowLightsCollect.createBuffer(this);

    if (value) {
      this.canvasList.forEach((canvas) => {
        canvas && value.addChild(canvas.object3D);
      });
    }
  }

  public get camera(): Camera3D {
    return this._camera;
  }

  public set camera(value: Camera3D) {
    this._camera = value;
  }

  public get viewPort(): Vector4 {
    return this._viewPort;
  }

  public set viewPort(value: Vector4) {
    this._viewPort = value;
  }

  /**
   * 启用指定索引的UI画布
   * 如果画布不存在，会创建一个新的画布并添加到场景中
   * 同时确保GUI拾取功能已初始化
   *
   * @param index 画布索引，默认为0
   * @returns 启用的GUI画布实例
   */
  public enableUICanvas(index: number = 0): GUICanvas {
    let canvas = this.canvasList[index];
    if (!canvas) {
      let obj = new Object3D();
      obj.name = "Canvas " + index;
      canvas = obj.addComponent(GUICanvas);
      canvas.index = index;
      this.canvasList[index] = canvas;
    }

    this.scene.addChild(canvas.object3D);

    if (!this.guiPick) {
      this.guiPick = new GUIPick();
      this.guiPick.init(this);
    }

    return canvas;
  }

  /**
   * 禁用指定索引的UI画布
   * 将画布从场景中移除，但不会销毁画布对象
   *
   * @param index 要禁用的画布索引，默认为0
   */
  public disableUICanvas(index: number = 0) {
    let canvas = this.canvasList[index];
    if (canvas && canvas.object3D) {
      canvas.object3D.removeFromParent();
    }
  }
}
