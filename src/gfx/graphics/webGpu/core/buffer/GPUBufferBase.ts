import { ArrayBufferData } from "./ArrayBufferData";
import { GPUBufferType } from "./GPUBufferType";
import { Color } from "../../../../../math/Color";
import { Matrix4 } from "../../../../../math/Matrix4";
import { Quaternion } from "../../../../../math/Quaternion";
import { Vector2 } from "../../../../../math/Vector2";
import { Vector3 } from "../../../../../math/Vector3";
import { Vector4 } from "../../../../../math/Vector4";
import { Struct } from "../../../../../util/struct/Struct";
import { webGPUContext } from "../../Context3D";
import { MemoryDO } from "../../../../../core/pool/memory/MemoryDO";
import { MemoryInfo } from "../../../../../core/pool/memory/MemoryInfo";
import { FloatArray } from "@rings/wasm-matrix/WasmMatrix";

export class GPUBufferBase {
  public bufferType: GPUBufferType;
  public buffer: GPUBuffer;
  public memory: MemoryDO;
  public memoryNodes: Map<string | number, MemoryInfo>;
  public seek: number;
  public outFloat32Array: Float32Array;
  public byteSize: number;
  public usage: GPUBufferUsageFlags;
  public visibility: number =
    GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE;
  protected mapAsyncBuffersOutstanding = 0;
  protected mapAsyncReady: GPUBuffer[];
  private _readBuffer: GPUBuffer;
  private _dataView: Float32Array;

  constructor() {
    this.mapAsyncReady = [];
  }

  public debug() {}

  public reset(clean: boolean = false, size: number = 0, data?: Float32Array) {
    this.seek = 0;
    this.memory.reset();
    if (clean) {
      this.createBuffer(this.usage, size, data);
    }
  }

  public setBoolean(name: string, v: boolean) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(1 * 4);
      this.memoryNodes.set(name, node);
    }
    node.setX(v ? 1 : 0);
  }

  public readBoole(name: string): boolean {
    let node = this.memoryNodes.get(name);
    if (node) {
      return node.getFloat() == 0 ? false : true;
    }
    return null;
  }

  public setFloat(name: string, v: number) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(1 * 4);
      this.memoryNodes.set(name, node);
    }
    node.setX(v);
  }

  public getFloat(name: string): number {
    let node = this.memoryNodes.get(name);
    if (node) {
      return node.getFloat();
    }
    return null;
  }

  public setInt8(name: string, v: number) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(1 * 1);
      this.memoryNodes.set(name, node);
    }
    node.setInt8(v);
  }

  public getInt8(name: string): number {
    let node = this.memoryNodes.get(name);
    if (node) {
      return node.getInt8();
    }
    return null;
  }

  public setInt16(name: string, v: number) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(1 * 2);
      this.memoryNodes.set(name, node);
    }
    node.setInt16(v);
  }

  public getInt16(name: string): number {
    let node = this.memoryNodes.get(name);
    if (node) {
      return node.getInt16();
    }
    return null;
  }

  public setInt32(name: string, v: number) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(1 * 4);
      this.memoryNodes.set(name, node);
    }
    node.setInt32(v);
  }

  public getInt32(name: string): number {
    let node = this.memoryNodes.get(name);
    if (node) {
      return node.getInt32();
    }
    return null;
  }

  public setUint8(name: string, v: number) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(1 * 1);
      this.memoryNodes.set(name, node);
    }
    node.setUint8(v);
  }

  public getUint8(name: string): number {
    let node = this.memoryNodes.get(name);
    if (node) {
      return node.getUint8();
    }
    return null;
  }

  public setUint16(name: string, v: number) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(1 * 2);
      this.memoryNodes.set(name, node);
    }
    node.setUint16(v);
  }

  public getUint16(name: string): number {
    let node = this.memoryNodes.get(name);
    if (node) {
      return node.getUint16();
    }
    return null;
  }

  public setUint32(name: string, v: number) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(1 * 4);
      this.memoryNodes.set(name, node);
    }
    node.setUint32(v);
  }

  public getUint32(name: string): number {
    let node = this.memoryNodes.get(name);
    if (node) {
      return node.getUint32();
    }
    return null;
  }

  public setVector2(name: string, v2: Vector2) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(2 * 4);
      this.memoryNodes.set(name, node);
    }
    node.setXY(v2.x, v2.y);
  }

  public getVector2(name: string): Vector2 {
    let node = this.memoryNodes.get(name);
    if (node) {
      return new Vector2(node.x, node.y);
    }
    return null;
  }

  public setVector3(name: string, v3: Vector3) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(3 * 4);
      this.memoryNodes.set(name, node);
    }
    node.setXYZ(v3.x, v3.y, v3.z);
  }

  public getVector3(name: string): Vector3 {
    let node = this.memoryNodes.get(name);
    if (node) {
      return new Vector3(node.x, node.y, node.z);
    }
    return null;
  }

  public setVector4(name: string, v4: Vector4 | Quaternion) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(4 * 4);
      this.memoryNodes.set(name, node);
    }
    node.setXYZW(v4.x, v4.y, v4.z, v4.w);
  }

  public getVector4(name: string): Vector4 {
    let node = this.memoryNodes.get(name);
    if (node) {
      return new Vector4(node.x, node.y, node.z, node.w);
    }
    return null;
  }

  public setVector4Array(
    name: string,
    v4Array: Vector3[] | Vector4[] | Quaternion[]
  ) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(4 * 4 * v4Array.length);
      this.memoryNodes.set(name, node);
    }
    node.setVector4Array(v4Array);
  }

  public setColor(name: string, color: Color) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(4 * 4);
      this.memoryNodes.set(name, node);
    }
    node.setXYZW(color.r, color.g, color.b, color.a);
  }

  public getColor(name: string): Color {
    let node = this.memoryNodes.get(name);
    if (node) {
      return new Color(node.x, node.y, node.z, node.w);
    }
    return null;
  }

  public setColorArray(name: string, colorArray: Color[]) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(4 * 4 * colorArray.length);
      this.memoryNodes.set(name, node);
    }
    node.setColorArray(colorArray);
  }

  public setMatrix(name: string, mat: Matrix4) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(16 * 4);
      this.memoryNodes.set(name, node);
    }

    node.setFloatArray(0, mat.rawData);
  }

  public setMatrixArray(name: string, mats: Matrix4[]) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(16 * 4 * mats.length);
      this.memoryNodes.set(name, node);
    }
    for (let i = 0; i < mats.length; i++) {
      const mat = mats[i];
      node.setFloatArray(i * 16, mat.rawData);
    }
  }

  public setArray(name: string, data: number[]) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(data.length * 4);
      this.memoryNodes.set(name, node);
    }
    node.setArray(0, data);
  }

  public setFloat32Array(name: string, data: Float32Array) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(data.length * 4);
      this.memoryNodes.set(name, node);
    }
    node.setFloat32Array(0, data);
  }

  public setInt32Array(name: string, data: Int32Array) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(data.length * 4);
      this.memoryNodes.set(name, node);
    }
    node.setInt32Array(0, data);
  }

  public setUint32Array(name: string, data: Uint32Array) {
    let node = this.memoryNodes.get(name);
    if (!node) {
      node = this.memory.allocation_node(data.length * 4);
      this.memoryNodes.set(name, node);
    }
    node.setUint32Array(0, data);
  }

  public setStruct<T extends Struct>(
    c: { new (): T },
    index: number,
    data: any,
    property?: string
  ) {
    let ref = Struct.Ref(c);
    let size = Struct.GetSize(c);

    let name = index;
    let node = this.memoryNodes.get(name);
    node.reset();

    let obj = data;
    if (property) {
      obj = obj[property];
    }

    for (let i = 0; i < ref.length; i++) {
      const att = ref[i];
      let value = obj[att.name];
      this.writeValue(node, att, value);
    }
  }

  private writeValue(
    node: MemoryInfo,
    att: { name: string; type: string },
    value: any
  ) {
    switch (att.type) {
      case `Boolean`:
        node.writeFloat(value);
        break;

      case `Number`:
        node.writeFloat(value);
        break;

      case `Float32Array`:
        node.writeFloat32Array(value);
        break;

      case `Float64Array`:
        node.writeFloat32Array(new Float32Array(value));
        break;

      case `Vector2`:
        node.writeVector2(value);
        break;

      case `Vector3`:
        node.writeVector3(value);
        break;

      case `Vector4`:
        node.writeVector4(value);
        break;

      case `Color`:
        node.writeRGBColor(value);
        break;

      case `Array`:
        node.writeArray(value);
        break;
    }
  }

  public setStructArray<T extends Struct>(
    c: { new (): T },
    dataList: any[],
    property?: string
  ) {
    let len = dataList.length;
    for (let i = 0; i < len; i++) {
      const data = dataList[i];
      this.setStruct(c, i, data, property);
    }
  }

  public clean() {
    this._dataView.fill(0, 0, this._dataView.length);
  }

  public apply() {
    webGPUContext.device.queue.writeBuffer(
      this.buffer,
      0,
      this.memory.shareDataBuffer
    ); //, this.memory.shareFloat32Array.byteOffset, this.memory.shareFloat32Array.byteLength);
  }

  public mapAsyncWrite(floatArray: FloatArray, len: number) {
    let mapAsyncArray: Float32Array;
    if (floatArray instanceof Float64Array) {
      mapAsyncArray = new Float32Array(floatArray);
    } else {
      mapAsyncArray = floatArray as Float32Array;
    }
    // Upload data using mapAsync and a queue of staging buffers.
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

        if (this.mapAsyncBuffersOutstanding > 20) {
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

  public destroy(force?: boolean) {
    if (this.memoryNodes) {
      this.memoryNodes.forEach((v) => {
        v.destroy();
      });
    }

    this.bufferType = null;
    this.seek = null;
    this.byteSize = null;
    this.usage = null;
    this.visibility = null;

    this.outFloat32Array = null;
    if (this.buffer) {
      this.buffer.destroy();
    }
    this.buffer = null;

    if (this.memory) {
      this.memory.destroy();
    }
    this.memory = null;

    if (this._readBuffer) {
      this._readBuffer.destroy();
    }
  }

  protected createBuffer(
    usage: GPUBufferUsageFlags,
    size: number,
    data?: ArrayBufferData,
    debugLabel?: string
  ) {
    let device = webGPUContext.device;

    if (this.buffer) {
      this.destroy();
    }

    this.byteSize = size * 4;
    this.usage = usage;

    this.buffer = device.createBuffer({
      label: debugLabel,
      size: this.byteSize,
      usage: usage,
      mappedAtCreation: false,
    });

    this.memory = new MemoryDO();
    this.memoryNodes = new Map<string | number, MemoryInfo>();
    this._dataView = new Float32Array(this.memory.shareDataBuffer);
    this.memory.allocation(this.byteSize);
    if (data) {
      let m = this.memory.allocation_node(data.length * 4);
      m.setArrayBuffer(0, data);
      this.apply();
    }
  }

  public resizeBuffer(size: number, data?: ArrayBufferData) {
    this.createBuffer(this.usage, size, data);
  }

  protected createNewBuffer(
    usage: GPUBufferUsageFlags,
    size: number
  ): GPUBuffer {
    let device = webGPUContext.device;
    let tByteSize = size * 4;
    let tUsage = usage;
    if (this.buffer) {
      this.destroy();
    }
    let buffer = device.createBuffer({
      size: tByteSize,
      usage: tUsage,
      mappedAtCreation: false,
    });
    return buffer;
  }

  protected createBufferByStruct<T extends Struct>(
    usage: GPUBufferUsageFlags,
    struct: { new (): T },
    count: number
  ) {
    let structSize = Struct.GetSize(struct);
    let totalLength = structSize * count;

    let device = webGPUContext.device;
    this.buffer = device.createBuffer({
      label: "StructStorageGPUBuffer",
      size: totalLength,
      // size: totalLength * 4,
      usage: usage,
      mappedAtCreation: false,
    });

    this.memory = new MemoryDO();
    this.memoryNodes = new Map<string | number, MemoryInfo>();
    this._dataView = new Float32Array(this.memory.shareDataBuffer);
    this.memory.allocation(totalLength);
    for (let i = 0; i < count; i++) {
      let name = i;

      let node = this.memoryNodes.get(name);
      if (!node) {
        node = this.memory.allocation_node(structSize);
        this.memoryNodes.set(name, node);
      }
    }
  }

  public readBuffer(): Float32Array;
  public readBuffer(promise: false): Float32Array;
  public readBuffer(promise: true): Promise<Float32Array>;
  public readBuffer(promise = false) {
    this.outFloat32Array ||= new Float32Array(
      this.memory.shareDataBuffer.byteLength / 4
    );

    if (!this._readBuffer) {
      this._readBuffer = webGPUContext.device.createBuffer({
        size: this.memory.shareDataBuffer.byteLength,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
        mappedAtCreation: false,
      });
    }

    let p = this.read();
    return promise ? p : this.outFloat32Array;
  }

  private _readFlag: boolean = false;
  private async read() {
    if (!this._readFlag) {
      this._readFlag = true;

      let command = webGPUContext.device.createCommandEncoder();
      command.copyBufferToBuffer(
        this.buffer,
        0,
        this._readBuffer,
        0,
        this.memory.shareDataBuffer.byteLength
      );
      webGPUContext.device.queue.submit([command.finish()]);

      await this._readBuffer.mapAsync(GPUMapMode.READ);
      const copyArrayBuffer = this._readBuffer.getMappedRange();
      this.outFloat32Array.set(new Float32Array(copyArrayBuffer), 0);
      this._readBuffer.unmap();
      this._readFlag = false;
    }
    return this.outFloat32Array;
  }
}
