export declare class BiMap<K, V> extends Map<K, V> {
    private readonly negtive;
    constructor(iterable?: Iterable<readonly [K, V]> | null);
    delete(key: K): boolean;
    getKey(value: V): K;
    deleteValue(value: V): boolean;
    set(key: K, value: V): this;
    clear(): void;
}
