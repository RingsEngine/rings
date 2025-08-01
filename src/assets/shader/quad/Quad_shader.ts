export let FullQuad_vert_wgsl: string = `
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct MaterialUniform {
        x:f32,
        y:f32,
        width:f32,
        height:f32,
    };

    struct VertexOutput {
        @location(auto) fragUV: vec2<f32>,
        @builtin(position) position: vec4<f32>
    };

    @vertex
    fn main(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) index){
        const pos = array(vec2(-1.0, -1.0), vec2(-1.0, 1.0), vec2(-1.0, 1.0), vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(1.0, 1.0));
        const uv = array(vec2(1.0, 0.0), vec2(1.0, 1.0), vec2(0.0, 1.0), vec2(1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, 0.0));
        let id = u32(index);
        var output: VertexOutput;
        output.fragUV = uv[vertexIndex];
        output.position = vec4<f32>(pos[vertexIndex] , 0.0, 1.0);
        return output;
    }
`;

export let Quad_vert_wgsl: string = `
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct MaterialUniform {
        x: f32,
        y: f32,
        width:f32,
        height:f32,
    };

    struct VertexOutput {
        @location(auto) fragUV: vec2<f32>,
        @builtin(position) member: vec4<f32>
    };

    @vertex
    fn main(@builtin(instance_index) index: u32, @location(auto) position: vec3<f32>, @location(auto) TEXCOORD_1: vec2<f32>) -> VertexOutput {
        let uv = vec2(((TEXCOORD_1.xy * 2.0) - vec2<f32>(1.0)));
        return VertexOutput(TEXCOORD_1, vec4<f32>(uv, 0.0, 1.0));
    }
`;

export let Quad_frag_wgsl: string = `
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(0)
    var baseMap: texture_2d<f32>;

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV;
        uv.y = 1.0 -uv.y;
        var color: vec4<f32> = textureSample(baseMap, baseMapSampler, uv);

        return FragmentOutput(color);
    }
`;

export let Quad_depth2d_frag_wgsl: string = `
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_depth_2d;

    fn Linear01Depth(z:f32) -> f32 {
        return 1.0 / (1.0 * z + 5000.0);
    }

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV;
        uv.y = 1.0 - uv.y;
        var depth = textureSample(baseMap, baseMapSampler, uv, vec2<i32>(0));
        return FragmentOutput(vec4<f32>(depth, 0.0, 0.0, 1.0));
    }
`;

export let Quad_depthCube_frag_wgsl: string = `
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(0)
    var baseMap: texture_depth_cube;

    fn uvToXYZ(face: i32, uv: vec2<f32>) -> vec3<f32> {
        var out : vec3<f32> ;
        if(face == 0){
            out = vec3<f32>( 1.0, uv.y, -uv.x);
        }else if(face == 1){
            out = vec3<f32>( -1.0, uv.y, uv.x);
        }else if(face == 2){
            out = vec3<f32>( uv.x, -1.0, uv.y);
        }else if(face == 3){
            out = vec3<f32>( uv.x,  1.0, -uv.y);
        }else if(face == 4){
            out = vec3<f32>( uv.x, uv.y, 1.0);
        }else{	
            out = vec3<f32>( -uv.x, uv.y, -1.0);
        }
        return out ;
    }

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV;
        uv.y = 1.0 - uv.y;
        var ii = 0.16;
        var ouv = vec3<f32>(0.0);
        if(uv.x < ii * 6.0){
            ouv = uvToXYZ(5, uv/ii);
        }
        if(uv.x < ii * 5.0){
            ouv = uvToXYZ(4,uv/ii);
        }
        if(uv.x < ii * 4.0){
            ouv = uvToXYZ(3,uv/ii);
        } 
        if(uv.x < ii * 3.0){
            ouv = uvToXYZ(2,uv/ii);
        }
        if(uv.x < ii * 2.0){
            ouv = uvToXYZ(1,uv/ii);
        }
        if(uv.x < ii * 1.0){
            ouv = uvToXYZ(0,uv/ii);
        }
        var depth = textureSample(baseMap, baseMapSampler, ouv);
        depth = 1.0 - depth;
        return FragmentOutput(vec4<f32>(depth, 0.0, 0.0, 1.0));
    }
`;

export let Quad_depth2dArray_frag_wgsl: string = `
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>
    }

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d_array;

    struct MaterialData{
        index:f32;
    }

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV;
        uv.y = 1.0 - uv.y;

        var depth = textureSample(baseMap, baseMapSampler, ouv);
        depth = 1.0 - depth;

        return FragmentOutput(vec4<f32>(depth, 0.0, 0.0, 1.0));
    }
`;
