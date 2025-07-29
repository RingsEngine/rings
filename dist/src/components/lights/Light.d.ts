import { View3D } from "../../core/View3D";
import { LightBase } from "./LightBase";
/**
 * 点光源
 * @group Lights
 */
export declare class Light extends LightBase {
    constructor();
    init(): void;
    /**
     * 光源影响范围
     */
    get range(): number;
    set range(value: number);
    /**
     * 光照衰减的线性系数
     */
    get at(): number;
    set at(value: number);
    get radius(): number;
    set radius(value: number);
    /**
     * 光照衰减的二次方系数
     */
    get quadratic(): number;
    set quadratic(value: number);
    start(): void;
    onUpdate(): void;
    onGraphic(view?: View3D): void;
    debug(): void;
    debugDraw(show: boolean): void;
}
