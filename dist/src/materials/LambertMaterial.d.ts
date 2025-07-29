import { Material } from "..";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { Color } from "../math/Color";
/**
 * Lambert Mateiral
 * 一种无光泽的表面材质，没有镜面高光。
 * @group Material
 */
export declare class LambertMaterial extends Material {
    /**
     * @constructor
     */
    constructor();
    /**
     * set base color map texture
     */
    set baseMap(tex: Texture);
    /**
     * get base color map texture
     */
    get baseMap(): Texture;
    /**
     * set base color (tint color)
     */
    set baseColor(color: Color);
    /**
     * get base color (tint color)
     */
    get baseColor(): Color;
    /**
     * set environment texture, usually referring to cubemap
     */
    set envMap(texture: Texture);
    /**
     * @internal
     * set shadow map
     */
    set shadowMap(texture: Texture);
}
