export enum PassType {
  COLOR = 1 << 0,
  REFLECTION = 1 << 1,
  POSITION = 1 << 2,
  GRAPHIC = 1 << 3,
  GI = 1 << 4,
  Cluster = 1 << 5,
  SHADOW = 1 << 6,
  POINT_SHADOW = 1 << 7,
  POST = 1 << 8,
  DEPTH = 1 << 9,
  UI = 1 << 10,
}
