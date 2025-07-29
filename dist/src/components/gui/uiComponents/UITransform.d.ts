import { Object3D } from "../../../core/entities/Object3D";
import { Matrix3 } from "../../../math/Matrix3";
import { ComponentBase } from "../../ComponentBase";
import { IUIInteractive } from "./IUIInteractive";
/**
 * 监听 transform
 * @group GPU GUI
 */
export declare class UITransform extends ComponentBase {
    useParentPivot: boolean;
    parent: UITransform;
    pivotX: number;
    pivotY: number;
    private _width;
    private _height;
    private _localVisible;
    private _globalVisible;
    protected _uiInteractiveList: IUIInteractive[];
    get uiInteractiveList(): IUIInteractive[];
    constructor();
    init(param?: any): void;
    private onTransformChange;
    addUIInteractive(item: IUIInteractive): this;
    removeUIInteractive(item: IUIInteractive): IUIInteractive;
    get globalVisible(): boolean;
    set visible(value: boolean);
    get visible(): boolean;
    protected onUITransformVisible(global: boolean): void;
    onParentChange(lastParent?: Object3D, currentParent?: Object3D): void;
    get width(): number;
    get height(): number;
    resize(width: number, height: number): boolean;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    setXY(x: number, y: number): void;
    get z(): number;
    set z(value: number);
    get scaleX(): number;
    set scaleX(value: number);
    get scaleY(): number;
    set scaleY(value: number);
    get scaleZ(): number;
    set scaleZ(value: number);
    private _localMatrix;
    private _worldMatrix;
    private _onChange;
    needUpdateQuads: boolean;
    get onChange(): boolean;
    private _tempTransforms;
    set onChange(value: boolean);
    onEnable(): void;
    onDisable(): void;
    setNeedUpdateUIPanel(): void;
    cloneTo(obj: Object3D): void;
    matrix(): Matrix3;
    getWorldMatrix(): Matrix3;
    beforeDestroy(force?: boolean): void;
}
