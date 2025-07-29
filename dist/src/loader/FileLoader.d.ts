import { LoaderBase } from "./LoaderBase";
import { LoaderFunctions } from "./LoaderFunctions";
import { ParserBase } from "./parser/ParserBase";
import { Parser } from "../util/Global";
export declare class FileLoader extends LoaderBase {
    load<T extends ParserBase>(url: string, c: Parser<T>, loaderFunctions?: LoaderFunctions, userData?: any): Promise<T>;
}
