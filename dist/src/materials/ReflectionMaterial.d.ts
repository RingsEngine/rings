import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { Color } from "../math/Color";
import { Material } from "./Material";
export declare class ReflectionMaterial extends Material {
    constructor();
    set baseMap(texture: Texture);
    get baseMap(): Texture;
    set baseColor(color: Color);
    set reflectionIndex(i: number);
    get baseColor(): Color;
    set envMap(texture: Texture);
    set shadowMap(texture: Texture);
}
