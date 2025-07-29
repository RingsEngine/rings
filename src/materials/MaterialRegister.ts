import { Material } from "..";
import { Ctor } from "../util/Global";
/**
 *
 * @internal
 * @group Material
 */
export type MaterialClassName =
  | "MaterialBase"
  | "GBufferPass"
  | "GUIMaterial"
  | "ChromaKeyMaterial"
  | "LambertMaterial"
  | "SkyMaterial"
  | "UnLitMaterial"
  | "VideoMaterial"
  | "DepthMaterialPass"
  | "CastShadowMaterialPass"
  | "SkyGBufferPass"
  | "FlameSimulatorMaterial"
  | "FlowImgSimulatorMaterial"
  | "FluidSimulatorMaterial"
  | "FluidSimulatorMaterial2"
  | "HairSimulatorMaterial"
  | "LitMaterial"
  | "BoxMaterial"
  | "SkeletonMaterial"
  | "GlassMaterial"
  | "PavementMaterial"
  | "PointMaterial"
  | "none";

export function registerMaterial(
  name: MaterialClassName,
  cls: Ctor<Material>
): void {}
