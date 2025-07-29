import { GeometryBase } from "../core/geometry/GeometryBase";
import { Vector3 } from "../math/Vector3";
export declare class PlaneGeometry extends GeometryBase {
    width: number;
    height: number;
    segmentW: number;
    segmentH: number;
    up: Vector3;
    constructor(width: number, height: number, segmentW?: number, segmentH?: number, up?: Vector3);
    private buildGeometry;
}
