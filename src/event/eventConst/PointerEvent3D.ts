import { GUIHitInfo } from "../../components/gui/uiComponents/IUIInteractive";
import { Vector2 } from "../../math/Vector2";
import { Vector3 } from "../../math/Vector3";
import { CEvent } from "../CEvent";

type pickResult = {
  meshID: number;
  worldPos: Vector3;
  worldNormal: Vector3;
  screenUv?: Vector2;
  distance?: number;
};

export class PointerEvent3D extends CEvent {
  public static PICK_OVER = "onPickOver";
  public static PICK_CLICK = "onPickClick";
  public static PICK_OUT = "onPickOut";
  public static PICK_MOVE = "onPickMove";
  public static PICK_UP = "onPickUp";
  public static PICK_DOWN = "onPickDown";
  public static POINTER_RIGHT_CLICK: string = "onPointerRightClick";
  public static POINTER_MID_UP: string = "onPointerMidUp";
  public static POINTER_MID_DOWN: string = "onPointerMidDown";
  static POINTER_CLICK: string = "onPointerClick";
  static POINTER_MOVE: string = "onPointerMove";
  static POINTER_DOWN: string = "onPointerDown";
  static POINTER_UP: string = "onPointerUp";
  static POINTER_OUT: string = "onPointerOut";
  static POINTER_OVER: string = "onPointerOver";
  static POINTER_WHEEL: string = "onPointerWheel";
  public pointerId: number;
  public pointerType: string = "onPointer";
  public isPrimary: boolean;
  public pressure: number;
  public mouseX: number;
  public mouseY: number;
  public movementX: number;
  public movementY: number;
  public deltaX: number;
  public deltaY: number;
  public declare data: pickResult;
  public deltaZ: number;

  public reset() {
    super.reset();
    this.mouseX = 0;
    this.mouseY = 0;
    this.movementX = 0;
    this.movementY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.deltaZ = 0;
  }
}

export class PickGUIEvent3D extends CEvent {
  public static PICK_OVER_GUI = "onPickOverGUI";
  public static PICK_CLICK_GUI = "onPickClickGUI";
  public static PICK_OUT_GUI = "onPickOutGUI";
  public static PICK_UP_GUI = "onPickUpGUI";
  public static PICK_DOWN_GUI = "onPickDownGUI";
  public pointerId: number;
  public pointerType: string = "onPickGUI";
  public isPrimary: boolean;
  public pressure: number;
  public mouseX: number;
  public mouseY: number;
  public movementX: number;
  public movementY: number;
  public deltaX: number;
  public deltaY: number;
  public declare data: GUIHitInfo;
  public deltaZ: number;

  public reset() {
    super.reset();
    this.mouseX = 0;
    this.mouseY = 0;
    this.movementX = 0;
    this.movementY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.deltaZ = 0;
  }
}
