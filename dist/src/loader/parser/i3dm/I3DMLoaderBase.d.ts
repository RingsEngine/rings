import { BatchTable, FeatureTable } from "../b3dm/FeatureTable";
export declare class I3DMLoaderBase {
    parse(buffer: ArrayBuffer): Promise<{
        version: number;
        featureTable: FeatureTable;
        batchTable: BatchTable;
        glbBytes: Uint8Array<ArrayBuffer>;
    }>;
}
