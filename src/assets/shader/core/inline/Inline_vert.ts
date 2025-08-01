export let Inline_vert: string = `
    #include "MathShader"
    #include "FastMathShader"
    #include "InstanceUniform"

    var<private> ORI_MATRIX_P: mat4x4<f32>;
    var<private> ORI_MATRIX_V: mat4x4<f32>;
    var<private> ORI_MATRIX_M: mat4x4<f32>;
    var<private> ORI_MATRIX_PV: mat4x4<f32>;
    var<private> ORI_MATRIX_PVInv: mat4x4<f32>;
    var<private> ORI_MATRIX_World: mat4x4<f32>;
    var<private> ORI_CAMERAMATRIX: mat4x4<f32>;
    var<private> ORI_NORMALMATRIX: mat3x3<f32>;
    var<private> ORI_CameraWorldDir: vec3<f32>;
    var<private> ORI_ViewDir: vec3<f32>;

    fn TIME() -> vec3f {
        return vec3f(globalUniform.frame, globalUniform.time , globalUniform.delta);
    }

    fn TIME_frame() -> f32 {
        return globalUniform.frame;
    }

    fn TIME_time() -> f32 {
        return globalUniform.time;
    }

    fn TIME_delta() -> f32 {
        return globalUniform.delta;
    }

    fn MOUSE() -> vec2f {
        return vec2f( globalUniform.mouseX, globalUniform.mouseY);
    }

    fn SCREEN() -> vec2f {
        return vec2f( globalUniform.windowWidth, globalUniform.windowHeight);
    }

    fn ProjectionParams() -> vec3f {
        return vec3f( globalUniform.near, globalUniform.far,1.0 + 1.0 / globalUniform.far);
    }

    fn vertex_inline(vertex:VertexAttributes){
        ORI_MATRIX_P = globalUniform.projMat;
        ORI_MATRIX_V = globalUniform.viewMat;
        ORI_MATRIX_PV = ORI_MATRIX_P * ORI_MATRIX_V;
        ORI_MATRIX_PVInv = globalUniform.pvMatrixInv;
        ORI_CAMERAMATRIX = globalUniform.cameraWorldMatrix;

        ORI_MATRIX_M = models.matrix[u32(vertex.index)];
            
        #if USE_INSTANCEDRAW
            let modelID = instanceDrawID.matrixIDs[vertex.index];
            ORI_MATRIX_M = models.matrix[modelID];
        #endif
    }
`;
