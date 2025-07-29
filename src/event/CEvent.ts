import { View3D } from "../core/View3D";
import { Object3D } from "../core/entities/Object3D";
import { TouchData } from "../io/TouchData";
import { CEventListener } from "./CEventListener";

export class CEvent {
  public target: Object3D;
  public currentTarget: CEventListener;
  public type: string | null;
  public data?: any;
  public param: any;
  public time: number = 0;
  public delay: number = 0;
  public mouseCode: number = 0;
  public ctrlKey: boolean;
  public metaKey: boolean;
  public altKey: boolean;
  public shiftKey: boolean;
  public targetTouches: Array<TouchData>;
  public changedTouches: Array<TouchData>;
  public touches: Array<TouchData>;
  private _stopImmediatePropagation: boolean = false;
  public view: View3D;
  constructor(eventType: string | null = null, data: any = null) {
    this.type = eventType;
    this.data = data;
  }
  public stopImmediatePropagation() {
    this._stopImmediatePropagation = true;
  }
  public reset() {
    this._stopImmediatePropagation = false;
  }
  public get isStopImmediatePropagation(): boolean {
    return this._stopImmediatePropagation;
  }
}
