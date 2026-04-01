import { Vector3, PlaneGeometry } from "@rings-webgpu/core";
import { SoftbodyBase } from "./SoftbodyBase";
import { Ammo } from "../Physics";
import { Rigidbody } from "../rigidbody/Rigidbody";
/**
 * 软体布料平面的各个角
 */
export type CornerType = "leftTop" | "rightTop" | "leftBottom" | "rightBottom" | "left" | "right" | "top" | "bottom" | "center";
export declare class ClothSoftbody extends SoftbodyBase {
    protected _geometry: PlaneGeometry;
    private _segmentW;
    private _segmentH;
    private _offset;
    private _btRigidbody;
    /**
     * 布料的四个角，默认以平面法向量计算各角。
     */
    clothCorners: [Vector3, Vector3, Vector3, Vector3];
    /**
     * 固定节点索引。
     */
    fixNodeIndices: CornerType[] | number[];
    /**
     * 添加锚点时需要的刚体。
     */
    anchorRigidbody: Rigidbody;
    /**
     * 布料的锚点。
     */
    anchorIndices: CornerType[] | number[];
    /**
     * 仅在设置 `anchorRigidbody` 后有效，表示布料软体相对刚体的位置。
     */
    anchorPosition: Vector3;
    /**
     * 仅在设置 `anchorRigidbody` 后有效，表示布料软体相对刚体的旋转。
     */
    anchorRotation: Vector3;
    start(): Promise<void>;
    protected initSoftBody(): Ammo.btSoftBody;
    protected configureSoftBody(clothSoftbody: Ammo.btSoftBody): void;
    private applyAnchor;
    /**
     * 将 CornerType 数组转换成节点索引数组。
     * @param cornerList 需要转换的 CornerType 数组。
     * @returns 节点索引数组
     */
    private getCornerIndices;
    private getVertexIndex;
    /**
     * 固定软体节点。
     * @param fixedNodeIndices 表示需要固定的节点索引或 CornerType 数组。
     */
    applyFixedNodes(fixedNodeIndices: CornerType[] | number[]): void;
    /**
     * 清除锚点，软体将会从附加的刚体上脱落
     */
    clearAnchors(): void;
    onUpdate(): void;
    destroy(force?: boolean): void;
}
