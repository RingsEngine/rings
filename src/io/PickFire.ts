import { Camera3D } from "../core/Camera3D";
import { Engine3D } from "../Engine3D";
import { MouseCode } from "../event/MouseCode";
import { CEventDispatcher } from "../event/CEventDispatcher";
import { Ray } from "../math/Ray";
import { Vector3 } from "../math/Vector3";
import { PickCompute } from "./picker/PickCompute";
import { ColliderComponent } from "../components/ColliderComponent";
import { View3D } from "../core/View3D";
import { PointerEvent3D } from "../event/eventConst/PointerEvent3D";
import { HitInfo } from "../components/shape/ColliderShape";
import { ComponentCollect, Matrix4 } from "..";

export class PickFire extends CEventDispatcher {
  public ray: Ray;
  public isTouching: boolean = false;
  private _mouseCode: MouseCode;
  private _pickEvent: PointerEvent3D;
  private _outEvent: PointerEvent3D;
  private _overEvent: PointerEvent3D;
  private _upEvent: PointerEvent3D;
  private _downEvent: PointerEvent3D;
  private _mouseMove: PointerEvent3D;
  private _pickCompute: PickCompute;
  private _lastDownTarget: ColliderComponent;
  public mouseEnableMap: Map<number, ColliderComponent>;
  private _view: View3D;
  constructor(view: View3D) {
    super();
    this._view = view;
    this.init();
  }
  private init(): void {
    this.ray = new Ray();
    this.mouseEnableMap = new Map<number, ColliderComponent>();
    this._pickEvent = new PointerEvent3D(PointerEvent3D.PICK_CLICK);
    this._outEvent = new PointerEvent3D(PointerEvent3D.PICK_OUT);
    this._overEvent = new PointerEvent3D(PointerEvent3D.PICK_OVER);
    this._mouseMove = new PointerEvent3D(PointerEvent3D.PICK_MOVE);
    this._upEvent = new PointerEvent3D(PointerEvent3D.PICK_UP);
    this._downEvent = new PointerEvent3D(PointerEvent3D.PICK_DOWN);
  }
  public start() {
    if (Engine3D.setting.pick.enable) {
      Engine3D.inputSystem.addEventListener(
        PointerEvent3D.POINTER_DOWN,
        this.onTouchStart,
        this
      );
      Engine3D.inputSystem.addEventListener(
        PointerEvent3D.POINTER_UP,
        this.onTouchEnd,
        this
      );
      Engine3D.inputSystem.addEventListener(
        PointerEvent3D.POINTER_CLICK,
        this.onTouchOnce,
        this
      );
      Engine3D.inputSystem.addEventListener(
        PointerEvent3D.POINTER_RIGHT_CLICK,
        this.onTouchOnce,
        this
      );
      Engine3D.inputSystem.addEventListener(
        PointerEvent3D.POINTER_MOVE,
        this.onTouchMove,
        this
      );
    }

    if (Engine3D.setting.pick.mode == `pixel`) {
      this._pickCompute = new PickCompute();
      this._pickCompute.init();
    }
  }
  public stop() {
    Engine3D.inputSystem.removeEventListener(
      PointerEvent3D.POINTER_DOWN,
      this.onTouchStart,
      this
    );
    Engine3D.inputSystem.removeEventListener(
      PointerEvent3D.POINTER_UP,
      this.onTouchEnd,
      this
    );
    Engine3D.inputSystem.removeEventListener(
      PointerEvent3D.POINTER_CLICK,
      this.onTouchOnce,
      this
    );
    Engine3D.inputSystem.removeEventListener(
      PointerEvent3D.POINTER_RIGHT_CLICK,
      this.onTouchOnce,
      this
    );
    Engine3D.inputSystem.removeEventListener(
      PointerEvent3D.POINTER_MOVE,
      this.onTouchMove,
      this
    );
  }
  private onTouchStart(e: PointerEvent3D) {
    this.isTouching = true;
    this._mouseCode = e.mouseCode;
    this.pick(this._view.camera);
    let target = this.findNearestObj(this._interestList, this._view.camera);
    this._lastDownTarget = target;
    if (target) {
      Object.assign(this._downEvent, e);
      this._downEvent.type = PointerEvent3D.PICK_DOWN;
      this._downEvent.target = target.object3D;
      this._downEvent.data = this.getPickInfo();
      this.dispatchEvent(this._downEvent);

      if (target.object3D.containEventListener(PointerEvent3D.PICK_DOWN)) {
        target.object3D.dispatchEvent(this._downEvent);
      }
    }
  }
  private onTouchEnd(e: PointerEvent3D) {
    this.isTouching = false;
    this._mouseCode = e.mouseCode;

    this.pick(this._view.camera);
    let target = this.findNearestObj(this._interestList, this._view.camera);
    if (target) {
      Object.assign(this._upEvent, e);
      this._upEvent.type = PointerEvent3D.PICK_UP;
      this._upEvent.target = target.object3D;
      this._upEvent.data = this.getPickInfo();
      this.dispatchEvent(this._upEvent);

      if (target.object3D.containEventListener(PointerEvent3D.PICK_UP)) {
        target.object3D.dispatchEvent(this._upEvent);
      }
    }
  }

  private _lastFocus: ColliderComponent;

  private getPickInfo() {
    if (Engine3D.setting.pick.mode == `pixel`)
      return {
        worldPos: this._pickCompute.getPickWorldPosition(),
        worldNormal: this._pickCompute.getPickWorldNormal(),
        screenUv: this._pickCompute.getPickScreenUV(),
        meshID: this._pickCompute.getPickMeshID(),
      };
    else {
      let intersection = this._interestList[0];
      return {
        worldPos: intersection.intersectPoint,
        worldNormal: intersection.normal,
        meshID: intersection.collider.transform.worldMatrix.index,
        distance: intersection.distance,
      };
    }
  }

  private onTouchMove(e: PointerEvent3D) {
    this.isTouching = true;
    this._mouseCode = e.mouseCode;
    this.pick(this._view.camera);
    let target = this.findNearestObj(this._interestList, this._view.camera);
    if (target) {
      Object.assign(this._mouseMove, e);
      this._mouseMove.type = PointerEvent3D.PICK_MOVE;
      this._mouseMove.target = target.object3D;
      this._mouseMove.data = this.getPickInfo();
      this.dispatchEvent(this._mouseMove);

      if (target.object3D.containEventListener(PointerEvent3D.PICK_MOVE)) {
        target.object3D.dispatchEvent(this._mouseMove);
      }
    }

    if (target != this._lastFocus) {
      if (this._lastFocus && this._lastFocus.object3D) {
        Object.assign(this._outEvent, e);
        this._outEvent.type = PointerEvent3D.PICK_OUT;
        this._outEvent.target = this._lastFocus.object3D;
        this._outEvent.data = this.getPickInfo();
        this.dispatchEvent(this._outEvent);

        if (
          this._lastFocus.object3D.containEventListener(PointerEvent3D.PICK_OUT)
        ) {
          this._lastFocus.object3D.dispatchEvent(this._outEvent);
        }
      }
      if (target) {
        Object.assign(this._overEvent, e);
        this._overEvent.type = PointerEvent3D.PICK_OVER;
        this._overEvent.target = target.object3D;
        this._overEvent.data = this.getPickInfo();
        this.dispatchEvent(this._overEvent);
        if (target.object3D.containEventListener(PointerEvent3D.PICK_OVER)) {
          target.object3D.dispatchEvent(this._overEvent);
        }
      }
    }
    this._lastFocus = target;
  }

  private onTouchOnce(e: PointerEvent3D) {
    this.isTouching = true;
    this._mouseCode = e.mouseCode;
    this.pick(this._view.camera);
    let target = this.findNearestObj(this._interestList, this._view.camera);
    if (target) {
      let info = this.getPickInfo();
      Object.assign(this._pickEvent, e);
      this._pickEvent.type = PointerEvent3D.PICK_CLICK;
      this._pickEvent.target = target.object3D;
      this._pickEvent.data = info;
      this.dispatchEvent(this._pickEvent);

      if (
        target === this._lastDownTarget &&
        target.object3D.containEventListener(PointerEvent3D.PICK_CLICK)
      ) {
        target.object3D.dispatchEvent(this._pickEvent);
      }
    }

    this._lastDownTarget = null;
  }

  private findNearestObj(list: HitInfo[], camera: Camera3D): ColliderComponent {
    list.sort((a, b) => {
      return a.distance > b.distance ? 1 : -1;
    });

    return list[0]?.collider;
  }

  private _interestList: HitInfo[] = [];

  private pick(camera: Camera3D) {
    this._interestList.length = 0;
    if (Engine3D.setting.pick.mode == `pixel`) {
      this._pickCompute.compute(this._view);
      let meshID = this._pickCompute.getPickMeshID();
      let iterator = this.mouseEnableMap.get(meshID);
      if (iterator) {
        let position = this._pickCompute.getPickWorldPosition();
        let distance = Vector3.distance(position, this.ray.origin);
        this._interestList.push({
          distance: distance,
          collider: iterator,
          intersectPoint: position,
        });
      }
    } else if (Engine3D.setting.pick.mode == `bound`) {
      this.ray = camera.screenPointToRay(
        Engine3D.inputSystem.mouseX,
        Engine3D.inputSystem.mouseY
      );
      let intersect: HitInfo;
      let colliders = ComponentCollect.componentsEnablePickerList.get(
        this._view
      );
      if (colliders) {
        for (const item of colliders) {
          let collider = item[0];
          if (collider.enable) {
            intersect = collider.rayPick(this.ray);
            if (intersect) {
              intersect.collider = collider;
              this._interestList.push(intersect);
            }
          }
        }
      }
    }
  }
}
