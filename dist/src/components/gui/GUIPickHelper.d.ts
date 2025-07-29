import { Matrix4 } from "../../math/Matrix4";
import { Ray } from "../../math/Ray";
import { Vector2 } from "../../math/Vector2";
import { UITransform } from "./uiComponents/UITransform";
import { GUISpace } from "./GUIConfig";
import { GUIHitInfo } from "./uiComponents/IUIInteractive";
/**
 * @internal
 * @group GPU GUI
 */
export declare class GUIPickHelper {
    private static _pt0;
    private static _pt1;
    private static _pt2;
    private static _pt3;
    private static _hitPoint;
    private static _worldMatrix;
    private static _ray;
    private static _triangle;
    private static _isInit;
    private static init;
    static rayPick(ray: Ray, screenPos: Vector2, screenSize: Vector2, space: GUISpace, panelRatio: number, uiTransform: UITransform, worldMatrix: Matrix4): GUIHitInfo;
    private static calculateHotArea_View;
    private static calculateHotArea_World;
}
