import { StorageGPUBuffer } from "../../../gfx/graphics/webGpu/core/buffer/StorageGPUBuffer";
import { UniformGPUBuffer } from "../../../gfx/graphics/webGpu/core/buffer/UniformGPUBuffer";
import { ComputeShader } from "../../../gfx/graphics/webGpu/shader/ComputeShader";
import { RenderShaderPass } from "../../../gfx/graphics/webGpu/shader/RenderShaderPass";
import { GeometryBase } from "../../../core/geometry/GeometryBase";
type MorphTargetCollectData = {
    mtCount: number;
    vCount: number;
    mergedPos: Float32Array;
    mergedNormal: Float32Array;
};
declare class MorphAttrDataGroup {
    source: Float32Array;
    input: StorageGPUBuffer;
    output: StorageGPUBuffer;
    reset(value: Float32Array): void;
    apply(vertexCount: number): void;
}
export declare class MorphTargetData {
    enable: boolean;
    morphTargetsRelative: boolean;
    readonly MaxMorphTargetCount: number;
    protected _computeConfigArray: Float32Array;
    protected _computeConfigBuffer: UniformGPUBuffer;
    protected _morphInfluenceArray: Float32Array;
    protected _morphInfluenceBuffer: StorageGPUBuffer;
    protected _positionAttrDataGroup: MorphAttrDataGroup;
    protected _normalAttrDataGroup: MorphAttrDataGroup;
    private _isInfluenceDirty;
    protected _morphTargetCount: number;
    protected _totalVertexCount: number;
    protected _computeShader: ComputeShader;
    protected _computeShaders: ComputeShader[];
    protected _computeWorkGroupXY: number;
    protected _collectMorphTargetData: MorphTargetCollectData;
    private _blendTarget;
    constructor();
    initMorphTarget(geometry: GeometryBase): void;
    applyRenderShader(renderShader: RenderShaderPass): void;
    computeMorphTarget(command: GPUCommandEncoder): void;
    updateInfluence(index: number, value: number): void;
    get blendShape(): {
        [key: string]: any;
    };
    private collectMorphTargetList;
    private collectAttribute;
    private uploadConfigGBuffer;
    private calcWorkGroup;
    protected uploadMorphTargetBuffer(): void;
    protected generateGPUBuffer(): void;
}
export {};
