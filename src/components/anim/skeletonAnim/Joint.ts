import { Quaternion } from "../../../math/Quaternion";
import { Vector3 } from "../../../math/Vector3";

export class Joint {
  public name: string = "";
  public index: number = 0;
  public instanceID: string = "";
  public parent: Joint = null;
  public scale: Vector3 = new Vector3();
  public rotation: Quaternion = new Quaternion();
  public translation: Vector3 = new Vector3();
  constructor(name: string = "") {
    this.name = name;
  }
}
