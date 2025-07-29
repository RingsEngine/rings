import { Engine3D } from "../Engine3D";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { Color } from "../math/Color";
import { Material } from "./Material";
import { UnLitShader } from "..";

/**
 * Unlit Mateiral
 * 不接受光照的表面材质
 * @group Material
 */
export class UnLitMaterial extends Material {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.shader = new UnLitShader();
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

  /**
   * set environment texture, usually referring to cubemap
   */
  public set envMap(texture: Texture) {}

  /**
   * @internal
   * set shadow map
   */
  public set shadowMap(texture: Texture) {}
}
