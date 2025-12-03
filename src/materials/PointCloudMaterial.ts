import { Material } from "./Material";
import { Float32ArrayTexture } from "../textures/Float32ArrayTexture";
import { Uint8ArrayTexture } from "../textures/Uint8ArrayTexture";
import { R32UintTexture } from "../textures/R32UintTexture";
import { Matrix4 } from "../math/Matrix4";
import { PointCloudShader } from "../loader/parser/prefab/mats/shader/PointCloudShader";
import { GPUCompareFunction } from "../gfx/graphics/webGpu/WebGPUConst";

/**
 * PointCloud Material
 * Material for rendering point clouds with billboard quads
 * @group Material
 */
export class PointCloudMaterial extends Material {
  private _texParams: Float32Array = new Float32Array([0, 0, 0, 4]);
  private _pointParamsArray: Float32Array = new Float32Array([0, 0, 0, 128]);
  
  constructor() {
    super();
    this.shader = new PointCloudShader();
  }

  /**
   * Set point cloud textures
   * @param pointPosition Position texture (RGB = xyz)
   * @param pointColor Color texture (RGBA)
   * @param texParams Texture parameters [numPoints, texWidth, validCount, pointSize]
   * @param pointOrder Optional sorting texture (R32U format)
   */
  public setPointTextures(
    pointPosition: Float32ArrayTexture,
    pointColor: Uint8ArrayTexture,
    texParams: Float32Array,
    pointOrder?: R32UintTexture
  ) {
    const pass = this.shader.getDefaultColorShader();
    
    if (!pass.getUniform("modelMatrix")) {
      const identityMatrix = new Matrix4();
      pass.setUniform("modelMatrix", identityMatrix.rawData);
    }
    
    pass.setTexture("pointColor", pointColor);
    pass.setTexture("pointPosition", pointPosition);
    
    this._texParams[0] = texParams[0];
    this._texParams[1] = texParams[1];
    this._texParams[2] = texParams[2];
    this._texParams[3] = texParams[3];
    pass.setUniformArray("tex_params", this._texParams);
    pass.setUniformArray("pointParams", this._pointParamsArray);
    
    if (pointOrder) {
      pass.setTexture("pointOrder", pointOrder);
    }
    
    pass.shaderState.depthCompare = GPUCompareFunction.less;
  }

  /**
   * Set the model matrix for transforming points to world space
   * @param matrix Model transformation matrix
   */
  public setTransformMatrix(matrix: Matrix4) {
    const pass = this.shader.getDefaultColorShader();
    pass.setUniform("modelMatrix", matrix.rawData);
  }

  /**
   * Set point size in pixels
   * @param size Point size in pixels (default: 4.0)
   */
  public setPointSize(size: number) {
    this._texParams[3] = Math.max(0.1, size);
    const pass = this.shader.getDefaultColorShader();
    pass.setUniformArray("tex_params", this._texParams);
  }

  /**
   * Set point shape
   * @param shape Point shape: 'square' or 'circle'
   */
  public setPointShape(shape: 'square' | 'circle') {
    this._pointParamsArray[0] = shape === 'circle' ? 1.0 : 0.0;
    const pass = this.shader.getDefaultColorShader();
    pass.setUniformArray("pointParams", this._pointParamsArray);
  }

  public enableDebugFullScreen(enabled: boolean) {
    this._pointParamsArray[1] = enabled ? 1.0 : 0.0;
    const pass = this.shader.getDefaultColorShader();
    pass.setUniformArray("pointParams", this._pointParamsArray);
  }

  /**
   * Set batch size for instanced rendering
   * @param batchSize Number of points per draw call (default: 128)
   */
  public setBatchSize(batchSize: number) {
    this._pointParamsArray[3] = Math.max(1, batchSize | 0);
    const pass = this.shader.getDefaultColorShader();
    pass.setUniformArray("pointParams", this._pointParamsArray);
  }
}

