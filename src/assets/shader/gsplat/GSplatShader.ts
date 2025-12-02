export const GSplat_VS: string = /* wgsl */ `
    #include "GlobalUniform"
    
    // Constants
    const ALPHA_THRESHOLD: f32 = 0.00392156863; // 1.0 / 255.0
    const COV_COMPENSATION: f32 = 0.3;
    const MAX_SPLAT_SIZE: f32 = 1024.0;
    const MIN_LAMBDA: f32 = 0.1;
    const LOG_255: f32 = 5.541263545; // log(255.0) - natural log for WGSL
    
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
    
    // Textures
    @group(1) @binding(1) var splatColor: texture_2d<f32>;
    @group(1) @binding(2) var transformA: texture_2d<u32>;
    @group(1) @binding(3) var transformB: texture_2d<f32>;
    @group(1) @binding(4) var splatOrder: texture_2d<u32>;
    
    struct SplatData {
        center: vec3f,
        covA: vec3f,
        covB: vec3f,
    };
    
    // Helper function to discard splat
    fn discardSplat() -> VSOut {
        var o: VSOut;
        o.member = vec4f(0.0, 0.0, 2.0, 1.0);
        o.vColor = vec4f(0.0);
        o.vTexCoord = vec2f(0.0);
        return o;
    }
    
    // === calcSplatUV() - returns optional UV ===
    fn calcSplatUV(orderId: u32, textureWidth: u32, numSplats: u32) -> vec2<i32> {
        let orderUV = vec2<i32>(
            i32(orderId % textureWidth),
            i32(orderId / textureWidth)
        );
        
        let splatId = textureLoad(splatOrder, orderUV, 0).r;
        return vec2<i32>(
            i32(splatId % textureWidth),
            i32(splatId / textureWidth)
        );
    }
    
    // === getSplatData() - unified texture loading ===
    fn getSplatData(splatUV: vec2<i32>) -> SplatData {
        var data: SplatData;
        
        // Load both textures once
        let tA = textureLoad(transformA, splatUV, 0);
        let tB = textureLoad(transformB, splatUV, 0);
        let tC = unpack2x16float(tA.w);
        
        // Extract center
        data.center = vec3f(bitcast<f32>(tA.x), bitcast<f32>(tA.y), bitcast<f32>(tA.z));
        
        // Extract covariance
        data.covA = tB.xyz;
        data.covB = vec3f(tC.x, tC.y, tB.w);
        
        return data;
    }
    
    // === calcV1V2() - returns vec4 ===
    fn calcV1V2(splat_cam: vec3f, covA: vec3f, covB: vec3f, W: mat3x3f, viewport: vec2f, projMat: mat4x4f) -> vec4f {
        // Construct symmetric covariance matrix
        let Vrk = mat3x3f(
            vec3f(covA.x, covA.y, covA.z),
            vec3f(covA.y, covB.x, covB.y),
            vec3f(covA.z, covB.y, covB.z)
        );
        
        // Calculate Jacobian
        let focal = viewport.x * projMat[0][0];
        let inv_z = 1.0 / splat_cam.z;
        let J1 = focal * inv_z;
        let J2 = -J1 * inv_z * splat_cam.xy;
        let J = mat3x3f(
            vec3f(J1, 0.0, J2.x),
            vec3f(0.0, J1, J2.y),
            vec3f(0.0, 0.0, 0.0)
        );
        
        // Project covariance to screen space
        let T = W * J;
        let cov = transpose(T) * Vrk * T;
        
        // Eigenvalue decomposition with compensation
        let diagonal1 = cov[0][0] + COV_COMPENSATION;
        let offDiagonal = cov[0][1];
        let diagonal2 = cov[1][1] + COV_COMPENSATION;
        
        let mid = 0.5 * (diagonal1 + diagonal2);
        let radius = length(vec2f((diagonal1 - diagonal2) * 0.5, offDiagonal));
        let lambda1 = mid + radius;
        let lambda2 = max(mid - radius, MIN_LAMBDA);
        let diagonalVector = normalize(vec2f(offDiagonal, lambda1 - diagonal1));
        
        // Calculate axis vectors with size clamping
        let v1 = min(sqrt(2.0 * lambda1), MAX_SPLAT_SIZE) * diagonalVector;
        let v2 = min(sqrt(2.0 * lambda2), MAX_SPLAT_SIZE) * vec2f(diagonalVector.y, -diagonalVector.x);
        
        // WebGPU Y-axis flip: WebGPU NDC Y goes from top(-1) to bottom(1), opposite of WebGL
        return vec4f(v1.x, -v1.y, v2.x, -v2.y);
    }
    
    // ===== SPLAT MAIN VS =====
    
    @vertex
    fn VertMain(
        @builtin(vertex_index) vid : u32,
        @builtin(instance_index) iid : u32,
        @location(0) position: vec3<f32>  // vertex_position from mesh (x, y, local_index)
    ) -> VSOut {
        // Calculate splat ID
        let batchSize = u32(materialUniform.pixelCull.w);
        let orderId = iid * batchSize + u32(position.z);
        
        // Early bounds check
        let textureWidth = u32(materialUniform.tex_params.y);
        let numSplats = u32(materialUniform.tex_params.x);
        if (orderId >= numSplats) {
            return discardSplat();
        }
        
        // Calculate splat UV and load all data in one go
        let splatUV = calcSplatUV(orderId, textureWidth, numSplats);
        let splatData = getSplatData(splatUV);
        
        // Load color early for alpha test
        let color = textureLoad(splatColor, splatUV, 0);
        if (color.a < ALPHA_THRESHOLD) {
            return discardSplat();
        }
        
        // Transform matrices
        let matrix_model = materialUniform.modelMatrix;
        let matrix_view = globalUniform.viewMat;
        let matrix_projection = globalUniform.projMat;
        let model_view = matrix_view * matrix_model;
        
        // Transform center to camera and clip space
        let splat_cam = model_view * vec4f(splatData.center, 1.0);
        
        // Early depth culling
        if (splat_cam.z <= 0.0) {
            return discardSplat();
        }
        
        let splat_proj = matrix_projection * splat_cam;
        
        // Frustum culling with NDC check
        let inv_w = 1.0 / splat_proj.w;
        let ndc = splat_proj.xyz * inv_w;
        if (ndc.x < -1.0 || ndc.x > 1.0 ||
            ndc.y < -1.0 || ndc.y > 1.0 ||
            ndc.z < 0.0 || ndc.z > 1.0) {
            return discardSplat();
        }
        
        // Calculate v1v2 (screen-space ellipse axes)
        let viewport = vec2f(globalUniform.windowWidth, globalUniform.windowHeight);
        let W = transpose(mat3x3f(model_view[0].xyz, model_view[1].xyz, model_view[2].xyz));
        let v1v2 = calcV1V2(splat_cam.xyz, splatData.covA, splatData.covB, W, viewport, matrix_projection);
        
        // Calculate scale based on alpha (optimized formula)
        let scale = min(1.0, sqrt(LOG_255 + log(color.a)) * 0.5);
        
        // Apply visBoost (size multiplier)
        let visBoost = materialUniform.tex_params.w;
        let v1v2_scaled = v1v2 * (scale * visBoost);
        
        // Pixel coverage culling (vectorized squared length calculation)
        let v1v2_sq = v1v2_scaled * v1v2_scaled;
        let v1_len_sq = v1v2_sq.x + v1v2_sq.y;
        let v2_len_sq = v1v2_sq.z + v1v2_sq.w;
        
        let minPixels = materialUniform.pixelCull.x;
        let maxPixels = materialUniform.pixelCull.y;
        
        // Early out tiny splats
        if (v1_len_sq < minPixels && v2_len_sq < minPixels) {
            return discardSplat();
        }
        
        // Cull oversized splats
        if (maxPixels > 0.0) {
            let maxPixelCullDistance = materialUniform.pixelCull.z;
            let splatDistance = length(splat_cam.xyz);
            if (maxPixelCullDistance <= 0.0 || splatDistance < maxPixelCullDistance) {
                let maxAxisSq = maxPixels * maxPixels;
                if (v1_len_sq > maxAxisSq || v2_len_sq > maxAxisSq) {
                    return discardSplat();
                }
            }
        }
        
        // Final position calculation (optimized)
        let vertex_pos = position.xy;
        let inv_viewport = 1.0 / viewport;
        let offset = (vertex_pos.x * v1v2_scaled.xy + vertex_pos.y * v1v2_scaled.zw) * inv_viewport * splat_proj.w;
        
        var o: VSOut;
        o.member = splat_proj + vec4f(offset, 0.0, 0.0);
        o.vTexCoord = vertex_pos * (scale * 0.5);
        o.vColor = color;
        
        return o;
    }
`;

export const GSplat_FS: string = /* wgsl */ `
    #include "FragmentOutput"
    
    // Constants
    const ALPHA_THRESHOLD: f32 = 0.00392156863; // 1.0 / 255.0
    const GAUSSIAN_SCALE: f32 = 4.0;

    // === evalSplat() - optimized gaussian evaluation ===
    fn evalSplat(texCoord: vec2f, color: vec4f) -> vec4f {
        let A = dot(texCoord, texCoord);
        
        // Branch-less optimization using select
        let gaussian = exp(-A * GAUSSIAN_SCALE) * color.a;
        let alpha = select(gaussian, 0.0, A > 1.0 || gaussian < ALPHA_THRESHOLD);
        
        return vec4f(color.rgb, alpha);
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
