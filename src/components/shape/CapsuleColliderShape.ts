import { ColliderShape, ColliderShapeType } from "./ColliderShape";

export class CapsuleColliderShape extends ColliderShape {
  public radius: number = 2.5;
  public height: number = 10;

  constructor() {
    super();
    this._shapeType = ColliderShapeType.Capsule;
  }
}
