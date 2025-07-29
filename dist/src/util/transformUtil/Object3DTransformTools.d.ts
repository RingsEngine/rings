import { TransformControllerBaseComponent } from "./TransformControllerBaseComponent";
import { TransformMode } from "./TransformMode";
import { TransformSpaceMode } from "./TransformSpaceMode";
import { Object3D } from "../../core/entities/Object3D";
import { Scene3D } from "../../core/Scene3D";
import { KeyEvent } from "../../event/eventConst/KeyEvent";
import { PointerEvent3D } from "../../event/eventConst/PointerEvent3D";
/**
 * Object3D 转换控制器
 * @group Controller
 */
export declare class Object3DTransformTools extends Object3D {
    private static _instance;
    static get instance(): Object3DTransformTools;
    protected mTarget: Object3D;
    protected mTransformMode: TransformMode;
    protected mTransformSpaceType: TransformSpaceMode;
    protected mControllers: TransformControllerBaseComponent[];
    mXObj: Object3D;
    mYObj: Object3D;
    mZObj: Object3D;
    constructor();
    get transformMode(): TransformMode;
    get transformSpaceMode(): TransformSpaceMode;
    active(scene: Scene3D): void;
    unActive(scene: Scene3D): void;
    get target(): Object3D;
    selectObject(obj: Object3D, transformMode?: TransformMode, spaceMode?: TransformSpaceMode): void;
    selectTransformMode(transformMode: TransformMode): void;
    selectTransformSpaceMode(spaceMode: TransformSpaceMode): void;
    protected activate(): void;
    protected unactivate(): void;
    protected onKeyDown(e: KeyEvent): void;
    protected onMouseDown(e: PointerEvent3D): void;
    protected onMouseMove(e: PointerEvent3D): void;
    protected onMouseUp(e: PointerEvent3D): void;
}
