import { ComponentBase } from "../../ComponentBase";
import { UITransform } from "./UITransform";
export declare class UIComponentBase extends ComponentBase {
    protected _uiTransform: UITransform;
    protected _visible: boolean;
    destroy(): void;
    get uiTransform(): UITransform;
    get visible(): boolean;
    set visible(value: boolean);
    init(param?: any): void;
    protected onUITransformVisible?(visible: boolean): void;
    protected onUIComponentVisible?(visible: boolean): void;
    protected onTransformResize?(): void;
    copyComponent(from: this): this;
}
