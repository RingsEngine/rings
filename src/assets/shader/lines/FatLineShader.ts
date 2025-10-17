/**
 * FatLine Shader - Complete shader combining vertex, fragment and uniforms
 */
export const FatLine_VS: string = /* wgsl */ `
    #include "GlobalUniform"
    
    // Instance attributes stored in storage buffer
    // Extended with prevDir and nextDir for Line Join support
struct InstanceData {
    start: vec3<f32>,
    _padding1: f32,
    end: vec3<f32>,
    _padding2: f32,
    colorStart: vec3<f32>,
    _padding3: f32,
    colorEnd: vec3<f32>,
    _padding4: f32,
};

    struct VertexInput {
        @builtin(instance_index) instanceIndex: u32,
        @location(0) position: vec3<f32>,  // Quad vertices
        @location(1) uv: vec2<f32>,        // UV coordinates
    };

    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) vUv: vec2<f32>,
        @location(1) vColor: vec3<f32>,
    };

    struct MaterialUniform {
        baseColor: vec4<f32>,
        lineWidth: f32,
        opacity: f32,
        resolution: vec2<f32>,
        modelMatrix: mat4x4<f32>,
    };

    @group(1) @binding(0) var<uniform> materialUniform: MaterialUniform;
    @group(1) @binding(1) var<storage, read> instances: array<InstanceData>;

    @vertex
    fn VertMain(input: VertexInput) -> VertexOutput {
        var output: VertexOutput;
        
        let instance = instances[input.instanceIndex];
        
        // Transform from local space to world space, then to view space
        let start_world = materialUniform.modelMatrix * vec4<f32>(instance.start, 1.0);
        let end_world = materialUniform.modelMatrix * vec4<f32>(instance.end, 1.0);
        
        let start_view = globalUniform.viewMat * start_world;
        let end_view = globalUniform.viewMat * end_world;
        
        // Project to clip space
        var clip_start = globalUniform.projMat * start_view;
        var clip_end = globalUniform.projMat * end_view;
        
        // Perspective division to NDC space
        let ndc_start = clip_start.xyz / clip_start.w;
        let ndc_end = clip_end.xyz / clip_end.w;
        
        // Calculate screen-space direction
        var dir = ndc_end.xy - ndc_start.xy;
        
        // Account for aspect ratio
        let aspect = materialUniform.resolution.x / materialUniform.resolution.y;
        dir.x *= aspect;
        dir = normalize(dir);
        
        // Calculate perpendicular offset
        var offset = vec2<f32>(dir.y, -dir.x);
        
        // Undo aspect ratio adjustment for both dir and offset
        dir.x /= aspect;
        offset.x /= aspect;
        
        // Flip offset direction based on position.x
        if (input.position.x < 0.0) {
            offset *= -1.0;
        }
        
        // Handle endcaps
        if (input.position.y < 0.0) {
            offset += -dir;
        } else if (input.position.y > 1.0) {
            offset += dir;
        }
        
        // Apply line width
        offset *= materialUniform.lineWidth;
        offset /= materialUniform.resolution.y;  // Convert to clip space
        
        // Select start or end point
        var clip = select(clip_end, clip_start, input.position.y < 0.5);
        
        // Shift the depth of the projected points so the line segments
        // overlap neatly and face the camera properly (billboard effect)
        let clipPose = select(ndc_end, ndc_start, input.position.y < 0.5);
        clip.z = clipPose.z * clip.w;
        
        // Perspective correction
        offset *= clip.w;
        clip.x += offset.x;
        clip.y += offset.y;
        
        output.position = clip;
        output.vUv = input.uv;
        output.vColor = select(instance.colorEnd, instance.colorStart, input.position.y < 0.5);
        
        return output;
    }
`;

export const FatLine_FS: string = /* wgsl */ `
    struct FragmentOutput {
        @location(0) color: vec4<f32>,
        @location(1) gBuffer: vec4<f32>,
    };

    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) vUv: vec2<f32>,
        @location(1) vColor: vec3<f32>,
    };

    struct MaterialUniform {
        baseColor: vec4<f32>,
        lineWidth: f32,
        opacity: f32,
        resolution: vec2<f32>,
        modelMatrix: mat4x4<f32>,
    };

    @group(1) @binding(0) var<uniform> materialUniform: MaterialUniform;

    @fragment
    fn FragMain(input: VertexOutput) -> FragmentOutput {
        var output: FragmentOutput;
        
        var alpha = materialUniform.opacity;
        
        // Round endcap rendering with anti-aliasing
        let a = input.vUv.x;
        let b = select(input.vUv.y - 1.0, input.vUv.y + 1.0, input.vUv.y > 0.0);
        let len2 = a * a + b * b;
        
        // Calculate derivative (must be in uniform control flow)
        let dlen = fwidth(len2);
        
        // Round endcap rendering - simple approach
        if (abs(input.vUv.y) > 1.0) {
            // Determine circle center: (0, 1) for top, (0, -1) for bottom
            var basePoint = select(
                vec2<f32>(0.0, -1.0),  // Bottom endcap
                vec2<f32>(0.0, 1.0),   // Top endcap
                input.vUv.y > 0.0
            );
            
            // Distance from UV to circle center
            // var dist = length(input.vUv - basePoint);
            var dist2 = (input.vUv.x - basePoint.x) * (input.vUv.x - basePoint.x) + (input.vUv.y - basePoint.y) * (input.vUv.y - basePoint.y);
            
            // Discard pixels outside circle (radius = 1.0)
            if (dist2 > 1.0) {
                discard;
            }
        }
        
        let color = input.vColor * materialUniform.baseColor.rgb;
        output.color = vec4<f32>(color, alpha);
        output.gBuffer = vec4<f32>(0.0, 0.0, 0.0, 0.0); // No GBuffer data for lines
        
        return output;
    }
`;

