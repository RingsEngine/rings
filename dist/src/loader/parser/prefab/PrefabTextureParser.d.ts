import { BytesArray } from "../../../util/BytesArray";
import { LoaderFunctions } from "../../LoaderFunctions";
import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
import { PrefabParser } from "./PrefabParser";
export declare class PrefabTextureParser extends ParserBase {
    static format: ParserFormat;
    static parserTexture(bytesStream: BytesArray, prefabParser: PrefabParser, loaderFunctions: LoaderFunctions): Promise<void>;
    verification(): boolean;
}
