import { RenderNode } from "./RenderNode";
import { GSplatMaterial } from "../../materials/GSplatMaterial";
import { GSplatGeometry } from "../../shape/GSplatGeometry";
import { View3D } from "../../core/View3D";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { GPUContext } from "../../gfx/renderJob/GPUContext";
import { Uint8ArrayTexture } from "../../textures/Uint8ArrayTexture";
import { Uint32ArrayTexture } from "../../textures/Uint32ArrayTexture";
import { R32UintTexture } from "../../textures/R32UintTexture";
import { Float16ArrayTexture } from "../../textures/Float16ArrayTexture";
import { Vector2 } from "../../math/Vector2";
import { toHalfFloat } from "../../util/Convert";
import { Matrix4 } from "../../math/Matrix4";
import { RegisterComponent } from "../../util/SerializeDecoration";
import { BoundingBox } from "../../core/bound/BoundingBox";
import { Vector3 } from "../../math/Vector3";

/**
 * Single splat data structure for streaming
 */
export type SplatData = {
  position: [number, number, number];
  rotation?: [number, number, number, number]; // quaternion (optional)
  scale?: [number, number, number]; // anisotropic scale (optional)
  opacity?: number; // opacity value (optional)
  sh?: {
    order: number;
    coeffs: Float32Array; // RGB coefficients for this splat
  };
};

/**
 * Gaussian Splat Stream Renderer Component
 */
@RegisterComponent(GSplatStreamRenderer, "GSplatStreamRenderer")
export class GSplatStreamRenderer extends RenderNode {
  // Splat count and texture dimensions
  public totalCount: number = 0;
  public size: Vector2 = new Vector2();
  public localBoundBox: BoundingBox = new BoundingBox();
  // public worldBoundBox: BoundingBox = new BoundingBox();
  public get worldBoundBox(): BoundingBox {
    const boundBox = new BoundingBox();
    boundBox.makeEmpty();
    
    const worldMatrix = this.object3D.transform.worldMatrix;
    const m = worldMatrix.rawData;
    const localMin = this.localBoundBox.min;
    const localMax = this.localBoundBox.max;
    
    // Transform all 8 corners of the bounding box
    // Generate all 8 corners: (min/max.x, min/max.y, min/max.z)
    const corners = [
      [localMin.x, localMin.y, localMin.z], // 0: min, min, min
      [localMax.x, localMin.y, localMin.z], // 1: max, min, min
      [localMin.x, localMax.y, localMin.z], // 2: min, max, min
      [localMax.x, localMax.y, localMin.z], // 3: max, max, min
      [localMin.x, localMin.y, localMax.z], // 4: min, min, max
      [localMax.x, localMin.y, localMax.z], // 5: max, min, max
      [localMin.x, localMax.y, localMax.z], // 6: min, max, max
      [localMax.x, localMax.y, localMax.z], // 7: max, max, max
    ];
    
    for (const [x, y, z] of corners) {
      const wx = m[0] * x + m[4] * y + m[8] * z + m[12];
      const wy = m[1] * x + m[5] * y + m[9] * z + m[13];
      const wz = m[2] * x + m[6] * y + m[10] * z + m[14];
      boundBox.expandByPoint(new Vector3(wx, wy, wz));
    }

    return boundBox;
  }

  // GPU textures for splat data
  public splatColor: Uint8ArrayTexture;
  public transformA: Uint32ArrayTexture;
  public transformB: Float16ArrayTexture;
  public texParams: Float32Array; // [numSplats, texWidth, validCount, visBoost]
  private _texParamDirty: boolean = true;
  public splatOrder: R32UintTexture;

  // Material and geometry
  public gsplatMaterial: GSplatMaterial;

  // CPU-side data buffers (pre-allocated)
  private _colorData: Uint8Array; // RGBA8: count * 4
  private _transformAData: Uint32Array; // RGBA32U: count * 4
  private _transformBData: number[]; // RGBA16F: count * 4
  private _orderData: Uint32Array; // R32U: size.x * size.y
  private _positions: Float32Array; // xyz per splat (local space)
  // private _worldPositions: Float32Array; // xyz per splat (world space, cached)

  // Tracking which splats have been set
  private _splatSetFlags: boolean[]; // Track which indices have data
  private _validCount: number = 0; // Number of splats with valid data

  // Web Worker for sorting (same as GSplatRenderer)
  private _sortWorker: Worker;
  private _lastSentTime: number = 0;
  private _minIntervalMs: number = 16;
  private _centersSent: boolean = false;
  private _lastViewMatrixHash: number = 0;

  // Adaptive sorting optimization
  private _lastCameraSpeed: number = 0;
  private _adaptiveSorting: boolean = true;

  private _lastPixelCullParams: string = '';
  private _texturesInitialized: boolean = false;

  // Pixel coverage culling
  private _minPixelCoverage: number = 4.0;
  private _maxPixelCoverage: number = 0.0;
  private _maxPixelCullDistance: number = 0.0;

  // Batched rendering
  private _batchSize: number = 128;
  public instanceCount: number = 0;

  // Batch update optimization
  private _pendingUpdates: Set<number> = new Set(); // Indices pending GPU update
  private _autoFlushThreshold: number = 100; // Auto-flush when this many updates pending
  private _frameCount: number = 0;

  constructor() {
    super();
  }

  /**
   * Initialize renderer with total splat count
   * Pre-allocates all GPU resources with zero-initialized data
   * @param totalCount Total number of splats that will be streamed
   * @param batchSize Splats per draw call (default: 128)
   */
  public initCount(totalCount: number, batchSize: number = 128) {
    if (totalCount <= 0) {
      throw new Error("Total count must be greater than 0");
    }

    this.totalCount = totalCount;
    this._batchSize = batchSize;
    this.size = this.evalTextureSize(totalCount);

    // Pre-allocate CPU-side buffers
    const w = this.size.x | 0;
    const h = this.size.y | 0;
    const total = w * h;

    // Color buffer: RGBA8
    this._colorData = new Uint8Array(total * 4);
    this._colorData.fill(0);

    // TransformA buffer: RGBA32U
    this._transformAData = new Uint32Array(total * 4);
    this._transformAData.fill(0);

    // TransformB buffer: RGBA16F
    this._transformBData = new Array<number>(total * 4).fill(0);

    // Order buffer: R32U
    this._orderData = new Uint32Array(total);
    for (let i = 0; i < total; i++) {
      this._orderData[i] = i < totalCount ? i : (totalCount > 0 ? totalCount - 1 : 0);
    }

    // Position buffers
    this._positions = new Float32Array(totalCount * 3);
    this._positions.fill(0);
    // this._worldPositions = new Float32Array(totalCount * 3);
    // this._worldPositions.fill(0);
    this.localBoundBox.makeEmpty();

    // Tracking flags
    this._splatSetFlags = new Array(totalCount).fill(false);
    this._validCount = 0;

    // Initialize parameters
    this.texParams = new Float32Array([this._validCount, this.size.x, 0, 1.0]);

    // Create GPU textures with zero-initialized data
    this.splatColor = new Uint8ArrayTexture().create(w, h, this._colorData, false);
    this.splatColor.name = "splatColor";
    this.splatColor.minFilter = "nearest";
    this.splatColor.magFilter = "nearest";
    this.splatColor.mipmapFilter = "nearest";
    this.splatColor.addressModeU = "clamp-to-edge";
    this.splatColor.addressModeV = "clamp-to-edge";

    this.transformA = new Uint32ArrayTexture().create(w, h, this._transformAData);
    this.transformA.name = "transformA";
    this.transformA.minFilter = "nearest";
    this.transformA.magFilter = "nearest";
    this.transformA.addressModeU = "clamp-to-edge";
    this.transformA.addressModeV = "clamp-to-edge";

    this.transformB = new Float16ArrayTexture().create(w, h, this._transformBData, false);
    this.transformB.name = "transformB";
    this.transformB.minFilter = "nearest";
    this.transformB.magFilter = "nearest";
    this.transformB.mipmapFilter = "nearest";
    this.transformB.addressModeU = "clamp-to-edge";
    this.transformB.addressModeV = "clamp-to-edge";

    this.splatOrder = new R32UintTexture().create(w, h, this._orderData);
    this.splatOrder.name = "splatOrder";
    this.splatOrder.minFilter = "nearest";
    this.splatOrder.magFilter = "nearest";
    this.splatOrder.addressModeU = "clamp-to-edge";
    this.splatOrder.addressModeV = "clamp-to-edge";

    // Initialize material and geometry
    this.gsplatMaterial = new GSplatMaterial();
    this.geometry = new GSplatGeometry(this._batchSize);
    this.materials = [this.gsplatMaterial];

    this.instanceCount = 0;
  }

  /**
   * Set data for a single splat at the given index
   * Updates CPU buffers and marks for GPU update
   * @param index Splat index (0 to count-1)
   * @param data Splat data (position is required, others optional)
   */
  public setSplatData(index: number, data: SplatData) {
    if (index < 0 || index >= this.totalCount) {
      throw new Error(`Index ${index} out of range [0, ${this.totalCount})`);
    }

    const wasSet = this._splatSetFlags[index];

    // Update position
    this._positions[index * 3 + 0] = data.position[0];
    this._positions[index * 3 + 1] = data.position[1];
    this._positions[index * 3 + 2] = data.position[2];
    this.localBoundBox.expandByPoint(new Vector3(data.position[0], data.position[1], data.position[2]));

    // Update color (from SH or default)
    const SH_C0 = 0.28209479177387814;
    let r = 0.5, g = 0.5, b = 0.5;
    if (data.sh && data.sh.coeffs && data.sh.coeffs.length >= 3) {
      r = 0.5 + data.sh.coeffs[0] * SH_C0;
      g = 0.5 + data.sh.coeffs[1] * SH_C0;
      b = 0.5 + data.sh.coeffs[2] * SH_C0;
    }
    const a = data.opacity !== undefined ? 1 / (1 + Math.exp(-data.opacity)) : 1.0;

    const colorIdx = index * 4;
    this._colorData[colorIdx + 0] = Math.max(0, Math.min(255, Math.floor(r * 255)));
    this._colorData[colorIdx + 1] = Math.max(0, Math.min(255, Math.floor(g * 255)));
    this._colorData[colorIdx + 2] = Math.max(0, Math.min(255, Math.floor(b * 255)));
    this._colorData[colorIdx + 3] = Math.max(0, Math.min(255, Math.floor(a * 255)));

    // Update transform
    this.updateTransformData(index, data);

    // Mark as set and track for update
    if (!wasSet) {
      this._splatSetFlags[index] = true;
      this._validCount++;
      // Mark that centers need to be resent to worker
      // this._centersSent = false;
    }

    this._pendingUpdates.add(index);
  }

  /**
   * Update transform data for a single splat
   */
  private updateTransformData(index: number, data: SplatData) {
    const idx = index * 4;

    // Pack position as floatBits in transformA
    const fb = new ArrayBuffer(4);
    const f32 = new Float32Array(fb);
    const u32 = new Uint32Array(fb);
    const setFloatBits = (v: number) => {
      f32[0] = v;
      return u32[0];
    };

    const x = data.position[0];
    const y = data.position[1];
    const z = data.position[2];
    this._transformAData[idx + 0] = setFloatBits(x);
    this._transformAData[idx + 1] = setFloatBits(y);
    this._transformAData[idx + 2] = setFloatBits(z);

    // Decode rotation (normalize if present)
    let qx = 0, qy = 0, qz = 0, qw = 1;
    if (data.rotation) {
      qx = data.rotation[0];
      qy = data.rotation[1];
      qz = data.rotation[2];
      qw = data.rotation[3];
      const inv = 1.0 / Math.hypot(qx, qy, qz, qw);
      qx *= inv; qy *= inv; qz *= inv; qw *= inv;
    }

    // Decode anisotropic scale (exp to linear) if present
    let sx = 1, sy = 1, sz = 1;
    if (data.scale) {
      sx = Math.exp(data.scale[0]);
      sy = Math.exp(data.scale[1]);
      sz = Math.exp(data.scale[2]);
    }

    // Rotation matrix from quaternion
    const x2 = qx + qx;
    const y2 = qy + qy;
    const z2 = qz + qz;
    const xx = qx * x2;
    const xy = qx * y2;
    const xz = qx * z2;
    const yy = qy * y2;
    const yz = qy * z2;
    const zz = qz * z2;
    const wx = qw * x2;
    const wy = qw * y2;
    const wz = qw * z2;

    // Rotation matrix (column-major)
    const data0 = 1 - (yy + zz);
    const data1 = xy + wz;
    const data2 = xz - wy;
    const data3 = xy - wz;
    const data4 = 1 - (xx + zz);
    const data5 = yz + wx;
    const data6 = xz + wy;
    const data7 = yz - wx;
    const data8 = 1 - (xx + yy);

    // Apply scale to rotation matrix columns
    const r00 = data0 * sx; const r01 = data1 * sx; const r02 = data2 * sx;
    const r10 = data3 * sy; const r11 = data4 * sy; const r12 = data5 * sy;
    const r20 = data6 * sz; const r21 = data7 * sz; const r22 = data8 * sz;

    // Compute covariance: Σ = R * S * S^T * R^T
    const cAx = r00 * r00 + r10 * r10 + r20 * r20;
    const cAy = r00 * r01 + r10 * r11 + r20 * r21;
    const cAz = r00 * r02 + r10 * r12 + r20 * r22;

    const cBx = r01 * r01 + r11 * r11 + r21 * r21;
    const cBy = r01 * r02 + r11 * r12 + r21 * r22;
    const cBz = r02 * r02 + r12 * r12 + r22 * r22;

    // Write transformB (covA.xyz, covB.z)
    const bidx = idx;
    this._transformBData[bidx + 0] = cAx;
    this._transformBData[bidx + 1] = cAy;
    this._transformBData[bidx + 2] = cAz;
    this._transformBData[bidx + 3] = cBz;

    // Pack transformA.w as half2(cB.x, cB.y)
    const hx = toHalfFloat(cBx) & 0xffff;
    const hy = toHalfFloat(cBy) & 0xffff;
    this._transformAData[idx + 3] = hx | (hy << 16);
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

    // Calculate the range of rows that need updating
    const pendingIndices = Array.from(this._pendingUpdates);
    if (pendingIndices.length === 0) return;

    // Find min/max row indices
    let minRow = h;
    let maxRow = 0;
    for (const index of pendingIndices) {
      const row = Math.floor(index / w);
      if (row < minRow) minRow = row;
      if (row > maxRow) maxRow = row;
    }

    const rowCount = maxRow - minRow + 1;
    const updateRatio = rowCount / h;

    // Use partial update if updating less than 50% of rows, otherwise full update
    // This avoids overhead of partial updates when most of the texture needs updating
    if (updateRatio < 0.5 && rowCount < h) {
      // Partial update: only update the affected rows
      this.splatColor.updateTexture(w, h, this._colorData, minRow, rowCount);
      this.transformA.updateTexture(w, h, this._transformAData, minRow, rowCount);
      this.transformB.updateTexture(w, h, this._transformBData, false, minRow, rowCount);
    } else {
      // Full update: update entire textures
      this.splatColor.updateTexture(w, h, this._colorData);
      this.transformA.updateTexture(w, h, this._transformAData);
      this.transformB.updateTexture(w, h, this._transformBData, false);
    }

    // Update world positions
    this.updatePendingWorldPositions();

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
   * Update splat sorting before rendering
   * Uses the same logic as GSplatRenderer for reliable sorting
   */
  // public onBeforeUpdate(view?: View3D) {
  //   if (this._validCount > 0 && view?.camera) {
  //     if (view.camera.viewMatrix) {
  //       this.scheduleOrder(view.camera.viewMatrix);
  //     }
  //   }
  // }

  /**
   * Update world space positions when transform changes
   */
  private updateWorldPositions() {
    if (!this._positions || this._validCount === 0) return;

    // const worldMatrix = this.object3D.transform.worldMatrix;
    // const localPos = this._positions;
    // const count = this._validCount;

    // const m = worldMatrix.rawData;

    // Transform each valid splat center to world space
    // this.worldBoundBox.makeEmpty();
    // for (let i = 0; i < count; i++) {
    //   if (!this._splatSetFlags[i]) continue;

    //   const idx = i * 3;
    //   const x = localPos[idx + 0];
    //   const y = localPos[idx + 1];
    //   const z = localPos[idx + 2];

    //   // worldPos = modelMatrix * localPos
    //   this._worldPositions[idx + 0] = m[0] * x + m[4] * y + m[8] * z + m[12];
    //   this._worldPositions[idx + 1] = m[1] * x + m[5] * y + m[9] * z + m[13];
    //   this._worldPositions[idx + 2] = m[2] * x + m[6] * y + m[10] * z + m[14];

    //   this.worldBoundBox.expandByPoint(new Vector3(this._worldPositions[idx + 0], this._worldPositions[idx + 1], this._worldPositions[idx + 2]));
    // }

    this._centersSent = false;
  }

  private updatePendingWorldPositions() {
    if (!this._positions || this._validCount === 0) return;

    // const worldMatrix = this.object3D.transform.worldMatrix;
    // const localPos = this._positions;
    // const count = this._validCount;

    // const m = worldMatrix.rawData;

    // // Transform each valid splat center to world space
    // const pendingUpdates = Array.from(this._pendingUpdates.values());
    // for (let i = 0; i < pendingUpdates.length; i++) {
    //   const ii = pendingUpdates[i];
    //   if (!this._splatSetFlags[ii]) continue;

    //   const idx = ii * 3;
    //   const x = localPos[idx + 0];
    //   const y = localPos[idx + 1];
    //   const z = localPos[idx + 2];

    //   // worldPos = modelMatrix * localPos
    //   this._worldPositions[idx + 0] = m[0] * x + m[4] * y + m[8] * z + m[12];
    //   this._worldPositions[idx + 1] = m[1] * x + m[5] * y + m[9] * z + m[13];
    //   this._worldPositions[idx + 2] = m[2] * x + m[6] * y + m[10] * z + m[14];
    //   this.worldBoundBox.expandByPoint(new Vector3(this._worldPositions[idx + 0], this._worldPositions[idx + 1], this._worldPositions[idx + 2]));
    // }

    this._centersSent = false;
  }

  /**
   * Schedule Web Worker-based sorting task
   * Uses the same logic as GSplatRenderer for consistency
   */
  private scheduleOrder(viewMatrix: Matrix4) {
    if (this._validCount === 0) return;

    // Check if transform has changed
    const transformChanged = this.object3D.transform.localChange;
    if (transformChanged) {
      this.updateWorldPositions();
    }

    // Calculate camera position and direction
    const r = viewMatrix.rawData;
    const vx = r[2], vy = r[6], vz = r[10];
    const px = -(r[0] * r[12] + r[1] * r[13] + r[2] * r[14]);
    const py = -(r[4] * r[12] + r[5] * r[13] + r[6] * r[14]);
    const pz = -(r[8] * r[12] + r[9] * r[13] + r[10] * r[14]);

    // Adaptive sorting
    const now = performance.now();
    const deltaTime = (now - this._lastSentTime) / 1000.0;

    const posHash = Math.floor(px * 1000) ^ Math.floor(py * 1000) ^ Math.floor(pz * 1000);
    const dirHash = Math.floor(vx * 1000) ^ Math.floor(vy * 1000) ^ Math.floor(vz * 1000);
    const hash = posHash ^ dirHash;

    if (hash === this._lastViewMatrixHash && !transformChanged && this._centersSent) {
      return;
    }

    let effectiveThrottle = this._minIntervalMs;
    if (this._adaptiveSorting && this._minIntervalMs > 0) {
      const hashDelta = Math.abs(hash - this._lastViewMatrixHash);
      const speed = hashDelta / Math.max(deltaTime, 0.001);

      if (speed < 1000) {
        effectiveThrottle = this._minIntervalMs;
      } else if (speed < 10000) {
        effectiveThrottle = this._minIntervalMs * 0.5;
      } else {
        effectiveThrottle = this._minIntervalMs * 0.2;
      }

      this._lastCameraSpeed = speed;
    }

    if (now - this._lastSentTime < effectiveThrottle) {
      return;
    }

    this._lastViewMatrixHash = hash;
    this._lastSentTime = now;

    if (!this._sortWorker) {
      this._sortWorker = this.createSortWorker();
      this._sortWorker.onmessage = (ev: MessageEvent) => {
        const newOrder = ev.data.order;
        const oldOrder = this._orderData.buffer;

        this._sortWorker.postMessage({
          order: oldOrder
        }, [oldOrder]);

        const indices = new Uint32Array(newOrder);
        const total = this.size.x * this.size.y;
        const validCount = Math.min(this._validCount, indices.length);

        if (!this._orderData || this._orderData.length !== total) {
          this._orderData = new Uint32Array(total);
        }

        // Direct memory copy for valid indices
        this._orderData.set(indices.subarray(0, validCount), 0);

        // Fast fill for padding (if needed)
        if (validCount < total) {
          const lastIndex = this._validCount > 0 ? this._validCount - 1 : 0;
          this._orderData.fill(lastIndex, validCount, total);
        }

        this.splatOrder.updateTexture(this.size.x, this.size.y, this._orderData);

        // Update valid instance count (camera back culling)
        const valid = Math.max(0, Math.min(this._validCount, ev.data.count | 0));
        this.setCount(valid);
        this._updateTexParams();

        // Only render instances needed for visible splats (exclude splats behind camera)
        const newInstanceCount = Math.ceil(valid / this._batchSize);
        this.instanceCount = newInstanceCount;
      };

      // Send initial centers (only valid splats)
      const centers = new Float32Array(this._validCount * 3);
      // const worldPos = this._worldPositions || this._positions;
      let centerIdx = 0;
      const worldMatrix = this.object3D.transform.worldMatrix;
      const localPos = this._positions;
      const m = worldMatrix.rawData;
      for (let i = 0; i < this._validCount; i++) {
        if (this._splatSetFlags[i]) {
          const srcIdx = i * 3;
          const x = localPos[srcIdx + 0];
          const y = localPos[srcIdx + 1];
          const z = localPos[srcIdx + 2];
          centers[centerIdx * 3 + 0] = m[0] * x + m[4] * y + m[8] * z + m[12];
          centers[centerIdx * 3 + 1] = m[1] * x + m[5] * y + m[9] * z + m[13];
          centers[centerIdx * 3 + 2] = m[2] * x + m[6] * y + m[10] * z + m[14];
          centerIdx++;
        }
      }

      const orderBuffer = new Uint32Array(this.totalCount);
      for (let i = 0; i < this.totalCount; i++) {
        orderBuffer[i] = i < this._validCount ? i : (this._validCount > 0 ? this._validCount - 1 : 0);
      }

      this._sortWorker.postMessage({
        order: orderBuffer.buffer,
        centers: centers.buffer
      }, [orderBuffer.buffer, centers.buffer]);

      this._centersSent = true;
    }

    // Update centers if transform changed or new splats added
    if (!this._centersSent && this._sortWorker) {
      const centers = new Float32Array(this._validCount * 3);
      let centerIdx = 0;
      const worldMatrix = this.object3D.transform.worldMatrix;
      const localPos = this._positions;
      const m = worldMatrix.rawData;
      for (let i = 0; i < this._validCount; i++) {
        if (this._splatSetFlags[i]) {
          const srcIdx = i * 3;
          const x = localPos[srcIdx + 0];
          const y = localPos[srcIdx + 1];
          const z = localPos[srcIdx + 2];
          centers[centerIdx * 3 + 0] = m[0] * x + m[4] * y + m[8] * z + m[12];
          centers[centerIdx * 3 + 1] = m[1] * x + m[5] * y + m[9] * z + m[13];
          centers[centerIdx * 3 + 2] = m[2] * x + m[6] * y + m[10] * z + m[14];
          centerIdx++;
        }
      }
      this._sortWorker.postMessage({
        type: 'centers',
        centers: centers.buffer
      }, [centers.buffer]);
      this._centersSent = true;
    }

    // Send sorting request
    this._sortWorker.postMessage({
      cameraPosition: { x: px, y: py, z: pz },
      cameraDirection: { x: -vx, y: -vy, z: -vz }
    });
  }

  /**
   * Create Web Worker for sorting
   * Uses the exact same logic as GSplatRenderer for consistency
   */
  private createSortWorker(): Worker {
    function SortWorker() {
      const compareBits = 16;
      const bucketCount = (2 ** compareBits) + 1;

      let order;
      let centers;
      let cameraPosition;
      let cameraDirection;

      let forceUpdate = false;

      const lastCameraPosition = { x: 0, y: 0, z: 0 };
      const lastCameraDirection = { x: 0, y: 0, z: 0 };

      const boundMin = { x: 0, y: 0, z: 0 };
      const boundMax = { x: 0, y: 0, z: 0 };

      let distances;
      let countBuffer;

      const binarySearch = (m, n, compare_fn) => {
        while (m <= n) {
          const k = (n + m) >> 1;
          const cmp = compare_fn(k);
          if (cmp > 0) {
            m = k + 1;
          } else if (cmp < 0) {
            n = k - 1;
          } else {
            return k;
          }
        }
        return ~m;
      };

      const update = () => {
        if (!order || !centers || !cameraPosition || !cameraDirection) return;

        const px = cameraPosition.x;
        const py = cameraPosition.y;
        const pz = cameraPosition.z;
        const dx = cameraDirection.x;
        const dy = cameraDirection.y;
        const dz = cameraDirection.z;

        const epsilon = 0.001;

        if (!forceUpdate &&
            Math.abs(px - lastCameraPosition.x) < epsilon &&
            Math.abs(py - lastCameraPosition.y) < epsilon &&
            Math.abs(pz - lastCameraPosition.z) < epsilon &&
            Math.abs(dx - lastCameraDirection.x) < epsilon &&
            Math.abs(dy - lastCameraDirection.y) < epsilon &&
            Math.abs(dz - lastCameraDirection.z) < epsilon) {
          return;
        }

        forceUpdate = false;

        lastCameraPosition.x = px;
        lastCameraPosition.y = py;
        lastCameraPosition.z = pz;
        lastCameraDirection.x = dx;
        lastCameraDirection.y = dy;
        lastCameraDirection.z = dz;

        const numVertices = centers.length / 3;
        if (distances?.length !== numVertices) {
          distances = new Uint32Array(numVertices);
        }

        let minDist;
        let maxDist;
        for (let i = 0; i < 8; ++i) {
          const x = (i & 1 ? boundMin.x : boundMax.x) - px;
          const y = (i & 2 ? boundMin.y : boundMax.y) - py;
          const z = (i & 4 ? boundMin.z : boundMax.z) - pz;
          const d = x * dx + y * dy + z * dz;
          if (i === 0) {
            minDist = maxDist = d;
          } else {
            minDist = Math.min(minDist, d);
            maxDist = Math.max(maxDist, d);
          }
        }

        if (!countBuffer) {
          countBuffer = new Uint32Array(bucketCount);
        } else {
          countBuffer.fill(0);
        }

        const range = maxDist - minDist;
        const divider = (range < 1e-6) ? 0 : 1 / range * (2 ** compareBits);
        for (let i = 0; i < numVertices; ++i) {
          const istride = i * 3;
          const x = centers[istride + 0] - px;
          const y = centers[istride + 1] - py;
          const z = centers[istride + 2] - pz;
          const d = x * dx + y * dy + z * dz;
          const sortKey = Math.floor((d - minDist) * divider);

          distances[i] = sortKey;
          countBuffer[sortKey]++;
        }

        for (let i = 1; i < bucketCount; i++) {
          countBuffer[i] += countBuffer[i - 1];
        }

        for (let i = 0; i < numVertices; i++) {
          const distance = distances[i];
          const destIndex = --countBuffer[distance];
          order[destIndex] = i;
        }

        const dist = i => distances[order[i]] / divider + minDist;
        const findZero = () => {
          const result = binarySearch(0, numVertices - 1, i => -dist(i));
          return Math.min(numVertices, Math.abs(result));
        };
        const count = dist(numVertices - 1) >= 0 ? findZero() : numVertices;

        // Send results
        (self as any).postMessage({
          order: order.buffer,
          count
        }, [order.buffer]);

        order = null;
      };

      (self as any).onmessage = (message) => {
        if (message.data.order) {
          order = new Uint32Array(message.data.order);
        }
        if (message.data.centers) {
          centers = new Float32Array(message.data.centers);

          boundMin.x = boundMax.x = centers[0];
          boundMin.y = boundMax.y = centers[1];
          boundMin.z = boundMax.z = centers[2];

          const numVertices = centers.length / 3;
          for (let i = 1; i < numVertices; ++i) {
            const x = centers[i * 3 + 0];
            const y = centers[i * 3 + 1];
            const z = centers[i * 3 + 2];

            boundMin.x = Math.min(boundMin.x, x);
            boundMin.y = Math.min(boundMin.y, y);
            boundMin.z = Math.min(boundMin.z, z);

            boundMax.x = Math.max(boundMax.x, x);
            boundMax.y = Math.max(boundMax.y, y);
            boundMax.z = Math.max(boundMax.z, z);
          }
          forceUpdate = true;
        }
        if (message.data.cameraPosition) cameraPosition = message.data.cameraPosition;
        if (message.data.cameraDirection) cameraDirection = message.data.cameraDirection;

        update();
      };
    }

    const code = `(${SortWorker.toString()})()`;
    const blob = new Blob([code], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    return new Worker(url);
  }

  /**
   * Set visibility boost factor
   */
  public setVisBoost(v: number) {
    this.texParams[3] = Math.max(0.0, v);
    this._texParamDirty = true;
  }
  
  public setCount(c: number) {
    this.texParams[0] = Math.max(0, c);
    this._texParamDirty = true;
  }
  
  private _updateTexParams() {
    if (this._texParamDirty) {
      this.gsplatMaterial.setTexParams(this.texParams);
      this._texParamDirty = false;
    }
  }

  /**
   * Set sort throttle interval (milliseconds)
   */
  public setSortThrottle(ms: number) {
    this._minIntervalMs = Math.max(0, (ms | 0));
  }

  /**
   * Enable/disable adaptive sorting
   */
  public setAdaptiveSorting(enabled: boolean) {
    this._adaptiveSorting = enabled;
  }

  /**
   * Set pixel coverage culling thresholds
   */
  public setPixelCulling(minPixels: number, maxPixels: number = 0, maxPixelCullDistance: number = 0) {
    this._minPixelCoverage = Math.max(0, minPixels);
    this._maxPixelCoverage = Math.max(0, maxPixels);
    this._maxPixelCullDistance = Math.max(0, maxPixelCullDistance);
  }

  /**
   * Get current pixel culling settings
   */
  public getPixelCullingStats() {
    return {
      minPixels: this._minPixelCoverage,
      maxPixels: this._maxPixelCoverage,
      maxPixelCullDistance: this._maxPixelCullDistance,
      maxEnabled: this._maxPixelCoverage > 0,
      distanceEnabled: this._maxPixelCullDistance > 0
    };
  }

  /**
   * Get batching statistics
   */
  public getBatchingStats() {
    return {
      enabled: true,
      batchSize: this._batchSize,
      instanceCount: this.instanceCount,
      splatCount: this._validCount,
      reduction: this._validCount > 0 ? (1 - this.instanceCount / this._validCount) * 100 : 0
    };
  }

  /**
   * Calculate texture size for given splat count
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
    if (this._validCount > 0 && view?.camera) {
      if (view.camera.viewMatrix) {
        this.scheduleOrder(view.camera.viewMatrix);
      }
    }
    // Flush any pending updates before rendering
    if (this._pendingUpdates.size > 0 && this._frameCount >= 60) {
      this.flushUpdates();
    }
    if (this._frameCount >= 60 && this._pendingUpdates.size === 0) {
        this._frameCount = 0;
    } 
    this._frameCount++;

    this._updateTexParams();
    
    const worldMatrix = this.object3D.transform.worldMatrix;
    this.gsplatMaterial.setTransformMatrix(worldMatrix);

    const currentParams = `${this._minPixelCoverage},${this._maxPixelCoverage},${this._maxPixelCullDistance},${this._batchSize}`;
    if (currentParams !== this._lastPixelCullParams) {
      this.gsplatMaterial.setPixelCulling(this._minPixelCoverage, this._maxPixelCoverage, this._maxPixelCullDistance, this._batchSize);
      this._lastPixelCullParams = currentParams;
    }

    if (!this._texturesInitialized) {
      this.gsplatMaterial.setSplatTextures(
        this.splatColor,
        this.transformA,
        this.transformB,
        this.texParams,
        this.splatOrder
      );
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
    renderContext
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
   * Clean up resources
   */
  public destroy(force?: boolean): void {
    if (this._sortWorker) {
      this._sortWorker.terminate();
      this._sortWorker = null;
    }

    if (this.splatColor) {
      this.splatColor.destroy(force);
      this.splatColor = null;
    }
    if (this.transformA) {
      this.transformA.destroy(force);
      this.transformA = null;
    }
    if (this.transformB) {
      this.transformB.destroy(force);
      this.transformB = null;
    }
    if (this.splatOrder) {
      this.splatOrder.destroy(force);
      this.splatOrder = null;
    }

    this._positions = null;
    // this._worldPositions = null;
    this._orderData = null;
    this._colorData = null;
    this._transformAData = null;
    this._transformBData = null;
    this.texParams = null;
    this._splatSetFlags = null;
    this._pendingUpdates.clear();

    super.destroy(force);
  }
}
