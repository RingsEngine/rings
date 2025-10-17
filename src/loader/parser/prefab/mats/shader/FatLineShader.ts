import { GPUCullMode } from "../../../../../gfx/graphics/webGpu/WebGPUConst";
import { RenderShaderPass } from "../../../../../gfx/graphics/webGpu/shader/RenderShaderPass";
import { Shader } from "../../../../../gfx/graphics/webGpu/shader/Shader";
import { Color } from "../../../../../math/Color";
import { Vector2 } from "../../../../../math/Vector2";
import { Matrix4 } from "../../../../../math/Matrix4";
import { RegisterShader } from "../../../../../util/SerializeDecoration";

/**
 * FatLine Shader
 */
/* eslint-disable */
@RegisterShader(FatLineShader, "FatLineShader")
export class FatLineShader extends Shader {
  constructor() {
    super();

    // Create color pass shader
    const colorShader = new RenderShaderPass("FatLine_VS", "FatLine_FS");
    colorShader.setShaderEntry(`VertMain`, `FragMain`);
    this.addRenderPass(colorShader);

    // Configure shader state
    const shaderState = colorShader.shaderState;
    shaderState.acceptShadow = false;
    shaderState.castShadow = false;
    shaderState.receiveEnv = false;
    shaderState.acceptGI = false;
    shaderState.useLight = false;
    
    // Disable culling for lines (they are quads and need to be visible from both sides)
    shaderState.cullMode = GPUCullMode.none;
    
    // Enable depth testing but allow depth writes
    shaderState.depthWriteEnabled = true;

    this.setDefault();
  }

  /**
   * Set default uniform values
   */
  public setDefault() {
    this.setUniformColor(`baseColor`, new Color(1, 1, 1, 1));
    this.setUniformFloat(`lineWidth`, 1.0);
    this.setUniformFloat(`opacity`, 1.0);
    this.setUniformVector2(`resolution`, new Vector2(1920, 1080));
    
    // Set identity matrix as default
    const identityMatrix = new Matrix4();
    const pass = this.getDefaultColorShader();
    pass.setUniform(`modelMatrix`, identityMatrix.rawData);
  }
}

