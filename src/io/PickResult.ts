import { Color } from "../math/Color";
import { Triangle } from "../math/Triangle";
import { Vector2 } from "../math/Vector2";
import { Vector3 } from "../math/Vector3";
/**
 * 拾取结果信息，包含目标Object3D、位置、UV等数据
 * @internal   // 内部使用
 * @group IO   // 属于IO组
 */
export class PickResult {
  /**
   * 模型上的相交点(局部坐标系)
   */
  public localPosition: Vector3 = new Vector3();

  /**
   * 模型上的相交点(世界坐标系)
   */
  public worldPosition: Vector3 = new Vector3();

  /**
   * 模型上的UV坐标
   * 只有当对象的PickType为UVPick且模型有UV时才有效
   * @see PickType
   */
  public uv: Vector2 = new Vector2();

  /**
   * 网格相交位置的三角形索引
   */
  public faceIndex: number;

  public isIn: boolean = false;
  public t: number = 0;
  public u: number = 0;
  public v: number = 0;

  /**
   * 网格相交位置的三角形数据
   */
  public triangle: Triangle;

  /**
   * @internal
   * 网格相交位置的uv0坐标
   */
  public v0: number;

  /**
   * @internal
   * 网格相交位置的uv1坐标
   */
  public v1: number;

  /**
   * @internal
   */
  public v2: number;

  /**
   * @internal
   */
  public pickList: any;

  /**
   * @internal
   */
  public color: Color;
}
