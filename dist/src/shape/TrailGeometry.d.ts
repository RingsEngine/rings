import { GeometryBase } from "../core/geometry/GeometryBase";
/**
 * Plane geometry
 * @group Geometry
 */
export declare class TrailGeometry extends GeometryBase {
    /**
     * Number of trail segments of a plane
     */
    segment: number;
    private row;
    /**
     *
     * @constructor
     */
    constructor(segment: number);
    private buildGeometry;
}
