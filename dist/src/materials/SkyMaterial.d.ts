import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { Material } from "./Material";
export declare class SkyMaterial extends Material {
    constructor();
    set baseMap(texture: Texture);
    get baseMap(): Texture;
    set envMap(texture: Texture);
    set shadowMap(texture: Texture);
    get exposure(): number;
    set exposure(value: number);
    get roughness(): number;
    set roughness(value: number);
}
