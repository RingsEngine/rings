import { ILight } from "./ILight";

export class GILighting {
  public static list: ILight[] = [];
  public static add(light: ILight) {
    let index = this.list.indexOf(light);
    if (index == -1) {
      this.list.push(light);
    }
  }

  public static remove(light: ILight) {
    let index = this.list.indexOf(light);
    if (index != -1) {
      this.list.splice(index, 1);
    }
  }
}
