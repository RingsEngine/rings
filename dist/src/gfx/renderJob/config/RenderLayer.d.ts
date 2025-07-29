export declare enum RenderLayer {
    None = 2,
    StaticBatch = 4,
    DynamicBatch = 8,
    Hiden = 16
}
export declare class RenderLayerUtil {
    static addMask(src: RenderLayer, tag: RenderLayer): RenderLayer;
    static removeMask(src: RenderLayer, tag: RenderLayer): RenderLayer;
    static hasMask(m1: RenderLayer, m2: RenderLayer): boolean;
}
