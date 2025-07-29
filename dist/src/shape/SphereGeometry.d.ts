import { GeometryBase } from "../core/geometry/GeometryBase";
export declare class SphereGeometry extends GeometryBase {
    shape_vertices: any[];
    shape_indices: any[];
    radius: number;
    widthSegments: number;
    heightSegments: number;
    phiStart: number;
    phiLength: number;
    thetaStart: number;
    thetaLength: number;
    /**
     * 球体几何体
     * @constructor
     * @param radius 球体半径
     * @param widthSegments 定义水平分段数
     * @param heightSegments 定义垂直分段数
     * @param phiStart 球体赤道线起始点的弧度
     * @param phiLength 球体赤道线的弧长
     * @param thetaStart 球体经线起始点的弧度
     * @param thetaLength 球体经线的弧长
     */
    constructor(radius: any, widthSegments: any, heightSegments: any, phiStart?: any, phiLength?: any, thetaStart?: any, thetaLength?: any);
    protected buildGeometry(): void;
}
