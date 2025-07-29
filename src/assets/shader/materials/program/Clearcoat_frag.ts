export let Clearcoat_frag: string = `
    #if USE_CLEARCOAT_ROUGHNESS
    @group(1) @binding(auto)
    var clearCoatRoughnessMapSampler: sampler;
    @group(1) @binding(auto)
    var clearCoatRoughnessMap: texture_2d<f32>;

    fn getClearcoatRoughness() -> f32{
        let clearcoatRoughness = textureSample(clearCoatRoughnessMap, clearCoatRoughnessMapSampler, ORI_VertexVarying.fragUV0.xy).g;
        return clearcoatRoughness;
    }

    fn getClearcoatWeight() -> f32{
        let clearcoatWeight = textureSample(clearCoatRoughnessMap, clearCoatRoughnessMapSampler, ORI_VertexVarying.fragUV0.xy).r;
        return clearcoatWeight;
    }
    #else
    fn getClearcoatRoughness() -> f32{
        return 1.0;
    }
    fn getClearcoatWeight() -> f32{
        return 1.0;
    }
    #endif

    #if USE_CLEARCOAT
    fn ClearCoat_BRDF( baseColor:vec3<f32>, clearCoatColor:vec3<f32> , clearCoatIor:f32 ,N:vec3<f32>, L:vec3<f32> ,  V:vec3<f32> , clearCoatPerceptualRoughness:f32 ,lightColor:vec3f, att:f32) -> vec3<f32> {
        var factor = clamp(clearCoatPerceptualRoughness, 0.0001, 1.0);
        var clearCoatRoughness = factor ;
        let lightDir = -L ;
        let H = normalize( V + lightDir);
        let NoV = max(dot(N,V),0.00001);
        var iblSpecular = vec3<f32>(0.0);
        iblSpecular = indirectionSpec_Function(fragData.R,clearCoatRoughness,NoV,1.0,(clearCoatColor * att * vec3f(IORToF0(clearCoatIor))));
        return mix(baseColor , (clearCoatColor * iblSpecular) , fragData.ClearcoatFactor);
    }
    #endif
`;
