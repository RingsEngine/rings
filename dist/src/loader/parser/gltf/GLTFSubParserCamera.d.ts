import { GLTF_Info } from "./GLTFInfo";
export declare class GLTFSubParserCamera {
    protected gltf: GLTF_Info;
    constructor(gltf: GLTF_Info);
    parse(cameraId: any): any;
    protected errorMiss(e: any, info?: any): void;
}
