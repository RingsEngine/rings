import { GPUAddressMode, GPUFilterMode } from "../../WebGPUConst";
import { TextureMipmapGenerator } from "./TextureMipmapGenerator";
import { webGPUContext } from "../../Context3D";

export class Texture implements GPUSamplerDescriptor {
  public name: string;
  public url: string;
  protected gpuTexture: GPUTexture;
  public pid: number;
  public view: GPUTextureView | GPUExternalTexture; // Assigned later
  public gpuSampler: GPUSampler;
  public gpuSampler_comparison: GPUSampler;
  public format: GPUTextureFormat;
  public usage: GPUFlagsConstant;
  public width: number = 4;
  public height: number = 4;
  public depthOrArrayLayers: number = 1;
  public numberLayer: number = 1;
  public viewDescriptor: GPUTextureViewDescriptor;
  public textureDescriptor: GPUTextureDescriptor;
  public visibility: number =
    GPUShaderStage.COMPUTE | GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT;
  public textureBindingLayout: GPUTextureBindingLayout = {
    viewDimension: `2d`,
    multisampled: false,
  };
  public samplerBindingLayout: GPUSamplerBindingLayout = {
    type: `filtering`,
  };
  public sampler_comparisonBindingLayout: GPUSamplerBindingLayout = {
    type: `comparison`,
  };
  public flipY: boolean;
  public isVideoTexture?: boolean;
  public isHDRTexture?: boolean;
  private _useMipmap: boolean = false;
  private _sourceImageData: HTMLCanvasElement | ImageBitmap | OffscreenCanvas;
  private _addressModeU?: GPUAddressMode;
  private _addressModeV?: GPUAddressMode;
  private _addressModeW?: GPUAddressMode;
  private _magFilter?: GPUFilterMode;
  private _minFilter?: GPUFilterMode;
  private _mipmapFilter?: GPUMipmapFilterMode;
  private _lodMinClamp?: number;
  private _lodMaxClamp?: number;
  private _compare?: GPUCompareFunction;
  private _maxAnisotropy?: number;
  public mipmapCount: number = 1;
  protected _textureChange: boolean = false;

  constructor(
    width: number = 32,
    height: number = 32,
    numberLayer: number = 1
  ) {
    this.width = width;
    this.height = height;
    this.numberLayer = numberLayer;

    this.minFilter = GPUFilterMode.linear;
    this.magFilter = GPUFilterMode.linear;
    this.mipmapFilter = GPUFilterMode.linear;
    this.addressModeU = GPUAddressMode.repeat;
    this.addressModeV = GPUAddressMode.repeat;
  }

  public init(): this {
    let self = this;
    if (self[`internalCreateBindingLayoutDesc`]) {
      self[`internalCreateBindingLayoutDesc`]();
    }
    if (self[`internalCreateTexture`]) {
      self[`internalCreateTexture`]();
    }
    if (self[`internalCreateView`]) {
      self[`internalCreateView`]();
    }
    if (self[`internalCreateSampler`]) {
      self[`internalCreateSampler`]();
    }
    return this;
  }

  protected createTextureDescriptor(
    width: number,
    height: number,
    mipLevelCount: number,
    format: GPUTextureFormat,
    usage: number = GPUTextureUsage.TEXTURE_BINDING |
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.COPY_SRC |
      GPUTextureUsage.RENDER_ATTACHMENT |
      GPUTextureUsage.STORAGE_BINDING,
    sizeCount: number = 1,
    sampleCount: number = 0
  ) {
    this.width = width;
    this.height = height;
    this.format = format;
    this.usage = usage;
    this.textureDescriptor = {
      size: [width, height, sizeCount],
      mipLevelCount: mipLevelCount,
      format: format,
      usage: usage,
      label: `${this.name + this.width + this.height + this.format}`,
    };

    if (sampleCount > 0) {
      this.textureDescriptor.sampleCount = sampleCount;
    }

    if (sizeCount > 1) {
      this.viewDescriptor = {
        format: format,
        dimension: `2d-array`,
      };
    } else {
      this.viewDescriptor = {
        format: format,
        dimension: this.textureBindingLayout.viewDimension,
        mipLevelCount: mipLevelCount,
        baseMipLevel: 0,
      };
    }
  }

  protected generate(
    imageBitmap: HTMLCanvasElement | ImageBitmap | OffscreenCanvas
  ) {
    let width = 32;
    let height = 32;

    if ("width" in imageBitmap) {
      width = imageBitmap.width;
      height = imageBitmap.height;
    }

    if (width < 32 || height < 32) {
      console.log(imageBitmap["name"] + "Size must be greater than 32!");
    }

    this.width = width;
    this.height = height;

    // this.visibility = GPUShaderStage.FRAGMENT;

    this.createTexture(imageBitmap);
  }

  private createTexture(
    imageBitmap: HTMLCanvasElement | ImageBitmap | OffscreenCanvas
  ) {
    this._sourceImageData = imageBitmap;
    this.updateTextureDescription();

    this.updateGPUTexture();

    let device = webGPUContext.device;
    if (this.gpuTexture instanceof GPUTexture)
      device.queue.copyExternalImageToTexture(
        { source: this._sourceImageData },
        { texture: this.gpuTexture },
        [this.width, this.height]
      );

    if (this.useMipmap) {
      TextureMipmapGenerator.webGPUGenerateMipmap(this);
      // TextureMipmapCompute.createMipmap(this,this.mipmapCount);
    }
  }

  public get useMipmap(): boolean {
    return this._useMipmap;
  }

  public set useMipmap(value: boolean) {
    if (value) {
      this.samplerBindingLayout.type = "filtering";
      if (this._useMipmap == false && this._sourceImageData) {
        this._useMipmap = true;
        this.updateTextureDescription();
        this.updateGPUTexture();

        let device = webGPUContext.device;
        if (this.gpuTexture instanceof GPUTexture)
          device.queue.copyExternalImageToTexture(
            { source: this._sourceImageData },
            { texture: this.gpuTexture },
            [this.width, this.height]
          );
        TextureMipmapGenerator.webGPUGenerateMipmap(this);
      }
    } else {
      this.samplerBindingLayout.type = "non-filtering";
      if (this._useMipmap == true && this._sourceImageData) {
        this._useMipmap = false;
        this.updateTextureDescription();
        this.updateGPUTexture();

        let device = webGPUContext.device;
        if (this.gpuTexture instanceof GPUTexture)
          device.queue.copyExternalImageToTexture(
            { source: this._sourceImageData },
            { texture: this.gpuTexture },
            [this.width, this.height]
          );
      }
    }

    this._textureChange = true;
    this._useMipmap = value;
    this.noticeChange();
  }

  public get sourceImageData() {
    return this._sourceImageData;
  }

  public getMipmapCount() {
    let w = this.width;
    let h = this.height;
    let maxSize = Math.max(w, h);
    return (1 + Math.log2(maxSize)) | 0;
  }

  protected updateTextureDescription() {
    // let mipmapCount = this.useMipmap ? Math.floor(Math.log2(this.width)) : 1;
    this.mipmapCount = Math.floor(this.useMipmap ? this.getMipmapCount() : 1);
    this.createTextureDescriptor(
      this.width,
      this.height,
      this.mipmapCount,
      this.format
    );
  }

  protected updateGPUTexture() {
    if (this.gpuTexture) {
      if (this.gpuTexture instanceof GPUTexture) this.gpuTexture.destroy();
    }
    this.gpuTexture = null;
    this.view = null;
    this.gpuTexture = this.getGPUTexture();
  }

  public getGPUTexture() {
    if (!this.gpuTexture) {
      this.gpuTexture = webGPUContext.device.createTexture(
        this.textureDescriptor
      );
    }
    return this.gpuTexture;
  }

  public getGPUView(index: number = 0): GPUTextureView | GPUExternalTexture {
    if (!this.view) {
      this.gpuTexture = this.getGPUTexture();
      if (this.gpuTexture instanceof GPUTexture) {
        this.view = this.gpuTexture.createView(this.viewDescriptor);
        this.view.label = this.name;
      }
    }
    return this.view;
  }

  protected _stateChangeRef: Map<any, Function> = new Map();

  public bindStateChange(fun: Function, ref: any) {
    this._stateChangeRef.set(ref, fun);
  }

  public unBindStateChange(ref: any) {
    this._stateChangeRef.delete(ref);
  }

  protected noticeChange() {
    this.gpuSampler = webGPUContext.device.createSampler(this);
    this._stateChangeRef.forEach((v, k) => {
      v();
    });
  }

  public destroy(force?: boolean) {
    if (force && this.gpuTexture instanceof GPUTexture) {
      this.gpuSampler = null;
      this.gpuSampler_comparison = null;
      this.textureBindingLayout = null;
      this.textureDescriptor = null;
      this.gpuTexture.destroy();
      this.gpuTexture = null;
    }
    this._stateChangeRef.clear();
  }

  public get addressModeU(): GPUAddressMode {
    return this._addressModeU;
  }

  public set addressModeU(value: GPUAddressMode) {
    if (this._addressModeU != value) {
      this._addressModeU = value;
      this.noticeChange();
    }
  }

  public get addressModeV(): GPUAddressMode {
    return this._addressModeV;
  }

  public set addressModeV(value: GPUAddressMode) {
    if (this._addressModeV != value) {
      this._addressModeV = value;
      this.noticeChange();
    }
  }

  public get addressModeW(): GPUAddressMode {
    return this._addressModeW;
  }

  public set addressModeW(value: GPUAddressMode) {
    if (this._addressModeW != value) {
      this._addressModeW = value;
      this.noticeChange();
    }
  }

  public get magFilter(): GPUFilterMode {
    return this._magFilter;
  }

  public set magFilter(value: GPUFilterMode) {
    if (this._magFilter != value) {
      this._magFilter = value;
      this.noticeChange();
    }
  }

  public get minFilter(): GPUFilterMode {
    return this._minFilter;
  }

  public set minFilter(value: GPUFilterMode) {
    if (this._minFilter != value) {
      this._minFilter = value;
      this.noticeChange();
    }
  }

  public get mipmapFilter(): GPUMipmapFilterMode {
    return this._mipmapFilter;
  }

  public set mipmapFilter(value: GPUMipmapFilterMode) {
    if (this._mipmapFilter != value) {
      this._mipmapFilter = value;
      this.noticeChange();
    }
  }

  public get lodMinClamp(): number {
    return this._lodMinClamp;
  }

  public set lodMinClamp(value: number) {
    if (this._lodMinClamp != value) {
      this._lodMinClamp = value;
      this.noticeChange();
    }
  }

  public get lodMaxClamp(): number {
    return this._lodMaxClamp;
  }

  public set lodMaxClamp(value: number) {
    if (this._lodMaxClamp != value) {
      this._lodMaxClamp = value;
      this.noticeChange();
    }
  }

  public get compare(): GPUCompareFunction {
    return this._compare;
  }

  public set compare(value: GPUCompareFunction) {
    if (this._compare != value) {
      this._compare = value;
      this.noticeChange();
    }
  }

  public get maxAnisotropy(): number {
    return this._maxAnisotropy;
  }

  public set maxAnisotropy(value: number) {
    if (this._maxAnisotropy != value) {
      this._maxAnisotropy = value;
      this.noticeChange();
    }
  }

  private static _texs: GPUTexture[] = [];
  public static delayDestroyTexture(tex: GPUTexture) {
    if (!this._texs.includes(tex)) {
      this._texs.push(tex);
    }
  }

  public static destroyTexture() {
    if (this._texs.length > 0) {
      while (this._texs.length > 0) {
        this._texs.shift().destroy();
      }
    }
  }
}
