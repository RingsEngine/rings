import { MeshRenderer } from "../components/renderer/MeshRenderer";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { RTFrame } from "../gfx/renderJob/frame/RTFrame";
import { Object3D } from "./entities/Object3D";
import { RendererPassState } from "../gfx/renderJob/passRenderer/state/RendererPassState";
import { View3D } from "./View3D";
import { Material } from "../materials/Material";
import { QuadShader } from "../loader/parser/prefab/mats/shader/QuadShader";
export declare class ViewQuad extends Object3D {
    width: number;
    height: number;
    quadRenderer: MeshRenderer;
    material: Material;
    rendererPassState: RendererPassState;
    quadShader: QuadShader;
    constructor(vs: string, fs: string, rtFrame: RTFrame, multisample?: number, f?: boolean);
    renderTarget(view: View3D, viewQuad: ViewQuad, command: GPUCommandEncoder): void;
    renderToViewQuad(view: View3D, viewQuad: ViewQuad, command: GPUCommandEncoder, colorTexture: Texture): void;
}
