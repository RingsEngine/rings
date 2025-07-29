import { Object3D } from "../core/entities/Object3D";
import { Color } from "../math/Color";
export declare class OutlinePostManager {
    private _tempIndexArray;
    setOutline(objectList: Object3D[], color?: Color): void;
    setOutlineList(groupList: Object3D[][], colorList?: Color[]): void;
    clearOutline(): this;
    private _rendererList;
    private getEntityIdList;
}
export declare let outlinePostManager: OutlinePostManager;
