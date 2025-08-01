import { ReflectionSetting } from "..";
import { GlobalIlluminationSetting } from "./GlobalIlluminationSetting";
import { LightSetting } from "./LightSetting";
import { LoaderSetting } from "./LoaderSetting";
import { MaterialSetting } from "./MaterialSetting";
import { OcclusionQuerySetting } from "./OcclusionQuerySetting";
import { PickSetting } from "./PickSetting";
import { RenderSetting } from "./RenderSetting";
import { ShadowSetting } from "./ShadowSetting";
import { SkySetting } from "./SkySetting";

export type EngineSetting = {
  doublePrecision: boolean;
  occlusionQuery: OcclusionQuerySetting;
  pick: PickSetting;
  render: RenderSetting;
  sky: SkySetting;
  shadow: ShadowSetting;
  gi: GlobalIlluminationSetting;
  light: LightSetting;
  material: MaterialSetting;
  loader: LoaderSetting;
  reflectionSetting: ReflectionSetting;
};
