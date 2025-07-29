import { CEvent } from "../../../../event/CEvent";
import { CEventDispatcher } from "../../../../event/CEventDispatcher";
import { RenderTexture } from "../../../../textures/RenderTexture";
import { DDGIProbeRenderer } from "./DDGIProbeRenderer";
export declare let IrradianceDataReaderCompleteEvent: CEvent;
/**
 * 动态漫反射全局光照,探头渲染结果的GPU缓冲区读取器
 */
export declare class DDGIIrradianceGPUBufferReader extends CEventDispatcher {
    private readFlag;
    private probeRenderer;
    private opColorBuffer;
    private opDepthBuffer;
    private srcColorMap;
    private srcDepthMap;
    opDepthArray: Float32Array;
    opColorArray: Float32Array;
    initReader(probeRender: DDGIProbeRenderer, colorMap: RenderTexture, depthMap: RenderTexture): void;
    private onProbeRenderComplete;
    private static read;
}
export declare let irradianceDataReader: DDGIIrradianceGPUBufferReader;
