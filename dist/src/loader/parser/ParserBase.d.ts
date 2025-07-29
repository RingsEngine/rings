import { Texture } from "../../gfx/graphics/webGpu/core/texture/Texture";
import { LoaderFunctions } from "../LoaderFunctions";
import { ParserFormat } from "./ParserFormat";
export declare class ParserBase {
    static format: ParserFormat;
    baseUrl: string;
    initUrl: string;
    loaderFunctions?: LoaderFunctions;
    userData?: any;
    data: any;
    parseString(str: string): void;
    parseJson(obj: object): void;
    parseBuffer(buffer: ArrayBuffer): void;
    parseTexture(buffer: ArrayBuffer): Texture;
    parse(data: any): void;
    verification(ret: void): boolean;
    protected parserError(info: string, id: number): void;
}
