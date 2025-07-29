import { GPUBufferBase } from "../core/buffer/GPUBufferBase";
import { UUID } from "../../../../util/Global";
import { Color } from "../../../../math/Color";
import { Vector2 } from "../../../../math/Vector2";
import { Vector3 } from "../../../../math/Vector3";
import { Vector4 } from "../../../../math/Vector4";
import { Struct } from "../../../../util/struct/Struct";
import { StorageGPUBuffer } from "../core/buffer/StorageGPUBuffer";
import { StructStorageGPUBuffer } from "../core/buffer/StructStorageGPUBuffer";
import { UniformGPUBuffer } from "../core/buffer/UniformGPUBuffer";
import { UniformNode } from "../core/uniforms/UniformNode";
import { ShaderReflection } from "./value/ShaderReflectionInfo";
import { UniformValue } from "./value/UniformValue";
import { MaterialDataUniformGPUBuffer } from "../core/buffer/MaterialDataUniformGPUBuffer";

export class ShaderPassBase {
  public readonly instanceID: string;
  public shaderVariant: string;
  public vsEntryPoint: string = `main`;
  public fsEntryPoint: string = `main`;
  public bindGroups: GPUBindGroup[];
  public shaderReflection: ShaderReflection;
  public defineValue: { [name: string]: any };
  public constValues: { [name: string]: any };
  public uniforms: { [name: string]: UniformNode };
  public materialDataUniformBuffer: MaterialDataUniformGPUBuffer;
  protected _bufferDic: Map<string, GPUBufferBase>;
  protected _shaderChange: boolean = true;
  protected _valueChange: boolean = false;

  constructor() {
    this.instanceID = UUID();
    this.defineValue = {};
    this.constValues = {};
    this.uniforms = {};
    this._bufferDic = new Map<string, GPUBufferBase>();
  }

  public noticeShaderChange() {
    this._shaderChange = true;
  }

  public noticeValueChange() {
    this._valueChange = true;
  }

  public setStorageBuffer(name: string, buffer: StorageGPUBuffer) {
    if (!this._bufferDic.has(name)) {
      this._bufferDic.set(name, buffer);
      this.noticeBufferChange(name);
    } else {
      this._bufferDic.set(name, buffer);
    }
  }

  public setStructStorageBuffer<T extends Struct>(
    name: string,
    buffer: StructStorageGPUBuffer<T>
  ) {
    if (this._bufferDic.has(name)) {
      this._bufferDic.set(name, buffer);
      this.noticeBufferChange(name);
    } else {
      this._bufferDic.set(name, buffer);
    }
  }

  public setUniformBuffer(name: string, buffer: UniformGPUBuffer) {
    if (this._bufferDic.has(name)) {
      this._bufferDic.set(name, buffer);
      this.noticeBufferChange(name);
    } else {
      this._bufferDic.set(name, buffer);
    }
  }

  public setDefine(defineName: string, value: any) {
    if (
      this.defineValue[defineName] == null ||
      this.defineValue[defineName] != value
    ) {
      this.defineValue[defineName] = value;
      this.noticeValueChange();
      this.noticeShaderChange();
    }
    this.defineValue[defineName] = value;
  }

  public hasDefine(defineName: string) {
    return this.defineValue[defineName] != null;
  }

  public deleteDefine(defineName: string) {
    delete this.defineValue[defineName];
    this.noticeShaderChange();
  }

  public setUniformFloat(name: string, value: number) {
    if (!this.uniforms[name]) {
      this.uniforms[name] = new UniformNode(value);
      this.noticeValueChange();
    } else {
      this.uniforms[name].value = value;
    }
  }

  public setUniformVector2(name: string, value: Vector2) {
    if (!this.uniforms[name]) {
      this.uniforms[name] = new UniformNode(value);
      this.noticeValueChange();
    } else {
      this.uniforms[name].vector2 = value;
    }
  }

  public setUniformVector3(name: string, value: Vector3) {
    if (!this.uniforms[name]) {
      this.uniforms[name] = new UniformNode(value);
    } else {
      this.uniforms[name].vector3 = value;
    }
  }

  public setUniformVector4(name: string, value: Vector4) {
    if (!this.uniforms[name]) {
      this.uniforms[name] = new UniformNode(value);
    } else {
      this.uniforms[name].vector4 = value;
    }
  }

  public setUniformColor(name: string, value: Color) {
    if (!this.uniforms[name]) {
      this.uniforms[name] = new UniformNode(value);
    } else {
      this.uniforms[name].color = value;
    }
  }

  public setUniformArray(name: string, value: Float32Array) {
    if (!this.uniforms[name]) {
      this.uniforms[name] = new UniformNode(value);
    } else {
      this.uniforms[name].float32Array(value);
    }
  }

  public setUniform(name: string, value: UniformValue) {
    if (!this.uniforms[name]) {
      this.uniforms[name] = new UniformNode(value);
    } else {
      this.uniforms[name].data = value;
    }
  }

  public getUniform(name: string): UniformValue {
    return this.uniforms[name].data;
  }

  public getUniformFloat(name: string): number {
    return this.uniforms[name].data;
  }

  public getUniformVector2(name: string): Vector2 {
    return this.uniforms[name].data;
  }

  public getUniformVector3(name: string): Vector3 {
    return this.uniforms[name].data;
  }

  public getUniformVector4(name: string): Vector4 {
    return this.uniforms[name].data;
  }

  public getUniformColor(name: string): Color {
    return this.uniforms[name].color;
  }

  public getBuffer(name: string): GPUBufferBase {
    return this._bufferDic[name].data;
  }

  protected noticeBufferChange(name: string) {}

  public applyUniform() {
    if (this.materialDataUniformBuffer && this._valueChange) {
      this.materialDataUniformBuffer.apply();
    }
  }

  public destroy(force?: boolean) {}
}
