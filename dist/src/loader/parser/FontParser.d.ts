import { GUITexture } from "../../components/gui/core/GUITexture";
import { ParserBase } from "./ParserBase";
import { ParserFormat } from "./ParserFormat";
export declare class FontInfo {
    face: string;
    size: number;
    bold: boolean;
    italic: boolean;
    stretchH: number;
    spacing: string;
    outline: number;
    lineHeight: number;
    base: number;
    scaleW: number;
    scaleH: number;
    pages: number;
    packed: number;
    alphaChnl: number;
    redChnl: number;
    greenChnl: number;
    blueChnl: number;
    count: number;
    fontPage: FontPage[];
    fontChar: {
        [key: string]: FontChar;
    };
    constructor();
}
export declare class FontPage {
    id: number;
    file: string;
}
export declare class FontChar {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    xoffset: number;
    yoffset: number;
    xadvance: number;
    page: number;
    chnl: number;
}
export declare class FontParser extends ParserBase {
    static format: ParserFormat;
    static parseSprite(guiTexture: GUITexture[], fontData: FontInfo): void;
    verification(): boolean;
    parseString(data: string): Promise<void>;
    private getNewLine;
    private loadFontTextures;
    private static insertSpaceChar;
    private static readLineProperty;
}
