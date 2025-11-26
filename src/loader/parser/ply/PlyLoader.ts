import { PlyHeader, PlyProperty, PlyGaussianSplatData } from './PlyTypes';
import { byteSizeOfType, readByType, inferSHOrder } from './PlyUtils';

/**
 * Parse PLY header from buffer
 */
export function parsePlyHeader(buffer: ArrayBuffer): PlyHeader {
  const ascii = new TextDecoder('utf-8').decode(
    new Uint8Array(buffer, 0, Math.min(4096, buffer.byteLength))
  );

  if (!ascii.startsWith('ply')) {
    throw new Error('PLY: Unsupported format. Expecting PLY file.');
  }

  const headerEnd = ascii.indexOf('end_header\n');
  if (headerEnd < 0) {
    throw new Error('PLY: Invalid PLY header');
  }

  const headerText = ascii.substring(0, headerEnd + 'end_header\n'.length);
  const lines = headerText.split(/\r?\n/);
  
  let format = '';
  let vertexCount = 0;
  const properties: PlyProperty[] = [];

  let inVertexElement = false;
  for (const line of lines) {
    if (line.startsWith('format ')) {
      format = line.split(/\s+/)[1];
    } else if (line.startsWith('element ')) {
      const toks = line.split(/\s+/);
      inVertexElement = toks[1] === 'vertex';
      if (inVertexElement) vertexCount = parseInt(toks[2]);
    } else if (inVertexElement && line.startsWith('property ')) {
      const toks = line.split(/\s+/);
      const type = toks[1];
      const name = toks[2];
      properties.push({ name, type });
    }
  }

  if (format !== 'binary_little_endian') {
    throw new Error('PLY: Only binary_little_endian PLY is supported');
  }

  return {
    format,
    vertexCount,
    properties,
    headerByteLength: headerText.length,
  };
}

/**
 * Parse PLY binary data for Gaussian Splatting
 */
export function parsePlyGaussianSplat(buffer: ArrayBuffer): PlyGaussianSplatData {
  const header = parsePlyHeader(buffer);
  const { vertexCount, properties, headerByteLength } = header;
  
  const payload = new DataView(buffer, headerByteLength);

  const has = (n: string) => properties.find((p) => p.name === n) != null;
  const propIndex = (n: string) => properties.findIndex((p) => p.name === n);

  // Prepare output arrays
  const position = new Float32Array(vertexCount * 3);
  const scale = has('scale_0') ? new Float32Array(vertexCount * 3) : undefined;
  const rotation = has('rot_0') ? new Float32Array(vertexCount * 4) : undefined;
  const opacity = has('opacity') ? new Float32Array(vertexCount) : undefined;

  // SH coefficients layout
  const dcIdx = [propIndex('f_dc_0'), propIndex('f_dc_1'), propIndex('f_dc_2')];
  const restIndices: number[] = [];
  for (let i = 0; i < properties.length; i++) {
    if (properties[i].name.startsWith('f_rest_')) restIndices.push(i);
  }

  const hasSH = dcIdx[0] >= 0 && dcIdx[1] >= 0 && dcIdx[2] >= 0;
  let shCoeffs: Float32Array | undefined = undefined;
  let shOrder = 0;
  if (hasSH) {
    const coeffsPerColor = 1 /*dc*/ + restIndices.length / 3;
    shOrder = inferSHOrder(coeffsPerColor);
    shCoeffs = new Float32Array(vertexCount * coeffsPerColor * 3);
  }

  // Build per-vertex reader map
  const propOffsets: number[] = [];
  let stride = 0;
  for (const p of properties) {
    propOffsets.push(stride);
    stride += byteSizeOfType(p.type);
  }

  // Iterate vertices
  let base = 0;
  for (let v = 0; v < vertexCount; v++) {
    const vOffset = base;
    
    // Position (required)
    const ix = propIndex('x');
    const iy = propIndex('y');
    const iz = propIndex('z');
    if (ix < 0 || iy < 0 || iz < 0) {
      throw new Error('PLY: Missing x/y/z for vertex');
    }
    position[v * 3 + 0] = readByType(payload, vOffset + propOffsets[ix], properties[ix].type);
    position[v * 3 + 1] = readByType(payload, vOffset + propOffsets[iy], properties[iy].type);
    position[v * 3 + 2] = readByType(payload, vOffset + propOffsets[iz], properties[iz].type);

    // Scale
    if (scale) {
      const s0 = propIndex('scale_0');
      const s1 = propIndex('scale_1');
      const s2 = propIndex('scale_2');
      scale[v * 3 + 0] = readByType(payload, vOffset + propOffsets[s0], properties[s0].type);
      scale[v * 3 + 1] = readByType(payload, vOffset + propOffsets[s1], properties[s1].type);
      scale[v * 3 + 2] = readByType(payload, vOffset + propOffsets[s2], properties[s2].type);
    }

    // Rotation (PLY format uses [w, x, y, z] order, we store as [x, y, z, w])
    if (rotation) {
      const r0 = propIndex('rot_0');
      const r1 = propIndex('rot_1');
      const r2 = propIndex('rot_2');
      const r3 = propIndex('rot_3');
      const w = readByType(payload, vOffset + propOffsets[r0], properties[r0].type);
      const x = readByType(payload, vOffset + propOffsets[r1], properties[r1].type);
      const y = readByType(payload, vOffset + propOffsets[r2], properties[r2].type);
      const z = readByType(payload, vOffset + propOffsets[r3], properties[r3].type);
      // Store in [x, y, z, w] order
      rotation[v * 4 + 0] = x;
      rotation[v * 4 + 1] = y;
      rotation[v * 4 + 2] = z;
      rotation[v * 4 + 3] = w;
    }

    // Opacity
    if (opacity) {
      const oi = propIndex('opacity');
      opacity[v] = readByType(payload, vOffset + propOffsets[oi], properties[oi].type);
    }

    // Spherical Harmonics
    if (hasSH && shCoeffs) {
      const coeffsPerColor = 1 + restIndices.length / 3;
      const baseIndex = v * coeffsPerColor * 3;
      
      // DC components
      shCoeffs[baseIndex + 0] = readByType(
        payload,
        vOffset + propOffsets[dcIdx[0]],
        properties[dcIdx[0]].type
      );
      shCoeffs[baseIndex + coeffsPerColor + 0] = readByType(
        payload,
        vOffset + propOffsets[dcIdx[1]],
        properties[dcIdx[1]].type
      );
      shCoeffs[baseIndex + 2 * coeffsPerColor + 0] = readByType(
        payload,
        vOffset + propOffsets[dcIdx[2]],
        properties[dcIdx[2]].type
      );
      
      // Rest coefficients packed R/G/B sequentially
      let rPtr = 1;
      let gPtr = 1;
      let bPtr = 1;
      for (let i = 0; i < restIndices.length; i += 3) {
        const ri = restIndices[i + 0];
        const gi = restIndices[i + 1];
        const bi = restIndices[i + 2];
        shCoeffs[baseIndex + rPtr] = readByType(
          payload,
          vOffset + propOffsets[ri],
          properties[ri].type
        );
        shCoeffs[baseIndex + coeffsPerColor + gPtr] = readByType(
          payload,
          vOffset + propOffsets[gi],
          properties[gi].type
        );
        shCoeffs[baseIndex + 2 * coeffsPerColor + bPtr] = readByType(
          payload,
          vOffset + propOffsets[bi],
          properties[bi].type
        );
        rPtr++;
        gPtr++;
        bPtr++;
      }
    }

    base += stride;
  }

  return {
    vertexCount,
    position,
    scale,
    rotation,
    opacity,
    sh: hasSH && shCoeffs ? { order: shOrder, coeffs: shCoeffs } : undefined,
  };
}

