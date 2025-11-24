import { Tile } from './Tile';
import { PriorityCallback } from '../utils/PriorityQueue';
import { UnloadPriorityCallback } from '../utils/LRUCache';

/**
 * download/parse queue priority callback function
 * return 1 means a has higher priority (load first), return -1 means b has higher priority, return 0 means equal
 *
 * priority rules:
 * 1. priority value smaller is higher priority
 * 2. tiles used in current frame are higher priority
 * 3. tiles with larger screen space error are higher priority
 * 4. tiles closer to the camera are higher priority
 * 5. tiles with shallower depth are higher priority
 */
export const priorityCallback: PriorityCallback = (a: Tile, b: Tile): number => {
  const aPriority = a.priority || 0;
  const bPriority = b.priority || 0;

  // 1. compare the priority set by the user (value smaller is higher priority)
  if (aPriority !== bPriority) {
    return aPriority > bPriority ? 1 : -1;
  }

  // 2. load tiles used in current frame first
  if (a.used !== b.used) {
    return a.used ? 1 : -1;
  }

  // 3. load tiles with larger screen space error first (large error means more detailed details are needed)
  if (a.error !== b.error) {
    return a.error > b.error ? 1 : -1;
  }

  // 4. load tiles closer to the camera first
  if (a.distanceFromCamera !== b.distanceFromCamera) {
    return a.distanceFromCamera > b.distanceFromCamera ? -1 : 1;
  }

  // 5. load tiles with shallower depth first (parent nodes are higher priority than child nodes)
  if (a.depthFromRenderedParent !== b.depthFromRenderedParent) {
    return a.depthFromRenderedParent > b.depthFromRenderedParent ? -1 : 1;
  }

  return 0;
};

/**
 * LRU cache unload priority callback function
 * return 1 means a should be unloaded first, return -1 means b should be unloaded first, return 0 means equal
 *
 * unload priority rules:
 * 1. priority value larger is higher priority
 * 2. tiles not visited for a long time are higher priority
 * 3. deeper nodes are higher priority (to avoid parent nodes being unloaded)
 * 4. tiles in loading state are higher priority
 * 5. external tilesets are unloaded last
 * 6. tiles with smaller error are higher priority
 */
export const lruPriorityCallback: UnloadPriorityCallback = (
  a: Tile,
  b: Tile
): number => {
  const aPriority = a.priority || 0;
  const bPriority = b.priority || 0;

  // 1. compare the priority set by the user (value larger is higher priority)
  if (aPriority !== bPriority) {
    return aPriority > bPriority ? 1 : -1;
  }

  // 2. unload tiles not visited for a long time first
  if (a.lastFrameVisited !== b.lastFrameVisited) {
    return a.lastFrameVisited > b.lastFrameVisited ? -1 : 1;
  }

  // 3. unload deeper nodes first (to avoid parent nodes being unloaded)
  if (a.depthFromRenderedParent !== b.depthFromRenderedParent) {
    return a.depthFromRenderedParent > b.depthFromRenderedParent ? 1 : -1;
  }

  // 4. unload tiles in loading state first (UNLOADED < LOADING < PARSING < LOADED)
  if (a.loadingState !== b.loadingState) {
    return a.loadingState > b.loadingState ? -1 : 1;
  }

  // 5. unload external tilesets last
  if (a.hasUnrenderableContent !== b.hasUnrenderableContent) {
    return a.hasUnrenderableContent ? -1 : 1;
  }

  // 6. unload tiles with smaller error first
  if (a.error !== b.error) {
    return a.error > b.error ? -1 : 1;
  }

  return 0;
};

