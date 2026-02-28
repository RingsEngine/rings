export default Module;
declare function Module<T>(target?: T): Promise<T & typeof Module>;
declare module Module {
    function destroy(obj: any): void;
    function _malloc(size: number): number;
    function _free(ptr: number): void;
    const HEAP8: Int8Array;
    const HEAP16: Int16Array;
    const HEAP32: Int32Array;
    const HEAPU8: Uint8Array;
    const HEAPU16: Uint16Array;
    const HEAPU32: Uint32Array;
    const HEAPF32: Float32Array;
    const HEAPF64: Float64Array;

    function _createInstance(maxVertices: number): number;
    function _initSort(instanceId: number, maxVertices: number): void;
    function _setCenters(instanceId: number, centersPtr: number, numVertices: number): void;
    function _setCamera(instanceId: number, px: number, py: number, pz: number, dx: number, dy: number, dz: number): void;
    function _sort(instanceId: number, orderPtr: number): number;
    function _cleanup(instanceId: number): void;
}
