import { Camera3D } from "../../core/Camera3D";
import { LightBase } from "./LightBase";
export declare class DirectLight extends LightBase {
    shadowCamera: Camera3D;
    constructor();
    init(): void;
    start(): void;
    get radius(): number;
    set radius(value: number);
    get indirect(): number;
    set indirect(value: number);
    debug(): void;
}
