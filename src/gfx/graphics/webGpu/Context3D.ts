import { CEvent, Texture } from "../../..";
import { CEventDispatcher } from "../../../event/CEventDispatcher";
import { CResizeEvent } from "../../../event/CResizeEvent";
import { CanvasConfig } from "./CanvasConfig";

export class Context3D extends CEventDispatcher {
  public adapter: GPUAdapter | null;
  public device: GPUDevice;
  public context: GPUCanvasContext;
  public aspect: number;
  public presentationSize: number[] = [0, 0];
  public presentationFormat: GPUTextureFormat;
  public canvas: HTMLCanvasElement;
  public windowWidth: number;
  public windowHeight: number;
  public canvasConfig: CanvasConfig;
  private _pixelRatio: number = 1.0;
  private _resizeEvent: CEvent;

  public get pixelRatio() {
    return this._pixelRatio;
  }

  async init(canvasConfig?: CanvasConfig): Promise<boolean> {
    this.canvasConfig = canvasConfig;

    if (canvasConfig && canvasConfig.canvas) {
      this.canvas = canvasConfig.canvas;
      if (this.canvas === null) {
        throw new Error("no Canvas");
      }

      if (!this.canvas.style.width)
        this.canvas.style.width = this.canvas.width + "px";
      if (!this.canvas.style.height)
        this.canvas.style.height = this.canvas.height + "px";
    } else {
      this.canvas = document.createElement("canvas");
      this.canvas.style.position = `absolute`;
      this.canvas.style.top = "0px";
      this.canvas.style.left = "0px";
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
      this.canvas.style.zIndex = canvasConfig?.zIndex
        ? canvasConfig.zIndex.toString()
        : "0";
      document.body.appendChild(this.canvas);
    }

    if (canvasConfig && canvasConfig.backgroundImage) {
      this.canvas.style.background = `url(${canvasConfig.backgroundImage})`;
      this.canvas.style["background-size"] = "cover";
      this.canvas.style["background-position"] = "center";
    } else {
      this.canvas.style.background = "transparent";
    }

    this.canvas.style["touch-action"] = "none";
    this.canvas.style["object-fit"] = "cover";

    if (navigator.gpu === undefined) {
      throw new Error("Your browser does not support WebGPU!");
    }

    this.adapter = await navigator.gpu.requestAdapter({
      powerPreference: "high-performance", // 或 low-power
      // xrCompatible: canvasConfig?.xrCompatible, // 可选：如果需要 XR 支持
    });

    if (this.adapter == null) {
      throw new Error("Your browser does not support WebGPU!");
    }

    // Request optional features - only add features that are actually supported by the adapter
    // This prevents device creation failures on systems that don't support certain features
    const requiredFeatures: GPUFeatureName[] = [];
    const requireFeature = (feature: GPUFeatureName): boolean => {
      const supported = this.adapter!.features.has(feature);
      if (supported) {
        requiredFeatures.push(feature);
      }
      return supported;
    };

    // Core features for Gaussian splats and general rendering
    requireFeature("bgra8unorm-storage");
    requireFeature("depth-clip-control");
    requireFeature("depth32float-stencil8");
    requireFeature("indirect-first-instance");
    requireFeature("rg11b10ufloat-renderable");

    // Optional performance features
    requireFeature("float32-filterable"); // For HDR textures
    requireFeature("float32-blendable"); // For HDR blending
    requireFeature("timestamp-query"); // For performance profiling
    requireFeature("shader-f16"); // For reduced precision shaders (if supported)
    requireFeature("clip-distances"); // For advanced clipping

    // Texture compression features (optional, but useful for performance)
    requireFeature("texture-compression-bc");
    requireFeature("texture-compression-etc2");
    requireFeature("texture-compression-astc");

    // Copy all adapter limits to requiredLimits to get the best performance limits available
    // This is similar to PlayCanvas's approach for maximum performance
    const adapterLimits = this.adapter?.limits;
    const requiredLimits: Record<string, number> = {};
    if (adapterLimits) {
      for (const limitName in adapterLimits) {
        // Skip these as they fail on Windows Chrome and are not part of spec currently
        if (limitName === 'minSubgroupSize' || limitName === 'maxSubgroupSize') {
          continue;
        }
        requiredLimits[limitName] = adapterLimits[limitName];
      }
    }

    this.device = await this.adapter.requestDevice({
      requiredFeatures: requiredFeatures,
      requiredLimits: requiredLimits,
      defaultQueue: {
        label: 'RingsDefaultQueue'
      }
    });

    if (this.device == null) {
      throw new Error("Your browser does not support WebGPU!");
    }

    this._pixelRatio =
      this.canvasConfig?.devicePixelRatio || window.devicePixelRatio || 1;
    this._pixelRatio = Math.min(this._pixelRatio, 2.0);

    this.device.label = "RingsWebGPUDevice";
    this.presentationFormat = navigator.gpu.getPreferredCanvasFormat();

    this.context = this.canvas.getContext("webgpu");
    this.context.configure({
      device: this.device,
      format: this.presentationFormat,
      // RENDER_ATTACHMENT is required, COPY_SRC allows scene grab/copy operations
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC | GPUTextureUsage.COPY_DST,
      alphaMode: "premultiplied",
      colorSpace: "srgb",
      // Optional: viewFormats can be added here if needed for SRGB views
      // viewFormats: [this.presentationFormat + '-srgb']
    });

    this._resizeEvent = new CResizeEvent(CResizeEvent.RESIZE, {
      width: this.windowWidth,
      height: this.windowHeight,
    });
    const resizeObserver = new ResizeObserver(() => {
      this.updateSize();
      Texture.destroyTexture();
    });

    resizeObserver.observe(this.canvas);
    this.updateSize();
    return true;
  }

  public updateSize() {
    let w = Math.floor(this.canvas.clientWidth * this.pixelRatio);
    let h = Math.floor(this.canvas.clientHeight * this.pixelRatio);
    if (w != this.windowWidth || h != this.windowHeight) {
      this.canvas.width = this.windowWidth = w;
      this.canvas.height = this.windowHeight = h;
      this.presentationSize[0] = this.windowWidth;
      this.presentationSize[1] = this.windowHeight;
      this.aspect = this.windowWidth / this.windowHeight;

      this._resizeEvent.data.width = this.windowWidth;
      this._resizeEvent.data.height = this.windowHeight;
      this.dispatchEvent(this._resizeEvent);
    }
  }
}

export let webGPUContext = new Context3D();
