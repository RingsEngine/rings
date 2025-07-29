import { Texture } from "../../gfx/graphics/webGpu/core/texture/Texture";
import { LoaderFunctions } from "../LoaderFunctions";
import { ParserFormat } from "./ParserFormat";

export class ParserBase {
  static format: ParserFormat = ParserFormat.BIN;
  public baseUrl: string;
  public initUrl: string;
  public loaderFunctions?: LoaderFunctions;
  public userData?: any;
  public data: any;
  public parseString(str: string) {}
  public parseJson(obj: object) {}
  public parseBuffer(buffer: ArrayBuffer) {}
  public parseTexture(buffer: ArrayBuffer): Texture {
    throw this.parserError("Method not implemented.", -1);
  }
  public parse(data: any) {}
  public verification(ret: void): boolean {
    throw this.parserError("Method not implemented.", -1);
  }
  protected parserError(info: string, id: number) {
    console.error(`error id:${id} ${info}`);
  }
}
