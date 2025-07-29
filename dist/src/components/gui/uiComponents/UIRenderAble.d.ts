import { UIComponentBase } from "./UIComponentBase";
import { GUIQuad } from "../core/GUIQuad";
/**
 * The basic class of render able GUI component
 * @group GPU GUI
 */
export declare class UIRenderAble extends UIComponentBase {
    protected _mainQuads: GUIQuad[];
    protected _shadowRender: UIRenderAble;
    protected _shadowSource: UIRenderAble;
    isUIShadow?: boolean;
    isShadowless?: boolean;
    needUpdateShadow: boolean;
    init(param?: any): void;
    destroy(): void;
    start(): void;
    protected setShadowDirty(): void;
    get mainQuads(): GUIQuad[];
    setShadowRenderer(value: UIRenderAble): void;
    setShadowSource(value: UIRenderAble): void;
    getShadowRender(): UIRenderAble;
    protected autoBindShadow(source: UIRenderAble, shadow: UIRenderAble): boolean;
    protected recycleQuad(quad?: GUIQuad): GUIQuad;
    protected attachQuad(quad: GUIQuad): this;
    protected detachQuads(): this;
    copyComponent(from: this): this;
}
