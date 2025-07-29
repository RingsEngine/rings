import { View3D } from "../../../../core/View3D";
import { ViewQuad } from "../../../../core/ViewQuad";
import { Texture } from "../../../graphics/webGpu/core/texture/Texture";
import { PostBase } from "../../post/PostBase";
import { RendererBase } from "../RendererBase";
/**
 * @internal
 * @group Post
 */
export declare class PostRenderer extends RendererBase {
    finalQuadView: ViewQuad;
    postList: Map<string, PostBase>;
    constructor();
    initRenderer(): void;
    attachPost(view: View3D, post: PostBase): void;
    detachPost(view: View3D, post: PostBase): boolean;
    render(view: View3D): void;
    presentContent(view: View3D, texture: Texture): void;
}
