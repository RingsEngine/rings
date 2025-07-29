import { CanvasConfig } from "./gfx/graphics/webGpu/CanvasConfig";
import { EngineSetting } from "./setting/EngineSetting";
import { InputSystem } from "./io/InputSystem";
import { View3D } from "./core/View3D";
import { ForwardRenderJob } from "./gfx/renderJob/jobs/ForwardRenderJob";
import { RendererJob } from "./gfx/renderJob/jobs/RendererJob";
import { Res } from "./assets/Res";
/**
 * Engine3D是Rings WebGPU引擎的主类，负责初始化WebGPU上下文、管理渲染循环和处理输入。
 * 它提供了一系列静态方法和属性，用于控制引擎的行为和访问引擎的各个组件。
 */
export declare class Engine3D {
    /**
     * 资源管理器实例，用于加载和管理引擎所需的各种资源
     */
    static res: Res;
    /**
     * 输入系统实例，用于处理用户输入（如键盘、鼠标、触摸等）
     */
    static inputSystem: InputSystem;
    /**
     * 当前活跃的视图列表
     */
    static views: View3D[];
    /**
     * 帧率计算值，用于限制渲染帧率
     * @private
     */
    private static _frameRateValue;
    /**
     * 目标帧率，默认为360（不限制）
     * @private
     */
    private static _frameRate;
    /**
     * 上一帧的时间戳
     * @private
     */
    private static _time;
    /**
     * 渲染前执行的回调函数
     * @private
     */
    private static _beforeRender;
    /**
     * 渲染循环中执行的回调函数
     * @private
     */
    private static _renderLoop;
    /**
     * 渲染后执行的回调函数
     * @private
     */
    private static _lateRender;
    /**
     * requestAnimationFrame的ID，用于暂停和恢复渲染循环
     * @private
     */
    private static _requestAnimationFrameID;
    /**
     * 获取当前设置的帧率
     * @returns 当前帧率值
     */
    static get frameRate(): number;
    /**
     * 设置引擎的目标帧率
     * @param value 目标帧率，设置为360或更高表示不限制帧率
     */
    static set frameRate(value: number);
    /**
     * 获取当前渲染上下文的尺寸
     * @returns 包含宽度和高度的数组 [width, height]
     */
    static get size(): number[];
    /**
     * 获取当前渲染上下文的宽高比
     * @returns 宽高比值
     */
    static get aspect(): number;
    /**
     * 获取当前渲染上下文的宽度
     * @returns 宽度值（像素）
     */
    static get width(): number;
    /**
     * 获取当前渲染上下文的高度
     * @returns 高度值（像素）
     */
    static get height(): number;
    static setting: EngineSetting;
    static renderJobs: Map<View3D, RendererJob>;
    static init(descriptor?: {
        canvasConfig?: CanvasConfig;
        beforeRender?: Function;
        renderLoop?: Function;
        lateRender?: Function;
        engineSetting?: EngineSetting;
    }): Promise<void>;
    private static startRenderJob;
    static startRenderView(view: View3D): ForwardRenderJob;
    static startRenderViews(views: View3D[]): void;
    static getRenderJob(view: View3D): RendererJob;
    static pause(): void;
    static resume(): void;
    private static render;
    private static updateFrame;
}
