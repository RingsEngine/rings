import { LASData, LASBinaryData, LASParsedData, LASMetadata, LASWellParams, LASCurveParams } from "./LASTypes";
import { LASUtils } from "./LASUtils";
import { readMagicBytes } from "../b3dm/readMagicBytes";

/**
 * LAS file loader
 * Parses both ASCII (Log ASCII Standard) and Binary (LIDAR Point Cloud) LAS format files
 */
export class LASLoader {
  /**
   * Parse LAS file (supports both ASCII text and binary buffer)
   * @param input LAS file content as string or ArrayBuffer
   * @returns Parsed LAS data (ASCII or Binary)
   */
  async parse(input: string | ArrayBuffer): Promise<LASParsedData> {
    if (input instanceof ArrayBuffer) {
      // Check if it's binary LAS format (starts with 'LASF' magic bytes)
      const dataView = new DataView(input);
      const magic = readMagicBytes(dataView);
      
      if (magic === 'LASF') {
        return await this.parseBinary(input);
      } else {
        const decoder = new TextDecoder('utf-8', { fatal: false });
        const text = decoder.decode(input);
        return await this.parseText(text);
      }
    } else {
      return await this.parseText(input);
    }
  }

  /**
   * Parse ASCII LAS (Log ASCII Standard) format
   * @param text LAS file content as string
   * @returns Parsed ASCII LAS data
   */
  async parseText(text: string): Promise<LASData> {
    const metadata = this.parseMetadata(text);
    const wellParams = this.parseWellParams(text);
    const curveParams = this.parseCurveParams(text);
    const headers = this.parseHeaders(text);

    const nullValue = wellParams.NULL?.value;
    const nullValueNum = typeof nullValue === 'string' ? +nullValue : nullValue;
    const data = this.parseData(text, headers, nullValueNum || -999.25);

    return {
      headers,
      data,
      wellParams,
      curveParams,
      metadata,
      nullValue: nullValueNum || -999.25
    };
  }

  /**
   * Parse binary LAS (LIDAR Point Cloud) format
   * @param buffer LAS file content as ArrayBuffer
   * @returns Parsed binary LAS data
   */
  async parseBinary(buffer: ArrayBuffer): Promise<LASBinaryData> {
    const dataView = new DataView(buffer);
    
    // Read LAS header (simplified version)
    // LAS file structure:
    // - Public Header Block (227 bytes for LAS 1.2, 375 bytes for LAS 1.4+)
    // - Variable Length Records (VLRs)
    // - Point Data Records
    
    const magic = readMagicBytes(dataView);
    if (magic !== 'LASF') {
      throw new Error(`LASLoader: Invalid binary LAS file, expected 'LASF' magic bytes, got '${magic}'`);
    }
    
    const versionMinor = dataView.getUint8(24);
    const versionMajor = dataView.getUint8(25);
    const version = versionMajor + versionMinor / 10;
    const pointDataFormat = dataView.getUint8(104);
    const numPoints = dataView.getUint32(107, true);
    
    const xScale = dataView.getFloat64(131, true);
    const yScale = dataView.getFloat64(139, true);
    const zScale = dataView.getFloat64(147, true);
    const xOffset = dataView.getFloat64(155, true);
    const yOffset = dataView.getFloat64(163, true);
    const zOffset = dataView.getFloat64(171, true);
    
    const xMin = dataView.getFloat64(187, true);
    const xMax = dataView.getFloat64(195, true);
    const yMin = dataView.getFloat64(203, true);
    const yMax = dataView.getFloat64(211, true);
    const zMin = dataView.getFloat64(219, true);
    const zMax = dataView.getFloat64(227, true);
    
    const offsetToPointData = dataView.getUint32(96, true);
    const numVLRs = dataView.getUint32(100, true);
    
    let pointDataOffset = offsetToPointData;
    for (let i = 0; i < numVLRs; i++) {
      const vlrDataLength = dataView.getUint16(pointDataOffset + 54, true);
      pointDataOffset += 54 + vlrDataLength;
    }
    
    /**
     * Point Data Format Description:
     * 
     * Format 0 (20 bytes): Basic format
     * Format 1 (28 bytes): Format 0 + GPS time
     * Format 2 (26 bytes): Format 0 + RGB color
     * Format 3 (34 bytes): Format 1 + RGB color
     * Format 4 (57 bytes): Format 1 + Waveform packet descriptor
     * Format 5 (63 bytes): Format 3 + Waveform packet descriptor
     * Format 6 (30 bytes): LAS 1.4+ extended format with larger base fields
     * Format 7 (36 bytes): Format 6 + GPS time
     * Format 8 (38 bytes): Format 6 + RGB color
     * Format 9 (59 bytes): Format 7 + RGB color
     * Format 10 (67 bytes): Format 9 + NIR (Near Infrared) + Waveform data
     */
    const pointRecordLengths = [20, 28, 26, 34, 57, 63, 30, 36, 38, 59, 67];
    const pointRecordLength = pointRecordLengths[pointDataFormat] || 20;
    
    if (pointDataFormat > 10) {
      throw new Error(`LASLoader: Unsupported point data format ${pointDataFormat}`);
    }
    
    const positions = new Float32Array(numPoints * 3);
    const colors = new Uint8Array(numPoints * 4);
    
    let baseOffset = pointDataOffset;
    for (let i = 0; i < numPoints; i++) {
      const offset = baseOffset + i * pointRecordLength;
      
      let xInt: number, yInt: number, zInt: number;
      
      if (pointDataFormat >= 6) {
        xInt = Number(dataView.getBigInt64(offset, true));
        yInt = Number(dataView.getBigInt64(offset + 8, true));
        zInt = Number(dataView.getBigInt64(offset + 16, true));
      } else {
        xInt = dataView.getInt32(offset, true);
        yInt = dataView.getInt32(offset + 4, true);
        zInt = dataView.getInt32(offset + 8, true);
      }
      
      const x = xInt * xScale + xOffset;
      const y = yInt * yScale + yOffset;
      const z = zInt * zScale + zOffset;
      
      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Read Intensity (all formats have this, position varies by format)
      let intensityOffset: number;
      if (pointDataFormat >= 6) {
        intensityOffset = offset + 24; // Formats 6-10: Intensity follows coordinates directly
      } else {
        intensityOffset = offset + 12; // Formats 0-5: Intensity follows coordinates directly
      }
      const intensity = dataView.getUint16(intensityOffset, true);
      
      if ([2, 3, 5, 7, 8, 9, 10].includes(pointDataFormat)) {
        let rgbOffset: number;
        const recordEnd = offset + pointRecordLength;
        
        // For most formats, RGB is 6 bytes before the end of the point record (RGB occupies 6 bytes)
        // But formats 5 and 10 have waveform data after RGB, requiring special handling
        if (pointDataFormat === 5) {
          // Format 5: RGB at offset + 28 (Format 3 RGB position, waveform data follows RGB)
          rgbOffset = offset + 28;
        } else if (pointDataFormat === 10) {
          // Format 10: RGB at offset + 59 (Format 9 RGB position, NIR follows RGB)
          rgbOffset = offset + 59;
        } else {
          // Other formats: RGB is 6 bytes before the end of the point record
          rgbOffset = recordEnd - 6;
        }
        
        if (rgbOffset >= offset && rgbOffset + 6 <= recordEnd && rgbOffset + 6 <= buffer.byteLength) {
          try {
            const r = dataView.getUint16(rgbOffset, true);
            const g = dataView.getUint16(rgbOffset + 2, true);
            const b = dataView.getUint16(rgbOffset + 4, true);
            
            colors[i * 4 + 0] = r < 256 ? r : (r >> 8);
            colors[i * 4 + 1] = g < 256 ? g : (g >> 8);
            colors[i * 4 + 2] = b < 256 ? b : (b >> 8);
            colors[i * 4 + 3] = 255;
          } catch (e) {
            console.warn(`LASLoader: Failed to read RGB at offset ${rgbOffset} (format ${pointDataFormat}, record length ${pointRecordLength}), using intensity instead. Error: ${e}`);
            const intensityNorm = Math.min(intensity / 65535, 1);
            colors[i * 4 + 0] = Math.floor(intensityNorm * 255);
            colors[i * 4 + 1] = Math.floor(intensityNorm * 255);
            colors[i * 4 + 2] = Math.floor(intensityNorm * 255);
            colors[i * 4 + 3] = 255;
          }
        } else {
          console.warn(`LASLoader: RGB offset ${rgbOffset} out of bounds (offset: ${offset}, record end: ${recordEnd}, buffer size: ${buffer.byteLength}, format: ${pointDataFormat}), using intensity instead`);
          const intensityNorm = Math.min(intensity / 65535, 1);
          colors[i * 4 + 0] = Math.floor(intensityNorm * 255);
          colors[i * 4 + 1] = Math.floor(intensityNorm * 255);
          colors[i * 4 + 2] = Math.floor(intensityNorm * 255);
          colors[i * 4 + 3] = 255;
        }
      } else {
        const intensityNorm = Math.min(intensity / 65535, 1);
        colors[i * 4 + 0] = Math.floor(intensityNorm * 255);
        colors[i * 4 + 1] = Math.floor(intensityNorm * 255);
        colors[i * 4 + 2] = Math.floor(intensityNorm * 255);
        colors[i * 4 + 3] = 255;
      }
    }
    
    return {
      format: 'binary',
      version,
      pointDataFormat,
      numPoints,
      positions,
      colors,
      bbox: { xMin, xMax, yMin, yMax, zMin, zMax },
      scale: { x: xScale, y: yScale, z: zScale },
      offset: { x: xOffset, y: yOffset, z: zOffset }
    };
  }


  /**
   * Parse version information section (~VERSION)
   */
  private parseMetadata(text: string): LASMetadata {
    const versionSection = LASUtils.parseSection(text, 'V');
    if (!versionSection) {
      throw new Error('LASLoader: ~VERSION section not found');
    }

    const cleaned = LASUtils.removeComment(versionSection);
    const lines = cleaned.split('\n').filter(Boolean);

    let version = 2.0;
    let wrap = false;

    for (const line of lines) {
      const parts = line.split(/\s{2,}|\s*:/).filter(Boolean);
      if (parts.length >= 2) {
        const key = parts[0].trim().toUpperCase();
        const value = parts[1].trim().toUpperCase();

        if (key === 'VERS' || key === 'VERSION') {
          // Extract version number (e.g., "2.0" from "2.0 : CWLS LOG ASCII STANDARD")
          const versionMatch = value.match(/(\d+\.?\d*)/);
          if (versionMatch) {
            version = +versionMatch[1];
          }
        } else if (key === 'WRAP' || key === 'WRAP.') {
          wrap = value === 'YES' || value === 'Y';
        }
      }
    }

    return { version, wrap };
  }

  /**
   * Parse well information section (~WELL)
   */
  private parseWellParams(text: string): LASWellParams {
    const wellSection = LASUtils.parseSection(text, 'W');
    if (!wellSection) {
      return {};
    }

    const cleaned = LASUtils.removeComment(wellSection);
    const lines = cleaned.split('\n').filter(Boolean);

    const params: LASWellParams = {};

    for (const line of lines) {
      const parsed = LASUtils.parseParameterLine(line);
      if (parsed.mnemonic) {
        params[parsed.mnemonic] = {
          unit: parsed.unit,
          value: LASUtils.convertToValue(parsed.value),
          description: parsed.description
        };
      }
    }

    return params;
  }

  /**
   * Parse curve information section (~CURVE)
   */
  private parseCurveParams(text: string): LASCurveParams {
    const curveSection = LASUtils.parseSection(text, 'C');
    if (!curveSection) {
      return {};
    }

    const cleaned = LASUtils.removeComment(curveSection);
    const lines = cleaned.split('\n').filter(Boolean);

    const params: LASCurveParams = {};

    for (const line of lines) {
      const parsed = LASUtils.parseParameterLine(line);
      if (parsed.mnemonic) {
        params[parsed.mnemonic] = {
          unit: parsed.unit,
          value: parsed.value,
          description: parsed.description
        };
      }
    }

    return params;
  }

  /**
   * Parse headers (column names) from curve section
   */
  private parseHeaders(text: string): string[] {
    const curveSection = LASUtils.parseSection(text, 'C');
    if (!curveSection) {
      throw new Error('LASLoader: ~CURVE section not found');
    }

    const cleaned = LASUtils.removeComment(curveSection);
    const lines = cleaned.split('\n').filter(Boolean);

    const headers: string[] = [];

    for (const line of lines) {
      const parsed = LASUtils.parseParameterLine(line);
      if (parsed.mnemonic) {
        headers.push(parsed.mnemonic);
      }
    }

    if (headers.length === 0) {
      throw new Error('LASLoader: No headers found in ~CURVE section');
    }

    return headers;
  }

  /**
   * Parse ASCII data section (~A)
   */
  private parseData(
    text: string,
    headers: string[],
    nullValue: number
  ): Array<Array<string | number>> {
    const dataMatch = text.match(/~A(?:[\x20-\x7E])*(?:\r\n|\r|\n)([\s\S]*?)(?=~|$)/);
    if (!dataMatch || !dataMatch[1]) {
      throw new Error('LASLoader: ~A data section not found');
    }

    const dataSection = dataMatch[1].trim();
    if (!dataSection) {
      throw new Error('LASLoader: Data section is empty');
    }

    const values = dataSection
      .split(/\s+/)
      .filter(v => v.trim().length > 0)
      .map(m => LASUtils.convertToValue(m.trim()));

    if (values.length === 0) {
      throw new Error('LASLoader: No data values found');
    }

    const rowCount = Math.floor(values.length / headers.length);
    if (rowCount === 0) {
      throw new Error('LASLoader: Insufficient data values');
    }

    const data: Array<Array<string | number>> = [];
    for (let i = 0; i < rowCount; i++) {
      const row: Array<string | number> = [];
      for (let j = 0; j < headers.length; j++) {
        const idx = i * headers.length + j;
        if (idx < values.length) {
          row.push(values[idx]);
        }
      }
      if (row.length === headers.length) {
        data.push(row);
      }
    }

    return data;
  }
}

