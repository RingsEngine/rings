import { Object3D } from "../../../../core/entities/Object3D";

export class Probe extends Object3D {
  public index: number = 0;
  public drawCallFrame = -1;
  constructor() {
    super();
  }
}
