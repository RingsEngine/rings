import { Color } from "../math/Color";
/**
 * 色温颜色转换器
 * @group Util
 */
export declare class KelvinUtil {
    /**
     * 将色温值转换为颜色对象
     * @param color_temperature_Kelvin 色温值(单位：开尔文)
     * @returns 返回对应的Color对象
     */
    static color_temperature_to_rgb(color_temperature_Kelvin: number): Color;
    /**
     * 获取红色分量[0-255]
     * @param temperature 温度值(百分之一开尔文)
     * @returns 红色分量值
     */
    static get_red(temperature: number): number;
    /**
     * 获取绿色分量[0-255]
     * @param temperature 温度值(百分之一开尔文)
     * @returns 绿色分量值
     */
    static get_green(temperature: number): number;
    /**
     * 获取蓝色分量[0-255]
     * @param temperature 温度值(百分之一开尔文)
     * @returns 蓝色分量值
     */
    static get_blue(temperature: number): number;
    /**
     * @internal
     * 限制颜色分量在指定范围内
     * @param color_component 颜色分量值
     * @param minimum 最小值(默认0)
     * @param maximum 最大值(默认255)
     * @returns 限制后的颜色分量值
     */
    static bound(color_component: number, minimum?: number, maximum?: number): number;
}
