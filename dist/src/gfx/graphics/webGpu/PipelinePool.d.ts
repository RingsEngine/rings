export declare class PipelinePool {
    private static pipelineMap;
    static getSharePipeline(shaderVariant: string): GPURenderPipeline;
    static setSharePipeline(shaderVariant: string, pipeline: GPURenderPipeline): void;
}
