import { CEvent } from "../CEvent";

export class Object3DEvent extends CEvent {
  public static ADDED: string = "added";
  public static REMOVED: string = "removed";
  public static CHILD_ADD_EVENT: string = "childAddEvent";
  public static CHILD_REMOVED: string = "childRemoved";
}
