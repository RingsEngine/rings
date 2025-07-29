import { View3D } from "../../core/View3D";
import {
  clamp,
  DEGREES_TO_RADIANS,
  RADIANS_TO_DEGREES,
} from "../../math/MathUtil";
import { UUID } from "../../util/Global";
import { RegisterComponent } from "../../util/SerializeDecoration";
import { LightBase } from "./LightBase";
import { LightType } from "./LightData";

@RegisterComponent(SpotLight, "SpotLight")
export class SpotLight extends LightBase {
  constructor() {
    super();
  }

  public init(): void {
    super.init();
    this.lightData.lightType = LightType.SpotLight;
    if (this.object3D.name == "") {
      this.object3D.name = "SpotLight" + UUID();
    }
  }

  public get innerAngle(): number {
    return (
      ((this.lightData.innerAngle as number) /
        (this.lightData.outerAngle as number)) *
      100.0
    );
  }

  public set innerAngle(value: number) {
    this.lightData.innerAngle =
      (clamp(value, 0.0, 100.0) / 100.0) *
      (this.lightData.outerAngle as number);
    this.onChange();
  }

  public get outerAngle(): number {
    return (this.lightData.outerAngle as number) * RADIANS_TO_DEGREES * 2;
  }

  public set outerAngle(value: number) {
    this.lightData.outerAngle =
      clamp(value, 1.0, 179.0) * DEGREES_TO_RADIANS * 0.5;
    this.onChange();
  }

  public get radius(): number {
    return this.lightData.radius as number;
  }

  public set radius(value: number) {
    this.lightData.radius = value;
    this.onChange();
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

  public start(): void {
    super.start();
    this.lightData.lightType = LightType.SpotLight;
  }

  public onUpdate(): void {}

  public onGraphic(view: View3D) {}

  public debug() {}

  public debugDraw(show: boolean) {}
}
