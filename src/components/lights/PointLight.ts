import { View3D } from "../../core/View3D";
import { UUID } from "../../util/Global";
import { RegisterComponent } from "../../util/SerializeDecoration";
import { LightBase } from "./LightBase";
import { LightType } from "./LightData";
/* eslint-disable */
@RegisterComponent(PointLight, "PointLight")
export class PointLight extends LightBase {
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

  public get range(): number {
    return this.lightData.range as number;
  }

  public set range(value: number) {
    this.lightData.range = value;
    this.onChange();
  }

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

  public onGraphic(view?: View3D): void {}

  public debug() {}

  public debugDraw(show: boolean) {}
}
