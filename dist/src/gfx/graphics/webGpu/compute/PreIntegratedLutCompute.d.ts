import { VirtualTexture } from "../../../../textures/VirtualTexture";
import { RenderShaderCompute } from "./RenderShaderCompute";
import { Shader } from "../shader/Shader";
export declare class PreIntegratedLutCompute extends RenderShaderCompute {
    constructor(shader: Shader);
    protected init(): VirtualTexture;
    onFrame(): void;
}
