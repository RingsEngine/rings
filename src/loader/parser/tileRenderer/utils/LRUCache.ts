import { Tile } from '../core/Tile';

const GIGABYTE_BYTES = 2 ** 30;

/**
 * LRU Cache Unload Priority Callback Function Type
 * Return 1 means a is unloaded first, return -1 means b is unloaded first, return 0 means equal
 */
export type UnloadPriorityCallback = (a: Tile, b: Tile) => number;

/**
 * LRU Cache Item Remove Callback Function Type
 */
export type RemoveCallback = (item: Tile) => void;

/**
 * LRU Cache Implementation
 * Used to manage tile memory, supports limits based on quantity and byte size
 */
export class LRUCache {
  public minSize: number = 6000; // Minimum cache item quantity
  public maxSize: number = 8000; // Maximum cache item quantity
  public minBytesSize: number = 0.3 * GIGABYTE_BYTES; // Minimum byte size (300MB)
  public maxBytesSize: number = 0.4 * GIGABYTE_BYTES; // Maximum byte size (400MB)
  public unloadPercent: number = 0.05; // Unload percentage (5%)
  public autoMarkUnused: boolean = true; // Automatically mark unused

  private _itemSet: Map<Tile, number> = new Map(); // Tile -> Last used time
  private _itemList: Tile[] = []; // Tile list (for sorting)
  private _usedSet: Set<Tile> = new Set(); // Current used tile set
  private _callbacks: Map<Tile, RemoveCallback> = new Map(); // Remove callback
  private _unloadingHandle: number = -1; // Unload scheduling handle
  private _cachedBytes: number = 0; // Cached byte size
  private _bytesMap: Map<Tile, number> = new Map(); // Tile -> byte size
  private _loadedSet: Set<Tile> = new Set(); // Loaded tile set
  private _unloadPriorityCallback: UnloadPriorityCallback | null = null;

  /**
   * Set unload priority callback
   */
  set unloadPriorityCallback(cb: UnloadPriorityCallback | null) {
    this._unloadPriorityCallback = cb;
  }

  get unloadPriorityCallback(): UnloadPriorityCallback | null {
    return this._unloadPriorityCallback;
  }

  /**
   * Check if cache is full
   */
  isFull(): boolean {
    return (
      this._itemSet.size >= this.maxSize ||
      this._cachedBytes >= this.maxBytesSize
    );
  }

  /**
   * Get tile memory usage
   */
  getMemoryUsage(item: Tile): number {
    return this._bytesMap.get(item) || 0;
  }

  /**
   * Set tile memory usage
   */
  setMemoryUsage(item: Tile, bytes: number): void {
    if (!this._itemSet.has(item)) {
      return;
    }

    const oldBytes = this._bytesMap.get(item) || 0;
    this._cachedBytes -= oldBytes;
    this._bytesMap.set(item, bytes);
    this._cachedBytes += bytes;
  }

  /**
   * Add tile to cache
   */
  add(item: Tile, removeCb: RemoveCallback): boolean {
    if (this._itemSet.has(item)) {
      return false;
    }

    if (this.isFull()) {
      return false;
    }

    this._itemList.push(item);
    this._usedSet.add(item);
    this._itemSet.set(item, Date.now());
    this._callbacks.set(item, removeCb);
    this._loadedSet.add(item);

    return true;
  }

  /**
   * Check if tile is in cache
   */
  has(item: Tile): boolean {
    return this._itemSet.has(item);
  }

  /**
   * Remove tile from cache
   */
  remove(item: Tile): boolean {
    if (!this._itemSet.has(item)) {
      return false;
    }

    const bytes = this._bytesMap.get(item) || 0;
    this._cachedBytes -= bytes;
    this._bytesMap.delete(item);

    const callback = this._callbacks.get(item);
    if (callback) {
      callback(item);
    }

    const index = this._itemList.indexOf(item);
    if (index !== -1) {
      this._itemList.splice(index, 1);
    }

    this._usedSet.delete(item);
    this._itemSet.delete(item);
    this._callbacks.delete(item);
    this._loadedSet.delete(item);

    return true;
  }

  /**
   * Mark tile as used
   */
  markUsed(item: Tile): void {
    if (this._itemSet.has(item)) {
      this._usedSet.add(item);
      this._itemSet.set(item, Date.now());
    }
  }

  /**
   * Mark tile as unused
   */
  markUnused(item: Tile): void {
    this._usedSet.delete(item);
  }

  /**
   * Schedule unload operation
   */
  scheduleUnload(): void {
    if (this._unloadingHandle !== -1) {
      return;
    }

    this._unloadingHandle = requestAnimationFrame(() => {
      this._unloadingHandle = -1;
      this._performUnload();
    });
  }

  /**
   * Perform unload operation
   */
  private _performUnload(): void {
    const shouldUnload =
      this._itemSet.size > this.minSize ||
      this._cachedBytes > this.minBytesSize;

    if (!shouldUnload) {
      return;
    }

    if (this.autoMarkUnused) {
      this._itemSet.forEach((time, item) => {
        if (!this._usedSet.has(item)) {
          this.markUnused(item);
        }
      });
    }

    const toUnload: Tile[] = [];
    this._itemList.forEach(item => {
      if (!this._usedSet.has(item)) {
        toUnload.push(item);
      }
    });

    if (this._unloadPriorityCallback) {
      toUnload.sort(this._unloadPriorityCallback);
    }

    const targetSize = Math.floor(this._itemSet.size * (1 - this.unloadPercent));
    const targetBytes = this._cachedBytes - (this._cachedBytes - this.minBytesSize);
    let unloadedCount = 0;
    let unloadedBytes = 0;

    for (let i = 0; i < toUnload.length; i++) {
      const item = toUnload[i];

      if (
        this._itemSet.size - unloadedCount <= targetSize &&
        this._cachedBytes - unloadedBytes <= targetBytes
      ) {
        break;
      }

      const bytes = this._bytesMap.get(item) || 0;
      if (this.remove(item)) {
        unloadedCount++;
        unloadedBytes += bytes;
      }
    }
  }

  /**
   * Clear cache
   */
  clear(): void {
    const items = Array.from(this._itemSet.keys());
    items.forEach(item => this.remove(item));
  }

  /**
   * Get cache statistics
   */
  getStats(): {
    size: number;
    bytes: number;
    usedCount: number;
  } {
    return {
      size: this._itemSet.size,
      bytes: this._cachedBytes,
      usedCount: this._usedSet.size,
    };
  }
}

