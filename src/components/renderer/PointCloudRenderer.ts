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
 * Point Cloud Renderer Component
 * 
 * Renders point clouds with billboard quads using instanced rendering.
 * Manages point data, textures, and rendering state.
 */
@RegisterComponent(PointCloudRenderer, "PointCloudRenderer")
export class PointCloudRenderer extends RenderNode {
  public count: number = 0;
  public size: Vector2 = new Vector2();
  
  public pointColor: Uint8ArrayTexture;
  public pointPosition: Float32ArrayTexture;
  public pointOrder: R32UintTexture;
  public texParams: Float32Array; // [numPoints, texWidth, validCount, pointSize]
  
  public pointCloudMaterial: PointCloudMaterial;
  
  private _positions: Float32Array;
  get positions(): Float32Array {
    return this._positions;
  }
  private _colors: Uint8Array;
  private _orderData: Uint32Array;
  private _fullCount: number = 0;
  get fullCount(): number {
    return this._fullCount;
  }
  
  private _batchSize: number = 128;
  public instanceCount: number = 0;
  
  private _texturesInitialized: boolean = false;
  private _debugFullScreen: boolean = false;
  
  private _centerOffset: Vector3 = new Vector3();
  get centerOffset(): Vector3 {
    return this._centerOffset;
  }
  
  constructor() {
    super();
  }
  
  /**
   * Initialize point cloud from raw data
   * @param positions Point positions (xyz per point, Float32Array)
   * @param colors Point colors (rgba per point, Uint8Array)
   * @param count Number of points
   */
  public initFromData(
    positions: Float32Array,
    colors: Uint8Array,
    count: number
  ) {
    if (!positions || !colors || count <= 0) {
      console.error("PointCloudRenderer: Invalid input data");
      return;
    }
    
    if (positions.length < count * 3) {
      console.error("PointCloudRenderer: Positions array too small");
      return;
    }
    
    if (colors.length < count * 4) {
      console.error("PointCloudRenderer: Colors array too small");
      return;
    }
    
    this.count = count;
    this._fullCount = count;
    this.size = this.evalTextureSize(count);
    
    this._positions = positions;
    this._colors = colors;
    
    this.centerizePositions();
    this.buildPositionTexture();
    this.buildColorTexture();
    
    this.texParams = new Float32Array([
      this.count,
      this.size.x,
      this.count,
      4.0
    ]);
    
    this.buildOrderTexture();
    
    this.pointCloudMaterial = new PointCloudMaterial();
    this.geometry = new PointCloudGeometry(this._batchSize);
    this.materials = [this.pointCloudMaterial];
    
    this.instanceCount = Math.ceil(this.count / this._batchSize);
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
   * Centerize positions to improve precision for large values
   * Subtracts the center point from all positions to keep values near zero
   */
  private centerizePositions() {
    if (this.count === 0) return;
    
    let sumX = 0, sumY = 0, sumZ = 0;
    for (let i = 0; i < this.count; i++) {
      const idx = i * 3;
      sumX += this._positions[idx + 0];
      sumY += this._positions[idx + 1];
      sumZ += this._positions[idx + 2];
    }
    
    const centerX = sumX / this.count;
    const centerY = sumY / this.count;
    const centerZ = sumZ / this.count;
    
    this._centerOffset.set(centerX, centerY, centerZ);
    
    for (let i = 0; i < this.count; i++) {
      const idx = i * 3;
      this._positions[idx + 0] -= centerX;
      this._positions[idx + 1] -= centerY;
      this._positions[idx + 2] -= centerZ;
    }
    this.object3D.localPosition = this._centerOffset;
  }
  
  private buildPositionTexture() {
    const w = this.size.x | 0;
    const h = this.size.y | 0;
    const count = this.count;
    
    const data = new Float32Array(w * h * 4);
    
    for (let i = 0; i < count; i++) {
      const idx = i * 4;
      const posIdx = i * 3;
      data[idx + 0] = this._positions[posIdx + 0];
      data[idx + 1] = this._positions[posIdx + 1];
      data[idx + 2] = this._positions[posIdx + 2];
      data[idx + 3] = 0;
    }
    
    if (count < w * h) {
      const lastIdx = (count - 1) * 4;
      for (let i = count; i < w * h; i++) {
        const idx = i * 4;
        data[idx + 0] = data[lastIdx + 0];
        data[idx + 1] = data[lastIdx + 1];
        data[idx + 2] = data[lastIdx + 2];
        data[idx + 3] = 0;
      }
    }
    
    this.pointPosition = new Float32ArrayTexture().create(w, h, data);
    this.pointPosition.name = "pointPosition";
    
    this.pointPosition.minFilter = "nearest";
    this.pointPosition.magFilter = "nearest";
    this.pointPosition.addressModeU = "clamp-to-edge";
    this.pointPosition.addressModeV = "clamp-to-edge";
  }
  
  private buildColorTexture() {
    const w = this.size.x | 0;
    const h = this.size.y | 0;
    const count = this.count;
    
    const data = new Uint8Array(w * h * 4);
    
    for (let i = 0; i < count; i++) {
      const idx = i * 4;
      const colorIdx = i * 4;
      data[idx + 0] = this._colors[colorIdx + 0];
      data[idx + 1] = this._colors[colorIdx + 1];
      data[idx + 2] = this._colors[colorIdx + 2];
      data[idx + 3] = this._colors[colorIdx + 3];
    }
    
    if (count < w * h) {
      const lastIdx = (count - 1) * 4;
      for (let i = count; i < w * h; i++) {
        const idx = i * 4;
        data[idx + 0] = data[lastIdx + 0];
        data[idx + 1] = data[lastIdx + 1];
        data[idx + 2] = data[lastIdx + 2];
        data[idx + 3] = data[lastIdx + 3];
      }
    }
    
    this.pointColor = new Uint8ArrayTexture().create(w, h, data, false);
    this.pointColor.name = "pointColor";
    
    this.pointColor.minFilter = "nearest";
    this.pointColor.magFilter = "nearest";
    this.pointColor.mipmapFilter = "nearest";
    this.pointColor.addressModeU = "clamp-to-edge";
    this.pointColor.addressModeV = "clamp-to-edge";
  }
  
  private buildOrderTexture() {
    const total = this.size.x * this.size.y;
    this._orderData = new Uint32Array(total);
    
    for (let i = 0; i < total; i++) {
      this._orderData[i] = i < this.count ? i : (this.count > 0 ? this.count - 1 : 0);
    }
    
    this.pointOrder = new R32UintTexture().create(this.size.x, this.size.y, this._orderData);
    this.pointOrder.name = "pointOrder";
    
    this.pointOrder.minFilter = "nearest";
    this.pointOrder.magFilter = "nearest";
    this.pointOrder.addressModeU = "clamp-to-edge";
    this.pointOrder.addressModeV = "clamp-to-edge";
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
    this.instanceCount = Math.ceil(this.count / this._batchSize);
  }
  
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
    
    this._positions = null;
    this._colors = null;
    this._orderData = null;
    this.texParams = null;
    
    super.destroy(force);
  }
}

