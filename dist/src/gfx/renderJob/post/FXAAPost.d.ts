import { PostBase } from "./PostBase";
import { View3D } from "../../../core/View3D";
import { ViewQuad } from "../../../core/ViewQuad";
import { RenderTexture } from "../../../textures/RenderTexture";
export declare class FXAAPost extends PostBase {
    postQuad: ViewQuad;
    renderTexture: RenderTexture;
    constructor();
    onResize(): void;
    /**
     * @internal
     */
    onAttach(view: View3D): void;
    /**
     * @internal
     */
    onDetach(view: View3D): void;
}
