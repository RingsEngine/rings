export const GSplat_VS: string = /* wgsl */ `
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
        modelMatrix: mat4x4<f32>,
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
        // Match PlayCanvas: vertex positions are [-2, 2] not [-1, 1]
        var corner = array<vec2f, 4>(
            vec2f(-2.0, -2.0),
            vec2f( 2.0, -2.0),
            vec2f(-2.0,  2.0),
            vec2f( 2.0,  2.0)
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
        
        // Transform splat center to world space using model matrix
        let worldCenter = materialUniform.modelMatrix * vec4f(center, 1.0);
        let splat_cam = viewMat * worldCenter;
        let splat_proj = projMat * splat_cam;

        if (splat_proj.z < -splat_proj.w) {
            o.vColor = vec4f(0.0);
            o.vTexCoord = vec2f(2.0, 2.0);
            o.member = vec4f(0.0, 0.0, 2.0, 1.0);
            return o;
        }

        // build local-space 3x3 covariance from packed terms
        let tB = textureLoad(transformB, splatUV, 0);
        let covA = tB.xyz;
        let half2 = tA.w;
        let cBx = halfToFloat(half2 & 0xFFFFu);
        let cBy = halfToFloat((half2 >> 16u) & 0xFFFFu);
        let covB = vec3f(cBx, cBy, tB.w);
        let Vrk_local = mat3x3f(
            vec3f(covA.x, covA.y, covA.z),
            vec3f(covA.y, covB.x, covB.y),
            vec3f(covA.z, covB.y, covB.z)
        );

        // Transform covariance to world space: Vrk_world = M * Vrk_local * M^T
        // Extract 3x3 rotation-scale matrix from model matrix
        let M = mat3x3f(
            materialUniform.modelMatrix[0].xyz,
            materialUniform.modelMatrix[1].xyz,
            materialUniform.modelMatrix[2].xyz
        );
        let Vrk = M * Vrk_local * transpose(M);

        // === EXACTLY match PlayCanvas calcV1V2 ===
        // W = transpose(mat3(view)), covariance already in world space
        let W = transpose(mat3x3f(viewMat[0].xyz, viewMat[1].xyz, viewMat[2].xyz));
        
        // Single focal (PlayCanvas uses only x-axis!)
        let viewport = vec2f(globalUniform.windowWidth, globalUniform.windowHeight);
        let focal = viewport.x * projMat[0][0];
        
        // Jacobian matrix
        let J1 = focal / splat_cam.z;
        let J2 = -J1 / splat_cam.z * vec2f(splat_cam.x, splat_cam.y);
        let J = mat3x3f(
            vec3f(J1, 0.0, J2.x),
            vec3f(0.0, J1, J2.y),
            vec3f(0.0, 0.0, 0.0)
        );
        
        // T = W * J, then cov = T^T * Vrk * T
        let T = W * J;
        let cov = transpose(T) * Vrk * T;
        let A2 = cov[0][0];
        let B2 = cov[0][1];
        let C2 = cov[1][1];

        // Add regularization (match PlayCanvas exactly)
        let diagonal1 = A2 + 0.3;
        let offDiagonal = B2;
        let diagonal2 = C2 + 0.3;

        // Eigendecomposition
        let mid = 0.5 * (diagonal1 + diagonal2);
        let radius = length(vec2f((diagonal1 - diagonal2) / 2.0, offDiagonal));
        let lambda1 = mid + radius;
        let lambda2 = max(mid - radius, 0.1);
        let diagonalVector = normalize(vec2f(offDiagonal, lambda1 - diagonal1));

        // Calculate orthogonal axes
        // CRITICAL: WebGPU NDC has inverted Y-axis compared to WebGL
        // WebGL Y: -1(bottom) to +1(top), WebGPU Y: -1(top) to +1(bottom)
        // So we flip the sign to compensate: vec2(-diagonalVector.y, diagonalVector.x)
        let v1 = min(sqrt(2.0 * lambda1), 1024.0) * diagonalVector;
        let v2 = min(sqrt(2.0 * lambda2), 1024.0) * vec2f(-diagonalVector.y, diagonalVector.x);

        var axis1 = v1;
        var axis2 = v2;

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

        // Calculate vertex offset in screen space
        // Match PlayCanvas: (vertex_position.x * v1 + vertex_position.y * v2) / viewport * w
        let cornerPos = corner[vid & 3u];
        let v = cornerPos.x * axis1 + cornerPos.y * axis2;
        let offset = v / viewport * splat_proj.w;

        o.member = splat_proj + vec4f(offset.x, offset.y, 0.0, 0.0);
        o.vColor = color;
        // CRITICAL FIX: texCoord must NOT be affected by VIS_BOOST!
        // VIS_BOOST only scales geometry (axis1/axis2), not the alpha falloff
        // With corner ∈ [-2, 2], this gives texCoord ∈ [-1, 1] * scale at vertices
        o.vTexCoord = corner[vid & 3u] * (scale / 2.0);
        return o;
    }
`;

export const GSplat_FS: string = /* wgsl */ `
    #include "FragmentOutput"

    // mirror material uniform for FS access
    struct MaterialUniform {
        tex_params: vec4f,
        modelMatrix: mat4x4<f32>,
    };
    @group(1) @binding(3) var<uniform> materialUniform : MaterialUniform;

    @fragment
    fn FragMain(@location(auto) vColor: vec4f, @location(auto) vTexCoord: vec2f, @builtin(position) fragPos: vec4f) -> FragmentOutput {
        // match PlayCanvas-like isotropic eval in FS (geometry carries anisotropy)
        let A = dot(vTexCoord, vTexCoord);
        if (A > 1.0) {
            discard;
        }
        // Match PlayCanvas falloff exactly
        let B = exp(-A * 4.0) * vColor.a;
        // Early discard for nearly transparent fragments (performance optimization)
        if (B < (1.0 / 255.0)) {
            discard;
        }
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


