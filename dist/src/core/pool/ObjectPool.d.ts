export declare class PoolNode<T> {
    private _use;
    private _unUse;
    constructor();
    pushBack(node: T): void;
    getUseList(): T[];
    getOne(instance: {
        new (arg?: any): T;
    }, param?: any): T;
    hasFree(): boolean;
}
