import { BoundingBox, Vector3 } from "..";
import { GeometryBase } from "../core/geometry/GeometryBase";
import { VertexAttributeName } from "../core/geometry/VertexAttributeName";

export class SphereGeometry extends GeometryBase {
  public shape_vertices = [];
  public shape_indices = [];
  public radius: number;
  public widthSegments: number;
  public heightSegments: number;
  public phiStart: number;
  public phiLength: number;
  public thetaStart: number;
  public thetaLength: number;

  /**
   * 球体几何体
   * @constructor
   * @param radius 球体半径
   * @param widthSegments 定义水平分段数
   * @param heightSegments 定义垂直分段数
   * @param phiStart 球体赤道线起始点的弧度
   * @param phiLength 球体赤道线的弧长
   * @param thetaStart 球体经线起始点的弧度
   * @param thetaLength 球体经线的弧长
   */
  constructor(
    radius,
    widthSegments,
    heightSegments,
    phiStart?,
    phiLength?,
    thetaStart?,
    thetaLength?
  ) {
    super();
    this.radius = radius;
    this.widthSegments = widthSegments;
    this.heightSegments = heightSegments;
    this.phiStart = phiStart;
    this.phiLength = phiLength;
    this.thetaStart = thetaStart;
    this.thetaLength = thetaLength;
    this.buildGeometry();
  }

  protected buildGeometry(): void {
    var i: number,
      j: number,
      triIndex: number = 0;
    let _segmentsH = this.heightSegments;
    let _segmentsW = this.widthSegments;
    let _radius = this.radius;
    var vertexCount: number = (_segmentsH + 1) * (_segmentsW + 1);
    let position_arr = new Float32Array(vertexCount * 3);
    let normal_arr = new Float32Array(vertexCount * 3);
    let uv_arr = new Float32Array(vertexCount * 2);
    let indice_arr = new Uint16Array(_segmentsW * _segmentsH * 2 * 3);

    let pi = 0;
    let ni = 0;
    let ui = 0;
    for (j = 0; j <= _segmentsH; ++j) {
      var horAngle: number = (Math.PI * j) / _segmentsH;
      var y: number = _radius * Math.cos(horAngle);
      var ringRadius: number = _radius * Math.sin(horAngle);

      for (i = 0; i <= _segmentsW; ++i) {
        var verAngle: number = (2 * Math.PI * i) / _segmentsW;
        var x: number = ringRadius * Math.cos(verAngle);
        var z: number = ringRadius * Math.sin(verAngle);
        var normLen: number = 1 / Math.sqrt(x * x + y * y + z * z);
        let index = i * _segmentsW + j;
        position_arr[pi++] = x;
        position_arr[pi++] = y;
        position_arr[pi++] = z;

        normal_arr[ni++] = x * normLen;
        normal_arr[ni++] = y * normLen;
        normal_arr[ni++] = z * normLen;

        uv_arr[ui++] = i / _segmentsW;
        uv_arr[ui++] = j / _segmentsH;

        if (i > 0 && j > 0) {
          var a: number = (_segmentsW + 1) * j + i;
          var b: number = (_segmentsW + 1) * j + i - 1;
          var c: number = (_segmentsW + 1) * (j - 1) + i - 1;
          var d: number = (_segmentsW + 1) * (j - 1) + i;

          if (j == _segmentsH) {
            indice_arr[triIndex++] = a;
            indice_arr[triIndex++] = c;
            indice_arr[triIndex++] = d;
          } else if (j == 1) {
            indice_arr[triIndex++] = a;
            indice_arr[triIndex++] = b;
            indice_arr[triIndex++] = c;
          } else {
            indice_arr[triIndex++] = a;
            indice_arr[triIndex++] = b;
            indice_arr[triIndex++] = c;
            indice_arr[triIndex++] = a;
            indice_arr[triIndex++] = c;
            indice_arr[triIndex++] = d;
          }
        }
      }
    }
    this.setIndices(indice_arr);
    this.setAttribute(VertexAttributeName.position, position_arr);
    this.setAttribute(VertexAttributeName.normal, normal_arr);
    this.setAttribute(VertexAttributeName.uv, uv_arr);
    this.setAttribute(VertexAttributeName.TEXCOORD_1, uv_arr);

    this.addSubGeometry({
      indexStart: 0,
      indexCount: indice_arr.length,
      vertexStart: 0,
      vertexCount: 0,
      firstStart: 0,
      index: 0,
      topology: 0,
    });

    this.bounds = new BoundingBox(
      Vector3.ZERO,
      new Vector3(this.radius * 2, this.radius * 2, this.radius * 2)
    );
  }
}
