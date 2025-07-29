import { Matrix4 } from "../../../..";
import { BlendShapeData } from "./BlendShapeData";
export declare class PrefabMeshData {
    name: string;
    meshName: string;
    meshID: string;
    vertexCount: number;
    vertexStrip: number;
    vertexBuffer: Float32Array;
    indices: Uint16Array | Uint32Array;
    attributes: {
        attribute: string;
        dim: number;
        pos: number;
    }[];
    bones: string[];
    bindPose: Matrix4[];
    blendShapeData: BlendShapeData;
}
