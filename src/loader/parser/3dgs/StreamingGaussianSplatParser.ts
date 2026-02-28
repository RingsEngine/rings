import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
import { GaussianSplatAsset } from "./GaussianSplatAsset";
import { PlyStreamParser } from "../ply/PlyStreamParser";
import { GSplatStreamRenderer, SplatData } from "../../../components/renderer/gsplat/GSplatStreamRenderer";
import { Object3D } from "../../../core/entities/Object3D";
import { PlyHeader } from "../ply/PlyTypes";

/**
 * Streaming Gaussian Splat Parser
 * 
 * Supports progressive loading and rendering of Gaussian Splat files.
 * Parses header first, then streams vertex data as it arrives.
 */
export class StreamingGaussianSplatParser extends ParserBase {
  static format: ParserFormat = ParserFormat.BIN;

  private _streamParser: PlyStreamParser | null = null;
  private _streamingRenderer: GSplatStreamRenderer | null = null;
  private _rendererObject: Object3D | null = null;
  private _chunksPerBatch: number = 10000; // Number of splats to process per batch
  private _headerParsed: boolean = false;
  private _onHeaderParsed: (() => void) | null = null;
  private _cancelled: boolean = false;

  /**
   * Initialize streaming parser
   * @param contentLength Total content length (if known)
   * @param onHeaderParsed Optional callback when header is parsed (parser is ready)
   */
  public async initStream(contentLength: number, onHeaderParsed?: () => void) {
    this._onHeaderParsed = onHeaderParsed || null;
    // Create renderer object
    this._rendererObject = new Object3D();
    this._rendererObject.name = 'StreamingGaussianSplat';
    this._streamingRenderer = this._rendererObject.addComponent(GSplatStreamRenderer);

    // Create stream parser with callbacks
    this._streamParser = new PlyStreamParser(
      (header: PlyHeader) => {
        // Header parsed: initialize renderer with count
        if (this._streamingRenderer) {
          this._streamingRenderer.initCount(header.vertexCount);
        }
        // Set data object so it can be accessed immediately
        if (this._rendererObject) {
          this.data = this._rendererObject;
        }
        this._headerParsed = true;
        // Notify that header is parsed
        if (this._onHeaderParsed) {
          this._onHeaderParsed();
        }
      },
      (splatData: SplatData, index: number) => {
        // Splat parsed: add to renderer
        if (this._streamingRenderer) {
          this._streamingRenderer.setSplatData(index, splatData);
        }
      },
      this._chunksPerBatch
    );
  }

  /**
   * Process incoming data chunk
   * @param chunk Data chunk
   * @param receivedLength Total bytes received so far
   * @param contentLength Total content length (if known)
   */
  public async processChunk(chunk: Uint8Array, receivedLength: number, contentLength: number) {
    if (this._cancelled || !this._streamParser) return;
    this._streamParser.processChunk(chunk);
  }

  /**
   * Cancel streaming loading
   * Stops processing new chunks and cleans up resources
   */
  public cancel(): void {
    this._cancelled = true;
    if (this._streamParser) {
      this._streamParser.cancel();
    }
  }

  /**
   * Check if loading is cancelled
   */
  public isCancelled(): boolean {
    return this._cancelled;
  }

  /**
   * Finalize streaming parsing
   */
  public async finalizeStream() {
    // Finalize is handled by the stream parser automatically
    // Just ensure renderer object is set
    if (this._rendererObject) {
      this.data = this._rendererObject;
    }
  }

  /**
   * Get parsing progress
   */
  public getProgress() {
    if (this._streamParser) {
      return this._streamParser.getProgress();
    }
    return { processed: 0, total: 0, percentage: 0 };
  }

  public verification(): boolean {
    // Return true once header is parsed and renderer object is ready
    return this._headerParsed && !!this.data && !!this._streamingRenderer;
  }
}

