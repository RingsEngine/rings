import { Engine3D } from "../../../Engine3D";
import { Texture } from "../../../gfx/graphics/webGpu/core/texture/Texture";

export class GUITexture {
  private static _maxUid: number = -1;
  private readonly _staticId: number = -1;
  public dynamicId: number = -1;
  public texture: Texture;
  public width: number = 1;
  public height: number = 1;

  public get staticId(): number {
    return this._staticId;
  }

  constructor(texture: Texture) {
    texture ||= Engine3D.res.whiteTexture;
    texture.addressModeU = "clamp-to-edge";
    texture.addressModeV = "clamp-to-edge";
    this.texture = texture;
    GUITexture._maxUid++;
    this._staticId = GUITexture._maxUid;
    this.init();
  }

  private init(): void {
    this.dynamicId = -1;
    this.width = this.texture.width;
    this.height = this.texture.height;
  }
}
