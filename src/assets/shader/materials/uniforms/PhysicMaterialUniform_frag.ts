export let PhysicMaterialUniform_frag = `
    #if USE_CUSTOMUNIFORM
    #else 
        struct MaterialUniform {
            baseColor: vec4<f32>,
            emissiveColor: vec4<f32>,
            materialF0: vec4<f32>,
            specularColor: vec4<f32>,
            envIntensity: f32,
            normalScale: f32,
            roughness: f32,
            metallic: f32,
            ao: f32,
            roughness_min: f32,
            roughness_max: f32,
            metallic_min: f32,
            metallic_max: f32,
            emissiveIntensity: f32,
            alphaCutoff: f32,
            ior: f32,
            clearcoatColor: vec4<f32>,
            clearcoatWeight: f32,
            clearcoatFactor: f32,
            clearcoatRoughnessFactor: f32,
            clearcoatIor: f32,
            baseMapOffsetSize:vec4<f32>,
            normalMapOffsetSize:vec4<f32>,
            emissiveMapOffsetSize:vec4<f32>,
            roughnessMapOffsetSize:vec4<f32>,
            metallicMapOffsetSize:vec4<f32>,
            aoMapOffsetSize:vec4<f32>,
        };
    #endif

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;
`;
