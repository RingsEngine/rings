import { BRDFLUT } from "../../assets/shader/compute/BRDFLUT";
import { VirtualTexture } from "../../textures/VirtualTexture";
import { ComputeShader } from "../graphics/webGpu/shader/ComputeShader";
import { GPUTextureFormat } from "../graphics/webGpu/WebGPUConst";
import { GPUContext } from "../renderJob/GPUContext";
export class BRDFLUTGenerate {
  compute: ComputeShader;

  constructor() {
    this.compute = new ComputeShader(BRDFLUT);
  }
  public generateBRDFLUTTexture() {
    let texture = new VirtualTexture(
      256,
      256,
      GPUTextureFormat.rgba8unorm,
      false,
      GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
    );
    this.compute.setStorageTexture("brdflutTexture", texture);
    this.compute.workerSizeX = 256 / 8;
    this.compute.workerSizeY = 256 / 8;
    let commandEncoder = GPUContext.beginCommandEncoder();
    GPUContext.computeCommand(commandEncoder, [this.compute]);
    GPUContext.endCommandEncoder(commandEncoder);
    return texture;
  }
}
