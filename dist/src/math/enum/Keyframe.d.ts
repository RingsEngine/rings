export declare class Keyframe {
    serializedVersion: string;
    time: number;
    value: number;
    inSlope: number;
    outSlope: number;
    tangentMode: number;
    weightedMode: number;
    inWeight: number;
    outWeight: number;
    constructor(time?: number, value?: number);
    unSerialized(data: any): void;
    unSerialized2(data: any): void;
}
