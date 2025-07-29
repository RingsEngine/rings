export declare class VertexBufferLayout implements GPUVertexBufferLayout {
    name: string;
    offset: number;
    size: number;
    arrayStride: number;
    stepMode?: GPUVertexStepMode;
    attributes: Iterable<GPUVertexAttribute>;
}
export declare class VertexAttribute implements GPUVertexAttribute {
    name: string;
    format: GPUVertexFormat;
    offset: number;
    shaderLocation: number;
    stride: number;
}
