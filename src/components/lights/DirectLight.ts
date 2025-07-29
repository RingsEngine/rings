import { Camera3D } from "../../core/Camera3D";
import { UUID } from "../../util/Global";
import { RegisterComponent } from "../../util/SerializeDecoration";
import { LightBase } from "./LightBase";
import { LightType } from "./LightData";

@RegisterComponent(DirectLight, "DirectLight")
export class DirectLight extends LightBase {
  public shadowCamera: Camera3D;

  constructor() {
    super();
  }

  public init(): void {
    super.init();
    if (this.object3D.name == "") {
      this.object3D.name = "DirectionLight_" + UUID();
    }
    this.radius = Number.MAX_SAFE_INTEGER;
    this.lightData.lightType = LightType.DirectionLight;
    this.lightData.linear = 0;
    this.lightData.quadratic = 0.3;
  }

  public start(): void {
    super.start();
    this.castGI = true;
  }

  public get radius(): number {
    return this.lightData.range as number;
  }

  public set radius(value: number) {
    this.lightData.range = value;
    this.onChange();
  }

  public get indirect(): number {
    return this.lightData.quadratic as number;
  }

  public set indirect(value: number) {
    this.lightData.quadratic = value;
    this.onChange();
  }

  public debug() {}
}
