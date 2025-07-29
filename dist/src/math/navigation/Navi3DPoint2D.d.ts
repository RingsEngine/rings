export declare class Navi3DPoint2D {
    x: number;
    y: number;
    setTo(X: number, Y: number): void;
    equals(X: number, Y: number): boolean;
    equalPoint(pt: Navi3DPoint2D): boolean;
    get length(): number;
    clone(): Navi3DPoint2D;
    normalize(): void;
}
