import { BoundingBox } from "../core/bound/BoundingBox";
import { Object3D } from "../core/entities/Object3D";
import { Matrix4 } from "../math/Matrix4";
export declare class BoundUtil {
    private static readonly maxVector;
    private static readonly minVector;
    private static readonly genMeshMaxVector;
    private static readonly genMeshMinVector;
    private static readonly genMeshVectorList8;
    static genMeshBounds(obj: Object3D, bound?: BoundingBox): BoundingBox;
    static transformBound(matrix: Matrix4, source: BoundingBox, bound?: BoundingBox): BoundingBox;
}
