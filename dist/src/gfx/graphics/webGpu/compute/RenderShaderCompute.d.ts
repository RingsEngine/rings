import { Shader } from "../../../..";
import { ComputeShader } from "../shader/ComputeShader";
export declare class RenderShaderCompute {
    protected sourceShader: Shader;
    protected compute: ComputeShader;
    protected needUpdate: boolean;
    constructor(shaderStr: string, sourceShader: Shader);
    protected init(): void;
    protected onOnce?(): any;
    protected onFrame?(): any;
    onUpdate(): void;
}
