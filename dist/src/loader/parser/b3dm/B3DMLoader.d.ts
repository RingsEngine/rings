import { B3DMLoaderBase } from "./B3DMLoaderBase";
import { Matrix4 } from "../../../math/Matrix4";
export declare class B3DMLoader extends B3DMLoaderBase {
    adjustmentTransform: Matrix4;
    private gltfBuffer;
    private static tempMatrix;
    constructor();
    parse(buffer: ArrayBuffer): Promise<any>;
    static decodeText(array: any): string;
}
