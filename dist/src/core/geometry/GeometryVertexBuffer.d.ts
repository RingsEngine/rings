import { VertexGPUBuffer } from "../../gfx/graphics/webGpu/core/buffer/VertexGPUBuffer";
import { ShaderReflection } from "../../gfx/graphics/webGpu/shader/value/ShaderReflectionInfo";
import { VertexAttributeData } from "./VertexAttributeData";
import { GeometryVertexType } from "./GeometryVertexType";
import { VertexBufferLayout } from "./VertexAttribute";
export declare class GeometryVertexBuffer {
    vertexCount: number;
    vertexGPUBuffer: VertexGPUBuffer;
    geometryType: GeometryVertexType;
    private _vertexBufferLayouts;
    private _attributeSlotLayouts;
    private _attributeLocation;
    constructor();
    get vertexBufferLayouts(): VertexBufferLayout[];
    createVertexBuffer(vertexDataInfos: Map<string, VertexAttributeData>, shaderReflection: ShaderReflection): void;
    private createSplitVertexBuffer;
    private createComposeVertexBuffer;
    private createComposBinVertexBuffer;
    upload(attribute: string, vertexDataInfo: VertexAttributeData): void;
    updateAttributes(vertexDataInfos: Map<string, VertexAttributeData>): void;
    compute(): void;
    destroy(force?: boolean): void;
}
