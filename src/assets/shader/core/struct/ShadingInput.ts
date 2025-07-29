export let ShadingInput: string = `
    struct ShadingInput {
        BaseColor: vec4<f32>,
        Roughness:f32,
        Metallic:f32,
        Specular:f32, // 镜面反射强度
        EmissiveColor:vec4<f32>,
        SurfaceColor:vec4<f32>,
        Normal:vec3<f32>,
        HairNormal:vec3<f32>,
        Tangent:vec4<f32>, // 切线向量
        WorldPositionOffset:vec3<f32>, // 世界空间位置偏移
        AmbientOcclusion:f32,
        PixelDepthOffset:f32, // 像素深度偏移
        Opacity:f32,
        OpacityMask:f32, // 透明度遮罩，通常用于硬边缘透明
        Refraction:f32, // 折射强度
        FragDepth:f32, // 自定义片元深度值
        SSS:vec3f, // 次表面散射
    }
`;
