import { ComponentBase, GeometryBase } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
import { ActivationState } from "../rigidbody/RigidbodyEnum";
import { Rigidbody } from "../rigidbody/Rigidbody";
export declare abstract class SoftbodyBase extends ComponentBase {
    private _initResolve;
    private _initializationPromise;
    protected _btBodyInited: boolean;
    protected _btSoftbody: Ammo.btSoftBody;
    protected _geometry: GeometryBase;
    /**
     * 软体的总质量，默认值为 `1`
     */
    mass: number;
    /**
     * 碰撞边距，默认值为 `0.15`
     */
    margin: number;
    /**
     * 碰撞组，默认值为 `1`
     */
    group: number;
    /**
     * 碰撞掩码，默认值为 `-1`
     */
    mask: number;
    /**
     * 锚点的影响力。影响力值越大，软体节点越紧密地跟随刚体的运动。通常，这个值在0到1之间。默认值为 `1`。
     */
    influence: number;
    /**
     * 是否禁用与锚定刚体之间的碰撞，默认值为 `false`。
     */
    disableCollision: boolean;
    /**
     * 设置软体激活状态。
     */
    set activationState(value: ActivationState);
    get btBodyInited(): boolean;
    get btSoftBody(): Ammo.btSoftBody;
    init(): void;
    start(): Promise<void>;
    protected abstract initSoftBody(): Ammo.btSoftBody;
    protected abstract configureSoftBody(softbody: Ammo.btSoftBody): void;
    /**
     * Asynchronously retrieves the fully initialized soft body instance.
     */
    wait(): Promise<Ammo.btSoftBody>;
    /**
     * Wraps the native soft body's `appendAnchor` method to anchor a node to a rigid body.
     * @param nodeIndex - Index of the node to anchor.
     * @param targetRigidbody - The rigid body to anchor to.
     * @param disCollision - Optional. Disable collisions if true.
     * @param influence - Optional. Anchor's influence.
     */
    appendAnchor(nodeIndex: number, targetRigidbody: Rigidbody, disCollision?: boolean, influence?: number): void;
    /**
     * 固定软体节点。
     * @param fixedNodeIndices 需要固定的节点索引。
     */
    applyFixedNodes(fixedNodeIndices: number[]): void;
    /**
     * 清除固定节点
     * @param index 需要清除的节点索引，如果未提供，则清除所有节点。
     */
    clearFixedNodes(index?: number): void;
    destroy(force?: boolean): void;
}
