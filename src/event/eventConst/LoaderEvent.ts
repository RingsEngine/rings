import { CEvent } from "../CEvent";

export class LoaderEvent extends CEvent {
  public static LOADER_PROGRESS: string = "loaderProgress";
  public static LOADER_COMPLETE: string = "loaderComplete";
}
