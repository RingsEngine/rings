import { Texture } from "../../../gfx/graphics/webGpu/core/texture/Texture";
import { Material } from "../../../materials/Material";
import { GUISpace } from "../GUIConfig";
/**
 * 材质相关
 * @group GPU GUI
 */
export declare class GUIMaterial extends Material {
    private _scissorRect;
    private _screenSize;
    private _scissorEnable;
    constructor(space: GUISpace);
    private addColorPass;
    setPanelRatio(pixelRatio: number): void;
    setScissorRect(left: number, bottom: number, right: number, top: number): void;
    setScissorEnable(value: boolean): void;
    setScissorCorner(radius: number, fadeOut: number): void;
    setScreenSize(width: number, height: number): this;
    setTextures(list: Texture[]): void;
    private _videoTextureFlags;
    private setVideoTextureDefine;
    set envMap(texture: Texture);
    set shadowMap(texture: Texture);
    set baseMap(texture: Texture);
    set normalMap(value: Texture);
    set emissiveMap(value: Texture);
    set irradianceMap(value: Texture);
    set irradianceDepthMap(value: Texture);
}
