export declare class OrderMap<K, V> extends Map<K, V> {
    readonly valueList: V[];
    readonly keyList: K[];
    isChange: boolean;
    constructor(iterable?: Iterable<readonly [K, V]> | null, recordKey?: boolean, recordValue?: boolean);
    delete(key: K): boolean;
    private deleteValue;
    private deleteKey;
    set(key: K, value: V): this;
    clear(): void;
}
