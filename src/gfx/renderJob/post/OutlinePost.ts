import { VirtualTexture } from "../../../textures/VirtualTexture";
import { StorageGPUBuffer } from "../../graphics/webGpu/core/buffer/StorageGPUBuffer";
import { UniformGPUBuffer } from "../../graphics/webGpu/core/buffer/UniformGPUBuffer";
import { WebGPUDescriptorCreator } from "../../graphics/webGpu/descriptor/WebGPUDescriptorCreator";
import { ComputeShader } from "../../graphics/webGpu/shader/ComputeShader";
import { GPUTextureFormat } from "../../graphics/webGpu/WebGPUConst";
import { webGPUContext } from "../../graphics/webGpu/Context3D";
import { GPUContext } from "../GPUContext";
import { RendererPassState } from "../passRenderer/state/RendererPassState";
import { PostBase } from "./PostBase";
import { Engine3D } from "../../../Engine3D";
import { clamp } from "../../../math/MathUtil";
import { Vector2 } from "../../../math/Vector2";
import { RTDescriptor } from "../../graphics/webGpu/descriptor/RTDescriptor";
import { GBufferFrame } from "../frame/GBufferFrame";
import { RTFrame } from "../frame/RTFrame";
import { View3D } from "../../../core/View3D";
import { OutlineCalcOutline_cs } from "../../../assets/shader/compute/OutlineCalcOutline_cs";
import { Outline_cs } from "../../../assets/shader/compute/Outline_cs";
import { OutLineBlendColor_cs } from "../../../assets/shader/compute/OutLineBlendColor_cs";
import { OutlinePostSlot, outlinePostData } from "../../../io/OutlinePostData";
import { GlobalBindGroup } from "../../graphics/webGpu/core/bindGroups/GlobalBindGroup";

export class OutlinePost extends PostBase {
  /**
   * @internal
   */
  private outlineTex: VirtualTexture;
  /**
   * @internal
   */
  private lowTex: VirtualTexture;
  /**
   * @internal
   */
  private rendererPassState: RendererPassState;
  /**
   * @internal
   */
  private calcWeightCompute: ComputeShader;
  /**
   * @internal
   */
  private outlineCompute: ComputeShader;
  /**
   * @internal
   */
  private blendCompute: ComputeShader;
  /**
   * @internal
   */
  private outlineSetting: StorageGPUBuffer;
  /**
   * @internal
   */
  private slotsBuffer: StorageGPUBuffer;
  /**
   * @internal
   */
  private slotsArray: Float32Array;
  /**
   * @internal
   */
  private entitiesArray: Float32Array;
  /**
   * @internal
   */
  private entitiesBuffer: StorageGPUBuffer;
  /**
   * @internal
   */
  private weightBuffer: StorageGPUBuffer;
  /**
   * @internal
   */
  private lowTexSize: Vector2;
  /**
   * @internal
   */
  private oldOutlineColor: StorageGPUBuffer;
  /**
   * @internal
   */
  private rtFrame: RTFrame;
  private view: View3D;

  constructor() {
    super();
  }

  /**
   * @internal
   */
  onAttach(view: View3D) {
    this.view = view;
    Engine3D.setting.render.postProcessing.outline.enable = true;
  }

  /**
   * @internal
   */
  onDetach(view: View3D) {
    Engine3D.setting.render.postProcessing.outline.enable = false;
  }

  public set outlinePixel(value: number) {
    value = clamp(value, 0, 8);
    let cfg = Engine3D.setting.render.postProcessing.outline;
    if (cfg.outlinePixel != value) {
      cfg.outlinePixel = value;
    }
  }

  public get outlinePixel() {
    return Engine3D.setting.render.postProcessing.outline.outlinePixel;
  }

  public set fadeOutlinePixel(value: number) {
    let cfg = Engine3D.setting.render.postProcessing.outline;
    value = clamp(value, 0, 8);
    if (cfg.fadeOutlinePixel != value) {
      cfg.fadeOutlinePixel = value;
    }
  }

  public get fadeOutlinePixel() {
    return Engine3D.setting.render.postProcessing.outline.fadeOutlinePixel;
  }

  public set strength(value: number) {
    value = clamp(value, 0, 1);
    let cfg = Engine3D.setting.render.postProcessing.outline;
    if (cfg.strength != value) {
      cfg.strength = value;
    }
  }

  public get strength() {
    return Engine3D.setting.render.postProcessing.outline.strength;
  }

  public set useAddMode(value: boolean) {
    Engine3D.setting.render.postProcessing.outline.useAddMode = value;
  }

  public get useAddMode() {
    return Engine3D.setting.render.postProcessing.outline.useAddMode;
  }

  private createGUI() {}

  private createCompute() {
    let rtFrame = GBufferFrame.getGBufferFrame(GBufferFrame.colorPass_GBuffer);

    this.calcWeightCompute = new ComputeShader(OutlineCalcOutline_cs);

    let globalUniform = GlobalBindGroup.getCameraGroup(this.view.camera);

    this.calcWeightCompute.setUniformBuffer(
      "globalUniform",
      globalUniform.uniformGPUBuffer
    );
    this.calcWeightCompute.setStorageBuffer(
      "outlineSetting",
      this.outlineSetting
    );
    this.calcWeightCompute.setStorageBuffer("slotsBuffer", this.slotsBuffer);
    this.calcWeightCompute.setStorageBuffer(`weightBuffer`, this.weightBuffer);
    this.calcWeightCompute.setStorageBuffer(
      `entitiesBuffer`,
      this.entitiesBuffer
    );
    this.calcWeightCompute.setSamplerTexture(
      `gBufferTexture`,
      rtFrame.getCompressGBufferTexture()
    );

    this.calcWeightCompute.workerSizeX = Math.ceil(this.lowTex.width / 8);
    this.calcWeightCompute.workerSizeY = Math.ceil(this.lowTex.height / 8);
    this.calcWeightCompute.workerSizeZ = 1;

    //outline
    this.outlineCompute = new ComputeShader(Outline_cs);
    this.outlineCompute.setStorageBuffer("outlineSetting", this.outlineSetting);
    this.outlineCompute.setStorageBuffer("slotsBuffer", this.slotsBuffer);
    this.outlineCompute.setStorageBuffer(`weightBuffer`, this.weightBuffer);
    this.outlineCompute.setStorageBuffer(
      `oldOutlineColor`,
      this.oldOutlineColor
    );
    this.outlineCompute.setStorageTexture(`lowTex`, this.lowTex);

    this.outlineCompute.workerSizeX = Math.ceil(this.lowTex.width / 8);
    this.outlineCompute.workerSizeY = Math.ceil(this.lowTex.height / 8);
    this.outlineCompute.workerSizeZ = 1;

    //blend
    this.blendCompute = new ComputeShader(OutLineBlendColor_cs);
    this.blendCompute.setStorageBuffer("outlineSetting", this.outlineSetting);
    this.autoSetColorTexture("inTex", this.blendCompute);
    this.blendCompute.setSamplerTexture(`lowTex`, this.lowTex);
    this.blendCompute.setStorageTexture(`outlineTex`, this.outlineTex);

    this.blendCompute.workerSizeX = Math.ceil(this.outlineTex.width / 8);
    this.blendCompute.workerSizeY = Math.ceil(this.outlineTex.height / 8);
    this.blendCompute.workerSizeZ = 1;
  }

  private createResource() {
    let presentationSize = webGPUContext.presentationSize;
    let w = presentationSize[0];
    let h = presentationSize[1];
    let textureScale =
      Engine3D.setting.render.postProcessing.outline.textureScale;
    this.lowTexSize = new Vector2(
      Math.ceil(w * textureScale),
      Math.ceil(h * textureScale)
    );

    this.lowTex = new VirtualTexture(
      this.lowTexSize.x,
      this.lowTexSize.y,
      GPUTextureFormat.rgba16float,
      false,
      GPUTextureUsage.STORAGE_BINDING |
        GPUTextureUsage.COPY_DST |
        GPUTextureUsage.COPY_SRC |
        GPUTextureUsage.TEXTURE_BINDING
    );
    this.lowTex.name = "lowTex";
    let lowDec = new RTDescriptor();
    lowDec.clearValue = [0, 0, 0, 1];
    lowDec.loadOp = `clear`;

    this.outlineTex = new VirtualTexture(
      w,
      h,
      GPUTextureFormat.rgba16float,
      false,
      GPUTextureUsage.STORAGE_BINDING |
        GPUTextureUsage.COPY_DST |
        GPUTextureUsage.COPY_SRC |
        GPUTextureUsage.TEXTURE_BINDING
    );
    this.outlineTex.name = "outlineTex";
    let outDec = new RTDescriptor();
    outDec.clearValue = [0, 0, 0, 1];
    outDec.loadOp = `clear`;

    this.rtFrame = new RTFrame([this.outlineTex], [outDec]);

    this.outlineSetting = new UniformGPUBuffer(8);
    this.weightBuffer = new StorageGPUBuffer(
      this.lowTexSize.x * this.lowTexSize.y * 4,
      GPUBufferUsage.COPY_SRC
    );
    this.oldOutlineColor = new StorageGPUBuffer(
      this.lowTexSize.x * this.lowTexSize.y * 4,
      GPUBufferUsage.COPY_SRC
    );

    this.slotsArray = new Float32Array(outlinePostData.SlotCount * 4);
    this.slotsBuffer = new StorageGPUBuffer(this.slotsArray.length);
    this.slotsBuffer.setFloat32Array("slotsArray", this.slotsArray);
    this.slotsBuffer.apply();

    this.entitiesArray = new Float32Array(
      outlinePostData.SlotCount * outlinePostData.MaxEntities
    );
    this.entitiesBuffer = new StorageGPUBuffer(this.entitiesArray.length);
    this.entitiesBuffer.setFloat32Array("entitiesArray", this.entitiesArray);
    this.slotsBuffer.apply();

    this.fetchData ||= {} as any;
  }

  private fetchData: { dirty: boolean; slots: OutlinePostSlot[] };

  private fetchOutlineData(): void {
    outlinePostData.fetchData(this.fetchData);
    if (this.fetchData.dirty) {
      let slotCount = outlinePostData.SlotCount;
      let maxEntities = outlinePostData.MaxEntities;
      for (let i = 0; i < slotCount; i++) {
        let offset = 4 * i;
        let slot = this.fetchData.slots[i];
        this.slotsArray[offset + 0] = slot.color.r;
        this.slotsArray[offset + 1] = slot.color.g;
        this.slotsArray[offset + 2] = slot.color.b;
        this.slotsArray[offset + 3] = slot.count;

        offset = maxEntities * i;
        this.entitiesArray.set(slot.indexList, offset);
      }
      this.slotsBuffer.setFloat32Array("slotsArray", this.slotsArray);
      this.slotsBuffer.apply();
      this.entitiesBuffer.setFloat32Array("entitiesArray", this.entitiesArray);
      this.entitiesBuffer.apply();
    }
  }

  private computeList: ComputeShader[];

  /**
   * @internal
   */
  render(view: View3D, command: GPUCommandEncoder) {
    if (!this.calcWeightCompute) {
      this.createResource();
      this.createCompute();
      this.createGUI();
      this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(
        this.rtFrame,
        null
      );
    }
    this.computeList ||= [
      this.calcWeightCompute,
      this.outlineCompute,
      this.blendCompute,
    ];
    let cfg = Engine3D.setting.render.postProcessing.outline;
    this.outlineSetting.setFloat("strength", cfg.strength);
    this.outlineSetting.setFloat("useAddMode", cfg.useAddMode ? 1 : 0);
    this.outlineSetting.setFloat("outlinePixel", cfg.outlinePixel);
    this.outlineSetting.setFloat("fadeOutlinePixel", cfg.fadeOutlinePixel);
    this.outlineSetting.setFloat("lowTexWidth", this.lowTexSize.x);
    this.outlineSetting.setFloat("lowTexHeight", this.lowTexSize.y);
    this.outlineSetting.apply();

    this.fetchOutlineData();
    GPUContext.computeCommand(command, this.computeList);
    GPUContext.lastRenderPassState = this.rendererPassState;
  }

  public onResize(): void {
    let presentationSize = webGPUContext.presentationSize;
    let w = presentationSize[0];
    let h = presentationSize[1];
    let textureScale =
      Engine3D.setting.render.postProcessing.outline.textureScale;
    this.lowTexSize = new Vector2(
      Math.ceil(w * textureScale),
      Math.ceil(h * textureScale)
    );

    this.lowTex.resize(this.lowTexSize.x, this.lowTexSize.y);
    this.outlineTex.resize(w, h);

    this.weightBuffer.resizeBuffer(this.lowTexSize.x * this.lowTexSize.y * 4);
    this.oldOutlineColor.resizeBuffer(
      this.lowTexSize.x * this.lowTexSize.y * 4
    );

    this.calcWeightCompute.workerSizeX = Math.ceil(this.lowTex.width / 8);
    this.calcWeightCompute.workerSizeY = Math.ceil(this.lowTex.height / 8);
    this.calcWeightCompute.workerSizeZ = 1;

    this.outlineCompute.workerSizeX = Math.ceil(this.lowTex.width / 8);
    this.outlineCompute.workerSizeY = Math.ceil(this.lowTex.height / 8);
    this.outlineCompute.workerSizeZ = 1;

    this.blendCompute.workerSizeX = Math.ceil(this.outlineTex.width / 8);
    this.blendCompute.workerSizeY = Math.ceil(this.outlineTex.height / 8);
    this.blendCompute.workerSizeZ = 1;
  }
}
