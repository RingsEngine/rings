import { Texture } from "../../../../../gfx/graphics/webGpu/core/texture/Texture";
import { Color } from "../../../../../math/Color";
import { Vector4 } from "../../../../../math/Vector4";
import { Shader } from "../../../../../gfx/graphics/webGpu/shader/Shader";
export declare class StandShader extends Shader {
    constructor();
    setDefault(): void;
    get baseMap(): Texture;
    set baseMap(value: Texture);
    get baseColor(): Color;
    set baseColor(value: Color);
    get normalMap(): Texture;
    set normalMap(value: Texture);
    get doubleSide(): boolean;
    set doubleSide(value: boolean);
    get alphaCutoff(): any;
    set alphaCutoff(value: any);
    get emissiveColor(): Color;
    set emissiveColor(value: Color);
    get emissiveIntensity(): number;
    set emissiveIntensity(value: number);
    /**
     * get transformUV1
     */
    get transformUV1(): Vector4;
    /**
     * set transformUV1
     */
    set transformUV1(value: Vector4);
    /**
     * get transformUV2
     */
    get uvTransform_2(): Vector4;
    /**
     * set transformUV2
     */
    set uvTransform_2(value: Vector4);
    get depthWriteEnabled(): boolean;
    set depthWriteEnabled(value: boolean);
    /**
     * get reflectivity
     */
    get materialF0(): Vector4;
    /**
     * set reflectivity
     */
    set materialF0(value: Vector4);
    /**
     * get specularColor
     */
    get specularColor(): Color;
    /**specularColor
     * set reflectivity
     */
    set specularColor(value: Color);
    /**
     * get roughness
     */
    get roughness(): number;
    /**
     * set roughness
     */
    set roughness(value: number);
    /**
     * get metallic
     */
    get metallic(): number;
    /**
     * set metallic
     */
    set metallic(value: number);
    /**
     * get Ambient Occlussion, dealing with the effect of ambient light on object occlusion
     */
    get ao(): number;
    /**
     * set Ambient Occlussion, dealing with the effect of ambient light on object occlusion
     */
    set ao(value: number);
    /**
     * get min metallic
     */
    get metallic_min(): number;
    /**
     * set min metallic
     */
    set metallic_min(value: number);
    /**
     * get max metallic
     */
    get metallic_max(): number;
    /**
     * set max metallic
     */
    set metallic_max(value: number);
    /**
     * get min roughness
     */
    get roughness_min(): number;
    /**
     * set min roughness
     */
    set roughness_min(value: number);
    /**
     * get max roughness
     */
    get roughness_max(): number;
    /**
     * set max roughness
     */
    set roughness_max(value: number);
    /**
     * Get the influence of Normal mapping on materials
     */
    get normalScale(): number;
    /**
     * Set the influence of Normal mapping on materials
     */
    set normalScale(value: number);
    /**
     * get Mask Map
     * R_chanel -> AoMap
     * G_chanel -> Roughness
     * B_chanel -> Metallic
     * A_chanel -> C
     */
    get maskMap(): Texture;
    /**
     * set Mask Map
     * R_chanel -> AoMap
     * G_chanel -> Roughness
     * B_chanel -> Metallic
     * A_chanel -> C
     */
    set maskMap(value: Texture);
    /**
     * set Ambient Occlussion Map, dealing with the effect of ambient light on object occlusion
     */
    set aoMap(value: Texture);
    /**
     * get Ambient Occlussion Map, dealing with the effect of ambient light on object occlusion
     */
    get aoMap(): Texture;
    /**
     * set clearCoatRoughnessMap
     */
    set clearCoatRoughnessMap(value: Texture);
    /**
     * get clearCoatRoughnessMap
     */
    get clearCoatRoughnessMap(): Texture;
    /**
     * get brdf query map
     */
    get brdfLUT(): Texture;
    /**
     * set brdf query map
     */
    set brdfLUT(value: Texture);
    /**
     * get emissive map
     */
    get emissiveMap(): Texture;
    /**
     * set emissive map
     */
    set emissiveMap(value: Texture);
    /**
     * set intensity of environment light or color of sampled by texture
     */
    set envIntensity(value: number);
    /**
     * get intensity of environment light or color of sampled by texture
     */
    get envIntensity(): number;
    /**
     * set factor of refractive
     */
    set ior(value: number);
    /**
     * get factor of refractive
     */
    get ior(): number;
    /**
     * valid USE_CLEARCOAT define in shader
     */
    useCleanCoat(): void;
    /**
     * Set the factor of the clearcoat
     */
    set clearcoatFactor(value: number);
    /**
     * get the factor of the clearcoat
     */
    get clearcoatFactor(): number;
    /**
     * set the factor of the clearcoat Roughness
     */
    set clearcoatRoughnessFactor(value: number);
    /**
     * get the factor of the clearcoat Roughness
     */
    get clearcoatRoughnessFactor(): number;
    /**
     * set the weight of the clearcoat
     */
    set clearcoatWeight(value: number);
    /**
     * get the weight of the clearcoat
     */
    get clearcoatWeight(): number;
    /**
     * get the color of the clearcoat
     */
    set clearcoatColor(value: Color);
    /**
     * set the color of the clearcoat
     */
    get clearcoatColor(): Color;
}
