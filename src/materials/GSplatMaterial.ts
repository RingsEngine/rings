import { Shader } from "../gfx/graphics/webGpu/shader/Shader";
import { RenderShaderPass } from "../gfx/graphics/webGpu/shader/RenderShaderPass";
import { PassType } from "../gfx/renderJob/passRenderer/state/PassType";
import { Material } from "./Material";
import { ShaderLib } from "../assets/shader/ShaderLib";
import { GSplat_VS_DC, GSplat_FS_DC } from "../assets/shader/materials/GSplat_dc_wgsl";
import { GPUPrimitiveTopology } from "../gfx/graphics/webGpu/WebGPUConst";
import { Float32ArrayTexture } from "../textures/Float32ArrayTexture";
import { Float16ArrayTexture } from "../textures/Float16ArrayTexture";
import { Uint8ArrayTexture } from "../textures/Uint8ArrayTexture";
import { Uint32ArrayTexture } from "../textures/Uint32ArrayTexture";
import { BlendMode } from "./BlendMode";

export class GSplatMaterial extends Material {
  constructor() {
    super();
    // register shaders if not exists
    ShaderLib.register("gsplat_vs_dc", GSplat_VS_DC);
    ShaderLib.register("gsplat_fs_dc", GSplat_FS_DC);

    const pass = new RenderShaderPass("gsplat_vs_dc", "gsplat_fs_dc");
    pass.passType = PassType.COLOR;
    pass.setShaderEntry("VertMain", "FragMain");
    pass.topology = GPUPrimitiveTopology.triangle_strip;
    pass.depthWriteEnabled = false;
    pass.shaderState.transparent = true;
    pass.shaderState.blendMode = BlendMode.NORMAL;
    pass.shaderState.writeMasks = [0xF, 0xF];

    const shader = new Shader();
    shader.addRenderPass(pass);
    this.shader = shader;
  }

  public setSplatTextures(
    splatColor: Uint8ArrayTexture,
    transformA: Uint32ArrayTexture,
    transformB: Float16ArrayTexture,
    texParams: Float32Array,
    splatOrder?: Uint32ArrayTexture
  ) {
    const pass = this.shader.getDefaultColorShader();
    pass.setTexture("splatColor", splatColor);
    pass.setTexture("transformA", transformA);
    pass.setTexture("transformB", transformB);
    // bind material uniform
    pass.setUniformArray("tex_params", texParams);
    // use tex_params.w as visBoost; if negative, enable dither in FS
    if (splatOrder) {
      pass.setTexture("splatOrder", splatOrder);
    }
  }
}


