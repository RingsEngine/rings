import { GUIPick } from "../components/gui/GUIPick";
import { GUICanvas } from "../components/gui/core/GUICanvas";
import { CEventListener } from "../event/CEventListener";
import { PickFire } from "../io/PickFire";
import { Vector4 } from "../math/Vector4";
import { Camera3D } from "./Camera3D";
import { Scene3D } from "./Scene3D";
/**
 * View3D类表示3D视图，负责管理场景、相机和视口。
 * 它是渲染管线的重要组成部分，处理场景渲染、拾取操作和UI画布。
 * 每个View3D实例代表一个独立的渲染视图，可以有自己的场景、相机和视口设置。
 */
export declare class View3D extends CEventListener {
    /**
     * 视图使用的相机
     * @private
     */
    private _camera;
    /**
     * 视图关联的场景
     * @private
     */
    private _scene;
    /**
     * 视口区域，定义了渲染区域在画布上的位置和大小
     * @private
     */
    private _viewPort;
    /**
     * 是否启用拾取功能
     * @private
     */
    private _enablePick;
    /**
     * 视图是否启用
     * @private
     */
    private _enable;
    /**
     * 拾取事件处理器
     */
    pickFire: PickFire;
    /**
     * GUI拾取处理器
     */
    guiPick: GUIPick;
    /**
     * 视图中的UI画布列表
     */
    readonly canvasList: GUICanvas[];
    /**
     * 创建一个新的3D视图
     * @param x 视口的X坐标，默认为0
     * @param y 视口的Y坐标，默认为0
     * @param width 视口的宽度，默认为0
     * @param height 视口的高度，默认为0
     */
    constructor(x?: number, y?: number, width?: number, height?: number);
    get enable(): boolean;
    set enable(value: boolean);
    get enablePick(): boolean;
    set enablePick(value: boolean);
    get scene(): Scene3D;
    set scene(value: Scene3D);
    get camera(): Camera3D;
    set camera(value: Camera3D);
    get viewPort(): Vector4;
    set viewPort(value: Vector4);
    /**
     * 启用指定索引的UI画布
     * 如果画布不存在，会创建一个新的画布并添加到场景中
     * 同时确保GUI拾取功能已初始化
     *
     * @param index 画布索引，默认为0
     * @returns 启用的GUI画布实例
     */
    enableUICanvas(index?: number): GUICanvas;
    /**
     * 禁用指定索引的UI画布
     * 将画布从场景中移除，但不会销毁画布对象
     *
     * @param index 要禁用的画布索引，默认为0
     */
    disableUICanvas(index?: number): void;
}
