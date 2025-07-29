import { View3D } from "../../../core/View3D";
import { Engine3D } from "../../../Engine3D";
import { PickFire } from "../../../io/PickFire";
import { GlobalBindGroup } from "../../graphics/webGpu/core/bindGroups/GlobalBindGroup";
import { ShadowLightsCollect } from "../collect/ShadowLightsCollect";
import { ColorPassRenderer } from "../passRenderer/color/ColorPassRenderer";
import { GBufferFrame } from "../frame/GBufferFrame";
import { OcclusionSystem } from "../occlusion/OcclusionSystem";
import { ClusterLightingRender } from "../passRenderer/cluster/ClusterLightingRender";
import { PointLightShadowRenderer } from "../passRenderer/shadow/PointLightShadowRenderer";
import { ShadowMapPassRenderer } from "../passRenderer/shadow/ShadowMapPassRenderer";
import { PreDepthPassRenderer } from "../passRenderer/preDepth/PreDepthPassRenderer";
import { RendererMap } from "./RenderMap";
import { PostRenderer } from "../passRenderer/post/PostRenderer";
import { PostBase } from "../post/PostBase";
import { RendererBase } from "../passRenderer/RendererBase";
import { Ctor } from "../../../util/Global";
import { DDGIProbeRenderer } from "../passRenderer/ddgi/DDGIProbeRenderer";
import { ReflectionRenderer } from "../passRenderer/cubeRenderer/ReflectionRenderer";
import { PassType } from "../passRenderer/state/PassType";
import { ProfilerUtil } from "../../../util/ProfilerUtil";
import { FXAAPost } from "../post/FXAAPost";

export class RendererJob {
  public rendererMap: RendererMap;
  public shadowMapPassRenderer: ShadowMapPassRenderer;
  public pointLightShadowRenderer: PointLightShadowRenderer;
  public ddgiProbeRenderer: DDGIProbeRenderer;
  public postRenderer: PostRenderer;
  public clusterLightingRender: ClusterLightingRender;
  public reflectionRenderer: ReflectionRenderer;
  public occlusionSystem: OcclusionSystem;
  public depthPassRenderer: PreDepthPassRenderer;
  public get colorPassRenderer(): ColorPassRenderer {
    let renderer = this.rendererMap.getRenderer(PassType.COLOR);
    return renderer as ColorPassRenderer;
  }
  public pauseRender: boolean = false;
  public pickFire: PickFire;
  public renderState: boolean = false;
  protected _view: View3D;
  constructor(view: View3D) {
    this._view = view;
    this.rendererMap = new RendererMap();
    this.occlusionSystem = new OcclusionSystem();
    this.clusterLightingRender = this.addRenderer(ClusterLightingRender, view);
    this.reflectionRenderer = this.addRenderer(ReflectionRenderer, view);
    if (Engine3D.setting.render.zPrePass) {
      this.depthPassRenderer = this.addRenderer(PreDepthPassRenderer);
    }
    this.shadowMapPassRenderer = new ShadowMapPassRenderer();
    this.pointLightShadowRenderer = new PointLightShadowRenderer();
    this.addPost(new FXAAPost());
  }
  public addRenderer<T extends RendererBase>(c: Ctor<T>, param?: any): T {
    let renderer: RendererBase;
    if (param) {
      renderer = new c(param);
    } else {
      renderer = new c();
    }
    this.rendererMap.addRenderer(renderer);
    return renderer as T;
  }
  public get view(): View3D {
    return this._view;
  }
  public set view(view: View3D) {
    this._view = view;
  }
  public start() {
    this.renderState = true;
  }
  public stop() {}
  public pause() {
    this.pauseRender = true;
  }
  public resume() {
    this.pauseRender = false;
  }
  public addPost(post: PostBase): PostBase | PostBase[] {
    if (!this.postRenderer) {
      let gbufferFrame = GBufferFrame.getGBufferFrame("ColorPassGBuffer");
      this.postRenderer = this.addRenderer(PostRenderer);
      this.postRenderer.setRenderStates(gbufferFrame);
    }

    if (post instanceof PostBase) {
      this.postRenderer.attachPost(this.view, post);
    }
    return post;
  }
  public removePost(post: PostBase | PostBase[]) {
    if (post instanceof PostBase) {
      this.postRenderer.detachPost(this.view, post);
    } else {
      for (let i = 0; i < post.length; i++) {
        this.postRenderer.detachPost(this.view, post[i]);
      }
    }
  }
  public renderFrame() {
    let view = this._view;

    ProfilerUtil.startView(view);

    GlobalBindGroup.getLightEntries(view.scene).update(view);
    GlobalBindGroup.getReflectionEntries(view.scene).update(view);

    this.occlusionSystem.update(view.camera, view.scene);
    this.clusterLightingRender.render(view, this.occlusionSystem);

    if (this.shadowMapPassRenderer) {
      ShadowLightsCollect.update(view);
      this.shadowMapPassRenderer.render(view, this.occlusionSystem);
    }

    if (this.pointLightShadowRenderer) {
      this.pointLightShadowRenderer.render(view, this.occlusionSystem);
    }

    if (this.depthPassRenderer) {
      this.depthPassRenderer.compute(view, this.occlusionSystem);
      this.depthPassRenderer.render(view, this.occlusionSystem);
    }

    if (Engine3D.setting.gi.enable && this.ddgiProbeRenderer) {
      this.ddgiProbeRenderer.compute(view, this.occlusionSystem);
      this.ddgiProbeRenderer.render(view, this.occlusionSystem);
    }

    let passList = this.rendererMap.getAllPassRenderer();
    for (let i = 0; i < passList.length; i++) {
      const renderer = passList[i];
      renderer.compute(view, this.occlusionSystem);
      renderer.render(
        view,
        this.occlusionSystem,
        this.clusterLightingRender.clusterLightingBuffer,
        false
      );
    }

    this.postRenderer.render(view);

    //GUI
    let guiRenderer = this.rendererMap.getRenderer(PassType.UI);
    guiRenderer.compute(view, this.occlusionSystem);
    guiRenderer.render(
      view,
      this.occlusionSystem,
      this.clusterLightingRender.clusterLightingBuffer,
      false
    );

    //output
    let lastTexture = GBufferFrame.getGUIBufferFrame().getColorTexture();
    this.postRenderer.presentContent(view, lastTexture);
  }
  public debug() {}
}
