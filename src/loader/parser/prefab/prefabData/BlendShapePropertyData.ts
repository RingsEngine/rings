import { BytesArray } from "../../../..";
/* eslint-disable */
export class BlendShapePropertyData {
  public shapeName: string;
  public shapeIndex: number;
  public frameCount: number;
  public blendPositionList: Float32Array = new Float32Array();
  public blendNormalList: Float32Array = new Float32Array();
  public formBytes(byteArray: BytesArray) {
    let bytes = byteArray.readBytesArray();

    this.shapeName = bytes.readUTF();
    this.shapeIndex = bytes.readInt32();
    this.frameCount = bytes.readInt32();

    let len = bytes.readInt32();
    this.blendPositionList = bytes.readFloat32Array(len * 3);

    let len2 = bytes.readInt32();
    this.blendNormalList = bytes.readFloat32Array(len2 * 3);
  }
}
