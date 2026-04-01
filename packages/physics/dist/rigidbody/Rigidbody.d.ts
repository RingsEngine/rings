import { Vector3, ComponentBase, Quaternion } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
import { ActivationState, CollisionFlags } from "./RigidbodyEnum";
import { CollisionShapeUtil } from "../utils/CollisionShapeUtil";
/**
 * Rigidbody Component
 * Rigid bodies can endow game objects with physical properties, allowing them to be controlled by the physics system and subjected to forces and torques, thus achieving realistic motion effects.
 * @group Components
 */
export declare class Rigidbody extends ComponentBase {
    private _initResolve;
    private _initializationPromise;
    private _btBodyInited;
    private _btRigidbody;
    private _shape;
    private _mass;
    private _margin;
    private _velocity;
    private _angularVelocity;
    private _linearVelocity;
    private _gravity;
    private _restitution;
    private _friction;
    private _rollingFriction;
    private _contactProcessingThreshold;
    private _damping;
    private _ccdSettings;
    private _activationState;
    private _collisionFlags;
    private _userIndex;
    private _isSilent;
    private collisionEventHandler;
    private physicsTransformSync;
    static readonly collisionShape: typeof CollisionShapeUtil;
    init(): void;
    start(): void;
    private initRigidbody;
    onUpdate(): void;
    private createColliderComponentShape;
    /**
     * 更新刚体的位置和旋转，并同步三维对象
     * @param position 可选，默认为三维对象的位置
     * @param rotation 可选，默认为三维对象的欧拉角旋转
     * @param clearFV  可选，清除刚体的力和速度，默认为 false
     */
    updateTransform(position?: Vector3, rotation?: Vector3 | Quaternion, clearFV?: boolean): void;
    /**
     * Remove the force and velocity of the rigid body
     */
    clearForcesAndVelocities(): void;
    /**
     * Check if rigidbody inited
     */
    get btBodyInited(): boolean;
    /**
     * Return internal Ammo.btRigidBody
     */
    get btRigidbody(): Ammo.btRigidBody;
    /**
     * Asynchronously retrieves the fully initialized rigid body instance.
     */
    wait(): Promise<Ammo.btRigidBody>;
    /**
     * The collision shape of the rigid body.
     */
    get shape(): Ammo.btCollisionShape;
    set shape(value: Ammo.btCollisionShape);
    /**
     * The collision group of the rigid body.
     */
    group: number;
    /**
     * The collision mask of the rigid body.
     */
    mask: number;
    /**
     * User index, which can be used as an identifier for the rigid body.
     */
    get userIndex(): number;
    /**
     * Sets the user index for the rigid body.
     */
    set userIndex(value: number);
    /**
     * Activation state of the rigid body.
     */
    get activationState(): ActivationState;
    /**
     * Sets the activation state of the rigid body.
     */
    set activationState(value: ActivationState);
    /**
     * Collision flags of the rigid body.
     */
    get collisionFlags(): number;
    /**
     * Adds a collision flag to the rigid body.
     */
    addCollisionFlag(value: CollisionFlags): void;
    /**
     * Removes a collision flag from the rigid body.
     */
    removeCollisionFlag(value: CollisionFlags): void;
    /**
     * Check if the rigidbody affect physics system
     */
    get isKinematic(): boolean;
    /**
     * Set the rigid body to a kinematic object
     */
    set isKinematic(value: boolean);
    /**
     * Check if the rigid body is a trigger
     */
    get isTrigger(): boolean;
    /**
     * Set the rigid body as a trigger
     */
    set isTrigger(value: boolean);
    /**
     * Check if the rigid body is visible in debug mode
     */
    get isDisableDebugVisible(): boolean;
    /**
     * Set the rigid body to be visible in debug mode
     */
    set isDisableDebugVisible(value: boolean);
    /**
     * Margin of the collision shape.
     */
    get margin(): number;
    /**
     * Sets the margin of the collision shape.
     * @default 0.02
     */
    set margin(value: number);
    /**
     * Damping of the rigid body.
     *
     * Sets the damping parameters. The first value is the linear damping, the second is the angular damping.
     * @param params - [linear damping, angular damping]
     */
    get damping(): [number, number];
    set damping(params: [number, number]);
    /**
     * Contact processing threshold of the rigid body.
     */
    get contactProcessingThreshold(): number;
    /**
     * Sets the contact processing threshold of the rigid body.
     */
    set contactProcessingThreshold(value: number);
    /**
     * Gravity vector applied to the rigid body.
     */
    get gravity(): Vector3;
    /**
     * Sets the gravity vector applied to the rigid body.
     */
    set gravity(value: Vector3);
    /**
     * Get friction value
     */
    get friction(): number;
    /**
     * Set friction value. default `0.5`
     */
    set friction(value: number);
    /**
     * Get rolling friction value
     */
    get rollingFriction(): number;
    /**
     * Set rolling friction value
     */
    set rollingFriction(value: number);
    /**
     * Get restitution value
     */
    get restitution(): number;
    /**
     * Set restitution value default `0.5`
     */
    set restitution(value: number);
    /**
     * Get velocity value of current object
     */
    get velocity(): Vector3;
    /**
     * Set velocity value of current object
     */
    set velocity(value: Vector3);
    /**
     * Get the angular velocity value of current object
     */
    get angularVelocity(): Vector3;
    /**
     * Set the angular velocity value of current object
     */
    set angularVelocity(value: Vector3);
    /**
     * Get the linear velocity value of current object
     */
    get linearVelocity(): Vector3;
    /**
     * Set the linear velocity value of current object
     */
    set linearVelocity(value: Vector3);
    /**
     * Get mass value
     */
    get mass(): number;
    /**
     * Set mass value. default `0.01`
     */
    set mass(value: number);
    /**
     * 刚体的静默状态。
     * 如果为 true 则任何物理对象与静默状态的对象发生碰撞时都不会触发双方的碰撞回调。
     */
    get isSilent(): boolean;
    set isSilent(value: boolean);
    /**
     * CCD (Continuous Collision Detection)
     *
     * Sets the CCD parameters. The first value is the motion threshold, the second is the swept sphere radius.
     * @param params - [motion threshold, swept sphere radius]
     */
    set ccdSettings(params: [number, number]);
    get ccdSettings(): [number, number];
    /**
     * Enable/disable collision callbacks
     */
    get enableCollisionEvent(): boolean;
    set enableCollisionEvent(value: boolean);
    /**
     * Collision callbacks
     */
    get collisionEvent(): (contactPoint: Ammo.btManifoldPoint, selfBody: Ammo.btRigidBody, otherBody: Ammo.btRigidBody) => void;
    set collisionEvent(callback: (contactPoint: Ammo.btManifoldPoint, selfBody: Ammo.btRigidBody, otherBody: Ammo.btRigidBody) => void);
    /**
     * Enables or disables the transform sync with physics.
     * If enabled, changes to the transform will automatically update the physics body.
     */
    get enablePhysicsTransformSync(): boolean;
    set enablePhysicsTransformSync(value: boolean);
    destroy(force?: boolean): void;
}
