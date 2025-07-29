import { Engine3D } from "../Engine3D";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { SkyShader } from "../loader/parser/prefab/mats/shader/SkyShader";
import { Vector3 } from "../math/Vector3";
import { Material } from "./Material";

export class SkyMaterial extends Material {
  constructor() {
    super();

    this.shader = new SkyShader();
    this.shader.setUniformVector3(`eyesPos`, new Vector3());
    this.shader.setUniformFloat(`exposure`, 1.0);
    this.shader.setUniformFloat(`roughness`, 0.0);
  }

  public set baseMap(texture: Texture) {
    this.setTexture(`baseMap`, texture);
    const key = "IS_HDR_SKY";
    let defaultShader = this._shader.getDefaultShaders()[0];
    if (defaultShader.defineValue[key] != texture?.isHDRTexture) {
      this._shader.setDefine(key, texture?.isHDRTexture ? true : false);
    }
  }

  public get baseMap(): Texture {
    let defaultShader = this._shader.getDefaultColorShader();
    return defaultShader.getTexture(`baseMap`);
  }

  public set envMap(texture: Texture) {}

  public set shadowMap(texture: Texture) {}

  public get exposure() {
    return Engine3D.setting.sky.skyExposure;
  }
  public set exposure(value: number) {
    Engine3D.setting.sky.skyExposure = value;
  }

  public get roughness() {
    let defaultShader = this._shader.getDefaultColorShader();
    return defaultShader.uniforms[`roughness`].value;
  }
  public set roughness(value: number) {
    let defaultShader = this._shader.getDefaultColorShader();
    if (`roughness` in defaultShader.uniforms)
      defaultShader.uniforms[`roughness`].value = value;
  }
}
