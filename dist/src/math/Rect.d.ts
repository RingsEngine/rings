export declare class Rect {
    x: number;
    y: number;
    w: number;
    h: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    get width(): number;
    set width(v: number);
    get height(): number;
    set height(v: number);
    static pointInRect(x: number, y: number, lt_x: number, lt_y: number, rb_x: number, rb_y: number): boolean;
    clone(): Rect;
    copyFrom(rect: Rect): void;
    copyTo(rect: Rect): void;
    inner(x: number, y: number): boolean;
    equal(rectangle: Rect): boolean;
    equalArea(x: number, y: number, width: number, height: number): boolean;
    equalInnerArea(source: Rect): boolean;
    innerArea(source: Rect, target: Rect): Rect;
    setTo(x: number, y: number, width: number, height: number): void;
}
