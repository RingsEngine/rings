import { GaussianSplatAsset } from "../loader/parser/3dgs/GaussianSplatAsset";
import { Uint8ArrayTexture } from "../textures/Uint8ArrayTexture";
import { Uint32ArrayTexture } from "../textures/Uint32ArrayTexture";
import { Float16ArrayTexture } from "../textures/Float16ArrayTexture";
import { Vector2 } from "../math/Vector2";
import { toHalfFloat } from "../util/Convert";
import { Matrix4 } from "../math/Matrix4";
import { Vector3 } from "../math/Vector3";

export class GSplatRuntime {
  /** 所有实例的注册表，用于帧开始统一调度 */
  public static instances: Set<GSplatRuntime> = new Set();

  public count: number;
  public size: Vector2;
  public splatColor: Uint8ArrayTexture;
  public transformA: Uint32ArrayTexture;
  public transformB: Float16ArrayTexture;
  public texParams: Float32Array;
  public splatOrder: Uint32ArrayTexture;

  // cpu-side data for sorting
  private _positions: Float32Array; // xyz per splat
  private _orderData: Uint32Array; // RGBA32U backing: size.x * size.y * 4
  private _tmpPos: Vector3 = new Vector3();
  private _tmpCam: Vector3 = new Vector3();
  // worker-based sorting
  private _sortWorker: Worker;
  private _pendingReq: number = 0;
  private _requestSeq: number = 1;
  private _lastSentTime: number = 0;
  private _minIntervalMs: number = 33; // ~30 FPS throttle
  private _centersSent: boolean = false;

  // mapping（可选）：渲染子集及重映射
  private _mapping: Uint32Array | null = null;
  private _fullCount: number; // 记录原始总数

  constructor(asset: GaussianSplatAsset) {
    this.count = asset.count;
    this._fullCount = asset.count;
    this.size = this.evalTextureSize(asset.count);
    this.buildColor(asset);
    this.buildTransform(asset);
    // tex_params: [numSplats, texWidth, validCount, visBoost]
    this.texParams = new Float32Array([this.count, this.size.x, this.count, 2.0]);

    // cache positions for CPU sorting
    this._positions = asset.position;
    // create initial order texture [0..count-1], padded with last index
    const total = this.size.x * this.size.y;
    this._orderData = new Uint32Array(total * 4);
    for (let i = 0; i < total; i++) {
      const src = i < this.count ? i : (this.count > 0 ? this.count - 1 : 0);
      const base = i * 4;
      this._orderData[base + 0] = src;
      this._orderData[base + 1] = 0;
      this._orderData[base + 2] = 0;
      this._orderData[base + 3] = 0;
    }
    this.splatOrder = new Uint32ArrayTexture().create(this.size.x, this.size.y, this._orderData);
    this.splatOrder.name = "splatOrder";

    // 注册统一调度
    GSplatRuntime.instances.add(this);
  }

  private evalTextureSize(count: number): Vector2 {
    let w = Math.ceil(Math.sqrt(count));
    // align width so that row bytes are multiples of 256 for all target formats
    // RGBA8 (4B), RGBA16F (8B), RGBA32U (16B) -> width must be multiple of 64
    const align = 64;
    w = Math.ceil(w / align) * align;
    const h = Math.ceil(count / w);
    return new Vector2(w, h);
  }

  private buildColor(asset: GaussianSplatAsset) {
    const w = this.size.x | 0;
    const h = this.size.y | 0;
    const data = new Uint8Array(w * h * 4);
    const SH_C0 = 0.28209479177387814;
    const count = asset.count;
    const coeffs = asset.sh?.coeffs;
    // DC-only: use first coeff per channel if available, otherwise default 0
    const coeffsPerColor = coeffs ? (coeffs.length / (3 * count)) : 1;

    for (let i = 0; i < count; i++) {
      let r = 0.5, g = 0.5, b = 0.5;
      if (coeffs && coeffsPerColor >= 1) {
        // per-vertex packed layout: [R block][G block][B block]
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
  }

  private buildTransform(asset: GaussianSplatAsset) {
    const w = this.size.x | 0;
    const h = this.size.y | 0;
    const count = asset.count;

    // transformA: uint32 RGBA (xyz as floatBits, w packs half2 of covB.xy)
    const tA = new Uint32Array(w * h * 4);
    // transformB: half rgba16f (covA.xyz, covB.z)
    const tB = new Array<number>(w * h * 4).fill(0);

    // pack floatBits safely
    const fb = new ArrayBuffer(4);
    const f32 = new Float32Array(fb);
    const u32 = new Uint32Array(fb);
    const setFloatBits = (v: number) => {
      f32[0] = v;
      return u32[0];
    };

    const pos = asset.position;
    const rot = asset.rotation; // quat (optional)
    const scl = asset.scale;    // exp-space scale (optional)

    for (let i = 0; i < count; i++) {
      const idx = i * 4;
      const x = pos[i * 3 + 0];
      const y = pos[i * 3 + 1];
      const z = pos[i * 3 + 2];
      tA[idx + 0] = setFloatBits(x);
      tA[idx + 1] = setFloatBits(y);
      tA[idx + 2] = setFloatBits(z);

      // decode rotation (normalize if present)
      let qx = 0, qy = 0, qz = 0, qw = 1;
      if (rot) {
        qx = rot[i * 4 + 0];
        qy = rot[i * 4 + 1];
        qz = rot[i * 4 + 2];
        qw = rot[i * 4 + 3];
        const inv = 1.0 / Math.hypot(qx, qy, qz, qw);
        qx *= inv; qy *= inv; qz *= inv; qw *= inv;
      }

      // decode anisotropic scale (exp to linear) if present
      let sx = 1, sy = 1, sz = 1;
      if (scl) {
        sx = Math.exp(scl[i * 3 + 0]);
        sy = Math.exp(scl[i * 3 + 1]);
        sz = Math.exp(scl[i * 3 + 2]);
      }

      // rotation matrix from quaternion
      const xx = qx * qx, yy = qy * qy, zz = qz * qz;
      const xy = qx * qy, xz = qx * qz, yz = qy * qz;
      const wx = qw * qx, wy = qw * qy, wz = qw * qz;
      const m00 = 1 - 2 * (yy + zz);
      const m01 = 2 * (xy + wz);
      const m02 = 2 * (xz - wy);
      const m10 = 2 * (xy - wz);
      const m11 = 1 - 2 * (xx + zz);
      const m12 = 2 * (yz + wx);
      const m20 = 2 * (xz + wy);
      const m21 = 2 * (yz - wx);
      const m22 = 1 - 2 * (xx + yy);

      // scale rows
      const r00 = m00 * sx, r01 = m01 * sx, r02 = m02 * sx;
      const r10 = m10 * sy, r11 = m11 * sy, r12 = m12 * sy;
      const r20 = m20 * sz, r21 = m21 * sz, r22 = m22 * sz;

      // covariance terms
      const cAx = r00 * r00 + r10 * r10 + r20 * r20;
      const cAy = r00 * r01 + r10 * r11 + r20 * r21;
      const cAz = r00 * r02 + r10 * r12 + r20 * r22;

      const cBx = r01 * r01 + r11 * r11 + r21 * r21;
      const cBy = r01 * r02 + r11 * r12 + r21 * r22;
      const cBz = r02 * r02 + r12 * r12 + r22 * r22;

      // write transformB (covA.xyz, covB.z)
      const bidx = idx;
      tB[bidx + 0] = cAx;
      tB[bidx + 1] = cAy;
      tB[bidx + 2] = cAz;
      tB[bidx + 3] = cBz;

      // pack transformA.w as half2(cB.x, cB.y)
      const hx = toHalfFloat(cBx) & 0xffff;
      const hy = toHalfFloat(cBy) & 0xffff;
      tA[idx + 3] = hx | (hy << 16);
    }

    this.transformA = new Uint32ArrayTexture().create(w, h, tA);
    this.transformA.name = "transformA";
    this.transformB = new Float16ArrayTexture().create(w, h, tB, false);
    this.transformB.name = "transformB";
  }

  /**
   * 调度基于 Web Worker 的排序任务（按 viewZ 后到前）。
   * 会节流，且只保留最新请求。
   */
  public scheduleOrder(viewMatrix: Matrix4) {
    const count = this.count;
    if (count === 0) return;

    const now = performance.now();
    if (now - this._lastSentTime < this._minIntervalMs) return;
    this._lastSentTime = now;

    if (!this._sortWorker) {
      this._sortWorker = this.createSortWorker();
      this._sortWorker.onmessage = (ev: MessageEvent) => {
        const msg = ev.data;
        if (msg?.type !== 'sorted') return;
        if (msg.requestId !== this._pendingReq) return; // ignore stale
        const indicesBuf = msg.indices as ArrayBuffer;
        const indices = new Uint32Array(indicesBuf);
        // 写回 RGBA32Uint 索引纹理
        const total = this.size.x * this.size.y;
        const count = this.count;
        for (let i = 0; i < total; i++) {
          const src = i < count ? i : count - 1;
          const base = i * 4;
          this._orderData[base + 0] = indices[src];
          this._orderData[base + 1] = 0;
          this._orderData[base + 2] = 0;
          this._orderData[base + 3] = 0;
        }
        this.splatOrder.updateTexture(this.size.x, this.size.y, this._orderData);
        // 更新有效实例数（相机后方裁剪）
        const valid = Math.max(0, Math.min(this.count, msg.count | 0));
        this.texParams[2] = valid;
      };
    }

    const requestId = this._requestSeq++;
    this._pendingReq = requestId;

    // 计算相机位置与方向（-Z）
    const r = viewMatrix.rawData as any;
    const vx = r[2], vy = r[6], vz = r[10];
    const px = -(r[0] * r[12] + r[1] * r[13] + r[2] * r[14]);
    const py = -(r[4] * r[12] + r[5] * r[13] + r[6] * r[14]);
    const pz = -(r[8] * r[12] + r[9] * r[13] + r[10] * r[14]);

    // 首次发送 centers 到 Worker（Transferable），避免每帧拷贝
    if (!this._centersSent) {
      const centers = this._mapping ? new Float32Array(this._mapping.length * 3) : new Float32Array(this._positions);
      if (this._mapping) {
        for (let i = 0; i < this._mapping.length; ++i) {
          const src = this._mapping[i] * 3;
          const dst = i * 3;
          centers[dst + 0] = this._positions[src + 0];
          centers[dst + 1] = this._positions[src + 1];
          centers[dst + 2] = this._positions[src + 2];
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
    }

    // 发送排序请求（不 transfer positions，避免主线程失去所有权）
    this._sortWorker.postMessage(
      {
        type: 'sort_pc',
        cameraPosition: { x: px, y: py, z: pz },
        cameraDirection: { x: -vx, y: -vy, z: -vz },
        count: this.count,
        requestId,
      },
      []
    );
  }

  private createSortWorker(): Worker {
    function SortWorker() {
      const compareBits = 16;
      const bucketCount = (1 << compareBits) + 1;
      const epsilon = 0.001;

      /** @type {Float32Array|undefined} */
      let centers;
      /** @type {Uint32Array|undefined} */
      let order;
      /** @type {{x:number,y:number,z:number}|undefined} */
      let cameraPosition;
      /** @type {{x:number,y:number,z:number}|undefined} */
      let cameraDirection;
      /** @type {Uint32Array|null|undefined} */
      let mapping;
      /** @type {Uint32Array|undefined} */
      let distances;
      /** @type {Uint32Array|undefined} */
      let countBuffer;

      const lastPos = { x: 0, y: 0, z: 0 };
      const lastDir = { x: 0, y: 0, z: 0 };

      const binarySearch = (m, n, compare) => {
        while (m <= n) {
          const k = (n + m) >> 1;
          const c = compare(k);
          if (c > 0) m = k + 1;
          else if (c < 0) n = k - 1;
          else return k;
        }
        return ~m;
      };

      function update() {
        if (!order || !centers || !cameraPosition || !cameraDirection) return;

        const px = cameraPosition.x, py = cameraPosition.y, pz = cameraPosition.z;
        const dx = cameraDirection.x, dy = cameraDirection.y, dz = cameraDirection.z;

        if (
          Math.abs(px - lastPos.x) < epsilon &&
          Math.abs(py - lastPos.y) < epsilon &&
          Math.abs(pz - lastPos.z) < epsilon &&
          Math.abs(dx - lastDir.x) < epsilon &&
          Math.abs(dy - lastDir.y) < epsilon &&
          Math.abs(dz - lastDir.z) < epsilon
        ) {
          return;
        }

        lastPos.x = px; lastPos.y = py; lastPos.z = pz;
        lastDir.x = dx; lastDir.y = dy; lastDir.z = dz;

        const num = centers.length / 3;
        if (!distances || distances.length !== num) distances = new Uint32Array(num);
        if (!countBuffer) countBuffer = new Uint32Array(bucketCount); else countBuffer.fill(0);

        // bounds
        const boundMin = { x: centers[0], y: centers[1], z: centers[2] };
        const boundMax = { x: centers[0], y: centers[1], z: centers[2] };
        for (let i = 1; i < num; ++i) {
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

        // min/max projected distances
        let minDist, maxDist;
        for (let i = 0; i < 8; ++i) {
          const x = (i & 1 ? boundMin.x : boundMax.x) - px;
          const y = (i & 2 ? boundMin.y : boundMax.y) - py;
          const z = (i & 4 ? boundMin.z : boundMax.z) - pz;
          const d = x * dx + y * dy + z * dz;
          if (i === 0) { minDist = maxDist = d; }
          else { minDist = Math.min(minDist, d); maxDist = Math.max(maxDist, d); }
        }

        const range = maxDist - minDist;
        const divider = (range < 1e-6) ? 0 : 1 / range * (1 << compareBits);

        for (let i = 0; i < num; ++i) {
          const ix = i * 3;
          const x = centers[ix + 0] - px;
          const y = centers[ix + 1] - py;
          const z = centers[ix + 2] - pz;
          const d = x * dx + y * dy + z * dz;
          const key = Math.floor((d - minDist) * divider);
          distances[i] = key;
          countBuffer[key]++;
        }

        for (let i = 1; i < bucketCount; i++) countBuffer[i] += countBuffer[i - 1];
        for (let i = 0; i < num; i++) {
          const key = distances[i];
          const destIndex = --countBuffer[key];
          order[destIndex] = i;
        }

        const dist = (i) => distances[order[i]] / divider + minDist;
        const findZero = () => {
          const r = binarySearch(0, num - 1, (i) => -dist(i));
          return Math.min(num, Math.abs(r));
        };
        const valid = dist(num - 1) >= 0 ? findZero() : num;

        // 应用二次映射（将子集索引映射回原始 splat 索引）
        if (mapping) {
          for (let i = 0; i < num; ++i) {
            order[i] = mapping[order[i]];
          }
        }

        (self as any).postMessage({ type: 'sorted', requestId: pendingId, indices: order.buffer, count: valid }, [order.buffer]);
        order = undefined;
      }

      let pendingId = 0;
      onmessage = (e) => {
        const d = e.data; pendingId = d.requestId || pendingId;
        if (d.type === 'centers') {
          centers = new Float32Array(d.centers);
          // 可选的 mapping
          if (d.hasOwnProperty('mapping')) {
            mapping = d.mapping ? new Uint32Array(d.mapping) : null;
          }
          return;
        }
        if (d.type === 'mapping') {
          mapping = d.mapping ? new Uint32Array(d.mapping) : null;
          return;
        }
        if (d.type === 'sort_pc') {
          if (d.cameraPosition) cameraPosition = d.cameraPosition;
          if (d.cameraDirection) cameraDirection = d.cameraDirection;
          order = new Uint32Array(d.count | 0);
          update();
        }
      };
    }

    const code = `(${SortWorker.toString()})()`;
    const blob = new Blob([code], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    return new Worker(url);
  }

  /**
   * 设置渲染子集映射。传入 null/undefined 取消映射。
   */
  public setMapping(mapping?: Uint32Array | null) {
    // 记录映射
    this._mapping = mapping && mapping.length > 0 ? mapping : null;

    // 更新当前实例渲染数量与 tex_params[0]
    this.count = this._mapping ? this._mapping.length : this._fullCount;
    this.texParams[0] = this.count;
    // 在下一次排序前，先将 validCount 复位到当前 count，避免一帧空窗
    this.texParams[2] = Math.min(this.texParams[0], this.count);

    // 初始化 order 纹理到 [0..count-1]
    const total = this.size.x * this.size.y;
    for (let i = 0; i < total; i++) {
      const src = i < this.count ? i : (this.count > 0 ? this.count - 1 : 0);
      const base = i * 4;
      this._orderData[base + 0] = src;
      this._orderData[base + 1] = 0;
      this._orderData[base + 2] = 0;
      this._orderData[base + 3] = 0;
    }
    this.splatOrder.updateTexture(this.size.x, this.size.y, this._orderData);

    // 组装新的 centers（子集或全量）并发送到 Worker
    if (this._sortWorker) {
      const centers = this._mapping ? new Float32Array(this._mapping.length * 3) : new Float32Array(this._positions);
      if (this._mapping) {
        for (let i = 0; i < this._mapping.length; ++i) {
          const src = this._mapping[i] * 3;
          const dst = i * 3;
          centers[dst + 0] = this._positions[src + 0];
          centers[dst + 1] = this._positions[src + 1];
          centers[dst + 2] = this._positions[src + 2];
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
      // 强制下次 scheduleOrder 发送 centers
      this._centersSent = false;
    }
  }

  /** 设置可见性放大系数（材质 uniform tex_params.w）。*/
  public setVisBoost(v: number) {
    this.texParams[3] = Math.max(0.0, v);
  }

  /** 设置排序节流间隔（毫秒）。*/
  public setSortThrottle(ms: number) {
    this._minIntervalMs = Math.max(0, (ms | 0));
  }

  /**
   * 帧开始统一调度：对所有实例按给定视图矩阵发起排序任务。
   */
  public static scheduleAll(viewMatrix: Matrix4) {
    if (!this.instances || this.instances.size === 0) return;
    for (const inst of this.instances) {
      inst.scheduleOrder(viewMatrix);
    }
  }
}


