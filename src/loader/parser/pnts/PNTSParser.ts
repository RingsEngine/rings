import { Object3D } from "../../../core/entities/Object3D";
import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
import { PNTSLoader } from "./PNTSLoader";

export class PNTSParser extends ParserBase {
  static format: ParserFormat = ParserFormat.BIN;

  public async parseBuffer(buffer: ArrayBuffer) {
    const loader = new PNTSLoader();
    const pntsRoot = await loader.parse(buffer);
    const pntsObj = new Object3D();
    pntsObj.name = 'PNTS';
    pntsObj.addChild(pntsRoot);
    this.data = pntsObj;
  }

  public verification(): boolean {
    if (this.data) {
      return true;
    }
    throw new Error("PNTSParser: Parse failed");
  }
}

