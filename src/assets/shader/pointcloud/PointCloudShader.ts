export const PointCloud_VS: string = /* wgsl */ `
    #include "GlobalUniform"
    
    const ALPHA_THRESHOLD: f32 = 0.00392156863;
    
    struct MaterialUniform {
        modelMatrix: mat4x4<f32>,
        tex_params: vec4<f32>,
        pointParams: vec4<f32>,
    };
    @group(1) @binding(0) var<uniform> materialUniform: MaterialUniform;
    
    struct VSOut {
        @builtin(position) member: vec4<f32>,
        @location(0) vColor: vec4<f32>,
        @location(1) vTexCoord: vec2<f32>,
    };
    
    @group(1) @binding(1) var pointColor: texture_2d<f32>;
    @group(1) @binding(2) var pointPosition: texture_2d<u32>;
    @group(1) @binding(3) var pointOrder: texture_2d<u32>;
    
    fn discardPoint() -> VSOut {
        var o: VSOut;
        o.member = vec4f(0.0, 0.0, 2.0, 1.0);
        o.vColor = vec4f(0.0);
        o.vTexCoord = vec2f(0.0);
        return o;
    }
    
    fn calcPointUV(orderId: u32, textureWidth: u32, numPoints: u32) -> vec2<i32> {
        let pointId = orderId;
        return vec2<i32>(
            i32(pointId % textureWidth),
            i32(pointId / textureWidth)
        );
    }
    
    @vertex
    fn VertMain(
        @builtin(vertex_index) vid: u32,
        @builtin(instance_index) iid: u32,
        @location(0) position: vec3<f32>
    ) -> VSOut {
        let batchSize = max(1u, u32(materialUniform.pointParams.w));
        let orderId = iid * batchSize + u32(position.z);
        
        let textureWidth = max(1u, u32(materialUniform.tex_params.y));
        let numPoints = max(1u, u32(materialUniform.tex_params.x));
        let safeOrderId = min(orderId, numPoints - 1u);
        
        let pointUV = calcPointUV(safeOrderId, textureWidth, numPoints);
        let color = textureLoad(pointColor, pointUV, 0);
        
        let posData = textureLoad(pointPosition, pointUV, 0);
        let pointPos = vec3f(
            bitcast<f32>(posData.x),
            bitcast<f32>(posData.y),
            bitcast<f32>(posData.z)
        );
        
        let matrix_model = materialUniform.modelMatrix;
        let matrix_view = globalUniform.viewMat;
        let matrix_projection = globalUniform.projMat;
        let model_view = matrix_view * matrix_model;
        
        let centerClip = matrix_projection * (model_view * vec4f(pointPos, 1.0));
        
        let inv_w = 1.0 / centerClip.w;
        let ndc = centerClip.xyz * inv_w;
        if (ndc.x < -1.0 || ndc.x > 1.0 ||
            ndc.y < -1.0 || ndc.y > 1.0 ||
            ndc.z < 0.0 || ndc.z > 1.0) {
            return discardPoint();
        }
        
        let viewPos = model_view * vec4f(pointPos, 1.0);
        if (viewPos.z <= 0.0) {
            return discardPoint();
        }
        
        let pointSize = materialUniform.tex_params.w;
        let viewport = vec2f(globalUniform.windowWidth, globalUniform.windowHeight);
        let safeViewport = max(viewport, vec2f(1.0, 1.0));
        let inv_viewport = 2.0 / safeViewport;
        let offsetNDC = position.xy * pointSize * 0.5 * inv_viewport;
        let offsetClip = vec4f(offsetNDC * centerClip.w, 0.0, 0.0);
        
        var o: VSOut;
        o.member = centerClip + offsetClip;
        o.vColor = color;
        o.vTexCoord = position.xy;
        return o;
    }
`;

export const PointCloud_FS: string = /* wgsl */ `
    #include "FragmentOutput"
    
    const ALPHA_THRESHOLD: f32 = 0.00392156863;
    
    struct MaterialUniform {
        modelMatrix: mat4x4<f32>,
        tex_params: vec4<f32>,
        pointParams: vec4<f32>,
    };
    @group(1) @binding(0) var<uniform> materialUniform: MaterialUniform;
    
    @fragment
    fn FragMain(
        @location(0) vColor: vec4<f32>,
        @location(1) vTexCoord: vec2<f32>
    ) -> FragmentOutput {
        var o: FragmentOutput;
        
        let pointShape = materialUniform.pointParams.x;
        let distSq = dot(vTexCoord, vTexCoord);
        let isCircle = pointShape > 0.5;
        let discardPixel = isCircle && distSq > 1.0;
        
        if (discardPixel) {
            discard;
        }
        
        o.color = vColor;
        o.gBuffer = vec4f(0.0);
        return o;
    }
`;

