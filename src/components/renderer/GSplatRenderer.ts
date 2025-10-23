import { RenderNode } from "./RenderNode";
import { GSplatMaterial } from "../../materials/GSplatMaterial";
import { GSplatGeometry } from "../../shape/GSplatGeometry";
import { View3D } from "../../core/View3D";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { GPUContext } from "../../gfx/renderJob/GPUContext";
import { GaussianSplatAsset } from "../../loader/parser/3dgs/GaussianSplatAsset";
import { Uint8ArrayTexture } from "../../textures/Uint8ArrayTexture";
import { Uint32ArrayTexture } from "../../textures/Uint32ArrayTexture";
import { R32UintTexture } from "../../textures/R32UintTexture";
import { Float16ArrayTexture } from "../../textures/Float16ArrayTexture";
import { Vector2 } from "../../math/Vector2";
import { toHalfFloat } from "../../util/Convert";
import { Matrix4 } from "../../math/Matrix4";
import { RegisterComponent } from "../../util/SerializeDecoration";
import { webGPUContext } from "../../gfx/graphics/webGpu/Context3D";

/**
 * Gaussian Splat Renderer Component
 * 
 * Renders 3D Gaussian Splats with automatic depth sorting for correct alpha blending.
 * Manages splat data, textures, and CPU-based sorting via Web Worker.
 */
@RegisterComponent(GSplatRenderer, "GSplatRenderer")
export class GSplatRenderer extends RenderNode {
  // Splat count and texture dimensions
  public count: number = 0;
  public size: Vector2 = new Vector2();
  
  // GPU textures for splat data
  public splatColor: Uint8ArrayTexture;
  public transformA: Uint32ArrayTexture;
  public transformB: Float16ArrayTexture;
  public texParams: Float32Array; // [numSplats, texWidth, validCount, visBoost]
  public splatOrder: R32UintTexture;
  
  // Material and geometry
  public gsplatMaterial: GSplatMaterial;
  
  // CPU-side data for sorting
  private _positions: Float32Array; // xyz per splat (local space)
  get positions(): Float32Array {
    return this._positions;
  }
  private _worldPositions: Float32Array; // xyz per splat (world space, cached)
  private _orderData: Uint32Array; // RGBA32U backing: size.x * size.y * 4
  
  // Web Worker for sorting
  private _sortWorker: Worker;
  private _lastSentTime: number = 0;
  private _minIntervalMs: number = 16;
  private _centersSent: boolean = false;
  private _lastViewMatrixHash: number = 0;
  
  // Adaptive sorting optimization
  private _lastCameraSpeed: number = 0;
  private _adaptiveSorting: boolean = true; // Enable adaptive sorting by default
  
  private _lastPixelCullParams: string = '';
  private _texturesInitialized: boolean = false;
  
  // LOD (Level of Detail) system
  private _lodEnabled: boolean = false;
  private _lodDistances: number[] = [5, 10, 20, 40]; // Distance thresholds
  private _lodRatios: number[] = [1.0, 0.75, 0.5, 0.25, 0.1]; // Splat count ratios for each LOD level
  private _currentLodLevel: number = 0;
  
  // Pixel coverage culling
  private _minPixelCoverage: number = 4.0; // Minimum pixel coverage (cull tiny splats)
  private _maxPixelCoverage: number = 0.0; // Maximum pixel coverage (0 = disabled)
  private _maxPixelCullDistance: number = 0.0; // Only cull oversized splats within this distance (0 = always cull)
  
  // Mapping support (optional subset rendering)
  private _mapping: Uint32Array | null = null;
  private _fullCount: number = 0; // Original total count
  get fullCount(): number {
    return this._fullCount;
  }
  
  // Batched rendering
  private _batchSize: number = 128; // Splats per draw call
  public instanceCount: number = 0; // For InstanceDrawComponent compatibility
  
  constructor() {
    super();
  }
  
  /**
   * Initialize from Gaussian Splat asset
   */
  public initAsset(asset: GaussianSplatAsset) {
    this.count = asset.count;
    this._fullCount = asset.count;
    this.size = this.evalTextureSize(asset.count);
    
    // Build GPU textures
    this.buildColor(asset);
    this.buildTransform(asset);
    
    // Initialize parameters
    this.texParams = new Float32Array([this.count, this.size.x, this.count, 1.0]);
    
    // Cache positions for CPU sorting
    this._positions = asset.position;
    
    // Use R32U format (75% less memory than RGBA32U)
    // Create initial order texture [0..count-1], padded with last index
    const total = this.size.x * this.size.y;
    this._orderData = new Uint32Array(total); // R32U: single channel
    for (let i = 0; i < total; i++) {
      this._orderData[i] = i < this.count ? i : (this.count > 0 ? this.count - 1 : 0);
    }
    this.splatOrder = new R32UintTexture().create(this.size.x, this.size.y, this._orderData);
    this.splatOrder.name = "splatOrder";

    this.splatOrder.minFilter = "nearest";
    this.splatOrder.magFilter = "nearest";
    this.splatOrder.addressModeU = "clamp-to-edge";
    this.splatOrder.addressModeV = "clamp-to-edge";
    
    // Initialize material and geometry
    this.gsplatMaterial = new GSplatMaterial();
    this.geometry = new GSplatGeometry(this._batchSize);
    this.materials = [this.gsplatMaterial];
    
    // Start with instanceCount = 0
    // Will be updated after first sort
    this.instanceCount = 0;
  }
  
  /**
   * Update splat sorting before rendering
   * This runs every frame to ensure correct depth ordering for alpha blending
   */
  public onBeforeUpdate(view?: View3D) {
    if (this.count > 0 && view?.camera) {
      // Update LOD level based on camera distance
      if (this._lodEnabled) {
        this.updateLOD(view);
      }
      
      if (view.camera.viewMatrix) {
        this.scheduleOrder(view.camera.viewMatrix);
      }
    }
  }
  
  /**
   * Update LOD level based on camera distance to splat center
   */
  private updateLOD(view: View3D) {
    if (!this._worldPositions || this._fullCount === 0) return;
    
    // Calculate camera position
    const viewMat = view.camera.viewMatrix;
    const r = viewMat.rawData;
    const camX = -(r[0] * r[12] + r[1] * r[13] + r[2] * r[14]);
    const camY = -(r[4] * r[12] + r[5] * r[13] + r[6] * r[14]);
    const camZ = -(r[8] * r[12] + r[9] * r[13] + r[10] * r[14]);
    
    // Calculate bounding sphere center (rough approximation: avg of all splat positions)
    let centerX = 0, centerY = 0, centerZ = 0;
    const sampleCount = Math.min(100, this._fullCount); // Sample for performance
    for (let i = 0; i < sampleCount; i++) {
      const idx = Math.floor(i / sampleCount * this._fullCount) * 3;
      centerX += this._worldPositions[idx + 0];
      centerY += this._worldPositions[idx + 1];
      centerZ += this._worldPositions[idx + 2];
    }
    centerX /= sampleCount;
    centerY /= sampleCount;
    centerZ /= sampleCount;
    
    // Calculate distance to camera
    const dx = camX - centerX;
    const dy = camY - centerY;
    const dz = camZ - centerZ;
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
    
    // Determine LOD level
    let newLevel = this._lodDistances.length; // Start at lowest LOD
    for (let i = 0; i < this._lodDistances.length; i++) {
      if (distance < this._lodDistances[i]) {
        newLevel = i;
        break;
      }
    }
    
    // Update count if LOD level changed
    if (newLevel !== this._currentLodLevel) {
      this._currentLodLevel = newLevel;
      const ratio = this._lodRatios[newLevel];
      const newCount = Math.floor(this._fullCount * ratio);
      
      // Update rendering count
      if (this._mapping) {
        // If mapping exists, adjust mapping size
        const oldMapping = this._mapping;
        this._mapping = new Uint32Array(Math.min(newCount, oldMapping.length));
        for (let i = 0; i < this._mapping.length; i++) {
          this._mapping[i] = oldMapping[i];
        }
        this.setMapping(this._mapping);
      } else {
        // No mapping: directly adjust instance count
        this.count = newCount;
        this.texParams[0] = this.count;
        this.texParams[2] = this.count;
      }
    }
  }
  
  /**
   * Set rendering subset mapping
   * Pass null/undefined to cancel mapping
   */
  public setMapping(mapping?: Uint32Array | null) {
    this._mapping = mapping && mapping.length > 0 ? mapping : null;
    
    // Update instance count
    this.count = this._mapping ? this._mapping.length : this._fullCount;
    this.texParams[0] = this.count;
    this.texParams[2] = Math.min(this.texParams[0], this.count);
    
    // Reset order texture to [0..count-1]
    const total = this.size.x * this.size.y;
    for (let i = 0; i < total; i++) {
      this._orderData[i] = i < this.count ? i : (this.count > 0 ? this.count - 1 : 0);
    }
    this.splatOrder.updateTexture(this.size.x, this.size.y, this._orderData);
    
    // Send new centers to worker (use world positions)
    if (this._sortWorker) {
      const worldPos = this._worldPositions || this._positions;
      const centers = this._mapping ? new Float32Array(this._mapping.length * 3) : new Float32Array(worldPos);
      if (this._mapping) {
        for (let i = 0; i < this._mapping.length; ++i) {
          const src = this._mapping[i] * 3;
          const dst = i * 3;
          centers[dst + 0] = worldPos[src + 0];
          centers[dst + 1] = worldPos[src + 1];
          centers[dst + 2] = worldPos[src + 2];
        }
      }
      this._sortWorker.postMessage(
        {
          type: 'centers',
          centers: centers.buffer,
          mapping: this._mapping ? this._mapping : null,
        },
        [centers.buffer]
      );
      this._centersSent = true;
    } else {
      this._centersSent = false;
    }
    
    // Reset instance count (will be updated after next sort)
    this.instanceCount = 0;
  }
  
  /**
   * Set visibility boost factor (material uniform tex_params.w)
   */
  public setVisBoost(v: number) {
    this.texParams[3] = Math.max(0.0, v);
  }
  
  /**
   * Set sort throttle interval (milliseconds)
   */
  public setSortThrottle(ms: number) {
    this._minIntervalMs = Math.max(0, (ms | 0));
  }
  
  /**
   * Enable/disable adaptive sorting (auto-adjust sort frequency based on camera movement)
   */
  public setAdaptiveSorting(enabled: boolean) {
    this._adaptiveSorting = enabled;
  }
  
  /**
   * Enable/disable LOD system
   */
  public setLOD(enabled: boolean, distances?: number[], ratios?: number[]) {
    this._lodEnabled = enabled;
    if (distances) this._lodDistances = distances;
    if (ratios) this._lodRatios = ratios;
  }
  
  /**
   * Get current LOD statistics
   */
  public getLODStats() {
    return {
      enabled: this._lodEnabled,
      currentLevel: this._currentLodLevel,
      distances: this._lodDistances,
      ratios: this._lodRatios,
      currentRatio: this._lodRatios[this._currentLodLevel],
      visibleCount: this._lodEnabled ? Math.floor(this._fullCount * this._lodRatios[this._currentLodLevel]) : this._fullCount
    };
  }
  
  /**
   * Set pixel coverage culling thresholds
   * @param minPixels Minimum pixel coverage (cull tiny splats), default: 4.0
   * @param maxPixels Maximum pixel coverage (cull oversized splats), 0 = disabled
   * @param maxPixelCullDistance Only cull oversized splats within this distance, 0 = always cull, recommended: 3-10
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
      splatCount: this.count,
      reduction: this.count > 0 ? (1 - this.instanceCount / this.count) * 100 : 0
    };
  }
  
  /**
   * Calculate texture size for given splat count
   */
  private evalTextureSize(count: number): Vector2 {
    let w = Math.ceil(Math.sqrt(count));
    // Align width so that row bytes are multiples of 256 for all target formats
    // RGBA8 (4B), RGBA16F (8B), RGBA32U (16B) -> width must be multiple of 64
    const align = 64;
    w = Math.ceil(w / align) * align;
    const h = Math.ceil(count / w);
    return new Vector2(w, h);
  }
  
  /**
   * Build color texture from asset
   */
  private buildColor(asset: GaussianSplatAsset) {
    const w = this.size.x | 0;
    const h = this.size.y | 0;
    const data = new Uint8Array(w * h * 4);
    const SH_C0 = 0.28209479177387814;
    const count = asset.count;
    const coeffs = asset.sh?.coeffs;
    const coeffsPerColor = coeffs ? (coeffs.length / (3 * count)) : 1;

    for (let i = 0; i < count; i++) {
      let r = 0.5, g = 0.5, b = 0.5;
      if (coeffs && coeffsPerColor >= 1) {
        const baseIndex = i * coeffsPerColor * 3;
        r = 0.5 + coeffs[baseIndex + 0] * SH_C0;
        g = 0.5 + coeffs[baseIndex + coeffsPerColor + 0] * SH_C0;
        b = 0.5 + coeffs[baseIndex + 2 * coeffsPerColor + 0] * SH_C0;
      }
      const a = asset.opacity ? 1 / (1 + Math.exp(-asset.opacity[i])) : 1.0;
      const idx = i * 4;
      data[idx + 0] = Math.max(0, Math.min(255, Math.floor(r * 255)));
      data[idx + 1] = Math.max(0, Math.min(255, Math.floor(g * 255)));
      data[idx + 2] = Math.max(0, Math.min(255, Math.floor(b * 255)));
      data[idx + 3] = Math.max(0, Math.min(255, Math.floor(a * 255)));
    }
    this.splatColor = new Uint8ArrayTexture().create(w, h, data, false);
    this.splatColor.name = "splatColor";

    this.splatColor.minFilter = "nearest";
    this.splatColor.magFilter = "nearest";
    this.splatColor.mipmapFilter = "nearest";
    this.splatColor.addressModeU = "clamp-to-edge";
    this.splatColor.addressModeV = "clamp-to-edge";
  }
  
  /**
   * Build transform textures from asset
   */
  private buildTransform(asset: GaussianSplatAsset) {
    const w = this.size.x | 0;
    const h = this.size.y | 0;
    const count = asset.count;

    // transformA: uint32 RGBA (xyz as floatBits, w packs half2 of covB.xy)
    const tA = new Uint32Array(w * h * 4);
    // transformB: half rgba16f (covA.xyz, covB.z)
    const tB = new Array<number>(w * h * 4).fill(0);

    // Pack floatBits safely
    const fb = new ArrayBuffer(4);
    const f32 = new Float32Array(fb);
    const u32 = new Uint32Array(fb);
    const setFloatBits = (v: number) => {
      f32[0] = v;
      return u32[0];
    };

    const pos = asset.position;
    const rot = asset.rotation;
    const scl = asset.scale;

    for (let i = 0; i < count; i++) {
      const idx = i * 4;
      const x = pos[i * 3 + 0];
      const y = pos[i * 3 + 1];
      const z = pos[i * 3 + 2];
      tA[idx + 0] = setFloatBits(x);
      tA[idx + 1] = setFloatBits(y);
      tA[idx + 2] = setFloatBits(z);

      // Decode rotation (normalize if present)
      let qx = 0, qy = 0, qz = 0, qw = 1;
      if (rot) {
        qx = rot[i * 4 + 0];
        qy = rot[i * 4 + 1];
        qz = rot[i * 4 + 2];
        qw = rot[i * 4 + 3];
        const inv = 1.0 / Math.hypot(qx, qy, qz, qw);
        qx *= inv; qy *= inv; qz *= inv; qw *= inv;
      }

      // Decode anisotropic scale (exp to linear) if present
      let sx = 1, sy = 1, sz = 1;
      if (scl) {
        sx = Math.exp(scl[i * 3 + 0]);
        sy = Math.exp(scl[i * 3 + 1]);
        sz = Math.exp(scl[i * 3 + 2]);
        
      }

      // Rotation matrix from quaternion - EXACTLY matching PlayCanvas Mat3.setFromQuat
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

      // Rotation matrix (column-major): [col0, col1, col2]
      const data0 = 1 - (yy + zz);  // data[0]
      const data1 = xy + wz;         // data[1]
      const data2 = xz - wy;         // data[2]
      const data3 = xy - wz;         // data[3]
      const data4 = 1 - (xx + zz);   // data[4]
      const data5 = yz + wx;         // data[5]
      const data6 = xz + wy;         // data[6]
      const data7 = yz - wx;         // data[7]
      const data8 = 1 - (xx + yy);   // data[8]

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
      tB[bidx + 0] = cAx;
      tB[bidx + 1] = cAy;
      tB[bidx + 2] = cAz;
      tB[bidx + 3] = cBz;

      // Pack transformA.w as half2(cB.x, cB.y)
      const hx = toHalfFloat(cBx) & 0xffff;
      const hy = toHalfFloat(cBy) & 0xffff;
      tA[idx + 3] = hx | (hy << 16);
    }

    this.transformA = new Uint32ArrayTexture().create(w, h, tA);
    this.transformA.name = "transformA";

    this.transformA.minFilter = "nearest";
    this.transformA.magFilter = "nearest";
    this.transformA.addressModeU = "clamp-to-edge";
    this.transformA.addressModeV = "clamp-to-edge";
    
    this.transformB = new Float16ArrayTexture().create(w, h, tB, false);
    this.transformB.name = "transformB";

    this.transformB.minFilter = "nearest";
    this.transformB.magFilter = "nearest";
    this.transformB.mipmapFilter = "nearest";
    this.transformB.addressModeU = "clamp-to-edge";
    this.transformB.addressModeV = "clamp-to-edge";
  }
  
  /**
   * Update world space positions when transform changes
   */
  private updateWorldPositions() {
    if (!this._positions) return;
    
    const worldMatrix = this.object3D.transform.worldMatrix;
    const localPos = this._positions;
    const count = this._fullCount;
    
    // Allocate or reuse world positions buffer
    if (!this._worldPositions) {
      this._worldPositions = new Float32Array(localPos.length);
    }
    
    const m = worldMatrix.rawData;
    
    // Transform each splat center to world space
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const x = localPos[idx + 0];
      const y = localPos[idx + 1];
      const z = localPos[idx + 2];
      
      // worldPos = modelMatrix * localPos
      this._worldPositions[idx + 0] = m[0] * x + m[4] * y + m[8] * z + m[12];
      this._worldPositions[idx + 1] = m[1] * x + m[5] * y + m[9] * z + m[13];
      this._worldPositions[idx + 2] = m[2] * x + m[6] * y + m[10] * z + m[14];
    }
    
    this._centersSent = false; // Need to send updated positions to worker
  }
  
  /**
   * Schedule Web Worker-based sorting task
   */
  private scheduleOrder(viewMatrix: Matrix4) {
    if (this.count === 0) return;

    // Check if transform has changed
    const transformChanged = this.object3D.transform.localChange;
    if (transformChanged || !this._worldPositions) {
      this.updateWorldPositions();
    }

    // Calculate camera position and direction
    const r = viewMatrix.rawData;
    const vx = r[2], vy = r[6], vz = r[10];
    const px = -(r[0] * r[12] + r[1] * r[13] + r[2] * r[14]);
    const py = -(r[4] * r[12] + r[5] * r[13] + r[6] * r[14]);
    const pz = -(r[8] * r[12] + r[9] * r[13] + r[10] * r[14]);
    
    // Adaptive sorting: calculate camera movement delta
    const now = performance.now();
    const deltaTime = (now - this._lastSentTime) / 1000.0; // seconds
    
    // Calculate hash for change detection
    const posHash = Math.floor(px * 1000) ^ Math.floor(py * 1000) ^ Math.floor(pz * 1000);
    const dirHash = Math.floor(vx * 1000) ^ Math.floor(vy * 1000) ^ Math.floor(vz * 1000);
    const hash = posHash ^ dirHash;
    
    // Skip if camera hasn't moved significantly (within 1mm) and transform unchanged
    if (hash === this._lastViewMatrixHash && !transformChanged) {
      return;
    }
    
    // Adaptive throttle: sort more frequently when camera moves fast
    let effectiveThrottle = this._minIntervalMs;
    if (this._adaptiveSorting && this._minIntervalMs > 0) {
      // Estimate camera speed (simple distance-based heuristic)
      const hashDelta = Math.abs(hash - this._lastViewMatrixHash);
      const speed = hashDelta / Math.max(deltaTime, 0.001);
      
      // Auto-adjust throttle: faster movement = more frequent sorting
      // Speed thresholds (empirical):
      //   0-1000: slow (use max throttle)
      //   1000-10000: medium (reduce throttle by 50%)
      //   10000+: fast (reduce throttle by 80%)
      if (speed < 1000) {
        effectiveThrottle = this._minIntervalMs; // Full throttle
      } else if (speed < 10000) {
        effectiveThrottle = this._minIntervalMs * 0.5; // 50% throttle
      } else {
        effectiveThrottle = this._minIntervalMs * 0.2; // 20% throttle (sort more often)
      }
      
      this._lastCameraSpeed = speed;
    }
    
    // Apply throttle
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

        // Send vertex storage to worker (ping-pong buffer)
        this._sortWorker.postMessage({
          order: oldOrder
        }, [oldOrder]);

        const indices = new Uint32Array(newOrder);
        const total = this.size.x * this.size.y;
        const count = this.count;
        
        // Reuse existing buffer if possible
        if (!this._orderData || this._orderData.length !== total) {
          this._orderData = new Uint32Array(total);
        }
        
        // direct memory copy for valid indices
        const validCount = Math.min(count, indices.length);
        this._orderData.set(indices.subarray(0, validCount), 0);
        
        // Fast fill for padding (if needed)
        if (validCount < total) {
          const lastIndex = count > 0 ? count - 1 : 0;
          this._orderData.fill(lastIndex, validCount, total);
        }
        
        this.splatOrder.updateTexture(this.size.x, this.size.y, this._orderData);
        
        // Update valid instance count (camera back culling)
        const valid = Math.max(0, Math.min(this.count, ev.data.count | 0));
        this.texParams[2] = valid;
        
        // Only render instances needed for visible splats (exclude splats behind camera)
        const newInstanceCount = Math.ceil(valid / this._batchSize);
        this.instanceCount = newInstanceCount;
      };
      
      // First send: world space centers + initial order buffer
      // Use world positions for correct sorting
      const worldPos = this._worldPositions || this._positions;
      const centers = this._mapping ? new Float32Array(this._mapping.length * 3) : new Float32Array(worldPos);
      if (this._mapping) {
        for (let i = 0; i < this._mapping.length; ++i) {
          const src = this._mapping[i] * 3;
          const dst = i * 3;
          centers[dst + 0] = worldPos[src + 0];
          centers[dst + 1] = worldPos[src + 1];
          centers[dst + 2] = worldPos[src + 2];
        }
      }
      
      // Get initial order buffer and send to worker
      const orderBuffer = new Uint32Array(this.count);
      for (let i = 0; i < this.count; i++) {
        orderBuffer[i] = i;
      }
      
      this._sortWorker.postMessage({
        order: orderBuffer.buffer,
        centers: centers.buffer,
        mapping: this._mapping
      }, [orderBuffer.buffer, centers.buffer]);
      
      this._centersSent = true;
    }
    
    // If transform changed and centers not sent yet, update worker
    if (!this._centersSent && this._sortWorker) {
      const worldPos = this._worldPositions || this._positions;
      const centers = this._mapping ? new Float32Array(this._mapping.length * 3) : new Float32Array(worldPos);
      if (this._mapping) {
        for (let i = 0; i < this._mapping.length; ++i) {
          const src = this._mapping[i] * 3;
          const dst = i * 3;
          centers[dst + 0] = worldPos[src + 0];
          centers[dst + 1] = worldPos[src + 1];
          centers[dst + 2] = worldPos[src + 2];
        }
      }
      this._sortWorker.postMessage({
        type: 'centers',
        centers: centers.buffer,
        mapping: this._mapping ? this._mapping : null,
      }, [centers.buffer]);
      this._centersSent = true;
    }

    // Send sorting request (PlayCanvas style - no transfer)
    this._sortWorker.postMessage({
      cameraPosition: { x: px, y: py, z: pz },
      cameraDirection: { x: -vx, y: -vy, z: -vz }
    });
  }
  
  /**
   * Create Web Worker for sorting
   */
  private createSortWorker(): Worker {
    // Match PlayCanvas SortWorker implementation exactly
    function SortWorker() {
      const compareBits = 16;
      const bucketCount = (2 ** compareBits) + 1;

      let order;
      let centers;
      let mapping;
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

        // Create distance buffer
        const numVertices = centers.length / 3;
        if (distances?.length !== numVertices) {
          distances = new Uint32Array(numVertices);
        }

        // Calc min/max distance using bound
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

        // Generate per vertex distance to camera
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

        // Change countBuffer[i] so that it contains actual position
        for (let i = 1; i < bucketCount; i++) {
          countBuffer[i] += countBuffer[i - 1];
        }

        // Build the output array
        for (let i = 0; i < numVertices; i++) {
          const distance = distances[i];
          const destIndex = --countBuffer[distance];
          order[destIndex] = i;
        }

        // Find splat with distance 0 to limit rendering behind the camera
        const dist = i => distances[order[i]] / divider + minDist;
        const findZero = () => {
          const result = binarySearch(0, numVertices - 1, i => -dist(i));
          return Math.min(numVertices, Math.abs(result));
        };
        const count = dist(numVertices - 1) >= 0 ? findZero() : numVertices;

        // Apply mapping
        if (mapping) {
          for (let i = 0; i < numVertices; ++i) {
            order[i] = mapping[order[i]];
          }
        }

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

          // Calculate bounds
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
        if (message.data.hasOwnProperty('mapping')) {
          mapping = message.data.mapping ? new Uint32Array(message.data.mapping) : null;
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
   * Update node before rendering
   */
  public nodeUpdate(
    view: View3D,
    passType: PassType,
    renderPassState: RendererPassState,
    clusterLightingBuffer?: ClusterLightingBuffer
  ) {
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
   * Render pass (fallback)
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
        
        // Bind geometry buffer AFTER apply
        GPUContext.bindGeometryBuffer(encoder, this.geometry);
        
        // Get subgeometry info
        const subGeometry = this.geometry.subGeometries[0];
        const lodInfo = subGeometry.lodLevels[0];
        
        // drawIndexed with instancing
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
    
    super.destroy(force);
  }
}

