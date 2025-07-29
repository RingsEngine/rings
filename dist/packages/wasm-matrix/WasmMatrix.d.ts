import matrix from "./matrix";
export type FloatArray = Float32Array | Float64Array;
export declare function CreateFloatArray(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float64Array<ArrayBufferLike> | Float32Array<ArrayBufferLike>;
export declare class WasmMatrix {
    static matrixBuffer: FloatArray;
    static matrixSRTBuffer: FloatArray;
    static matrixContinuedSRTBuffer: FloatArray;
    static matrixStateBuffer: Int32Array;
    static matrixBufferPtr: number;
    static matrixSRTBufferPtr: number;
    static matrixContinuedSRTBufferPtr: number;
    static matrixStateBufferPtr: number;
    static wasm: typeof matrix;
    static stateStruct: number;
    static useDoublePrecision: boolean;
    static init(count: number, useDoublePrecision?: boolean): Promise<void>;
    static allocMatrix(count: number): void;
    static updateAllContinueTransform(start: number, end: number, dt: number): void;
    static setParent(matIndex: number, x: number, depthOrder: number): void;
    static setTranslate(matIndex: number, x: number, y: number, z: number): void;
    static setRotation(matIndex: number, x: number, y: number, z: number): void;
    static setScale(matIndex: number, x: number, y: number, z: number): void;
    static setContinueTranslate(matIndex: number, x: number, y: number, z: number): void;
    static setContinueRotation(matIndex: number, x: number, y: number, z: number): void;
    static setContinueScale(matIndex: number, x: number, y: number, z: number): void;
}
