import { View3D } from "../../core/View3D";
import { LightBase } from "./LightBase";
export declare class PointLight extends LightBase {
    constructor();
    init(): void;
    get range(): number;
    set range(value: number);
    get at(): number;
    set at(value: number);
    get radius(): number;
    set radius(value: number);
    get quadratic(): number;
    set quadratic(value: number);
    start(): void;
    onUpdate(): void;
    onGraphic(view?: View3D): void;
    debug(): void;
    debugDraw(show: boolean): void;
}
