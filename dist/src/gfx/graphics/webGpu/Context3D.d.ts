import { CEventDispatcher } from "../../../event/CEventDispatcher";
import { CanvasConfig } from "./CanvasConfig";
export declare class Context3D extends CEventDispatcher {
    adapter: GPUAdapter | null;
    device: GPUDevice;
    context: GPUCanvasContext;
    aspect: number;
    presentationSize: number[];
    presentationFormat: GPUTextureFormat;
    canvas: HTMLCanvasElement;
    windowWidth: number;
    windowHeight: number;
    canvasConfig: CanvasConfig;
    private _pixelRatio;
    private _resizeEvent;
    get pixelRatio(): number;
    init(canvasConfig?: CanvasConfig): Promise<boolean>;
    updateSize(): void;
}
export declare let webGPUContext: Context3D;
