import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { View3D } from "./View3D";
import { Object3D } from "./entities/Object3D";
/**
 * Scene3D类表示3D场景，是所有3D对象的容器。
 * 场景管理环境贴图、天空盒和与之关联的视图。
 * 它继承自Object3D，因此可以包含其他Object3D对象作为子对象。
 */
export declare class Scene3D extends Object3D {
    /**
     * 场景的环境贴图纹理
     * @private
     */
    private _envMap;
    /**
     * 天空盒对象
     * @private
     */
    private skyObject;
    /**
     * 标记环境贴图是否已更改
     */
    envMapChange: boolean;
    /**
     * 与场景关联的视图
     */
    view: View3D;
    /**
     * 创建一个新的3D场景
     * 初始化场景的变换、天空盒和环境贴图
     */
    constructor();
    /**
     * 获取场景的环境贴图纹理
     * @returns 当前环境贴图纹理
     */
    get envMap(): Texture;
    /**
     * 设置场景的环境贴图纹理
     * 当设置新的环境贴图时，会标记envMapChange为true
     * 同时更新天空盒的贴图
     * @param value 要设置的环境贴图纹理
     */
    set envMap(value: Texture);
    /**
     * 获取天空盒的曝光值
     * @returns 当前曝光值，如果天空盒不存在则返回0
     */
    get exposure(): number;
    /**
     * 设置天空盒的曝光值
     * 同时更新全局天空盒设置
     * @param value 要设置的曝光值
     */
    set exposure(value: number);
    /**
     * 获取天空盒的粗糙度值
     * @returns 当前粗糙度值，如果天空盒不存在则返回undefined
     */
    get roughness(): number;
    /**
     * 设置天空盒的粗糙度值
     * @param value 要设置的粗糙度值
     */
    set roughness(value: number);
}
