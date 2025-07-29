import { GeometryBase } from "../core/geometry/GeometryBase";
/**
 * Cylinder geometry
 * @group Geometry
 */
export declare class CylinderGeometry extends GeometryBase {
    /**
     * The radius of the top of the cylinder
     */
    radiusTop: number;
    /**
     * The radius of the bottom of the cylinder
     */
    radiusBottom: number;
    /**
     * The height of the cylinder
     */
    height: number;
    /**
     * Number of segments around the side of the cylinder
     */
    radialSegments: number;
    /**
     * The number of segments along the height of the cylindrical side
     */
    heightSegments: number;
    /**
     * Indicate whether the bottom surface of the cone is open or capped. The default value is false, which means that the bottom surface is capped by default.
     */
    openEnded: boolean;
    /**
     * Starting angle of the first segment
     */
    thetaStart: number;
    /**
     * The center angle of the circular sector on the bottom of the cylinder, with a default value of 2 * PI, makes it a complete cylinder.
     */
    thetaLength: number;
    /**
     *
     * @constructor
     * @param radiusTop
     * @param radiusBottom
     * @param height
     * @param radialSegments
     * @param heightSegments
     * @param openEnded
     * @param thetaStart
     * @param thetaLength
     */
    constructor(radiusTop?: number, radiusBottom?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number);
    /**
     * @internal
     * @param start
     * @param count
     * @param index
     */
    private addGroup;
    protected buildGeometry(): void;
}
