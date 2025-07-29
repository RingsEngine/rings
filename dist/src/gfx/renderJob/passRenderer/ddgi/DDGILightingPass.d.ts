import { View3D } from "../../../../core/View3D";
import { RenderTexture } from "../../../../textures/RenderTexture";
import { Texture } from "../../../graphics/webGpu/core/texture/Texture";
import { RendererPassState } from "../state/RendererPassState";
export declare class DDGILightingPass {
    private computeShader;
    private worldPosMap;
    private worldNormalMap;
    private colorMap;
    private shadowMap;
    private pointShadowMap;
    lightingTexture: RenderTexture;
    constructor();
    private create;
    setInputs(inputs: Texture[]): void;
    compute(view: View3D, renderPassState: RendererPassState): void;
}
