import { AttributeAnimCurve } from "./AttributeAnimCurve";
export declare class ObjectAnimClip {
    curve: {
        [attribute: string]: AttributeAnimCurve;
    };
}
export declare enum WrapMode {
    Default = 0,
    Clamp = 1,
    Once = 1,
    Loop = 2,
    PingPong = 4,
    ClampForever = 8
}
export declare class PropertyAnimClip {
    name: string;
    objAnimClip: {
        [path: string]: ObjectAnimClip;
    };
    totalTime: number;
    time: number;
    private _stopTime;
    private _loopTime;
    private _wrapMode;
    private _sampleRate;
    get wrapMode(): WrapMode;
    set wrapMode(value: WrapMode);
    parse(jsonData: any): void;
}
