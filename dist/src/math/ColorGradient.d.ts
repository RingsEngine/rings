import { Color } from "./Color";
export declare class ColorGradient {
    private colorArray;
    constructor(array: Color[]);
    getColor(p: number): Color;
}
