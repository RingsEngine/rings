import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
export declare class GLBHeader {
    magic: number;
    version: number;
    length: number;
}
export declare class GLBChunk {
    chunkLength: number;
    chunkType: number;
    chunkData: Uint8Array;
}
export declare class GLBParser extends ParserBase {
    static format: ParserFormat;
    private _gltf;
    parseBuffer(buffer: ArrayBuffer): Promise<false | import("../../..").Object3D>;
    parseJsonAndBuffer(obj: object, bin: ArrayBuffer): Promise<import("../../..").Object3D>;
    verification(): boolean;
    private parseHeader;
    private parseChunk;
}
