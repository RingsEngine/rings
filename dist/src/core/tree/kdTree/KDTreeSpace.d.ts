/**
 * @internal
 * @group Core
 */
export declare class KDTreeRange {
    min: number;
    max: number;
    set(min: number, max: number): this;
    copy(src: KDTreeRange): this;
    isInterestRange(src: KDTreeRange): boolean;
}
/**
 * @internal
 * @group Core
 */
export declare class KDTreeSpace {
    protected _spaceDesc: {
        [key: string]: KDTreeRange;
    };
    getRange(dimension: string): KDTreeRange;
    initSpace(dimensions: string[]): this;
    isContain(dimension: string, value: number): boolean;
    isInterestRange(dimension: string, range1: KDTreeRange): boolean;
    splitSpace(dimension: string, less: boolean, value: number): this;
    copySpace(space: KDTreeSpace): this;
}
