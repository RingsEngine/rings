import { GPUCullMode, GPUPrimitiveTopology } from "../../../../../gfx/graphics/webGpu/WebGPUConst";
import { RenderShaderPass } from "../../../../../gfx/graphics/webGpu/shader/RenderShaderPass";
import { Shader } from "../../../../../gfx/graphics/webGpu/shader/Shader";
import { PassType } from "../../../../../gfx/renderJob/passRenderer/state/PassType";
import { BlendMode } from "../../../../../materials/BlendMode";
import { Matrix4 } from "../../../../../math/Matrix4";
import { RegisterShader } from "../../../../../util/SerializeDecoration";

/**
 * GSplat Shader
 * Shader for rendering 3D Gaussian Splats
 */
/* eslint-disable */
@RegisterShader(GSplatShader, "GSplatShader")
export class GSplatShader extends Shader {
  constructor() {
    super();

    // Create color pass shader
    const pass = new RenderShaderPass("gsplat_vs_dc", "gsplat_fs_dc");
    pass.passType = PassType.COLOR;
    pass.setShaderEntry("VertMain", "FragMain");
    pass.topology = GPUPrimitiveTopology.triangle_list;
    pass.depthWriteEnabled = false;
    pass.cullMode = GPUCullMode.none;
    pass.shaderState.transparent = true;
    pass.shaderState.blendMode = BlendMode.NORMAL;
    pass.shaderState.writeMasks = [0xF, 0xF];

    this.addRenderPass(pass);
    this.setDefault();
  }

  /**
   * Set default uniform values
   */
  public setDefault() {
    const pass = this.getDefaultColorShader();
    
    // Set identity matrix as default
    const identityMatrix = new Matrix4();
    pass.setUniform("modelMatrix", identityMatrix.rawData);
    
    // Set default pixel culling parameters
    // [minPixels, maxPixels, maxPixelCullDistance, unused]
    pass.setUniform("pixelCull", new Float32Array([2.0, 0, 0, 0]));
  }
}

