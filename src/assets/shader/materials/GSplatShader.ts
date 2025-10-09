export const GSplat_VS: string = /* wgsl */ `
    #include "GlobalUniform"

    struct VSOut {
        @location(auto) vColor : vec4f,
        @location(auto) vTexCoord : vec2f,
        @builtin(position) member : vec4f
    };

    // ===== SPLAT CORE VS (from PlayCanvas shader-generator-gsplat.js) =====
    
    // Uniforms (mapped to WebGPU bindings)
    // matrix_model, matrix_view, matrix_projection -> GlobalUniform + MaterialUniform
    // viewport -> calculated from globalUniform.windowWidth/Height
    // tex_params -> materialUniform.tex_params
    
    @group(1) @binding(0) var splatColor : texture_2d<f32>;
    @group(1) @binding(1) var transformA : texture_2d<u32>;
    @group(1) @binding(2) var transformB : texture_2d<f32>;
    @group(1) @binding(4) var splatOrder : texture_2d<u32>;
    
    struct MaterialUniform {
        tex_params: vec4f,      // numSplats, textureWidth, validCount, visBoost
        modelMatrix: mat4x4<f32>,
        pixelCull: vec4f,       // minPixels, maxPixels, maxPixelCullDistance, reserved
    };
    @group(1) @binding(3) var<uniform> materialUniform : MaterialUniform;
    
    // Global variables (like PlayCanvas)
    var<private> orderId: u32;
    var<private> splatId: u32;
    var<private> splatUV: vec2<i32>;
    var<private> tA: vec4<u32>;
    
    // Helper: decode 16-bit half float
    fn unpackHalf(h: u32) -> f32 {
        let s = (h >> 15u) & 0x1u;
        let e = (h >> 10u) & 0x1fu;
        let m = h & 0x3ffu;
        let sign = select(1.0, -1.0, s == 1u);
        if (e == 0u) {
            if (m == 0u) { return 0.0; }
            return sign * (f32(m) * exp2(-24.0));
        } else if (e == 31u) {
            return sign * 65504.0;
        } else {
            return sign * (1.0 + f32(m) / 1024.0) * exp2(f32(i32(e) - 15));
        }
    }
    
    // === calcSplatUV() - returns bool ===
    fn calcSplatUV(instance_id: u32) -> bool {
        let numSplats = u32(materialUniform.tex_params.x);
        let textureWidth = u32(materialUniform.tex_params.y);
        
        // calculate splat index
        orderId = instance_id;
        
        if (orderId >= numSplats) {
            return false;
        }
        
        let orderUV = vec2<i32>(
            i32(orderId % textureWidth),
            i32(orderId / textureWidth)
        );
        
        // calculate splatUV
        splatId = textureLoad(splatOrder, orderUV, 0).r;
        splatUV = vec2<i32>(
            i32(splatId % textureWidth),
            i32(splatId / textureWidth)
        );
        
        return true;
    }
    
    // === getCenter() - returns vec3 ===
    fn getCenter() -> vec3f {
        tA = textureLoad(transformA, splatUV, 0);
        return vec3f(bitcast<f32>(tA.x), bitcast<f32>(tA.y), bitcast<f32>(tA.z));
    }
    
    // Struct to return covA and covB
    struct CovarianceData {
        covA: vec3f,
        covB: vec3f,
    };
    
    // === getCovariance() - returns struct ===
    fn getCovariance() -> CovarianceData {
        let tB = textureLoad(transformB, splatUV, 0);
        
        // unpackHalf2x16 equivalent
        let h1 = tA.w & 0xFFFFu;
        let h2 = (tA.w >> 16u) & 0xFFFFu;
        let tCx = unpackHalf(h1);
        let tCy = unpackHalf(h2);
        
        var result: CovarianceData;
        result.covA = tB.xyz;
        result.covB = vec3f(tCx, tCy, tB.w);
        
        return result;
    }
    
    // === calcV1V2() - returns vec4 ===
    fn calcV1V2(splat_cam: vec3f, covA: vec3f, covB: vec3f, W: mat3x3f, viewport: vec2f, projMat: mat4x4f) -> vec4f {
        let Vrk = mat3x3f(
            vec3f(covA.x, covA.y, covA.z),
            vec3f(covA.y, covB.x, covB.y),
            vec3f(covA.z, covB.y, covB.z)
        );
        
        let focal = viewport.x * abs(projMat[0][0]);
        
        let J1 = focal / abs(splat_cam.z);
        let J2 = -J1 / abs(splat_cam.z) * splat_cam.xy;
        let J = mat3x3f(
            vec3f(J1, 0.0, J2.x),
            vec3f(0.0, J1, J2.y),
            vec3f(0.0, 0.0, 0.0)
        );
        
        let T = W * J;
        let cov = transpose(T) * Vrk * T;
        
        let diagonal1 = cov[0][0] + 0.3;
        let offDiagonal = cov[0][1];
        let diagonal2 = cov[1][1] + 0.3;
        
        let mid = 0.5 * (diagonal1 + diagonal2);
        let radius = length(vec2f((diagonal1 - diagonal2) / 2.0, offDiagonal));
        let lambda1 = mid + radius;
        let lambda2 = max(mid - radius, 0.1);
        let diagonalVector = normalize(vec2f(offDiagonal, lambda1 - diagonal1));
        
        let v1 = min(sqrt(2.0 * lambda1), 1024.0) * diagonalVector;
        let v2 = min(sqrt(2.0 * lambda2), 1024.0) * vec2f(diagonalVector.y, -diagonalVector.x);
        
        return vec4f(v1, v2);
    }
    
    // ===== SPLAT MAIN VS (from PlayCanvas gsplat-material.js) =====
    
    @vertex
    fn VertMain(
        @builtin(vertex_index) vid : u32,
        @builtin(instance_index) iid : u32
    ) -> VSOut {
        var o: VSOut;
        let discardVec = vec4f(0.0, 0.0, 2.0, 1.0);
        
        // Vertex position array (PlayCanvas uses attribute vec3 with x,y in [-1,1])
        let vertex_position = array<vec2f, 4>(
            vec2f(-2.0, -2.0),
            vec2f( 2.0, -2.0),
            vec2f(-2.0,  2.0),
            vec2f( 2.0,  2.0)
        );
        let vertex_pos = vertex_position[vid & 3u];
        
        // calculate splat uv
        if (!calcSplatUV(iid)) {
            o.member = discardVec;
            o.vColor = vec4f(0.0);
            o.vTexCoord = vec2f(0.0);
            return o;
        }
        
        // get center
        let center = getCenter();
        
        // handle transforms
        let matrix_view = globalUniform.viewMat;
        let matrix_projection = globalUniform.projMat;
        let matrix_model = materialUniform.modelMatrix;
        
        let model_view = matrix_view * matrix_model;
        let splat_cam = model_view * vec4f(center, 1.0);
        let splat_proj = matrix_projection * splat_cam;
        
        // Frustum culling: cull splats behind camera
        if (splat_proj.z < 0.0) {
            o.member = discardVec;
            o.vColor = vec4f(0.0);
            o.vTexCoord = vec2f(0.0);
            return o;
        }
        
        // Frustum culling: cull splats outside screen bounds
        // Add margin for splat radius (conservative: ~2x max splat size)
        let ndc = splat_proj.xyz / splat_proj.w;
        let margin = 0.5; // Allow splats near edges to be visible
        if (ndc.x < -1.0 - margin || ndc.x > 1.0 + margin ||
            ndc.y < -1.0 - margin || ndc.y > 1.0 + margin ||
            ndc.z < 0.0 || ndc.z > 1.0) {
            o.member = discardVec;
            o.vColor = vec4f(0.0);
            o.vTexCoord = vec2f(0.0);
            return o;
        }
        
        // get covariance
        let cov_data = getCovariance();
        
        let viewport = vec2f(globalUniform.windowWidth, globalUniform.windowHeight);
        let v1v2 = calcV1V2(splat_cam.xyz, cov_data.covA, cov_data.covB, transpose(mat3x3f(model_view[0].xyz, model_view[1].xyz, model_view[2].xyz)), viewport, matrix_projection);
        
        // get color
        let color = textureLoad(splatColor, splatUV, 0);
        
        // calculate scale based on alpha
        let scale = min(1.0, sqrt(-log(1.0 / 255.0 / color.a)) / 2.0);
        
        // apply visBoost (size multiplier)
        let visBoost = materialUniform.tex_params.w;
        var v1v2_scaled = v1v2 * scale * visBoost;
        
        // Pixel coverage culling (min and max thresholds)
        let v1_len_sq = dot(v1v2_scaled.xy, v1v2_scaled.xy);
        let v2_len_sq = dot(v1v2_scaled.zw, v1v2_scaled.zw);
        
        let minPixels = materialUniform.pixelCull.x;
        let maxPixels = materialUniform.pixelCull.y;
        let maxPixelCullDistance = materialUniform.pixelCull.z;
        
        // Early out tiny splats (below minimum pixel coverage)
        if (v1_len_sq < minPixels && v2_len_sq < minPixels) {
            o.member = discardVec;
            o.vColor = vec4f(0.0);
            o.vTexCoord = vec2f(0.0);
            return o;
        }
        
        // Cull oversized splats (above maximum pixel coverage)
        // Only apply to splats close to camera (distance-based condition)
        if (maxPixels > 0.0) {
            // Calculate distance from splat to camera
            let splatDistance = length(splat_cam.xyz);
            
            // Only cull oversized splats if they are close to camera
            if (maxPixelCullDistance <= 0.0 || splatDistance < maxPixelCullDistance) {
                let maxAxisSq = maxPixels * maxPixels;
                if (v1_len_sq > maxAxisSq || v2_len_sq > maxAxisSq) {
                    o.member = discardVec;
                    o.vColor = vec4f(0.0);
                    o.vTexCoord = vec2f(0.0);
                    return o;
                }
            }
        }
        
        // gl_Position = splat_proj + vec4((vertex_position.x * v1v2.xy + vertex_position.y * v1v2.zw) / viewport * splat_proj.w, 0, 0);
        o.member = splat_proj + vec4f((vertex_pos.x * v1v2_scaled.xy + vertex_pos.y * v1v2_scaled.zw) / viewport * splat_proj.w, 0.0, 0.0);
        
        // texCoord = vertex_position.xy * scale / 2.0;
        o.vTexCoord = vertex_pos * scale / 2.0;
        
        o.vColor = color;
        
        return o;
    }
`;

export const GSplat_FS: string = /* wgsl */ `
    #include "FragmentOutput"

    // === evalSplat() - like PlayCanvas splatCoreFS ===
    fn evalSplat(texCoord: vec2f, color: vec4f) -> vec4f {
        let A = dot(texCoord, texCoord);
        if (A > 1.0) {
            discard;
        }
        
        let B = exp(-A * 4.0) * color.a;
        if (B < 1.0 / 255.0) {
            discard;
        }
        
        // TONEMAP_ENABLED branch not implemented (would call toneMap() and gammaCorrectOutput())
        return vec4f(color.rgb, B);
    }
    
    // === main() - like PlayCanvas splatMainFS ===
    @fragment
    fn FragMain(@location(auto) vColor: vec4f, @location(auto) vTexCoord: vec2f) -> FragmentOutput {
        let result = evalSplat(vTexCoord, vColor);
        
        var o: FragmentOutput;
        o.color = result;
        o.gBuffer = vec4f(0.0);
        return o;
    }
`;


