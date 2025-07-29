export let ReflectionCG: string = `
    #include 'MathShader'
    #include 'BitUtil'
    #include 'GlobalUniform'

    struct ReflectionInfo{
        gid: f32,
        worldPosition: vec3f,
        radius: f32,
        worldPosition2: vec3f,
    }

    @group(1) @binding(auto)
    var reflectionMap: texture_2d<f32>;
    @group(1) @binding(auto)
    var reflectionMapSampler: sampler;

    @group(2) @binding(8)
    var<storage,read> reflectionBuffer: array<ReflectionInfo>;

    var<private> reflectionSize: vec2f;
    var<private> PROBE_SOURCESIZE: vec2f;
    var<private> PROBEMAP_SOURCESIZE: vec2f;
    var<private> aspect: vec2f;
    var<private> spaceV: f32;

    fn useSphereReflection(){
        reflectionSize = vec2f(textureDimensions(reflectionMap).xy);
        PROBE_SOURCESIZE = vec2f(globalUniform.reflectionProbeSize);
        PROBEMAP_SOURCESIZE = vec2f(globalUniform.reflectionMapWidth,globalUniform.reflectionMapHeight) ;
        aspect = PROBE_SOURCESIZE / PROBEMAP_SOURCESIZE;
        spaceV = 1.0 / globalUniform.reflectionProbeMaxCount;
    }

    fn getSampleProbeUV(dir:vec3<f32>,gid:f32) -> vec2<f32> {
        let faceId = dir_to_faceId(dir);
        var targetUV: vec2<f32> = convert_xyz_to_cube_uv(dir.x, dir.y, dir.z);
        targetUV.x = 1.0 - targetUV.x;
        let threshould = 0.5 / PROBE_SOURCESIZE;
        targetUV = clamp(targetUV, vec2<f32>(threshould), vec2<f32>(1.0 - threshould));
        targetUV.x = f32(faceId) + targetUV.x;
        targetUV = targetUV * aspect ;
        targetUV.y = targetUV.y + (spaceV * gid);
        return targetUV ;
    }

    const magic = vec4f(0.9852, 0.99214, 0.00754, 0.0);

    fn getReflectionsBuffer(n: vec3<f32>, gid: f32, mip:f32) -> vec4f {
        let scaleA = vec2f(1.0/8.0, 1.0/globalUniform.reflectionProbeMaxCount);
        let mipSource = clamp((mip * 8.0), 0.0, 8.0);
        let mip1 = floor(mipSource);
        let mip2 = mip1 + 1.0;
        let mipPect = mipSource - mip1;
        var uv = (octEncode(-n) + 1.0) * 0.5 * magic.xy + magic.zw;
        var uv1 = (uv * scaleA + vec2f((mip1 * (scaleA.x)) ,0.0 ));
        var uv2 = (uv * scaleA + vec2f((mip2 * (scaleA.x)) ,0.0 ));
        let b1 = textureSampleLevel(reflectionMap,reflectionMapSampler,uv1,0.0);
        let b2 = textureSampleLevel(reflectionMap,reflectionMapSampler,uv2,0.0);
        let b1Color = b1.rgb;
        let b2Color = b2.rgb;
        let color = mix(b1Color,b2Color,vec3f(mipPect));
        return vec4f(color, 0.0);
    }

    fn getReflectionsEnv(reflectDir: vec3<f32>, worldPos: vec3f, mip: f32) -> vec3f {
        let maxCount = u32(globalUniform.reflectionProbeMaxCount);
        var nearColor = vec3f(0.0);
        if(globalUniform.reflectionCount > 0.0){
            var nearDistance = 99999.0;
            var nearReflectionIndex = 0u;
            for(var i =0u; i<maxCount; i+=1u){
                var reflectionInfo = reflectionBuffer[i];
                let dis = length(reflectionInfo.worldPosition - worldPos);
                if(dis < nearDistance){
                    nearDistance = dis;
                    nearReflectionIndex = i;
                }
            }
            nearColor = getReflectionsBuffer(reflectDir, f32(nearReflectionIndex), mip).xyz;
        } else {
            nearColor = textureSampleLevel(envMap, envMapSampler, reflectDir, mip * 12.0).rgb; 
        }
        return nearColor;
    }
`;
