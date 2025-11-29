import { GPUTextureFormat } from "../gfx/graphics/webGpu/WebGPUConst";
import { LoaderBase } from "../loader/LoaderBase";
import { LoaderFunctions } from "../loader/LoaderFunctions";
import { StringUtil } from "../util/StringUtil";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";

export class BitmapTexture2D extends Texture {
  private _source:
    | HTMLCanvasElement
    | ImageBitmap
    | OffscreenCanvas
    | HTMLImageElement;
  public premultiplyAlpha: PremultiplyAlpha = "none";

  constructor(useMipmap: boolean = true) {
    super();
    this.useMipmap = useMipmap;
    this.lodMinClamp = 0;
    this.lodMaxClamp = 4;
  }

  public get source():
    | HTMLCanvasElement
    | ImageBitmap
    | OffscreenCanvas
    | HTMLImageElement {
    return this._source;
  }

  public set source(
    value: HTMLCanvasElement | ImageBitmap | OffscreenCanvas | HTMLImageElement
  ) {
    if (this._source && this._source instanceof ImageBitmap) {
      try {
        this._source.close();
      } catch (e) {
        // ImageBitmap 可能已经被关闭，忽略错误
      }
    }
    this._source = value;

    if (this._source instanceof HTMLImageElement) {
      this._source.decode().then(async () => {
        if (this._source instanceof HTMLImageElement) {
          const imageBitmap = await createImageBitmap(this._source, {
            imageOrientation: this.flipY ? "flipY" : "from-image",
            premultiplyAlpha: "none",
          });
          this.generate(imageBitmap);
        }
      });
    } else {
      if (
        this._source instanceof HTMLCanvasElement ||
        this._source instanceof ImageBitmap
      ) {
        this.generate(this._source);
      }
    }
  }

  public async load(url: string, loaderFunctions?: LoaderFunctions) {
    this.name = StringUtil.getURLName(url);
    if (url.indexOf(";base64") != -1) {
      const img = document.createElement("img");
      let start = url.indexOf("data:image");
      let uri = url.substring(start, url.length);
      img.src = uri;
      await img.decode();
      img.width = Math.max(img.width, 32);
      img.height = Math.max(img.height, 32);
      const imageBitmap = await createImageBitmap(img, {
        resizeWidth: img.width,
        resizeHeight: img.height,
        imageOrientation: this.flipY ? "flipY" : "from-image",
        premultiplyAlpha: "none",
      });
      this.format = GPUTextureFormat.rgba8unorm;
      this.generate(imageBitmap);
    } else {
      return new Promise((succ, fial) => {
        fetch(url, {
          headers: Object.assign(
            {
              Accept: "image/avif,image/webp,*/*",
            },
            loaderFunctions?.headers
          ),
        }).then((r) => {
          LoaderBase.read(url, r, loaderFunctions).then((chunks) => {
            let img = new Blob([chunks], { type: "image/jpeg" });
            chunks = null;
            this.loadFromBlob(img).then(() => {
              succ(true);
            });
          });
        });
      });
    }
    return true;
  }

  private imageData: Blob;
  public async loadFromBlob(imgData: Blob) {
    this.imageData = imgData;
    let imageBitmap = await createImageBitmap(imgData, {
      imageOrientation: this.flipY ? "flipY" : "from-image",
      premultiplyAlpha: "none",
    });
    if (imageBitmap.width < 32 || imageBitmap.height < 32) {
      let width = Math.max(imageBitmap.width, 32);
      let height = Math.max(imageBitmap.height, 32);
      const oldImageBitmap = imageBitmap;
      imageBitmap = await createImageBitmap(imageBitmap, {
        resizeWidth: width,
        resizeHeight: height,
        imageOrientation: this.flipY ? "flipY" : "from-image",
        premultiplyAlpha: "none",
      });
      try {
        oldImageBitmap.close();
      } catch (e) {
        // ImageBitmap 可能已经被关闭，忽略错误
      }
    }
    this.format = GPUTextureFormat.rgba8unorm;
    this.generate(imageBitmap);
    return true;
  }

  public destroy(force?: boolean) {
    if (this._source && this._source instanceof ImageBitmap) {
      try {
        this._source.close();
      } catch (e) {
        // ImageBitmap 可能已经被关闭，忽略错误
      }
      this._source = null;
    }
    super.destroy(force);
  }
}
