/**
 * bounding volume data type
 * support three types of bounding volumes: box, sphere, region
 */
export type BoundingVolumeData = {
  /** 12 numbers: center(3) + x-axis direction + half-length(3) + y-axis direction + half-length(3) + z-axis direction + half-length(3) */
  box?: number[];
  /** 4 numbers: center(3) + radius(1) */
  sphere?: number[];
  /** 6 numbers: [west, south, east, north, minHeight, maxHeight] */
  region?: number[];
};

/**
 * tile content type
 */
export type TileContent = {
  uri: string;
  extensions?: Record<string, any>;
  extras?: Record<string, any>;
};

/**
 * asset information type
 */
export type TileSetAsset = {
  generatetool?: string;
  version: string;
  tilesetVersion?: string;
  gltfUpAxis?: 'x' | 'y' | 'z';
  extensions?: Record<string, any>;
};

/**
 * extend TileSet class
 */
export class TileSet {
  public asset: TileSetAsset;
  public extras?: { scenetree?: string; [key: string]: any };
  public geometricError: number;
  public properties?: Record<string, any>;
  public refine?: 'REPLACE' | 'ADD';
  public root: TileSetRoot;
  public extensionsUsed?: string[];
  public extensionsRequired?: string[];
  public extensions?: Record<string, any>;
}

/**
 * extend TileSetRoot class
 */
export class TileSetRoot {
  public boundingVolume: BoundingVolumeData;
  public children?: TileSetChild[];
  public geometricError: number;
  public transform?: number[]; // 16 numbers of transformation matrix
  public content?: TileContent;
  public contents?: TileSetChildContent[];
  public refine?: 'REPLACE' | 'ADD';
  public extensions?: Record<string, any>;
  public extras?: Record<string, any>;
}

/**
 * extend TileSetChild class
 */
export class TileSetChild {
  public boundingVolume: BoundingVolumeData;
  public geometricError: number;
  public refine?: 'REPLACE' | 'ADD';
  public content?: TileContent;
  public contents?: TileSetChildContent[];
  public children?: TileSetChild[];
  public transform?: number[];
  public extensions?: Record<string, any>;
  public extras?: Record<string, any>;
}

/**
 * extend TileSetChildContent class
 */
export class TileSetChildContent {
  public uri: string;
  public group?: number;
  public metadata?: TileSetChildContentMetaData;
}

export class TileSetChildContentMetaData {
  public class?: string;
  public properties?: { vertices?: number; materials?: number; [key: string]: any };
}

