import { Object3D } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
/**
 * A bidirectional mapping between RigidBody objects and 3D objects.
 */
export declare class RigidBodyMapping {
    private static mapping;
    /**
     * Retrieves the entire mapping of all RigidBody objects.
     * @returns A map of RigidBody objects to 3D objects.
     */
    static get getAllPhysicsObjectMap(): Map<Ammo.btRigidBody, Object3D>;
    /**
     * Retrieves the entire mapping of all 3D objects.
     * @returns A map of 3D objects to RigidBody objects.
     */
    static get getAllGraphicObjectMap(): Map<Object3D, Ammo.btRigidBody>;
    /**
     * Adds a mapping between a 3D object and a RigidBody object.
     * @param object3D The 3D object.
     * @param physics The RigidBody object.
     */
    static addMapping(object3D: Object3D, physics: Ammo.btRigidBody): void;
    /**
     * Retrieves the RigidBody object associated with a given 3D object.
     * @param object3D The 3D object.
     * @returns The associated RigidBody object, or undefined if not found.
     */
    static getPhysicsObject(object3D: Object3D): Ammo.btRigidBody | undefined;
    /**
     * Retrieves the 3D object associated with a given RigidBody object.
     * @param physics The RigidBody object.
     * @returns The associated 3D object, or undefined if not found.
     */
    static getGraphicObject(physics: Ammo.btRigidBody): Object3D | undefined;
    /**
     * Removes the mapping associated with a given 3D object.
     * @param object3D The 3D object.
     */
    static removeMappingByGraphic(object3D: Object3D): void;
    /**
     * Removes the mapping associated with a given RigidBody object.
     * @param physics The RigidBody object.
     */
    static removeMappingByPhysics(physics: Ammo.btRigidBody): void;
}
