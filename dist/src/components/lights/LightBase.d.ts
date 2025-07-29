import { Color } from "../../math/Color";
import { Vector3 } from "../../math/Vector3";
import { ComponentBase } from "../ComponentBase";
import { LightData } from "./LightData";
import { IESProfiles } from "./IESProfiles";
import { ILight } from "./ILight";
export declare class LightBase extends ComponentBase implements ILight {
    /**
     * light name
     */
    name: string;
    /**
     * light size
     */
    size: number;
    /**
     * light source data
     */
    lightData: LightData;
    /**
     * fix light direction
     */
    dirFix: number;
    /**
     * Callback function when binding changes
     */
    bindOnChange: () => void;
    needUpdateShadow: boolean;
    /**
     * Whether to enable real-time rendering of shadows
     */
    realTimeShadow: boolean;
    protected _castGI: boolean;
    protected _castShadow: boolean;
    private _iesProfiles;
    constructor();
    init(): void;
    protected onChange(): void;
    start(): void;
    protected onPositionChange(): void;
    protected onRotChange(): void;
    protected onScaleChange(): void;
    onEnable(): void;
    onDisable(): void;
    set iesProfiles(iesProfiles: IESProfiles);
    get iesProfile(): IESProfiles;
    /**
     * Get the red component of the lighting color
     */
    get r(): number;
    /**
     * Set the red component of the lighting color
     */
    set r(value: number);
    /**
     * Get the green component of the lighting color
     */
    get g(): number;
    /**
     * Set the green component of the lighting color
     */
    set g(value: number);
    /**
     * Get the blue component of the lighting color
     */
    get b(): number;
    /**
     * Set the blue component of the lighting color
     */
    set b(value: number);
    /**
     * Get light source color
     * @return Color
     */
    get lightColor(): Color;
    /**
     * Set light source color
     * @param Color
     */
    set lightColor(value: Color);
    /**
     * Get light source color
     * @return Color
     */
    get color(): Color;
    /**
     * Set light source color
     * @param Color
     */
    set color(value: Color);
    /**
     * Get Illumination intensity of light source
     * @return number
     */
    get intensity(): number;
    /**
     * Set Illumination intensity of light source
     * @param value
     */
    set intensity(value: number);
    /**
     * Cast Light Shadow
     * @param value
     *  */
    set castShadow(value: boolean);
    get castShadow(): boolean;
    /**
     * get shadow index at shadow map list
     */
    get shadowIndex(): number;
    /**
     * get gi is enable
     * @return boolean
     *  */
    get castGI(): boolean;
    /**
     * set gi is enable
     * @param value
     *  */
    set castGI(value: boolean);
    /**
     * light source direction
     * @return Vector3
     *  */
    get direction(): Vector3;
    destroy(force?: boolean): void;
}
