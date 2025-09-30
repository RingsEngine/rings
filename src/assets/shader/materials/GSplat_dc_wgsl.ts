export const GSplat_VS_DC: string = /* wgsl */ `
    #include "GlobalUniform"

    struct VSOut {
        @location(auto) vColor : vec4f,
        @location(auto) vTexCoord : vec2f,
        @builtin(position) member : vec4f
    };

    // group(1): splat resources
    @group(1) @binding(0) var splatColor : texture_2d<f32>;              // rgba8unorm
    @group(1) @binding(1) var transformA : texture_2d<u32>;              // rgba32uint
    @group(1) @binding(2) var transformB : texture_2d<f32>;              // rgba16float (sampled as f32)
    @group(1) @binding(4) var splatOrder : texture_2d<u32>;              // rgba32uint (use .x)

    // material uniform buffer (engine-managed)
    struct MaterialUniform {
        tex_params: vec4f,
    };
    @group(1) @binding(3) var<uniform> materialUniform : MaterialUniform;

    // decode 16-bit float (IEEE 754 half) to f32
    fn halfToFloat(h: u32) -> f32 {
        let s: u32 = (h >> 15u) & 0x1u;
        let e: u32 = (h >> 10u) & 0x1fu;
        let m: u32 = h & 0x3ffu;
        let sign = select(1.0, -1.0, s == 1u);
        if (e == 0u) {
            if (m == 0u) { return 0.0; }
            return sign * (f32(m) * exp2(-24.0));
        } else if (e == 31u) {
            // clamp INF/NaN to max finite half value
            return sign * 65504.0;
        } else {
            return sign * (1.0 + f32(m) / 1024.0) * exp2(f32(i32(e) - 15));
        }
    }

    @vertex
    fn VertMain(
        @builtin(vertex_index) vid : u32,
        @builtin(instance_index) iid : u32
    ) -> VSOut {
        let validCount = u32(materialUniform.tex_params.z);
        var o: VSOut;
        if (iid >= validCount) {
            // clip this instance
            o.vColor = vec4f(0.0);
            o.vTexCoord = vec2f(2.0, 2.0);
            o.member = vec4f(0.0, 0.0, 2.0, 1.0);
            return o;
        }
        var corner = array<vec2f, 4>(
            vec2f(-1.0, -1.0),
            vec2f( 1.0, -1.0),
            vec2f(-1.0,  1.0),
            vec2f( 1.0,  1.0)
        );

        var splatId = iid;
        // use order texture if provided (binding exists)
        // resolve order by reading r channel
        let textureWidth = u32(materialUniform.tex_params.y);
        let orderUV = vec2<i32>(i32(iid % textureWidth), i32(iid / textureWidth));
        let orderVal = textureLoad(splatOrder, orderUV, 0);
        splatId = orderVal.x;
        let uvx = i32(splatId % textureWidth);
        let uvy = i32(splatId / textureWidth);
        let splatUV = vec2<i32>(uvx, uvy);

        let tA = textureLoad(transformA, splatUV, 0);
        let center = vec3f(bitcast<f32>(tA.x), bitcast<f32>(tA.y), bitcast<f32>(tA.z));

        let viewMat = globalUniform.viewMat;
        let projMat = globalUniform.projMat;
        let splat_cam = viewMat * vec4f(center, 1.0);
        let splat_proj = projMat * splat_cam;

        if (splat_proj.z < -splat_proj.w) {
            o.vColor = vec4f(0.0);
            o.vTexCoord = vec2f(2.0, 2.0);
            o.member = vec4f(0.0, 0.0, 2.0, 1.0);
            return o;
        }

        // build world-space 3x3 covariance from packed terms
        let tB = textureLoad(transformB, splatUV, 0);
        let covA = tB.xyz;
        let half2 = tA.w;
        let cBx = halfToFloat(half2 & 0xFFFFu);
        let cBy = halfToFloat((half2 >> 16u) & 0xFFFFu);
        let covB = vec3f(cBx, cBy, tB.w);
        let Cw = mat3x3f(
            vec3f(covA.x, covA.y, covA.z),
            vec3f(covA.y, covB.x, covB.y),
            vec3f(covA.z, covB.y, covB.z)
        );

        // transform covariance to camera space: Cc = R * Cw * R^T
        let R = mat3x3f(viewMat[0].xyz, viewMat[1].xyz, viewMat[2].xyz);
        let Cc = R * Cw * transpose(R);

        // perspective Jacobian at splat center in camera space
        let X = splat_cam.x; let Y = splat_cam.y; let Z = splat_cam.z;
        let viewport = vec2f(globalUniform.windowWidth, globalUniform.windowHeight);
        let fx = projMat[0][0] * 0.5 * viewport.x;
        let fy = projMat[1][1] * 0.5 * viewport.y;
        let invZ = 1.0 / max(abs(Z), 1e-4);
        let t00 = fx * invZ;
        let t01 = 0.0;
        let t02 = -fx * X * invZ * invZ;
        let t10 = 0.0;
        let t11 = fy * invZ;
        let t12 = -fy * Y * invZ * invZ;

        // C2 = T * Cc * T^T, expanded manually
        let m0 = vec3f(t00, t01, t02);
        let m1 = vec3f(t10, t11, t12);
        let v0 = Cc * m0;
        let v1c = Cc * m1;
        let A2 = dot(m0, v0);
        let B2 = dot(m0, v1c);
        let C2 = dot(m1, v1c);

        // eigen decomposition of 2x2 symmetric [[A2, B2],[B2, C2]]
        let tr = A2 + C2;
        let det = A2 * C2 - B2 * B2;
        let s = sqrt(max(tr * tr * 0.25 - det, 1e-8));
        let l1 = max(tr * 0.5 + s, 1e-8);
        let l2 = max(tr * 0.5 - s, 1e-8);
        let e1 = normalize(vec2f(B2, l1 - A2));
        let e2 = vec2f(-e1.y, e1.x);
        var axis1 = e1 * sqrt(l1);
        var axis2 = e2 * sqrt(l2);

        // sample color early to compute alpha-based scale like PlayCanvas
        let color = textureLoad(splatColor, splatUV, 0);
        // robust alpha-based scale (avoid sqrt of negative when alpha < 1/255)
        let a_clamped = max(color.a, (1.0 / 255.0));
        let scale = min(1.0, sqrt(-log((1.0 / 255.0) / a_clamped)) / 2.0);
        // runtime-controlled visibility boost (use absolute for geometry scaling)
        let VIS_BOOST = abs(materialUniform.tex_params.w);
        axis1 *= scale * VIS_BOOST;
        axis2 *= scale * VIS_BOOST;

        // early out tiny splats (both axes shorter than 2px)
        if (dot(axis1, axis1) < 4.0 && dot(axis2, axis2) < 4.0) {
            o.vColor = vec4f(0.0);
            o.vTexCoord = vec2f(2.0, 2.0);
            o.member = vec4f(0.0, 0.0, 2.0, 1.0);
            return o;
        }

        let v = vec2f(corner[vid & 3u].x * axis1.x + corner[vid & 3u].y * axis2.x,
                      corner[vid & 3u].x * axis1.y + corner[vid & 3u].y * axis2.y);
        let offset = vec2f(v.x, v.y) / viewport * splat_proj.w;

        o.member = splat_proj + vec4f(offset, 0.0, 0.0);
        o.vColor = color;
        // Match PlayCanvas mapping: our corner is [-1,1], so use scale * VIS_BOOST (no 0.5 factor here)
        o.vTexCoord = corner[vid & 3u] * (scale * VIS_BOOST);
        return o;
    }
`;

export const GSplat_FS_DC: string = /* wgsl */ `
    #include "FragmentOutput"

    // mirror material uniform for FS access
    struct MaterialUniform {
        tex_params: vec4f,
    };
    @group(1) @binding(3) var<uniform> materialUniform : MaterialUniform;

    @fragment
    fn FragMain(@location(auto) vColor: vec4f, @location(auto) vTexCoord: vec2f, @builtin(position) fragPos: vec4f) -> FragmentOutput {
        // match PlayCanvas-like isotropic eval in FS (geometry carries anisotropy)
        let A = dot(vTexCoord, vTexCoord);
        if (A > 1.0) {
            discard;
        }
        // PlayCanvas-like falloff
        let B = exp(-A * 4.0) * vColor.a;
        var alpha = clamp(B, 0.0, 1.0);

        // Dither alpha-to-coverage (4x4 Bayer) if enabled via tex_params.w < 0
        let visBoost = materialUniform.tex_params.w;
        if (visBoost < 0.0) {
            let bx = i32(floor(fragPos.x)) & 3;
            let by = i32(floor(fragPos.y)) & 3;
            var bayer : array<array<f32,4>,4> = array<array<f32,4>,4>(
                array<f32,4>(0.0/16.0, 8.0/16.0, 2.0/16.0,10.0/16.0),
                array<f32,4>(12.0/16.0,4.0/16.0,14.0/16.0,6.0/16.0),
                array<f32,4>(3.0/16.0,11.0/16.0,1.0/16.0,9.0/16.0),
                array<f32,4>(15.0/16.0,7.0/16.0,13.0/16.0,5.0/16.0)
            );
            let thresh = bayer[by][bx];
            if (alpha < thresh) {
                discard;
            }
            alpha = 1.0;
        }

        var o: FragmentOutput;
        o.color = vec4f(vColor.rgb, alpha);
        // minimal gbuffer placeholder
        o.gBuffer = vec4f(0.0, 0.0, 0.0, 0.0);
        return o;
    }
`;


