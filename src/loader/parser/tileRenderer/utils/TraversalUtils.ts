import { Tile } from '../core/Tile';

/**
 * Pre-order traversal callback function type
 * Return true means early termination of traversal
 */
export type BeforeCallback = (
  tile: Tile,
  parent: Tile | null,
  depth: number
) => boolean | void;

/**
 * Post-order traversal callback function type
 * Return true means early termination of traversal
 */
export type AfterCallback = (
  tile: Tile,
  parent: Tile | null,
  depth: number
) => boolean | void;

/**
 * Traverse tile set (depth-first)
 * @param tile Starting tile
 * @param beforeCb Pre-order traversal callback (called before visiting child nodes)
 * @param afterCb Post-order traversal callback (called after visiting child nodes)
 */
export function traverseSet(
  tile: Tile,
  beforeCb: BeforeCallback | null = null,
  afterCb: AfterCallback | null = null
): void {
  const stack: Array<Tile | null | number> = [];

  stack.push(tile);
  stack.push(null); // parent
  stack.push(0); // depth

  while (stack.length > 0) {
    const depth = stack.pop() as number;
    const parent = stack.pop() as Tile | null;
    const currentTile = stack.pop() as Tile;

    // Pre-order traversal
    if (beforeCb) {
      const shouldStop = beforeCb(currentTile, parent, depth);
      if (shouldStop === true) {
        if (afterCb) {
          afterCb(currentTile, parent, depth);
        }
        return;
      }
    }

    // Push children nodes into stack (reverse order, ensure forward access)
    const children = currentTile.children;
    if (children && children.length > 0) {
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i]);
        stack.push(currentTile);
        stack.push(depth + 1);
      }
    }

    // Post-order traversal
    if (afterCb) {
      const shouldStop = afterCb(currentTile, parent, depth);
      if (shouldStop === true) {
        return;
      }
    }
  }
}

/**
 * Traverse ancestors nodes (from current node to root node)
 * @param tile Starting tile
 * @param callback Callback function
 */
export function traverseAncestors(
  tile: Tile,
  callback: (tile: Tile, parent: Tile | null, depth: number) => void
): void {
  let current: Tile | null = tile;

  while (current) {
    const depth = current.depth;
    const parent = current.parent;

    callback(current, parent, depth);

    current = parent;
  }
}

