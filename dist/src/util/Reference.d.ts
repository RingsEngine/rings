/**
 * 引用计数
 */
export declare class Reference {
    protected reference: Map<any, Map<any, any>>;
    private static _ins;
    static getInstance(): Reference;
    /**
     * current instance attached from parent instance
     * @param ref reference current
     * @param target reference parent
     */
    attached(ref: any, target: any): void;
    /**
     * current instance detached from parent instance
     * @param ref reference current
     * @param target reference parent
     */
    detached(ref: any, target: any): void;
    /**
     * current instance has reference
     */
    hasReference(ref: any): boolean;
    /**
     * get current instance reference count
     * @param ref
     * @returns
     */
    getReferenceCount(ref: any): number;
    /**
     * get current instance reference from where
     * @param ref
     * @returns
     */
    getReference(ref: any): Map<any, any>;
}
