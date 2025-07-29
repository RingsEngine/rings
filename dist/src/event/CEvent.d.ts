import { View3D } from "../core/View3D";
import { Object3D } from "../core/entities/Object3D";
import { TouchData } from "../io/TouchData";
import { CEventListener } from "./CEventListener";
export declare class CEvent {
    target: Object3D;
    currentTarget: CEventListener;
    type: string | null;
    data?: any;
    param: any;
    time: number;
    delay: number;
    mouseCode: number;
    ctrlKey: boolean;
    metaKey: boolean;
    altKey: boolean;
    shiftKey: boolean;
    targetTouches: Array<TouchData>;
    changedTouches: Array<TouchData>;
    touches: Array<TouchData>;
    private _stopImmediatePropagation;
    view: View3D;
    constructor(eventType?: string | null, data?: any);
    stopImmediatePropagation(): void;
    reset(): void;
    get isStopImmediatePropagation(): boolean;
}
