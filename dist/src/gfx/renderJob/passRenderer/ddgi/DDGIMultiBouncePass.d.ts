import { View3D } from "../../../../core/View3D";
import { RenderTexture } from "../../../../textures/RenderTexture";
import { RendererPassState } from "../state/RendererPassState";
import { DDGIIrradianceVolume } from "./DDGIIrradianceVolume";
export declare class DDGIMultiBouncePass {
    blendTexture: RenderTexture;
    private volume;
    private computerShader;
    constructor(volume: DDGIIrradianceVolume);
    private initPipeline;
    setInputs(inputs: RenderTexture[]): void;
    compute(view: View3D, renderPassState: RendererPassState): void;
}
