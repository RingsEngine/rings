import { Camera3D } from "../../../../core/Camera3D";
import { RenderTexture } from "../../../../textures/RenderTexture";
import { Texture } from "../../../graphics/webGpu/core/texture/Texture";
import { RTDescriptor } from "../../../graphics/webGpu/descriptor/RTDescriptor";
import { RTFrame } from "../../frame/RTFrame";
export declare class RendererPassState {
    label: string;
    customSize: boolean;
    zPreTexture: RenderTexture;
    depthTexture: RenderTexture;
    renderTargetTextures: GPUColorTargetState[];
    outColor: number;
    renderTargets: Texture[];
    rtTextureDescriptors: RTDescriptor[];
    irradianceBuffer: Texture[];
    multisample: number;
    multiTexture: GPUTexture;
    depthViewIndex: number;
    depthCleanValue: number;
    isOutTarget: boolean;
    camera3D: Camera3D;
    rtFrame: RTFrame;
    renderPassDescriptor: GPURenderPassDescriptor;
    renderBundleEncoderDescriptor: GPURenderBundleEncoderDescriptor;
    depthLoadOp: GPULoadOp;
    getLastRenderTexture(): Texture;
}
