import { ComputeShader } from "../../..";
import { Texture } from "../../graphics/webGpu/core/texture/Texture";
export declare class TextureScaleCompute {
    computeShader: ComputeShader;
    setInputes(colorMap: Texture, inputs: Texture[], outputs: Texture[]): void;
}
