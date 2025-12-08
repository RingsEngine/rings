import { PNTSLoaderBase } from "./PNTSLoaderBase";
import { FeatureTable } from "../b3dm/FeatureTable";
import { Object3D } from "../../../core/entities/Object3D";
import { PointCloudRenderer } from "../../../components/renderer/PointCloudRenderer";

export class PNTSLoader extends PNTSLoaderBase {
  async parse(buffer: ArrayBuffer) {
    const pnts = await super.parse(buffer);
    const { featureTable, batchTable } = pnts;
    
    const pointsLength = featureTable.header.POINTS_LENGTH;
    if (!pointsLength || pointsLength <= 0) {
      throw new Error("PNTSLoader: POINTS_LENGTH must be defined and greater than zero");
    }
    
    const extensions = featureTable.header.extensions;
    const dracoExtension = extensions?.["3DTILES_draco_point_compression"];
    
    let positions: Float32Array;
    let colors: Uint8Array;
    let normals: Float32Array | null = null;
    
    if (dracoExtension) {
      const dracoData = await this.parseDraco(
        featureTable,
        dracoExtension,
        pointsLength
      );
      positions = dracoData.positions;
      colors = dracoData.colors;
      normals = dracoData.normals;
    } else {
      positions = this.parsePositions(featureTable, pointsLength);
      colors = this.parseColors(featureTable, pointsLength);
      normals = this.parseNormals(featureTable, pointsLength);
    }
    
    const pointCloudObj = new Object3D();
    const renderer = pointCloudObj.addComponent(PointCloudRenderer);
    renderer.initFromData(positions, colors, pointsLength);
    renderer.setPointShape('circle');
    renderer.setPointSize(4);
    
    const rtcCenter = featureTable.getData("RTC_CENTER", 1, "FLOAT", "VEC3");
    if (rtcCenter) {
      pointCloudObj.transform.localPosition.set(
        rtcCenter[0],
        rtcCenter[1],
        rtcCenter[2]
      );
    }
    
    pointCloudObj["batchTable"] = batchTable;
    pointCloudObj["featureTable"] = featureTable;
    
    return pointCloudObj as any;
  }
  
  private parsePositions(
    featureTable: FeatureTable,
    pointsLength: number
  ): Float32Array {
    let positions = featureTable.getData(
      "POSITION",
      pointsLength,
      "FLOAT",
      "VEC3"
    );
    
    if (positions) {
      return positions;
    }
    
    const quantized = featureTable.getData(
      "POSITION_QUANTIZED",
      pointsLength,
      "UNSIGNED_SHORT",
      "VEC3"
    );
    
    if (!quantized) {
      throw new Error(
        "PNTSLoader: Either POSITION or POSITION_QUANTIZED must be defined"
      );
    }
    
    const scale = featureTable.getData(
      "QUANTIZED_VOLUME_SCALE",
      1,
      "FLOAT",
      "VEC3"
    );
    const offset = featureTable.getData(
      "QUANTIZED_VOLUME_OFFSET",
      1,
      "FLOAT",
      "VEC3"
    );
    
    if (!scale || !offset) {
      throw new Error(
        "PNTSLoader: QUANTIZED_VOLUME_SCALE and QUANTIZED_VOLUME_OFFSET must be defined for quantized positions"
      );
    }
    
    const decoded = new Float32Array(pointsLength * 3);
    const quantizedRange = 65535.0;
    
    for (let i = 0; i < pointsLength; i++) {
      const idx = i * 3;
      decoded[idx + 0] =
        (quantized[idx + 0] / quantizedRange) * scale[0] + offset[0];
      decoded[idx + 1] =
        (quantized[idx + 1] / quantizedRange) * scale[1] + offset[1];
      decoded[idx + 2] =
        (quantized[idx + 2] / quantizedRange) * scale[2] + offset[2];
    }
    
    return decoded;
  }
  
  private parseColors(
    featureTable: FeatureTable,
    pointsLength: number
  ): Uint8Array {
    let colors = featureTable.getData(
      "RGBA",
      pointsLength,
      "UNSIGNED_BYTE",
      "VEC4"
    );
    
    if (colors) {
      return colors;
    }
    
    const rgb = featureTable.getData(
      "RGB",
      pointsLength,
      "UNSIGNED_BYTE",
      "VEC3"
    );
    
    if (rgb) {
      const rgba = new Uint8Array(pointsLength * 4);
      for (let i = 0; i < pointsLength; i++) {
        const rgbIdx = i * 3;
        const rgbaIdx = i * 4;
        rgba[rgbaIdx + 0] = rgb[rgbIdx + 0];
        rgba[rgbaIdx + 1] = rgb[rgbIdx + 1];
        rgba[rgbaIdx + 2] = rgb[rgbIdx + 2];
        rgba[rgbaIdx + 3] = 255;
      }
      return rgba;
    }
    
    const rgb565 = featureTable.getData(
      "RGB565",
      pointsLength,
      "UNSIGNED_SHORT",
      "SCALAR"
    );
    
    if (rgb565) {
      const rgba = new Uint8Array(pointsLength * 4);
      for (let i = 0; i < pointsLength; i++) {
        const decoded = this.decodeRGB565(rgb565[i]);
        const idx = i * 4;
        rgba[idx + 0] = decoded[0];
        rgba[idx + 1] = decoded[1];
        rgba[idx + 2] = decoded[2];
        rgba[idx + 3] = 255;
      }
      return rgba;
    }
    
    const constantRGBA = featureTable.getData(
      "CONSTANT_RGBA",
      1,
      "UNSIGNED_BYTE",
      "VEC4"
    );
    
    if (constantRGBA) {
      const rgba = new Uint8Array(pointsLength * 4);
      for (let i = 0; i < pointsLength; i++) {
        const idx = i * 4;
        rgba[idx + 0] = constantRGBA[0];
        rgba[idx + 1] = constantRGBA[1];
        rgba[idx + 2] = constantRGBA[2];
        rgba[idx + 3] = constantRGBA[3];
      }
      return rgba;
    }
    
    const rgba = new Uint8Array(pointsLength * 4);
    rgba.fill(255);
    return rgba;
  }
  
  private parseNormals(
    featureTable: FeatureTable,
    pointsLength: number
  ): Float32Array | null {
    let normals = featureTable.getData(
      "NORMAL",
      pointsLength,
      "FLOAT",
      "VEC3"
    );
    
    if (normals) {
      return normals;
    }
    
    const octNormals = featureTable.getData(
      "NORMAL_OCT16P",
      pointsLength,
      "UNSIGNED_BYTE",
      "VEC2"
    );
    
    if (octNormals) {
      return this.decodeOctNormals(octNormals, pointsLength);
    }
    
    return null;
  }
  
  private decodeRGB565(value: number): [number, number, number] {
    const r = ((value >> 11) & 0x1f) << 3;
    const g = ((value >> 5) & 0x3f) << 2;
    const b = (value & 0x1f) << 3;
    return [r, g, b];
  }
  
  private decodeOctNormals(
    octNormals: Uint8Array,
    pointsLength: number
  ): Float32Array {
    const normals = new Float32Array(pointsLength * 3);
    for (let i = 0; i < pointsLength; i++) {
      const idx = i * 2;
      const x = octNormals[idx] / 255.0;
      const y = octNormals[idx + 1] / 255.0;
      
      const nx = x * 2.0 - 1.0;
      const ny = y * 2.0 - 1.0;
      const nz = 1.0 - Math.abs(nx) - Math.abs(ny);
      
      let tx, ty;
      if (nz < 0.0) {
        tx = (nx >= 0.0 ? 1.0 : -1.0) * (1.0 - Math.abs(ny));
        ty = (ny >= 0.0 ? 1.0 : -1.0) * (1.0 - Math.abs(nx));
      } else {
        tx = nx;
        ty = ny;
      }
      
      const length = Math.sqrt(tx * tx + ty * ty + nz * nz);
      const nidx = i * 3;
      normals[nidx + 0] = tx / length;
      normals[nidx + 1] = ty / length;
      normals[nidx + 2] = nz / length;
    }
    
    return normals;
  }
  
  private async parseDraco(
    featureTable: FeatureTable,
    dracoExtension: any,
    pointsLength: number
  ): Promise<{
    positions: Float32Array;
    colors: Uint8Array;
    normals: Float32Array | null;
  }> {
    // TODO: integrate Draco decoder
    throw new Error("Draco compression not yet implemented");
  }
}

