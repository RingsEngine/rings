import { CollectInfo } from "../../..";
import { Ray } from "../../../math/Ray";
import { Vector3 } from "../../../math/Vector3";
import { BoundingBox } from "../../bound/BoundingBox";
import { Frustum } from "../../bound/Frustum";
import { OctreeEntity } from "./OctreeEntity";

export class Octree {
  private static _v1 = new Vector3();
  private static _v2 = new Vector3();
  public readonly entities: Map<string, OctreeEntity>;
  public readonly box: BoundingBox;
  public readonly subTrees: Octree[] = [];
  public readonly parent: Octree;
  public readonly level: number;
  public static readonly maxSplitLevel = 6;
  private static readonly autoSplitLevel = 3;
  public readonly index: number;
  public readonly uuid: string;

  constructor(
    size: BoundingBox,
    index: number = 0,
    parent: Octree = null,
    level: number = 0
  ) {
    this.parent = parent;
    this.box = size.clone() as BoundingBox;
    this.level = level;
    this.index = index;
    this.uuid = level + "_" + index;
    this.entities = new Map<string, OctreeEntity>();
  }

  public tryInsertEntity(entity: OctreeEntity): boolean {
    let userBox = entity.renderer.object3D.bound as any;
    if (this.level == 0 || this.box.containsBox(userBox)) {
      if (this.subTrees.length == 0) {
        if (this.level < Octree.maxSplitLevel) {
          this.splitTree();
        }
      }

      let holdByChild: boolean;
      if (this.subTrees.length > 0) {
        for (let child of this.subTrees) {
          if (child.tryInsertEntity(entity)) {
            holdByChild = true;
            break;
          }
        }
      }
      if (!holdByChild) {
        entity.enterNode(this);
      }

      return true;
    }
    return false;
  }

  private splitTree() {
    if (this.subTrees.length == 0) {
      const v = Octree._v1;
      const halfsize = this.box.extents.clone();
      let childLevel: number = this.level + 1;
      let index = 0;
      for (let x = 0; x < 2; x++) {
        for (let y = 0; y < 2; y++) {
          for (let z = 0; z < 2; z++) {
            const box = new BoundingBox();
            this.box.min.add(v.set(x, y, z).multiply(halfsize), box.min);
            box.min.add(halfsize, box.max);
            box.setFromMinMax(box.min, box.max);
            let subTree = new Octree(box, index++, this, childLevel);
            this.subTrees.push(subTree);
          }
        }
      }
    }
  }

  __rayCastTempVector: Vector3 = new Vector3();
  rayCasts(ray: Ray, ret: OctreeEntity[]): boolean {
    if (
      this.level == 0 ||
      ray.intersectBox(this.box, this.__rayCastTempVector)
    ) {
      if (this.entities.size > 0) {
        ret.push(...this.entities.values());
      }
      for (let child of this.subTrees) {
        child.rayCasts(ray, ret);
      }
      return true;
    }
    return false;
  }

  frustumCasts(frustum: Frustum, ret: OctreeEntity[]) {
    if (this.level == 0 || frustum.containsBox2(this.box) > 0) {
      if (this.entities.size > 0) {
        for (const item of this.entities.values()) {
          if (
            this.level > Octree.autoSplitLevel ||
            frustum.containsBox2(item.renderer.object3D.bound) > 0
          ) {
            ret.push(item);
          }
        }
      }
      for (let child of this.subTrees) {
        child.frustumCasts(frustum, ret);
      }
      return true;
    }
    return false;
  }

  getRenderNode(frustum: Frustum, ret: CollectInfo) {
    if (this.level == 0 || frustum.containsBox2(this.box) > 0) {
      if (this.entities.size > 0) {
        for (const item of this.entities.values()) {
          if (
            this.level > Octree.autoSplitLevel ||
            frustum.containsBox2(item.renderer.object3D.bound) > 0
          ) {
            if (item.renderer.renderOrder < 3000) {
              ret.opaqueList.push(item.renderer);
            } else if (item.renderer.renderOrder >= 3000) {
              ret.transparentList.push(item.renderer);
            }
          }
        }
      }
      for (let child of this.subTrees) {
        child.getRenderNode(frustum, ret);
      }
      return true;
    }
    return false;
  }

  boxCasts(box: BoundingBox, ret: OctreeEntity[]) {
    if (box.intersectsBox(this.box)) {
      if (this.entities.size > 0) {
        ret.push(...this.entities.values());
      }
      for (let child of this.subTrees) {
        child.boxCasts(box, ret);
      }
      return true;
    }
    return false;
  }

  clean(): this {
    for (let item of this.entities.values()) {
      item.leaveNode();
    }
    this.entities.clear();
    return this;
  }
}
