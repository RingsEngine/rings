import sortModule from "./sort.js";
import wasmUrl from "./sort.wasm?url";

export class WasmSplatSort {
    private wasm: typeof sortModule | null = null;
    private centersPtr: number = 0;
    private orderPtr: number = 0;
    private numVertices: number = 0;
    private maxVertices: number = 0;
    private initialized: boolean = false;
    private instanceId: number = 0;

    /**
     * Create a new WasmSplatSort instance
     * @param wasmModule Optional pre-loaded WASM module. If not provided, will be loaded on first use.
     */
    constructor(wasmModule?: typeof sortModule) {
        if (wasmModule) {
            this.wasm = wasmModule;
            this.initialized = true;
        }
    }

    /**
     * Initialize the WASM module (called automatically if not provided in constructor)
     */
    public async init(): Promise<void> {
        if (this.wasm) {
            return;
        }
        // Configure locateFile to help find the WASM file
        this.wasm = await sortModule({
            locateFile: (path: string) => {
                // If it's the WASM file, use the imported URL
                if (path === "sort.wasm") {
                    return wasmUrl;
                }
                // Otherwise, use default behavior
                return path;
            }
        });
        this.initialized = true;
    }

    /**
     * Initialize sorting state with maximum number of vertices
     */
    public initSort(maxVertices: number): void {
        this.ensureInitialized();
        this.maxVertices = maxVertices;
        
        // Create instance if not already created
        if (this.instanceId === 0) {
            this.instanceId = this.wasm!._createInstance(maxVertices);
            if (this.instanceId === 0) {
                throw new Error("Failed to create WASM instance. Too many instances.");
            }
        } else {
            this.wasm!._initSort(this.instanceId, maxVertices);
        }
    }

    /**
     * Set centers data (copies the data to WASM memory)
     */
    public setCenters(centers: Float32Array): void {
        this.ensureInitialized();

        const numVertices = centers.length / 3;
        this.numVertices = numVertices;

        // Initialize sort if needed
        if (numVertices > this.maxVertices) {
            this.initSort(numVertices);
        }

        // Free old centers buffer if exists
        if (this.centersPtr !== 0) {
            this.wasm!._free(this.centersPtr);
        }

        // Allocate new buffer in WASM memory
        const size = centers.length * 4; // Float32 = 4 bytes
        this.centersPtr = this.wasm!._malloc(size);

        // Copy data to WASM memory
        const heap = this.wasm!.HEAPF32;
        heap.set(centers, this.centersPtr / 4);

        // Set centers in WASM
        this.wasm!._setCenters(this.instanceId, this.centersPtr, numVertices);
    }

    /**
     * Set camera position and direction
     */
    public setCamera(
        px: number,
        py: number,
        pz: number,
        dx: number,
        dy: number,
        dz: number
    ): void {
        this.ensureInitialized();
        this.ensureInstanceId();
        this.wasm!._setCamera(this.instanceId, px, py, pz, dx, dy, dz);
    }

    /**
     * Perform sorting and return the sorted order
     * @param orderOut Output array to store sorted indices
     * @returns Number of visible splats (count after back-face culling)
     */
    public sort(orderOut: Uint32Array): number {
        this.ensureInitialized();

        if (!orderOut) {
            return;
        }

        if (orderOut.length < this.numVertices) {
            throw new Error(`Output array too small: ${orderOut.length} < ${this.numVertices}`);
        }

        // Allocate order buffer in WASM memory if needed
        if (this.orderPtr === 0 || orderOut.length !== this.numVertices) {
            if (this.orderPtr !== 0) {
                this.wasm!._free(this.orderPtr);
            }
            const size = this.numVertices * 4; // Uint32 = 4 bytes
            this.orderPtr = this.wasm!._malloc(size);
        }

        // Perform sort
        this.ensureInstanceId();
        const count = this.wasm!._sort(this.instanceId, this.orderPtr);

        // Copy result back to JavaScript
        const heap = this.wasm!.HEAPU32;
        orderOut.set(
            heap.subarray(this.orderPtr / 4, this.orderPtr / 4 + this.numVertices)
        );

        return count;
    }

    /**
     * Cleanup WASM resources
     */
    public cleanup(): void {
        if (!this.wasm) {
            return;
        }

        if (this.centersPtr !== 0) {
            this.wasm._free(this.centersPtr);
            this.centersPtr = 0;
        }

        if (this.orderPtr !== 0) {
            this.wasm._free(this.orderPtr);
            this.orderPtr = 0;
        }

        this.ensureInstanceId();
        this.wasm!._cleanup(this.instanceId);
        this.numVertices = 0;
        this.maxVertices = 0;
    }

    /**
     * Get the WASM module instance (for advanced usage)
     */
    public getWasm(): typeof sortModule | null {
        return this.wasm;
    }

    /**
     * Check if WASM module is initialized
     */
    public isInitialized(): boolean {
        return this.initialized && this.wasm !== null;
    }

    /**
     * Ensure WASM module is initialized, throw error if not
     */
    private ensureInitialized(): void {
        if (!this.wasm) {
            throw new Error("WASM module not initialized. Call init() first or provide wasmModule in constructor.");
        }
    }

    /**
     * Ensure instance ID is created, throw error if not
     */
    private ensureInstanceId(): void {
        if (this.instanceId === 0) {
            throw new Error("WASM instance not created. Call initSort() or setCenters() first.");
        }
    }

    /**
     * Create a new instance with pre-loaded WASM module (factory method)
     * @param wasmModule Pre-loaded WASM module
     */
    public static async create(wasmModule?: typeof sortModule): Promise<WasmSplatSort> {
        const instance = new WasmSplatSort(wasmModule);
        if (!wasmModule) {
            await instance.init();
        }
        return instance;
    }
}
