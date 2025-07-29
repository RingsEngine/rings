import { Object3D } from "../../core/entities/Object3D";
import { ParserBase } from "./ParserBase";
import { ParserFormat } from "./ParserFormat";
export declare class B3DMParser extends ParserBase {
    static format: ParserFormat;
    parseBuffer(buffer: ArrayBuffer): Promise<void>;
    verification(): boolean;
}
export declare class GLTFBinaryExtension {
    name: string;
    content: string;
    body: ArrayBuffer;
    header: {
        magic: string;
        length: number;
        version: number;
    };
    constructor(data: ArrayBuffer);
}
export declare class B3DMParseUtil {
    private _binary;
    parseBinary(bytes: ArrayBuffer): Promise<Object3D>;
    private parseGLB;
}
