import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
export declare class GLTFParser extends ParserBase {
    static format: ParserFormat;
    private _gltf;
    parseJson(obj: object): Promise<import("../../..").Object3D>;
    verification(): boolean;
    private static _counter;
    static getMeshNameCounter(): () => string;
    static getModelNameCounter(): () => string;
    static getTexCoordDefine(texNum: any): string;
    static getVertexColorDefine(num: any): string;
    static getBaseColorTextureDefine(): string;
    static getMetalRoughnessDefine(): string;
    static getNormalMapDefine(): string;
    static getEmissiveMapDefine(): string;
    static getOcclusionMapDefine(): string;
    static getMorphTargetsDefine(targetNum: any): string;
    static getMorphtargetPositionDefine(): string;
    static getMorphtargetNormalDefine(): string;
    static getMorphtargetTangentDefine(): string;
    static getJointsNumDefine(num: any): string;
    static getJointVec8Define(): string;
    static getHasNormalDefine(): string;
    static getHasTangentDefine(): string;
    static getHasNormalMapDefine(): string;
    static getAlphaMaskDefine(): string;
    static getAlphaBlendDefine(): string;
    static readonly defaultMaterial: {
        name: string;
        alphaCutoff: number;
        alphaMode: string;
        pbrMetallicRoughness: {
            name: string;
            defines: any[];
            doubleSided: boolean;
            baseColorFactor: number[];
            metallicFactor: number;
            roughnessFactor: number;
            emissiveFactor: number[];
        };
    };
    private load_gltf_bin;
    private load_gltf_textures;
}
