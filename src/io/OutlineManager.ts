import { MeshRenderer } from "../components/renderer/MeshRenderer";
import { Object3D } from "../core/entities/Object3D";
import { Color } from "../math/Color";
import { outlinePostData } from "./OutlinePostData";

export class OutlinePostManager {
  private _tempIndexArray: number[] = [];

  public setOutline(objectList: Object3D[], color?: Color) {
    this.setOutlineList([objectList], color ? [color] : null);
  }

  public setOutlineList(groupList: Object3D[][], colorList?: Color[]) {
    groupList ||= [];
    let defaultColor = outlinePostData.defaultColor;
    let maxGroup = outlinePostData.SlotCount;
    for (let i = 0; i < maxGroup; i++) {
      this._tempIndexArray.length = 0;
      let group = groupList[i];
      let color = (colorList ? colorList[i] : null) || defaultColor;
      if (group) {
        for (const item of group) {
          this.getEntityIdList(item, this._tempIndexArray);
        }
      }
      outlinePostData.fillDataAt(i, this._tempIndexArray, color);
    }
  }

  public clearOutline(): this {
    outlinePostData.clear();
    return this;
  }

  private _rendererList: MeshRenderer[] = [];

  private getEntityIdList(item: Object3D, target: number[]): void {
    this._rendererList.length = 0;
    let renderers = item.getComponents(MeshRenderer, this._rendererList);
    for (const render of renderers) {
      target.push(render.object3D.transform._worldMatrix.index);
    }
  }
}

export let outlinePostManager: OutlinePostManager = new OutlinePostManager();
