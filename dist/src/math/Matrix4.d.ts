import { FloatArray } from "@rings/wasm-matrix/WasmMatrix";
import { Quaternion } from "./Quaternion";
import { Vector3 } from "./Vector3";
/**
 * math 4*4 matrix
 * @group Math
 */
export declare class Matrix4 {
    /**
     * matrix44 bytes block size
     */
    static blockBytes: number;
    /**
     * @internal
     */
    static block: number;
    /**
     * matrix do total count
     */
    static allocCount: number;
    /**
     * quantity allocated for each capacity expansion
     */
    static allocOnceCount: number;
    /**
     * matrix has max limit count
     */
    static maxCount: number;
    /**
     * current matrix use count
     */
    static useCount: number;
    /**
     * @internal
     */
    static buffer: ArrayBuffer;
    /**
     * @internal
     * wasm use memory use first ptr
     */
    static wasmMatrixPtr: number;
    /**
     * matrix do use share bytesArray
     */
    static dynamicMatrixBytes: FloatArray;
    /**
     * cache all use do matrix
     */
    static dynamicGlobalMatrixRef: Matrix4[];
    /**
     * @internal
     */
    static wasm: any;
    /**
     * help fix global matrix 0
     */
    static help_matrix_0: Matrix4;
    /**
     * help fix global matrix 1
     */
    static help_matrix_1: Matrix4;
    /**
     * help fix global matrix 2
     */
    static help_matrix_2: Matrix4;
    /**
     * help fix global matrix 3
     */
    static helpMatrix: Matrix4;
    /**
     * help fix global matrix 4
     */
    static helpMatrix2: Matrix4;
    private static _getEulerMatrix;
    private static _zero;
    private static _one;
    private static _prs;
    /**
     * matrix index at global matrix list
     */
    index: number;
    /**
     * @internal
     */
    offset: number;
    /**
     * matrix raw data format FloatArray
     * @see {@link FloatArray}
     */
    rawData: FloatArray;
    private _position;
    /**
     * alloc web runtime cpu memory totalCount * 4(float) * 4
     * init matrix memory by totalCount * 4(float) * 4
     * @param count every alloc matrix count
     */
    static allocMatrix(allocCount: number): void;
    /**
     * create matrix from two direction
     * @param fromDirection first direction
     * @param toDirection  second direction
     * @param target ref matrix
     * @returns return new one matrix
     */
    static fromToRotation(fromDirection: Vector3, toDirection: Vector3, target?: Matrix4): Matrix4;
    /**
     * Generate a matrix (rotate degrees with x,y,z as the center axis)
     * @param x x on the central axis
     * @param y y on the central axis
     * @param z z on the central axis
     * @param degrees rotation angle
     * @returns Matrix4 result
     */
    static getAxisRotation(x: number, y: number, z: number, degrees: number): Matrix4;
    /**
     * Arrange the Euler values
     * @param euler Euler values
     */
    static sanitizeEuler(euler: Vector3): void;
    /**
     *
     * @param euler
     */
    static makePositive(euler: Vector3): void;
    /**
     * Convert the matrix to Euler angles
     * @param matrix Matrix to be transformed
     * @param v euler angle
     * @returns
     */
    static matrixToEuler(matrix: Matrix4, v: Vector3): boolean;
    /**
     * Multiply the world matrix, specifying parameters and results according to the index
     * @param aMat Matrix to be multiplied (please specify index)
     * @param bMat Matrix to be multiplied (please specify index)
     * @param target_Mat Result matrix (get results based on index)
     */
    static matrixMultiply(aMat: Matrix4, bMat: Matrix4, target_Mat: Matrix4): void;
    /**
     * World matrix extension, according to the index to specify parameters and results
     * @param aMat Matrix to be multiplied (please specify index)
     * @param bMat Matrix to be multiplied (please specify index)
     * @param target_Mat Result matrix (get results based on index)
     */
    static matrixAppend(aMat: Matrix4, bMat: Matrix4, target_Mat: Matrix4): void;
    /**
     * The Y-axis is rotated between the world matrix, and the parameters and results are specified according to the index
     * @param aMat Matrix to be multiplied (please specify index)
     * @param bMat Matrix to be multiplied (please specify index)
     * @param target_Mat Result matrix (get results based on index)
     */
    static matrixRotateY(rad: number, target_Mat: Matrix4): void;
    /**
     * Rotate the world matrix, specifying parameters and results according to the index
     * @param aMat Matrix to be multiplied (please specify index)
     * @param bMat Matrix to be multiplied (please specify index)
     * @param target_Mat Result matrix (get results based on index)
     */
    static matrixRotate(rad: number, axis: Vector3, target_Mat: Matrix4): void;
    /**
     *
     * @param local --
     */
    constructor(doMatrix?: boolean);
    /**
     * current matrix move position and rotation to target
     * @param eye eye position
     * @param at target position
     * @param up normalize axis way
     */
    lookAt(eye: Vector3, at: Vector3, up?: Vector3): void;
    private static floatArray;
    /**
     * matrix multiply
     * @param mat4 multiply target
     */
    multiply(mat4: Matrix4): void;
    /**
     *
     * @param a
     * @param b
     * @returns
     */
    multiplyMatrices(a: Matrix4, b: Matrix4): this;
    /**
     * convert a vector3 to this matrix space
     * if output not set , return a new one
     * @param v target vector3
     * @param output save target
     * @returns save target
     */
    multiplyPoint3(v: Vector3, output?: Vector3): Vector3;
    multiplyVector4(a: Vector3, out?: Vector3): Vector3;
    /**
     * convert a vector3 to this matrix space
     * if output not set , return a new one
     * @param v convert target
     * @param target ref one vector3
     * @returns Vector3
     */
    transformVector4(v: Vector3, target?: Vector3): Vector3;
    /**
     * Convert projection coordinates to 3D coordinates
     * @param v vector3 target
     * @param output ref vector3d
     * @returns
     */
    perspectiveMultiplyPoint3(v: Vector3, output: Vector3): boolean;
    /**
     * set matrix perspective
     * @param fov perspective angle 0 ~ 90
     * @param aspect aspect ratio
     * @param zn near plane
     * @param zf far plane
     */
    perspective(fov: number, aspect: number, zn: number, zf: number): void;
    perspective3(fov: number, aspect: number, near: number, far: number): void;
    frustum(l: number, r: number, b: number, t: number, n: number, f: number): void;
    /**
     * set matrix orthogonal projection
     * @param w screen width
     * @param h screen height
     * @param zn camera near plane
     * @param zf camera far plane
     * @returns this matrix
     */
    ortho(w: number, h: number, zn: number, zf: number): this;
    /**
     * set matrix orthogonal projection by view side
     * @param left orthogonal view left
     * @param right orthogonal view right
     * @param bottom orthogonal view bottom
     * @param top orthogonal view top
     * @param near camera near plane
     * @param far camera far plane
     * @returns this matrix
     */
    orthoZO(left: number, right: number, bottom: number, top: number, near: number, far: number): this;
    /**
     * set matrix orthogonal projection by view center
     */
    orthoOffCenter(l: number, r: number, b: number, t: number, zn: number, zf: number): void;
    /**
     * set matrix from two direction
     * @param fromDirection first direction
     * @param toDirection second direction
     */
    transformDir(fromDirection: Vector3, toDirection: Vector3): this;
    /**
     * multiply matrix a b
     * @param lhs target matrix
     */
    append(lhs: Matrix4): void;
    /**
     * matrix a add matrix b
     * @param lhs target matrix.
     * @returns Matrix4 result.
     */
    add(lhs: Matrix4): Matrix4;
    /**
     * matrix a sub matrix b
     * @param lhs target matrix b.
     * @returns Matrix4 .
     */
    sub(lhs: Matrix4): Matrix4;
    /**
     * Matrix times components.
     * @param v This matrix is going to be multiplied by this value
     * @returns Matrix4 Returns a multiplicative result matrix.
     */
    mult(v: number): Matrix4;
    appendRotation(degrees: number, axis: Vector3): void;
    /**
     * Create a matrix based on the axis and rotation Angle (the matrix created by rotating the degrees according to the axis)
     * @param degrees Angle of rotation.
     * @param axis Rotation Angle around axis axis. Axis needs to be specified as the orientation of an axis between x/y/z
     */
    createByRotation(degrees: number, axis: Vector3): this;
    /**
     * Append the triaxial scaling value
     * @param xScale x axis scaling
     * @param yScale y axis scaling
     * @param zScale z axis scaling
     */
    appendScale(xScale: number, yScale: number, zScale: number): void;
    /**
     * A scaling matrix is generated and other properties are reset
     * @param xScale x axis scaling
     * @param yScale y axis scaling
     * @param zScale z axis scaling
     */
    createByScale(xScale: number, yScale: number, zScale: number): void;
    /**
     * Plus a translation matrix
     * @param x x axis scaling
     * @param y y axis scaling
     * @param z z axis scaling
     */
    appendTranslation(x: number, y: number, z: number): void;
    /**
     * Returns a clone of the current matrix
     * @returns Matrix4 The cloned matrix
     */
    clone(): Matrix4;
    /**
     * Assigns a value to one row of the current matrix
     * @param row Row of copy
     * @param Vector3 Value of copy
     */
    copyRowFrom(row: number, Vector3: Vector3): void;
    /**
     * One of the rows in the copy matrix stores the values in Vector3.
     * @param row Row of copy
     * @param Vector3 Copy the storage target
     */
    copyRowTo(row: number, Vector3: Vector3): void;
    /**
     * Assigns the value of a matrix to the current matrix.
     * @param sourceMatrix3D source Matrix
     * @returns Returns the current matrix
     */
    copyFrom(sourceMatrix3D: Matrix4): Matrix4;
    /**
     * CoMath.PIes the value of the current matrix to a float array.
     * @param vector The target array.
     * @param index copy from the index of the array.
     * @param transpose Whether to transpose the current matrix.
     */
    copyRawDataTo(vector: FloatArray, index?: number, transpose?: boolean): void;
    /**
     * Assigns a value to a column of the current matrix
     * @param col column
     * @param Vector3 Source of value
     */
    copyColFrom(col: number, Vector3: Vector3): void;
    /**
     * Copy a column of the current matrix
     * @param col column
     * @param Vector3 Target of copy
     */
    copyColTo(col: number, Vector3: Vector3): void;
    /**
     * Copy the current matrix
     * @param dest Target of copy
     */
    copyToMatrix3D(dest: Matrix4): void;
    /**
     * Calculate rotation matrix
     * @param quaternion Rotate the quaternion
     * @returns
     */
    makeRotationFromQuaternion(quaternion: Quaternion): Matrix4;
    private static decomposeRawData;
    /**
     * Decompose the current matrix
     * @param orientationStyle The default decomposition type is Orientation3D.EULER_ANGLES
     * @see Orientation3D.AXIS_ANGLE
     * @see Orientation3D.EULER_ANGLES
     * @see Orientation3D.QUATERNION
     * @returns Vector3[3] pos rot scale
     */
    decompose(orientationStyle?: string, target?: Vector3[]): Vector3[];
    /**
     * Get the Euler vector
     * @param target Vector of results
     * @param quaternion Rotate the quaternion
     * @param isDegree Whether to convert to Angle
     * @param order convert order
     * @returns
     */
    static getEuler(target: Vector3, quaternion: Quaternion, isDegree?: boolean, order?: string): Vector3;
    /**
     * Calculate the combined matrix of displacement, rotation and scaling
     * @param position translation
     * @param quaternion rotation
     * @param scale scale
     * @returns
     */
    compose(position: Vector3, quaternion: Quaternion, scale: Vector3): this;
    /**
     * The current matrix transforms a vector
     * @param v Vector to transform
     * @param target The default is null and if the current argument is null then a new Vector3 will be returned
     * @returns Vector3 The transformed vector
     */
    deltaTransformVector(v: Vector3, target?: Vector3): Vector3;
    /**
     * Unifies the current matrix
     */
    identity(): this;
    /**
     * Fill the current matrix
     * @param value The filled value
     */
    fill(value: number): void;
    /**
     * Invert the current matrix
     */
    invers33(): void;
    /**
     * Invert the current matrix
     * @returns boolean Whether can invert it
     */
    invert(): boolean;
    /**
     * Converts the current coordinates to the world coordinates
     * @param v Current coordinates
     * @param target world coordinate
     * @returns world coordinate
     */
    transformPoint(v: Vector3, target?: Vector3): Vector3;
    /**
     * Transforming a 3D vector with the current matrix does not deal with displacement
     * @param v Vector of transformation
     * @param target If the current argument is null then a new Vector3 will be returned
     * @returns Vector3 The transformed vector
     */
    transformVector(v: Vector3, target?: Vector3): Vector3;
    /**
     * The current matrix transpose
     */
    transpose(): void;
    /**
     * Returns the matrix determinant
     * @returns number determinant
     */
    get determinant(): number;
    /**
     * Return matrix displacement
     * @param out Position of translation
     * @returns Position of translation
     */
    getPosition(out?: Vector3): Vector3;
    /**
     * Return translation
     * @returns Vector3 Position of translation
     */
    get position(): Vector3;
    /**
     * Set Position of translation
     * @param value Position of translation
     */
    set position(value: Vector3);
    /**
     * get Component of scale
     *
     * @returns Vector3 scale
     */
    get scale(): Vector3;
    /**
     * Set component of scale
     */
    set scale(value: Vector3);
    /**
     * Returns the value of the matrix as a string
     *
     * @returns string
     */
    toString(): string;
    /**
     * Interpolate between two matrices
     * @param m0 Matrix 0
     * @param m1 Matrix 1
     * @param t Factor of interpolation 0.0 - 1.0
     */
    lerp(m0: Matrix4, m1: Matrix4, t: number): void;
    /**
     * Read matrix element values
     * @param row row
     * @param column column
     * @returns
     */
    get(row: number, column: number): number;
    /**
     * Sets the matrix element values
     * @param row row
     * @param column column
     * @param v value
     */
    set(row: number, column: number, v: number): void;
    /**
     * Get the maximum value of the matrix scaled on each axis
     */
    getMaxScaleOnAxis(): number;
    /**
     * Calculate the displacement from the vector
     * @param inTrans Vector
     * @returns current matrix
     */
    translate(inTrans: Vector3): this;
    /**
     * from unity AMath.PI
     */
    setTRInverse(pos: Vector3, q: Quaternion): void;
    /**
     * Set scale value
     * @param inScale scale value
     * @returns this matrix
     */
    setScale(inScale: Vector3): this;
    /**
     * Generate the matrix according to the three axes
     * @param xAxis
     * @param yAxis
     * @param zAxis
     */
    makeBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): this;
    makeRotationAxis(axis: Vector3, angle: number): this;
    /**
     * private
     */
    private static transpose;
    /**
     * private
     */
    private static inverse;
    private makeEuler;
    private setElements;
    /**
     * @internal
     */
    makeMatrix44ByQuaternion(pos: Vector3, scale: Vector3, rot: Quaternion): void;
}
/**
 * @internal
 */
export declare function multiplyMatrices4x4REF(lhs: Matrix4, rhs: Matrix4, res: Matrix4): void;
/**
 * @internal
 */
export declare function makeMatrix44(r: Vector3, p: Vector3, s: Vector3, outMat: Matrix4): void;
/**
 * @internal
 */
export declare function append(src: Matrix4, lhs: Matrix4, target: Matrix4): void;
/**
 * @internal
 */
export declare function rotMatrix(mat: Matrix4, q: Quaternion): Matrix4;
/**
 * @internal
 */
export declare function matrixRotateY(rad: number, target: Matrix4): FloatArray;
/**
 * Rotates a mat4 by the given angle around the given axis
 * @internal
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */
export declare function matrixRotate(rad: number, axis: Vector3, target: Matrix4): FloatArray;
/**
 * @internal
 */
export declare function matrixMultiply(aMat: Matrix4, bMat: Matrix4, target: Matrix4): FloatArray;
