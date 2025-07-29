import { Vector3 } from "../../../math/Vector3";
import { QuadAABB } from "./QuadAABB";
/**
 * 四叉树节点单元类
 * 用于构建四叉树空间索引结构的基本单元
 */
export declare class QuadTreeCell {
    static NUM_CHILDREN: number;
    childCellIndices: Array<number>;
    nodeIndices: Array<number>;
    aabb: QuadAABB;
    points: Array<Vector3>;
    constructor(aabox: QuadAABB);
    /**
     * 判断是否为叶节点
     * @returns 如果是叶节点（不包含子节点）返回true
     *
     * @注 叶节点意味着当前节点包含实际对象数据，
     * 而非叶节点则应该包含子节点（可能同时包含对象数据）
     */
    isLeaf(): boolean;
    clear(): void;
}
