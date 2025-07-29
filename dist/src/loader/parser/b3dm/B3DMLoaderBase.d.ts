import { FeatureTable, BatchTable } from "./FeatureTable";
export declare class B3DMLoaderBase {
    parse(buffer: ArrayBuffer): Promise<{
        version: number;
        featureTable: FeatureTable;
        batchTable: BatchTable;
        glbBytes: Uint8Array<ArrayBuffer>;
    }>;
}
