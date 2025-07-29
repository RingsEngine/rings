import { GUISprite } from "../components/gui/core/GUISprite";
import { FontInfo } from "../loader/parser/FontParser";
declare class Fonts {
    protected fntCache: {
        [key: number]: {
            [key: string]: GUISprite;
        };
    };
    protected fntData: {
        [key: number]: {
            [key: string]: FontInfo;
        };
    };
    addFontData(face: string, size: number, fontData: FontInfo): void;
    getFontData(face: string, size: number): FontInfo;
    addFnt(font: string, size: number, id: string, sprite: GUISprite): void;
    getFnt(font: string, size: number, id: string): GUISprite;
}
export declare let fonts: Fonts;
export {};
