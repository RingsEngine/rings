import { Scene3D } from "../../core/Scene3D";
import { ComponentBase } from "../ComponentBase";
/**
 *
 * 动态全局光照.
 * 使用全局光照实现更真实的光照效果。
 * 全局光照系统可以模拟光线在表面反射或折射到其他表面(间接光照)的方式，
 * 而不仅限于光线直接从光源照射到某个表面。
 * @group Components
 */
export declare class GlobalIlluminationComponent extends ComponentBase {
    private _probes;
    private _volume;
    private _debugMr;
    init(scene: Scene3D): void;
    private initProbe;
    debug(): void;
    private debugProbeRay;
    private changeProbesVolumeData;
    private changeProbesPosition;
    onUpdate(): void;
}
