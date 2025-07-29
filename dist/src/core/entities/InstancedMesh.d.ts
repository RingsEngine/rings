import { Material } from "../..";
import { Matrix4 } from "../../math/Matrix4";
import { GeometryBase } from "../geometry/GeometryBase";
import { Object3D } from "./Object3D";
export declare class InstancedMesh extends Object3D {
    private _geometry;
    private _material;
    private _instanceList;
    constructor(geometry: GeometryBase, material: Material, length: number);
    setMatrixAt(index: number, matrix: Matrix4): this;
}
