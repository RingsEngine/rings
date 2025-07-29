import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { Color } from "../math/Color";
import { Material } from "./Material";
export declare class LitMaterial extends Material {
    constructor();
    clone(): Material;
    set baseMap(texture: Texture);
    get baseMap(): Texture;
    set maskMap(texture: Texture);
    get maskMap(): Texture;
    set normalMap(texture: Texture);
    get normalMap(): Texture;
    set emissiveMap(texture: Texture);
    get emissiveMap(): Texture;
    set aoMap(texture: Texture);
    get aoMap(): Texture;
    set clearCoatRoughnessMap(texture: Texture);
    get clearCoatRoughnessMap(): Texture;
    set clearcoatColor(value: Color);
    get clearcoatColor(): Color;
    set clearcoatWeight(value: number);
    get clearcoatWeight(): number;
    set clearcoatFactor(value: number);
    get clearcoatFactor(): number;
    set clearcoatRoughnessFactor(value: number);
    get clearcoatRoughnessFactor(): number;
    set ior(value: number);
    get ior(): number;
    set alphaCutoff(value: number);
    get alphaCutoff(): number;
    /**
     * set base color (tint color)
     */
    set baseColor(color: Color);
    /**
     * get base color (tint color)
     */
    get baseColor(): Color;
    get roughness(): number;
    set roughness(value: number);
    get metallic(): number;
    set metallic(value: number);
    get emissiveColor(): Color;
    set emissiveColor(value: Color);
    get emissiveIntensity(): number;
    set emissiveIntensity(value: number);
    get ao(): number;
    set ao(value: number);
}
