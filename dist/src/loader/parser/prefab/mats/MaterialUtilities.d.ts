import { Material } from "../../../../materials/Material";
import { KV } from "../prefabData/KVData";
import { PrefabTextureData } from "../prefabData/PrefabTextureData";
export declare class MaterialUtilities {
    static GetMaterial(shaderName: string): Material;
    static applyMaterialTexture(mat: Material, textures: PrefabTextureData[]): void;
    static applyMaterialProperties(mat: Material, properties: KV[]): void;
}
