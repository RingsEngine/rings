import { Engine3D } from "../../../Engine3D";
import { ShaderLib } from "../../../assets/shader/ShaderLib";
import {
  GPUCompareFunction,
  GPUCullMode,
} from "../../../gfx/graphics/webGpu/WebGPUConst";
import { Texture } from "../../../gfx/graphics/webGpu/core/texture/Texture";
import { RenderShaderPass } from "../../../gfx/graphics/webGpu/shader/RenderShaderPass";
import { Shader } from "../../../gfx/graphics/webGpu/shader/Shader";
import { PassType } from "../../../gfx/renderJob/passRenderer/state/PassType";
import { BlendMode } from "../../../materials/BlendMode";
import { Material } from "../../../materials/Material";
import { Vector2 } from "../../../math/Vector2";
import { Vector3 } from "../../../math/Vector3";
import { Vector4 } from "../../../math/Vector4";
import { GUISpace } from "../GUIConfig";
import { GUIShader } from "./GUIShader";

/**
 * 材质相关
 * @group GPU GUI
 */
export class GUIMaterial extends Material {
  private _scissorRect: Vector4;
  private _screenSize: Vector2 = new Vector2(1024, 768);
  private _scissorEnable: boolean = false;
  constructor(space: GUISpace) {
    super();

    ShaderLib.register("GUI_shader_view", GUIShader.GUI_shader_view);
    ShaderLib.register("GUI_shader_world", GUIShader.GUI_shader_world);

    let newShader = new Shader();
    this.addColorPass(newShader, PassType.COLOR, space);
    this.addColorPass(newShader, PassType.UI, space);
    this.shader = newShader;
  }

  private addColorPass(shader: Shader, passType: PassType, space: GUISpace) {
    let shaderKey: string =
      space == GUISpace.View ? "GUI_shader_view" : "GUI_shader_world";
    let shaderPass = new RenderShaderPass(shaderKey, shaderKey);
    shaderPass.passType = passType;
    shaderPass.setShaderEntry(`VertMain`, `FragMain`);

    shaderPass.setUniformVector4("scissorRect", new Vector4());
    shaderPass.setUniformVector2("screenSize", this._screenSize);
    shaderPass.setUniformFloat("scissorCornerRadius", 0.0);
    shaderPass.setUniformFloat("scissorFadeOutSize", 0.0);

    shaderPass.setUniformFloat("pixelRatio", 1);
    shaderPass.setUniformVector3("v3", Vector3.ZERO);

    let shaderState = shaderPass.shaderState;
    shaderState.depthWriteEnabled = false;
    shaderPass.blendMode = BlendMode.NORMAL;
    shaderPass.depthCompare =
      space == GUISpace.View
        ? GPUCompareFunction.always
        : GPUCompareFunction.less_equal;
    shaderPass.cullMode = GPUCullMode.back;
    shader.addRenderPass(shaderPass);
  }

  public setPanelRatio(pixelRatio: number) {
    this.shader.setUniformFloat("pixelRatio", pixelRatio);
  }

  public setScissorRect(
    left: number,
    bottom: number,
    right: number,
    top: number
  ) {
    this._scissorRect ||= new Vector4();
    this._scissorRect.set(left, bottom, right, top);
    this.shader.setUniformVector4("scissorRect", this._scissorRect);
  }

  public setScissorEnable(value: boolean) {
    if (this._scissorEnable != value) {
      this._scissorEnable = value;
      if (value) {
        this.shader.setDefine("SCISSOR_ENABLE", true);
      } else {
        this.shader.deleteDefine("SCISSOR_ENABLE");
      }
      this.shader.noticeValueChange();
    }
  }

  public setScissorCorner(radius: number, fadeOut: number) {
    this.shader.setUniformFloat("scissorCornerRadius", radius);
    this.shader.setUniformFloat("scissorFadeOutSize", fadeOut);
  }

  public setScreenSize(width: number, height: number): this {
    this._screenSize.set(width, height);
    this.shader.setUniformVector2("screenSize", this._screenSize);
    return this;
  }

  public setTextures(list: Texture[]) {
    for (let i = 0; i < 7; i++) {
      let texture = list[i] || Engine3D.res.whiteTexture;
      this.shader.setTexture(`tex_${i}`, texture);
      this.setVideoTextureDefine(i, texture.isVideoTexture);
    }
  }

  private _videoTextureFlags: { [key: string]: boolean } = {};
  private setVideoTextureDefine(i: number, isVideoTexture: boolean): void {
    let changed = false;
    if (isVideoTexture != this._videoTextureFlags[i]) {
      if (isVideoTexture) {
        this.shader.setDefine(`VideoTexture${i}`, true);
      } else {
        this.shader.deleteDefine(`VideoTexture${i}`);
      }
      this._videoTextureFlags[i] = isVideoTexture;
      changed = true;
    }

    if (changed) {
      this.shader.noticeValueChange();
    }
  }

  public set envMap(texture: Texture) {}
  public set shadowMap(texture: Texture) {}
  public set baseMap(texture: Texture) {}
  public set normalMap(value: Texture) {}
  public set emissiveMap(value: Texture) {}
  public set irradianceMap(value: Texture) {}
  public set irradianceDepthMap(value: Texture) {}
}
