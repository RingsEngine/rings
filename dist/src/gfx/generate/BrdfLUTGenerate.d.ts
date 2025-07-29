import { VirtualTexture } from "../../textures/VirtualTexture";
import { ComputeShader } from "../graphics/webGpu/shader/ComputeShader";
export declare class BRDFLUTGenerate {
    compute: ComputeShader;
    constructor();
    generateBRDFLUTTexture(): VirtualTexture;
}
