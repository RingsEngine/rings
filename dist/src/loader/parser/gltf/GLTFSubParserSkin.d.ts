import { GLTF_Info } from "./GLTFInfo";
import { GLTFSubParser } from "./GLTFSubParser";
export declare class GLTFSubParserSkin {
    protected gltf: GLTF_Info;
    protected subParser: GLTFSubParser;
    constructor(subParser: GLTFSubParser);
    parse(skinId: any): any;
    private parseAccessor;
    private errorMiss;
}
