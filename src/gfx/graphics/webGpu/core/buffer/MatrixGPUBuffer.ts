import { FloatArray } from "@rings/wasm-matrix/WasmMatrix";
import { webGPUContext } from "../../Context3D";
import { ArrayBufferData } from "./ArrayBufferData";
import { GPUBufferBase } from "./GPUBufferBase";
import { GPUBufferType } from "./GPUBufferType";

export class MatrixGPUBuffer extends GPUBufferBase {
  size: number;
  constructor(size: number, usage: number = 0, data?: ArrayBufferData) {
    super();
    this.bufferType = GPUBufferType.StorageGPUBuffer;
    this.size = size;
    this.createBuffer(
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | usage,
      size,
      data,
      "MatrixGPUBuffer"
    );
  }
  public writeBufferByHeap(floatArray: FloatArray, len: number) {
    let mapAsyncArray: Float32Array;
    if (floatArray instanceof Float64Array) {
      mapAsyncArray = new Float32Array(floatArray);
    } else {
      mapAsyncArray = floatArray as Float32Array;
    }
    let bytesLen = len;
    let device = webGPUContext.device;
    if (mapAsyncArray.length > 0) {
      let tBuffer: GPUBuffer = null;
      while (this.mapAsyncReady.length) {
        tBuffer = this.mapAsyncReady.shift();
        if (tBuffer["usedSize"] == mapAsyncArray.byteLength) break;
        tBuffer.destroy();
        this.mapAsyncBuffersOutstanding--;
        tBuffer = null;
      }
      if (!tBuffer) {
        tBuffer = device.createBuffer({
          size: mapAsyncArray.byteLength,
          usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE,
          mappedAtCreation: true,
        });
        tBuffer["usedSize"] = mapAsyncArray.byteLength;
        this.mapAsyncBuffersOutstanding++;
        if (this.mapAsyncBuffersOutstanding > 10) {
          console.warn(
            ` Warning: mapAsync requests from ${this.mapAsyncBuffersOutstanding} frames ago have not resolved yet.  MB of staging buffers allocated.`
          );
        }
      }
      let a = new Float32Array(
        mapAsyncArray.buffer,
        mapAsyncArray.byteOffset,
        len
      );
      let b = new Float32Array(tBuffer.getMappedRange(0, len * 4));
      b.set(a);
      tBuffer.unmap();
      const commandEncoder = device.createCommandEncoder();
      commandEncoder.copyBufferToBuffer(tBuffer, 0, this.buffer, 0, len * 4);
      // TODO: combine this submit with the main one, but we'll have to delay calling mapAsync until after the submit.
      device.queue.submit([commandEncoder.finish()]);
      // TODO: use this data during rendering.
      tBuffer
        .mapAsync(GPUMapMode.WRITE)
        .then(() => this.mapAsyncReady.push(tBuffer));
    }
  }
}
