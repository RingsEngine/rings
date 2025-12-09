/**
 * Type definitions for LAS format
 * Supports both ASCII (Log ASCII Standard) and Binary (LIDAR Point Cloud) formats
 */

export interface LASMetadata {
  version: number;
  wrap: boolean;
}

export interface LASWellParams {
  [key: string]: {
    unit: string;
    value: string | number;
    description: string;
  };
}

export interface LASCurveParams {
  [key: string]: {
    unit: string;
    value: string;
    description: string;
  };
}

/**
 * ASCII LAS (Log ASCII Standard) data structure
 */
export interface LASData {
  headers: string[]; // Column names array
  data: Array<Array<string | number>>; // 2D data array
  wellParams: LASWellParams; // Well parameters
  curveParams: LASCurveParams; // Curve parameters
  metadata: LASMetadata; // Metadata (version, wrap)
  nullValue: number; // NULL value for invalid data
}

/**
 * Binary LAS (LIDAR Point Cloud) data structure
 */
export interface LASBinaryData {
  format: 'binary';
  version: number;
  pointDataFormat: number;
  numPoints: number;
  positions: Float32Array; // 3D positions (x, y, z) for each point
  colors: Uint8Array; // RGBA colors for each point
  bbox: {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    zMin: number;
    zMax: number;
  };
  scale: {
    x: number;
    y: number;
    z: number;
  };
  offset: {
    x: number;
    y: number;
    z: number;
  };
}

/**
 * Union type for both ASCII and Binary LAS data
 */
export type LASParsedData = LASData | LASBinaryData;

export enum LASVisualizationMode {
  PointCloud = 'pointcloud', // Point cloud mode (depth as Z, curve values as X/Y)
  Curve = 'curve', // Curve mode (3D curve using FatLine)
  WellTrajectory = 'trajectory' // Well trajectory mode (3D well path)
}

