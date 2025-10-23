import { Material } from "./Material";
import { ShaderLib } from "../assets/shader/ShaderLib";
import { GSplat_VS, GSplat_FS } from "../assets/shader/gsplat/GSplatShader";
import { Float32ArrayTexture } from "../textures/Float32ArrayTexture";
import { Float16ArrayTexture } from "../textures/Float16ArrayTexture";
import { Uint8ArrayTexture } from "../textures/Uint8ArrayTexture";
import { Uint32ArrayTexture } from "../textures/Uint32ArrayTexture";
import { R32UintTexture } from "../textures/R32UintTexture";
import { Matrix4 } from "../math/Matrix4";
import { GSplatShader } from "../loader/parser/prefab/mats/shader/GSplatShader";
import { GPUCompareFunction } from "../gfx/graphics/webGpu/WebGPUConst";

/**
 * GSplat Material
 * Material for rendering 3D Gaussian Splats
 * @group Material
 */
export class GSplatMaterial extends Material {
  private _pixelCullArray: Float32Array = new Float32Array(4);
  
  constructor() {
    super();
    // register shaders if not exists
    ShaderLib.register("gsplat_vs_dc", GSplat_VS);
    ShaderLib.register("gsplat_fs_dc", GSplat_FS);

    this.shader = new GSplatShader();
  }

  public setSplatTextures(
    splatColor: Uint8ArrayTexture,
    transformA: Uint32ArrayTexture,
    transformB: Float16ArrayTexture,
    texParams: Float32Array,
    splatOrder?: R32UintTexture
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
    pass.shaderState.depthCompare = GPUCompareFunction.less;
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
  public setPixelCulling(minPixels: number, maxPixels: number, maxPixelCullDistance: number = 0, batchSize: number = 128) {
    this._pixelCullArray[0] = minPixels;
    this._pixelCullArray[1] = maxPixels;
    this._pixelCullArray[2] = maxPixelCullDistance;
    this._pixelCullArray[3] = batchSize;
    
    const pass = this.shader.getDefaultColorShader();
    pass.setUniform("pixelCull", this._pixelCullArray);
  }
}


