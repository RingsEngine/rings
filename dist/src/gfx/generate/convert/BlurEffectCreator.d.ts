export declare class BlurTexture2DBufferCreator {
    static blurImageFromTexture(image: {
        width: number;
        height: number;
        gpuTexture: GPUTexture;
    }, dstWidth: number, dstHeight: number, blur: boolean): GPUTexture;
}
