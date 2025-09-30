export type SHEncoding = {
  order: number;
  coeffs: Float32Array; // length = count * coeffsPerColor * 3 (RGB)
};

export type GaussianSplatAsset = {
  count: number;
  position: Float32Array; // length = count * 3
  rotation?: Float32Array; // quat, length = count * 4 (optional)
  scale?: Float32Array; // anisotropic xyz, length = count * 3 (optional)
  opacity?: Float32Array; // length = count (optional)
  sh?: SHEncoding; // optional spherical harmonics color
  bbox?: { min: [number, number, number]; max: [number, number, number] };
  meta?: Record<string, any>;
};

export function computeAABBFromPositions(
  position: Float32Array
): { min: [number, number, number]; max: [number, number, number] } {
  const min: [number, number, number] = [Infinity, Infinity, Infinity];
  const max: [number, number, number] = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < position.length; i += 3) {
    const x = position[i + 0];
    const y = position[i + 1];
    const z = position[i + 2];
    if (x < min[0]) min[0] = x;
    if (y < min[1]) min[1] = y;
    if (z < min[2]) min[2] = z;
    if (x > max[0]) max[0] = x;
    if (y > max[1]) max[1] = y;
    if (z > max[2]) max[2] = z;
  }
  return { min, max };
}


