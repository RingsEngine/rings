import { GLTF_Info } from "./GLTFInfo";
import { GLTFSubParser } from "./GLTFSubParser";
export declare class GLTFSubParserMaterial {
    protected gltf: GLTF_Info;
    protected subParser: GLTFSubParser;
    constructor(subParser: GLTFSubParser);
    parse(materialId: any): Promise<any>;
    private parseTexture;
    private errorMiss;
}
