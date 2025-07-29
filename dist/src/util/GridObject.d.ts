import { Object3D } from "../core/entities/Object3D";
/**
 * 一个包含网格的Object3D - 由二维线条组成
 * @group Util
 */
export declare class GridObject extends Object3D {
    size: number;
    divisions: number;
    constructor(size?: number, divisions?: number);
    private buildGeometry;
    private addAxis;
}
