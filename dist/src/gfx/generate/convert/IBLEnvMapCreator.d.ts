import { Texture } from "../../graphics/webGpu/core/texture/Texture";
export declare class IBLEnvMapCreator {
    private static configBuffer;
    private static quaternionBuffer;
    private static blurSettingBuffer;
    private static pipeline;
    static importantSample(image: {
        width: number;
        height: number;
        erpTexture: Texture;
    }, dstSize: number, roughness: number, dstView: GPUTextureView): void;
}
