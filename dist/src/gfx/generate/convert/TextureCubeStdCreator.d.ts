import { Texture } from "../../graphics/webGpu/core/texture/Texture";
import { RenderTexture } from "../../../textures/RenderTexture";
export declare class TextureCubeStdCreator {
    private static createCube;
    private static configBuffer;
    private static blurSettingBuffer;
    private static pipeline;
    static createFace(index: number, size: number, inTex: Texture, outTex: RenderTexture): void;
}
