import {
  TileSetChild,
  BoundingVolumeData,
  TileContent,
  TileSetChildContent,
} from './TileSet';
import { Object3D } from '../../../../core/entities/Object3D';
import { BoundingVolume } from './BoundingVolume';
import { UNLOADED, LOADING, PARSING, LOADED, FAILED } from './constants';
import { Matrix4 } from '../../../../math/Matrix4';

/**
 * tile cache data
 */
export interface TileCache {
  scene?: Object3D | null;
  boundingVolume?: BoundingVolume | null;
  transfrom?: Matrix4;
  worldTransform?: Matrix4;
  transformInverse?: Matrix4;
  // [key: string]: any;
}

/**
 * runtime tile data structure
 * based on TileSetChild, but added runtime state and cache
 */
export class Tile {
  public boundingVolume: BoundingVolumeData;
  public geometricError: number;
  public refine?: 'REPLACE' | 'ADD';
  public content?: TileContent;
  public contents?: TileSetChildContent[];
  public transform?: number[];
  public extensions?: Record<string, any>;
  public extras?: Record<string, any>;

  public parent: Tile | null = null;
  public children: Tile[] = [];

  public loadingState: number = UNLOADED; // UNLOADED | LOADING | PARSING | LOADED | FAILED
  public used: boolean = false; // whether the tile is used in current frame
  public visible: boolean = false; // whether the tile is visible
  public active: boolean = false; // whether the tile is active (content is loaded)
  public inFrustum: boolean = false; // whether the tile is in the frustum
  public error: number = Infinity; // screen space error (SSE)
  public distanceFromCamera: number = Infinity; // distance to the camera
  public depth: number = 0; // depth from the root node
  public depthFromRenderedParent: number = 0; // depth from the rendered parent node
  public lastFrameVisited: number = -1; // last visited frame number
  public isLeaf: boolean = false; // whether the tile is a leaf node
  public allChildrenReady: boolean = false; // whether all children are ready
  public hasContent: boolean = false; // whether the tile has content
  public hasRenderableContent: boolean = false; // whether the tile has renderable content
  public hasUnrenderableContent: boolean = false; // whether the tile has unrenderable content (e.g. external tileset)
  public childrenProcessed: number = 0; // number of processed children
  public usedLastFrame: boolean = false; // whether the tile was used in the last frame (to avoid flickering)
  public priority?: number; // user set priority
  public canTraverse: boolean = false; // whether the tile can be traversed to the next layer
  public canTraverseFrame: number = -1; // frame number when the tile can be traversed to the next layer
  public basePath: string = ''; // base path of the tile

  public cached: TileCache = {};

  constructor(tileData: TileSetChild, parent: Tile | null = null) {
    this.boundingVolume = tileData.boundingVolume;
    this.geometricError = tileData.geometricError;
    this.refine = tileData.refine;
    this.content = tileData.content;
    this.contents = tileData.contents;
    this.transform = tileData.transform;
    this.extensions = tileData.extensions;
    this.extras = tileData.extras;

    this.parent = parent;
    this.depth = parent ? parent.depth + 1 : 0;
    this.depthFromRenderedParent = parent?.hasContent
      ? 0
      : parent
        ? parent.depthFromRenderedParent + 1
        : 0;

    this.hasContent = !!(
      this.content || (this.contents && this.contents.length > 0)
    );

    if (this.content?.uri) {
      const uri = this.content.uri.toLowerCase();
      this.hasUnrenderableContent = uri.endsWith('tileset.json');
      this.hasRenderableContent = !this.hasUnrenderableContent;
    } else if (this.contents && this.contents.length > 0) {
      this.hasRenderableContent = true;
    }
  }

  /**
   * add a child node
   */
  addChild(child: Tile): void {
    child.parent = this;
    child.depth = this.depth + 1;
    child.depthFromRenderedParent = this.hasContent
      ? 0
      : this.depthFromRenderedParent + 1;
    this.children.push(child);
  }

  /**
   * reset the frame state (called at the beginning of each frame)
   */
  resetFrameState(frameCount: number): void {
    if (this.lastFrameVisited !== frameCount) {
      this.lastFrameVisited = frameCount;
      this.used = false;
      this.inFrustum = false;
      this.isLeaf = false;
      this.visible = false;
      this.active = false;
      this.error = Infinity;
      this.distanceFromCamera = Infinity;
      this.allChildrenReady = false;
    }
  }
}

