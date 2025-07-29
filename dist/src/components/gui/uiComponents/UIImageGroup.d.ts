import { Object3D } from "../../../core/entities/Object3D";
import { Color } from "../../../math/Color";
import { GUIQuad } from "../core/GUIQuad";
import { GUISprite } from "../core/GUISprite";
import { ImageType } from "../GUIConfig";
import { UIRenderAble } from "./UIRenderAble";
import { Vector2 } from "../../../math/Vector2";
/**
 * images/sprites/videos
 * @group GPU GUI
 */
export declare class UIImageGroup extends UIRenderAble {
    private _count;
    constructor();
    init(param?: any): void;
    getQuad(index: number): GUIQuad;
    cloneTo(obj: Object3D): void;
    copyComponent(from: this): this;
    setSprite(index: number, value: GUISprite): void;
    getSprite(index: number): GUISprite;
    protected onUIComponentVisible(visible: boolean): void;
    protected onUITransformVisible(visible: boolean): void;
    private applyComponentVisible;
    getColor(index: number): Color;
    setColor(index: number, value: Color): void;
    getImageType(index: number): ImageType;
    setImageType(index: number, value: ImageType): void;
    setSize(index: number, width: number, height: number): void;
    setXY(index: number, x: number, y: number): void;
    getXY(index: number, ret?: Vector2): Vector2;
}
