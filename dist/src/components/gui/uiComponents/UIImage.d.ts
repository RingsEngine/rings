import { Object3D } from "../../../core/entities/Object3D";
import { Color } from "../../../math/Color";
import { GUISprite } from "../core/GUISprite";
import { ImageType } from "../GUIConfig";
import { UIRenderAble } from "./UIRenderAble";
export declare class UIImage extends UIRenderAble {
    init(param?: any): void;
    cloneTo(obj: Object3D): void;
    copyComponent(from: this): this;
    set sprite(value: GUISprite);
    protected onTransformResize(): void;
    private applyTransformSize;
    get sprite(): GUISprite;
    protected onUIComponentVisible(visible: boolean): void;
    protected onUITransformVisible(visible: boolean): void;
    private applyComponentVisible;
    get color(): Color;
    set color(value: Color);
    get imageType(): ImageType;
    set imageType(value: ImageType);
}
