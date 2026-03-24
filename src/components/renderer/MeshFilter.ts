import { Object3D } from "../..";
import { Engine3D } from "../../Engine3D";
import { RegisterComponent } from "../../util/SerializeDecoration";
import { MeshRenderer } from "./MeshRenderer";
/* eslint-disable */
@RegisterComponent(MeshFilter, "MeshFilter")
export class MeshFilter extends MeshRenderer {
  constructor() {
    super();
  }

  public cloneTo(obj: Object3D): void {}

  public set meshURL(value: string) {
    const geometry = Engine3D.res.getGeometry(value);
    if (geometry) {
      super.geometry = geometry;
    } else {
      console.error("no geometry set", value);
    }
  }
}
