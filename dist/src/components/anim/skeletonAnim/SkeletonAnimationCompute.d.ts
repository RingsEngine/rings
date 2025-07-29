export declare class SkeletonAnimationCompute {
    private _computePipeline;
    private _computeBindGroup;
    constructor(computeShader: string, entries: GPUBindGroupEntry[]);
    compute(command: GPUCommandEncoder, workgroupCountX: GPUSize32, workgroupCountY?: GPUSize32, workgroupCountZ?: GPUSize32): this;
}
