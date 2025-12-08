import { FeatureTable, BatchTable } from "../b3dm/FeatureTable";
import { readMagicBytes } from "../b3dm/readMagicBytes";

export class PNTSLoaderBase {
  async parse(buffer: ArrayBuffer) {
    const dataView = new DataView(buffer);
    const magic = readMagicBytes(dataView);
    console.assert(magic === "pnts");
    const version = dataView.getUint32(4, true);
    console.assert(version === 1);
    const byteLength = dataView.getUint32(8, true);
    console.assert(byteLength === buffer.byteLength);

    const featureTableJSONByteLength = dataView.getUint32(12, true);
    const featureTableBinaryByteLength = dataView.getUint32(16, true);
    const batchTableJSONByteLength = dataView.getUint32(20, true);
    const batchTableBinaryByteLength = dataView.getUint32(24, true);
    const featureTableStart = 28;
    const featureTable = new FeatureTable(
      buffer,
      featureTableStart,
      featureTableJSONByteLength,
      featureTableBinaryByteLength
    );

    const batchTableStart =
      featureTableStart +
      featureTableJSONByteLength +
      featureTableBinaryByteLength;
    
    // POINTS_LENGTH is a global property (number), not binary data
    const pointsLength = featureTable.header.POINTS_LENGTH || 0;
    const batchTable = new BatchTable(
      buffer,
      pointsLength,
      batchTableStart,
      batchTableJSONByteLength,
      batchTableBinaryByteLength
    );

    return {
      version,
      featureTable,
      batchTable,
    };
  }
}

