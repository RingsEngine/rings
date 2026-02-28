// Web Worker for WASM-based Gaussian Splat sorting
import { WasmSplatSort } from "@rings/wasm-splat-sort/WasmSplatSort";

const EPSILON = 0.001;

let order: Uint32Array | null = null;
let centers: Float32Array | null = null;
let cameraPosition: { x: number; y: number; z: number } | null = null;
let cameraDirection: { x: number; y: number; z: number } | null = null;
let lastCameraPosition: { x: number; y: number; z: number } | null = null;
let lastCameraDirection: { x: number; y: number; z: number } | null = null;
let forceUpdate = false;
let sorter: WasmSplatSort = null;

// Check if camera has changed (for early exit)
function shouldUpdate(): boolean {
  if (!cameraPosition || !cameraDirection) {
    return false;
  }
  
  // If no last camera state recorded, we need to update
  if (!lastCameraPosition || !lastCameraDirection) {
    return true;
  }
  
  // Check if camera position or direction has changed
  const px = cameraPosition.x;
  const py = cameraPosition.y;
  const pz = cameraPosition.z;
  const dx = cameraDirection.x;
  const dy = cameraDirection.y;
  const dz = cameraDirection.z;
  
  const lpx = lastCameraPosition.x;
  const lpy = lastCameraPosition.y;
  const lpz = lastCameraPosition.z;
  const ldx = lastCameraDirection.x;
  const ldy = lastCameraDirection.y;
  const ldz = lastCameraDirection.z;
  
  if (Math.abs(px - lpx) < EPSILON &&
      Math.abs(py - lpy) < EPSILON &&
      Math.abs(pz - lpz) < EPSILON &&
      Math.abs(dx - ldx) < EPSILON &&
      Math.abs(dy - ldy) < EPSILON &&
      Math.abs(dz - ldz) < EPSILON) {
    return false; // No update needed
  }
  
  return true; // Update needed
}

const update = async () => {
  if (!order || !centers || !cameraPosition || !cameraDirection) return;

  // Initialize sorter if needed
  if (!sorter) {
    try {
      sorter = await WasmSplatSort.create();
      console.log('WASM sorter initialized');
    } catch (error: any) {
      console.error('Failed to initialize WASM sorter:', error);
      self.postMessage({ error: 'WASM initialization failed: ' + (error?.message || String(error)) });
      return;
    }
  }

  const px = cameraPosition.x;
  const py = cameraPosition.y;
  const pz = cameraPosition.z;
  const dx = cameraDirection.x;
  const dy = cameraDirection.y;
  const dz = cameraDirection.z;

  // Check if update is needed
  if (!forceUpdate && !shouldUpdate()) {
    return;
  }

  forceUpdate = false;
  
  // Update last camera state
  lastCameraPosition = { x: px, y: py, z: pz };
  lastCameraDirection = { x: dx, y: dy, z: dz };

  // Set centers first (this will initialize sort and create instance if needed)
  sorter.setCenters(centers);

  // Set camera (must be called after setCenters to ensure instance is created)
  sorter.setCamera(px, py, pz, dx, dy, dz);

  // Perform sort
  const count = sorter.sort(order);

  // Send results
  const message = {
    order: order.buffer,
    count
  };
  (self as any).postMessage(message, [order.buffer]);

  order = null;
};

self.onmessage = async (message: MessageEvent) => {
  if (message.data.order) {
    order = new Uint32Array(message.data.order);
  }

  if (message.data.centers) {
    centers = new Float32Array(message.data.centers);
    forceUpdate = true;
  }

  if (message.data.cameraPosition) {
    cameraPosition = message.data.cameraPosition;
  }

  if (message.data.cameraDirection) {
    cameraDirection = message.data.cameraDirection;
  }

  await update();
};
