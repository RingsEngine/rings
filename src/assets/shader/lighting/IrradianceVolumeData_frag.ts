export let IrradianceVolumeData_frag: string = `
    struct IrradianceVolumeData {
        orientationIndex: f32,
        hysteresis:f32,
        OctRTSideSize:f32,
        OctRTMaxSize:f32,

        startX:f32,
        startY:f32,
        startZ:f32,
        ProbeSpace:f32,

        gridXCount:f32,
        gridYCount:f32,
        gridZCount:f32,
        maxDistance:f32,

        depthSharpness:f32,
        ProbeSourceTextureSize:f32,
        ProbeSize:f32,
        bounceIntensity:f32,

        probeRoughness:f32,
        normalBias:f32,
        irradianceChebyshevBias:f32,
        rayNumber:f32,

        irradianceDistanceBias:f32,
        indirectIntensity:f32,
        ddgiGamma:f32,
        lerpHysteresis:f32,

        debugX:f32,
        debugY:f32,
        debugZ:f32,
        slot0:f32,

        v7:vec4<f32>,
    }
`;
