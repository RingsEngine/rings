import { LightType } from "../../../../components/lights/LightData";
import { ShadowLightsCollect } from "../../collect/ShadowLightsCollect";
import { Camera3D } from "../../../../core/Camera3D";
import { CubeCamera } from "../../../../core/CubeCamera";
import { Engine3D } from "../../../../Engine3D";
import { VirtualTexture } from "../../../../textures/VirtualTexture";
import { GPUTextureFormat } from "../../../graphics/webGpu/WebGPUConst";
import { CollectInfo } from "../../collect/CollectInfo";
import { EntityCollect } from "../../collect/EntityCollect";
import { GPUContext } from "../../GPUContext";
import { RTFrame } from "../../frame/RTFrame";
import { OcclusionSystem } from "../../occlusion/OcclusionSystem";
import { RendererBase } from "../RendererBase";
import { RenderNode } from "../../../../components/renderer/RenderNode";
import { PointShadowCubeCamera } from "../../../../core/PointShadowCubeCamera";
import { View3D } from "../../../../core/View3D";
import { DepthCubeArrayTexture } from "../../../../textures/DepthCubeArrayTexture";
import { Time } from "../../../../util/Time";
import { RTDescriptor } from "../../../graphics/webGpu/descriptor/RTDescriptor";
import { PassType } from "../state/PassType";
import { ILight } from "../../../../components/lights/ILight";
import { Reference } from "../../../../util/Reference";
import { GlobalBindGroup } from "../../../graphics/webGpu/core/bindGroups/GlobalBindGroup";
import { RenderContext } from "../RenderContext";
import { ClusterLightingBuffer } from "../cluster/ClusterLightingBuffer";

type CubeShadowMapInfo = {
  cubeCamera: CubeCamera;
  depthTexture: VirtualTexture[];
  renderContext: RenderContext[];
};

export class PointLightShadowRenderer extends RendererBase {
  public shadowPassCount: number;
  private _forceUpdate = false;
  private _shadowCameraDic: Map<ILight, CubeShadowMapInfo>;
  public shadowCamera: Camera3D;
  public cubeArrayTexture: DepthCubeArrayTexture;
  public colorTexture: VirtualTexture;
  public shadowSize: number = 1024;

  constructor() {
    super();
    this.passType = PassType.POINT_SHADOW;
    this._shadowCameraDic = new Map<ILight, CubeShadowMapInfo>();
    this.cubeArrayTexture = new DepthCubeArrayTexture(
      this.shadowSize,
      this.shadowSize,
      8
    );
    this.colorTexture = new VirtualTexture(
      this.shadowSize,
      this.shadowSize,
      GPUTextureFormat.bgra8unorm,
      false
    );
    Reference.getInstance().attached(this.cubeArrayTexture, this);
  }

  public getShadowCamera(view: View3D, lightBase: ILight): CubeShadowMapInfo {
    let cubeShadowMapInfo: CubeShadowMapInfo;
    if (this._shadowCameraDic.has(lightBase)) {
      cubeShadowMapInfo = this._shadowCameraDic.get(lightBase);
    } else {
      let camera = new PointShadowCubeCamera(
        view.camera.near,
        view.camera.far,
        90,
        true
      );
      camera.label = lightBase.name;
      let depths: VirtualTexture[] = [];
      let renderContext: RenderContext[] = [];
      for (let i = 0; i < 6; i++) {
        let depthTexture = new VirtualTexture(
          this.shadowSize,
          this.shadowSize,
          this.cubeArrayTexture.format,
          false
        );
        let rtFrame = new RTFrame([this.colorTexture], [new RTDescriptor()]);
        depthTexture.name =
          `shadowDepthTexture_` + lightBase.name + i + "_face";
        depths[i] = depthTexture;
        rtFrame.depthTexture = depthTexture;
        rtFrame.label = "shadowRender";
        rtFrame.customSize = true;
        renderContext[i] = this.getRenderContext(rtFrame);
      }
      cubeShadowMapInfo = {
        cubeCamera: camera as any as CubeCamera,
        depthTexture: depths,
        renderContext: renderContext,
      };
      this._shadowCameraDic.set(lightBase, cubeShadowMapInfo);
    }
    return cubeShadowMapInfo;
  }

  render(view: View3D, occlusionSystem: OcclusionSystem) {
    if (!Engine3D.setting.shadow.enable) return;
    this.shadowPassCount = 0;

    let camera = view.camera;
    let scene = view.scene;
    let shadowLight = ShadowLightsCollect.getPointShadowLightWhichScene(scene);
    let li = 0;
    let shadowLightCount = shadowLight.length;
    for (let si = 0; si < shadowLightCount; si++) {
      let light = shadowLight[si];
      if (light.lightData.lightType == LightType.DirectionLight) continue;
      if (
        light.lightData.castShadowIndex > -1 &&
        (light.needUpdateShadow ||
          this._forceUpdate ||
          Time.frame < 5 ||
          light.realTimeShadow)
      ) {
        light.needUpdateShadow = false;

        let cubeShadowMapInfo = this.getShadowCamera(view, light);
        let worldPos = light.transform.worldPosition;

        cubeShadowMapInfo.cubeCamera.x = worldPos.x;
        cubeShadowMapInfo.cubeCamera.y = worldPos.y;
        cubeShadowMapInfo.cubeCamera.z = worldPos.z;

        let collectInfo: CollectInfo;
        cubeShadowMapInfo.cubeCamera.transform.updateWorldMatrix(true);
        {
          occlusionSystem.update(
            cubeShadowMapInfo.cubeCamera.right_camera,
            scene
          );
          collectInfo = EntityCollect.instance.getRenderNodes(
            scene,
            cubeShadowMapInfo.cubeCamera.right_camera
          );
          this.renderSceneOnce(
            0,
            cubeShadowMapInfo,
            view,
            cubeShadowMapInfo.cubeCamera.right_camera,
            collectInfo,
            occlusionSystem
          );

          occlusionSystem.update(
            cubeShadowMapInfo.cubeCamera.left_camera,
            scene
          );
          collectInfo = EntityCollect.instance.getRenderNodes(
            scene,
            cubeShadowMapInfo.cubeCamera.left_camera
          );
          this.renderSceneOnce(
            1,
            cubeShadowMapInfo,
            view,
            cubeShadowMapInfo.cubeCamera.left_camera,
            collectInfo,
            occlusionSystem
          );

          occlusionSystem.update(cubeShadowMapInfo.cubeCamera.up_camera, scene);
          collectInfo = EntityCollect.instance.getRenderNodes(
            scene,
            cubeShadowMapInfo.cubeCamera.up_camera
          );
          this.renderSceneOnce(
            2,
            cubeShadowMapInfo,
            view,
            cubeShadowMapInfo.cubeCamera.up_camera,
            collectInfo,
            occlusionSystem
          );

          occlusionSystem.update(
            cubeShadowMapInfo.cubeCamera.down_camera,
            scene
          );
          collectInfo = EntityCollect.instance.getRenderNodes(
            scene,
            cubeShadowMapInfo.cubeCamera.down_camera
          );
          this.renderSceneOnce(
            3,
            cubeShadowMapInfo,
            view,
            cubeShadowMapInfo.cubeCamera.down_camera,
            collectInfo,
            occlusionSystem
          );

          occlusionSystem.update(
            cubeShadowMapInfo.cubeCamera.front_camera,
            scene
          );
          collectInfo = EntityCollect.instance.getRenderNodes(
            scene,
            cubeShadowMapInfo.cubeCamera.front_camera
          );
          this.renderSceneOnce(
            4,
            cubeShadowMapInfo,
            view,
            cubeShadowMapInfo.cubeCamera.front_camera,
            collectInfo,
            occlusionSystem
          );

          occlusionSystem.update(
            cubeShadowMapInfo.cubeCamera.back_camera,
            scene
          );
          collectInfo = EntityCollect.instance.getRenderNodes(
            scene,
            cubeShadowMapInfo.cubeCamera.back_camera
          );
          this.renderSceneOnce(
            5,
            cubeShadowMapInfo,
            view,
            cubeShadowMapInfo.cubeCamera.back_camera,
            collectInfo,
            occlusionSystem
          );
        }
        let qCommand = GPUContext.beginCommandEncoder();
        for (let i = 0; i < 6; i++) {
          qCommand.copyTextureToTexture(
            {
              texture: cubeShadowMapInfo.depthTexture[i].getGPUTexture(),
              mipLevel: 0,
              origin: { x: 0, y: 0, z: 0 },
            },
            {
              texture: this.cubeArrayTexture.getGPUTexture(),
              mipLevel: 0,
              origin: { x: 0, y: 0, z: light.shadowIndex * 6 + i },
            },
            {
              width: this.shadowSize,
              height: this.shadowSize,
              depthOrArrayLayers: 1,
            }
          );
        }
        GPUContext.endCommandEncoder(qCommand);
        li++;
      }
    }
    this._forceUpdate = false;
  }

  private renderSceneOnce(
    face: number,
    cubeShadowMapInfo: CubeShadowMapInfo,
    view: View3D,
    shadowCamera: Camera3D,
    collectInfo: CollectInfo,
    occlusionSystem: OcclusionSystem
  ) {
    let renderContext = cubeShadowMapInfo.renderContext[face];
    renderContext.clean();
    renderContext.beginOpaqueRenderPass();
    renderContext.encoder.setViewport(
      0,
      0,
      this.shadowSize,
      this.shadowSize,
      0.0,
      1.0
    );
    renderContext.encoder.setScissorRect(
      0,
      0,
      this.shadowSize,
      this.shadowSize
    );

    shadowCamera.onUpdate();
    shadowCamera.transform.updateWorldMatrix(true);

    for (const iterator of collectInfo.opaqueList) {
      let node = iterator;
      if (!node.isDestroyed && node.preInit(this._rendererType)) {
        node.nodeUpdate(
          view,
          this._rendererType,
          renderContext.rendererPassState,
          null
        );
        break;
      }
    }

    this.drawShadowRenderNodes(
      view,
      shadowCamera,
      renderContext,
      collectInfo.opaqueList,
      occlusionSystem
    );
    this.drawShadowRenderNodes(
      view,
      shadowCamera,
      renderContext,
      collectInfo.transparentList,
      occlusionSystem
    );

    renderContext.endRenderPass();
  }

  protected drawShadowRenderNodes(
    view: View3D,
    shadowCamera: Camera3D,
    renderContext: RenderContext,
    nodes: RenderNode[],
    occlusionSystem: OcclusionSystem
  ) {
    GlobalBindGroup.updateCameraGroup(shadowCamera);
    GPUContext.bindCamera(renderContext.encoder, shadowCamera);
    this.drawNodes(
      view,
      shadowCamera,
      renderContext,
      nodes,
      occlusionSystem,
      null
    );
  }

  public drawNodes(
    view: View3D,
    camera: Camera3D,
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
              renderContext.rendererPassState,
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
        if (!renderNode.castShadow) continue;
        if (renderNode.isDestroyed) continue;
        if (!renderNode.preInit(this._rendererType)) {
          renderNode.nodeUpdate(
            view,
            this._rendererType,
            renderContext.rendererPassState,
            clusterLightingBuffer
          );
        }

        for (let material of renderNode.materials) {
          let passes = material.getPass(this._rendererType);
          if (!passes || passes.length == 0) continue;
          for (let pass of passes) {
            const renderShader = pass;
            if (renderShader.pipeline) {
              renderShader.setUniformFloat("cameraFar", camera.far);
              renderShader.setUniformVector3(
                "lightWorldPos",
                camera.transform.worldPosition
              );
              renderShader.materialDataUniformBuffer.apply();
            }
          }
        }

        renderNode.renderPass(view, this.passType, renderContext);
      }
    }
  }
}
