export declare class Rand {
    private _x;
    private _y;
    private _z;
    private _w;
    constructor(seed?: number);
    get seed(): number;
    set seed(value: number);
    static getFloatFromInt(value: any): number;
    static getByteFromInt(value: any): number;
    clone(): Rand;
    get(): number;
    getFloat(): number;
    getSignedFloat(): number;
}
