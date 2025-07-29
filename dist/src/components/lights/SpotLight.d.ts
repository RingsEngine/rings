import { View3D } from "../../core/View3D";
import { LightBase } from "./LightBase";
export declare class SpotLight extends LightBase {
    constructor();
    init(): void;
    get innerAngle(): number;
    set innerAngle(value: number);
    get outerAngle(): number;
    set outerAngle(value: number);
    get radius(): number;
    set radius(value: number);
    get range(): number;
    set range(value: number);
    get at(): number;
    set at(value: number);
    start(): void;
    onUpdate(): void;
    onGraphic(view: View3D): void;
    debug(): void;
    debugDraw(show: boolean): void;
}
