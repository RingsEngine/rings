import { Engine3D } from "../Engine3D";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { UnLitTexArrayShader } from "../loader/parser/prefab/mats/shader/UnLitTexArrayShader";
import { Color } from "../math/Color";
import { Material } from "./Material";

export class UnLitTexArrayMaterial extends Material {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.shader = new UnLitTexArrayShader();
    this.baseMap = Engine3D.res.whiteTexture;
  }

  public set baseMap(texture: Texture) {
    this.shader.setTexture(`baseMap`, texture);
  }

  public get baseMap() {
    return this.shader.getTexture(`baseMap`);
  }

  /**
   * set base color (tint color)
   */
  public set baseColor(color: Color) {
    this.shader.setUniformColor(`baseColor`, color);
  }

  /**
   * get base color (tint color)
   */
  public get baseColor() {
    return this.shader.getUniformColor("baseColor");
  }

  public set shadowMap(texture: Texture) {}
}
