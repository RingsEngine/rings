import { Engine3D } from "../../../../Engine3D";
import { RenderNode } from "../../../../components/renderer/RenderNode";
import { View3D } from "../../../../core/View3D";
import { ProfilerUtil } from "../../../../util/ProfilerUtil";
import { GlobalBindGroup } from "../../../graphics/webGpu/core/bindGroups/GlobalBindGroup";
import { GPUContext } from "../../GPUContext";
import { EntityCollect } from "../../collect/EntityCollect";
import { OcclusionSystem } from "../../occlusion/OcclusionSystem";
import { RenderContext } from "../RenderContext";
import { RendererBase } from "../RendererBase";
import { ClusterLightingBuffer } from "../cluster/ClusterLightingBuffer";
import { PassType } from "../state/PassType";
import { RendererMask } from "../state/RendererMask";

export class ColorPassRenderer extends RendererBase {
  constructor() {
    super();
    this.passType = PassType.COLOR;
  }

  public render(
    view: View3D,
    occlusionSystem: OcclusionSystem,
    clusterLightingBuffer?: ClusterLightingBuffer,
    maskTr: boolean = false
  ) {
    this.renderContext.clean();
    let scene = view.scene;
    let camera = view.camera;
    GlobalBindGroup.updateCameraGroup(camera);
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
      this.renderContext.beginOpaqueRenderPass();
      let renderPassEncoder = this.renderContext.encoder;
      if (op_bundleList.length > 0) {
        let entityBatchCollect = EntityCollect.instance.getOpRenderGroup(scene);
        renderPassEncoder.executeBundles(op_bundleList);
      }

      if (!maskTr && EntityCollect.instance.sky) {
        GPUContext.bindCamera(renderPassEncoder, camera);
        if (!EntityCollect.instance.sky.preInit(this._rendererType)) {
          EntityCollect.instance.sky.nodeUpdate(
            view,
            this._rendererType,
            this.rendererPassState,
            clusterLightingBuffer
          );
        }
        EntityCollect.instance.sky.renderPass2(
          view,
          this._rendererType,
          this.rendererPassState,
          clusterLightingBuffer,
          renderPassEncoder
        );
      }

      if (collectInfo.opaqueList) {
        GPUContext.bindCamera(renderPassEncoder, camera);
        this.drawNodes(
          view,
          this.renderContext,
          collectInfo.opaqueList,
          occlusionSystem,
          clusterLightingBuffer
        );
      }
    }

    {
      let renderPassEncoder = this.renderContext.encoder;

      if (tr_bundleList.length > 0) {
        renderPassEncoder.executeBundles(tr_bundleList);
      }

      if (!maskTr && collectInfo.transparentList) {
        GPUContext.bindCamera(renderPassEncoder, camera);
        this.drawNodes(
          view,
          this.renderContext,
          collectInfo.transparentList,
          occlusionSystem,
          clusterLightingBuffer
        );
      }

      let graphicsList = EntityCollect.instance.getGraphicList();
      for (let i = 0; i < graphicsList.length; i++) {
        const graphic3DRenderNode = graphicsList[i];
        graphic3DRenderNode.nodeUpdate(
          view,
          this._rendererType,
          this.splitRendererPassState,
          clusterLightingBuffer
        );
        graphic3DRenderNode.renderPass2(
          view,
          this._rendererType,
          this.splitRendererPassState,
          clusterLightingBuffer,
          renderPassEncoder
        );
      }

      this.renderContext.endRenderPass();

      ProfilerUtil.end("ColorPass Draw Transparent");
    }
  }

  public drawNodes(
    view: View3D,
    renderContext: RenderContext,
    nodes: RenderNode[],
    occlusionSystem: OcclusionSystem,
    clusterLightingBuffer: ClusterLightingBuffer
  ) {
    let viewRenderList = EntityCollect.instance.getRenderShaderCollect(view);
    if (viewRenderList) {
      for (const renderList of viewRenderList) {
        let nodeMap = renderList[1];
        for (const iterator of nodeMap) {
          let node = iterator[1];
          if (!node.isDestroyed && node.preInit(this._rendererType)) {
            node.nodeUpdate(
              view,
              this._rendererType,
              this.rendererPassState,
              clusterLightingBuffer
            );
            break;
          }
        }
      }

      for (
        let i = Engine3D.setting.render.drawOpMin;
        i < Math.min(nodes.length, Engine3D.setting.render.drawOpMax);
        ++i
      ) {
        let renderNode = nodes[i];
        if (!renderNode.transform.enable) continue;
        if (!renderNode.enable) continue;
        if (
          renderNode.hasMask(RendererMask.UI) &&
          !renderNode.isRecievePostEffectUI
        )
          continue;
        if (renderNode.isDestroyed) continue;
        if (!renderNode.preInit(this._rendererType)) {
          renderNode.nodeUpdate(
            view,
            this._rendererType,
            this.rendererPassState,
            clusterLightingBuffer
          );
        }
        renderNode.renderPass(view, this.passType, this.renderContext);
      }
    }
  }

  protected occlusionRenderNodeTest(
    i: number,
    id: number,
    occlusionSystem: OcclusionSystem
  ): boolean {
    return occlusionSystem.zDepthRenderNodeTest(id) > 0;
  }
}
