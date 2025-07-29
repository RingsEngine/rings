import { View3D } from "../../../core/View3D";
import { RendererJob } from "./RendererJob";
export declare class ForwardRenderJob extends RendererJob {
    constructor(view: View3D);
    start(): void;
    debug(): void;
}
