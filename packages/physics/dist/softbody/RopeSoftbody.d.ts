import { Vector3, GeometryBase } from "@rings-webgpu/core";
import { SoftbodyBase } from "./SoftbodyBase";
import { Ammo } from "../Physics";
import { Rigidbody } from "../rigidbody/Rigidbody";
export declare class RopeSoftbody extends SoftbodyBase {
    /**
     * 绳索两端的固定选项，默认值为 `0`
     *
     * `0`：两端不固定，`1`：起点固定，`2`：终点固定，`3`：两端固定
     */
    fixeds: number;
    /**
     * 固定节点索引，与 `fixeds` 属性作用相同，但可以更自由的控制任意节点。
     */
    fixNodeIndices: number[];
    /**
     * 绳索弹性，值越大弹性越低，通常设置为 0 到 1 之间，默认值为 `0.5`。
     */
    elasticity: number;
    /**
     * 绳索起点处锚定的刚体，设置此项后绳索的起点将与该刚体的位置相同。
     */
    anchorRigidbodyHead: Rigidbody;
    /**
     * 绳索终点处锚定的刚体，设置此项后绳索的终点将与该刚体的位置相同。
     */
    anchorRigidbodyTail: Rigidbody;
    /**
     * 锚点的起点偏移量，表示起点与锚定的刚体之间的相对位置。
     */
    anchorOffsetHead: Vector3;
    /**
     * 锚点的终点偏移量，表示终点与锚定的刚体之间的相对位置。
     */
    anchorOffsetTail: Vector3;
    private _positionHead;
    private _positionTail;
    start(): Promise<void>;
    protected initSoftBody(): Ammo.btSoftBody;
    protected configureSoftBody(ropeSoftbody: Ammo.btSoftBody): void;
    /**
     * set rope elasticity to 0~1
     */
    setElasticity(value: number): void;
    /**
     * 清除锚点，软体将会从附加的刚体上脱落
     * @param isPopBack 是否只删除一个锚点，当存在首尾两个锚点时，删除终点的锚点。
     */
    clearAnchors(isPopBack?: boolean): void;
    onUpdate(): void;
    destroy(force?: boolean): void;
    /**
     * 构建绳索（线条）几何体，注意添加材质时需要将拓扑结构 `topology` 设置为 `'line-list'`。
     * @param segmentCount 分段数
     * @param startPos 起点
     * @param endPos 终点
     * @returns GeometryBase
     */
    static buildRopeGeometry(segmentCount: number, startPos: Vector3, endPos: Vector3): GeometryBase;
}
