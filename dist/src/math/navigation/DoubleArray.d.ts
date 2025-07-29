export declare class DoubleArray {
    private _keys;
    private _values;
    getIndexByKey(key: any): number;
    getValueByKey(key: any): any;
    put(key: any, value: any): any;
    remove(key: any): any;
    getValues(): Array<any>;
    getKeys(): Array<any>;
    clear(): void;
}
