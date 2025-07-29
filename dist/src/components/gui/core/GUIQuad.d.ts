import { UITransform } from "../uiComponents/UITransform";
import { GUIGeometry } from "./GUIGeometry";
import { GUISprite } from "./GUISprite";
import { ImageType } from "../GUIConfig";
import { Color } from "../../../math/Color";
import { PoolNode } from "../../../core/pool/ObjectPool";
import { GUIQuadAttrEnum } from "./GUIDefine";
/**
 * 图形界面最小单位
 * @group GPU GUI
 */
export declare class GUIQuad {
    x: number;
    y: number;
    z: number;
    width: number;
    height: number;
    private _globalX;
    private _globalY;
    private _globalWidth;
    private _globalHeight;
    private _visible;
    private _offsetX;
    private _offsetY;
    protected _sprite: GUISprite;
    private _color;
    private _imageType;
    dirtyAttributes: GUIQuadAttrEnum;
    cacheTextureId: number;
    private static textPool;
    static get quadPool(): PoolNode<GUIQuad>;
    static recycleQuad(quad: GUIQuad): void;
    static spawnQuad(): GUIQuad;
    get imageType(): ImageType;
    set imageType(value: ImageType);
    get color(): Color;
    set color(value: Color);
    get visible(): boolean;
    set visible(value: boolean);
    get sprite(): GUISprite;
    set sprite(value: GUISprite);
    get left(): number;
    get right(): number;
    get top(): number;
    get bottom(): number;
    setSize(width: number, height: number): void;
    setXY(x: number, y: number): void;
    setAttrChange(attr: GUIQuadAttrEnum): void;
    applyTransform(transform: UITransform): this;
    private getQuadMatrix;
    writeToGeometry(guiGeometry: GUIGeometry, transform: UITransform): this;
}
