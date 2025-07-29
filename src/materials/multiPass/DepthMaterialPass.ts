import { RenderShaderPass, PassType } from "../..";

export class DepthMaterialPass extends RenderShaderPass {
  constructor() {
    super(`ZPass_shader_vs`, `ZPass_shader_vs`);
    this.passType = PassType.DEPTH;
    this.setShaderEntry("main");
    this.useRz = false;
    let shaderState = this.shaderState;
    shaderState.receiveEnv = false;
  }
}
