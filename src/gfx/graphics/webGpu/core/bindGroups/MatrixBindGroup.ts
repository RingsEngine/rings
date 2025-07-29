import { Matrix4 } from "../../../../../math/Matrix4";
import { UUID } from "../../../../../util/Global";
import { MatrixGPUBuffer } from "../buffer/MatrixGPUBuffer";

export class MatrixBindGroup {
  public uuid: string;
  public index: number;
  public usage: number;
  public groupBufferSize: number;
  public matrixBufferDst: MatrixGPUBuffer;
  constructor() {
    this.uuid = UUID();
    this.groupBufferSize = 0;
    this.usage = GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST;
    this.cacheWorldMatrix();
  }

  private cacheWorldMatrix() {
    this.groupBufferSize = Matrix4.maxCount * Matrix4.blockBytes;
    this.matrixBufferDst = new MatrixGPUBuffer(this.groupBufferSize / 4);
    this.matrixBufferDst.visibility =
      GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE;
    this.matrixBufferDst.buffer.label = this.groupBufferSize.toString();
  }

  writeBuffer(len: number) {
    const matBytes = Matrix4.dynamicMatrixBytes;
    this.matrixBufferDst.mapAsyncWrite(matBytes, len);
  }
}
