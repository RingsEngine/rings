import { Vector2 } from "../../../math/Vector2";
import { Vector4 } from "../../../math/Vector4";
import { GUITexture } from "./GUITexture";
export declare class GUISprite {
    id: string;
    guiTexture: GUITexture;
    uvRec: Vector4;
    uvBorder: Vector4;
    offsetSize: Vector4;
    borderSize: Vector4;
    trimSize: Vector2;
    isSliced: boolean;
    height: number;
    width: number;
    xadvance: number;
    xoffset: number;
    yoffset: number;
    constructor(texture?: GUITexture);
}
