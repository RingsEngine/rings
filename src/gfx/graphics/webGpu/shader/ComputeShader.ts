import { Texture } from "../core/texture/Texture";
import { webGPUContext } from "../Context3D";
import { ShaderPassBase } from "./ShaderPassBase";
import {
  ShaderReflection,
  ShaderReflectionVarInfo,
} from "./value/ShaderReflectionInfo";
import { Preprocessor } from "./util/Preprocessor";
import { CResizeEvent, Reference } from "../../../..";

export class ComputeShader extends ShaderPassBase {
  public entryPoint: string = `CsMain`;
  public workerSizeX: number = 1;
  public workerSizeY: number = 0;
  public workerSizeZ: number = 0;
  protected _computePipeline: GPUComputePipeline;
  protected _csShaderModule: GPUShaderModule;
  protected _destCS: string;
  protected _sourceCS: string;
  private _storageTextureDic: Map<string, Texture>;
  private _sampleTextureDic: Map<string, Texture>;
  private _groupsShaderReflectionVarInfos: ShaderReflectionVarInfo[][];
  private _groupCache: { [name: string]: { groupIndex: number; infos: any } } =
    {};

  constructor(computeShader: string) {
    super();
    this._sourceCS = computeShader;
    ShaderReflection.getShaderReflection2(computeShader, this);
    this._storageTextureDic = new Map<string, Texture>();
    this._sampleTextureDic = new Map<string, Texture>();
  }

  public setStorageTexture(name: string, texture: Texture) {
    if (!this._storageTextureDic.has(name)) {
      this._storageTextureDic.set(name, texture);
    }
  }

  public setSamplerTexture(name: string, texture: Texture) {
    this._sampleTextureDic.set(name, texture);
  }

  public compute(computePass: GPUComputePassEncoder) {
    if (!this._computePipeline) {
      this.genComputePipeline();
    }

    computePass.setPipeline(this._computePipeline);
    for (let i = 0; i < this.bindGroups.length; ++i) {
      computePass.setBindGroup(i, this.bindGroups[i]);
    }

    if (this.workerSizeX && this.workerSizeY && this.workerSizeZ) {
      computePass.dispatchWorkgroups(
        this.workerSizeX,
        this.workerSizeY,
        this.workerSizeZ
      );
    } else if (this.workerSizeX && this.workerSizeY) {
      computePass.dispatchWorkgroups(this.workerSizeX, this.workerSizeY);
    } else {
      computePass.dispatchWorkgroups(this.workerSizeX);
    }
  }

  private createBufferBindGroup(
    groupIndex: number,
    varName: string,
    binding: number,
    entries: GPUBindGroupEntry[]
  ) {
    let buffer = this._bufferDic.get(varName);
    if (buffer) {
      let entry: GPUBindGroupEntry = {
        binding: binding,
        resource: {
          buffer: buffer.buffer,
          offset: 0, //buffer.memory.shareFloat32Array.byteOffset,
          size: buffer.memory.shareDataBuffer.byteLength,
        },
      };
      entries.push(entry);
    } else {
      console.error(
        `ComputeShader(${this.instanceID})`,
        `buffer ${varName} is missing!`
      );
    }
  }

  protected noticeBufferChange(name: string) {
    let bindGroupCache = this._groupCache[name];
    if (bindGroupCache) {
      this.genGroups(bindGroupCache.groupIndex, bindGroupCache.infos, true);
    }
  }

  protected genGroups(
    groupIndex: number,
    infos: ShaderReflectionVarInfo[][],
    force: boolean = false
  ) {
    if (!this.bindGroups[groupIndex] || force) {
      const shaderRefs: ShaderReflectionVarInfo[] = infos[groupIndex];

      let entries: GPUBindGroupEntry[] = [];
      for (let j = 0; j < shaderRefs.length; ++j) {
        const refs = shaderRefs[j];
        if (!refs) continue;

        switch (refs.varType) {
          case `uniform`:
          case `storage-read`:
          case `storage-read_write`:
            {
              this.createBufferBindGroup(
                groupIndex,
                refs.varName,
                refs.binding,
                entries
              );
              this._groupCache[refs.varName] = {
                groupIndex: groupIndex,
                infos: infos,
              };
            }
            break;
          case `var`:
            {
              if (refs.dataType == `sampler`) {
                let textureName = refs.varName.replace(`Sampler`, ``);
                let texture = this._sampleTextureDic.get(textureName);
                if (texture) {
                  let entry: GPUBindGroupEntry = {
                    binding: refs.binding,
                    resource: texture.gpuSampler,
                  };
                  entries.push(entry);
                } else {
                  console.error(
                    `ComputeShader(${this.instanceID})`,
                    `texture ${refs.varName} is missing! `
                  );
                }
              } else if (refs.dataType == `sampler_comparison`) {
                let textureName = refs.varName.replace(`Sampler`, ``);
                let texture = this._sampleTextureDic.get(textureName);
                if (texture) {
                  let entry: GPUBindGroupEntry = {
                    binding: refs.binding,
                    resource: texture.gpuSampler_comparison,
                  };
                  entries.push(entry);
                } else {
                  console.error(
                    `ComputeShader(${this.instanceID})`,
                    `texture ${refs.varName} is missing! `
                  );
                }
              } else if (refs.dataType.indexOf("texture_storage") != -1) {
                let texture = this._storageTextureDic.get(refs.varName);
                if (texture) {
                  let entry: GPUBindGroupEntry = {
                    binding: refs.binding,
                    resource: texture.getGPUView(),
                  };
                  entries.push(entry);
                  Reference.getInstance().attached(texture, this);
                } else {
                  console.error(
                    `ComputeShader(${this.instanceID})`,
                    `texture ${refs.varName} is missing! `
                  );
                }
              } else if (refs.dataType.indexOf("texture") != -1) {
                let texture = this._sampleTextureDic.get(refs.varName);
                if (texture) {
                  let entry: GPUBindGroupEntry = {
                    binding: refs.binding,
                    resource: texture.getGPUView(),
                  };
                  entries.push(entry);
                  Reference.getInstance().attached(texture, this);
                } else {
                  console.error(
                    `ComputeShader(${this.instanceID})`,
                    `texture ${refs.varName} is missing! `
                  );
                }
              }
            }
            break;
          default:
            console.error(`unprocessed type:`, refs.varType);
            break;
        }
      }

      let gpubindGroup = webGPUContext.device.createBindGroup({
        layout: this._computePipeline.getBindGroupLayout(groupIndex),
        entries: entries,
      });

      this.bindGroups[groupIndex] = gpubindGroup;
    }
  }

  protected genComputePipeline() {
    this.preCompileShader(this._sourceCS);
    this.genReflection();

    this._computePipeline = webGPUContext.device.createComputePipeline({
      layout: `auto`,
      compute: {
        module: this.compileShader(),
        entryPoint: this.entryPoint,
      },
    });

    this._groupsShaderReflectionVarInfos = [];
    let shaderReflection = this.shaderReflection;

    this.bindGroups = [];
    for (let i = 0; i < shaderReflection.groups.length; ++i) {
      let srvs = shaderReflection.groups[i];
      this._groupsShaderReflectionVarInfos[i] = srvs;
      this.genGroups(i, this._groupsShaderReflectionVarInfos);
    }

    webGPUContext.addEventListener(
      CResizeEvent.RESIZE,
      (e) => {
        for (let i = 0; i < shaderReflection.groups.length; ++i) {
          let srvs = shaderReflection.groups[i];
          this._groupsShaderReflectionVarInfos[i] = srvs;
          this.genGroups(i, this._groupsShaderReflectionVarInfos, true);
        }
      },
      this
    );
  }

  protected preCompileShader(shader: string) {
    for (const key in this.constValues) {
      if (Object.prototype.hasOwnProperty.call(this.constValues, key)) {
        const value = this.constValues[key];
        shader = shader.replaceAll(`&${key}`, value.toString());
      }
    }
    this._destCS = Preprocessor.parseComputeShader(shader, this.defineValue);
  }

  protected compileShader(): GPUShaderModule {
    let shaderModule = webGPUContext.device.createShaderModule({
      label: `ComputeShader(${this.instanceID})`,
      code: this._destCS,
    });

    shaderModule.getCompilationInfo().then((e) => {
      if (e.messages.length > 0) {
        console.warn("[shader error]", e, this._destCS);
      }
    });

    this._csShaderModule = shaderModule;
    return shaderModule;
  }

  private genReflection() {
    this.shaderVariant += ShaderReflection.genComputeShaderVariant(this);
    let reflection = ShaderReflection.poolGetReflection(this.shaderVariant);
    if (!reflection) {
      ShaderReflection.getShaderReflection2(this._destCS, this);
      ShaderReflection.combineShaderReflectionVarInfo(
        this.shaderReflection,
        this.shaderReflection.cs_variables
      );
    } else {
      this.shaderReflection = reflection;
    }
  }
}
