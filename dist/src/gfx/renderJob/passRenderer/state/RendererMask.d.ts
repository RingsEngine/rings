export declare enum RendererMask {
    Default = 1,
    IgnoreDepthPass = 2,
    Sky = 6,
    Particle = 10,
    SkinnedMesh = 16,
    MorphTarget = 32,
    Terrain = 64,
    UI = 128,
    Reflection = 256,
    ReflectionDebug = 512,
    Graphic3D = 1024
}
export declare class RendererMaskUtil {
    static addMask(src: RendererMask, tag: RendererMask): RendererMask;
    static removeMask(src: RendererMask, tag: RendererMask): RendererMask;
    static hasMask(m1: RendererMask, m2: RendererMask): boolean;
}
