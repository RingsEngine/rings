import { PlyHeader, PlyProperty, PlyGaussianSplatData, PlyMeshData, PlyPointCloudData, splatProperties, splatColorProperties, PlyMode } from './PlyTypes';
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
      // Parse texture file path from comment
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

  // Support both binary_little_endian and ascii formats
  if (format !== 'binary_little_endian' && format !== 'ascii') {
    throw new Error(`PLY: Unsupported format: ${format}. Only binary_little_endian and ascii are supported.`);
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

  return {
    format,
    vertexCount,
    faceCount,
    properties,
    faceProperties: faceProperties.length > 0 ? faceProperties : undefined,
    textureFiles,
    headerByteLength: headerText.length,
    mode: faceCount ? PlyMode.Mesh : splatPropertyCount === splatProperties.length && splatPropertyColorCount === 3 ? PlyMode.Splat : PlyMode.PointCloud,
  };
}

/**
 * Parse PLY data for Gaussian Splatting (supports both binary and ASCII)
 */
export function parsePlyGaussianSplat(buffer: ArrayBuffer): PlyGaussianSplatData {
  const header = parsePlyHeader(buffer);
  const { format } = header;
  
  if (format === 'ascii') {
    return parsePlyGaussianSplatASCII(buffer, header);
  } else {
    return parsePlyGaussianSplatBinary(buffer, header);
  }
}

/**
 * Parse PLY binary data for Gaussian Splatting
 */
function parsePlyGaussianSplatBinary(buffer: ArrayBuffer, header: PlyHeader): PlyGaussianSplatData {
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

    // Scale (optional)
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

    // Opacity (optional)
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

/**
 * Parse PLY ASCII data for Gaussian Splatting
 */
function parsePlyGaussianSplatASCII(buffer: ArrayBuffer, header: PlyHeader): PlyGaussianSplatData {
  const { vertexCount, properties } = header;
  
  const text = new TextDecoder('utf-8').decode(buffer);
  
  const headerEnd = text.indexOf('end_header');
  if (headerEnd < 0) {
    throw new Error('PLY: Invalid PLY header');
  }
  
  let bodyStart = headerEnd + 'end_header'.length;
  while (bodyStart < text.length && (text[bodyStart] === ' ' || text[bodyStart] === '\n' || text[bodyStart] === '\r')) {
    bodyStart++;
  }
  
  const bodyText = text.substring(bodyStart);
  const tokens = bodyText.split(/\s+/).filter(token => token.length > 0);
  
  let tokenIndex = 0;
  
  const has = (n: string) => properties.find((p) => p.name === n) != null;
  const propIndex = (n: string) => properties.findIndex((p) => p.name === n);
  
  const parseASCIINumber = (type: string): number => {
    if (tokenIndex >= tokens.length) {
      throw new Error('PLY: Unexpected end of file');
    }
    const value = tokens[tokenIndex++];
    
    switch (type) {
      case 'char': case 'uchar': case 'short': case 'ushort': case 'int': case 'uint':
      case 'int8': case 'uint8': case 'int16': case 'uint16': case 'int32': case 'uint32':
        return parseInt(value);
      case 'float': case 'double': case 'float32': case 'float64':
        return parseFloat(value);
      default:
        return parseFloat(value);
    }
  };
  
  const position = new Float32Array(vertexCount * 3);
  const scale = has('scale_0') ? new Float32Array(vertexCount * 3) : undefined;
  const rotation = has('rot_0') ? new Float32Array(vertexCount * 4) : undefined;
  const opacity = has('opacity') ? new Float32Array(vertexCount) : undefined;
  
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
  
  const ix = propIndex('x');
  const iy = propIndex('y');
  const iz = propIndex('z');
  if (ix < 0 || iy < 0 || iz < 0) {
    throw new Error('PLY: Missing x/y/z for vertex');
  }
  
  const s0 = scale ? propIndex('scale_0') : -1;
  const s1 = scale ? propIndex('scale_1') : -1;
  const s2 = scale ? propIndex('scale_2') : -1;
  const r0 = rotation ? propIndex('rot_0') : -1;
  const r1 = rotation ? propIndex('rot_1') : -1;
  const r2 = rotation ? propIndex('rot_2') : -1;
  const r3 = rotation ? propIndex('rot_3') : -1;
  const oi = opacity ? propIndex('opacity') : -1;
  
  for (let v = 0; v < vertexCount; v++) {
    for (let pIdx = 0; pIdx < properties.length; pIdx++) {
      const prop = properties[pIdx];
      const value = parseASCIINumber(prop.type);
      
      // Position (required)
      if (pIdx === ix) {
        position[v * 3 + 0] = value;
      } else if (pIdx === iy) {
        position[v * 3 + 1] = value;
      } else if (pIdx === iz) {
        position[v * 3 + 2] = value;
      }
      
      // Scale
      if (scale && pIdx === s0) {
        scale[v * 3 + 0] = value;
      } else if (scale && pIdx === s1) {
        scale[v * 3 + 1] = value;
      } else if (scale && pIdx === s2) {
        scale[v * 3 + 2] = value;
      }
      
      // Rotation (PLY format uses [w, x, y, z] order, we store as [x, y, z, w])
      if (rotation && pIdx === r0) {
        rotation[v * 4 + 3] = value; // w
      } else if (rotation && pIdx === r1) {
        rotation[v * 4 + 0] = value; // x
      } else if (rotation && pIdx === r2) {
        rotation[v * 4 + 1] = value; // y
      } else if (rotation && pIdx === r3) {
        rotation[v * 4 + 2] = value; // z
      }
      
      // Opacity
      if (opacity && pIdx === oi) {
        opacity[v] = value;
      }
      
      // Spherical Harmonics
      if (hasSH && shCoeffs) {
        const coeffsPerColor = 1 + restIndices.length / 3;
        const baseIndex = v * coeffsPerColor * 3;
        
        // DC components
        if (pIdx === dcIdx[0]) {
          shCoeffs[baseIndex + 0] = value;
        } else if (pIdx === dcIdx[1]) {
          shCoeffs[baseIndex + coeffsPerColor + 0] = value;
        } else if (pIdx === dcIdx[2]) {
          shCoeffs[baseIndex + 2 * coeffsPerColor + 0] = value;
        }
        
        // Rest coefficients
        for (let i = 0; i < restIndices.length; i += 3) {
          const ri = restIndices[i + 0];
          const gi = restIndices[i + 1];
          const bi = restIndices[i + 2];
          
          if (pIdx === ri) {
            shCoeffs[baseIndex + (i / 3 + 1)] = value;
          } else if (pIdx === gi) {
            shCoeffs[baseIndex + coeffsPerColor + (i / 3 + 1)] = value;
          } else if (pIdx === bi) {
            shCoeffs[baseIndex + 2 * coeffsPerColor + (i / 3 + 1)] = value;
          }
        }
      }
    }
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


/**
 * Parse PLY data for Mesh
 */
export function parsePlyMesh(buffer: ArrayBuffer): PlyMeshData {
  const header = parsePlyHeader(buffer);
  const { format, vertexCount, faceCount, properties, faceProperties, textureFiles, headerByteLength } = header;
  
  if (format === 'ascii') {
    return parsePlyMeshASCII(buffer, header);
  } else {
    return parsePlyMeshBinary(buffer, header);
  }
}

/**
 * Parse PLY binary data for Mesh
 */
function parsePlyMeshBinary(buffer: ArrayBuffer, header: PlyHeader): PlyMeshData {
  const { vertexCount, faceCount, properties, faceProperties, textureFiles, headerByteLength } = header;
  
  const payload = new DataView(buffer, headerByteLength);

  const has = (n: string) => properties.find((p) => p.name === n) != null;
  const propIndex = (n: string) => properties.findIndex((p) => p.name === n);
  
  const hasTexcoord = faceProperties?.some(p => p.name === 'texcoord') || false;
  const hasTexnumber = faceProperties?.some(p => p.name === 'texnumber') || false;
  const texcoordProp = faceProperties?.find(p => p.name === 'texcoord');
  const texnumberProp = faceProperties?.find(p => p.name === 'texnumber');

  const position = new Float32Array(vertexCount * 3);
  const hasNormalData = has('nx') && has('ny') && has('nz');
  const normal = hasNormalData ? new Float32Array(vertexCount * 3) : new Float32Array(vertexCount * 3);
  const color = (has('red') || has('r')) && (has('green') || has('g')) && (has('blue') || has('b')) 
    ? new Float32Array(vertexCount * 3) : undefined;
  // UV can come from vertex properties or face properties (texcoord)
  const hasVertexUV = (has('u') || has('s')) && (has('v') || has('t'));
  const uv = hasVertexUV || hasTexcoord 
    ? new Float32Array(vertexCount * 2) : undefined;
  
  const faceTexcoords: Map<number, Float32Array> = new Map(); // face index -> texcoords array
  const faceTexnumbers: number[] = hasTexnumber ? new Array(faceCount) : [];

  const propOffsets: number[] = [];
  let stride = 0;
  for (const p of properties) {
    propOffsets.push(stride);
    stride += byteSizeOfType(p.type);
  }

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

    if (hasNormalData) {
      const nx = propIndex('nx');
      const ny = propIndex('ny');
      const nz = propIndex('nz');
      normal[v * 3 + 0] = readByType(payload, vOffset + propOffsets[nx], properties[nx].type);
      normal[v * 3 + 1] = readByType(payload, vOffset + propOffsets[ny], properties[ny].type);
      normal[v * 3 + 2] = readByType(payload, vOffset + propOffsets[nz], properties[nz].type);
    }

    // Color (support both 'red'/'green'/'blue' and 'r'/'g'/'b')
    if (color) {
      const rIdx = propIndex('red') >= 0 ? propIndex('red') : propIndex('r');
      const gIdx = propIndex('green') >= 0 ? propIndex('green') : propIndex('g');
      const bIdx = propIndex('blue') >= 0 ? propIndex('blue') : propIndex('b');
      
      if (rIdx >= 0 && gIdx >= 0 && bIdx >= 0) {
        let r = readByType(payload, vOffset + propOffsets[rIdx], properties[rIdx].type);
        let g = readByType(payload, vOffset + propOffsets[gIdx], properties[gIdx].type);
        let b = readByType(payload, vOffset + propOffsets[bIdx], properties[bIdx].type);
        
        if (properties[rIdx].type === 'uchar' || properties[rIdx].type === 'uint8') {
          r /= 255.0;
          g /= 255.0;
          b /= 255.0;
        }
        
        color[v * 3 + 0] = r;
        color[v * 3 + 1] = g;
        color[v * 3 + 2] = b;
      }
    }

    // UV coordinates (support both 'u'/'v' and 's'/'t')
    if (uv) {
      const uIdx = propIndex('u') >= 0 ? propIndex('u') : propIndex('s');
      const vIdx = propIndex('v') >= 0 ? propIndex('v') : propIndex('t');
      
      if (uIdx >= 0 && vIdx >= 0) {
        uv[v * 2 + 0] = readByType(payload, vOffset + propOffsets[uIdx], properties[uIdx].type);
        uv[v * 2 + 1] = readByType(payload, vOffset + propOffsets[vIdx], properties[vIdx].type);
      }
    }

    base += stride;
  }

  // Parse faces
  const indices: number[] = [];
  const triangleTexnumbers: number[] = []; // Track texture number for each triangle
  const faceVertexUvs: number[] = []; // Store UVs per triangle
  let faceBase = base;
  
  // Track UV assignment for vertices (use first encountered UV for each vertex)
  // Only used when UVs come from vertex properties, not face properties
  const vertexUVAssigned = uv && !hasVertexUV && !hasTexcoord ? new Array(vertexCount).fill(false) : null;
  
  for (let f = 0; f < faceCount; f++) {
    let currentOffset = faceBase;
    
    let faceIndices: number[] = [];
    let faceTexcoordArray: Float32Array | undefined = undefined;
    let faceTexnum = 0;
    let vertexCountInFace = 0;
    
    if (!faceProperties || faceProperties.length === 0) {
      throw new Error('PLY: Face element must have properties');
    }
    
    for (const prop of faceProperties) {
      if (prop.name === 'vertex_indices') {
        const parts = prop.type.split(' ');
        if (parts.length !== 3 || parts[0] !== 'list') {
          throw new Error(`PLY: Invalid vertex_indices property type: ${prop.type}`);
        }
        const countType = parts[1]; // uchar
        const itemType = parts[2]; // uint
        
        vertexCountInFace = readByType(payload, currentOffset, countType);
        currentOffset += byteSizeOfType(countType);
        
        if (vertexCountInFace < 3) {
          throw new Error(`PLY: Face ${f} has less than 3 vertices`);
        }
        
        const indexSize = byteSizeOfType(itemType);
        faceIndices = [];
        for (let i = 0; i < vertexCountInFace; i++) {
          const idx = readByType(payload, currentOffset, itemType);
          faceIndices.push(idx);
          currentOffset += indexSize;
        }
      } else if (prop.name === 'texcoord') {
        const parts = prop.type.split(' ');
        if (parts.length !== 3 || parts[0] !== 'list') {
          throw new Error(`PLY: Invalid texcoord property type: ${prop.type}`);
        }
        const countType = parts[1]; // uchar
        const itemType = parts[2]; // float
        
        // Each vertex has 2 floats (u, v), so texcoordCount should equal vertexCountInFace * 2
        const texcoordCount = readByType(payload, currentOffset, countType);
        currentOffset += byteSizeOfType(countType);
        
        // Read texcoord values (texcoordCount is already the total number of floats)
        const itemSize = byteSizeOfType(itemType);
        faceTexcoordArray = new Float32Array(texcoordCount);
        for (let i = 0; i < texcoordCount; i++) {
          faceTexcoordArray[i] = readByType(payload, currentOffset, itemType);
          currentOffset += itemSize;
        }
        faceTexcoords.set(f, faceTexcoordArray);
        
        // Store face UVs for later use during triangulation
        // When face has texcoord, we need to create separate vertices for each triangle
      } else if (prop.name === 'texnumber') {
        // Regular property: int
        faceTexnum = readByType(payload, currentOffset, prop.type);
        currentOffset += byteSizeOfType(prop.type);
        faceTexnumbers[f] = faceTexnum;
      } else {
        // Unknown property, skip it
        // For list properties, we need to read count and items
        if (prop.type.startsWith('list ')) {
          const parts = prop.type.split(' ');
          if (parts.length === 3) {
            const countType = parts[1];
            const itemType = parts[2];
            const count = readByType(payload, currentOffset, countType);
            currentOffset += byteSizeOfType(countType);
            const itemSize = byteSizeOfType(itemType);
            currentOffset += count * itemSize;
          }
        } else {
          currentOffset += byteSizeOfType(prop.type);
        }
      }
    }
    
    faceBase = currentOffset;
    
    // Get texture number for this face (default to 0 if not present)
    const texnum = hasTexnumber ? (faceTexnumbers[f] ?? 0) : 0;
    
    // Triangulate polygon if needed (fan triangulation)
    // If face has texcoord, collect UVs for each triangle (will create separate vertices later)
    if (vertexCountInFace === 3) {
      indices.push(faceIndices[0], faceIndices[1], faceIndices[2]);
      if (hasTexnumber) {
        triangleTexnumbers.push(texnum);
      }
      
      // Store UVs for this triangle if face has texcoord
      // Flip v coordinate (1.0 - v) because PLY format uses bottom-left origin
      // while most graphics APIs use top-left origin for texture coordinates
      if (hasTexcoord && faceTexcoordArray && faceTexcoordArray.length >= 6) {
        faceVertexUvs.push(
          faceTexcoordArray[0], 1.0 - faceTexcoordArray[1], // vertex 0
          faceTexcoordArray[2], 1.0 - faceTexcoordArray[3], // vertex 1
          faceTexcoordArray[4], 1.0 - faceTexcoordArray[5]  // vertex 2
        );
      }
    } else {
      // Polygon - triangulate using fan method
      const triangleCount = vertexCountInFace - 2;
      for (let i = 1; i < vertexCountInFace - 1; i++) {
        indices.push(faceIndices[0], faceIndices[i], faceIndices[i + 1]);
        if (hasTexnumber) {
          triangleTexnumbers.push(texnum);
        }
        
        // Store UVs for this triangle if face has texcoord
        // Flip v coordinate (1.0 - v) because PLY format uses bottom-left origin
        // while most graphics APIs use top-left origin for texture coordinates
        if (hasTexcoord && faceTexcoordArray && faceTexcoordArray.length >= vertexCountInFace * 2) {
          faceVertexUvs.push(
            faceTexcoordArray[0], 1.0 - faceTexcoordArray[1], // vertex 0 (center of fan)
            faceTexcoordArray[i * 2 + 0], 1.0 - faceTexcoordArray[i * 2 + 1], // vertex i
            faceTexcoordArray[(i + 1) * 2 + 0], 1.0 - faceTexcoordArray[(i + 1) * 2 + 1] // vertex i+1
          );
        }
      }
    }
  }

  // Compute normals if not provided
  if (!hasNormalData) {
    for (let i = 0; i < vertexCount * 3; i++) {
      normal[i] = 0;
    }

    // Calculate face normals and accumulate to vertex normals
    for (let i = 0; i < indices.length; i += 3) {
      const i0 = indices[i];
      const i1 = indices[i + 1];
      const i2 = indices[i + 2];

      const v0x = position[i0 * 3 + 0];
      const v0y = position[i0 * 3 + 1];
      const v0z = position[i0 * 3 + 2];

      const v1x = position[i1 * 3 + 0];
      const v1y = position[i1 * 3 + 1];
      const v1z = position[i1 * 3 + 2];

      const v2x = position[i2 * 3 + 0];
      const v2y = position[i2 * 3 + 1];
      const v2z = position[i2 * 3 + 2];

      const edge1x = v1x - v0x;
      const edge1y = v1y - v0y;
      const edge1z = v1z - v0z;

      const edge2x = v2x - v0x;
      const edge2y = v2y - v0y;
      const edge2z = v2z - v0z;

      const nx = edge1y * edge2z - edge1z * edge2y;
      const ny = edge1z * edge2x - edge1x * edge2z;
      const nz = edge1x * edge2y - edge1y * edge2x;

      normal[i0 * 3 + 0] += nx;
      normal[i0 * 3 + 1] += ny;
      normal[i0 * 3 + 2] += nz;

      normal[i1 * 3 + 0] += nx;
      normal[i1 * 3 + 1] += ny;
      normal[i1 * 3 + 2] += nz;

      normal[i2 * 3 + 0] += nx;
      normal[i2 * 3 + 1] += ny;
      normal[i2 * 3 + 2] += nz;
    }

    for (let v = 0; v < vertexCount; v++) {
      const nx = normal[v * 3 + 0];
      const ny = normal[v * 3 + 1];
      const nz = normal[v * 3 + 2];
      
      const length = Math.sqrt(nx * nx + ny * ny + nz * nz);
      
      if (length > 0.00001) {
        normal[v * 3 + 0] = nx / length;
        normal[v * 3 + 1] = ny / length;
        normal[v * 3 + 2] = nz / length;
      } else {
        // Fallback to default normal if length is too small
        normal[v * 3 + 0] = 0;
        normal[v * 3 + 1] = 1;
        normal[v * 3 + 2] = 0;
      }
    }
  }

  // If we have faceVertexUvs, we need to expand indexed geometry to non-indexed
  let finalPosition = position;
  let finalNormal = normal;
  let finalColor = color;
  let finalUv: Float32Array | undefined = undefined;
  let finalIndices: Uint32Array | undefined = undefined;
  
  if (hasTexcoord && faceVertexUvs.length > 0) {
    const triangleCount = indices.length / 3;
    const expandedPosition = new Float32Array(triangleCount * 3 * 3);
    const expandedNormal = new Float32Array(triangleCount * 3 * 3);
    const expandedColor = color ? new Float32Array(triangleCount * 3 * 3) : undefined;
    finalUv = new Float32Array(faceVertexUvs);
    
    for (let i = 0; i < triangleCount; i++) {
      const baseIdx = i * 3;
      const i0 = indices[baseIdx + 0];
      const i1 = indices[baseIdx + 1];
      const i2 = indices[baseIdx + 2];
      
      expandedPosition[i * 9 + 0] = position[i0 * 3 + 0];
      expandedPosition[i * 9 + 1] = position[i0 * 3 + 1];
      expandedPosition[i * 9 + 2] = position[i0 * 3 + 2];
      expandedPosition[i * 9 + 3] = position[i1 * 3 + 0];
      expandedPosition[i * 9 + 4] = position[i1 * 3 + 1];
      expandedPosition[i * 9 + 5] = position[i1 * 3 + 2];
      expandedPosition[i * 9 + 6] = position[i2 * 3 + 0];
      expandedPosition[i * 9 + 7] = position[i2 * 3 + 1];
      expandedPosition[i * 9 + 8] = position[i2 * 3 + 2];
      
      expandedNormal[i * 9 + 0] = normal[i0 * 3 + 0];
      expandedNormal[i * 9 + 1] = normal[i0 * 3 + 1];
      expandedNormal[i * 9 + 2] = normal[i0 * 3 + 2];
      expandedNormal[i * 9 + 3] = normal[i1 * 3 + 0];
      expandedNormal[i * 9 + 4] = normal[i1 * 3 + 1];
      expandedNormal[i * 9 + 5] = normal[i1 * 3 + 2];
      expandedNormal[i * 9 + 6] = normal[i2 * 3 + 0];
      expandedNormal[i * 9 + 7] = normal[i2 * 3 + 1];
      expandedNormal[i * 9 + 8] = normal[i2 * 3 + 2];
      
      if (expandedColor && color) {
        expandedColor[i * 9 + 0] = color[i0 * 3 + 0];
        expandedColor[i * 9 + 1] = color[i0 * 3 + 1];
        expandedColor[i * 9 + 2] = color[i0 * 3 + 2];
        expandedColor[i * 9 + 3] = color[i1 * 3 + 0];
        expandedColor[i * 9 + 4] = color[i1 * 3 + 1];
        expandedColor[i * 9 + 5] = color[i1 * 3 + 2];
        expandedColor[i * 9 + 6] = color[i2 * 3 + 0];
        expandedColor[i * 9 + 7] = color[i2 * 3 + 1];
        expandedColor[i * 9 + 8] = color[i2 * 3 + 2];
      }
    }
    
    finalPosition = expandedPosition;
    finalNormal = expandedNormal;
    finalColor = expandedColor;
    
    const sequentialIndices = new Uint32Array(triangleCount * 3);
    for (let i = 0; i < triangleCount * 3; i++) {
      sequentialIndices[i] = i;
    }
    finalIndices = sequentialIndices;
  } else {
    finalIndices = new Uint32Array(indices);
    finalUv = uv;
  }
  
  return {
    vertexCount: hasTexcoord && faceVertexUvs.length > 0 ? finalPosition.length / 3 : vertexCount,
    faceCount,
    position: finalPosition,
    normal: finalNormal,
    color: finalColor,
    uv: finalUv,
    indices: finalIndices,
    textureFiles: textureFiles.length > 0 ? textureFiles : undefined,
    triangleTexnumbers: triangleTexnumbers.length > 0 ? triangleTexnumbers : undefined,
  };
}

/**
 * Parse PLY ASCII data for Mesh
 */
function parsePlyMeshASCII(buffer: ArrayBuffer, header: PlyHeader): PlyMeshData {
  const { vertexCount, faceCount, properties, faceProperties, textureFiles, headerByteLength } = header;
  
  const text = new TextDecoder('utf-8').decode(buffer);
  
  const headerEnd = text.indexOf('end_header');
  if (headerEnd < 0) {
    throw new Error('PLY: Invalid PLY header');
  }
  
  let bodyStart = headerEnd + 'end_header'.length;
  while (bodyStart < text.length && (text[bodyStart] === ' ' || text[bodyStart] === '\n' || text[bodyStart] === '\r')) {
    bodyStart++;
  }
  
  const bodyText = text.substring(bodyStart);
  const tokens = bodyText.split(/\s+/).filter(token => token.length > 0);
  
  let tokenIndex = 0;
  
  const has = (n: string) => properties.find((p) => p.name === n) != null;
  
  const parseASCIINumber = (type: string): number => {
    if (tokenIndex >= tokens.length) {
      throw new Error('PLY: Unexpected end of file');
    }
    const value = tokens[tokenIndex++];
    
    switch (type) {
      case 'char': case 'uchar': case 'short': case 'ushort': case 'int': case 'uint':
      case 'int8': case 'uint8': case 'int16': case 'uint16': case 'int32': case 'uint32':
        return parseInt(value);
      case 'float': case 'double': case 'float32': case 'float64':
        return parseFloat(value);
      default:
        return parseFloat(value);
    }
  };
  
  const position = new Float32Array(vertexCount * 3);
  const hasNormalData = has('nx') && has('ny') && has('nz');
  const normal = hasNormalData ? new Float32Array(vertexCount * 3) : new Float32Array(vertexCount * 3);
  const color = (has('red') || has('r')) && (has('green') || has('g')) && (has('blue') || has('b')) 
    ? new Float32Array(vertexCount * 3) : undefined;
  const hasVertexUV = (has('u') || has('s')) && (has('v') || has('t'));
  const hasTexcoord = faceProperties?.some(p => p.name === 'texcoord') || false;
  const uv = hasVertexUV || hasTexcoord 
    ? new Float32Array(vertexCount * 2) : undefined;
  
  const faceTexcoords: Map<number, Float32Array> = new Map();
  const hasTexnumber = faceProperties?.some(p => p.name === 'texnumber') || false;
  const faceTexnumbers: number[] = hasTexnumber ? new Array(faceCount) : [];
  const indices: number[] = [];
  const triangleTexnumbers: number[] = [];
  const faceVertexUvs: number[] = [];
  
  const propIndex = (n: string) => properties.findIndex((p) => p.name === n);
  const xIdx = propIndex('x');
  const yIdx = propIndex('y');
  const zIdx = propIndex('z');
  const nxIdx = hasNormalData ? propIndex('nx') : -1;
  const nyIdx = hasNormalData ? propIndex('ny') : -1;
  const nzIdx = hasNormalData ? propIndex('nz') : -1;
  const rIdx = color ? (propIndex('red') >= 0 ? propIndex('red') : propIndex('r')) : -1;
  const gIdx = color ? (propIndex('green') >= 0 ? propIndex('green') : propIndex('g')) : -1;
  const bIdx = color ? (propIndex('blue') >= 0 ? propIndex('blue') : propIndex('b')) : -1;
  const uIdx = uv && hasVertexUV ? (propIndex('u') >= 0 ? propIndex('u') : propIndex('s')) : -1;
  const vIdx = uv && hasVertexUV ? (propIndex('v') >= 0 ? propIndex('v') : propIndex('t')) : -1;
  
  // Parse vertices
  for (let v = 0; v < vertexCount; v++) {
    for (let pIdx = 0; pIdx < properties.length; pIdx++) {
      const prop = properties[pIdx];
      const value = parseASCIINumber(prop.type);
      
      if (pIdx === xIdx) {
        position[v * 3 + 0] = value;
      } else if (pIdx === yIdx) {
        position[v * 3 + 1] = value;
      } else if (pIdx === zIdx) {
        position[v * 3 + 2] = value;
      } else if (pIdx === nxIdx) {
        normal[v * 3 + 0] = value;
      } else if (pIdx === nyIdx) {
        normal[v * 3 + 1] = value;
      } else if (pIdx === nzIdx) {
        normal[v * 3 + 2] = value;
      } else if (pIdx === rIdx && color) {
        color[v * 3 + 0] = prop.type === 'uchar' || prop.type === 'uint8' ? value / 255.0 : value;
      } else if (pIdx === gIdx && color) {
        color[v * 3 + 1] = prop.type === 'uchar' || prop.type === 'uint8' ? value / 255.0 : value;
      } else if (pIdx === bIdx && color) {
        color[v * 3 + 2] = prop.type === 'uchar' || prop.type === 'uint8' ? value / 255.0 : value;
      } else if (pIdx === uIdx && uv) {
        uv[v * 2 + 0] = value;
      } else if (pIdx === vIdx && uv) {
        uv[v * 2 + 1] = value;
      }
    }
  }
  
  // Parse faces
  for (let f = 0; f < faceCount; f++) {
    let faceIndices: number[] = [];
    let faceTexcoordArray: Float32Array | undefined = undefined;
    let faceTexnum = 0;
    
    for (const prop of faceProperties || []) {
      if (prop.name === 'vertex_indices') {
        const parts = prop.type.split(' ');
        const countType = parts[1];
        const itemType = parts[2];
        
        const vertexCountInFace = parseASCIINumber(countType);
        faceIndices = [];
        for (let i = 0; i < vertexCountInFace; i++) {
          faceIndices.push(parseASCIINumber(itemType));
        }
      } else if (prop.name === 'texcoord') {
        const parts = prop.type.split(' ');
        const countType = parts[1];
        const itemType = parts[2];
        
        const texcoordCount = parseASCIINumber(countType);
        faceTexcoordArray = new Float32Array(texcoordCount);
        for (let i = 0; i < texcoordCount; i++) {
          faceTexcoordArray[i] = parseASCIINumber(itemType);
        }
        faceTexcoords.set(f, faceTexcoordArray);
      } else if (prop.name === 'texnumber') {
        faceTexnum = parseASCIINumber(prop.type);
        faceTexnumbers[f] = faceTexnum;
      }
    }
    
    // Triangulate
    const vertexCountInFace = faceIndices.length;
    const texnum = hasTexnumber ? (faceTexnumbers[f] ?? 0) : 0;
    
    if (vertexCountInFace === 3) {
      indices.push(faceIndices[0], faceIndices[1], faceIndices[2]);
      if (hasTexnumber) {
        triangleTexnumbers.push(texnum);
      }
      
      if (hasTexcoord && faceTexcoordArray && faceTexcoordArray.length >= 6) {
        faceVertexUvs.push(
          faceTexcoordArray[0], 1.0 - faceTexcoordArray[1],
          faceTexcoordArray[2], 1.0 - faceTexcoordArray[3],
          faceTexcoordArray[4], 1.0 - faceTexcoordArray[5]
        );
      }
    } else {
      for (let i = 1; i < vertexCountInFace - 1; i++) {
        indices.push(faceIndices[0], faceIndices[i], faceIndices[i + 1]);
        if (hasTexnumber) {
          triangleTexnumbers.push(texnum);
        }
        
        if (hasTexcoord && faceTexcoordArray && faceTexcoordArray.length >= vertexCountInFace * 2) {
          faceVertexUvs.push(
            faceTexcoordArray[0], 1.0 - faceTexcoordArray[1],
            faceTexcoordArray[i * 2 + 0], 1.0 - faceTexcoordArray[i * 2 + 1],
            faceTexcoordArray[(i + 1) * 2 + 0], 1.0 - faceTexcoordArray[(i + 1) * 2 + 1]
          );
        }
      }
    }
  }
  
  // Compute normals if not provided
  if (!hasNormalData) {
    for (let i = 0; i < vertexCount * 3; i++) {
      normal[i] = 0;
    }
    
    for (let i = 0; i < indices.length; i += 3) {
      const i0 = indices[i];
      const i1 = indices[i + 1];
      const i2 = indices[i + 2];
      
      const v0x = position[i0 * 3 + 0];
      const v0y = position[i0 * 3 + 1];
      const v0z = position[i0 * 3 + 2];
      
      const v1x = position[i1 * 3 + 0];
      const v1y = position[i1 * 3 + 1];
      const v1z = position[i1 * 3 + 2];
      
      const v2x = position[i2 * 3 + 0];
      const v2y = position[i2 * 3 + 1];
      const v2z = position[i2 * 3 + 2];
      
      const edge1x = v1x - v0x;
      const edge1y = v1y - v0y;
      const edge1z = v1z - v0z;
      
      const edge2x = v2x - v0x;
      const edge2y = v2y - v0y;
      const edge2z = v2z - v0z;
      
      const nx = edge1y * edge2z - edge1z * edge2y;
      const ny = edge1z * edge2x - edge1x * edge2z;
      const nz = edge1x * edge2y - edge1y * edge2x;
      
      normal[i0 * 3 + 0] += nx;
      normal[i0 * 3 + 1] += ny;
      normal[i0 * 3 + 2] += nz;
      
      normal[i1 * 3 + 0] += nx;
      normal[i1 * 3 + 1] += ny;
      normal[i1 * 3 + 2] += nz;
      
      normal[i2 * 3 + 0] += nx;
      normal[i2 * 3 + 1] += ny;
      normal[i2 * 3 + 2] += nz;
    }
    
    for (let v = 0; v < vertexCount; v++) {
      const nx = normal[v * 3 + 0];
      const ny = normal[v * 3 + 1];
      const nz = normal[v * 3 + 2];
      
      const length = Math.sqrt(nx * nx + ny * ny + nz * nz);
      
      if (length > 0.00001) {
        normal[v * 3 + 0] = nx / length;
        normal[v * 3 + 1] = ny / length;
        normal[v * 3 + 2] = nz / length;
      } else {
        normal[v * 3 + 0] = 0;
        normal[v * 3 + 1] = 1;
        normal[v * 3 + 2] = 0;
      }
    }
  }
  
  // Handle faceVertexUvs expansion (same as binary version)
  let finalPosition = position;
  let finalNormal = normal;
  let finalColor = color;
  let finalUv: Float32Array | undefined = undefined;
  let finalIndices: Uint32Array | undefined = undefined;
  
  if (hasTexcoord && faceVertexUvs.length > 0) {
    const triangleCount = indices.length / 3;
    const expandedPosition = new Float32Array(triangleCount * 3 * 3);
    const expandedNormal = new Float32Array(triangleCount * 3 * 3);
    const expandedColor = color ? new Float32Array(triangleCount * 3 * 3) : undefined;
    finalUv = new Float32Array(faceVertexUvs);
    
    for (let i = 0; i < triangleCount; i++) {
      const baseIdx = i * 3;
      const i0 = indices[baseIdx + 0];
      const i1 = indices[baseIdx + 1];
      const i2 = indices[baseIdx + 2];
      
      expandedPosition[i * 9 + 0] = position[i0 * 3 + 0];
      expandedPosition[i * 9 + 1] = position[i0 * 3 + 1];
      expandedPosition[i * 9 + 2] = position[i0 * 3 + 2];
      expandedPosition[i * 9 + 3] = position[i1 * 3 + 0];
      expandedPosition[i * 9 + 4] = position[i1 * 3 + 1];
      expandedPosition[i * 9 + 5] = position[i1 * 3 + 2];
      expandedPosition[i * 9 + 6] = position[i2 * 3 + 0];
      expandedPosition[i * 9 + 7] = position[i2 * 3 + 1];
      expandedPosition[i * 9 + 8] = position[i2 * 3 + 2];
      
      expandedNormal[i * 9 + 0] = normal[i0 * 3 + 0];
      expandedNormal[i * 9 + 1] = normal[i0 * 3 + 1];
      expandedNormal[i * 9 + 2] = normal[i0 * 3 + 2];
      expandedNormal[i * 9 + 3] = normal[i1 * 3 + 0];
      expandedNormal[i * 9 + 4] = normal[i1 * 3 + 1];
      expandedNormal[i * 9 + 5] = normal[i1 * 3 + 2];
      expandedNormal[i * 9 + 6] = normal[i2 * 3 + 0];
      expandedNormal[i * 9 + 7] = normal[i2 * 3 + 1];
      expandedNormal[i * 9 + 8] = normal[i2 * 3 + 2];
      
      if (expandedColor && color) {
        expandedColor[i * 9 + 0] = color[i0 * 3 + 0];
        expandedColor[i * 9 + 1] = color[i0 * 3 + 1];
        expandedColor[i * 9 + 2] = color[i0 * 3 + 2];
        expandedColor[i * 9 + 3] = color[i1 * 3 + 0];
        expandedColor[i * 9 + 4] = color[i1 * 3 + 1];
        expandedColor[i * 9 + 5] = color[i1 * 3 + 2];
        expandedColor[i * 9 + 6] = color[i2 * 3 + 0];
        expandedColor[i * 9 + 7] = color[i2 * 3 + 1];
        expandedColor[i * 9 + 8] = color[i2 * 3 + 2];
      }
    }
    
    finalPosition = expandedPosition;
    finalNormal = expandedNormal;
    finalColor = expandedColor;
    
    const sequentialIndices = new Uint32Array(triangleCount * 3);
    for (let i = 0; i < triangleCount * 3; i++) {
      sequentialIndices[i] = i;
    }
    finalIndices = sequentialIndices;
  } else {
    finalIndices = new Uint32Array(indices);
    finalUv = uv;
  }
  
  return {
    vertexCount: hasTexcoord && faceVertexUvs.length > 0 ? finalPosition.length / 3 : vertexCount,
    faceCount,
    position: finalPosition,
    normal: finalNormal,
    color: finalColor,
    uv: finalUv,
    indices: finalIndices,
    textureFiles: textureFiles.length > 0 ? textureFiles : undefined,
    triangleTexnumbers: triangleTexnumbers.length > 0 ? triangleTexnumbers : undefined,
  };
}

/**
 * Parse PLY data for Point Cloud (supports both binary and ASCII)
 */
export function parsePlyPointCloud(buffer: ArrayBuffer): PlyPointCloudData {
  const header = parsePlyHeader(buffer);
  const { format } = header;
  
  if (format === 'ascii') {
    return parsePlyPointCloudASCII(buffer, header);
  } else {
    return parsePlyPointCloudBinary(buffer, header);
  }
}

/**
 * Parse PLY binary data for Point Cloud
 */
function parsePlyPointCloudBinary(buffer: ArrayBuffer, header: PlyHeader): PlyPointCloudData {
  const { vertexCount, properties, headerByteLength } = header;
  
  const payload = new DataView(buffer, headerByteLength);

  const has = (n: string) => properties.find((p) => p.name === n) != null;
  const propIndex = (n: string) => properties.findIndex((p) => p.name === n);

  const position = new Float32Array(vertexCount * 3);
  const hasColor = (has('red') || has('r')) && (has('green') || has('g')) && (has('blue') || has('b'));
  const hasAlpha = has('alpha') || has('a');
  const color = hasColor ? new Uint8Array(vertexCount * 4) : undefined;

  const propOffsets: number[] = [];
  let stride = 0;
  for (const p of properties) {
    propOffsets.push(stride);
    stride += byteSizeOfType(p.type);
  }

  let base = 0;
  for (let v = 0; v < vertexCount; v++) {
    const vOffset = base;
    
    const ix = propIndex('x');
    const iy = propIndex('y');
    const iz = propIndex('z');
    if (ix < 0 || iy < 0 || iz < 0) {
      throw new Error('PLY: Missing x/y/z for vertex');
    }
    position[v * 3 + 0] = readByType(payload, vOffset + propOffsets[ix], properties[ix].type);
    position[v * 3 + 1] = readByType(payload, vOffset + propOffsets[iy], properties[iy].type);
    position[v * 3 + 2] = readByType(payload, vOffset + propOffsets[iz], properties[iz].type);

    if (color) {
      const rIdx = propIndex('red') >= 0 ? propIndex('red') : propIndex('r');
      const gIdx = propIndex('green') >= 0 ? propIndex('green') : propIndex('g');
      const bIdx = propIndex('blue') >= 0 ? propIndex('blue') : propIndex('b');
      const aIdx = hasAlpha ? (propIndex('alpha') >= 0 ? propIndex('alpha') : propIndex('a')) : -1;
      
      if (rIdx >= 0 && gIdx >= 0 && bIdx >= 0) {
        let r = readByType(payload, vOffset + propOffsets[rIdx], properties[rIdx].type);
        let g = readByType(payload, vOffset + propOffsets[gIdx], properties[gIdx].type);
        let b = readByType(payload, vOffset + propOffsets[bIdx], properties[bIdx].type);
        let a = 255;
        
        if (properties[rIdx].type === 'float' || properties[rIdx].type === 'float32' || properties[rIdx].type === 'double' || properties[rIdx].type === 'float64') {
          r = Math.round(r * 255);
          g = Math.round(g * 255);
          b = Math.round(b * 255);
        }
        
        if (aIdx >= 0) {
          a = readByType(payload, vOffset + propOffsets[aIdx], properties[aIdx].type);
          if (properties[aIdx].type === 'float' || properties[aIdx].type === 'float32' || properties[aIdx].type === 'double' || properties[aIdx].type === 'float64') {
            a = Math.round(a * 255);
          }
        }
        
        color[v * 4 + 0] = Math.max(0, Math.min(255, r));
        color[v * 4 + 1] = Math.max(0, Math.min(255, g));
        color[v * 4 + 2] = Math.max(0, Math.min(255, b));
        color[v * 4 + 3] = Math.max(0, Math.min(255, a));
      }
    }

    base += stride;
  }

  return {
    vertexCount,
    position,
    color,
  };
}

/**
 * Parse PLY ASCII data for Point Cloud
 */
function parsePlyPointCloudASCII(buffer: ArrayBuffer, header: PlyHeader): PlyPointCloudData {
  const { vertexCount, properties } = header;
  
  const text = new TextDecoder('utf-8').decode(buffer);
  
  const headerEnd = text.indexOf('end_header');
  if (headerEnd < 0) {
    throw new Error('PLY: Invalid PLY header');
  }
  
  let bodyStart = headerEnd + 'end_header'.length;
  while (bodyStart < text.length && (text[bodyStart] === ' ' || text[bodyStart] === '\n' || text[bodyStart] === '\r')) {
    bodyStart++;
  }
  
  const bodyText = text.substring(bodyStart);
  const tokens = bodyText.split(/\s+/).filter(token => token.length > 0);
  
  let tokenIndex = 0;
  
  const has = (n: string) => properties.find((p) => p.name === n) != null;
  
  const parseASCIINumber = (type: string): number => {
    if (tokenIndex >= tokens.length) {
      throw new Error('PLY: Unexpected end of file');
    }
    const value = tokens[tokenIndex++];
    
    switch (type) {
      case 'char': case 'uchar': case 'short': case 'ushort': case 'int': case 'uint':
      case 'int8': case 'uint8': case 'int16': case 'uint16': case 'int32': case 'uint32':
        return parseInt(value);
      case 'float': case 'double': case 'float32': case 'float64':
        return parseFloat(value);
      default:
        return parseFloat(value);
    }
  };
  
  const position = new Float32Array(vertexCount * 3);
  const hasColor = (has('red') || has('r')) && (has('green') || has('g')) && (has('blue') || has('b'));
  const hasAlpha = has('alpha') || has('a');
  const color = hasColor ? new Uint8Array(vertexCount * 4) : undefined;
  
  const propIndex = (n: string) => properties.findIndex((p) => p.name === n);
  const xIdx = propIndex('x');
  const yIdx = propIndex('y');
  const zIdx = propIndex('z');
  const rIdx = hasColor ? (propIndex('red') >= 0 ? propIndex('red') : propIndex('r')) : -1;
  const gIdx = hasColor ? (propIndex('green') >= 0 ? propIndex('green') : propIndex('g')) : -1;
  const bIdx = hasColor ? (propIndex('blue') >= 0 ? propIndex('blue') : propIndex('b')) : -1;
  const aIdx = hasAlpha ? (propIndex('alpha') >= 0 ? propIndex('alpha') : propIndex('a')) : -1;
  
  for (let v = 0; v < vertexCount; v++) {
    for (let pIdx = 0; pIdx < properties.length; pIdx++) {
      const prop = properties[pIdx];
      const value = parseASCIINumber(prop.type);
      
      if (pIdx === xIdx) {
        position[v * 3 + 0] = value;
      } else if (pIdx === yIdx) {
        position[v * 3 + 1] = value;
      } else if (pIdx === zIdx) {
        position[v * 3 + 2] = value;
      } else if (pIdx === rIdx && color) {
        const r = prop.type === 'uchar' || prop.type === 'uint8' ? value : Math.round(value * 255);
        color[v * 4 + 0] = Math.max(0, Math.min(255, r));
      } else if (pIdx === gIdx && color) {
        const g = prop.type === 'uchar' || prop.type === 'uint8' ? value : Math.round(value * 255);
        color[v * 4 + 1] = Math.max(0, Math.min(255, g));
      } else if (pIdx === bIdx && color) {
        const b = prop.type === 'uchar' || prop.type === 'uint8' ? value : Math.round(value * 255);
        color[v * 4 + 2] = Math.max(0, Math.min(255, b));
      } else if (pIdx === aIdx && color) {
        const a = prop.type === 'uchar' || prop.type === 'uint8' ? value : Math.round(value * 255);
        color[v * 4 + 3] = Math.max(0, Math.min(255, a));
      }
    }
    
    if (color && aIdx < 0) {
      color[v * 4 + 3] = 255;
    }
  }
  
  return {
    vertexCount,
    position,
    color,
  };
}
