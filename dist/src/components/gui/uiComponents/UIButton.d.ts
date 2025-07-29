import { Object3D } from "../../../core/entities/Object3D";
import { Color } from "../../../math/Color";
import { ImageType } from "../GUIConfig";
import { GUISprite } from "../core/GUISprite";
import { UIInteractiveStyle } from "./IUIInteractive";
import { UIImage } from "./UIImage";
import { UIInteractive } from "./UIInteractive";
export declare enum UIButtonTransition {
    NONE = 0,
    COLOR = 1,
    SPRITE = 2
}
/**
 * The basic components used in the GUI to respond to user interaction behavior and have an image component
 * @group GPU GUI
 */
export declare class UIButton extends UIInteractive {
    protected _spriteMap: Map<UIInteractiveStyle, GUISprite>;
    protected _colorMap: Map<UIInteractiveStyle, Color>;
    protected _image: UIImage;
    private _isCreateImage;
    private _transition;
    init(param?: any): void;
    onEnable(): void;
    onDisable(): void;
    set transition(value: UIButtonTransition);
    get transition(): UIButtonTransition;
    get imageType(): ImageType;
    set imageType(value: ImageType);
    setStyleColor(style: UIInteractiveStyle, color: Color): this;
    getStyleColor(style: UIInteractiveStyle): Color;
    set mouseStyle(value: UIInteractiveStyle);
    get normalSprite(): GUISprite;
    set normalSprite(value: GUISprite);
    get overSprite(): GUISprite;
    set overSprite(value: GUISprite);
    set downSprite(value: GUISprite);
    get downSprite(): GUISprite;
    set disableSprite(value: GUISprite);
    get disableSprite(): GUISprite;
    protected validateStyle(style: UIInteractiveStyle, force?: boolean): void;
    cloneTo(obj: Object3D): void;
    copyComponent(from: this): this;
    destroy(): void;
}
