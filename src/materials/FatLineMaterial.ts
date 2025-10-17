import { Material } from "./Material";
import { Color } from "../math/Color";
import { Vector2 } from "../math/Vector2";
import { Matrix4 } from "../math/Matrix4";
import { FatLineShader } from "../loader/parser/prefab/mats/shader/FatLineShader";
import { StorageGPUBuffer } from "../gfx/graphics/webGpu/core/buffer/StorageGPUBuffer";

/**
 * FatLine Material
 * Material for rendering thick lines
 * Supports pixel-accurate line width and round endcaps
 * @group Material
 */
export class FatLineMaterial extends Material {
  constructor() {
    super();
    this.shader = new FatLineShader();

    // Set default blend mode for lines
    this.transparent = true;
  }

  /**
   * Set instance buffer for line segments
   * This should be called after setting the geometry
   */
  public setInstanceBuffer(buffer: StorageGPUBuffer) {
    this.shader.setStorageBuffer("instances", buffer);
  }

  /**
   * Set model matrix for transforming line segments
   * This should be updated each frame if the object moves
   */
  public setModelMatrix(matrix: Matrix4) {
    const pass = this.shader.getDefaultColorShader();
    pass.setUniform("modelMatrix", matrix.rawData);
  }

  /**
   * Set base color (tint color)
   */
  public set baseColor(color: Color) {
    this.shader.setUniformColor(`baseColor`, color);
  }

  /**
   * Get base color (tint color)
   */
  public get baseColor(): Color {
    return this.shader.getUniformColor("baseColor");
  }

  /**
   * Set line width in pixels
   */
  public set lineWidth(value: number) {
    this.shader.setUniformFloat(`lineWidth`, value);
  }

  /**
   * Get line width in pixels
   */
  public get lineWidth(): number {
    return this.shader.getUniformFloat("lineWidth");
  }

  /**
   * Set opacity (0-1)
   */
  public set opacity(value: number) {
    this.shader.setUniformFloat(`opacity`, value);
  }

  /**
   * Get opacity (0-1)
   */
  public get opacity(): number {
    return this.shader.getUniformFloat("opacity");
  }

  /**
   * Set viewport resolution for correct pixel-space calculations
   * This should be set automatically by the renderer
   */
  public set resolution(value: Vector2) {
    this.shader.setUniformVector2(`resolution`, value);
  }

  /**
   * Get viewport resolution
   */
  public get resolution(): Vector2 {
    return this.shader.getUniformVector2("resolution");
  }
}

