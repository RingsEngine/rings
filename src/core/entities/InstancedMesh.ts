import { Material } from "../..";
import { MeshRenderer } from "../../components/renderer/MeshRenderer";
import { Matrix4 } from "../../math/Matrix4";
import { Orientation3D } from "../../math/Orientation3D";
import { Vector3 } from "../../math/Vector3";
import { GeometryBase } from "../geometry/GeometryBase";
import { Object3D } from "./Object3D";

export class InstancedMesh extends Object3D {
  private _geometry: GeometryBase;
  private _material: Material;
  private _instanceList: Object3D[];

  constructor(geometry: GeometryBase, material: Material, length: number) {
    super();
    this._geometry = geometry;
    this._material = material;
    this._instanceList = [];
    for (let i = 0; i < length; i++) {
      let component: MeshRenderer;
      let child = new Object3D();
      component = child.addComponent(MeshRenderer);
      component.geometry = this._geometry;
      component.material = this._material;
      this.addChild(child);
      this._instanceList.push(child);
    }
  }

  public setMatrixAt(index: number, matrix: Matrix4): this {
    let instance = this._instanceList[index];
    let prs: Vector3[] = matrix.decompose(Orientation3D.QUATERNION);
    let transform = instance.transform;
    transform.localRotQuat.copyFrom(prs[1]);
    transform.localRotQuat = transform.localRotQuat;
    transform.localPosition.copyFrom(prs[0]);
    transform.localPosition = transform.localPosition;
    transform.localScale.copyFrom(prs[2]);
    transform.localScale = transform.localScale;
    return this;
  }
}
