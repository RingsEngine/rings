export let QuadGlsl_vs = `
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexOutput {
        @location(auto) fragUV: vec2<f32>,
        @builtin(position) member: vec4<f32>
    }

    @vertex
    fn main(@builtin(instance_index) index : u32, @location(auto) position: vec3<f32>, @location(auto) TEXCOORD_1: vec2<f32>) -> VertexOutput {
        let id = u32(index);
        let worldMatrix = models.matrix[id];
        let screenPos = vec2(((TEXCOORD_1 * 2.0) - vec2<f32>(1.0))) * 0.5 ; 
        return VertexOutput(TEXCOORD_1, vec4<f32>(screenPos, 0.0, 1.0));
    }
`;

export let QuadGlsl_fs = `
    #version 450

    layout(location = 0) in vec2 fragUV;
    layout(location = 0) out vec4 o_Target;

    layout(set = 0, binding = 0) uniform ConstUniform {
    mat4 projMat;
    mat4 viewMat;
    mat4 shadowMatrix;
    mat4 cameraWorldMatrix;
    mat4 pvMatrixInv;
    float frame;
    float time;
    float delta;
    float shadowBias;
    float skyExposure;
    float renderPassState;
    float quadScale;
    };

    layout(set = 2, binding = 0) uniform sampler baseMapSampler;
    layout(set = 2, binding = 1) uniform texture2D baseMap;
    layout(set = 3, binding = 0) uniform MaterialDataUniform {
        vec4 color;
    };

    void main() {
        vec2 uv = fragUV.xy;
        uv.y = 1.0 - uv.y;
        vec4 colorTexture = texture(sampler2D(baseMap, baseMapSampler), uv * quadScale) * color;
        o_Target = vec4(colorTexture.rgb, colorTexture.a);

        if (o_Target.r <= 0.5 && o_Target.g <= 0.5 && o_Target.b <= 0.5) {
            discard;
        }
    };
`;
