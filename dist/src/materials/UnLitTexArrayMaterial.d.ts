import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { Color } from "../math/Color";
import { Material } from "./Material";
export declare class UnLitTexArrayMaterial extends Material {
    /**
     * @constructor
     */
    constructor();
    set baseMap(texture: Texture);
    get baseMap(): Texture;
    /**
     * set base color (tint color)
     */
    set baseColor(color: Color);
    /**
     * get base color (tint color)
     */
    get baseColor(): Color;
    set shadowMap(texture: Texture);
}
