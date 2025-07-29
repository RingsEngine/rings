import { ComponentCollect, View3D } from "..";
import { Engine3D } from "../Engine3D";
import { Ray } from "../math/Ray";
import { ComponentBase } from "./ComponentBase";
import { BoxColliderShape } from "./shape/BoxColliderShape";
import { ColliderShape, HitInfo } from "./shape/ColliderShape";

export class ColliderComponent extends ComponentBase {
  private _shape: ColliderShape;

  constructor() {
    super();
    this._shape = new BoxColliderShape();
  }

  public start(): void {
    if (Engine3D.setting.pick.mode == `pixel`) {
      this.transform.scene3D.view.pickFire.mouseEnableMap.set(
        this.transform.worldMatrix.index,
        this
      );
    }
  }

  public onEnable(view?: View3D) {
    ComponentCollect.bindEnablePick(view, this, null);
  }

  public onDisable(view?: View3D) {
    ComponentCollect.unBindEnablePick(view, this);
  }

  public get shape(): ColliderShape {
    return this._shape;
  }

  public set shape(value: ColliderShape) {
    this._shape = value;
  }

  public rayPick(ray: Ray): HitInfo {
    if (this._enable) {
      return this._shape.rayPick(ray, this.transform.worldMatrix);
    }
    return null;
  }

  public beforeDestroy(force?: boolean) {
    if (Engine3D.setting.pick.mode == `pixel`) {
      this.transform.scene3D.view.pickFire.mouseEnableMap.delete(
        this.transform.worldMatrix.index
      );
    }
    super.beforeDestroy(force);
  }
}
