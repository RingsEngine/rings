import { RTFrame } from "./RTFrame";
export declare class ProbeGBufferFrame extends RTFrame {
    constructor(rtWidth: number, rtHeight: number, autoResize?: boolean);
    crateGBuffer(rtWidth: number, rtHeight: number, autoResize: boolean): void;
}
