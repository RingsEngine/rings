import { ComponentBase } from "../ComponentBase";
import { Vector3 } from "../../math/Vector3";
/**
 * 围绕目标点进行轨道运动
 */
export declare class OrbitController extends ComponentBase {
    /**
     * internal camera
     */
    private _camera;
    /**
     * Whether to enable automatic rotation
     */
    autoRotate: boolean;
    /**
     * Automatic rotation speed coefficient
     */
    autoRotateSpeed: number;
    /**
     * Rotation speed coefficient
     */
    rotateFactor: number;
    /**
     * Scale speed coefficient
     */
    zoomFactor: number;
    /**
     * Angle translation velocity coefficient
     */
    panFactor: number;
    private _smooth;
    private _minDistance;
    private _maxDistance;
    private _maxPolarAngle;
    private _minPolarAngle;
    private _target;
    private _cTarget;
    private _position;
    private _cPosition;
    private _spherical;
    private _isMouseDown;
    private _lastMouseX;
    private _lastMouseY;
    private _isPanning;
    /**
     * @constructor
     */
    constructor();
    /**
     * Get the target position
     */
    get target(): Vector3;
    /**
     * Set the target position
     */
    set target(v: Vector3);
    /**
     * Set smoothing coefficient of controller
     */
    get smooth(): number;
    /**
     * Get smoothing coefficient of controller
     */
    set smooth(v: number);
    /**
     * Get the minimum distance between the camera and the target coordinate
     * @defaultValue 1
     */
    get minDistance(): number;
    /**
     * Set the minimum distance between the camera and the target position
     * min value: 0.000002
     * max value: `this._maxDistance` {@link maxDistance}
     */
    set minDistance(v: number);
    /**
     * Get the max distance between the camera and the target position
     * @defaultValue 100000
     */
    get maxDistance(): number;
    /**
     * Set the max distance between the camera and the target position
     * min - `this._maxDistance`
     * max - Infinity
     */
    set maxDistance(v: number);
    /**
     * Get the lower elevation limit of the camera from the xz plane
     * @defaultValue -90
     */
    get minPolarAngle(): number;
    /**
     * Set the lower elevation limit of the camera from the xz plane
     * min - -90
     * max - {@link maxPolarAngle}
     */
    set minPolarAngle(v: number);
    /**
     * Get the upper elevation limit of the camera from the xz plane
     * @defaultValue 90
     */
    get maxPolarAngle(): number;
    /**
     * Set the upper elevation limit of the camera to the xz plane
     * min - less than {@link minPolarAngle}
     * max - 90
     */
    set maxPolarAngle(v: number);
    get spherical(): Spherical;
    /**
     * @internal
     */
    start(): void;
    /**
     * @internal
     */
    onEnable(): void;
    /**
     * @internal
     */
    onDisable(): void;
    /**
     * @internal
     */
    onUpdate(): void;
    /**
     * @internal
     */
    private onWheel;
    /**
     * @internal
     */
    private onPointerDown;
    /**
     * @internal
     */
    private onPointerMove;
    /**
     * @internal
     */
    private onPointerUp;
    /**
     * @internal
     */
    updateCamera(): void;
    /**
     * @internal
     */
    private addEventListener;
    /**
     * @internal
     */
    private removeEventListener;
}
/**
 * @internal
 */
declare class Spherical {
    radius: number;
    phi: number;
    theta: number;
    coords: Vector3;
    constructor(radius?: number, phi?: number, theta?: number);
    set(radius: number, phi: number, theta: number): this;
    makeSafe(): this;
    setFromVector3(v: Vector3): this;
    setCoords(x: number, y: number, z: number): this;
    getCoords(): Vector3;
}
export {};
