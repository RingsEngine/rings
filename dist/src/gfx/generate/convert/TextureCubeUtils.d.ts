import { Quaternion } from "../../../math/Quaternion";
export declare enum CubeMapFaceEnum {
    Left = 0,
    Right = 1,
    Bottom = 2,
    Top = 3,
    Back = 4,
    Front = 5
}
export declare class TextureCubeUtils {
    static getRotationToFace(face: number): Quaternion;
}
