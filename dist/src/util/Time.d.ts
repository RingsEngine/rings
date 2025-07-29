export declare class Time {
    static time: number;
    static frame: number;
    static delta: number;
    private static _startTime;
    private static _timeLabel;
    static start(label: string): void;
    static end(): void;
}
