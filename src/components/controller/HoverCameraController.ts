import { Engine3D } from "../../Engine3D";
import { Camera3D } from "../../core/Camera3D";
import { View3D } from "../../core/View3D";
import { BoundingBox } from "../../core/bound/BoundingBox";
import { Object3D } from "../../core/entities/Object3D";
import { PointerEvent3D } from "../../event/eventConst/PointerEvent3D";
import { clamp } from "../../math/MathUtil";
import { Quaternion } from "../../math/Quaternion";
import { Vector3 } from "../../math/Vector3";
import { BoundUtil } from "../../util/BoundUtil";
import { Time } from "../../util/Time";
import { Vector3Ex } from "../../util/Vector3Ex";
import { ComponentBase } from "../ComponentBase";

export class HoverCameraController extends ComponentBase {
  public camera: Camera3D;

  public minDistance: number = 0.1;

  public maxDistance: number = 500;

  public rollSmooth: number = 15.0;

  public dragSmooth: number = 20;

  public wheelSmooth: number = 10;

  public wheelStep: number = 0.002;

  public mouseRightFactor: number = 0.25;

  public mouseLeftFactor: number = 20;

  public smooth: boolean = true;

  private _wheelStep: number = 0.002;

  private _distance: number = 0;

  public distance: number = 10;
  private _roll: number = 0;

  public roll: number = 0;
  private _pitch: number = 0;

  public pitch: number = 0;

  private _currentPos: Object3D;

  private _targetPos: Object3D;
  private _flowTarget: Object3D;
  private _flowOffset: Vector3;

  private _mouseLeftDown: boolean = false;
  private _mouseRightDown: boolean = false;
  private _bottomClamp: number = 89.99;
  private _topClamp: number = -89.99;

  get bottomClamp(): number {
    return this._bottomClamp;
  }
  set bottomClamp(value: number) {
    this._bottomClamp = value > 89.99 ? 89.99 : value;
  }

  get topClamp(): number {
    return this._topClamp;
  }
  set topClamp(value: number) {
    this._topClamp = value < -89.99 ? -89.99 : value;
  }
  private _tempDir = new Vector3();
  private _tempPos = new Vector3();

  constructor() {
    super();
    this._currentPos = new Object3D();
    this._targetPos = new Object3D();
  }

  public start(): void {
    this.camera = this.object3D.getOrAddComponent(Camera3D);
    Engine3D.inputSystem.addEventListener(
      PointerEvent3D.POINTER_DOWN,
      this.onMouseDown,
      this
    );
    Engine3D.inputSystem.addEventListener(
      PointerEvent3D.POINTER_MOVE,
      this.onMouseMove,
      this,
      null,
      10
    );
    Engine3D.inputSystem.addEventListener(
      PointerEvent3D.POINTER_UP,
      this.onMouseUp,
      this,
      null,
      10
    );
    Engine3D.inputSystem.addEventListener(
      PointerEvent3D.POINTER_WHEEL,
      this.onMouseWheel,
      this
    );
  }

  public flowTarget(target: Object3D, offset: Vector3 = Vector3.ZERO) {
    this._flowTarget = target;
    this._flowOffset ||= new Vector3();
    this._flowOffset.copyFrom(offset);
  }

  public getFlowTarget(): Object3D {
    return this._flowTarget;
  }

  public setCamera(
    roll: number,
    pitch: number,
    distance: number,
    target?: Vector3
  ) {
    this.roll = roll;
    this.pitch = pitch;
    this.distance = distance;
    if (this.maxDistance < distance * 1.5) {
      this.maxDistance = distance * 1.5;
    }
    if (target) {
      this._targetPos.transform.localPosition.copy(target);
    }
  }

  public focusByBounds(obj: Object3D) {
    let bounds = BoundUtil.genMeshBounds(obj);
    this.focusBound(bounds);
  }

  public focusBound(bound: BoundingBox) {
    this.target = bound.center;
  }

  public set target(target: Vector3) {
    this._targetPos.transform.localPosition.copy(target);
  }

  public get target(): Vector3 {
    return this._targetPos.transform.localPosition;
  }

  private onMouseWheel(e: PointerEvent3D) {
    if (!this.enable) return;
    this._wheelStep =
      (this.wheelStep *
        Vector3Ex.distance(
          this._currentPos.transform.worldPosition,
          this.camera.transform.worldPosition
        )) /
      10;
    this.distance -= Engine3D.inputSystem.wheelDelta * this._wheelStep;
    this.distance = clamp(this.distance, this.minDistance, this.maxDistance);
  }

  private onMouseDown(e: PointerEvent3D) {
    if (!this.enable) return;
    switch (e.mouseCode) {
      case 0:
        this._mouseLeftDown = true;
        break;
      case 1:
        break;
      case 2:
        this._mouseRightDown = true;
        break;
      default:
        break;
    }
  }

  private onMouseUp(e: PointerEvent3D) {
    this._mouseLeftDown = false;
    this._mouseRightDown = false;
  }

  private onMouseMove(e: PointerEvent3D) {
    if (!this.enable) return;
    if (this._mouseRightDown) {
      Vector3.HELP_1.x =
        -1 * e.movementX * Math.cos((this._roll * Math.PI) / 180) -
        e.movementY * Math.sin((this._roll * Math.PI) / 180);
      Vector3.HELP_1.z =
        -1 * e.movementY * Math.cos((this._roll * Math.PI) / 180) +
        e.movementX * Math.sin((this._roll * Math.PI) / 180);
      this._targetPos.x += Vector3.HELP_1.x * this.mouseRightFactor;
      this._targetPos.z += Vector3.HELP_1.z * this.mouseRightFactor;
    }

    if (this._mouseLeftDown) {
      this.roll -= e.movementX * Time.delta * 0.001 * this.mouseLeftFactor;
      this.pitch -= e.movementY * Time.delta * 0.001 * this.mouseLeftFactor;
      this.pitch = clamp(this.pitch, this._topClamp, this._bottomClamp);
    }
  }

  public onBeforeUpdate(view?: View3D) {
    if (!this.enable) return;

    if (this._flowTarget) {
      Vector3.HELP_0.copyFrom(this._flowTarget.transform.worldPosition);
      Vector3.HELP_0.add(this._flowOffset, Vector3.HELP_0);
      this.target = Vector3.HELP_0;
    }

    let dt = clamp(Time.delta, 0.0, 0.016);
    if (this.smooth) {
      this._currentPos.x +=
        (this._targetPos.x - this._currentPos.x) * dt * this.dragSmooth;
      this._currentPos.y +=
        (this._targetPos.y - this._currentPos.y) * dt * this.dragSmooth;
      this._currentPos.z +=
        (this._targetPos.z - this._currentPos.z) * dt * this.dragSmooth;

      this._distance +=
        (this.distance - this._distance) * dt * this.wheelSmooth;

      this._roll += (this.roll - this._roll) * dt * this.rollSmooth;
      this._pitch += (this.pitch - this._pitch) * dt * this.rollSmooth;
    } else {
      this._currentPos.x = this._targetPos.x;
      this._currentPos.y = this._targetPos.y;
      this._currentPos.z = this._targetPos.z;

      this._distance = this.distance;

      this._roll = this.roll;
      this._pitch = this.pitch;
    }

    this._tempDir.set(0, 0, 1);

    let q = Quaternion.HELP_0;
    q.fromEulerAngles(this._pitch, this._roll, 0.0);
    this._tempDir.applyQuaternion(q);

    this._tempPos = Vector3Ex.mulScale(
      this._tempDir,
      this._distance,
      this._tempPos
    );
    this._tempPos.add(this._currentPos.transform.localPosition, this._tempPos);

    this.camera.lookAt(
      this._tempPos,
      this._currentPos.transform.localPosition,
      Vector3.UP
    );
  }

  public destroy(force?: boolean) {
    Engine3D.inputSystem.removeEventListener(
      PointerEvent3D.POINTER_DOWN,
      this.onMouseDown,
      this
    );
    Engine3D.inputSystem.removeEventListener(
      PointerEvent3D.POINTER_MOVE,
      this.onMouseMove,
      this
    );
    Engine3D.inputSystem.removeEventListener(
      PointerEvent3D.POINTER_UP,
      this.onMouseUp,
      this
    );
    Engine3D.inputSystem.removeEventListener(
      PointerEvent3D.POINTER_WHEEL,
      this.onMouseWheel,
      this
    );
    super.destroy(force);
    this.camera = null;
    this._flowTarget = null;
  }
}
