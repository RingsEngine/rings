import { BytesArray } from "../../../../util/BytesArray";
import { BlendShapePropertyData } from "./BlendShapePropertyData";
export declare class BlendShapeData {
    vertexCount: number;
    shapeNames: string[];
    shapeIndexs: number[];
    blendCount: number;
    blendShapePropertyDatas: BlendShapePropertyData[];
    blendShapeMap: Map<string, BlendShapePropertyData>;
    formBytes(byteArray: BytesArray): BytesArray;
}
