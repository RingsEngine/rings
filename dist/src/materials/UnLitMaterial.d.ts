import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { Color } from "../math/Color";
import { Material } from "./Material";
/**
 * Unlit Mateiral
 * 不接受光照的表面材质
 * @group Material
 */
export declare class UnLitMaterial extends Material {
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
