import { CanvasConfig } from "./gfx/graphics/webGpu/CanvasConfig";
import { Color } from "./math/Color";
import { EngineSetting } from "./setting/EngineSetting";
import { Time } from "./util/Time";
import { InputSystem } from "./io/InputSystem";
import { View3D } from "./core/View3D";
import { webGPUContext } from "./gfx/graphics/webGpu/Context3D";
import { RTResourceMap } from "./gfx/renderJob/frame/RTResourceMap";
import { ForwardRenderJob } from "./gfx/renderJob/jobs/ForwardRenderJob";
import { GlobalBindGroup } from "./gfx/graphics/webGpu/core/bindGroups/GlobalBindGroup";
import { Interpolator } from "./math/TimeInterpolator";
import { RendererJob } from "./gfx/renderJob/jobs/RendererJob";
import { Res } from "./assets/Res";
import { ShaderLib } from "./assets/shader/ShaderLib";
import { ShaderUtil } from "./gfx/graphics/webGpu/shader/util/ShaderUtil";
import { ComponentCollect } from "./gfx/renderJob/collect/ComponentCollect";
import { ShadowLightsCollect } from "./gfx/renderJob/collect/ShadowLightsCollect";
import { WasmMatrix } from "@rings/wasm-matrix/WasmMatrix";
import { Matrix4 } from "./math/Matrix4";
import { FXAAPost } from "./gfx/renderJob/post/FXAAPost";
import { PostProcessingComponent } from "./components/post/PostProcessingComponent";
import { GBufferFrame } from "./gfx/renderJob/frame/GBufferFrame";
import { version } from "../package.json";
import { GSplatRuntime } from "./runtime/GSplatRuntime";

/**
 * Engine3D是Rings WebGPU引擎的主类，负责初始化WebGPU上下文、管理渲染循环和处理输入。
 * 它提供了一系列静态方法和属性，用于控制引擎的行为和访问引擎的各个组件。
 */
export class Engine3D {
  /**
   * 资源管理器实例，用于加载和管理引擎所需的各种资源
   */
  public static res: Res;

  /**
   * 输入系统实例，用于处理用户输入（如键盘、鼠标、触摸等）
   */
  public static inputSystem: InputSystem;

  /**
   * 当前活跃的视图列表
   */
  public static views: View3D[];

  /**
   * 帧率计算值，用于限制渲染帧率
   * @private
   */
  private static _frameRateValue: number = 0;

  /**
   * 目标帧率，默认为360（不限制）
   * @private
   */
  private static _frameRate: number = 360;

  /**
   * 上一帧的时间戳
   * @private
   */
  private static _time: number = 0;

  /**
   * 渲染前执行的回调函数
   * @private
   */
  private static _beforeRender: Function;

  /**
   * 渲染循环中执行的回调函数
   * @private
   */
  private static _renderLoop: Function;

  /**
   * 渲染后执行的回调函数
   * @private
   */
  private static _lateRender: Function;

  /**
   * requestAnimationFrame的ID，用于暂停和恢复渲染循环
   * @private
   */
  private static _requestAnimationFrameID: number = 0;

  /**
   * 获取当前设置的帧率
   * @returns 当前帧率值
   */
  public static get frameRate(): number {
    return this._frameRate;
  }

  /**
   * 设置引擎的目标帧率
   * @param value 目标帧率，设置为360或更高表示不限制帧率
   */
  public static set frameRate(value: number) {
    this._frameRate = value;
    this._frameRateValue = 1000 / value;
    if (value >= 360) {
      this._frameRateValue = 0;
    }
  }

  /**
   * 获取当前渲染上下文的尺寸
   * @returns 包含宽度和高度的数组 [width, height]
   */
  public static get size(): number[] {
    return webGPUContext.presentationSize;
  }

  /**
   * 获取当前渲染上下文的宽高比
   * @returns 宽高比值
   */
  public static get aspect(): number {
    return webGPUContext.aspect;
  }

  /**
   * 获取当前渲染上下文的宽度
   * @returns 宽度值（像素）
   */
  public static get width(): number {
    return webGPUContext.windowWidth;
  }

  /**
   * 获取当前渲染上下文的高度
   * @returns 高度值（像素）
   */
  public static get height(): number {
    return webGPUContext.windowHeight;
  }

  public static setting: EngineSetting = {
    doublePrecision: false, // 是否启用双精度浮点计算

    occlusionQuery: {
      enable: true, // 遮挡查询
      debug: false,
    },
    pick: {
      enable: true,
      mode: `bound`,
      detail: `mesh`, // 拾取细节，网格级别
    },
    render: {
      debug: false,
      renderPassState: 4,
      renderState_left: 5, // 左右眼渲染状态
      renderState_right: 5,
      renderState_split: 0.5, // 分屏比例
      quadScale: 1, // 全屏后处理效果的缩放比
      hdrExposure: 1.5, // 曝光值
      debugQuad: -1,
      maxPointLight: 1000, // 最大点光源数量
      maxDirectLight: 4, // 最多平行光数量
      maxSportLight: 1000, // 聚光灯数量
      drawOpMin: 0, // 绘制操作的索引范围
      drawOpMax: Number.MAX_SAFE_INTEGER, // 绘制0-MAX_SAFE_INTEGER之间的绘制操作，其余的忽略
      drawTrMin: 0, // 透明度阈值
      drawTrMax: Number.MAX_SAFE_INTEGER,
      zPrePass: false, // 深度预渲染，重叠较多，可开启
      useLogDepth: false, // 对数深度缓冲，优化远距离渲染精度
      useCompressGBuffer: false, // G-Buffer压缩
      gi: false, // 全局光照
      postProcessing: {
        bloom: {
          downSampleStep: 3, // 降采样间隔
          downSampleBlurSize: 9, // 降采样模糊大小
          downSampleBlurSigma: 1.0, // 高斯模糊默认值
          upSampleBlurSize: 9,
          upSampleBlurSigma: 1.0,
          luminanceThreshole: 1.0, // 亮度阈值
          bloomIntensity: 1.0, // 泛光强度
          hdr: 1.0,
        },
        globalFog: {
          debug: false,
          enable: false,
          fogType: 0.0,
          fogHeightScale: 0.1,
          start: 400,
          end: 10,
          density: 0.02,
          ins: 0.5,
          skyFactor: 0.5, // 天空盒子影响因素
          skyRoughness: 0.4,
          overrideSkyFactor: 0.8, // 覆盖因素
          fogColor: new Color(96 / 255, 117 / 255, 133 / 255, 1),
          falloff: 0.7, // 衰减系数
          rayLength: 200.0, // 光线长度
          scatteringExponent: 2.7, // 散射指数
          dirHeightLine: 10.0, // 方向高度线
        },
        godRay: {
          blendColor: true,
          rayMarchCount: 16,
          scatteringExponent: 5,
          intensity: 0.5,
        },
        ssao: {
          enable: false,
          radius: 0.15,
          bias: -0.1,
          aoPower: 2.0,
          debug: true,
        },
        outline: {
          enable: false,
          strength: 1,
          groupCount: 4,
          outlinePixel: 2,
          fadeOutlinePixel: 4,
          textureScale: 1,
          useAddMode: false,
          debug: true,
        },
        taa: {
          enable: false,
          jitterSeedCount: 8,
          blendFactor: 0.1,
          sharpFactor: 0.6,
          sharpPreBlurFactor: 0.5,
          temporalJitterScale: 0.13,
          debug: true,
        },
        gtao: {
          enable: false,
          darkFactor: 1.0,
          maxDistance: 5.0,
          maxPixel: 50.0,
          rayMarchSegment: 6,
          multiBounce: false,
          usePosFloat32: true,
          blendColor: true,
          debug: true,
        },
        ssr: {
          enable: false,
          pixelRatio: 1,
          fadeEdgeRatio: 0.2,
          rayMarchRatio: 0.5,
          fadeDistanceMin: 600,
          fadeDistanceMax: 2000,
          roughnessThreshold: 0.5,
          powDotRN: 0.2,
          mixThreshold: 0.1,
          debug: true,
        },
        fxaa: {
          enable: false, // 补充静态锯齿，适合性能差的设备
        },
        depthOfView: {
          enable: false, // 景深效果
          iterationCount: 3,
          pixelOffset: 1.0,
          near: 150,
          far: 300,
        },
      },
    },
    shadow: {
      enable: true,
      type: "HARD",
      pointShadowBias: 0.0005,
      shadowSize: 2048,
      pointShadowSize: 1024,
      shadowSoft: 0.005,
      shadowBound: 100,
      shadowBias: 0.05,
      needUpdate: true,
      autoUpdate: true,
      updateFrameRate: 2,
      csmMargin: 0.1,
      csmScatteringExp: 0.7,
      csmAreaScale: 0.4,
      debug: false,
    },
    gi: {
      enable: false,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 0,
      probeSpace: 64,
      probeXCount: 4,
      probeYCount: 2,
      probeZCount: 4,
      probeSize: 32,
      probeSourceTextureSize: 2048,
      octRTMaxSize: 2048,
      octRTSideSize: 16,
      maxDistance: 64 * 1.73,
      normalBias: 0.25,
      depthSharpness: 1,
      hysteresis: 0.98,
      lerpHysteresis: 0.01, // 值越小，反应越慢，可以防止闪烁
      irradianceChebyshevBias: 0.01, // 减少漏光
      rayNumber: 144,
      irradianceDistanceBias: 32,
      indirectIntensity: 1.0, // 控制间接光强度
      ddgiGamma: 2.2,
      bounceIntensity: 0.025, // 光线反弹效果
      probeRoughness: 1,
      realTimeGI: false, // 实时捕捉
      debug: false,
      autoRenderProbe: false,
    },
    sky: {
      type: "HDRSKY",
      sky: null,
      skyExposure: 1.0,
      defaultFar: 65536, //can't be too big
      defaultNear: 1,
    },
    light: {
      maxLight: 4096,
    },
    material: {
      materialChannelDebug: false,
      materialDebug: false,
    },
    loader: {
      numConcurrent: 20, // 并发加载资源数量
    },
    reflectionSetting: {
      // 反射探针
      reflectionProbeMaxCount: 8,
      reflectionProbeSize: 256,
      width: 256 * 6,
      height: 8 * 256,
      enable: true,
    },
  };

  public static renderJobs: Map<View3D, RendererJob>;

  public static async init(
    descriptor: {
      canvasConfig?: CanvasConfig;
      beforeRender?: Function;
      renderLoop?: Function;
      lateRender?: Function;
      engineSetting?: EngineSetting;
    } = {}
  ) {
    console.log("Rings Version", version);
    if (!window.isSecureContext) {
      console.warn(
        "WebGPU is only supported in secure contexts (HTTPS or localhost)"
      );
    }

    this.setting = { ...this.setting, ...descriptor.engineSetting };

    await WasmMatrix.init(Matrix4.allocCount, this.setting.doublePrecision);

    await webGPUContext.init(descriptor.canvasConfig);

    this.setting.reflectionSetting.width =
      this.setting.reflectionSetting.reflectionProbeSize * 6;
    this.setting.reflectionSetting.height =
      this.setting.reflectionSetting.reflectionProbeSize *
      this.setting.reflectionSetting.reflectionProbeMaxCount;
    GBufferFrame.getGBufferFrame(
      GBufferFrame.reflections_GBuffer,
      this.setting.reflectionSetting.width,
      this.setting.reflectionSetting.height,
      false
    );

    ShaderLib.init();

    ShaderUtil.init();

    GlobalBindGroup.init();

    RTResourceMap.init();

    ShadowLightsCollect.init();

    this.res = new Res();

    this.res.initDefault();

    this._beforeRender = descriptor.beforeRender;
    this._renderLoop = descriptor.renderLoop;
    this._lateRender = descriptor.lateRender;
    this.inputSystem = new InputSystem();
    this.inputSystem.initCanvas(webGPUContext.canvas);
    return;
  }

  private static startRenderJob(view: View3D) {
    let renderJob = new ForwardRenderJob(view);
    this.renderJobs.set(view, renderJob);

    if (this.setting.pick.mode == `pixel`) {
      let postProcessing = view.scene.getOrAddComponent(
        PostProcessingComponent
      );
      postProcessing.addPost(FXAAPost);
    }

    if (
      this.setting.pick.mode == `pixel` ||
      this.setting.pick.mode == `bound`
    ) {
      view.enablePick = true;
    }
    return renderJob;
  }

  public static startRenderView(view: View3D) {
    this.renderJobs ||= new Map<View3D, RendererJob>();
    this.views = [view];
    let renderJob = this.startRenderJob(view);
    this.resume();
    return renderJob;
  }

  public static startRenderViews(views: View3D[]) {
    this.renderJobs ||= new Map<View3D, RendererJob>();
    this.views = views;
    for (let i = 0; i < views.length; i++) {
      this.startRenderJob(views[i]);
    }
    this.resume();
  }

  public static getRenderJob(view: View3D): RendererJob {
    return this.renderJobs.get(view);
  }

  public static pause() {
    if (this._requestAnimationFrameID !== 0) {
      cancelAnimationFrame(this._requestAnimationFrameID);
      this._requestAnimationFrameID = 0;
    }
  }

  public static resume() {
    if (this._requestAnimationFrameID === 0)
      this._requestAnimationFrameID = requestAnimationFrame((t) =>
        this.render(t)
      );
  }

  private static async render(time: number) {
    if (this._frameRateValue > 0) {
      let delta = time - this._time;
      if (delta < this._frameRateValue) {
        let t = performance.now();
        await new Promise((res) => {
          setTimeout(() => {
            time += performance.now() - t;
            res(true);
          }, this._frameRateValue - delta);
        });
      }
      this._time = time;
    }
    await this.updateFrame(time);
    this._requestAnimationFrameID = 0;
    this.resume();
  }

  private static async updateFrame(time: number) {
    Time.delta = time - Time.time;
    Time.time = time;
    Time.frame += 1;
    Interpolator.tick(Time.delta);

    /* update all transform */
    let views = this.views;
    let i = 0;
    for (i = 0; i < views.length; i++) {
      const view = views[i];
      view.scene.waitUpdate();
      let [w, h] = webGPUContext.presentationSize;
      view.camera.viewPort.setTo(0, 0, w, h);
    }

    // 帧开始统一调度 3DGS 排序（使用第一个视图的相机）
    if (this.views && this.views.length > 0 && this.views[0]?.camera?.viewMatrix) {
      GSplatRuntime.scheduleAll(this.views[0].camera.viewMatrix);
    }

    if (this._beforeRender) await this._beforeRender();

    /****** auto start with component list *****/
    // ComponentCollect.startComponents();

    /****** auto before update with component list *****/
    for (const iterator of ComponentCollect.componentsBeforeUpdateList) {
      let k = iterator[0];
      let v = iterator[1];
      for (const iterator2 of v) {
        let f = iterator2[0];
        let c = iterator2[1];
        if (f.enable) {
          c(k);
        }
      }
    }

    let command = webGPUContext.device.createCommandEncoder();
    for (const iterator of ComponentCollect.componentsComputeList) {
      let k = iterator[0];
      let v = iterator[1];
      for (const iterator2 of v) {
        let f = iterator2[0];
        let c = iterator2[1];
        if (f.enable) {
          c(k, command);
        }
      }
    }

    webGPUContext.device.queue.submit([command.finish()]);

    /****** auto update with component list *****/
    for (const iterator of ComponentCollect.componentsUpdateList) {
      let k = iterator[0];
      let v = iterator[1];
      for (const iterator2 of v) {
        let f = iterator2[0];
        let c = iterator2[1];
        if (f.enable) {
          c(k);
        }
      }
    }

    for (const iterator of ComponentCollect.graphicComponent) {
      let k = iterator[0];
      let v = iterator[1];
      for (const iterator2 of v) {
        let f = iterator2[0];
        let c = iterator2[1];
        if (k && f.enable) {
          c(k);
        }
      }
    }

    if (this._renderLoop) {
      await this._renderLoop();
    }

    WasmMatrix.updateAllContinueTransform(0, Matrix4.useCount, 16);
    /****** auto update global matrix share buffer write to gpu *****/
    let globalMatrixBindGroup = GlobalBindGroup.modelMatrixBindGroup;
    globalMatrixBindGroup.writeBuffer(Matrix4.useCount * 16);

    this.renderJobs.forEach((v, k) => {
      if (!v.renderState) {
        v.start();
      }
      v.renderFrame();
    });

    /****** auto late update with component list *****/
    for (const iterator of ComponentCollect.componentsLateUpdateList) {
      let k = iterator[0];
      let v = iterator[1];
      for (const iterator2 of v) {
        let f = iterator2[0];
        let c = iterator2[1];
        if (f.enable) {
          c(k);
        }
      }
    }

    if (this._lateRender) await this._lateRender();
  }
}
