export declare class ShaderConverter {
    /**
     * Shader type: Vertex stage
     */
    static VertexShader: string;
    /**
     * Shader type: Fragment stage
     */
    static FragmentShader: string;
    /**
     * Convert GLSL code to WGSL
     * @param source GLSL
     * @returns WGSL
     */
    static convertGLSL(source: string): ShaderConverterResult;
}
/**
 * @internal
 * @group GFX
 */
export declare class ShaderUniformInfo {
    setID: number;
    bindingID: number;
    name: string;
    type: string;
}
/**
 * @internal
 * @group GFX
 */
export declare class ShaderAttributeInfo {
    name: string;
    type: string;
    locationID: number;
    builtinName: string;
    isBuiltinAttribute(): boolean;
}
/**
 * @internal
 * @group GFX
 */
export declare class ShaderConverterResult {
    uniformInfo: Array<ShaderUniformInfo>;
    inputAttribute: Array<ShaderAttributeInfo>;
    outputAttribute: Array<ShaderAttributeInfo>;
    sourceCode: string;
}
