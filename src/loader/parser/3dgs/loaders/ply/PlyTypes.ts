/**
 * PLY property definition
 */
export type PlyProperty = {
  name: string;
  type: string; // e.g., float, float32, double, uchar, uint8
};

/**
 * PLY header information
 */
export type PlyHeader = {
  format: string;
  vertexCount: number;
  properties: PlyProperty[];
  headerByteLength: number;
};

/**
 * Parsed PLY data for Gaussian Splatting
 */
export type PlyGaussianSplatData = {
  vertexCount: number;
  position: Float32Array;
  scale?: Float32Array;
  rotation?: Float32Array;
  opacity?: Float32Array;
  sh?: {
    order: number;
    coeffs: Float32Array;
  };
};

