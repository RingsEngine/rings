/**
 * Get byte size for PLY data type
 */
export function byteSizeOfType(t: string): number {
  switch (t) {
    case 'char':
    case 'uchar':
    case 'uint8':
    case 'int8':
      return 1;
    case 'short':
    case 'ushort':
    case 'int16':
    case 'uint16':
      return 2;
    case 'int':
    case 'uint':
    case 'int32':
    case 'uint32':
    case 'float':
    case 'float32':
      return 4;
    case 'double':
    case 'float64':
      return 8;
    default:
      return 4;
  }
}

/**
 * Read value from DataView by PLY type
 */
export function readByType(view: DataView, offset: number, type: string): number {
  switch (type) {
    case 'char':
    case 'int8':
      return view.getInt8(offset);
    case 'uchar':
    case 'uint8':
      return view.getUint8(offset);
    case 'short':
    case 'int16':
      return view.getInt16(offset, true);
    case 'ushort':
    case 'uint16':
      return view.getUint16(offset, true);
    case 'int':
    case 'int32':
      return view.getInt32(offset, true);
    case 'uint':
    case 'uint32':
      return view.getUint32(offset, true);
    case 'double':
    case 'float64':
      return view.getFloat64(offset, true);
    case 'float':
    case 'float32':
    default:
      return view.getFloat32(offset, true);
  }
}

/**
 * Infer Spherical Harmonics order from coefficients per color
 * coeffsPerColor = (order+1)^2
 */
export function inferSHOrder(coeffsPerColor: number): number {
  const root = Math.round(Math.sqrt(coeffsPerColor));
  return Math.max(0, root - 1);
}

