import { ILight } from "./ILight";
export declare class GILighting {
    static list: ILight[];
    static add(light: ILight): void;
    static remove(light: ILight): void;
}
