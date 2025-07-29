import { View3D } from "../../../core/View3D";
import { Object3D } from "../../../core/entities/Object3D";
import { Color } from "../../../math/Color";
import { Vector2 } from "../../../math/Vector2";
import { UIRenderAble } from "./UIRenderAble";
/**
 * 阴影
 * @group GPU GUI
 */
export declare class UIShadow extends UIRenderAble {
    private _shadowQuality;
    private _shadowOffset;
    private _shadowRadius;
    private _shadowColor;
    private _subShadowColor;
    needUpdateShadow: boolean;
    init(param?: any): void;
    cloneTo(obj: Object3D): void;
    copyComponent(from: this): this;
    get shadowColor(): Color;
    set shadowColor(value: Color);
    set shadowQuality(value: number);
    get shadowQuality(): number;
    set shadowOffset(value: Vector2);
    get shadowOffset(): Vector2;
    set shadowRadius(value: number);
    get shadowRadius(): number;
    onUpdate(view?: View3D): void;
    private applyShadow;
    private createQuadShadow;
}
