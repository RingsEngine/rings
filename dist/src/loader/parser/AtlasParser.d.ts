import { ParserBase } from "../../loader/parser/ParserBase";
import { ParserFormat } from "./ParserFormat";
export declare class AtlasParser extends ParserBase {
    static format: ParserFormat;
    private _json;
    private _texture;
    parseString(data: string): Promise<void>;
    verification(): boolean;
    private parseAtlas;
}
