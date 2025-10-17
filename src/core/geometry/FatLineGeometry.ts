import { BoundingBox } from "../bound/BoundingBox";
import { GeometryBase } from "./GeometryBase";
import { VertexAttributeName } from "./VertexAttributeName";
import { Vector3 } from "../../math/Vector3";
import { StorageGPUBuffer } from "../../gfx/graphics/webGpu/core/buffer/StorageGPUBuffer";


/**
 * FatLine Geometry
 * Using instance rendering, each line segment as an instance
 * @group Geometry
 */
export class FatLineGeometry extends GeometryBase {
  private _instanceBuffer: StorageGPUBuffer;
  private _instanceData: Float32Array;
  private _instanceCount: number = 0;

  constructor() {
    super();
    this.initBaseGeometry();
  }

  /**
   * Initialize base quad geometry (shared by all line segments)
   * This is similar to ThreeJS LineSegmentsGeometry base geometry
   */
  private initBaseGeometry() {
    // Base quad positions (8 vertices for rounded endcaps)
    // position.x: -1 or 1 (controls offset direction)
    // position.y: values from -1 to 2 (controls segment position and endcaps)
    const positions = new Float32Array([
      -1, 2, 0, 1, 2, 0, // Top endcap
      -1, 1, 0, 1, 1, 0, // Top of line segment
      -1, 0, 0, 1, 0, 0, // Bottom of line segment
      -1, -1, 0, 1, -1, 0, // Bottom endcap
    ]);

    // UV coordinates for endcap rendering
    const uvs = new Float32Array([
      -1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2,
    ]);

    // Indices for 6 triangles
    const indices = new Uint16Array([
      0, 2, 1, 2, 3, 1, // First quad
      2, 4, 3, 4, 5, 3, // Second quad
      4, 6, 5, 6, 7, 5, // Third quad
    ]);

    this.setIndices(indices);
    this.setAttribute(VertexAttributeName.position, positions);
    this.setAttribute(VertexAttributeName.uv, uvs);

    // Note: instanceCount will be set later in setPositions()
    this.addSubGeometry({
      indexStart: 0,
      indexCount: indices.length,
      vertexStart: 0,
      vertexCount: positions.length / 3,
      firstStart: 0,
      index: 0,
      topology: 0,
    });
  }


  /**
   * Set line positions from continuous points array
   * @param positions Array of positions [x1,y1,z1, x2,y2,z2, ...]
   */
  public setPositions(positions: Float32Array | number[]) {
    const posArray =
      positions instanceof Float32Array
        ? positions
        : new Float32Array(positions);

    // Convert continuous points to line segments
    // [p0, p1, p2, ...] -> [(p0,p1), (p1,p2), ...]
    const numPoints = posArray.length / 3;
    const numSegments = numPoints - 1;

    if (numSegments <= 0) {
      console.warn("FatLineGeometry: Need at least 2 points");
      return this;
    }

    // Create instance data: 16 floats per instance (start, end, colorStart, colorEnd)
    const instanceData = new Float32Array(numSegments * 16);

    for (let i = 0; i < numSegments; i++) {
      const i0 = i * 3;
      const i1 = (i + 1) * 3;

      // Start position (vec3 + padding)
      instanceData[i * 16 + 0] = posArray[i0 + 0];
      instanceData[i * 16 + 1] = posArray[i0 + 1];
      instanceData[i * 16 + 2] = posArray[i0 + 2];
      instanceData[i * 16 + 3] = 0.0; // padding

      // End position (vec3 + padding)
      instanceData[i * 16 + 4] = posArray[i1 + 0];
      instanceData[i * 16 + 5] = posArray[i1 + 1];
      instanceData[i * 16 + 6] = posArray[i1 + 2];
      instanceData[i * 16 + 7] = 0.0; // padding

      // Default colors (white) - colorStart (vec3 + padding)
      instanceData[i * 16 + 8] = 1.0;  // colorStart.r
      instanceData[i * 16 + 9] = 1.0;  // colorStart.g
      instanceData[i * 16 + 10] = 1.0; // colorStart.b
      instanceData[i * 16 + 11] = 0.0; // padding

      // colorEnd (vec3 + padding)
      instanceData[i * 16 + 12] = 1.0; // colorEnd.r
      instanceData[i * 16 + 13] = 1.0; // colorEnd.g
      instanceData[i * 16 + 14] = 1.0; // colorEnd.b
      instanceData[i * 16 + 15] = 0.0; // padding
    }

    this._instanceData = instanceData;
    this._instanceCount = numSegments;

    this.computeBoundingBox(posArray);

    return this;
  }

  /**
   * Set colors for line segments
   * @param colors Array of colors [r1,g1,b1, r2,g2,b2, ...] for each point
   */
  public setColors(colors: Float32Array | number[]) {
    const colorArray =
      colors instanceof Float32Array ? colors : new Float32Array(colors);

    if (!this._instanceData) {
      console.warn(
        "FatLineGeometry: Must call setPositions() before setColors()"
      );
      return this;
    }

    const numPoints = colorArray.length / 3;
    const numSegments = numPoints - 1;

    if (numSegments !== this._instanceCount) {
      console.warn(
        "FatLineGeometry: Color array length doesn't match segment count"
      );
      return this;
    }

    for (let i = 0; i < numSegments; i++) {
      const i0 = i * 3;
      const i1 = (i + 1) * 3;

      // colorStart (vec3 + padding)
      this._instanceData[i * 16 + 8] = colorArray[i0 + 0];
      this._instanceData[i * 16 + 9] = colorArray[i0 + 1];
      this._instanceData[i * 16 + 10] = colorArray[i0 + 2];

      // colorEnd (vec3 + padding)
      this._instanceData[i * 16 + 12] = colorArray[i1 + 0];
      this._instanceData[i * 16 + 13] = colorArray[i1 + 1];
      this._instanceData[i * 16 + 14] = colorArray[i1 + 2];
    }

    return this;
  }

  /**
   * Compute bounding box from positions
   */
  private computeBoundingBox(positions: Float32Array) {
    const min = new Vector3(Infinity, Infinity, Infinity);
    const max = new Vector3(-Infinity, -Infinity, -Infinity);

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      min.x = Math.min(min.x, x);
      min.y = Math.min(min.y, y);
      min.z = Math.min(min.z, z);

      max.x = Math.max(max.x, x);
      max.y = Math.max(max.y, y);
      max.z = Math.max(max.z, z);
    }

    const size = Vector3.sub(max, min);
    this.bounds = new BoundingBox(Vector3.ZERO.clone(), size);
    this.bounds.setFromMinMax(min, max);
  }

  /**
   * Get instance data for GPU upload
   */
  public get instanceData(): Float32Array {
    return this._instanceData;
  }

  /**
   * Get number of line segments (instances)
   */
  public get instanceCount(): number {
    return this._instanceCount;
  }

  /**
   * Get or create instance buffer
   */
  public get instanceBuffer(): StorageGPUBuffer {
    if (!this._instanceBuffer && this._instanceData) {
      this._instanceBuffer = new StorageGPUBuffer(
        this._instanceData.byteLength
      );
      this._instanceBuffer.setFloat32Array("", this._instanceData);
      this._instanceBuffer.apply();
    }
    return this._instanceBuffer;
  }

  /**
   * Update instance buffer with new data
   */
  public updateInstanceBuffer() {
    if (this._instanceBuffer && this._instanceData) {
      this._instanceBuffer.setFloat32Array("", this._instanceData);
      this._instanceBuffer.apply();
    }
  }
}

