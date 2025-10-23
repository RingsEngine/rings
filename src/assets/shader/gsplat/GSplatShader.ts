export const GSplat_VS: string = /* wgsl */ `
    #include "GlobalUniform"
    
    struct MaterialUniform {
        modelMatrix: mat4x4<f32>,
        tex_params: vec4<f32>,      // [numSplats, texWidth, validCount, visBoost]
        pixelCull: vec4<f32>,        // [minPixels, maxPixels, maxPixelCullDistance, batchSize]
    };
    @group(1) @binding(0) var<uniform> materialUniform: MaterialUniform;
    
    struct VSOut {
        @builtin(position) member: vec4<f32>,
        @location(0) vColor: vec4<f32>,
        @location(1) vTexCoord: vec2<f32>,
    };
    
    // Textures (like PlayCanvas)
    @group(1) @binding(1) var splatColor: texture_2d<f32>;
    @group(1) @binding(2) var transformA: texture_2d<u32>;
    @group(1) @binding(3) var transformB: texture_2d<f32>;
    @group(1) @binding(4) var splatOrder: texture_2d<u32>;
    
    // Global variables for texture lookups
    var<private> splatUV: vec2<i32>;
    var<private> splatId: u32;
    var<private> tA: vec4<u32>;
    
    // === calcSplatUV() - returns bool ===
    fn calcSplatUV(orderId: u32) -> bool {
        let textureWidth = u32(materialUniform.tex_params.y);
        let numSplats = u32(materialUniform.tex_params.x);
        
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
        
        // Use WGSL built-in unpack2x16float (equivalent to GLSL unpackHalf2x16)
        let tC = unpack2x16float(tA.w);
        
        var result: CovarianceData;
        result.covA = tB.xyz;
        result.covB = vec3f(tC.x, tC.y, tB.w);
        
        return result;
    }
    
    // === getRotationMatrix() - returns mat3x3 ===
    fn getRotationMatrix() -> mat3x3f {
        let cov_data = getCovariance();
        let covA = cov_data.covA;
        let covB = cov_data.covB;
        
        return mat3x3f(
            vec3f(1.0 - 2.0 * (covA.z * covA.z + covB.x * covB.x), 2.0 * (covA.y * covA.z + covB.y * covB.x), 2.0 * (covA.y * covB.x - covB.y * covA.z)),
            vec3f(2.0 * (covA.y * covA.z - covB.y * covB.x), 1.0 - 2.0 * (covA.y * covA.y + covB.x * covB.x), 2.0 * (covA.z * covB.x + covA.y * covB.y)),
            vec3f(2.0 * (covA.y * covB.x + covB.y * covA.z), 2.0 * (covA.z * covB.x - covA.y * covB.y), 1.0 - 2.0 * (covA.y * covA.y + covA.z * covA.z))
        );
    }
    
    // === calcV1V2() - returns vec4 ===
    fn calcV1V2(splat_cam: vec3f, covA: vec3f, covB: vec3f, W: mat3x3f, viewport: vec2f, projMat: mat4x4f) -> vec4f {
        let Vrk = mat3x3f(
            vec3f(covA.x, covA.y, covA.z),
            vec3f(covA.y, covB.x, covB.y),
            vec3f(covA.z, covB.y, covB.z)
        );
        
        let focal = viewport.x * projMat[0][0];
        
        let J1 = focal / splat_cam.z;
        let J2 = -J1 / splat_cam.z * splat_cam.xy;
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
        
        // WebGPU Y-axis flip: WebGPU NDC Y goes from top(-1) to bottom(1), opposite of WebGL
        return vec4f(v1.x, -v1.y, v2.x, -v2.y);
    }
    
    // ===== SPLAT MAIN VS (from PlayCanvas gsplat-material.js) =====
    
    @vertex
    fn VertMain(
        @builtin(vertex_index) vid : u32,
        @builtin(instance_index) iid : u32,
        @location(0) position: vec3<f32>  // vertex_position from mesh (x, y, local_index)
    ) -> VSOut {
        var o: VSOut;
        let discardVec = vec4f(0.0, 0.0, 2.0, 1.0);
        
        // Calculate splat ID
        // orderId = vertex_id_attrib + uint(vertex_position.z)
        // In our case: vertex_id_attrib = iid * batchSize
        let batchSize = u32(materialUniform.pixelCull.w);
        let base_splat_index = iid * batchSize;
        let local_splat_index = u32(position.z);
        let orderId = base_splat_index + local_splat_index;
        
        // Use vertex position from mesh
        let vertex_pos = position.xy;
        
        // calculate splat uv
        if (!calcSplatUV(orderId)) {
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
        let ndc = splat_proj.xyz / splat_proj.w;
        let margin = 0.0;
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
        if (color.a < 1.0 / 255.0) {
            o.member = discardVec;
            o.vColor = vec4f(0.0);
            o.vTexCoord = vec2f(0.0);
            return o;
        }
        
        // calculate scale based on alpha
        let scale = min(1.0, sqrt(-log(1.0 / 255.0 / color.a)) / 2.0);
        
        // apply visBoost (size multiplier)
        let visBoost = materialUniform.tex_params.w;
        var v1v2_scaled = v1v2 * scale * visBoost;
        
        // Pixel coverage culling
        let v1_len_sq = dot(v1v2_scaled.xy, v1v2_scaled.xy);
        let v2_len_sq = dot(v1v2_scaled.zw, v1v2_scaled.zw);
        
        let minPixels = materialUniform.pixelCull.x;
        let maxPixels = materialUniform.pixelCull.y;
        let maxPixelCullDistance = materialUniform.pixelCull.z;
        
        // Early out tiny splats
        if (v1_len_sq < minPixels && v2_len_sq < minPixels) {
            o.member = discardVec;
            o.vColor = vec4f(0.0);
            o.vTexCoord = vec2f(0.0);
            return o;
        }
        
        // Cull oversized splats
        if (maxPixels > 0.0) {
            let splatDistance = length(splat_cam.xyz);
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
        
        // Final position
        o.member = splat_proj + vec4f((vertex_pos.x * v1v2_scaled.xy + vertex_pos.y * v1v2_scaled.zw) / viewport * splat_proj.w, 0.0, 0.0);
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
        var B = exp(-A * 4.0) * color.a;
        if (A > 1.0) {
            B = 0.0;
        }
        
        if (B < 1.0 / 255.0) {
            B = 0.0;
        }
        
        return vec4f(color.rgb, B);
    }

    @fragment
    fn FragMain(
        @location(0) vColor: vec4<f32>,
        @location(1) vTexCoord: vec2<f32>
    ) -> FragmentOutput {
        var o: FragmentOutput;
        o.color = evalSplat(vTexCoord, vColor);
        return o;
    }
`;
