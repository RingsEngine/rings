import { Picker_cs } from "../../assets/shader/compute/Picker_cs";
import { View3D } from "../../core/View3D";
import { GlobalBindGroup } from "../../gfx/graphics/webGpu/core/bindGroups/GlobalBindGroup";
import { ComputeGPUBuffer } from "../../gfx/graphics/webGpu/core/buffer/ComputeGPUBuffer";
import { ComputeShader } from "../../gfx/graphics/webGpu/shader/ComputeShader";
import { GPUContext } from "../../gfx/renderJob/GPUContext";
import { GBufferFrame } from "../../gfx/renderJob/frame/GBufferFrame";
import { Vector2 } from "../../math/Vector2";
import { Vector3 } from "../../math/Vector3";

export class PickCompute {
  private _computeShader: ComputeShader;
  private _outBuffer: ComputeGPUBuffer;
  constructor() {}

  public init() {
    let rtFrame = GBufferFrame.getGBufferFrame(GBufferFrame.colorPass_GBuffer);
    this._computeShader = new ComputeShader(Picker_cs);

    this._outBuffer = new ComputeGPUBuffer(32);
    this._computeShader.setStorageBuffer("outBuffer", this._outBuffer);
    this._computeShader.setSamplerTexture(
      "gBufferTexture",
      rtFrame.getCompressGBufferTexture()
    );
  }

  compute(view: View3D) {
    let stand = GlobalBindGroup.getCameraGroup(view.camera);
    this._computeShader.setStorageBuffer(
      "globalUniform",
      stand.uniformGPUBuffer
    );

    let command = GPUContext.beginCommandEncoder();
    GPUContext.computeCommand(command, [this._computeShader]);
    GPUContext.endCommandEncoder(command);
    this._outBuffer.readBuffer();
  }

  public getPickMeshID(): number {
    var meshID = this._outBuffer.outFloat32Array[0] + 0.1;
    return Math.floor(meshID);
  }

  public getPickWorldPosition(target?: Vector3): Vector3 {
    target ||= new Vector3();
    var x = this._outBuffer.outFloat32Array[4];
    var y = this._outBuffer.outFloat32Array[5];
    var z = this._outBuffer.outFloat32Array[6];
    target.set(x, y, z);
    return target;
  }

  public getPickWorldNormal(target?: Vector3): Vector3 {
    target ||= new Vector3();
    var x = this._outBuffer.outFloat32Array[8];
    var y = this._outBuffer.outFloat32Array[9];
    var z = this._outBuffer.outFloat32Array[10];
    target.set(x * 2.0 - 1.0, y * 2.0 - 1.0, z * 2.0 - 1.0).normalize();
    return target;
  }

  public getPickScreenUV(target?: Vector2): Vector2 {
    target ||= new Vector2();
    var x = this._outBuffer.outFloat32Array[2];
    var y = this._outBuffer.outFloat32Array[3];
    target.set(x, y);
    return target;
  }
}
