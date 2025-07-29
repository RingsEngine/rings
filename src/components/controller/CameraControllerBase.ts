import { Object3D } from "../../core/entities/Object3D";
import { Vector3 } from "../../math/Vector3";

export class CameraControllerBase {
  protected _autoUpdate: boolean = true;
  protected _target: Object3D | null;
  protected _lookAtObject: Object3D | null;
  protected _origin: Vector3 = new Vector3(0.0, 0.0, 0.0);
  protected _speed: number = 300;

  constructor(
    targetObject: Object3D | null = null,
    lookAtObject: Object3D | null = null
  ) {
    this._target = targetObject;
    this._lookAtObject = lookAtObject;
  }

  public get target(): Object3D | null {
    return this._target;
  }

  public set target(val: Object3D | null) {
    if (this._target == val) return;
    this._target = val;
  }

  public get lookAtObject(): Object3D | null {
    return this._lookAtObject;
  }

  public set lookAtObject(val: Object3D | null) {
    if (this._lookAtObject == val) return;
    this._lookAtObject = val;
  }

  public get speed(): number {
    return this._speed;
  }

  public set speed(val: number) {
    this._speed = val;
  }

  public update() {}
}
