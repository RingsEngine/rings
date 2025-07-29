import { GeometryBase } from "../core/geometry/GeometryBase";
/**
 * Torus Geometry
 * @group Geometry
 */
export declare class TorusGeometry extends GeometryBase {
    /**
     * Radius of torus
     */
    radius: number;
    /**
     * Pipe radius
     */
    tube: number;
    /**
     * Number of torus segments.
     */
    radialSegments: number;
    /**
     * Number of pipeline segments.
     */
    tubularSegments: number;
    /**
     *
     * @constructor
     * @param radius {number} Radius of torus, default value is 0.4
     * @param tube {number} Pipe radius, default value is 0.1.
     * @param radialSegments {number}Number of torus segments, default value is 32.
     * @param tubularSegments {number} Number of pipeline segments, defualt value is 32.
     */
    constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number);
    private initVertex;
}
