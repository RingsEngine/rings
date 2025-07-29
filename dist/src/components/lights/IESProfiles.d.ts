import { Texture } from "../../gfx/graphics/webGpu/core/texture/Texture";
import { BitmapTexture2DArray } from "../../textures/BitmapTexture2DArray";
export declare class IESProfiles {
    static use: boolean;
    static iesTexture: BitmapTexture2DArray;
    static ies_list: IESProfiles[];
    private _iesTexture;
    index: number;
    constructor();
    private generateIES;
    set IESTexture(texture: Texture);
    get IESTexture(): Texture;
    static create(width: number, height: number): void;
}
