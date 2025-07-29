import { RTFrame } from "../../../renderJob/frame/RTFrame";
import { RendererPassState } from "../../../renderJob/passRenderer/state/RendererPassState";
export declare class WebGPUDescriptorCreator {
    private static rendererPassState;
    static createRendererPassState(rtFrame: RTFrame, loadOp?: GPULoadOp): RendererPassState;
    static getRenderPassDescriptor(renderPassState: RendererPassState, loadOp?: GPULoadOp): any;
    static getRenderBundleDescriptor(renderPassState: RendererPassState): GPURenderBundleEncoderDescriptor;
}
