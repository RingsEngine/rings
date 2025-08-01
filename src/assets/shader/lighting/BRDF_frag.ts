/**
 * 功能：表面反射  适用场景：金属、塑料  性能消耗：低
 */
export let BRDF_frag: string = `
    #include "EnvMap_frag"
    #include "BrdfLut_frag"
    #include "ColorUtil_frag"
    #include "SHCommon_frag"

    struct FragData {
        Ao: f32,
        Metallic: f32,
        Roughness: f32,

        Albedo: vec4<f32>, // 反照色
        Emissive: vec3<f32>,
        Specular: vec3<f32>,

        N: vec3<f32>,  // 法线
        V: vec3<f32>,  // 视线
        R: vec3<f32>,  // 反射
        T: vec3<f32>,  // 切线

        F0: vec3<f32>,
        F: vec3<f32>,
        KS: vec3<f32>,
        KD: vec3<f32>,

        Alpha: f32,
        Shadow: f32,
        Indirect: f32,
        Reflectance: f32,

        NoV: f32,
        FaceDirection:f32,

        ClearcoatRoughness:f32,
        ClearcoatFactor:f32,
        ClearcoatIor:f32,
        EnvColor: vec3<f32>,
        Irradiance: vec3<f32>,
        LightChannel: vec3<f32>
    };

    var<private> fragData: FragData;

    struct BxDFContext
    {
        NoV : f32 ,
        NoL : f32 ,
        VoL : f32 ,
        NoH : f32 ,
        HoL : f32 ,
        VoH : f32
    };

    fn getContext( N:vec3<f32>, V:vec3<f32>, H:vec3<f32>, L:vec3<f32> ) -> BxDFContext
    {
        var Context:BxDFContext ;
        Context.NoL = saturate(dot(N, L));
        Context.NoV = saturate(dot(N, V));
        Context.VoL = saturate(dot(V, L));
        Context.NoH = saturate(dot(N, H));
        Context.VoH = saturate(dot(V, H));
        Context.HoL = saturate(dot(H, L));
        return Context ;
    }

    fn roughnessToMipmapLevel( roughness: f32 , mipmapCount:i32 ) -> f32{
        let level = roughness * (1.7 - 0.7 * roughness );
        return level * f32(mipmapCount);
    }

    fn IORToF0(ior:f32)->f32{
        var dc = ior - 1.0 ;
        dc *= dc ;
        var dt = ior + 1.0 ;
        dt *= dt ;
        return dc / dt ;
    }

    fn Fd90( NoL:f32, roughness:f32) -> f32
    {
        return (2.0 * NoL * roughness) + 0.4;
    }

    fn KDisneyTerm( NoL:f32, NoV:f32 , roughness:f32) -> f32
    {
        return (1.0 + Fd90(NoL, roughness) * pow(1.0 - NoL, 5.0)) * (1.0 + Fd90(NoV, roughness) * pow(1.0 - NoV, 5.0));
    }

    fn FresnelSchlick( NoV:f32,  F0:vec3<f32>) -> vec3<f32>
    {
        return F0 + (1.0 - F0) * pow(1.0 - NoV, 5.0);
    }

    fn FresnelTerm( cosA:f32,  F0:vec3<f32>) -> vec3<f32>
    {
        let t = pow5( 1.0 - cosA );
        return F0 + (1.0 - F0) * t;
    }

    fn FresnelLerp( cosA:f32, F0:vec3<f32> , F90:vec3<f32>) -> vec3<f32>
    {
        let t = pow5( 1.0 - cosA );
        return mix( F0 ,F90,t ) ;
    }

    fn FresnelSchlickRoughness( NoV:f32,  F0:vec3<f32>,  roughness:f32) -> vec3<f32>
    {
        return F0 + (max(vec3(roughness), F0) - F0) * pow(1.0 - NoV, 5.0);
    }

    fn DistributionGGX( NdotH:f32 ,  roughness:f32 ) -> f32
    {
        let alpha = roughness * roughness;
        let alpha2 = roughness * roughness;
        let NdotH2 = NdotH * NdotH;
        let nom   = alpha2;
        var denom = (NdotH2 * (alpha2 - 1.0) + 1.0);
        denom = PI * denom * denom;
        return nom / denom;
    }

    fn Vis_SmithJoint( NoV : f32 ,  NoL : f32 ,  a2 : f32) -> f32
    {
        var Vis_SmithV = NoL * sqrt(NoV * (NoV - NoV * a2) + a2);
        var Vis_SmithL = NoV * sqrt(NoL * (NoL - NoL * a2) + a2);
        return 0.5 * rcp(Vis_SmithV + Vis_SmithL);
    }

    fn Vis_SmithJointApprox( NoV : f32 ,  NoL : f32 ,  a2 : f32 ) -> f32
    {
        let a = sqrt(a2);
        let Vis_SmithV = NoL * ( NoV * ( 1.0 - a ) + a );
        let Vis_SmithL = NoV * ( NoL * ( 1.0 - a ) + a );
        return 0.5 * rcp( Vis_SmithV + Vis_SmithL );
    }

    fn GeometrySchlickGGX( NdotV : f32 , roughness : f32 ) -> f32
    {
        let r = (roughness + 1.0);
        let k = (r*r) / 8.0;
        let nom   = NdotV;
        let denom = NdotV * (1.0 - k) + k;
        return nom / denom;
    }

    fn GeometrySmith( NdotV:f32 , NdotL:f32 , roughness : f32) -> f32
    {
        let ggx1 = GeometrySchlickGGX(NdotV, roughness);
        let ggx2 = GeometrySchlickGGX(NdotL, roughness);
        return ggx1 * ggx2;
    }

    fn GeometryAttenuationGGXSmith( NdotL:f32,  NdotV:f32,  roughness:f32) -> f32
    {
        var NdotL2 = NdotL * NdotL;
        var NdotV2 = NdotV * NdotV;
        var kRough2 = roughness * roughness + 0.0001;
        var ggxL = (2.0 * NdotL) / (NdotL + sqrt(NdotL2 + kRough2 * (1.0 - NdotL2)));
        var ggxV = (2.0 * NdotV) / (NdotV + sqrt(NdotV2 + kRough2 * (1.0 - NdotV2)));
        return ggxL * ggxV;
    }

    fn colorLinear( colorVector:vec3<f32> ) -> vec3<f32>
    {
        var linearColor = pow(colorVector.rgb, vec3<f32>(2.2));
        return linearColor;
    }

    fn computeFresnelSchlick( NoV:f32 , F0:vec3<f32>) -> vec3<f32>
    {
        return F0 + (1.0 - F0) * pow(clamp(1.0 - NoV,0.0,1.0), 5.0);
    }

    fn computeFresnelSchlickRoughness(NoV:f32 , F0:vec3<f32>,  roughness:f32) -> vec3<f32>
    {
        return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(clamp(1.0 - fragData.NoV,0.0,1.0), 5.0);
    }

    fn computeDistributionGGX( N:vec3<f32>,  H:vec3<f32>,  roughness:f32) -> f32
    {
        var alpha = roughness * roughness;
        var alpha2 = alpha * alpha; 
        var NdotH = saturate(dot(N, H));
        var NdotH2 = NdotH * NdotH;
        return (alpha2) / (PI * (NdotH2 * (alpha2 - 1.0) + 1.0) * (NdotH2 * (alpha2 - 1.0) + 1.0));
    }

    fn D_GGX( NoH:f32,  roughness:f32 ) -> f32
    {
        var d = ( NoH * roughness - NoH ) * NoH + 1.0;	// 2 mad
        return roughness / ( PI*d*d );					// 4 mul, 1 rcp
    }

    fn computeGeometryAttenuationGGXSmith( NdotL:f32 ,  NdotV:f32,  roughness:f32) -> f32
    {
        var NdotL2 = NdotL * NdotL;
        var NdotV2 = NdotV * NdotV;
        var kRough2 = roughness * roughness + 0.0001;
        var ggxL = (2.0 * NdotL) / (NdotL + sqrt(NdotL2 + kRough2 * (1.0 - NdotL2)));
        var ggxV = (2.0 * NdotV) / (NdotV + sqrt(NdotV2 + kRough2 * (1.0 - NdotV2)));
        return ggxL * ggxV;
    }

    fn Vis_Smith(  NoL:f32 ,  NoV:f32,  a2:f32 )-> f32
    {
        var Vis_SmithV = NoV + sqrt( NoV * (NoV - NoV * a2) + a2 );
        var Vis_SmithL = NoL + sqrt( NoL * (NoL - NoL * a2) + a2 );
        return rcp( Vis_SmithV * Vis_SmithL );
    }

    fn F_Function( HdotL:f32, F0:vec3f ) -> vec3f
    {
        var fresnel = exp2((-5.55473 * HdotL - 6.98316) * HdotL);
        return mix(vec3f(fresnel),vec3f(1.0),F0);
    }

    fn D_Function( NdotH:f32, roughness:f32) ->f32
    {
        var a      = roughness*roughness;
        var a2     = a*a;
        var NdotH2 = NdotH*NdotH;
        var nom   = a2;
        var denom = (NdotH2 * (a2 - 1.0) + 1.0);
        denom = PI * denom * denom;
        return nom / denom;
    }

    fn G_SubFunction( NdotW : f32,  K : f32)->f32
    {
        return NdotW / mix(NdotW,1.0,K);
    }

    fn G_Function( NdotL: f32, NdotV: f32, roughness: f32)->f32
    {
        var K = (1.0+roughness) * (1.0+roughness) / 8.0;
        return G_SubFunction(NdotL,K) * G_SubFunction(NdotV,K);
    }

    fn DGF_Function( NdotH:f32, NdotL:f32,NdotV:f32, HdotL:f32, roughness:f32, shadow:f32, F0:vec3f , lightColor:vec3f )-> vec3f
    {
        var  D = D_Function(NdotH,roughness);
        var  G = G_Function(NdotL,NdotV,roughness);
        var F = F_Function(HdotL,F0);
        let light_BRDF = ( D * G * F ) / (4.0 * NdotV * NdotL + 0.001);
        return light_BRDF * lightColor * NdotL * PI * shadow;
    }

    fn LightDiffuse_Function( HdotL:f32, NdotL:f32 ,  baseColor:vec3f,  metallic:f32,  shadow:f32, F0:vec3f, lightColor:vec3f) -> vec3f
    {
        var KS = F_Function(HdotL,F0);
        var KD = (1 - KS) * (1 - metallic);
        return KD * baseColor * lightColor.rgb * NdotL * shadow; 
    }

    fn lightContribution( NdotH:f32, NdotL:f32, NdotV:f32, HdotL:f32, roughness:f32, baseColor:vec3f, metallic:f32, shadow:f32, F0:vec3f, lightColor:vec3f ) ->vec3f
    {
        return LightDiffuse_Function(HdotL,NdotL,baseColor,metallic,shadow,F0,lightColor) + DGF_Function(NdotH,NdotL,NdotV,HdotL,roughness,shadow,F0,lightColor);
    }

    fn simpleBRDF( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,L:vec3<f32>,att:f32,lightColor:vec3<f32>,roughness:f32 ,metallic:f32)-> vec3<f32>{
        let H = normalize(V + L);
        let Context:BxDFContext = getContext(N,V,H,L);
        let alpha = roughness * roughness;
        let a2 = alpha * alpha;
        let F0 = mix(vec3<f32>(materialUniform.materialF0.rgb), albedo.rgb , metallic);
        let D = D_GGX( Context.NoH , a2);
        let G = Vis_SmithJointApprox(Context.NoV,Context.NoL, a2 );
        let F = FresnelSchlick(Context.VoH, vec3<f32>(F0));
        let specular = ( D * G * F ) / (4.0 * Context.NoV * Context.NoL + 0.001);
        let kS = F ;
        var kd = 1.0 - kS ;
        kd *= 1.0 - metallic ;

        #if USE_SRGB_ALBEDO
            var diffuse = kd ;
        #else 
            var diffuse = kd * (albedo.rgb / PI ) ;
        #endif

        let lightAtt = Context.NoL * lightColor * att ; 
        var diffuseColor = diffuse * lightAtt; 
        // diffuseColor = vec3f(0.0) ; 
        var specularColor = specular * lightAtt; 
        var col = (diffuseColor + specularColor ) ;
        return vec3f(col) ;
    }

    fn getSpecularDominantDir (  N : vec3<f32> , R : vec3<f32> , roughness : f32 ) -> vec3<f32>
    {
        var smoothness = saturate (1.0 - roughness );
        var lerpFactor = smoothness * ( sqrt ( smoothness ) + roughness );
        return mix (N, R, lerpFactor );
    }

    fn approximateSpecularIBL( specularColor:vec3<f32> , roughness:f32 , R:vec3<f32> , NoV:f32 ) -> vec3<f32> {
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(prefilterMap)) ;
        let mip = roughnessToMipmapLevel(roughness,MAX_REFLECTION_LOD) * f32(MAX_REFLECTION_LOD);
        fragData.EnvColor = (textureSampleLevel(prefilterMap, prefilterMapSampler, getSpecularDominantDir(fragData.N,R,roughness) , mip ).rgb);
        fragData.EnvColor = globalUniform.skyExposure * (fragData.EnvColor);
        var envBRDF = textureSampleLevel(brdflutMap, brdflutMapSampler, vec2<f32>(NoV, roughness) , 0.0 ) ;
        return (specularColor.rgb * envBRDF.x + envBRDF.y) ;
    }

    fn fresnel_coat(n:vec3<f32>,v:vec3<f32>,ior:f32) -> f32 {
        var f0 = (1.0-ior)/(1.0+ior);
        f0 = f0 * f0  ;
        let fr = pow((f0 + (1.0 - f0)*(1.0 - abs( max(dot(n,v),0.0) ))) , 5.0 ) ;  
        return fr ;
    }

    fn reflectEnvMap(n:vec3<f32> , v:vec3<f32> , roughness:f32) -> vec3<f32> {
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(envMap)) ;
        let mip = roughnessToMipmapLevel(roughness,MAX_REFLECTION_LOD);
        let R = 2.0 * dot( v , n ) * n - v ;
        var prefilteredColor: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(envMap, envMapSampler, R , mip ).rgb);
        prefilteredColor = LinearToGammaSpace(prefilteredColor);
        return prefilteredColor ;
    }

    fn Specular_D_GGX( NoH:f32,  roughness:f32 ) -> f32
    {
        let a2 = roughness * roughness ;
        let f = (NoH * a2 - NoH) * NoH + 1.0;
        return a2 / (PI * f * f) ;
    }

    fn V_Kelemen( LoH : f32 ) -> f32 {
        return 0.25 / (LoH * LoH);
    }

    fn F_Schlick( f0:vec3<f32> ,  f90 : f32 ,  VoH : f32 ) -> vec3<f32> {
        return f0 + (f90 - f0) * pow(1.0 - VoH,5.0);
    }

    fn F_Schlick2(  SpecularColor:vec3<f32>,  VoH :f32 )-> vec3<f32> {
        var Fc = pow5( 1.0 - VoH );
        let rt = clamp(50.0 * SpecularColor.g,0.0,1.0) ;
        return rt * Fc + (1.0 - Fc) * SpecularColor;
    }
    
    fn oneMinusReflectivity ( metallic : f32 , F0:f32 ) -> f32 {
        let range = 1.0 - F0;
        return range - metallic * range;
    }

    fn CoatSpecular_brdf( f:vec3<f32>, s:vec3<f32>, n:vec3<f32> , v:vec3<f32> , l:vec3<f32> , att:f32 , layer :vec3<f32> , clearcoatRoughnessFactor:f32 ) -> vec3<f32> {
        let H = normalize(v + l); 
        let VdotNc = max(dot(v,n),0.0);
        let LdotNc = max(dot(l,n),0.0);
        let NoH = max(dot(n,H),0.0);
        let LoH = saturate(dot(l, H))  ;
        let NoL = max(dot(n,l),0.0);
        let Fd = f ; 
        let Fr = s ; 
        let factor = clamp(clearcoatRoughnessFactor,0.089,1.0);
        let clearCoatRoughness = factor * factor ;

        let Dc = D_GGX( NoH , factor ) ;
        let Vc = V_Kelemen( LoH ) * NoL ;
        let Fc = F_Schlick(vec3<f32>(0.04), 2.0 , LoH); 
        let Frc = (Dc * Vc) * Fc ;
        return vec3<f32>(Frc) ;
    }

    #if USE_CLEARCOAT
    fn approximate_coating(base:vec3<f32> , clearColor: vec3<f32>, n:vec3<f32> , v:vec3<f32> , light:LightData , clearcoatRoughnessFactor:f32 ) -> vec3<f32> {
        let factor = clamp(clearcoatRoughnessFactor,0.084,1.0);
        var clearcoatAlpha = factor * factor + fragData.ClearcoatRoughness;
        var att = light.intensity ;
        let l = light.direction ;
        let NdotV = max(dot(n,v),0.0);
        let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
        let R = 2.0 * dot( v , n ) * n - v ;
        var envIBL: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(prefilterMap, prefilterMapSampler, R , MAX_REFLECTION_LOD * clearcoatRoughnessFactor ).rgb) ;
        let clearCoat = materialUniform.clearcoatFactor ;
        let clearcoat_brdf =  CoatSpecular_brdf( vec3<f32>(0.04) , vec3<f32>( 0.04 ) , n , v , -l , att , vec3<f32>( 0.04 ) , factor ) ;

        return mix(base, clearcoat_brdf,materialUniform.clearcoatWeight ) ;
    }
    #endif

    fn EnvBRDF( SpecularColor : vec3f , Roughness : f32 , NoV : f32) -> vec3f
    {
        var AB = textureSampleLevel( brdflutMap, brdflutMapSampler, vec2f( NoV, Roughness ), 0.0 ).rg;
        var GF = SpecularColor * AB.x + saturate( 50.0 * SpecularColor.g ) * AB.y;
        return GF;
    }

    fn EnvBRDF_FD90( F0: vec3f , F90: vec3f ,  Roughness: f32,  NoV: f32)-> vec3f
    {
        var AB = textureSampleLevel(brdflutMap, brdflutMapSampler, vec2f(NoV, Roughness), 0.0).rg;
        var GF = F0 * AB.x + F90 * AB.y;
        return GF;
    }

    fn IBLEnv( V:vec3f , N:vec3f , Roughness : f32) -> vec3f 
    {
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(prefilterMap));
        let mip = roughnessToMipmapLevel(Roughness,MAX_REFLECTION_LOD);
        let R = 2.0 * dot( V , N ) * N - V ;
        var envIBL: vec3<f32> = textureSampleLevel(prefilterMap, prefilterMapSampler, R , mip ).rgb ;
        return envIBL;
    }

    fn IBLEnv2( R:vec3f , Roughness : f32) -> vec3f 
    {
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(reflectionMap));
        let mip = roughnessToMipmapLevel(Roughness,MAX_REFLECTION_LOD);
        var envIBL: vec3<f32>;
        envIBL = getReflectionsEnv(R,ORI_VertexVarying.vWorldPos.xyz, mip).rgb;
        envIBL = gammaToLiner(envIBL);
        return envIBL;
    }


    fn F_indirect_Function( NdotV:f32, roughness:f32, F0:vec3f) -> vec3f
    {
        var fresnel = exp2((-5.55473 * NdotV - 6.98316) * NdotV);
        return F0 + fresnel * saturate(1.0 - roughness - F0);
    }


     fn indirectionDiffuse_Function( NdotV:f32, normalDir:vec3f, metallic:f32, baseColor:vec3f, roughness:f32, occlusion:f32, F0:vec3f)-> vec3f 
     {
         var SHColor = fragData.Irradiance.rgb ;
         var KS = F_indirect_Function(NdotV,roughness,F0);
         var KD = (1.0 - KS) * (1.0 - metallic); 
         return SHColor * KD * baseColor * occlusion;
     }
 
     fn indirectionSpec_Function( reflectDir:vec3f, roughness:f32, NdotV:f32,occlusion:f32, F0:vec3f )-> vec3f 
     {
         var mipRoughness = roughness * (1.7 - 0.7 * roughness) ;
         var env : vec3f ;
         #if USE_CASTREFLECTION
            env = textureSampleLevel(envMap, envMapSampler, reflectDir , mipRoughness * 12.0 ).rgb ;
         #else
            useSphereReflection();
            env = getReflectionsEnv(reflectDir,ORI_VertexVarying.vWorldPos.xyz, mipRoughness).rgb ;
        #endif

         var indirectionCube: vec3<f32> = globalUniform.skyExposure * env ;
         var F_IndirectionLight = F_indirect_Function(NdotV,roughness,F0);
         var AB = LUT_Approx(roughness,NdotV);
         var indirectionSpecFactor = indirectionCube.rgb * (F_IndirectionLight * AB.r + AB.g) ;
         return indirectionSpecFactor * occlusion;
     }

     const  c0 = vec4f(-1, -0.0275, -0.572, 0.022 );
     const  c1 = vec4f(1, 0.0425, 1.04, -0.04 );
     fn LUT_Approx( roughness:f32,  NoV:f32 )->vec2f
     {
         var r = roughness * c0 + c1;
         var a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;
         var AB = vec2f( -1.04, 1.04 ) * a004 + r.zw;
         return saturate(AB);
     }
`;
