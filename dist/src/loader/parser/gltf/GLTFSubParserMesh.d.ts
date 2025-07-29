import { GLTF_Info } from "./GLTFInfo";
import { GLTFSubParser } from "./GLTFSubParser";
export declare class GLTFSubParserMesh {
    protected gltf: GLTF_Info;
    protected subParser: GLTFSubParser;
    constructor(subParser: GLTFSubParser);
    parse(meshId: any): Promise<any>;
    private parseAccessor;
    private parseMaterial;
    private errorMiss;
}
