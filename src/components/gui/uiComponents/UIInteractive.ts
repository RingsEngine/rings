import { UIComponentBase } from "./UIComponentBase";
import {
  IUIInteractive,
  UIInteractiveStyle,
  GUIHitInfo,
} from "./IUIInteractive";
import { Vector2 } from "../../../math/Vector2";
import { Ray } from "../../../math/Ray";
import { GUIPickHelper } from "../GUIPickHelper";
import { Object3D } from "../../../core/entities/Object3D";
import { UIPanel } from "./UIPanel";

/**
 * 基本交互能力
 * @group GPU GUI
 */
export class UIInteractive extends UIComponentBase implements IUIInteractive {
  protected _style: UIInteractiveStyle = UIInteractiveStyle.NORMAL;
  protected _interactive: boolean = false; // 设置是否可交互

  public set interactive(value: boolean) {
    this._interactive = value;
  }

  public get interactive(): boolean {
    return this._interactive;
  }

  /**设置鼠标悬停时的样式 */
  public set mouseStyle(value: UIInteractiveStyle) {
    this._style = value;
  }

  /**判断组件是否可见且可交互 */
  public get interactiveVisible(): boolean {
    return this._uiTransform.globalVisible && this._visible;
  }

  init(param?: any) {
    super.init(param);
    this._uiTransform.addUIInteractive(this);
  }

  public destroy() {
    this._uiTransform.removeUIInteractive(this);
    super.destroy();
  }

  public rayPick(
    ray: Ray,
    panel: UIPanel,
    screenPos: Vector2,
    screenSize: Vector2
  ): GUIHitInfo {
    return GUIPickHelper.rayPick(
      ray,
      screenPos,
      screenSize,
      panel.space,
      panel.panelRatio,
      this._uiTransform,
      panel.transform.worldMatrix
    );
  }

  public cloneTo(obj: Object3D) {
    let component = obj.getOrAddComponent(UIInteractive);
    component.copyComponent(this);
  }

  public copyComponent(from: this): this {
    super.copyComponent(from);
    this.enable = from._enable;
    this.interactive = from._interactive;
    this.mouseStyle = from._style;
    return this;
  }
}
