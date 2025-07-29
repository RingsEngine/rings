export enum GUIQuadAttrEnum {
  NONE = 0,
  POSITION = 1 << 0, //1 位运算
  SPRITE = 1 << 1, //2
  COLOR = 1 << 2, //4
  MAX = POSITION + COLOR + SPRITE, //7
}
