import { Object3D } from "../../../core/entities/Object3D";
import { GUISpace } from "../GUIConfig";
import { UIPanel } from "./UIPanel";

export class ViewPanel extends UIPanel {
  public readonly isViewPanel = true;
  public readonly space: GUISpace = GUISpace.View;
  constructor() {
    super();
  }

  public cloneTo(obj: Object3D) {
    let component: ViewPanel = obj.getOrAddComponent(ViewPanel);
    component.copyComponent(this);
  }
}
