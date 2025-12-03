import { GPUCullMode, GPUPrimitiveTopology } from "../../../../../gfx/graphics/webGpu/WebGPUConst";
import { RenderShaderPass } from "../../../../../gfx/graphics/webGpu/shader/RenderShaderPass";
import { Shader } from "../../../../../gfx/graphics/webGpu/shader/Shader";
import { PassType } from "../../../../../gfx/renderJob/passRenderer/state/PassType";
import { BlendMode } from "../../../../../materials/BlendMode";
import { Matrix4 } from "../../../../../math/Matrix4";
import { RegisterShader } from "../../../../../util/SerializeDecoration";
import { PointCloud_VS, PointCloud_FS } from "../../../../../assets/shader/pointcloud/PointCloudShader";
import { ShaderLib } from "../../../../../assets/shader/ShaderLib";

/**
 * PointCloud Shader
 * Shader for rendering point clouds with billboard quads
 */
/* eslint-disable */
@RegisterShader(PointCloudShader, "PointCloudShader")
export class PointCloudShader extends Shader {
  constructor() {
    super();

    ShaderLib.register("pointcloud_vs_dc", PointCloud_VS);
    ShaderLib.register("pointcloud_fs_dc", PointCloud_FS);

    const pass = new RenderShaderPass("pointcloud_vs_dc", "pointcloud_fs_dc");
    pass.passType = PassType.COLOR;
    pass.setShaderEntry("VertMain", "FragMain");
    pass.topology = GPUPrimitiveTopology.triangle_list;
    
    pass.depthWriteEnabled = false;
    pass.cullMode = GPUCullMode.none;
    
    pass.shaderState.transparent = true;
    pass.shaderState.blendMode = BlendMode.NORMAL;
    pass.shaderState.writeMasks = [0xF, 0xF];
    
    pass.shaderState.castReflection = false;
    
    this.addRenderPass(pass);
    this.setDefault();
  }

  public setDefault() {
    const pass = this.getDefaultColorShader();
    
    const identityMatrix = new Matrix4();
    pass.setUniform("modelMatrix", identityMatrix.rawData);
    pass.setUniformArray("tex_params", new Float32Array([0, 0, 0, 4.0]));
    pass.setUniformArray("pointParams", new Float32Array([0.0, 0.0, 0.0, 128.0]));
  }
}

