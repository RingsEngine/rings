import { MeshRenderer } from "../components/renderer/MeshRenderer";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { WebGPUDescriptorCreator } from "../gfx/graphics/webGpu/descriptor/WebGPUDescriptorCreator";
import { webGPUContext } from "../gfx/graphics/webGpu/Context3D";
import { RTFrame } from "../gfx/renderJob/frame/RTFrame";
import { PlaneGeometry } from "../shape/PlaneGeometry";
import { Object3D } from "./entities/Object3D";
import { RendererPassState } from "../gfx/renderJob/passRenderer/state/RendererPassState";
import { GPUContext } from "../gfx/renderJob/GPUContext";
import { PassType } from "../gfx/renderJob/passRenderer/state/PassType";
import { View3D } from "./View3D";
import { Material } from "../materials/Material";
import { QuadShader } from "../loader/parser/prefab/mats/shader/QuadShader";
import { CResizeEvent } from "../event/CResizeEvent";

export class ViewQuad extends Object3D {
  width: number = 128;
  height: number = 128;
  quadRenderer: MeshRenderer;
  material: Material;
  rendererPassState: RendererPassState;
  quadShader: QuadShader;

  constructor(
    vs: string = "QuadGlsl_vs",
    fs: string = "QuadGlsl_fs",
    rtFrame: RTFrame,
    multisample: number = 0,
    f: boolean = false
  ) {
    super();
    let renderTexture = rtFrame ? rtFrame.renderTargets : [];
    this.material = new Material();
    this.quadShader = new QuadShader(vs, fs);
    this.material.shader = this.quadShader;
    this.quadRenderer = this.addComponent(MeshRenderer);
    this.quadRenderer.material = this.material;
    this.quadRenderer.castGI = false;
    this.quadRenderer.castShadow = false;
    this.quadRenderer.drawType = f ? 2 : 0;
    this.quadRenderer.geometry = new PlaneGeometry(100, 100, 1, 1);
    this.quadRenderer.material = this.material;
    this.quadRenderer[`__start`]();
    this.quadRenderer[`_enable`] = true;
    this.quadRenderer[`onEnable`]();
    this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(
      rtFrame,
      `load`
    );
    if (multisample > 0) {
      this.rendererPassState.multisample =
        this.quadShader.getDefaultColorShader().shaderState.multisample;
      this.rendererPassState.multiTexture = webGPUContext.device.createTexture({
        size: {
          width: webGPUContext.presentationSize[0],
          height: webGPUContext.presentationSize[1],
        },
        sampleCount: multisample,
        format:
          renderTexture.length > 0
            ? renderTexture[0].format
            : webGPUContext.presentationFormat,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
      });
    }

    webGPUContext.addEventListener(
      CResizeEvent.RESIZE,
      (e) => {
        this.rendererPassState =
          WebGPUDescriptorCreator.createRendererPassState(rtFrame, `load`);
        if (multisample > 0) {
          this.rendererPassState.multisample =
            this.quadShader.getDefaultColorShader().shaderState.multisample;
          this.rendererPassState.multiTexture =
            webGPUContext.device.createTexture({
              size: {
                width: webGPUContext.presentationSize[0],
                height: webGPUContext.presentationSize[1],
              },
              sampleCount: multisample,
              format:
                renderTexture.length > 0
                  ? renderTexture[0].format
                  : webGPUContext.presentationFormat,
              usage: GPUTextureUsage.RENDER_ATTACHMENT,
            });
        }
      },
      this
    );
  }

  public renderTarget(
    view: View3D,
    viewQuad: ViewQuad,
    command: GPUCommandEncoder
  ) {
    let camera = view.camera;
    let encoder = GPUContext.beginRenderPass(
      command,
      viewQuad.rendererPassState
    );
    GPUContext.bindCamera(encoder, camera);
    viewQuad.quadRenderer.nodeUpdate(
      view,
      PassType.COLOR,
      viewQuad.rendererPassState,
      null
    );
    viewQuad.quadRenderer.renderPass2(
      view,
      PassType.COLOR,
      viewQuad.rendererPassState,
      null,
      encoder
    );
    GPUContext.endPass(encoder);
  }

  public renderToViewQuad(
    view: View3D,
    viewQuad: ViewQuad,
    command: GPUCommandEncoder,
    colorTexture: Texture
  ) {
    let camera = view.camera;

    viewQuad.quadShader.setTexture("baseMap", colorTexture);
    let encoder = GPUContext.beginRenderPass(
      command,
      viewQuad.rendererPassState
    );
    GPUContext.bindCamera(encoder, camera);

    viewQuad.quadRenderer.nodeUpdate(
      view,
      PassType.COLOR,
      viewQuad.rendererPassState,
      null
    );
    viewQuad.quadRenderer.renderPass2(
      view,
      PassType.COLOR,
      viewQuad.rendererPassState,
      null,
      encoder
    );
    GPUContext.endPass(encoder);
  }
}
