import { Texture } from "../../../gfx/graphics/webGpu/core/texture/Texture";
export declare class GUITexture {
    private static _maxUid;
    private readonly _staticId;
    dynamicId: number;
    texture: Texture;
    width: number;
    height: number;
    get staticId(): number;
    constructor(texture: Texture);
    private init;
}
