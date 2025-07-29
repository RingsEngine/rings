import { Camera3D } from "../core/Camera3D";
import { Object3D } from "../core/entities/Object3D";
export declare class ZSorterUtil {
    private _pool;
    private _worldPosition;
    private _viewPosition;
    private _zSortList;
    private pop;
    private recycle;
    sort(camera3D: Camera3D, userDataList: any[], getObject3D: (userData: any) => Object3D, result?: any[]): any[];
    worldToCameraDepth(obj3d: Object3D, camera?: Camera3D): number;
}
export declare let zSorterUtil: ZSorterUtil;
