import { BytesArray } from "../../../..";
export declare class BlendShapePropertyData {
    shapeName: string;
    shapeIndex: number;
    frameCount: number;
    blendPositionList: Float32Array<ArrayBuffer>;
    blendNormalList: Float32Array<ArrayBuffer>;
    formBytes(byteArray: BytesArray): void;
}
