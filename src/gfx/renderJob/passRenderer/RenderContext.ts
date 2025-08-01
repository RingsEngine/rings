import { WebGPUDescriptorCreator } from "../../graphics/webGpu/descriptor/WebGPUDescriptorCreator";
import { GPUContext } from "../GPUContext";
import { RTFrame } from "../frame/RTFrame";
import { RendererPassState } from "./state/RendererPassState";

export class RenderContext {
  public command: GPUCommandEncoder;
  public encoder: GPURenderPassEncoder;
  private rendererPassStates: RendererPassState[];
  private rtFrame: RTFrame;

  constructor(rtFrame: RTFrame) {
    this.rtFrame = rtFrame;
    this.rendererPassStates = [];
  }

  public clean() {
    this.rendererPassStates.length = 0;
    GPUContext.cleanCache();
  }

  public beginContinueRendererPassState(
    color_loadOp: GPULoadOp = "load",
    depth_loadOp: GPULoadOp = "load"
  ) {
    if (this.rendererPassStates.length > 0) {
      let splitRtFrame = this.rtFrame.clone();
      for (const iterator of splitRtFrame.rtDescriptors) {
        iterator.loadOp = `load`;
      }
      splitRtFrame.depthLoadOp = depth_loadOp;
      let splitRendererPassState =
        WebGPUDescriptorCreator.createRendererPassState(
          splitRtFrame,
          color_loadOp
        );
      this.rendererPassStates.push(splitRendererPassState);
      return splitRendererPassState;
    } else {
      this.rtFrame.depthLoadOp = depth_loadOp;
      let splitRendererPassState =
        WebGPUDescriptorCreator.createRendererPassState(
          this.rtFrame,
          color_loadOp
        );
      this.rendererPassStates.push(splitRendererPassState);
      return splitRendererPassState;
    }
  }

  public get rendererPassState() {
    return this.rendererPassStates[this.rendererPassStates.length - 1];
  }

  public beginOpaqueRenderPass() {
    this.beginContinueRendererPassState("clear", "clear");
    this.begineNewCommand();
    this.beginNewEncoder();
  }

  public beginTransparentRenderPass() {
    this.beginContinueRendererPassState("load", "load");
    this.begineNewCommand();
    this.beginNewEncoder();
  }

  public specialtRenderPass() {
    this.beginContinueRendererPassState("load", "load");
    this.begineNewCommand();
    this.beginNewEncoder();
  }

  public endRenderPass() {
    this.endEncoder();
    this.endCommand();
  }

  public begineNewCommand(): GPUCommandEncoder {
    this.command = GPUContext.beginCommandEncoder();
    return this.command;
  }

  public endCommand() {
    GPUContext.endCommandEncoder(this.command);
    this.command = null;
  }

  public beginNewEncoder() {
    this.encoder = GPUContext.beginRenderPass(
      this.command,
      this.rendererPassState
    );
    return this.encoder;
  }

  public endEncoder() {
    GPUContext.endPass(this.encoder);
    this.encoder = null;
  }
}
