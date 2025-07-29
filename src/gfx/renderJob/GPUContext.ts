import { Camera3D } from "../../core/Camera3D";
import { GeometryBase } from "../../core/geometry/GeometryBase";
import { ProfilerUtil } from "../../util/ProfilerUtil";
import { webGPUContext } from "../graphics/webGpu/Context3D";
import { GlobalBindGroup } from "../graphics/webGpu/core/bindGroups/GlobalBindGroup";
import { Texture } from "../graphics/webGpu/core/texture/Texture";
import { ComputeShader } from "../graphics/webGpu/shader/ComputeShader";
import { RenderShaderPass } from "../graphics/webGpu/shader/RenderShaderPass";
import { RendererPassState } from "./passRenderer/state/RendererPassState";

export class GPUContext {
  public static lastGeometry: GeometryBase;
  public static lastPipeline: GPURenderPipeline | null;
  public static lastShader: RenderShaderPass;
  public static drawCount: number = 0;
  public static renderPassCount: number = 0;
  public static geometryCount: number = 0;
  public static pipelineCount: number = 0;
  public static matrixCount: number = 0;
  public static lastRenderPassState: RendererPassState;
  public static LastCommand: GPUCommandEncoder | null;

  public static bindPipeline(
    encoder: GPURenderPassEncoder | GPURenderBundleEncoder,
    renderShader: RenderShaderPass
  ) {
    if (GPUContext.lastShader != renderShader) {
      GPUContext.lastShader = renderShader;
    } else {
      return false;
    }

    if (GPUContext.lastPipeline != renderShader.pipeline) {
      GPUContext.lastPipeline = renderShader.pipeline;
      encoder.setPipeline(renderShader.pipeline);
    }

    for (let i = 1; i < renderShader.bindGroups.length; i++) {
      const bindGroup = renderShader.bindGroups[i];
      if (bindGroup) {
        encoder.setBindGroup(i, bindGroup);
      }
    }
    return true;
  }

  public static bindCamera(
    encoder: GPURenderPassEncoder | GPURenderBundleEncoder,
    camera: Camera3D
  ) {
    let cameraBindGroup = GlobalBindGroup.getCameraGroup(camera);
    encoder.setBindGroup(0, cameraBindGroup.globalBindGroup);
  }

  public static bindGeometryBuffer(
    encoder: GPURenderPassEncoder | GPURenderBundleEncoder,
    geometry: GeometryBase
  ) {
    if (this.lastGeometry != geometry) {
      this.lastGeometry = geometry;
      if (geometry.indicesBuffer) {
        encoder.setIndexBuffer(
          geometry.indicesBuffer.indicesGPUBuffer.buffer,
          geometry.indicesBuffer.indicesFormat
        );

        let vertexBuffer = geometry.vertexBuffer.vertexGPUBuffer;
        let vertexBufferLayouts = geometry.vertexBuffer.vertexBufferLayouts;
        for (let i = 0; i < vertexBufferLayouts.length; i++) {
          const vbLayout = vertexBufferLayouts[i];
          encoder.setVertexBuffer(
            i,
            vertexBuffer.buffer,
            vbLayout.offset,
            vbLayout.size
          );
        }
      }
    }
  }

  public static cleanCache() {
    this.lastGeometry = null;
    this.lastPipeline = null;
    this.lastShader = null;
  }

  public static createPipeline(gpuRenderPipeline: GPURenderPipelineDescriptor) {
    ProfilerUtil.countStart("GPUContext", "pipeline");
    let pipeline: GPURenderPipeline =
      webGPUContext.device.createRenderPipeline(gpuRenderPipeline);
    return pipeline;
  }

  public static beginCommandEncoder(): GPUCommandEncoder | null {
    ProfilerUtil.countStart("GPUContext", "beginCommandEncoder");
    if (this.LastCommand) {
      webGPUContext.device.queue.submit([this.LastCommand.finish()]);
    }
    this.LastCommand = webGPUContext.device.createCommandEncoder();
    return this.LastCommand;
  }

  public static endCommandEncoder(command: GPUCommandEncoder) {
    if (this.LastCommand == command) {
      webGPUContext.device.queue.submit([this.LastCommand.finish()]);
      this.LastCommand = null;
      ProfilerUtil.countStart("GPUContext", "endCommandEncoder");
    }
  }

  // 预录制
  public static recordBundleEncoder(
    des: GPURenderBundleEncoderDescriptor
  ): GPURenderBundleEncoder {
    let bundleEncoder: GPURenderBundleEncoder =
      webGPUContext.device.createRenderBundleEncoder(des);
    return bundleEncoder;
  }

  public static beginRenderPass(
    command: GPUCommandEncoder,
    renderPassState: RendererPassState
  ): GPURenderPassEncoder {
    this.cleanCache();
    this.renderPassCount++;
    this.lastRenderPassState = renderPassState;
    if (renderPassState.depthTexture) {
      let depth = renderPassState.renderPassDescriptor.depthStencilAttachment;
      depth.view = renderPassState.depthTexture.getGPUView() as any;
    }
    if (
      renderPassState.renderTargets &&
      renderPassState.renderTargets.length > 0
    ) {
      for (let i = 0; i < renderPassState.renderTargets.length; ++i) {
        const renderTarget = renderPassState.renderTargets[i];
        let att = renderPassState.renderPassDescriptor.colorAttachments[i];
        if (
          renderPassState.multisample > 0 &&
          renderPassState.renderTargets.length == 1
        ) {
          att.view = renderPassState.multiTexture.createView();
          att.resolveTarget = renderTarget.getGPUView();
        } else {
          att.view = renderTarget.getGPUTexture().createView();
        }
      }
      return command.beginRenderPass(renderPassState.renderPassDescriptor);
    } else {
      let att0 = renderPassState.renderPassDescriptor.colorAttachments[0];
      if (att0) {
        if (renderPassState.multisample > 0) {
          att0.view = renderPassState.multiTexture.createView();
          att0.resolveTarget = webGPUContext.context
            .getCurrentTexture()
            .createView();
        } else {
          att0.view = webGPUContext.context.getCurrentTexture().createView();
        }
      }
      return command.beginRenderPass(renderPassState.renderPassDescriptor);
    }
  }

  public static drawIndexed(
    encoder: GPURenderPassEncoder,
    indexCount: GPUSize32,
    instanceCount?: GPUSize32,
    firstIndex?: GPUSize32,
    baseVertex?: GPUSignedOffset32,
    firstInstance?: GPUSize32
  ) {
    encoder.drawIndexed(
      indexCount,
      instanceCount,
      firstIndex,
      baseVertex,
      firstInstance
    );
    this.drawCount++;
  }

  public static draw(
    encoder: GPURenderPassEncoder,
    vertexCount: GPUSize32,
    instanceCount?: GPUSize32,
    firstVertex?: GPUSize32,
    firstInstance?: GPUSize32
  ) {
    encoder.draw(vertexCount, instanceCount, firstVertex, firstInstance);
    this.drawCount++;
  }

  public static endPass(encoder: GPURenderPassEncoder) {
    encoder.insertDebugMarker("end");
    encoder.end();
  }

  public static computeCommand(
    command: GPUCommandEncoder,
    computes: ComputeShader[]
  ) {
    let computePass = command.beginComputePass();
    for (let i = 0; i < computes.length; i++) {
      const compute = computes[i];
      compute.compute(computePass);
    }
    computePass.end();
  }

  public static copyTexture(
    command: GPUCommandEncoder,
    source: Texture,
    dest: Texture
  ) {
    command.copyTextureToTexture(
      {
        texture: source.getGPUTexture(),
        mipLevel: 0,
        origin: { x: 0, y: 0, z: 0 },
      },
      {
        texture: dest.getGPUTexture(),
        mipLevel: 0,
        origin: { x: 0, y: 0, z: 0 },
      },
      {
        width: dest.width,
        height: dest.height,
        depthOrArrayLayers: 1,
      }
    );
  }
}
