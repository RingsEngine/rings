import { Color } from "../math/Color";
import { Triangle } from "../math/Triangle";
import { Vector2 } from "../math/Vector2";
import { Vector3 } from "../math/Vector3";
/**
 * 拾取结果信息，包含目标Object3D、位置、UV等数据
 * @internal   // 内部使用
 * @group IO   // 属于IO组
 */
export declare class PickResult {
    /**
     * 模型上的相交点(局部坐标系)
     */
    localPosition: Vector3;
    /**
     * 模型上的相交点(世界坐标系)
     */
    worldPosition: Vector3;
    /**
     * 模型上的UV坐标
     * 只有当对象的PickType为UVPick且模型有UV时才有效
     * @see PickType
     */
    uv: Vector2;
    /**
     * 网格相交位置的三角形索引
     */
    faceIndex: number;
    isIn: boolean;
    t: number;
    u: number;
    v: number;
    /**
     * 网格相交位置的三角形数据
     */
    triangle: Triangle;
    /**
     * @internal
     * 网格相交位置的uv0坐标
     */
    v0: number;
    /**
     * @internal
     * 网格相交位置的uv1坐标
     */
    v1: number;
    /**
     * @internal
     */
    v2: number;
    /**
     * @internal
     */
    pickList: any;
    /**
     * @internal
     */
    color: Color;
}
