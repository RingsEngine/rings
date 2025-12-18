import { PlyHeader, PlyProperty, PlyMode, splatProperties, splatColorProperties } from './PlyTypes';
import { byteSizeOfType, readByType } from './PlyUtils';
import { SplatData } from '../../../components/renderer/GSplatStreamRenderer';

/**
 * Streaming PLY parser for Gaussian Splatting
 * 
 * Handles incremental parsing of PLY binary data as chunks arrive.
 * Maintains state to handle partial vertex data at chunk boundaries.
 */
export class PlyStreamParser {
  private _header: PlyHeader | null = null;
  private _headerBuffer: Uint8Array = new Uint8Array(4096);
  private _headerLength: number = 0;
  private _headerParsed: boolean = false;

  // Data parsing state
  private _dataBuffer: Uint8Array | null = null;
  private _dataOffset: number = 0;
  private _processedVertices: number = 0;
  private _vertexStride: number = 0;
  private _propOffsets: number[] = [];
  private _properties: PlyProperty[] = [];

  // Callbacks
  private _onHeaderParsed: ((header: PlyHeader) => void) | null = null;
  private _onSplatParsed: ((splatData: SplatData, index: number) => void) | null = null;
  private _batchSize: number = 1000;
  private _cancelled: boolean = false;

  constructor(
    onHeaderParsed: (header: PlyHeader) => void,
    onSplatParsed: (splatData: SplatData, index: number) => void,
    batchSize: number = 1000
  ) {
    this._onHeaderParsed = onHeaderParsed;
    this._onSplatParsed = onSplatParsed;
    this._batchSize = batchSize;
  }

  /**
   * Process incoming data chunk
   */
  public processChunk(chunk: Uint8Array): void {
    if (this._cancelled) return;
    
    if (!this._headerParsed) {
      this._processHeaderChunk(chunk);
    } else {
      this._processDataChunk(chunk);
    }
  }

  /**
   * Cancel parsing
   * Stops processing new chunks
   */
  public cancel(): void {
    this._cancelled = true;
  }

  /**
   * Check if parsing is cancelled
   */
  public isCancelled(): boolean {
    return this._cancelled;
  }

  /**
   * Process header chunk
   */
  private _processHeaderChunk(chunk: Uint8Array): void {
    // Append to header buffer
    const needed = this._headerLength + chunk.length;
    if (needed > this._headerBuffer.length) {
      const newBuffer = new Uint8Array(Math.max(needed, this._headerBuffer.length * 2));
      newBuffer.set(this._headerBuffer.subarray(0, this._headerLength));
      this._headerBuffer = newBuffer;
    }
    this._headerBuffer.set(chunk, this._headerLength);
    this._headerLength += chunk.length;

    // Try to find header end
    const headerText = new TextDecoder('utf-8').decode(
      this._headerBuffer.subarray(0, this._headerLength)
    );

    const headerEnd = headerText.indexOf('end_header\n');
    if (headerEnd >= 0) {
      const headerEndPos = headerEnd + 'end_header\n'.length;
      const headerBuffer = this._headerBuffer.subarray(0, headerEndPos);
      
      // Parse header (convert Uint8Array to ArrayBuffer)
      const headerArrayBuffer = headerBuffer.buffer.slice(headerBuffer.byteOffset, headerBuffer.byteOffset + headerBuffer.byteLength) as ArrayBuffer;
      const header = this._parseHeader(headerArrayBuffer);
      this._header = header;
      this._headerParsed = true;

      // Initialize data parsing structures
      this._initializeDataParsing(header);
      
      // Notify header parsed
      if (this._onHeaderParsed) {
        this._onHeaderParsed(header);
      }

      // Process remaining chunk data
      // headerEndPos is the position in headerBuffer where header ends
      // chunk was appended at position (this._headerLength - chunk.length) in headerBuffer
      // So remaining data starts at: headerEndPos - (this._headerLength - chunk.length) in chunk
      const chunkStartInHeader = this._headerLength - chunk.length;
      const remainingStartInChunk = headerEndPos - chunkStartInHeader;
      if (remainingStartInChunk > 0 && remainingStartInChunk < chunk.length) {
        const remainingChunk = chunk.subarray(remainingStartInChunk);
        this._processDataChunk(remainingChunk);
      } else if (remainingStartInChunk === 0) {
        // Entire chunk is data
        this._processDataChunk(chunk);
      }

    }
  }

  /**
   * Parse PLY header from buffer
   */
  private _parseHeader(buffer: ArrayBuffer): PlyHeader {
    const ascii = new TextDecoder('utf-8').decode(new Uint8Array(buffer));
    const headerEnd = ascii.indexOf('end_header\n');
    if (headerEnd < 0) {
      throw new Error('PLY: Invalid PLY header');
    }

    const headerText = ascii.substring(0, headerEnd + 'end_header\n'.length);
    const lines = headerText.split(/\r?\n/);
    
    let format = '';
    let vertexCount = 0;
    let faceCount = 0;
    const properties: PlyProperty[] = [];
    const faceProperties: PlyProperty[] = [];
    const textureFiles: string[] = [];

    let inVertexElement = false;
    let inFaceElement = false;
    for (const line of lines) {
      if (line.startsWith('format ')) {
        format = line.split(/\s+/)[1];
      } else if (line.startsWith('comment TextureFile ')) {
        const texturePath = line.substring('comment TextureFile '.length).trim();
        if (texturePath) {
          textureFiles.push(texturePath);
        }
      } else if (line.startsWith('element ')) {
        const toks = line.split(/\s+/);
        inVertexElement = toks[1] === 'vertex';
        inFaceElement = toks[1] === 'face';
        if (inVertexElement) {
          vertexCount = parseInt(toks[2]);
          inFaceElement = false;
        }
        if (inFaceElement) {
          faceCount = parseInt(toks[2]);
          inVertexElement = false;
        }
      } else if (inVertexElement && line.startsWith('property ')) {
        const toks = line.split(/\s+/);
        const type = toks[1];
        const name = toks[2];
        properties.push({ name, type });
      } else if (inFaceElement && line.startsWith('property ')) {
        const toks = line.split(/\s+/);
        if (toks[1] === 'list') {
          const countType = toks[2];
          const itemType = toks[3];
          const name = toks[4];
          faceProperties.push({ name, type: `list ${countType} ${itemType}` });
        } else {
          const type = toks[1];
          const name = toks[2];
          faceProperties.push({ name, type });
        }
      }
    }

    if (format !== 'binary_little_endian' && format !== 'ascii') {
      throw new Error(`PLY: Unsupported format: ${format}`);
    }

    let splatPropertyCount = 0;
    let splatPropertyColorCount = 0;
    for (const property of properties) {
      if (splatProperties.includes(property.name)) {
        splatPropertyCount++;
      }
      if (splatColorProperties.includes(property.name)) {
        splatPropertyColorCount++;
      }
    }

    // Determine mode
    let mode: PlyMode;
    if (faceCount > 0) {
      mode = PlyMode.Mesh;
    } else if (splatPropertyCount === splatProperties.length && splatPropertyColorCount === 3) {
      mode = PlyMode.Splat;
    } else {
      mode = PlyMode.PointCloud;
    }

    return {
      format,
      vertexCount,
      faceCount,
      properties,
      faceProperties: faceProperties.length > 0 ? faceProperties : undefined,
      textureFiles,
      headerByteLength: headerText.length,
      mode,
    };
  }

  /**
   * Initialize data parsing structures
   */
  private _initializeDataParsing(header: PlyHeader): void {
    this._properties = header.properties;
    
    // Calculate vertex stride and property offsets
    this._propOffsets = [];
    this._vertexStride = 0;
    for (const p of this._properties) {
      this._propOffsets.push(this._vertexStride);
      this._vertexStride += byteSizeOfType(p.type);
    }

    // Allocate data buffer (will grow as needed)
    const estimatedSize = header.vertexCount * this._vertexStride;
    this._dataBuffer = new Uint8Array(Math.min(estimatedSize, 1024 * 1024 * 10)); // Max 10MB initial
    this._dataOffset = 0; // Data buffer starts at 0 (doesn't include header)
    this._processedVertices = 0; // Reset processed vertices count
  }

  /**
   * Process data chunk
   */
  private _processDataChunk(chunk: Uint8Array): void {
    if (!this._header || !this._dataBuffer) return;

    // Ensure buffer is large enough
    const needed = this._dataOffset + chunk.length;
    if (needed > this._dataBuffer.length) {
      const newSize = Math.max(needed, this._dataBuffer.length * 2);
      const newBuffer = new Uint8Array(newSize);
      newBuffer.set(this._dataBuffer);
      this._dataBuffer = newBuffer;
    }

    // Append chunk to data buffer
    this._dataBuffer.set(chunk, this._dataOffset);
    this._dataOffset += chunk.length;

    // Parse complete vertices
    this._parseVertices();
  }

  /**
   * Parse vertices from current data buffer
   */
  private _parseVertices(): void {
    if (!this._header || !this._dataBuffer) return;

    // Create DataView from current buffer (buffer may have been reallocated)
    const payload = new DataView(this._dataBuffer.buffer, this._dataBuffer.byteOffset, this._dataBuffer.byteLength);
    const vertexCount = this._header.vertexCount;
    
    const has = (n: string) => this._properties.find((p) => p.name === n) != null;
    const propIndex = (n: string) => this._properties.findIndex((p) => p.name === n);

    // Parse vertices in batches
    while (this._processedVertices < vertexCount && !this._cancelled) {
      const v = this._processedVertices;
      const vOffset = v * this._vertexStride;

      // Check if we have enough data for this vertex
      if (vOffset + this._vertexStride > this._dataOffset) {
        break; // Not enough data yet
      }

      // Check if cancelled
      if (this._cancelled) {
        break;
      }

      // Validate required properties
      const ix = propIndex('x');
      const iy = propIndex('y');
      const iz = propIndex('z');
      if (ix < 0 || iy < 0 || iz < 0) {
        throw new Error('PLY: Missing required x/y/z properties for vertex');
      }

      // Parse splat data
      const splatData: SplatData = {
        position: [
          readByType(payload, vOffset + this._propOffsets[ix], this._properties[ix].type),
          readByType(payload, vOffset + this._propOffsets[iy], this._properties[iy].type),
          readByType(payload, vOffset + this._propOffsets[iz], this._properties[iz].type),
        ],
      };

      // Optional: scale
      if (has('scale_0')) {
        splatData.scale = [
          readByType(payload, vOffset + this._propOffsets[propIndex('scale_0')], this._properties[propIndex('scale_0')].type),
          readByType(payload, vOffset + this._propOffsets[propIndex('scale_1')], this._properties[propIndex('scale_1')].type),
          readByType(payload, vOffset + this._propOffsets[propIndex('scale_2')], this._properties[propIndex('scale_2')].type),
        ];
      }

      // Optional: rotation
      if (has('rot_0')) {
        const w = readByType(payload, vOffset + this._propOffsets[propIndex('rot_0')], this._properties[propIndex('rot_0')].type);
        const x = readByType(payload, vOffset + this._propOffsets[propIndex('rot_1')], this._properties[propIndex('rot_1')].type);
        const y = readByType(payload, vOffset + this._propOffsets[propIndex('rot_2')], this._properties[propIndex('rot_2')].type);
        const z = readByType(payload, vOffset + this._propOffsets[propIndex('rot_3')], this._properties[propIndex('rot_3')].type);
        splatData.rotation = [x, y, z, w]; // Store as [x, y, z, w]
      }

      // Optional: opacity
      if (has('opacity')) {
        splatData.opacity = readByType(payload, vOffset + this._propOffsets[propIndex('opacity')], this._properties[propIndex('opacity')].type);
      }

      // Optional: SH coefficients
      const dcIdx = [propIndex('f_dc_0'), propIndex('f_dc_1'), propIndex('f_dc_2')];
      if (dcIdx[0] >= 0 && dcIdx[1] >= 0 && dcIdx[2] >= 0) {
        const restIndices: number[] = [];
        for (let i = 0; i < this._properties.length; i++) {
          if (this._properties[i].name.startsWith('f_rest_')) restIndices.push(i);
        }
        const coeffsPerColor = 1 + restIndices.length / 3;
        const coeffs = new Float32Array(coeffsPerColor * 3);
        
        // DC components
        coeffs[0] = readByType(payload, vOffset + this._propOffsets[dcIdx[0]], this._properties[dcIdx[0]].type);
        coeffs[coeffsPerColor + 0] = readByType(payload, vOffset + this._propOffsets[dcIdx[1]], this._properties[dcIdx[1]].type);
        coeffs[2 * coeffsPerColor + 0] = readByType(payload, vOffset + this._propOffsets[dcIdx[2]], this._properties[dcIdx[2]].type);
        
        // Rest coefficients packed R/G/B sequentially
        let rPtr = 1;
        let gPtr = 1;
        let bPtr = 1;
        for (let i = 0; i < restIndices.length; i += 3) {
          const ri = restIndices[i + 0];
          const gi = restIndices[i + 1];
          const bi = restIndices[i + 2];
          coeffs[rPtr] = readByType(payload, vOffset + this._propOffsets[ri], this._properties[ri].type);
          coeffs[coeffsPerColor + gPtr] = readByType(payload, vOffset + this._propOffsets[gi], this._properties[gi].type);
          coeffs[2 * coeffsPerColor + bPtr] = readByType(payload, vOffset + this._propOffsets[bi], this._properties[bi].type);
          rPtr++;
          gPtr++;
          bPtr++;
        }

        splatData.sh = {
          order: Math.floor(Math.sqrt(coeffsPerColor)),
          coeffs: coeffs,
        };
      }

      // Notify splat parsed
      if (this._onSplatParsed) {
        this._onSplatParsed(splatData, v);
      }

      this._processedVertices++;

      // Batch processing: yield control every N vertices
      if (this._processedVertices % this._batchSize === 0) {
        // Use setTimeout to yield control and prevent blocking
        setTimeout(() => {
          this._parseVertices();
        }, 0);
        return;
      }
    }
  }

  /**
   * Get current parsing progress
   */
  public getProgress(): { processed: number; total: number; percentage: number } {
    const total = this._header?.vertexCount || 0;
    return {
      processed: this._processedVertices,
      total,
      percentage: total > 0 ? (this._processedVertices / total) * 100 : 0,
    };
  }
}

