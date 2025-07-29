import { CEvent } from "../CEvent";

export class KeyEvent extends CEvent {
  public static KEY_DOWN: string = "onKeyDown";
  public static KEY_UP: string = "onKeyUp";
  public keyCode: number = 0;
}
