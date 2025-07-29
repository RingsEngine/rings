import { Ctor } from "../Global";
export declare class Struct {
    private __refection;
    private __size;
    getValueType(): {
        name: string;
        type: string;
    }[];
    static getValueSize(value: any): any;
    private static __cacheStruct;
    static Ref<T extends Struct>(c: Ctor<T>): {
        name: string;
        type: string;
    }[];
    static Get<T extends Struct>(c: Ctor<T>): Struct;
    static GetSize<T extends Struct>(c: Ctor<T>): number;
}
