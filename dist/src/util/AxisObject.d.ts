import { Object3D } from "../core/entities/Object3D";
/**
 * 包含xyz坐标的OBJECT3D
 * @group Util
 */
export declare class AxisObject extends Object3D {
    length: number;
    thickness: number;
    constructor(length: number, thickness?: number);
    init(): void;
}
