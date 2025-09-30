import { RenderNode } from "./RenderNode";
import { GSplatRuntime } from "../../runtime/GSplatRuntime";
import { GSplatMaterial } from "../../materials/GSplatMaterial";
import { PlaneGeometry } from "../../shape/PlaneGeometry";
import { View3D } from "../../core/View3D";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { GPUContext } from "../../gfx/renderJob/GPUContext";

export class GSplatRenderNode extends RenderNode {
  public runtime: GSplatRuntime;
  public gsplatMaterial: GSplatMaterial;

  constructor() {
    super();
  }

  public setRuntime(runtime: GSplatRuntime) {
    this.runtime = runtime;
    this.gsplatMaterial = new GSplatMaterial();
    // ensure base init executed
    this.init?.();
    this.geometry = new PlaneGeometry(1, 1, 1, 1);
    this.materials = [this.gsplatMaterial];
  }

  public setMapping(mapping?: Uint32Array | null) {
    this.runtime?.setMapping(mapping);
  }

  public nodeUpdate(
    view: View3D,
    passType: PassType,
    renderPassState: RendererPassState,
    clusterLightingBuffer?: ClusterLightingBuffer
  ) {
    this.gsplatMaterial.setSplatTextures(
      this.runtime.splatColor,
      this.runtime.transformA,
      this.runtime.transformB,
      this.runtime.texParams,
      this.runtime.splatOrder
    );
    super.nodeUpdate(view, passType, renderPassState, clusterLightingBuffer);
  }

  public renderPass2(
    view: View3D,
    passType: PassType,
    rendererPassState: RendererPassState,
    clusterLightingBuffer: ClusterLightingBuffer,
    encoder: GPURenderPassEncoder,
    useBundle: boolean = false
  ) {
    // bind pipeline from base path
    for (let mat of this.materials) {
      const passes = mat.getPass(passType);
      if (!passes || passes.length === 0) continue;
      for (const pass of passes) {
        if (!pass.pipeline) continue;
        // ensure bind groups / uniforms are up-to-date this pass
        pass.apply(this.geometry, rendererPassState);
        GPUContext.bindPipeline(encoder, pass);
        // 4 vertices per instance, instance count = splat count
        GPUContext.draw(encoder, 4, this.runtime.count, 0, 0);
      }
    }
  }

  public renderPass(
    view: View3D,
    passType: PassType,
    renderContext
  ) {
    const encoder: GPURenderPassEncoder = renderContext.encoder;
    for (let mat of this.materials) {
      const passes = mat.getPass(passType);
      if (!passes || passes.length === 0) continue;
      for (const pass of passes) {
        if (!pass.pipeline) continue;
        // fallback apply with RenderContext's state if available
        pass.apply(this.geometry, renderContext.rendererPassState || (renderContext as any));
        GPUContext.bindPipeline(encoder, pass);
        GPUContext.draw(encoder, 4, this.runtime.count, 0, 0);
      }
    }
  }
}


