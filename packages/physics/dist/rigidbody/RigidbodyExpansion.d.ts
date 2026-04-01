import { Transform } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
/**
 * @class PhysicsTransformSync
 * @description This class manages the synchronization between the physics engine's rigid body and the 3D object's transform.
 * It allows enabling or disabling the automatic update of the physics body when the transform changes.
 */
export declare class PhysicsTransformSync {
    isUpdatingFromPhysics: boolean;
    private _btRigidbody;
    private _mass;
    private _enablePhysicsTransformSync;
    private transform;
    constructor(transform: Transform);
    configure(body: Ammo.btRigidBody, mass: number): void;
    /**
     * Enables or disables the transform sync with physics.
     * If enabled, changes to the transform will automatically update the physics body.
     */
    set enablePhysicsTransformSync(value: boolean);
    get enablePhysicsTransformSync(): boolean;
    private onPositionChange;
    private onRotationChange;
    private onScaleChange;
    destroy(): void;
}
/**
 * @class CollisionEventHandler
 * @description This class handles the registration and configuration of collision events for physics bodies.
 * It allows enabling or disabling collision events and setting custom collision callbacks.
 */
export declare class CollisionEventHandler {
    private _pointer;
    private _collisionEvent;
    private _enableCollisionEvent;
    configure(pointer: number): void;
    get enableCollisionEvent(): boolean;
    set enableCollisionEvent(value: boolean);
    get collisionEvent(): (contactPoint: Ammo.btManifoldPoint, selfBody: Ammo.btRigidBody, otherBody: Ammo.btRigidBody) => void;
    set collisionEvent(callback: (contactPoint: Ammo.btManifoldPoint, selfBody: Ammo.btRigidBody, otherBody: Ammo.btRigidBody) => void);
    private configureCollisionEvent;
    destroy(): void;
}
