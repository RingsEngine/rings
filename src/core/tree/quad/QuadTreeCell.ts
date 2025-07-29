import { Vector3 } from "../../../math/Vector3";
import { QuadAABB } from "./QuadAABB";

/**
 * 四叉树节点单元类
 * 用于构建四叉树空间索引结构的基本单元
 */
export class QuadTreeCell {
  public static NUM_CHILDREN: number = 4; // 子节点数量常量（四叉树固定为4）

  public childCellIndices: Array<number>; // 子节点索引数组

  public nodeIndices: Array<number>; // 当前节点包含的对象索引数组

  public aabb: QuadAABB; // 轴对齐包围盒（定义节点空间范围）

  public points: Array<Vector3>; // 顶点数据数组

  constructor(aabox: QuadAABB) {
    this.childCellIndices = new Array<number>();
    this.childCellIndices.length = QuadTreeCell.NUM_CHILDREN;
    this.nodeIndices = new Array<number>();
    this.clear();
    if (aabox) {
      this.aabb = aabox.clone();
    } else {
      this.aabb = new QuadAABB();
    }
  }

  /**
   * 判断是否为叶节点
   * @returns 如果是叶节点（不包含子节点）返回true
   *
   * @注 叶节点意味着当前节点包含实际对象数据，
   * 而非叶节点则应该包含子节点（可能同时包含对象数据）
   */
  public isLeaf(): boolean {
    return this.childCellIndices[0] == -1;
  }

  public clear(): void {
    for (var i: number = 0; i < QuadTreeCell.NUM_CHILDREN; i++) {
      this.childCellIndices[i] = -1;
    }
    this.nodeIndices.splice(0, this.nodeIndices.length);
  }
}
