import { GeometryBase } from "../core/geometry/GeometryBase";
import { VertexAttributeName } from "../core/geometry/VertexAttributeName";

export class PointCloudGeometry extends GeometryBase {
  public batchSize: number;
  
  constructor(batchSize: number = 128) {
    super();
    
    this.batchSize = batchSize;
    
    const meshPositions = new Float32Array(12 * batchSize);
    for (let i = 0; i < batchSize; ++i) {
      const baseIdx = i * 12;
      meshPositions.set([
        -1, -1, i,
         1, -1, i,
         1,  1, i,
        -1,  1, i
      ], baseIdx);
    }
    
    const meshIndices = new Uint32Array(6 * batchSize);
    for (let i = 0; i < batchSize; ++i) {
      const baseVertex = i * 4;
      const baseIdx = i * 6;
      meshIndices.set([
        0 + baseVertex, 1 + baseVertex, 2 + baseVertex,
        0 + baseVertex, 2 + baseVertex, 3 + baseVertex
      ], baseIdx);
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

