/**
 * Gaussian Splatting file format types
 */
export enum GSplatFormat {
  PLY = 'ply',
  SPLAT = 'splat',
  KSPLAT = 'ksplat',
  UNKNOWN = 'unknown',
}

/**
 * Detect Gaussian Splatting file format from buffer
 */
export function detectGSplatFormat(buffer: ArrayBuffer): GSplatFormat {
  // Check minimum size
  if (buffer.byteLength < 16) {
    return GSplatFormat.UNKNOWN;
  }

  // Check PLY format (ASCII header starting with "ply")
  const headerBytes = new Uint8Array(buffer, 0, Math.min(512, buffer.byteLength));
  const headerText = new TextDecoder('utf-8').decode(headerBytes);
  
  if (headerText.startsWith('ply')) {
    return GSplatFormat.PLY;
  }

  // Check SPLAT format (custom binary format)
  // SPLAT files typically start with a specific magic number or have a recognizable structure
  // TODO: Add SPLAT format detection when implementing SPLAT loader
  
  // Check KSPLAT format (compressed format)
  // KSPLAT files typically have a specific header
  // TODO: Add KSPLAT format detection when implementing KSPLAT loader

  return GSplatFormat.UNKNOWN;
}

