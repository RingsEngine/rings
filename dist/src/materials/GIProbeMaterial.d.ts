import { Material } from "./Material";
/**
 * @internal
 * @group Material
 */
export declare enum GIProbeMaterialType {
    CastGI = 0,
    ReceiveGI = 1,
    CastDepth = 2,
    Other = 3
}
export declare class GIProbeMaterial extends Material {
    static count: number;
    constructor(type?: GIProbeMaterialType, index?: number);
}
