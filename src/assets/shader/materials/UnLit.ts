/**
 * 无光照材质渲染
 */
export let UnLit: string = `
    #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"
    #include "UnLitMaterialUniform_frag"

    #if USE_CUSTOMUNIFORM
        struct MaterialUniform {
            transformUV1: vec4<f32>,
            transformUV2: vec4<f32>,
            baseColor: vec4<f32>,
            alphaCutoff: f32,
        };
    #endif

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData);
        return ORI_VertexOut;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;
        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy;
        let color = textureSample(baseMap,baseMapSampler,uv);
        if(color.w < materialUniform.alphaCutoff){
            discard;
        }

        ORI_ShadingInput.BaseColor = color * materialUniform.baseColor ;
        UnLit();
    }
`;
