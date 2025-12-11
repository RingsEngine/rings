import { Tile } from '../core/Tile';

/**
 * Priority callback function type
 * Return 1 means a has higher priority, return -1 means b has higher priority, return 0 means equal
 */
export type PriorityCallback = (a: Tile, b: Tile) => number;

/**
 * Task callback function type
 */
export type TaskCallback = (item: Tile) => Promise<void> | void;

/**
 * Priority queue implementation
 * Used to manage the execution of asynchronous tasks, supports priority sorting and concurrent control
 */
export class PriorityQueue {
  public maxJobs: number = 6; // Maximum concurrent tasks
  public priorityCallback: PriorityCallback | null = null;

  private _items: Tile[] = [];
  private _callbacks: Map<
    Tile,
    {
      callback: TaskCallback;
      promise: Promise<void>;
      resolve: () => void;
      reject: (error: Error) => void;
    }
  > = new Map();
  private _currJobs: number = 0;

  /**
   * Check if there are tasks running or queued
   */
  get running(): boolean {
    return this._items.length !== 0 || this._currJobs !== 0;
  }

  /**
   * Sort the queue
   */
  sort(): void {
    if (this.priorityCallback) {
      this._items.sort(this.priorityCallback);
    }
  }

  /**
   * Check if item is in queue
   */
  has(item: Tile): boolean {
    return this._callbacks.has(item);
  }

  /**
   * Add task to queue
   */
  add(item: Tile, callback: TaskCallback): Promise<void> {
    if (this._callbacks.has(item)) {
      return this._callbacks.get(item)!.promise;
    }

    let resolve!: () => void;
    let reject!: (error: Error) => void;

    const promise = new Promise<void>((res, rej) => {
      resolve = res;
      reject = rej;
    });

    const data = {
      callback,
      promise,
      resolve,
      reject,
    };

    this._items.unshift(item);
    this._callbacks.set(item, data);

    return promise;
  }

  /**
   * Remove item from queue
   */
  remove(item: Tile): void {
    const index = this._items.indexOf(item);
    if (index !== -1) {
      const data = this._callbacks.get(item);
      if (data) {
        data.promise.catch(() => {});
        data.reject(new Error('PriorityQueue: Item removed.'));
      }

      this._items.splice(index, 1);
      this._callbacks.delete(item);
    }
  }

  /**
   * Remove items by filter
   */
  removeByFilter(filter: (item: Tile) => boolean): void {
    const toRemove: Tile[] = [];
    this._items.forEach(item => {
      if (filter(item)) {
        toRemove.push(item);
      }
    });
    toRemove.forEach(item => this.remove(item));
  }

  /**
   * Update queue - process pending tasks
   * Should be called by TilesRenderer in its update() method
   */
  update(): void {
    this._tryRunJobs();
  }

  /**
   * Try to run tasks
   */
  private _tryRunJobs(): void {
    this.sort();

    const maxJobs = this.maxJobs;
    let iterated = 0;

    const completedCallback = () => {
      this._currJobs--;
    };

    while (
      maxJobs > this._currJobs &&
      this._items.length > 0 &&
      iterated < maxJobs
    ) {
      this._currJobs++;
      iterated++;

      const item = this._items.shift()!;
      const data = this._callbacks.get(item)!;
      this._callbacks.delete(item);

      Promise.resolve(data.callback(item))
        .then(() => {
          data.resolve();
          completedCallback();
        })
        .catch(error => {
          data.reject(error);
          completedCallback();
        });
    }
  }

  /**
   * Clear queue
   */
  clear(): void {
    const items = Array.from(this._items);
    items.forEach(item => this.remove(item));
  }

  /**
   * Get queue statistics
   */
  getStats(): {
    queued: number;
    running: number;
  } {
    return {
      queued: this._items.length,
      running: this._currJobs,
    };
  }
}

