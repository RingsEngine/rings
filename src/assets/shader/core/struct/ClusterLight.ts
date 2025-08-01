/**
 * 光源集群，仅处理当前像素所在3D集群内的光源
 */
export let ClusterLight: string = `
    struct LightData {
        index:f32,
        lightType:i32,
        radius:f32,
        linear:f32,
        position:vec3<f32>,
        lightMatrixIndex:f32,
        direction:vec3<f32>,
        quadratic:f32,
        lightColor:vec3<f32>,
        intensity:f32,
        innerCutOff :f32,
        outerCutOff:f32,
        range :f32,
        castShadow:i32,
        lightTangent:vec3<f32>,
        ies:f32,
    };

    const PointLightType = 1;
    const DirectLightType = 2;
    const SpotLightType = 3;

    struct ClusterBox {
        minPoint:vec4<f32>,
        maxPoint:vec4<f32>
    };

    struct LightIndex {
        count:f32,
        start:f32,
        empty0:f32,
        empty1:f32,
    };

    struct ClustersUniform {
        clusterTileX:f32,
        clusterTileY:f32,
        clusterTileZ:f32,
        numLights:f32,
        maxNumLightsPerCluster:f32,
        near:f32,
        far:f32,
        screenWidth:f32,
        screenHeight:f32,
        clusterPix:f32, 
    };

    @group(2) @binding(1)
    var<storage,read> lightBuffer: array<LightData>;
    @group(2) @binding(2)
    var<uniform> clustersUniform: ClustersUniform;
    @group(2) @binding(3)
    var<storage,read> lightAssignBuffer : array<f32>;
    @group(2) @binding(4)
    var<storage,read> assignTable: array<LightIndex>;
    #if DEBUG_CLUSTER
        @group(2) @binding(5)
        var<storage,read> clusterBuffer: array<ClusterBox>;
    #endif

    fn getLight(index:i32) -> LightData {
        let lightId = i32(lightAssignBuffer[index]);
        var lightData = lightBuffer[lightId];
        return lightData;
    }

    fn linearTo01Depth(depth: f32) -> f32 {
        return (globalUniform.far) * globalUniform.near / fma(depth, globalUniform.near - globalUniform.far, globalUniform.far);
    }

    fn getClusterId3() -> vec3<u32> {
        let z = linearTo01Depth(ORI_VertexVarying.fragCoord.z);
        let sliceScale = f32(clustersUniform.clusterTileZ) / log2(globalUniform.far / globalUniform.near);
        let sliceBias = -(f32(clustersUniform.clusterTileZ) * log2(globalUniform.near) / log2(globalUniform.far / globalUniform.near));
        let zTile = u32(max(log2(z) * sliceScale + sliceBias, 0.0));
        var screenUV = ORI_VertexVarying.fragCoord.xy / vec2<f32>( globalUniform.windowWidth , globalUniform.windowHeight );
        let i = u32(floor(screenUV.x * clustersUniform.clusterTileX));
        let j = u32(floor(screenUV.y * clustersUniform.clusterTileY));
        return vec3<u32>(i,j,zTile);
    }

    fn getCluster() -> LightIndex {
        let tile = getClusterId3();
        let id = tile.x + tile.y * u32(clustersUniform.clusterTileX) + tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
        return assignTable[id];
    }

    fn getClusterIndex() -> u32 {
        let tile = getClusterId3();
        let id = tile.x + tile.y * u32(clustersUniform.clusterTileX) + tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
        return id;
    }
`;
