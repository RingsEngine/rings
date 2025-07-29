import { Color } from "../../math/Color";
import { Vector3 } from "../../math/Vector3";
import { Struct } from "../../util/struct/Struct";

export enum LightType {
  None,
  PointLight,
  DirectionLight,
  SpotLight,
  SkyLight,
}

export class LightData extends Struct {
  public static lightSize: number = 24;
  public index: number = -1;
  public lightType: number = -1;
  public radius: number = 0.001;
  public linear: number = 8.0;
  public lightPosition: Vector3 = new Vector3();
  public lightMatrixIndex: number = -1;
  public direction: Vector3 = new Vector3();
  public quadratic: number = 0.032;
  public lightColor: Color = new Color(1, 1, 1, 1);
  public intensity: number = 1;
  public innerAngle: number = 0;
  public outerAngle: number = 1;
  public range: number = 100;
  public castShadowIndex: number = -1;
  public lightTangent: Vector3 = Vector3.FORWARD;
  public iesIndex: number = -1;
}
