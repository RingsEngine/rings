import { GeometryBase } from "../core/geometry/GeometryBase";
/**
 * Box geometry
 * @group Geometry
 */
export declare class BoxGeometry extends GeometryBase {
    /**
     * box width
     */
    width: number;
    /**
     * box height
     */
    height: number;
    /**
     * box depth
     */
    depth: number;
    /**
     *
     * @constructor
     * @param width {number} box width, default value is 1
     * @param height {number} box height, default value is 1
     * @param depth {number} box depth, default value is 1
     */
    constructor(width?: number, height?: number, depth?: number);
    private initVertex;
}
