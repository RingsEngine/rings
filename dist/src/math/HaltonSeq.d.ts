/**
 * https://en.wikipedia.org/wiki/Halton_sequence
 * https://baike.baidu.com/item/Halton%20sequence/16697800
 * Class for generating the Halton low-discrepancy series for Quasi Monte Carlo integration.
 */
export declare class HaltonSeq {
    private value;
    private inv_base;
    static get(index: number, radix: number): number;
    getBase(index: number, base: number): void;
    next(): void;
    get(): number;
}
