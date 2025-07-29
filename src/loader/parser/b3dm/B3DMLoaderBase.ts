import { FeatureTable, BatchTable } from "./FeatureTable";
import { readMagicBytes } from "./readMagicBytes";

export class B3DMLoaderBase {
  async parse(buffer: ArrayBuffer) {
    const dataView = new DataView(buffer);
    const magic = readMagicBytes(dataView);
    console.assert(magic === "b3dm");
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
    const batchTable = new BatchTable(
      buffer,
      featureTable.getData("BATCH_LENGTH"),
      batchTableStart,
      batchTableJSONByteLength,
      batchTableBinaryByteLength
    );

    const glbStart =
      batchTableStart + batchTableJSONByteLength + batchTableBinaryByteLength;
    const glbBytes = new Uint8Array(buffer, glbStart, byteLength - glbStart);

    return {
      version,
      featureTable,
      batchTable,
      glbBytes,
    };
  }
}
