export let ColorLitShader: string = /*wgsl */ `
        #include "Common_vert"
        #include "Common_frag"
        #include "BxDF_frag"

        fn vert(inputData:VertexAttributes) -> VertexOutput {
            ORI_Vert(inputData);
            return ORI_VertexOut;
        }

        fn frag(){
            ORI_ShadingInput.BaseColor = materialUniform.baseColor ;
            ORI_ShadingInput.Roughness = materialUniform.roughness  ;
            ORI_ShadingInput.Metallic = materialUniform.metallic ;
            ORI_ShadingInput.Specular = 0.5 ;
            ORI_ShadingInput.AmbientOcclusion = 1.0 ;
            ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);
            ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb ;
            useShadow();
            BxDFShading();
        }
`;
