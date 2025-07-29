import { RendererBase } from "../passRenderer/RendererBase";
import { PassType } from "../passRenderer/state/PassType";
export declare class RendererMap {
    private map;
    private passRendererList;
    constructor();
    addRenderer(renderer: RendererBase): void;
    getRenderer(passType: PassType): RendererBase;
    private addPassRenderer;
    getAllRenderer(): Map<PassType, RendererBase>;
    getAllPassRenderer(): RendererBase[];
}
