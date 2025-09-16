import { RegisterComponent } from "../..";
import { View3D } from "../../core/View3D";
import { Vector3 } from "../../math/Vector3";
import { UUID } from "../../util/Global";
import { LightBase } from "./LightBase";
import { LightType } from "./LightData";
/**
 * 点光源
 * @group Lights
 */
/* eslint-disable */
@RegisterComponent(Light, "Light")
export class Light extends LightBase {
  constructor() {
    super();
  }

  public init(): void {
    super.init();
    this.lightData.lightType = LightType.PointLight;
    if (this.object3D.name == "") {
      this.object3D.name = "PointLight" + UUID();
    }
  }

  /**
   * 光源影响范围
   */
  public get range(): number {
    return this.lightData.range as number;
  }

  public set range(value: number) {
    this.lightData.range = value;
    this.onChange();
  }

  /**
   * 光照衰减的线性系数
   */
  public get at(): number {
    return this.lightData.linear as number;
  }

  public set at(value: number) {
    this.lightData.linear = value;
    this.onChange();
  }

  public get radius(): number {
    return this.lightData.radius as number;
  }

  public set radius(value: number) {
    this.lightData.radius = value;
    this.onChange();
  }

  /**
   * 光照衰减的二次方系数
   */
  public get quadratic(): number {
    return this.lightData.quadratic as number;
  }

  public set quadratic(value: number) {
    this.lightData.quadratic = value;
    this.onChange();
  }

  public start(): void {
    this.transform.rotationX = 90;
    super.start();
  }

  public onUpdate(): void {}

  public onGraphic(view?: View3D): void {
    let graphic3D = view.scene.getChildByName("graphic3D");
    if (!graphic3D) return;
    let custom = graphic3D.createCustomShape(
      `PointLight_${this.object3D.instanceID}`,
      this.transform
    );
    custom.buildAxis();
    custom.buildCircle(Vector3.ZERO, this.range, 32, Vector3.X_AXIS);
    custom.buildCircle(Vector3.ZERO, this.range, 32, Vector3.Y_AXIS);
    custom.buildCircle(Vector3.ZERO, this.range, 32, Vector3.Z_AXIS);
  }

  public debug() {}

  public debugDraw(show: boolean) {}
}
