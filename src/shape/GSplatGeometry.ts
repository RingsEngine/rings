import { GeometryBase } from "../core/geometry/GeometryBase";
import { VertexAttributeName } from "../core/geometry/VertexAttributeName";

/**
 * GSplat Geometry
 * - batchSize splats per draw call (default 128)
 * - Each splat = 4 vertices (x, y, local_index)
 * - Each splat = 6 indices (2 triangles)
 */
export class GSplatGeometry extends GeometryBase {
  public batchSize: number;
  
  constructor(batchSize: number = 128) {
    super();
    
    this.batchSize = batchSize;
    
    // Build vertex positions
    // Each vertex: (x, y, local_splat_index)
    const meshPositions = new Float32Array(12 * batchSize);
    for (let i = 0; i < batchSize; ++i) {
      meshPositions.set([
        -2, -2, i,
         2, -2, i,
         2,  2, i,
        -2,  2, i
      ], i * 12);
    }
    
    // Build index buffer
    const meshIndices = new Uint32Array(6 * batchSize);
    for (let i = 0; i < batchSize; ++i) {
      const b = i * 4;
      meshIndices.set([
        0 + b, 1 + b, 2 + b,
        0 + b, 2 + b, 3 + b
      ], i * 6);
    }
    
    this.setAttribute(VertexAttributeName.position, meshPositions);
    this.setIndices(meshIndices);
    
    this.addSubGeometry({
      indexStart: 0,
      indexCount: meshIndices.length,
      vertexStart: 0,
      vertexCount: meshPositions.length / 3,
      firstStart: 0,
      index: 0,
      topology: 0
    });
  }
}
