import { View3D } from "..";
import { Ray } from "../math/Ray";
import { ComponentBase } from "./ComponentBase";
import { ColliderShape, HitInfo } from "./shape/ColliderShape";
export declare class ColliderComponent extends ComponentBase {
    private _shape;
    constructor();
    start(): void;
    onEnable(view?: View3D): void;
    onDisable(view?: View3D): void;
    get shape(): ColliderShape;
    set shape(value: ColliderShape);
    rayPick(ray: Ray): HitInfo;
    beforeDestroy(force?: boolean): void;
}
