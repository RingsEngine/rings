export declare class FeatureTable {
    private buffer;
    private binOffset;
    private binLength;
    private header;
    constructor(buffer: any, start: any, headerLength: any, binLength: any);
    getKeys(): string[];
    getData(key: any, count?: any, defaultComponentType?: any, defaultType?: any): any;
}
export declare class BatchTable extends FeatureTable {
    private batchSize;
    constructor(buffer: any, batchSize: any, start: any, headerLength: any, binLength: any);
    getData(key: any, componentType?: any, type?: any): any;
}
