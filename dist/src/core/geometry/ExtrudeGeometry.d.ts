import { Vector3 } from "../../math/Vector3";
import { GeometryBase } from "./GeometryBase";
declare class Section {
    normal: Vector3;
    fixNormal: Vector3;
    center: Vector3;
    rotateShape: Vector3[];
    distance: number;
    readonly index: number;
    constructor(i: number);
}
export declare class ExtrudeGeometry extends GeometryBase {
    vScale: number;
    uNegate: boolean;
    sections: Section[];
    /**
     * 挤压几何体生成器
     * 用于将2D形状沿3D路径挤压形成3D几何体
     * 关于起点和终点的处理说明：
     * 请勿手动将起点克隆到形状数组末尾
     *
     * closed参数说明：
     * true - 自动闭合形状（会克隆起点到末尾）
     * false - 保持开放形状
     * @param shaderReflection ShaderReflection
     */
    build(shape: Vector3[], isShapeClosed: boolean, path: Vector3[], vScale?: number, uNegate?: boolean): this;
    private buildSections;
    private buildGeometry;
}
export {};
