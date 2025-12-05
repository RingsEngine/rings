import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
import { GaussianSplatAsset, computeAABBFromPositions } from "./GaussianSplatAsset";
import { detectGSplatFormat, GSplatFormat, parsePlyGaussianSplat, parsePartPlyGaussianSplat } from "./loaders";

export class GaussianSplatParser extends ParserBase {
  static format: ParserFormat = ParserFormat.BIN;

  public async parseBuffer(buffer: ArrayBuffer) {
    // Detect file format
    const format = detectGSplatFormat(buffer);

    let asset: GaussianSplatAsset;

    switch (format) {
      case GSplatFormat.PLY: {
        // Parse PLY file using dedicated PLY loader
        const plyData = parsePlyGaussianSplat(buffer);

        // Convert to GaussianSplatAsset format
        asset = {
          count: plyData.vertexCount,
          position: plyData.position,
          rotation: plyData.rotation,
          scale: plyData.scale,
          opacity: plyData.opacity,
          sh: plyData.sh,
        };

        // Calculate bounding box
        asset.bbox = computeAABBFromPositions(plyData.position);
        break;
      }

      case GSplatFormat.SPLAT:
        // TODO: Implement SPLAT format loader
        throw new Error('SPLAT format is not yet supported');

      case GSplatFormat.KSPLAT:
        // TODO: Implement KSPLAT format loader
        throw new Error('KSPLAT format is not yet supported');

      case GSplatFormat.UNKNOWN:
      default:
        throw new Error('Unknown or unsupported Gaussian Splatting file format');
    }

    this.data = asset;
    return asset;
  }

  public async parsePartBuffer(buffer: ArrayBuffer) {
    const format = detectGSplatFormat(buffer);
    let asset: GaussianSplatAsset;
    switch (format) {
      case GSplatFormat.PLY: {
        // Parse PLY file using dedicated PLY loader
        const plyData = parsePartPlyGaussianSplat(buffer);

        // Convert to GaussianSplatAsset format
        asset = {
          count: plyData.vertexCount,
          position: plyData.position,
          rotation: plyData.rotation,
          scale: plyData.scale,
          opacity: plyData.opacity,
          sh: plyData.sh,
        };
        break;
      }

      case GSplatFormat.SPLAT:
        // TODO: Implement SPLAT format loader
        throw new Error('SPLAT format is not yet supported');

      case GSplatFormat.KSPLAT:
        // TODO: Implement KSPLAT format loader
        throw new Error('KSPLAT format is not yet supported');

      case GSplatFormat.UNKNOWN:
      default:
        throw new Error('Unknown or unsupported Gaussian Splatting file format');
    }
    this.data = asset;
    return asset;
  }

  public verification(): boolean {
    return !!this.data && (this.data as GaussianSplatAsset).count > 0;
  }
}


