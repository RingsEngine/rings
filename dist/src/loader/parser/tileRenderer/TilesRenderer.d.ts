import { Object3D } from "../../../core/entities/Object3D";
export declare class TilesRenderer {
    readonly group: Object3D;
    private _modelList;
    private _tileSet;
    private _rootPath;
    constructor();
    loadTileSet(rootPath: string, file: string): Promise<void>;
    private onLoadProgress;
    private onComplete;
    private applyTransform;
}
