import { GUISprite } from "./GUISprite";
import { GUITexture } from "./GUITexture";
import { Vector2 } from "../../../math/Vector2";
export declare class GUIAtlasTexture {
    private _spriteMap;
    private _spriteList;
    readonly textureSize: Vector2;
    name: string;
    constructor(size: {
        x: number;
        y: number;
    });
    setTexture(srcTexture: GUITexture, id: string, detail: any): GUISprite;
    getSprite(id: string): GUISprite;
    get spriteList(): GUISprite[];
}
