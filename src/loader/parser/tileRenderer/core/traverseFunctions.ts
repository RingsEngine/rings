import { Tile } from './Tile';
import { TilesRenderer } from '../TilesRenderer';
import { LOADED, FAILED } from './constants';

const viewErrorTarget = {
  inView: false,
  error: Infinity,
  distanceFromCamera: Infinity,
};

/**
 * flag: whether to load the siblings of the root node
 * the specification suggests using true when using REPLACE, but the behavior of Cesium is false
 * reference: CesiumGS/3d-tiles#776
 */
const LOAD_ROOT_SIBLINGS = true;

/**
 * check if the download is finished
 */
function isDownloadFinished(value: number): boolean {
  return value === LOADED || value === FAILED;
}

/**
 * check if the tile is used in the current frame
 */
function isUsedThisFrame(tile: Tile, frameCount: number): boolean {
  return tile.lastFrameVisited === frameCount && tile.used;
}

/**
 * check if all children are processed
 */
function areChildrenProcessed(tile: Tile): boolean {
  return tile.childrenProcessed === tile.children.length;
}

/**
 * check if the tile can be unconditionally refined (external tileset or geometric error exception)
 */
function canUnconditionallyRefine(tile: Tile): boolean {
  return (
    tile.hasUnrenderableContent ||
    (tile.parent !== null && tile.parent.geometricError < tile.geometricError)
  );
}

/**
 * reset the frame state (optimized version)
 * avoid repeating calculations in the same frame
 */
function resetFrameState(tile: Tile, renderer: TilesRenderer): void {
  if (tile.lastFrameVisited === renderer.frameCount) {
    return;
  }

  tile.usedLastFrame = tile.used;

  tile.lastFrameVisited = renderer.frameCount;
  tile.used = false;
  tile.inFrustum = false;
  tile.isLeaf = false;
  tile.visible = false;
  tile.active = false;
  tile.error = Infinity;
  tile.distanceFromCamera = Infinity;
  tile.allChildrenReady = false;

  renderer.calculateTileViewError(tile, viewErrorTarget);
  tile.inFrustum = viewErrorTarget.inView;
  tile.error = viewErrorTarget.error;
  tile.distanceFromCamera = viewErrorTarget.distanceFromCamera;
}

/**
 * mark the tile as used
 */
function markUsed(tile: Tile, renderer: TilesRenderer, cacheOnly: boolean = false): void {
  if (tile.used) {
    return;
  }

  if (!cacheOnly) {
    tile.used = true;
    renderer.stats.used++;
  }

  renderer.markTileUsed(tile);

  if (tile.inFrustum === true) {
    renderer.stats.inFrustum++;
  }
}

/**
 * check if the tile can be traversed to the next layer (optimized version)
 * add cache to avoid repeating calculations
 */
function canTraverse(tile: Tile, renderer: TilesRenderer): boolean {
  if (
    tile.canTraverse &&
    tile.canTraverseFrame === renderer.frameCount
  ) {
    return tile.canTraverse;
  }

  let result = false;

  if (tile.error <= renderer.errorTarget && !canUnconditionallyRefine(tile)) {
    result = false;
  }
  else if (tile.depth >= renderer.maxDepth) {
    result = false;
  }
  else if (!tile.children || tile.children.length === 0) {
    result = false;
  } else {
    result = true;
  }

  tile.canTraverse = result;
  tile.canTraverseFrame = renderer.frameCount;

  return result;
}

/**
 * recursively mark the tiles as used
 * traverse to the next layer, skip external tileset
 */
function recursivelyMarkUsed(
  tile: Tile,
  renderer: TilesRenderer,
  cacheOnly: boolean = false
): void {
  renderer.ensureChildrenArePreprocessed(tile);

  resetFrameState(tile, renderer);
  markUsed(tile, renderer, cacheOnly);
  
  if (canUnconditionallyRefine(tile) && areChildrenProcessed(tile)) {
    const children = tile.children;
    for (let i = 0, l = children.length; i < l; i++) {
      recursivelyMarkUsed(children[i], renderer, cacheOnly);
    }
  }
}

/**
 * mark the tiles as used (main function)
 */
export function markUsedTiles(tile: Tile, renderer: TilesRenderer): void {
  renderer.ensureChildrenArePreprocessed(tile);

  resetFrameState(tile, renderer);

  if (!tile.inFrustum) {
    return;
  }

  const canTraverseResult = canTraverse(tile, renderer);
  if (!canTraverseResult) {
    markUsed(tile, renderer);
    const children = tile.children;
    if (!tile.hasContent && children && children.length > 0) {
      for (let i = 0, l = children.length; i < l; i++) {
        const c = children[i];
        markUsedTiles(c, renderer);
      }
    }
    return;
  }

  const children = tile.children;
  let anyChildrenUsed = false;
  let anyChildrenInFrustum = false;

  for (let i = 0, l = children.length; i < l; i++) {
    const c = children[i];
    markUsedTiles(c, renderer);
    anyChildrenUsed = anyChildrenUsed || isUsedThisFrame(c, renderer.frameCount);
    anyChildrenInFrustum = anyChildrenInFrustum || c.inFrustum;
  }

  if (tile.refine === 'REPLACE' && !anyChildrenInFrustum && children.length !== 0) {
    tile.inFrustum = false;
    for (let i = 0, l = children.length; i < l; i++) {
      recursivelyMarkUsed(children[i], renderer, true);
    }
    return;
  }

  markUsed(tile, renderer);

  if (
    tile.refine === 'REPLACE' &&
    ((anyChildrenUsed && tile.depth !== 0) || LOAD_ROOT_SIBLINGS)
  ) {
    for (let i = 0, l = children.length; i < l; i++) {
      recursivelyMarkUsed(children[i], renderer);
    }
  }
}

/**
 * mark the leaves of the "used" tree
 */
export function markUsedSetLeaves(tile: Tile, renderer: TilesRenderer): void {
  const frameCount = renderer.frameCount;
  if (!isUsedThisFrame(tile, frameCount)) {
    return;
  }

  const children = tile.children;
  let anyChildrenUsed = false;
  for (let i = 0, l = children.length; i < l; i++) {
    const c = children[i];
    anyChildrenUsed = anyChildrenUsed || isUsedThisFrame(c, frameCount);
  }

  if (!anyChildrenUsed) {
    tile.isLeaf = true;
  } else {
    let allChildrenReady = true;
    for (let i = 0, l = children.length; i < l; i++) {
      const c = children[i];
      markUsedSetLeaves(c, renderer);

      if (isUsedThisFrame(c, frameCount)) {
        const childCanDisplay = !canUnconditionallyRefine(c);

        let isChildReady =
          !c.hasContent ||
          (c.hasRenderableContent && isDownloadFinished(c.loadingState)) ||
          (c.hasUnrenderableContent && c.loadingState === FAILED);

        isChildReady = (childCanDisplay && isChildReady) || c.allChildrenReady;

        allChildrenReady = allChildrenReady && isChildReady;
      }
    }

    tile.allChildrenReady = allChildrenReady;
  }
}

/**
 * recursively traverse and load the next layer of renderable tile content
 * used to preload the content of the child nodes, instead of directly marking them as visible
 */
function recursivelyLoadNextRenderableTiles(tile: Tile, renderer: TilesRenderer): void {
  renderer.ensureChildrenArePreprocessed(tile);

  if (isUsedThisFrame(tile, renderer.frameCount)) {
    if (tile.hasContent) {
      renderer.queueTileForDownload(tile);
    }

    if (areChildrenProcessed(tile)) {
      const children = tile.children;
      for (let i = 0, l = children.length; i < l; i++) {
        recursivelyLoadNextRenderableTiles(children[i], renderer);
      }
    }
  }
}

/**
 * mark the visible tiles
 * reference: 3DTilesRendererJS
 */
export function markVisibleTiles(tile: Tile, renderer: TilesRenderer): void {
  const stats = renderer.stats;
  if (!isUsedThisFrame(tile, renderer.frameCount)) {
    return;
  }

  if (tile.isLeaf) {
    if (tile.loadingState === LOADED) {
      if (tile.inFrustum) {
        tile.visible = true;
        stats.visible++;
      }
      tile.active = true;
      stats.active++;
    } else if (tile.hasContent) {
      renderer.queueTileForDownload(tile);
    }
    return;
  }

  const children = tile.children;
  const hasContent = tile.hasContent;
  const loadedContent = isDownloadFinished(tile.loadingState) && hasContent;
  const errorRequirement = (renderer.errorTarget + 1) * (renderer.errorThreshold || 1);
  const meetsSSE = tile.error <= errorRequirement;
  const isAdditiveRefine = tile.refine === 'ADD';

  const allChildrenReady =
    tile.allChildrenReady || (tile.depth === 0 && !LOAD_ROOT_SIBLINGS);

  if (hasContent && (meetsSSE || isAdditiveRefine)) {
    renderer.queueTileForDownload(tile);
  }

  if ((meetsSSE && loadedContent && !allChildrenReady) || (loadedContent && isAdditiveRefine)) {
    if (tile.inFrustum) {
      tile.visible = true;
      stats.visible++;
    }
    tile.active = true;
    stats.active++;
  }

  if (!isAdditiveRefine && meetsSSE && !allChildrenReady) {
    for (let i = 0, l = children.length; i < l; i++) {
      const c = children[i];
      if (isUsedThisFrame(c, renderer.frameCount)) {
        recursivelyLoadNextRenderableTiles(c, renderer);
      }
    }
  } else {
    for (let i = 0, l = children.length; i < l; i++) {
      markVisibleTiles(children[i], renderer);
    }
  }
}

/**
 * toggle the visibility of the tiles
 * reference: 3DTilesRendererJS
 */
export function toggleTiles(tile: Tile, renderer: TilesRenderer): void {
  const isUsed = isUsedThisFrame(tile, renderer.frameCount);
  
  if (isUsed || tile.usedLastFrame) {
    let setActive = false;
    let setVisible = false;
    
    if (isUsed) {
      setActive = tile.active;
      setVisible = tile.visible;
    } else {
      resetFrameState(tile, renderer);
    }
    
    if (tile.hasRenderableContent && tile.loadingState === LOADED) {
      const wasVisible = (tile as any).__wasSetVisible;
      const wasActive = (tile as any).__wasSetActive;

      if (wasActive !== setActive) {
        renderer.setTileDelayedActive(tile, setActive);
        (tile as any).__wasSetActive = setActive;
      }

      if (wasVisible !== setVisible) {
        renderer.setTileDelayedVisible(tile, setVisible);
        (tile as any).__wasSetVisible = setVisible;
      }
    }

    tile.usedLastFrame = isUsed;

    const children = tile.children;
    for (let i = 0, l = children.length; i < l; i++) {
      toggleTiles(children[i], renderer);
    }
  }
}

