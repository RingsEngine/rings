import { View3D } from "../../core/View3D";
/**
 * 交互拾取功能
 * @group GPU GUI
 */
export declare class GUIPick {
    private _ray;
    private _mouseCode;
    private _clickEvent;
    private _outEvent;
    private _overEvent;
    private _upEvent;
    private _downEvent;
    private _view;
    /**
     * Initialize the pickup and call it internally during engine initialization
     */
    init(view: View3D): void;
    private _lastDownTarget;
    private _lastOverTarget;
    private onTouchClick;
    private onTouchMove;
    private _lastDownPosition;
    private _calcDistanceVec2;
    private _lastDownTime;
    private readonly _clickTimeSpan;
    private readonly _clickDistanceSpan;
    private onTouchDown;
    private onTouchUp;
    private _colliderOut;
    private _transformList;
    private _sortWorldPanelList;
    private _iteractive2PanelDict;
    private collectEntities;
    private pick;
}
