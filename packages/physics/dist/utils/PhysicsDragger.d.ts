export type PhysicsDraggerOptions = {
    /**
     * 为 true 时：抓取点沿射线约束在当前被拖刚体碰撞表面上（多连杆时用 AllHits 取该刚体最近命中）。
     */
    lockDragToSurface?: boolean;
};
/**
 * PhysicsDragger 类用于通过鼠标操作拖拽3D物体。
 */
export declare class PhysicsDragger {
    private _view;
    private readonly _lockDragToSurface;
    private _interactionDepth;
    private _offset;
    private _grabLocal;
    private _allHitsResult;
    private _rigidBody;
    private _rayStart;
    private _rayEnd;
    private _raycastResult;
    private _isDragging;
    private _hitPoint;
    private _enable;
    private static readonly RAY_LEN;
    get enable(): boolean;
    set enable(value: boolean);
    filterStatic: boolean;
    set collisionFilterGroup(value: number);
    set collisionFilterMask(value: number);
    constructor(options?: PhysicsDraggerOptions);
    private initRaycast;
    private ensureAllHits;
    private pickHitPointOnRigidBody;
    private tryRegisterEvents;
    private registerEvents;
    private unregisterEvents;
    private onMouseDown;
    private beginDragFromRay;
    private onMouseMove;
    private onMouseUp;
    private onMouseWheel;
    private resetRayCallback;
    private castRay;
    private updateRigidBody;
    private resetState;
}
