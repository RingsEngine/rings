import { Shader } from "../gfx/graphics/webGpu/shader/Shader";
import { RenderShaderPass } from "../gfx/graphics/webGpu/shader/RenderShaderPass";
import { PassType } from "../gfx/renderJob/passRenderer/state/PassType";
import { Material } from "./Material";
import { ShaderLib } from "../assets/shader/ShaderLib";
import { GSplat_VS, GSplat_FS } from "../assets/shader/materials/GSplatShader";
import { GPUPrimitiveTopology } from "../gfx/graphics/webGpu/WebGPUConst";
import { Float32ArrayTexture } from "../textures/Float32ArrayTexture";
import { Float16ArrayTexture } from "../textures/Float16ArrayTexture";
import { Uint8ArrayTexture } from "../textures/Uint8ArrayTexture";
import { Uint32ArrayTexture } from "../textures/Uint32ArrayTexture";
import { BlendMode } from "./BlendMode";
import { Matrix4 } from "../math/Matrix4";

export class GSplatMaterial extends Material {
  constructor() {
    super();
    // register shaders if not exists
    ShaderLib.register("gsplat_vs_dc", GSplat_VS);
    ShaderLib.register("gsplat_fs_dc", GSplat_FS);

    const pass = new RenderShaderPass("gsplat_vs_dc", "gsplat_fs_dc");
    pass.passType = PassType.COLOR;
    pass.setShaderEntry("VertMain", "FragMain");
    pass.topology = GPUPrimitiveTopology.triangle_strip;
    pass.depthWriteEnabled = false;
    pass.cullMode = "none";
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

  /**
   * Set the model matrix for transforming splats to world space
   */
  public setTransformMatrix(matrix: Matrix4) {
    const pass = this.shader.getDefaultColorShader();
    pass.setUniform("modelMatrix", matrix.rawData);
  }
  
  /**
   * Set pixel coverage culling thresholds
   * @param minPixels Minimum pixel coverage (cull tiny splats), default: 2.0
   * @param maxPixels Maximum pixel coverage (cull oversized splats), default: 0 (disabled)
   * @param maxPixelCullDistance Only cull oversized splats within this distance, 0 = always cull
   */
  public setPixelCulling(minPixels: number, maxPixels: number, maxPixelCullDistance: number = 0) {
    const pass = this.shader.getDefaultColorShader();
    pass.setUniform("pixelCull", new Float32Array([minPixels, maxPixels, maxPixelCullDistance, 0]));
  }
}


