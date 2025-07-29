import { RTFrame } from "../frame/RTFrame";
import { RendererPassState } from "./state/RendererPassState";
export declare class RenderContext {
    command: GPUCommandEncoder;
    encoder: GPURenderPassEncoder;
    private rendererPassStates;
    private rtFrame;
    constructor(rtFrame: RTFrame);
    clean(): void;
    beginContinueRendererPassState(color_loadOp?: GPULoadOp, depth_loadOp?: GPULoadOp): RendererPassState;
    get rendererPassState(): RendererPassState;
    beginOpaqueRenderPass(): void;
    beginTransparentRenderPass(): void;
    specialtRenderPass(): void;
    endRenderPass(): void;
    begineNewCommand(): GPUCommandEncoder;
    endCommand(): void;
    beginNewEncoder(): GPURenderPassEncoder;
    endEncoder(): void;
}
