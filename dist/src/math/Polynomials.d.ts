/**
 * @internal
 * @group Math
 */
export declare class Polynomials {
}
export declare function cubicPolynomialRoot(p: number, q: number, r: number): number;
export declare function quadraticPolynomialRootsGeneric(a: any, b: any, c: any, out: {
    r0: any;
    r1: any;
}): 1 | 0 | 2;
export declare function cubicPolynomialRootsGeneric(roots: number[], a: number, b: number, c: number, d: number): number;
