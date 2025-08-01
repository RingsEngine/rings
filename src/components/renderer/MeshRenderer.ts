import { Object3D } from "../../core/entities/Object3D";
import { View3D } from "../../core/View3D";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
import { GeometryBase } from "../../core/geometry/GeometryBase";
import { RendererMask } from "../../gfx/renderJob/passRenderer/state/RendererMask";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { MorphTargetData } from "../anim/morphAnim/MorphTargetData";
import { RenderNode } from "./RenderNode";
import {
  EditorInspector,
  RegisterComponent,
} from "../../util/SerializeDecoration";
import { mergeFunctions } from "../../util/Global";
import { Material } from "../../materials/Material";

@RegisterComponent(MeshRenderer, "MeshRenderer")
export class MeshRenderer extends RenderNode {
  public receiveShadow: boolean;
  public morphData: MorphTargetData;
  constructor() {
    super();
  }
  public onEnable(): void {
    super.onEnable();
  }
  public onDisable(): void {
    super.onDisable();
  }
  public cloneTo(obj: Object3D): void {
    let component = obj.addComponent(MeshRenderer);
    component.copyComponent(this);
  }
  public copyComponent(from: this): this {
    super.copyComponent(from);
    this.receiveShadow = from.receiveShadow;
    return this;
  }

  @EditorInspector
  public get geometry(): GeometryBase {
    return this._geometry;
  }

  public set geometry(value: GeometryBase) {
    super.geometry = value;
    if (value) {
      let isMorphTarget = value.morphTargetDictionary != null;
      if (isMorphTarget) {
        this.morphData ||= new MorphTargetData();
        this.morphData.morphTargetsRelative = value.morphTargetsRelative;
        this.morphData.initMorphTarget(value);
      }
      this.morphData && (this.morphData.enable = isMorphTarget);
      if (this.morphData?.enable) {
        this.addRendererMask(RendererMask.MorphTarget);
      } else {
        this.removeRendererMask(RendererMask.MorphTarget);
      }

      this.object3D.bound = this._geometry.bounds.clone();
    } else {
      if (this.morphData) {
        this.morphData.enable = false;
      }
      this.removeRendererMask(RendererMask.MorphTarget);
    }
    if (!this._readyPipeline) {
      this.initPipeline();

      if (this._computes) {
        this.onCompute = mergeFunctions(this.onCompute, () => {
          for (let i = 0; i < this._computes.length; i++) {
            const compute = this._computes[i];
            compute.onUpdate();
          }
        });
      }
    }
  }

  @EditorInspector
  public get material(): Material {
    return this._materials[0];
  }

  public set material(value: Material) {
    this.materials = [value];
  }

  public setMorphInfluence(key: string, value: number) {
    if (this.morphData && this.morphData.enable) {
      let index = this._geometry.morphTargetDictionary[key];
      if (index >= 0) {
        this.morphData.updateInfluence(index, value);
      }
    }
  }

  public setMorphInfluenceIndex(index: number, value: number) {
    if (this.morphData && this.morphData.enable) {
      if (index >= 0) {
        this.morphData.updateInfluence(index, value);
      }
    }
  }

  public onCompute(view: View3D, command: GPUCommandEncoder): void {
    if (this.morphData && this.morphData.enable) {
      this.morphData.computeMorphTarget(command);
    }
  }

  public nodeUpdate(
    view: View3D,
    passType: PassType,
    renderPassState: RendererPassState,
    clusterLightingBuffer: ClusterLightingBuffer
  ) {
    if (this.morphData && this.morphData.enable) {
      for (let i = 0; i < this.materials.length; i++) {
        const material = this.materials[i];
        let passes = material.getPass(passType);
        if (passes) {
          for (let j = 0; j < passes.length; j++) {
            this.morphData.applyRenderShader(passes[j]);
          }
        }
      }
    }
    super.nodeUpdate(view, passType, renderPassState, clusterLightingBuffer);
  }

  public destroy(force?: boolean): void {
    super.destroy(force);
  }
}
