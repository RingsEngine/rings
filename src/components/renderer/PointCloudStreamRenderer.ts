import { RenderNode } from "./RenderNode";
import { PointCloudMaterial } from "../../materials/PointCloudMaterial";
import { PointCloudGeometry } from "../../shape/PointCloudGeometry";
import { View3D } from "../../core/View3D";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { GPUContext } from "../../gfx/renderJob/GPUContext";
import { Uint8ArrayTexture } from "../../textures/Uint8ArrayTexture";
import { Float32ArrayTexture } from "../../textures/Float32ArrayTexture";
import { R32UintTexture } from "../../textures/R32UintTexture";
import { Vector2 } from "../../math/Vector2";
import { RegisterComponent } from "../../util/SerializeDecoration";
import { RenderContext } from "../../gfx/renderJob/passRenderer/RenderContext";
import { Reference } from "../../util/Reference";
import { Vector3 } from "../../math/Vector3";

/**
 * Point Cloud Data structure for streaming
 */
export type PointCloudData = {
  position: [number, number, number];
  color?: [number, number, number, number]; // RGBA, 0-255 (optional, defaults to white)
};

/**
 * Point Cloud Stream Renderer Component
 * 
 * Renders point clouds with streaming support, allowing incremental updates.
 * Similar to GSplatStreamRenderer but for simple point clouds.
 */
@RegisterComponent(PointCloudStreamRenderer, "PointCloudStreamRenderer")
export class PointCloudStreamRenderer extends RenderNode {
  static flushFrameLimit = 60;

  public totalCount: number = 0;
  public size: Vector2 = new Vector2();
  
  public pointColor: Uint8ArrayTexture;
  public pointPosition: Float32ArrayTexture;
  public pointOrder: R32UintTexture;
  public texParams: Float32Array; // [numPoints, texWidth, validCount, pointSize]
  private _texParamDirty: boolean = true;

  public pointCloudMaterial: PointCloudMaterial;

  private _colorData: Uint8Array; // RGBA8: size.x * size.y * 4
  private _positionData: Float32Array; // RGBA32Float: size.x * size.y * 4 (XYZ in RGB, A unused)
  private _orderData: Uint32Array; // R32U: size.x * size.y

  private _pointSetFlags: boolean[]; // Track which indices have data
  private _validCount: number = 0; // Number of points with valid data

  private _batchSize: number = 128;
  public instanceCount: number = 0;

  private _pendingUpdates: Set<number> = new Set(); // Indices pending GPU update
  private _autoFlushThreshold: number = 100; // Auto-flush when this many updates pending
  private _frameCount: number = 0;

  private _centerOffset: Vector3 = new Vector3();
  get centerOffset(): Vector3 {
    return this._centerOffset;
  }

  private _texturesInitialized: boolean = false;
  private _debugFullScreen: boolean = false;

  constructor() {
    super();
  }

  /**
   * Initialize renderer with total point count
   * Pre-allocates all GPU resources with zero-initialized data
   * @param totalCount Total number of points that will be streamed
   * @param batchSize Points per draw call (default: 128)
   */
  public initCount(totalCount: number, batchSize: number = 128) {
    if (totalCount <= 0) {
      throw new Error("Total count must be greater than 0");
    }

    this.totalCount = totalCount;
    this._batchSize = batchSize;
    this.size = this.evalTextureSize(totalCount);

    const w = this.size.x | 0;
    const h = this.size.y | 0;
    const total = w * h;

    // Color buffer: RGBA8
    this._colorData = new Uint8Array(total * 4);
    for (let i = 0; i < total; i++) {
      const idx = i * 4;
      this._colorData[idx + 0] = 255; // R
      this._colorData[idx + 1] = 255; // G
      this._colorData[idx + 2] = 255; // B
      this._colorData[idx + 3] = 255; // A
    }

    // Position buffer: RGBA32Float format (XYZ in RGB channels, A unused)
    this._positionData = new Float32Array(total * 4);
    this._positionData.fill(0);

    // Order buffer: R32U
    this._orderData = new Uint32Array(total);
    for (let i = 0; i < total; i++) {
      this._orderData[i] = i < totalCount ? i : (totalCount > 0 ? totalCount - 1 : 0);
    }

    this._pointSetFlags = new Array(totalCount).fill(false);
    this._validCount = 0;

    this.texParams = new Float32Array([
      this._validCount,
      this.size.x,
      this._validCount,
      4.0
    ]);

    this.pointColor = new Uint8ArrayTexture().create(w, h, this._colorData, false);
    this.pointColor.name = "pointColor";
    this.pointColor.minFilter = "nearest";
    this.pointColor.magFilter = "nearest";
    this.pointColor.mipmapFilter = "nearest";
    this.pointColor.addressModeU = "clamp-to-edge";
    this.pointColor.addressModeV = "clamp-to-edge";

    this.pointPosition = new Float32ArrayTexture().create(w, h, this._positionData);
    this.pointPosition.name = "pointPosition";
    this.pointPosition.minFilter = "nearest";
    this.pointPosition.magFilter = "nearest";
    this.pointPosition.addressModeU = "clamp-to-edge";
    this.pointPosition.addressModeV = "clamp-to-edge";

    this.pointOrder = new R32UintTexture().create(w, h, this._orderData);
    this.pointOrder.name = "pointOrder";
    this.pointOrder.minFilter = "nearest";
    this.pointOrder.magFilter = "nearest";
    this.pointOrder.addressModeU = "clamp-to-edge";
    this.pointOrder.addressModeV = "clamp-to-edge";

    this.pointCloudMaterial = new PointCloudMaterial();
    this.geometry = new PointCloudGeometry(this._batchSize);
    this.materials = [this.pointCloudMaterial];

    this.instanceCount = 0;
    this._centerOffset.set(0, 0, 0);
  }

  /**
   * Set data for a single point at the given index
   * Updates CPU buffers and marks for GPU update
   * @param index Point index (0 to count-1)
   * @param data Point data (position is required, color optional)
   */
  public setPointCloudData(index: number, data: PointCloudData) {
    if (index < 0 || index >= this.totalCount) {
      throw new Error(`Index ${index} out of range [0, ${this.totalCount})`);
    }

    const wasSet = this._pointSetFlags[index];

    // Update position (RGBA format: XYZ in RGB channels, A unused)
    const posIdx = index * 4;
    this._positionData[posIdx + 0] = data.position[0];
    this._positionData[posIdx + 1] = data.position[1];
    this._positionData[posIdx + 2] = data.position[2];
    this._positionData[posIdx + 3] = 0;

    const colorIdx = index * 4;
    if (data.color) {
      this._colorData[colorIdx + 0] = Math.max(0, Math.min(255, data.color[0]));
      this._colorData[colorIdx + 1] = Math.max(0, Math.min(255, data.color[1]));
      this._colorData[colorIdx + 2] = Math.max(0, Math.min(255, data.color[2]));
      this._colorData[colorIdx + 3] = Math.max(0, Math.min(255, data.color[3] !== undefined ? data.color[3] : 255));
    } else {
      this._colorData[colorIdx + 0] = 255;
      this._colorData[colorIdx + 1] = 255;
      this._colorData[colorIdx + 2] = 255;
      this._colorData[colorIdx + 3] = 255;
    }

    if (!wasSet) {
      this._pointSetFlags[index] = true;
      this._validCount++;
    }

    this._pendingUpdates.add(index);

    // Auto-flush if threshold reached
    // if (this._pendingUpdates.size >= this._autoFlushThreshold) {
    //   this.flushUpdates();
    // }
  }

  /**
   * Update center offset for precision (called when new points are added)
   */
  private _updateCenterOffset() {
    if (this._validCount === 0) return;

    let sumX = 0, sumY = 0, sumZ = 0;
    let count = 0;
    for (let i = 0; i < this.totalCount; i++) {
      if (this._pointSetFlags[i]) {
        const idx = i * 4;
        sumX += this._positionData[idx + 0];
        sumY += this._positionData[idx + 1];
        sumZ += this._positionData[idx + 2];
        count++;
      }
    }

    if (count > 0) {
      const centerX = sumX / count;
      const centerY = sumY / count;
      const centerZ = sumZ / count;
      this._centerOffset.set(centerX, centerY, centerZ);
      this.object3D.localPosition = this._centerOffset;
    }
  }

  /**
   * Flush pending updates to GPU
   * Updates GPU textures with all pending changes
   * Uses partial updates when possible for better performance
   */
  public flushUpdates() {
    if (this._pendingUpdates.size === 0) return;

    const w = this.size.x | 0;
    const h = this.size.y | 0;

    const pendingIndices = Array.from(this._pendingUpdates);
    if (pendingIndices.length === 0) return;

    let minRow = h;
    let maxRow = 0;
    for (const index of pendingIndices) {
      const row = Math.floor(index / w);
      if (row < minRow) minRow = row;
      if (row > maxRow) maxRow = row;
    }

    const rowCount = maxRow - minRow + 1;
    const updateRatio = rowCount / h;
    const total = w * h;

    if (this.totalCount < total) {
      const lastIdx = (this.totalCount - 1) * 4;
      for (let i = this.totalCount; i < total; i++) {
        const idx = i * 4;
        this._positionData[idx + 0] = this._positionData[lastIdx + 0];
        this._positionData[idx + 1] = this._positionData[lastIdx + 1];
        this._positionData[idx + 2] = this._positionData[lastIdx + 2];
        this._positionData[idx + 3] = 0;
      }
    }

    if (updateRatio < 0.5 && rowCount < h) {
      this.pointColor.updateTexture(w, h, this._colorData, minRow, rowCount);
      this.pointPosition.updateTexture(w, h, this._positionData, false, minRow, rowCount);
    } else {
      this.pointColor.updateTexture(w, h, this._colorData);
      this.pointPosition.updateTexture(w, h, this._positionData, false);
    }
    
    const renderCount = this._validCount;
    this.instanceCount = Math.ceil(renderCount / this._batchSize);
    this.texParams[0] = renderCount;
    this.texParams[2] = renderCount;
    this._texParamDirty = true;

    this._pendingUpdates.clear();
  }

  /**
   * Set auto-flush threshold
   * @param threshold Number of pending updates before auto-flush (default: 100)
   */
  public setAutoFlushThreshold(threshold: number) {
    this._autoFlushThreshold = Math.max(1, threshold);
  }

  /**
   * Get current streaming statistics
   */
  public getStreamingStats() {
    return {
      totalCount: this.totalCount,
      validCount: this._validCount,
      pendingUpdates: this._pendingUpdates.size,
      progress: this.totalCount > 0 ? (this._validCount / this.totalCount * 100) : 0
    };
  }

  /**
   * Calculate texture size for given point count
   * @param count Number of points
   * @returns Texture dimensions (width, height)
   */
  private evalTextureSize(count: number): Vector2 {
    let w = Math.ceil(Math.sqrt(count));
    const align = 64;
    w = Math.ceil(w / align) * align;
    const h = Math.ceil(count / w);
    return new Vector2(w, h);
  }

  /**
   * Update node before rendering
   */
  public nodeUpdate(
    view: View3D,
    passType: PassType,
    renderPassState: RendererPassState,
    clusterLightingBuffer?: ClusterLightingBuffer
  ) {
    if (this._pendingUpdates.size > 0 && this._frameCount >= PointCloudStreamRenderer.flushFrameLimit) {
      this.flushUpdates();
    }
    if (this._frameCount >= PointCloudStreamRenderer.flushFrameLimit && this._pendingUpdates.size === 0) {
      this._frameCount = 0;
    }
    this._frameCount++;

    const worldMatrix = this.object3D.transform.worldMatrix;
    this.pointCloudMaterial.setTransformMatrix(worldMatrix);

    if (!this._texturesInitialized) {
      this.pointCloudMaterial.setPointTextures(
        this.pointPosition,
        this.pointColor,
        this.texParams,
        this.pointOrder
      );
      this.pointCloudMaterial.setBatchSize(this._batchSize);
      this.pointCloudMaterial.setPointSize(this.texParams[3]);
      this.pointCloudMaterial.enableDebugFullScreen(this._debugFullScreen);
      this._texturesInitialized = true;
    }

    if (this._texParamDirty) {
      this.pointCloudMaterial.setPointTextures(
        this.pointPosition,
        this.pointColor,
        this.texParams,
        this.pointOrder
      );
      this._texParamDirty = false;
    }

    super.nodeUpdate(view, passType, renderPassState, clusterLightingBuffer);
  }

  /**
   * Render pass
   */
  public renderPass(
    view: View3D,
    passType: PassType,
    renderContext: RenderContext
  ) {
    const encoder: GPURenderPassEncoder = renderContext.encoder;

    for (let mat of this.materials) {
      const passes = mat.getPass(passType);
      if (!passes || passes.length === 0) continue;

      for (const pass of passes) {
        if (!pass.pipeline) continue;

        pass.apply(this.geometry, renderContext.rendererPassState || (renderContext as any));
        GPUContext.bindPipeline(encoder, pass);

        GPUContext.bindGeometryBuffer(encoder, this.geometry);

        const subGeometry = this.geometry.subGeometries[0];
        const lodInfo = subGeometry.lodLevels[0];

        if (this.instanceCount > 0) {
          GPUContext.drawIndexed(
            encoder,
            lodInfo.indexCount,
            this.instanceCount,
            lodInfo.indexStart,
            0,
            0
          );
        } else {
          GPUContext.drawIndexed(
            encoder,
            lodInfo.indexCount,
            1,
            lodInfo.indexStart,
            0,
            0
          );
        }
      }
    }
  }

  /**
   * Set point size in pixels
   * @param size Point size in pixels
   */
  public setPointSize(size: number) {
    this.texParams[3] = Math.max(0.1, size);
    if (this.pointCloudMaterial) {
      this.pointCloudMaterial.setPointSize(size);
    }
  }

  /**
   * Set point shape
   * @param shape 'square' or 'circle'
   */
  public setPointShape(shape: 'square' | 'circle') {
    if (this.pointCloudMaterial) {
      this.pointCloudMaterial.setPointShape(shape);
    }
  }

  /**
   * Enable a fullscreen debug quad to validate the render pipeline.
   */
  public enableDebugFullScreen(enabled: boolean) {
    this._debugFullScreen = enabled;
    if (this.pointCloudMaterial) {
      this.pointCloudMaterial.enableDebugFullScreen(enabled);
    }
  }

  /**
   * Set batch size for instanced rendering
   * @param batchSize Number of points per draw call
   */
  public setBatchSize(batchSize: number) {
    this._batchSize = Math.max(1, batchSize | 0);
    if (this.geometry) {
      const oldGeometry = this.geometry;
      Reference.getInstance().detached(oldGeometry, this);
      if (!Reference.getInstance().hasReference(oldGeometry)) {
        oldGeometry.destroy();
      }
      this.geometry = new PointCloudGeometry(this._batchSize);
    }
    if (this.pointCloudMaterial) {
      this.pointCloudMaterial.setBatchSize(this._batchSize);
      this.pointCloudMaterial.enableDebugFullScreen(this._debugFullScreen);
    }
    this.instanceCount = Math.ceil(this._validCount / this._batchSize);
  }

  /**
   * Clean up resources
   */
  public destroy(force?: boolean): void {
    if (this.pointColor) {
      this.pointColor.destroy(force);
      this.pointColor = null;
    }
    if (this.pointPosition) {
      this.pointPosition.destroy(force);
      this.pointPosition = null;
    }
    if (this.pointOrder) {
      this.pointOrder.destroy(force);
      this.pointOrder = null;
    }

    this._positionData = null;
    this._colorData = null;
    this._orderData = null;
    this.texParams = null;
    this._pointSetFlags = null;
    this._pendingUpdates.clear();

    super.destroy(force);
  }
}
