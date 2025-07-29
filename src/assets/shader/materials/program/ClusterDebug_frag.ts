export let ClusterDebug_frag: string = `
        var<private> colorSet: array<vec3<f32>, 9> = array<vec3<f32>, 9>(
            vec3<f32>(1.0, 0.0, 0.0),
            vec3<f32>(1.0, 0.5, 0.0),
            vec3<f32>(0.5, 1.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.5),
            vec3<f32>(0.0, 0.5, 1.0),
            vec3<f32>(0.0, 0.0, 1.0),
            vec3<f32>(0.5, 0.0, 1.0),
            vec3<f32>(1.0, 0.0, 0.5)
        );

        #if DEBUG_CLUSTER
        fn debugCluster(fragCoord:vec4<f32>){
            #if USE_LIGHT
                var tileID: u32 = getClusterId3().z;
                let clusterDebug = vec4<f32>(colorSet[tileID % 9u], 1.0);
            #endif
        }

        fn debugClusterBox(fragCoord: vec4<f32>) {
            #if USE_LIGHT
                let clusterId3: vec3<u32> = getClusterId3();
                let px = f32(clusterId3.x) / clustersUniform.clusterTileX;
                let py = f32(clusterId3.y) / clustersUniform.clusterTileY;
                let pz = f32(clusterId3.z) / clustersUniform.clusterTileZ;
                var screenUV = ORI_VertexVarying.fragCoord.xy / vec2<f32>( globalUniform.windowWidth , globalUniform.windowHeight );
            #endif
        }

        fn debugClusterLightCount(fragCoord: vec4<f32>) {
            #if USE_LIGHT
                let cluster: LightIndex = getCluster();
                let lightCount: u32 = u32(cluster.count);
                let lightFactor: f32 = f32(lightCount) / f32(clustersUniform.maxNumLightsPerCluster);
            #endif
        }
        #endif
`;
