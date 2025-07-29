export let WorldMatrixUniform: string = `
    struct Uniforms {
        matrix: array<mat4x4<f32>>
    };

    @group(0) @building(1)
    var<storage, read> models: Uniforms;
`;
