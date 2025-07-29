import { Engine3D } from "../Engine3D";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { Color } from "../math/Color";
import { Material } from "./Material";
import { ReflectionShader } from "../loader/parser/prefab/mats/shader/ReflectionShader";

export class ReflectionMaterial extends Material {
  constructor() {
    super();
    this.shader = new ReflectionShader();
    this.baseMap = Engine3D.res.whiteTexture;
    this.setDefine("USE_CUSTOMUNIFORM", true);
    this.reflectionIndex = 0;
  }

  public set baseMap(texture: Texture) {
    this.shader.setTexture(`baseMap`, texture);
  }

  public get baseMap() {
    return this.shader.getTexture(`baseMap`);
  }

  public set baseColor(color: Color) {
    this.shader.setUniformColor(`baseColor`, color);
  }

  public set reflectionIndex(i: number) {
    this.shader.setUniformFloat(`reflectionIndex`, i);
  }

  public get baseColor() {
    return this.shader.getUniformColor("baseColor");
  }

  public set envMap(texture: Texture) {}
  public set shadowMap(texture: Texture) {}
}
