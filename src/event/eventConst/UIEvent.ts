import { CEvent } from "../CEvent";

export class UIEvent extends CEvent {
  public static SHOW: string = "show";
  public static HIDE: string = "hide";
  public static UPDATE: string = "update";
}
