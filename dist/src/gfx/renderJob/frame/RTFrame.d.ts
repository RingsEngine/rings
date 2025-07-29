import { RenderTexture } from "../../../textures/RenderTexture";
import { RTDescriptor } from "../../graphics/webGpu/descriptor/RTDescriptor";
export declare class RTFrame {
    label: string;
    customSize: boolean;
    renderTargets: RenderTexture[];
    rtDescriptors: RTDescriptor[];
    zPreTexture: RenderTexture;
    depthTexture: RenderTexture;
    depthViewIndex: number;
    depthCleanValue: number;
    depthLoadOp: GPULoadOp;
    isOutTarget: boolean;
    constructor(attachments: RenderTexture[], rtDescriptors: RTDescriptor[], depthTexture?: RenderTexture, zPreTexture?: RenderTexture, isOutTarget?: boolean);
    clone2Frame(rtFrame: RTFrame): void;
    clone(): RTFrame;
}
