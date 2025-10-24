import { Object3D } from "../../core/entities/Object3D";
import { Vector2 } from "../../math/Vector2";
import { RegisterComponent } from "../../util/SerializeDecoration";
import { RenderNode } from "./RenderNode";
import { FatLineMaterial } from "../../materials/FatLineMaterial";
import { FatLineGeometry } from "../../core/geometry/FatLineGeometry";
import { webGPUContext } from "../../gfx/graphics/webGpu/Context3D";
import { View3D } from "../../core/View3D";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";

/**
 * FatLine Renderer Component
 * Specialized renderer for FatLine geometries that automatically updates
 * model matrix and resolution uniforms each frame
 * 
 * @group Components
 */
@RegisterComponent(FatLineRenderer, "FatLineRenderer")
export class FatLineRenderer extends RenderNode {
  private _fatLineMaterial: FatLineMaterial | null = null;
  private _fatLineGeometry: FatLineGeometry | null = null;
  private _cachedResolution: Vector2 = new Vector2(0, 0);

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
    const component = obj.addComponent(FatLineRenderer);
    component.copyComponent(this);
  }

  public copyComponent(from: this): this {
    super.copyComponent(from);
    return this;
  }

  /**
   * Set FatLine geometry
   */
  public set geometry(value: FatLineGeometry) {
    super.geometry = value;
    this._fatLineGeometry = value;

    // Auto-set instance count from geometry
    if (value) {
      this.instanceCount = value.instanceCount;

      // Auto-bind instance buffer to material if material is already set
      if (this._fatLineMaterial && value.instanceBuffer) {
        this._fatLineMaterial.setInstanceBuffer(value.instanceBuffer);
      }
    }
  }

  public get geometry(): FatLineGeometry {
    return this._fatLineGeometry;
  }

  /**
   * Set FatLine material
   */
  public set material(value: FatLineMaterial) {
    this.materials = [value];
    this._fatLineMaterial = value;

    // Auto-bind instance buffer if geometry is already set
    if (this._fatLineGeometry && this._fatLineGeometry.instanceBuffer) {
      value.setInstanceBuffer(this._fatLineGeometry.instanceBuffer);
    }
  }

  public get material(): FatLineMaterial {
    return this._fatLineMaterial;
  }

  /**
   * Override nodeUpdate to automatically update FatLine-specific uniforms
   */
  public nodeUpdate(
    view: View3D,
    passType: PassType,
    renderPassState: RendererPassState,
    clusterLightingBuffer?: ClusterLightingBuffer
  ) {
    // Update FatLine-specific uniforms before rendering
    if (this._fatLineMaterial && this.object3D) {
      // Update model matrix from object's world transform
      this._fatLineMaterial.setModelMatrix(this.object3D.transform.worldMatrix);

      // Update resolution from WebGPU context's presentation size
      // presentationSize is the actual rendering resolution (canvas.width/height)
      // which accounts for devicePixelRatio
      const width = webGPUContext.presentationSize[0];
      const height = webGPUContext.presentationSize[1];
      
      if (width > 0 && height > 0 && 
          (this._cachedResolution.x !== width || this._cachedResolution.y !== height)) {
        this._cachedResolution.set(width, height);
        this._fatLineMaterial.resolution = this._cachedResolution.clone();
      }
    }

    // Call parent nodeUpdate to handle standard rendering
    super.nodeUpdate(view, passType, renderPassState, clusterLightingBuffer);
  }

  public destroy(force?: boolean) {
    // if (this._fatLineMaterial) { // beforeDestroy will destroy the material
    //   this._fatLineMaterial.destroy(force);
    //   this._fatLineMaterial = null;
    // }
    // if (this._fatLineGeometry) { // beforeDestroy will destroy the geometry
    //   this._fatLineGeometry.destroy(force);
    //   this._fatLineGeometry = null;
    // }
    super.destroy(force);
  }
}

