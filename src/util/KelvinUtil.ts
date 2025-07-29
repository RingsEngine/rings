import { Color } from "../math/Color";

/**
 * 色温颜色转换器
 * @group Util
 */
export class KelvinUtil {
  /**
   * 将色温值转换为颜色对象
   * @param color_temperature_Kelvin 色温值(单位：开尔文)
   * @returns 返回对应的Color对象
   */
  static color_temperature_to_rgb(color_temperature_Kelvin: number) {
    if (color_temperature_Kelvin < 1000) {
      color_temperature_Kelvin = 1000;
    } else if (color_temperature_Kelvin > 40000) {
      color_temperature_Kelvin = 40000;
    }
    let tmp_internal = color_temperature_Kelvin / 100.0;
    let red = this.get_red(tmp_internal);
    let green = this.get_green(tmp_internal);
    let blue = this.get_blue(tmp_internal);
    return new Color(red / 255, green / 255, blue / 255, 1.0);
  }

  /**
   * 获取红色分量[0-255]
   * @param temperature 温度值(百分之一开尔文)
   * @returns 红色分量值
   */
  static get_red(temperature: number): number {
    if (temperature <= 66) return 255;
    let tmp_red = 329.698727446 * Math.pow(temperature - 60, -0.1332047592);
    return this.bound(tmp_red);
  }
  /**
   * 获取绿色分量[0-255]
   * @param temperature 温度值(百分之一开尔文)
   * @returns 绿色分量值
   */
  static get_green(temperature: number): number {
    let green = 0;
    if (temperature <= 66) {
      green = 99.4708025861 * Math.log(temperature) - 161.1195681661;
    } else {
      green = 288.1221695283 * Math.pow(temperature - 60, -0.0755148492);
    }
    return this.bound(green);
  }
  /**
   * 获取蓝色分量[0-255]
   * @param temperature 温度值(百分之一开尔文)
   * @returns 蓝色分量值
   */
  static get_blue(temperature: number): number {
    let blue = 0;
    if (temperature >= 66) {
      return 255;
    }
    if (temperature <= 19) {
      return 0;
    }
    blue = 138.5177312231 * Math.log(temperature - 10) - 305.0447927307;
    return this.bound(blue);
  }

  /**
   * @internal
   * 限制颜色分量在指定范围内
   * @param color_component 颜色分量值
   * @param minimum 最小值(默认0)
   * @param maximum 最大值(默认255)
   * @returns 限制后的颜色分量值
   */
  static bound(
    color_component: number,
    minimum: number = 0,
    maximum: number = 255
  ): number {
    let color_component_out = Math.max(color_component, minimum);
    return Math.min(color_component_out, maximum);
  }
}
