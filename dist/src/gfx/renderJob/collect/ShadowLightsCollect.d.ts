import { ILight } from "../../../components/lights/ILight";
import { LightType } from "../../../components/lights/LightData";
import { Scene3D } from "../../../core/Scene3D";
import { View3D } from "../../../core/View3D";
export declare class ShadowLightsCollect {
    static maxNumDirectionShadow: number;
    static maxNumPointShadow: number;
    static directionLightList: Map<Scene3D, ILight[]>;
    static pointLightList: Map<Scene3D, ILight[]>;
    static shadowLights: Map<Scene3D, Float32Array>;
    static init(): void;
    static createBuffer(view: View3D): void;
    static getShadowLightList(light: ILight): ILight[];
    static getShadowLightWhichScene(scene: Scene3D, type: LightType): ILight[];
    static getDirectShadowLightWhichScene(scene: Scene3D): ILight[];
    static getPointShadowLightWhichScene(scene: Scene3D): ILight[];
    static addShadowLight(light: ILight): ILight[];
    static removeShadowLight(light: ILight): ILight[];
    static update(view: View3D): void;
}
