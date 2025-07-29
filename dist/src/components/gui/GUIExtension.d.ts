import { Texture } from "../../gfx/graphics/webGpu/core/texture/Texture";
import { GUISprite } from "./core/GUISprite";
import { GUITexture } from "./core/GUITexture";
export declare function makeAloneSprite(id: string, texture: Texture): GUISprite;
export declare function makeGUISprite(source: GUITexture, id: string, data: any): GUISprite;
