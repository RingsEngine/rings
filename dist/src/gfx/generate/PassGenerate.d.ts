import { RenderNode } from "../../components/renderer/RenderNode";
import { Shader } from "../graphics/webGpu/shader/Shader";
export declare class PassGenerate {
    static createGIPass(renderNode: RenderNode, shader: Shader): void;
    static castGBufferPass(renderNode: RenderNode, shader: Shader): void;
    static createShadowPass(renderNode: RenderNode, shader: Shader): void;
    static createDepthPass(renderNode: RenderNode, shader: Shader): void;
    static createReflectionPass(renderNode: RenderNode, shader: Shader): void;
}
