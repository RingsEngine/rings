import { Reader } from "./Reader";
export declare class GLSLPreprocessor extends Reader {
    private _result;
    private _skipLine;
    private _definitionTables;
    constructor(source: string);
    private parse;
    get source(): string;
    private parseArgs;
}
