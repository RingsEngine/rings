import { Tile } from './core/Tile';
import { TileSet, TileSetChild } from './core/TileSet';
import { LRUCache } from './utils/LRUCache';
import { PriorityQueue } from './utils/PriorityQueue';
import { UNLOADED, LOADING, PARSING, LOADED, FAILED } from './core/constants';
import { traverseSet } from './utils/TraversalUtils';
import {
  markUsedTiles,
  markUsedSetLeaves,
  markVisibleTiles,
  toggleTiles,
} from './core/traverseFunctions';
import { BoundingVolume } from './core/BoundingVolume';
import { Matrix4 } from '../../../math/Matrix4';
import { Vector3 } from '../../../math/Vector3';
import { Object3D } from '../../../core/entities/Object3D';
import { BoundingBox } from '../../../core/bound/BoundingBox';
import { BoundingSphere } from '../../../core/bound/BoundingSphere';
import { priorityCallback, lruPriorityCallback } from './core/priorityCallbacks';
import { Camera3D } from '../../../core/Camera3D';
import { CameraType } from '../../../core/CameraType';
import { Frustum } from '../../../core/bound/Frustum';
import { Transform } from '../../../components/Transform';
import { Orientation3D } from '../../../math/Orientation3D';
import { Engine3D } from '../../../Engine3D';
import { MeshRenderer } from '../../../components/renderer/MeshRenderer';
import { Quaternion } from '../../../math/Quaternion';
import { FileLoader } from '../../FileLoader';
import { B3DMParser } from '../B3DMParser';

/**
 * Plugin interface
 */
export interface TilesRendererPlugin {
  name: string;
  priority?: number;
  init?(renderer: TilesRenderer): void;
  dispose?(): void;
  [key: string]: any;
}

/**
 * Statistics
 */
export interface TilesRendererStats {
  parsing: number;
  downloading: number;
  failed: number;
  inFrustum: number;
  used: number;
  active: number;
  visible: number;
  inCacheSinceLoad: number;
}

/**
 * View frustum and error calculation result interface
 */
export interface ViewErrorTarget {
  inView: boolean;
  error: number;
  distanceFromCamera: number;
}

/**
 * Memory statistics
 */
export interface MemoryStats {
  totalTiles: number; // total tiles
  loadedTiles: number; // loaded tiles
  cachedTiles: number; // cached tiles
  totalBytes: number; // total bytes
  usedBytes: number; // used bytes
  freeBytes: number; // free bytes
  cacheHitRate: number; // cache hit rate
}

/**
 * Performance statistics
 */
export interface PerformanceStats {
  updateTime: number; // update time (ms)
  traverseTime: number; // traverse time (ms)
  markUsedTime: number; // mark used time (ms)
  markVisibleTime: number; // mark visible time (ms)
  toggleTime: number; // toggle time (ms)
  queueProcessTime: number; // queue process time (ms)
}

/**
 * Performance configuration options
 */
export interface PerformanceOptions {
  // LRU cache configuration
  lruCacheMinSize?: number; // minimum cache item size
  lruCacheMaxSize?: number; // maximum cache item size
  lruCacheMinBytes?: number; // minimum bytes
  lruCacheMaxBytes?: number; // maximum bytes
  lruCacheUnloadPercent?: number; // unload percentage

  // queue configuration
  downloadQueueMaxJobs?: number; // download queue maximum concurrent jobs
  parseQueueMaxJobs?: number; // parse queue maximum concurrent jobs
  processQueueMaxJobs?: number; // process queue maximum concurrent jobs

  // performance optimization configuration
  enablePerformanceStats?: boolean; // whether to enable performance statistics
  enableCacheStats?: boolean; // whether to enable cache statistics
}

/**
 * Root node loaded callback parameters
 */
export interface RootTileLoadedCallbackParams {
  center: Vector3; // bounding box center
  radius: number; // bounding sphere radius
  boundingBox?: BoundingBox; // bounding box (optional)
  rtcOffset?: Vector3; // rtc offset (optional)
}

/**
 * Camera info cache
 */
interface CameraInfo {
  position: Vector3;
  frustum: Frustum;
  isOrthographic: boolean;
  pixelSize?: number; // for orthographic camera
  sseDenominator?: number; // for perspective camera
}

/**
 * Event listener type
 */
type EventListener = (event: any) => void;

/**
 * Event type
 */
type EventType =
  | 'load-tile-set'
  | 'tiles-load-end'
  | 'load-error'
  | 'needs-update'
  | 'load-content';

/**
 * TilesRenderer for Rings engine
 * Contains all core algorithms and Rings-specific implementations
 */
export class TilesRenderer {
  // State
  public rootLoadingState: number = UNLOADED;
  public rootTileSet: TileSet | null = null;
  public rootURL: string | null = null;
  public fetchOptions: RequestInit = {};
  public frameCount: number = 0;
  public isLoading: boolean = false;

  // Cache and queues
  public lruCache: LRUCache;
  public loadQueue: PriorityQueue;
  public processNodeQueue: PriorityQueue;

  // Plugin system
  public plugins: TilesRendererPlugin[] = [];

  // Internal state
  protected _queuedTiles: Tile[] = [];
  protected _cachedSinceLoadComplete: Set<Tile> = new Set();
  protected _processedTiles: WeakSet<Tile> = new WeakSet();
  protected _visibleTiles: Set<Tile> = new Set();
  protected _usedSet: Set<Tile> = new Set<Tile>();

  // Cache statistics
  protected _cacheHits: number = 0;
  protected _cacheMisses: number = 0;

  // Statistics
  public stats: TilesRendererStats = {
    parsing: 0,
    downloading: 0,
    failed: 0,
    inFrustum: 0,
    used: 0,
    active: 0,
    visible: 0,
    inCacheSinceLoad: 0,
  };

  // Configuration options
  public errorTarget: number = 16; // target screen space error (pixels)
  public errorThreshold: number = 1.0; // error threshold factor (deprecated, kept for compatibility)
  public maxDepth: number = 30; // maximum depth
  public displayActiveTiles: boolean = false;

  // Callbacks
  public onRootTileLoaded?: (params: RootTileLoadedCallbackParams) => void;

  // RTC (Relative To Center) offset, used to solve the problem of large coordinate precision
  protected rtcOffset: Vector3 | null = null;

  // Internal root tile
  protected _root: Tile | null = null;

  // Active and visible tiles set
  protected _activeTiles: Set<Tile> = new Set();

  // Rings-specific: Scene group
  public readonly group: Object3D;

  // Rings-specific: Camera management
  public cameras: Camera3D[] = [];
  private _cameraMap: Map<Camera3D, { width: number; height: number }> = new Map();
  private _cameraInfo: CameraInfo[] = [];

  // Rings-specific: Coordinate system adjustment
  private _upRotationMatrix: Matrix4 = new Matrix4();
  private _ellipsoid: any; // WGS84 ellipsoid (if geographic coordinate support is needed)

  // Rings-specific: Memory statistics
  private _bytesUsed: WeakMap<Object3D, number> = new WeakMap();

  // Rings-specific: Event listeners
  private _eventListeners: Map<EventType, EventListener[]> = new Map();

  // Performance statistics
  public performanceStats: PerformanceStats = {
    updateTime: 0,
    traverseTime: 0,
    markUsedTime: 0,
    markVisibleTime: 0,
    toggleTime: 0,
    queueProcessTime: 0,
  };

  constructor(url: string | null = null) {
    this.rootURL = url;

    this.lruCache = new LRUCache();
    this.lruCache.unloadPriorityCallback = lruPriorityCallback;

    this.loadQueue = new PriorityQueue();
    this.loadQueue.maxJobs = 10; // merged queue, adjust the number of concurrent jobs
    this.loadQueue.priorityCallback = priorityCallback;

    this.processNodeQueue = new PriorityQueue();
    this.processNodeQueue.maxJobs = 25;

    // Rings-specific: Initialize scene group
    this.group = new Object3D();
    this.group.name = 'TilesRendererGroup';
  }

  /**
   * Get root tile
   */
  get root(): Tile | null {
    return this._root;
  }

  /**
   * Get load progress (0-1)
   */
  get loadProgress(): number {
    const { stats, isLoading } = this;
    const loading = stats.downloading;
    const total = stats.inCacheSinceLoad + (isLoading ? 1 : 0);
    return total === 0 ? 1.0 : 1.0 - loading / total;
  }

  /**
   * Update method (main loop)
   */
  update(): void {
    const { lruCache, _usedSet, stats, loadQueue, processNodeQueue } = this;

    // 1. load root Tileset (if not loaded)
    if (this.rootLoadingState === UNLOADED) {
      this.rootLoadingState = LOADING;
      this.isLoading = true;
      this._loadRootTileSet()
        .then(rootTileSet => {
          this.rootLoadingState = LOADED;
          this.rootTileSet = rootTileSet;

          if (rootTileSet.root) {
            const basePath = this._getBasePath(this.rootURL || '');
            const rootTile = this.preprocessNode(
              rootTileSet.root,
              basePath,
              null
            );
            this._root = rootTile;

            const boundingVolume = new BoundingVolume(rootTile.boundingVolume);
            const sphere = new BoundingSphere();
            boundingVolume.getSphere(sphere);
            const aabb = new BoundingBox();
            boundingVolume.getAABB(aabb);
            this.rtcOffset = new Vector3(-sphere.center.x, -sphere.center.y, -sphere.center.z);
            
            if (this.onRootTileLoaded) {
              try {
                this.onRootTileLoaded({
                  center: sphere.center,
                  radius: sphere.radius,
                  boundingBox: aabb,
                  rtcOffset: this.rtcOffset,
                });
              } catch (error) {
                console.warn('Failed to calculate bounding volume for root tile:', error);
              }
            }
          }

          this.dispatchEvent({
            type: 'load-tile-set',
            tileSet: rootTileSet,
            url: this.rootURL,
          });
        })
        .catch(error => {
          this.rootLoadingState = FAILED;
          console.error('Failed to load root tileset:', error);
          this.dispatchEvent({
            type: 'load-error',
            tile: null,
            error,
            url: this.rootURL,
          });
        });
    }

    const root = this.root;
    if (!root) {
      return;
    }

    // 2. reset statistics
    stats.inFrustum = 0;
    stats.used = 0;
    stats.active = 0;
    stats.visible = 0;
    this.frameCount++;

    // 3. mark all tiles as unused
    _usedSet.forEach(tile => lruCache.markUnused(tile));
    _usedSet.clear();

    // 4. update camera information
    this.updateCameraInfo();

    // 5. traverse tile tree and mark
    markUsedTiles(root, this);
    markUsedSetLeaves(root, this);
    markVisibleTiles(root, this);
    toggleTiles(root, this);

    // 6. process download queue
    const queuedTiles = this._queuedTiles;
    if (lruCache.unloadPriorityCallback) {
      queuedTiles.sort(lruCache.unloadPriorityCallback);
    }

    for (let i = 0, l = queuedTiles.length; i < l && !lruCache.isFull(); i++) {
      this.requestTileContents(queuedTiles[i]);
    }

    queuedTiles.length = 0;

    // 7. schedule LRU cache cleanup
    lruCache.scheduleUnload();

    // 8. check if loading is complete
    const runningTasks =
      loadQueue.running || processNodeQueue.running;
    if (runningTasks === false && this.isLoading === true) {
      this._cachedSinceLoadComplete.clear();
      stats.inCacheSinceLoad = 0;
      this.dispatchEvent({ type: 'tiles-load-end' });
      this.isLoading = false;
    }
  }

  /**
   * Traverse tile tree
   */
  traverse(
    beforeCb:
      | ((tile: Tile, parent: Tile | null, depth: number) => boolean)
      | null,
    afterCb:
      | ((tile: Tile, parent: Tile | null, depth: number) => boolean)
      | null,
    ensureFullyProcessed: boolean = true
  ): void {
    if (!this.root) {
      return;
    }

    traverseSet(
      this.root,
      (tile, parent, depth) => {
        if (ensureFullyProcessed) {
          this.ensureChildrenArePreprocessed(tile, true);
        }
        return beforeCb ? beforeCb(tile, parent, depth) : false;
      },
      afterCb
    );
  }

  /**
   * Register plugin
   */
  registerPlugin(plugin: TilesRendererPlugin): void {
    if (this.plugins.includes(plugin)) {
      return;
    }

    const priority = plugin.priority || 0;
    let insertionPoint = this.plugins.length;

    for (let i = 0; i < this.plugins.length; i++) {
      const otherPriority = this.plugins[i].priority || 0;
      if (otherPriority > priority) {
        insertionPoint = i;
        break;
      }
    }

    this.plugins.splice(insertionPoint, 0, plugin);

    if (plugin.init) {
      plugin.init(this);
    }
  }

  /**
   * Unregister plugin
   */
  unregisterPlugin(plugin: TilesRendererPlugin | string): boolean {
    const plugins = this.plugins;
    let targetPlugin: TilesRendererPlugin | undefined;

    if (typeof plugin === 'string') {
      targetPlugin = plugins.find(p => p.name === plugin);
    } else {
      targetPlugin = plugin;
    }

    if (targetPlugin && plugins.includes(targetPlugin)) {
      const index = plugins.indexOf(targetPlugin);
      plugins.splice(index, 1);

      if (targetPlugin.dispose) {
        targetPlugin.dispose();
      }

      return true;
    }

    return false;
  }

  /**
   * Get plugin by name
   */
  getPluginByName(name: string): TilesRendererPlugin | null {
    return this.plugins.find(p => p.name === name) || null;
  }

  /**
   * Calculate tile view error and screen space error
   */
  calculateTileViewError(tile: Tile, target: ViewErrorTarget): void {
    const cached = tile.cached;
    const cameras = this.cameras;
    const cameraInfo = this._cameraInfo;
    const boundingVolume = cached.boundingVolume;

    if (!boundingVolume) {
      target.inView = false;
      target.error = Infinity;
      target.distanceFromCamera = Infinity;
      return;
    }

    let inView = false;
    let inViewError = -Infinity;
    let inViewDistance = Infinity;
    let maxError = -Infinity;
    let minDistance = Infinity;

    // Get accumulated worldTransform (for bounding volume calculation)
    const worldTransform = cached.worldTransform;

    // Iterate through all cameras
    for (let i = 0, l = cameras.length; i < l; i++) {
      const info = cameraInfo[i];
      let error: number;
      let distance: number;

      if (info.isOrthographic) {
        // Orthographic camera
        const pixelSize = info.pixelSize!;
        error = tile.geometricError / pixelSize;
        distance = Infinity;
      } else {
        // Perspective camera
        const sseDenominator = info.sseDenominator!;
        // Use accumulated worldTransform
        distance = boundingVolume.distanceToPoint(info.position, worldTransform);
        // Avoid 0/0 causing NaN
        error = distance === 0 ? Infinity : tile.geometricError / (distance * sseDenominator);
      }

      // Check if in frustum
      const frustum = cameraInfo[i].frustum;
      // Use accumulated worldTransform
      if (boundingVolume.intersectsFrustum(frustum, worldTransform)) {
        inView = true;
        inViewError = Math.max(inViewError, error);
        inViewDistance = Math.min(inViewDistance, distance);
      }

      maxError = Math.max(maxError, error);
      minDistance = Math.min(minDistance, distance);
    }

    // If tile is in frustum, use frustum error and distance
    if (inView) {
      target.inView = true;
      target.error = inViewError;
      target.distanceFromCamera = inViewDistance;
    } else {
      target.inView = false;
      target.error = maxError;
      target.distanceFromCamera = minDistance;
    }
  }

  /**
   * Update camera information
   */
  updateCameraInfo(): void {
    this._updateCameraInfo();
  }

  private _updateCameraInfo(): void {
    const cameras = this.cameras;
    const cameraInfo = this._cameraInfo;
    const cameraMap = this._cameraMap;

    // Ensure array length matches
    while (cameraInfo.length < cameras.length) {
      cameraInfo.push({
        position: new Vector3(),
        frustum: new Frustum(),
        isOrthographic: false,
      });
    }

    for (let i = 0; i < cameras.length; i++) {
      const camera = cameras[i];
      const info = cameraInfo[i];
      const resolution = cameraMap.get(camera);

      if (!resolution) {
        continue;
      }

      // Update camera position (world coordinates)
      const worldPos = camera.transform.worldPosition;
      info.position.copyFrom(worldPos);

      info.frustum = camera.frustum;

      // Determine if orthographic camera
      info.isOrthographic = camera.type === CameraType.ortho;

      if (info.isOrthographic) {
        // Orthographic camera: calculate pixel size
        // Rings Camera3D uses frustumSize as orthographic size
        const orthoSize = camera.frustumSize;
        info.pixelSize = orthoSize / resolution.height;
      } else {
        // Perspective camera: calculate SSE denominator
        // Rings Camera3D's fov is in degrees
        const fov = camera.fov;
        const fovRad = (fov * Math.PI) / 180;
        info.sseDenominator = (2 * Math.tan(fovRad / 2)) / resolution.height;
      }
    }
  }

  /**
   * Preprocess tile node
   */
  preprocessNode(
    tileData: TileSetChild,
    tileSetDir: string,
    parentTile: Tile | null = null
  ): Tile {
    // If already processed, return directly
    if (this._processedTiles.has(tileData as any)) {
      return tileData as any;
    }

    this._processedTiles.add(tileData as any);

    // Create Tile object (if not already)
    let tileObj: Tile;
    if (tileData instanceof Tile) {
      tileObj = tileData;
    } else {
      tileObj = new Tile(tileData, parentTile);
    }

    if (tileObj.content) {
      const content = tileObj.content as any;
      if (!('uri' in content) && 'url' in content) {
        content.uri = content.url;
        delete content.url;
      }
    }

    tileObj.basePath = tileSetDir;

    if (tileObj.boundingVolume) {
      const boundingVolume = new BoundingVolume(tileObj.boundingVolume);
      tileObj.cached.boundingVolume = boundingVolume;
    }
    const boundCenter = new Vector3(tileObj.boundingVolume.box[0], tileObj.boundingVolume.box[1], tileObj.boundingVolume.box[2]);

    // Create local transform matrix (relative to parent node)
    // Note: here only store tile's own transform, not accumulate parent node's transform
    // Transform will be accumulated through the parent-child relationship of the scene graph
    const transform = new Matrix4();
    if (tileObj.transform) {
      const transformArr = tileObj.transform;
      for (let i = 0; i < 16; i++) {
        transform.rawData[i] = transformArr[i];
      }
    }


    if (!parentTile) {
      const tmpMat = new Matrix4();
      tmpMat.copyFrom(transform);
      tmpMat.rawData[12] = 0;
      tmpMat.rawData[13] = 0;
      tmpMat.rawData[14] = 0;
      const position = new Vector3();
      position.copyFrom(boundCenter);
      position.applyMatrix4(tmpMat)
      transform.rawData[12] = -position.x ;
      transform.rawData[13] = -position.y ;
      transform.rawData[14] = -position.z ;
    }

    // Calculate accumulated transform (for bounding volume calculation and distance calculation)
    // But scene's transform will be accumulated through the parent-child relationship automatically, no need to multiply manually
    const worldTransform = new Matrix4();
    worldTransform.copyFrom(transform);
    if (parentTile && parentTile.cached.worldTransform) {
      worldTransform.multiplyMatrices(parentTile.cached.worldTransform, transform);
    }

    const transformInverse = new Matrix4();
    transformInverse.copyFrom(worldTransform);
    transformInverse.invert();

    // Store local transform (for applying to scene)
    tileObj.cached.transfrom = transform;
    // Store accumulated world transform (for bounding volume calculation)
    tileObj.cached.worldTransform = worldTransform;
    tileObj.cached.transformInverse = transformInverse;

    if (tileData.children && tileData.children.length > 0) {
      tileObj.children = [];
      for (let i = 0; i < tileData.children.length; i++) {
        const childData = tileData.children[i];
        const childTile = this.preprocessNode(childData, tileSetDir, tileObj);
        tileObj.children.push(childTile);
      }
      tileObj.childrenProcessed = tileObj.children.length;
    }

    return tileObj;
  }

  /**
   * Ensure children are preprocessed
   */
  ensureChildrenArePreprocessed(tile: Tile, immediate: boolean = false): void {
    const children = tile.children;
    for (let i = 0, l = children.length; i < l; i++) {
      const child = children[i];

      if (child.basePath !== undefined && child.basePath !== '' || child.cached.boundingVolume) {
        continue;
      } else if (immediate) {
        this.processNodeQueue.remove(child);
        this.preprocessNode(child as any, tile.basePath, tile);
      } else {
        if (!this.processNodeQueue.has(child)) {
          this.processNodeQueue.add(child, (childTile: Tile) => {
            this.preprocessNode(childTile as any, tile.basePath, tile);
          });
        }
      }
    }
  }

  /**
   * Record cache hit
   */
  private _recordCacheHit(): void {
    this._cacheHits++;
  }

  /**
   * Record cache miss
   */
  private _recordCacheMiss(): void {
    this._cacheMisses++;
  }

  /**
   * Reset cache statistics
   */
  resetCacheStats(): void {
    this._cacheHits = 0;
    this._cacheMisses = 0;
  }

  /**
   * Request tile content
   */
  requestTileContents(tile: Tile): void {
    if (tile.loadingState !== UNLOADED) {
      this._recordCacheHit();
      return;
    }

    if (this.lruCache.isFull()) {
      this._recordCacheMiss();
      return;
    }

    this._recordCacheMiss();

    tile.loadingState = LOADING;
    this.stats.downloading++;

    const content = tile.content || (tile.contents && tile.contents[0]);
    if (!content || !content.uri) {
      tile.loadingState = FAILED;
      this.stats.downloading--;
      this.stats.failed++;
      return;
    }

    const basePath = tile.basePath || '';
    const uri = content.uri;
    const url = this._resolveURL(basePath, uri);

    this.loadQueue.add(tile, async (tileItem: Tile) => {
      try {
        await this.parseTileContent(tileItem, uri, url);
        this.stats.downloading--;
      } catch (error) {
        tileItem.loadingState = FAILED;
        this.stats.downloading--;
        this.stats.failed++;
        console.error('Failed to load tile:', error);
      }
    });
  }

  /**
   * Parse tile content
   */
  async parseTileContent(
    tile: Tile,
    uri: string,
    url: string
  ): Promise<void> {
    tile.loadingState = PARSING;

    // Get URL extension
    const getUrlExtension = (url: string): string => {
      const parts = url.split('.');
      return parts.length > 1 ? parts[parts.length - 1] : '';
    };
    const extension = getUrlExtension(uri);
    const fullUrl = url;

    let scene: Object3D | null = null;
    const adjustmentTransform = this._upRotationMatrix;

    switch (extension.toLowerCase()) {
      case 'b3dm':
        // Use Rings B3DM loader
        const loader = new FileLoader();
        const parser = await loader.load(fullUrl, B3DMParser, {
          onProgress: (e: any) => {
            // Progress callback
          },
          onComplete: (e: any) => {
            // Complete callback
          },
        }, adjustmentTransform);
        scene = parser.data;
        break;

      case 'i3dm':
        // Use Rings I3DM loader
        scene = (await Engine3D.res.loadI3DM(
          fullUrl,
          {
            onProgress: (e: any) => {},
            onComplete: (e: any) => {},
          },
            adjustmentTransform
          )) as Object3D;
        break;

      case 'glb':
      case 'gltf':
        // Use Rings GLTF loader
        scene = (await Engine3D.res.loadGltf(fullUrl, {
          onProgress: (e: any) => {},
          onComplete: (e: any) => {},
        })) as Object3D;

        // No longer apply adjustmentTransform here because:
        // 1. adjustmentTransform is already applied to group
        // 2. All tiles are directly mounted under group, transform will be applied in setTileActive with world transform
        break;

      case 'pnts':
        // TODO: Implement point cloud loading
        console.warn('PNTS format not yet supported');
        break;

      case 'json':
        // External tileset
        {
          try {
            // Use Engine3D.res.loadJSON to load external tileset
            const externalTileSet = (await Engine3D.res.loadJSON(fullUrl)) as TileSet;

            // Clear current tile's children, prepare to add external tileset's children
            tile.children.length = 0;
            tile.childrenProcessed = 0;

            // Calculate external tileset's base path
            const externalBasePath = this._getBasePath(fullUrl);

            // If external tileset has root node, add it as current tile's child
            if (externalTileSet.root) {
              // Preprocess external tileset's root node as current tile's child
              const externalRootTile = this.preprocessNode(
                externalTileSet.root,
                externalBasePath,
                tile
              );
              tile.children.push(externalRootTile);
              tile.childrenProcessed = 1;

              // Trigger external tileset load event
              this.dispatchEvent({
                type: 'load-tile-set',
                tileSet: externalTileSet,
                url: fullUrl,
              });
            }

            // External tileset doesn't need to create scene, it only adds children
            // Set state to loaded (although no scene, children are already processed)
            tile.loadingState = LOADED;

            return; // Early return, don't execute subsequent scene processing logic
          } catch (error) {
            console.error('Failed to load external tileset:', error);
            tile.loadingState = FAILED;
            this.stats.failed++;
            return;
          }
        }
        break;

      default:
        console.warn(`Unknown tile format: ${extension}`);
        break;
    }

    if (scene) {
      tile.cached.scene = scene;
      tile.loadingState = LOADED;

      // No longer apply transform here because all tiles are directly mounted under group
      // Transform will be applied in setTileActive with accumulated world transform

      // Estimate memory usage
      const bytesUsed = this._estimateBytesUsed(scene);
      this._bytesUsed.set(scene, bytesUsed);
      this.lruCache.setMemoryUsage(tile, bytesUsed);

      // Add to LRU cache
      if (!this.lruCache.has(tile)) {
        this.lruCache.add(tile, (tileItem: Tile) => {
          // Unload callback
          if (tileItem.cached.scene) {
          const sceneObj = tileItem.cached.scene;
          // Remove from scene group
          if (sceneObj.parent) {
            sceneObj.parent.object3D.removeChild(sceneObj);
          }
          // Destroy scene object
          sceneObj.destroy();
          tileItem.cached.scene = null;
          }
          tileItem.loadingState = UNLOADED;
        });
      }

      // If tile is already active, immediately add to scene group
      // This way scene objects can be displayed immediately after loading, without waiting for next toggleTiles call
      if (tile.active) {
        this.setTileActive(tile, true);
      }
    } else {
      tile.loadingState = FAILED;
      this.stats.failed++;
    }
  }

  /**
   * Mark tile as used
   */
  markTileUsed(tile: Tile): void {
    this._usedSet.add(tile);
    this.lruCache.markUsed(tile);
  }

  /**
   * Set tile active state
   */
  setTileActive(tile: Tile, active: boolean): void {
    if (active) {
      this._activeTiles.add(tile);
    } else {
      this._activeTiles.delete(tile);
    }

    const scene = tile.cached.scene;
    if (!scene) {
      return;
    }

    if (active) {
      // All tiles' scenes are directly added under group, no parent-child relationship
      // This allows independent control of each tile's visibility, avoiding parent tile hiding affecting child tiles
      if (!this.group.entityChildren.includes(scene)) {
        // If scene is already added elsewhere (e.g., wrong parent scene), remove first
        if (scene.parent) {
          scene.parent.object3D.removeChild(scene);
        }
        this.group.addChild(scene);
      }
      
      // Apply accumulated world transform (because there's no parent-child relationship, need to apply full transform)
      if (tile.cached.worldTransform) {
        this._applyWorldTransform(scene.transform, tile.cached.worldTransform);
      }
      
      // Set visibility (Rings uses transform.enable)
      scene.transform.enable = true;
    } else {
      // Set invisible
      scene.transform.enable = false;
    }
  }

  /**
   * Set tile visibility
   */
  setTileVisible(tile: Tile, visible: boolean): void {
    if (visible) {
      this._visibleTiles.add(tile);
    } else {
      this._visibleTiles.delete(tile);
    }

    const scene = tile.cached.scene;
    if (!scene) {
      return;
    }

    // Set visibility (Rings uses transform.enable)
    scene.transform.enable = visible;
  }

  /**
   * Add tile to download queue
   */
  queueTileForDownload(tile: Tile): void {
    if (tile.loadingState !== UNLOADED || this.lruCache.isFull()) {
      return;
    }
    this._queuedTiles.push(tile);
  }

  /**
   * Dispatch event
   */
  dispatchEvent(event: { type: string; [key: string]: any }): void {
    const listeners = this._eventListeners.get(event.type as EventType);
    if (listeners) {
      listeners.forEach(listener => {
        try {
          listener(event);
        } catch (error) {
          console.error('Error in event listener:', error);
        }
      });
    }
  }

  /**
   * Load root Tileset
   */
  protected async _loadRootTileSet(): Promise<TileSet> {
    if (!this.rootURL) {
      throw new Error('Root URL is not set');
    }

    // Use Rings resource loading API
    const tileSet = (await Engine3D.res.loadJSON(this.rootURL)) as TileSet;

    // Handle coordinate system adjustment
    if (tileSet.asset && tileSet.asset.gltfUpAxis) {
      this._setupUpAxisRotation(tileSet.asset.gltfUpAxis);
    }

    return tileSet;
  }

  /**
   * Setup coordinate system adjustment matrix
   */
  private _setupUpAxisRotation(gltfUpAxis: string): void {
    const adjustmentTransform = new Matrix4();

    switch (gltfUpAxis.toLowerCase()) {
      case 'x':
        // X-axis up, need to rotate to Y-axis up
        adjustmentTransform.makeRotationAxis(Vector3.Y_AXIS, -Math.PI / 2);
        break;

      case 'y':
        // Y-axis up (default), need to rotate to Z-axis up (Rings uses Z-up)
        adjustmentTransform.makeRotationAxis(Vector3.X_AXIS, Math.PI / 2);
        break;

      case 'z':
        // Z-axis up (Rings default), no rotation needed
        adjustmentTransform.identity();
        break;

      default:
        console.warn(`Unknown gltfUpAxis: ${gltfUpAxis}, using default`);
        adjustmentTransform.identity();
        break;
    }

    this._upRotationMatrix = adjustmentTransform;

    // Apply root transform
    const invertMatrix = new Matrix4();
    invertMatrix.copyFrom(adjustmentTransform);
    invertMatrix.invert();
    this._applyLocalTransform(this.group.transform, invertMatrix);
  }

  /**
   * Apply local transform matrix to Transform
   * Each scene only applies its own local transform, automatically accumulated through parent-child relationship
   */
  private _applyLocalTransform(transform: Transform, matrix: Matrix4): void {
    // Directly decompose matrix to position, quaternion, scale
    // No need to premultiply, because transform will be automatically accumulated through scene graph parent-child relationship
    const prs = matrix.decompose(Orientation3D.EULER_ANGLES);

    // Apply to transform
    transform.localPosition = prs[0];
    const quat = new Quaternion();
    quat.fromEulerAngles(prs[1].x, prs[1].y, prs[1].z);
    transform.localRotQuat = quat;
    transform.localScale = prs[2];
  }

  /**
   * Apply world transform matrix to Transform
   * Since all tiles are directly mounted under group, no parent-child relationship,
   * need to apply accumulated world transform
   */
  private _applyWorldTransform(transform: Transform, worldMatrix: Matrix4): void {
    // Decompose world transform to position, quaternion, scale
    const prs = worldMatrix.decompose(Orientation3D.EULER_ANGLES);

    // Apply to transform (as local transform, because directly mounted under group)
    transform.localPosition = prs[0];
    const quat = new Quaternion();
    quat.fromEulerAngles(prs[1].x, prs[1].y, prs[1].z);
    transform.localRotQuat = quat;
    transform.localScale = prs[2];
  }

  /**
   * Get base path
   */
  protected _getBasePath(url: string): string {
    const lastSlash = url.lastIndexOf('/');
    return lastSlash !== -1 ? url.substring(0, lastSlash) : '';
  }

  /**
   * Parse URL
   */
  private _resolveURL(basePath: string, uri: string): string {
    if (uri.startsWith('http://') || uri.startsWith('https://')) {
      return uri;
    }
    return basePath + '/' + uri;
  }

  /**
   * Get URL extension
   */
  private _getUrlExtension(url: string): string {
    const parts = url.split('.');
    return parts.length > 1 ? parts[parts.length - 1] : '';
  }

  /**
   * Get memory statistics
   */
  getMemoryStats(): MemoryStats {
    const cacheStats = this.lruCache.getStats();
    const totalBytes = this.lruCache.maxBytesSize;
    const usedBytes = cacheStats.bytes;
    const freeBytes = totalBytes - usedBytes;

    const totalRequests = this._cacheHits + this._cacheMisses;
    const cacheHitRate = totalRequests > 0 ? this._cacheHits / totalRequests : 0;

    return {
      totalTiles: cacheStats.size,
      loadedTiles: cacheStats.usedCount,
      cachedTiles: cacheStats.size,
      totalBytes,
      usedBytes,
      freeBytes,
      cacheHitRate,
    };
  }

  /**
   * Get all loaded tiles
   */
  getLoadedTiles(): Tile[] {
    const tiles: Tile[] = [];
    this.traverse(
      tile => {
        if (tile.loadingState === LOADED) {
          tiles.push(tile);
        }
        return false;
      },
      null
    );
    return tiles;
  }

  /**
   * Get all visible tiles
   */
  getVisibleTiles(): Tile[] {
    return Array.from(this._visibleTiles);
  }

  /**
   * Get all active tiles
   */
  getActiveTiles(): Tile[] {
    return Array.from(this._activeTiles);
  }

  /**
   * Get tile tree statistics
   */
  getTileTreeStats(): {
    totalTiles: number;
    loadedTiles: number;
    visibleTiles: number;
    activeTiles: number;
    maxDepth: number;
    averageDepth: number;
  } {
    let totalTiles = 0;
    let loadedTiles = 0;
    let visibleTiles = 0;
    let activeTiles = 0;
    let maxDepth = 0;
    let totalDepth = 0;

    this.traverse(
      tile => {
        totalTiles++;
        if (tile.loadingState === LOADED) {
          loadedTiles++;
        }
        if (tile.visible) {
          visibleTiles++;
        }
        if (tile.active) {
          activeTiles++;
        }
        maxDepth = Math.max(maxDepth, tile.depth);
        totalDepth += tile.depth;
        return false;
      },
      null
    );

    return {
      totalTiles,
      loadedTiles,
      visibleTiles,
      activeTiles,
      maxDepth,
      averageDepth: totalTiles > 0 ? totalDepth / totalTiles : 0,
    };
  }

  /**
   * Print debug information
   */
  printDebugInfo(): void {
    const stats = this.stats;
    const memoryStats = this.getMemoryStats();
    const treeStats = this.getTileTreeStats();
    const perfStats = this.performanceStats;
    const cacheStats = this.lruCache.getStats();

    console.log('=== TilesRenderer Debug Info ===');
    console.log('Stats:', stats);
    console.log('Memory:', memoryStats);
    console.log('Tree:', treeStats);
    console.log('Performance:', perfStats);
    console.log('Cache:', cacheStats);
    console.log('Queues:', {
      load: this.loadQueue.getStats(),
      process: this.processNodeQueue.getStats(),
    });
  }

  /**
   * Set performance configuration
   */
  setPerformanceOptions(options: PerformanceOptions): void {
    if (options.lruCacheMinSize !== undefined) {
      this.lruCache.minSize = options.lruCacheMinSize;
    }
    if (options.lruCacheMaxSize !== undefined) {
      this.lruCache.maxSize = options.lruCacheMaxSize;
    }
    if (options.lruCacheMinBytes !== undefined) {
      this.lruCache.minBytesSize = options.lruCacheMinBytes;
    }
    if (options.lruCacheMaxBytes !== undefined) {
      this.lruCache.maxBytesSize = options.lruCacheMaxBytes;
    }
    if (options.lruCacheUnloadPercent !== undefined) {
      this.lruCache.unloadPercent = options.lruCacheUnloadPercent;
    }
    if (options.downloadQueueMaxJobs !== undefined) {
      this.loadQueue.maxJobs = options.downloadQueueMaxJobs;
    }
    if (options.parseQueueMaxJobs !== undefined) {
      this.loadQueue.maxJobs = options.parseQueueMaxJobs;
    }
    if (options.processQueueMaxJobs !== undefined) {
      this.processNodeQueue.maxJobs = options.processQueueMaxJobs;
    }
    if (options.enablePerformanceStats !== undefined) {
      (this as any)._enablePerformanceStats = options.enablePerformanceStats;
    }
    if (options.enableCacheStats !== undefined) {
      (this as any)._enableCacheStats = options.enableCacheStats;
    }
  }

  /**
   * Clean up resources
   */
  dispose(): void {
    // Clean up plugins
    const plugins = [...this.plugins];
    plugins.forEach(plugin => this.unregisterPlugin(plugin));

    // Clean up cache and queues
    this.lruCache.clear();
    this.loadQueue.clear();
    this.processNodeQueue.clear();

    // Reset state
    this._root = null;
    this.rootTileSet = null;
    this.rootLoadingState = UNLOADED;
    this.frameCount = 0;
    this.isLoading = false;

    // Reset statistics
    this.resetCacheStats();
    this.group.destroy();
  }

  /**
   * Rings-specific: Add camera
   */
  setCamera(camera: Camera3D, width: number, height: number): void {
    if (!this.cameras.includes(camera)) {
      this.cameras.push(camera);
    }
    this._cameraMap.set(camera, { width, height });
    this._updateCameraInfo();
  }

  /**
   * Rings-specific: Delete camera
   */
  deleteCamera(camera: Camera3D): void {
    const index = this.cameras.indexOf(camera);
    if (index !== -1) {
      this.cameras.splice(index, 1);
    }
    this._cameraMap.delete(camera);
    this._updateCameraInfo();
  }

  /**
   * Rings-specific: Set camera resolution
   */
  setResolution(camera: Camera3D, width: number, height: number): void {
    const resolution = this._cameraMap.get(camera);
    if (resolution) {
      resolution.width = width;
      resolution.height = height;
    } else {
      this._cameraMap.set(camera, { width, height });
    }
    this._updateCameraInfo();
  }

  /**
   * Rings-specific: Traverse all loaded models
   */
  forEachLoadedModel(callback: (scene: Object3D, tile: Tile) => void): void {
    this.traverse(
      tile => {
        if (tile.loadingState === LOADED && tile.cached.scene) {
          callback(tile.cached.scene, tile);
        }
        return false;
      },
      null
    );
  }

  /**
   * Rings-specific: Estimate object memory usage
   */
  private _estimateBytesUsed(object: Object3D): number {
    // Simple memory estimation
    // Can be optimized based on actual needs
    let bytes = 0;

    object.forChild((child: Object3D) => {
      // Estimate geometry memory
      const meshRenderer = child.getComponent(MeshRenderer);
      if (meshRenderer && meshRenderer.geometry) {
        // TODO: Estimate based on geometry type
        bytes += 1024; // Temporary value
      }
      // Estimate material memory
      if (meshRenderer && meshRenderer.material) {
        bytes += 512; // Temporary value
      }
    });

    return bytes;
  }

  /**
   * Rings-specific: Add event listener
   */
  addEventListener(type: EventType, listener: EventListener): void {
    if (!this._eventListeners.has(type)) {
      this._eventListeners.set(type, []);
    }
    this._eventListeners.get(type)!.push(listener);
  }

  /**
   * Rings-specific: Remove event listener
   */
  removeEventListener(type: EventType, listener: EventListener): void {
    const listeners = this._eventListeners.get(type);
    if (listeners) {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }

  /**
   * Compatibility: Load tile set (legacy API)
   */
  public async loadTileSet(rootPath: string, file: string): Promise<void> {
    // Handle URL concatenation (avoid double slashes)
    const normalizedPath = rootPath.endsWith('/') ? rootPath.slice(0, -1) : rootPath;
    const url = normalizedPath + '/' + file;
    this.rootURL = url;

    // Call base class loading logic
    // update() method will automatically handle loading
  }

  /**
   * Compatibility: Get model list (legacy API)
   */
  get modelList(): Object3D[] {
    const models: Object3D[] = [];
    this.forEachLoadedModel((scene) => {
      models.push(scene);
    });
    return models;
  }
}
