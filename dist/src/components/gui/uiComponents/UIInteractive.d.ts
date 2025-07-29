import { UIComponentBase } from "./UIComponentBase";
import { IUIInteractive, UIInteractiveStyle, GUIHitInfo } from "./IUIInteractive";
import { Vector2 } from "../../../math/Vector2";
import { Ray } from "../../../math/Ray";
import { Object3D } from "../../../core/entities/Object3D";
import { UIPanel } from "./UIPanel";
/**
 * 基本交互能力
 * @group GPU GUI
 */
export declare class UIInteractive extends UIComponentBase implements IUIInteractive {
    protected _style: UIInteractiveStyle;
    protected _interactive: boolean;
    set interactive(value: boolean);
    get interactive(): boolean;
    /**设置鼠标悬停时的样式 */
    set mouseStyle(value: UIInteractiveStyle);
    /**判断组件是否可见且可交互 */
    get interactiveVisible(): boolean;
    init(param?: any): void;
    destroy(): void;
    rayPick(ray: Ray, panel: UIPanel, screenPos: Vector2, screenSize: Vector2): GUIHitInfo;
    cloneTo(obj: Object3D): void;
    copyComponent(from: this): this;
}
