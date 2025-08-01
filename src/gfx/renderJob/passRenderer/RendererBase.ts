import { Engine3D } from "../../../Engine3D";
import { RenderNode } from "../../../components/renderer/RenderNode";
import { Scene3D } from "../../../core/Scene3D";
import { View3D } from "../../../core/View3D";
import { ViewQuad } from "../../../core/ViewQuad";
import { CEventDispatcher } from "../../../event/CEventDispatcher";
import { Texture } from "../../graphics/webGpu/core/texture/Texture";
import { WebGPUDescriptorCreator } from "../../graphics/webGpu/descriptor/WebGPUDescriptorCreator";
import { GPUContext } from "../GPUContext";
import { CollectInfo } from "../collect/CollectInfo";
import { EntityCollect } from "../collect/EntityCollect";
import { RTFrame } from "../frame/RTFrame";
import { OcclusionSystem } from "../occlusion/OcclusionSystem";
import { RendererPassState } from "./state/RendererPassState";
import { PassType } from "./state/PassType";
import { RenderContext } from "./RenderContext";
import { ClusterLightingBuffer } from "./cluster/ClusterLightingBuffer";
import { RenderTexture } from "../../..";

export class RendererBase extends CEventDispatcher {
  public rendererPassState: RendererPassState;
  public splitRendererPassState: RendererPassState;
  public useRenderBundle: boolean = false;
  public debugViewQuads: ViewQuad[];
  public debugTextures: Texture[];
  protected renderContext: RenderContext;
  protected _rendererType: PassType;
  protected _rtFrame: RTFrame;

  public get passType(): PassType {
    return this._rendererType;
  }

  public set passType(value: PassType) {
    this._rendererType = value;
  }

  constructor() {
    super();
    this.debugTextures = [];
    this.debugViewQuads = [];
  }

  public setRenderStates(rtFrame: RTFrame) {
    this._rtFrame = rtFrame;
    if (rtFrame) {
      this.rendererPassState =
        WebGPUDescriptorCreator.createRendererPassState(rtFrame);
      let splitRtFrame = rtFrame.clone();
      splitRtFrame.depthLoadOp = "load";
      for (const iterator of splitRtFrame.rtDescriptors) {
        iterator.loadOp = `load`;
      }
      this.splitRendererPassState =
        WebGPUDescriptorCreator.createRendererPassState(splitRtFrame);
    }
    this.renderContext = new RenderContext(rtFrame);
  }

  public getRenderContext(rtFrame: RTFrame) {
    this._rtFrame = rtFrame;
    let renderContext = new RenderContext(rtFrame);
    return renderContext;
  }

  public setIrradiance(
    probeIrradianceMap: RenderTexture,
    probeDepthMap: RenderTexture
  ) {
    this.rendererPassState.irradianceBuffer = [
      probeIrradianceMap,
      probeDepthMap,
    ];
  }

  public compute(view: View3D, occlusionSystem: OcclusionSystem) {}

  public render(
    view: View3D,
    occlusionSystem: OcclusionSystem,
    clusterLightingBuffer: ClusterLightingBuffer,
    maskTr: boolean = false
  ) {
    GPUContext.cleanCache();

    let camera = view.camera;
    let scene = view.scene;

    this.rendererPassState.camera3D = camera;

    let collectInfo = EntityCollect.instance.getRenderNodes(scene, camera);

    let op_bundleList = this.renderBundleOp(
      view,
      collectInfo,
      occlusionSystem,
      clusterLightingBuffer
    );
    let tr_bundleList = maskTr
      ? []
      : this.renderBundleTr(
          view,
          collectInfo,
          occlusionSystem,
          clusterLightingBuffer
        );

    {
      let command = GPUContext.beginCommandEncoder();
      let renderPassEncoder = GPUContext.beginRenderPass(
        command,
        this.rendererPassState
      );

      if (op_bundleList.length > 0) {
        renderPassEncoder.executeBundles(op_bundleList);
      }

      if (!maskTr && EntityCollect.instance.sky) {
        GPUContext.bindCamera(renderPassEncoder, camera);
        EntityCollect.instance.sky.renderPass2(
          view,
          this._rendererType,
          this.rendererPassState,
          clusterLightingBuffer,
          renderPassEncoder
        );
      }

      this.drawRenderNodes(
        view,
        renderPassEncoder,
        command,
        collectInfo.opaqueList,
        occlusionSystem
      );

      GPUContext.endPass(renderPassEncoder);
      GPUContext.endCommandEncoder(command);
    }

    {
      let command = GPUContext.beginCommandEncoder();
      let renderPassEncoder = GPUContext.beginRenderPass(
        command,
        this.rendererPassState
      );

      if (tr_bundleList.length > 0) {
        renderPassEncoder.executeBundles(tr_bundleList);
      }

      if (!maskTr) {
        GPUContext.bindCamera(renderPassEncoder, camera);
        this.drawRenderNodes(
          view,
          renderPassEncoder,
          command,
          collectInfo.transparentList,
          occlusionSystem
        );
      }

      GPUContext.endPass(renderPassEncoder);
      GPUContext.endCommandEncoder(command);
    }
  }

  protected nodeUpload(
    collectInfo: CollectInfo,
    scene: Scene3D,
    occlusionSystem?: OcclusionSystem
  ) {}

  protected occlusionRenderNodeTest(
    i: number,
    id: number,
    occlusionSystem: OcclusionSystem
  ): boolean {
    return occlusionSystem
      ? occlusionSystem.occlusionRenderNodeTest(i) > 0
      : true;
  }

  protected renderOp(
    encoder: GPURenderPassEncoder,
    command: GPUCommandEncoder,
    collectInfo: CollectInfo,
    scene: Scene3D,
    occlusionSystem: OcclusionSystem
  ) {}

  protected renderTr(
    encoder: GPURenderPassEncoder,
    command: GPUCommandEncoder,
    collectInfo: CollectInfo,
    scene: Scene3D,
    occlusionSystem: OcclusionSystem
  ) {}

  protected renderBundleOp(
    view: View3D,
    collectInfo: CollectInfo,
    occlusionSystem: OcclusionSystem,
    clusterLightingBuffer?: ClusterLightingBuffer
  ) {
    let entityBatchCollect = EntityCollect.instance.getOpRenderGroup(
      view.scene
    );
    if (entityBatchCollect) {
      let bundlerList = [];
      entityBatchCollect.renderGroup.forEach((v) => {
        if (v.bundleMap.has(this._rendererType)) {
          bundlerList.push(v.bundleMap.get(this._rendererType));
        } else {
          let renderBundleEncoder = GPUContext.recordBundleEncoder(
            this.rendererPassState.renderBundleEncoderDescriptor
          );
          this.recordRenderBundleNode(
            view,
            renderBundleEncoder,
            v.renderNodes,
            clusterLightingBuffer
          );
          let newBundle = renderBundleEncoder.finish();
          v.bundleMap.set(this._rendererType, newBundle);
          bundlerList.push(newBundle);
        }
      });
      return bundlerList;
    }
    return [];
  }

  protected renderBundleTr(
    view: View3D,
    collectInfo: CollectInfo,
    occlusionSystem: OcclusionSystem,
    clusterLightingBuffer?: ClusterLightingBuffer
  ) {
    let entityBatchCollect = EntityCollect.instance.getTrRenderGroup(
      view.scene
    );
    if (entityBatchCollect) {
      let bundlerList = [];
      entityBatchCollect.renderGroup.forEach((v) => {
        if (v.bundleMap.has(this._rendererType)) {
          bundlerList.push(v.bundleMap.get(this._rendererType));
        } else {
          let renderBundleEncoder = GPUContext.recordBundleEncoder(
            this.rendererPassState.renderBundleEncoderDescriptor
          );
          this.recordRenderBundleNode(
            view,
            renderBundleEncoder,
            v.renderNodes,
            clusterLightingBuffer
          );
          let newBundle = renderBundleEncoder.finish();
          v.bundleMap.set(this._rendererType, newBundle);
          bundlerList.push(newBundle);
        }
      });
      return bundlerList;
    }
    return [];
  }

  protected recordRenderBundleNode(
    view: View3D,
    encoder,
    nodes: RenderNode[],
    clusterLightingBuffer?: ClusterLightingBuffer
  ) {
    GPUContext.bindCamera(encoder, view.camera);
    GPUContext.bindGeometryBuffer(encoder, nodes[0].geometry);
    for (let i = 0; i < nodes.length; ++i) {
      let renderNode = nodes[i];
      let matrixIndex = renderNode.transform.worldMatrix.index;
      if (!renderNode.transform.enable) continue;
      renderNode.recordRenderPass2(
        view,
        this._rendererType,
        this.rendererPassState,
        clusterLightingBuffer,
        encoder
      );
    }
  }

  protected drawRenderNodes(
    view: View3D,
    encoder: GPURenderPassEncoder,
    command: GPUCommandEncoder,
    nodes: RenderNode[],
    occlusionSystem: OcclusionSystem,
    clusterLightingBuffer?: ClusterLightingBuffer
  ) {
    GPUContext.bindCamera(encoder, view.camera);
    for (
      let i = Engine3D.setting.render.drawOpMin;
      i < Math.min(nodes.length, Engine3D.setting.render.drawOpMax);
      ++i
    ) {
      let renderNode = nodes[i];
      if (!renderNode.transform.enable) continue;
      if (!renderNode.enable) continue;
      renderNode.renderPass2(
        view,
        this._rendererType,
        this.rendererPassState,
        clusterLightingBuffer,
        encoder
      );
    }
  }
}
