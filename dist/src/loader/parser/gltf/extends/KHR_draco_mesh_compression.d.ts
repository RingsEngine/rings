import { GLTF_Primitives } from "../GLTFInfo";
import { GLTFSubParser } from "../GLTFSubParser";
export declare class KHR_draco_mesh_compression {
    private static _workerCode;
    private static _workers;
    static apply(parser: GLTFSubParser, primitive: GLTF_Primitives): Promise<any>;
    static unload(gltf: any): void;
    protected static initDecoder(): Promise<string>;
}
