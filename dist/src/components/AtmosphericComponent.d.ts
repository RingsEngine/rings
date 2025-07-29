import { Transform } from "./Transform";
import { SkyRenderer } from "./renderer/SkyRenderer";
export declare class AtmosphericComponent extends SkyRenderer {
    private _atmosphericScatteringSky;
    private _onChange;
    private _relatedTransform;
    private _historyData;
    get sunX(): number;
    set sunX(value: number);
    get sunY(): number;
    set sunY(value: number);
    get eyePos(): number;
    set eyePos(value: number);
    get sunRadius(): number;
    set sunRadius(value: number);
    get sunRadiance(): number;
    set sunRadiance(value: number);
    get sunBrightness(): number;
    set sunBrightness(value: number);
    get displaySun(): boolean;
    set displaySun(value: boolean);
    init(): void;
    start(view?: any): void;
    get relativeTransform(): Transform;
    set relativeTransform(value: Transform);
    onUpdate(view?: any): void;
    destroy(force?: boolean): void;
}
