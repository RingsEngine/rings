import { BytesArray } from "../../../util/BytesArray";
import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
import { PrefabParser } from "./PrefabParser";
export declare class PrefabAvatarParser extends ParserBase {
    static format: ParserFormat;
    static parser(bytesStream: BytesArray, prefabParser: PrefabParser): void;
    verification(): boolean;
}
