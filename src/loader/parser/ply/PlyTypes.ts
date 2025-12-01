/**
 * PLY property definition
 */
export type PlyProperty = {
  name: string;
  type: string; // e.g., float, float32, double, uchar, uint8
};


export const enum PlyMode {
  Splat = 0,
  PointCloud = 1,
  Mesh = 2,
}

export const splatProperties = ["x", "y", "z", "scale_0", "scale_1", "scale_2", "opacity", "rot_0", "rot_1", "rot_2", "rot_3"];
export const splatColorProperties = ["red", "green", "blue", "f_dc_0", "f_dc_1", "f_dc_2"];


/**
 * PLY header information
 */
export type PlyHeader = {
  format: string;
  vertexCount: number;
  faceCount: number;
  properties: PlyProperty[];
  faceProperties?: PlyProperty[]; // Properties for face element
  textureFiles: string[]; // Texture file paths from comments
  headerByteLength: number;
  mode: PlyMode;
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

/**
 * Parsed PLY data for Mesh
 */
export type PlyMeshData = {
  vertexCount: number;
  faceCount: number;
  position: Float32Array;
  normal: Float32Array; // Always computed if not provided in file
  color?: Float32Array;
  uv?: Float32Array;
  indices: Uint32Array;
  textureFiles?: string[]; // Texture file paths
  triangleTexnumbers?: number[]; // Texture number for each triangle (mapped to indices, 3 indices per triangle)
};

