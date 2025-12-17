import { Engine3D } from "../../Engine3D";
import { MeshRenderer } from "../../components/renderer/MeshRenderer";
import { Object3D } from "../../core/entities/Object3D";
import { GeometryBase } from "../../core/geometry/GeometryBase";
import { VertexAttributeName } from "../../core/geometry/VertexAttributeName";
import { Texture } from "../../gfx/graphics/webGpu/core/texture/Texture";
import { LitMaterial } from "../../materials/LitMaterial";
import { StringUtil } from "../../util/StringUtil";
import { FileLoader } from "../FileLoader";
import { ParserBase } from "./ParserBase";
import { ParserFormat } from "./ParserFormat";

type MatData = {
  name?: string;
  Kd?: string[];
  Ks?: string[];
  Tr?: string;
  d?: string[];
  Tf?: string[];
  Pr?: string;
  Pm?: string;
  Pc?: string;
  Pcr?: string;
  Ni?: string;
  Kr?: string[];
  illum?: string;
  map_Kd?: string;
  textures?: string[];
};

type GeometryData = {
  name: string;
  type: string;
  vertex_arr?: number[];
  normal_arr?: number[];
  uv_arr?: number[];
  indeice_arr?: number[];
  index?: number;
  source_mat: string;
  source_faces: Face[];
};

type Face = {
  indices: string[];
  texture: string[];
  normal: string[];
};

export class OBJParser extends ParserBase {
  static format: ParserFormat = ParserFormat.TEXT;
  static cloudImageProcessParam: string = '';
  private textData: string = "";

  private source_vertices: number[][];
  private source_normals: number[][];
  private source_tangents: number[][];
  private source_textureCoords: number[][];
  public matLibs: { [name: string]: MatData };

  public geometrys: { [name: string]: GeometryData };
  private activeGeo: GeometryData;
  private currentObjectName: string;
  private currentMaterialName: string;

  public facesMaterialsIndex: {
    materialName: string;
    materialStartIndex: number;
  }[];

  public mtl: string;
  mtlUrl: string;

  async parseString(obj: string) {
    this.source_vertices = [];
    this.source_normals = [];
    this.source_tangents = [];
    this.source_textureCoords = [];
    this.currentObjectName = "default";
    this.currentMaterialName = "";
    this.matLibs = {};
    this.geometrys = {};
    this.activeGeo = undefined;
    this.textData = obj;
    await Promise.all([this.parserOBJ(), this.loadMTL()]);
    this.parser_mesh();
    return `null`;
  }

  private applyVector2(fi: number, sourceData: number[][], destData: number[]) {
    if (fi >= 0 && sourceData[fi] && sourceData[fi].length > 0) {
      destData.push(sourceData[fi][0]);
      destData.push(-sourceData[fi][1]);
    } else {
      destData.push(0);
      destData.push(0);
    }
  }

  private applyVector3(fi: number, sourceData: number[][], destData: number[]) {
    if (fi >= 0 && sourceData[fi] && sourceData[fi].length > 0) {
      destData.push(sourceData[fi][0]);
      destData.push(sourceData[fi][1]);
      destData.push(sourceData[fi][2]);
    } else {
      destData.push(0);
      destData.push(0);
      destData.push(0);
    }
  }

  private applyVector4(fi: number, sourceData: number[][], destData: number[]) {
    destData.push(sourceData[fi][0]);
    destData.push(sourceData[fi][1]);
    destData.push(sourceData[fi][2]);
    destData.push(sourceData[fi][3]);
  }

  /**
   * Parse UV index with support for negative indices (OBJ format)
   * Similar to Three.js parseUVIndex method
   */
  private parseUVIndex(value: string, uvCount: number): number {
    const index = parseInt(value, 10);
    if (index >= 0) {
      return index - 1; // OBJ indices are 1-based
    } else {
      // Negative index means count from end
      return uvCount + index;
    }
  }

  /**
   * Parse vertex index with support for negative indices (OBJ format)
   */
  private parseVertexIndex(value: string, vertexCount: number): number {
    const index = parseInt(value, 10);
    if (index >= 0) {
      return index - 1; // OBJ indices are 1-based
    } else {
      // Negative index means count from end
      return vertexCount + index;
    }
  }

  /**
   * Parse normal index with support for negative indices (OBJ format)
   */
  private parseNormalIndex(value: string, normalCount: number): number {
    const index = parseInt(value, 10);
    if (index >= 0) {
      return index - 1; // OBJ indices are 1-based
    } else {
      // Negative index means count from end
      return normalCount + index;
    }
  }

  /**
   * Calculate face normal from three vertices using cross product
   * Similar to Three.js addFaceNormal method
   */
  private calculateFaceNormal(
    v0: number[],
    v1: number[],
    v2: number[]
  ): number[] {
    // Calculate two edge vectors
    const edge1 = [
      v1[0] - v0[0],
      v1[1] - v0[1],
      v1[2] - v0[2],
    ];
    const edge2 = [
      v2[0] - v0[0],
      v2[1] - v0[1],
      v2[2] - v0[2],
    ];

    // Calculate cross product: edge1 × edge2
    const normal = [
      edge1[1] * edge2[2] - edge1[2] * edge2[1],
      edge1[2] * edge2[0] - edge1[0] * edge2[2],
      edge1[0] * edge2[1] - edge1[1] * edge2[0],
    ];

    // Normalize the normal vector
    const length = Math.sqrt(
      normal[0] * normal[0] + normal[1] * normal[1] + normal[2] * normal[2]
    );
    if (length > 0) {
      normal[0] /= length;
      normal[1] /= length;
      normal[2] /= length;
    }

    return normal;
  }

  private async loadMTL() {
    let fileLoad = new FileLoader();
    let sourceData = await fileLoad.loadTxt(this.baseUrl + this.mtlUrl);
    let sourceStr: string = sourceData[`data`];

    let mat: MatData;

    let str = sourceStr.split(/\r?\n/);
    for (let i = 0; i < str.length; i++) {
      let line = str[i];
      var commentStart = line.indexOf("#");
      if (commentStart != -1) {
        line = line.substring(0, commentStart);
      }
      line = line.trim();
      var splitedLine = line.split(/\s+/);
      if (splitedLine[0] === "newmtl") {
        mat = { name: splitedLine[1] };
        this.matLibs[splitedLine[1]] = mat;
      } else {
        if (splitedLine[0].indexOf(`map_`) != -1) {
          mat[splitedLine[0]] = splitedLine[1];
          if (!mat.textures) {
            mat.textures = [splitedLine[splitedLine.length - 1]];
          }
          mat.textures.push(splitedLine[splitedLine.length - 1]);
        } else if (splitedLine.length == 2) {
          mat[splitedLine[0]] = Number(splitedLine[1]);
        } else if (splitedLine.length == 3) {
          mat[splitedLine[0]] = [
            Number(splitedLine[1]),
            Number(splitedLine[2]),
          ];
        } else if (splitedLine.length == 4) {
          mat[splitedLine[0]] = [
            Number(splitedLine[1]),
            Number(splitedLine[2]),
            Number(splitedLine[3]),
          ];
        }
      }
    }

    const promiseList: Promise<Texture>[] = [];
    for (const key in this.matLibs) {
      const mat = this.matLibs[key];
      if (mat.textures && mat.textures.length > 0) {
        for (let i = 0; i < mat.textures.length; i++) {
          const texUrl = StringUtil.normalizePath(
            this.baseUrl + mat.textures[i]
          );
          promiseList.push(Engine3D.res.loadTexture(texUrl + OBJParser.cloudImageProcessParam).catch(
            (error) => {
              console.error(`Failed to load texture: ${texUrl}`, error);
              return null;
            }
          ));
        }
      }
    }
    await Promise.all(promiseList);

    sourceData = null;
    return true;
  }

  private async load_textures() {}

  private getGeometryKey(
    objectName?: string,
    materialName?: string
  ): string {
    const objName = (objectName ?? this.currentObjectName ?? "default") || "default";
    const matName = materialName ?? this.currentMaterialName ?? "";
    const matKey = matName.length > 0 ? matName : "default";
    return `${objName}::${matKey}`;
  }

  private ensureActiveGeo(objectName?: string, materialName?: string) {
    const objName = (objectName ?? this.currentObjectName ?? "default") || "default";
    const matName = materialName ?? this.currentMaterialName ?? "";
    const geoKey = this.getGeometryKey(objName, matName);

    if (!this.geometrys[geoKey]) {
      this.geometrys[geoKey] = {
        type: objName,
        name: geoKey,
        source_mat: matName,
        source_faces: [],
      };
    } else if (this.geometrys[geoKey].source_mat !== matName) {
      this.geometrys[geoKey].source_mat = matName;
    }

    this.activeGeo = this.geometrys[geoKey];
  }

  private parserLine(line: string) {
    /*Not include comment*/
    var commentStart = line.indexOf("#");
    if (commentStart != -1) {
      if (line.indexOf(`# object`) != -1) {
        const commentParts = line.split(/\s+/);
        const type = commentParts[1] || "default";
        const geoName = commentParts[2] || "default";
        this.currentObjectName = geoName;
        this.activeGeo = undefined;
        this.ensureActiveGeo(geoName, this.currentMaterialName);
        if (this.activeGeo) {
          this.activeGeo.type = type;
        }
      }
      line = line.substring(0, commentStart);
    }
    line = line.trim();
    var splitedLine = line.split(/\s+/);

    if (splitedLine[0] === "v") {
      var vertex = [
        Number(splitedLine[1]),
        Number(splitedLine[2]),
        Number(splitedLine[3]),
        splitedLine[4] ? 1 : Number(splitedLine[4]),
      ];
      this.source_vertices.push(vertex);
    } else if (splitedLine[0] === "vt") {
      var textureCoord = [
        Number(splitedLine[1]),
        Number(splitedLine[2]),
        splitedLine[3] ? 1 : Number(splitedLine[3]),
      ];
      this.source_textureCoords.push(textureCoord);
    } else if (splitedLine[0] === "vn") {
      var normal = [
        Number(splitedLine[1]),
        Number(splitedLine[2]),
        Number(splitedLine[3]),
      ];
      this.source_normals.push(normal);
    } else if (splitedLine[0] === "f") {
      var face: Face = {
        indices: [],
        texture: [],
        normal: [],
      };

      for (var i = 1; i < splitedLine.length; ++i) {
        var vertexStr: string = splitedLine[i] as string;
        if (vertexStr.length === 0) continue;

        var vertexParts = vertexStr.split("/");
        var positionIndex = vertexParts[0] || "";
        var textureIndex = vertexParts.length >= 2 ? vertexParts[1] || "" : "";
        var normalIndex = vertexParts.length >= 3 ? vertexParts[2] || "" : "";

        if (positionIndex.length === 0) {
          continue;
        }

        face.indices.push(positionIndex);
        face.texture.push(textureIndex);
        face.normal.push(normalIndex);
      }

      this.ensureActiveGeo();
      this.activeGeo.source_faces.push(face);
    } else if (splitedLine[0] === "usemtl") {
      this.currentMaterialName = splitedLine[1] || "";
      this.ensureActiveGeo(this.currentObjectName, this.currentMaterialName);
    } else if (splitedLine[0] === `mtllib`) {
      this.mtlUrl = splitedLine[1];
    }
  }

  private async parserOBJ() {
    let str = this.textData.split(/\r?\n/);
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      this.parserLine(element);
    }
    this.textData = ``;
    return true;
  }

  private async parser_mesh() {
    let root = new Object3D();
    for (const key in this.geometrys) {
      const geoData = this.geometrys[key];

      geoData.vertex_arr = [];
      geoData.normal_arr = [];
      geoData.uv_arr = [];
      geoData.indeice_arr = [];

      let index = 0;
      const vertexCount = this.source_vertices.length;
      const normalCount = this.source_normals.length;
      const uvCount = this.source_textureCoords.length;
      
      for (let i = 0; i < geoData.source_faces.length; i++) {
        const face = geoData.source_faces[i];

        let f0 = this.parseVertexIndex(face.indices[0], vertexCount);
        let f1 = this.parseVertexIndex(face.indices[1], vertexCount);
        let f2 = this.parseVertexIndex(face.indices[2], vertexCount);

        const getNormalIndex = (value?: string) => {
          if (!value || value.length === 0) {
            return -1;
          }
          const parsed = this.parseNormalIndex(value, normalCount);
          return Number.isFinite(parsed) && parsed >= 0 && parsed < normalCount
            ? parsed
            : -1;
        };

        const getUVIndex = (value?: string) => {
          if (!value || value.length === 0) {
            return -1;
          }
          const parsed = this.parseUVIndex(value, uvCount);
          return Number.isFinite(parsed) && parsed >= 0 && parsed < uvCount
            ? parsed
            : -1;
        };

        let n0 = getNormalIndex(face.normal[0]);
        let n1 = getNormalIndex(face.normal[1]);
        let n2 = getNormalIndex(face.normal[2]);
        const needsFaceNormal = n0 < 0 || n1 < 0 || n2 < 0;

        // Calculate face normal if not present (similar to Three.js)
        let faceNormal: number[] | null = null;
        if (
          needsFaceNormal &&
          f0 >= 0 &&
          f1 >= 0 &&
          f2 >= 0 &&
          this.source_vertices[f0] &&
          this.source_vertices[f1] &&
          this.source_vertices[f2]
        ) {
          faceNormal = this.calculateFaceNormal(
            this.source_vertices[f0],
            this.source_vertices[f1],
            this.source_vertices[f2]
          );
        }

        let u0 = getUVIndex(face.texture[0]);
        let u1 = getUVIndex(face.texture[1]);
        let u2 = getUVIndex(face.texture[2]);

        // Vertex 0
        this.applyVector3(f0, this.source_vertices, geoData.vertex_arr);
        if (n0 >= 0) {
          this.applyVector3(n0, this.source_normals, geoData.normal_arr);
        } else if (faceNormal) {
          geoData.normal_arr.push(faceNormal[0], faceNormal[1], faceNormal[2]);
        } else {
          geoData.normal_arr.push(0, 0, 0);
        }
        if (u0 >= 0) {
          this.applyVector2(u0, this.source_textureCoords, geoData.uv_arr);
        } else {
          geoData.uv_arr.push(0, 0);
        }
        geoData.indeice_arr[index] = index++;

        // Vertex 1
        this.applyVector3(f1, this.source_vertices, geoData.vertex_arr);
        if (n1 >= 0) {
          this.applyVector3(n1, this.source_normals, geoData.normal_arr);
        } else if (faceNormal) {
          geoData.normal_arr.push(faceNormal[0], faceNormal[1], faceNormal[2]);
        } else {
          geoData.normal_arr.push(0, 0, 0);
        }
        if (u1 >= 0) {
          this.applyVector2(u1, this.source_textureCoords, geoData.uv_arr);
        } else {
          geoData.uv_arr.push(0, 0);
        }
        geoData.indeice_arr[index] = index++;

        // Vertex 2
        this.applyVector3(f2, this.source_vertices, geoData.vertex_arr);
        if (n2 >= 0) {
          this.applyVector3(n2, this.source_normals, geoData.normal_arr);
        } else if (faceNormal) {
          geoData.normal_arr.push(faceNormal[0], faceNormal[1], faceNormal[2]);
        } else {
          geoData.normal_arr.push(0, 0, 0);
        }
        if (u2 >= 0) {
          this.applyVector2(u2, this.source_textureCoords, geoData.uv_arr);
        } else {
          geoData.uv_arr.push(0, 0);
        }
        geoData.indeice_arr[index] = index++;

        if (face.indices.length > 3) {
          let f3 = this.parseVertexIndex(face.indices[3], vertexCount);
          let n3 = getNormalIndex(face.normal[3]);
          let u3 = getUVIndex(face.texture[3]);
          
          // Calculate normal for second triangle (f0-f2-f3) if needed
          let faceNormal2: number[] | null = null;
          if (
            (n0 < 0 || n2 < 0 || n3 < 0) &&
            f0 >= 0 &&
            f2 >= 0 &&
            f3 >= 0 &&
              this.source_vertices[f0] && this.source_vertices[f2] && this.source_vertices[f3]) {
            faceNormal2 = this.calculateFaceNormal(
              this.source_vertices[f0],
              this.source_vertices[f2],
              this.source_vertices[f3]
            );
          }
          
          // Vertex 0 (second triangle)
          this.applyVector3(f0, this.source_vertices, geoData.vertex_arr);
          if (n0 >= 0) {
            this.applyVector3(n0, this.source_normals, geoData.normal_arr);
          } else if (faceNormal2) {
            geoData.normal_arr.push(faceNormal2[0], faceNormal2[1], faceNormal2[2]);
          } else {
            geoData.normal_arr.push(0, 0, 0);
          }
          if (u0 >= 0) {
            this.applyVector2(u0, this.source_textureCoords, geoData.uv_arr);
          } else {
            geoData.uv_arr.push(0, 0);
          }
          geoData.indeice_arr[index] = index++;

          // Vertex 2 (second triangle)
          this.applyVector3(f2, this.source_vertices, geoData.vertex_arr);
          if (n2 >= 0) {
            this.applyVector3(n2, this.source_normals, geoData.normal_arr);
          } else if (faceNormal2) {
            geoData.normal_arr.push(faceNormal2[0], faceNormal2[1], faceNormal2[2]);
          } else {
            geoData.normal_arr.push(0, 0, 0);
          }
          if (u2 >= 0) {
            this.applyVector2(u2, this.source_textureCoords, geoData.uv_arr);
          } else {
            geoData.uv_arr.push(0, 0);
          }
          geoData.indeice_arr[index] = index++;

          // Vertex 3 (second triangle)
          this.applyVector3(f3, this.source_vertices, geoData.vertex_arr);
          if (n3 >= 0) {
            this.applyVector3(n3, this.source_normals, geoData.normal_arr);
          } else if (faceNormal2) {
            geoData.normal_arr.push(faceNormal2[0], faceNormal2[1], faceNormal2[2]);
          } else {
            geoData.normal_arr.push(0, 0, 0);
          }
          if (u3 >= 0) {
            this.applyVector2(u3, this.source_textureCoords, geoData.uv_arr);
          } else {
            geoData.uv_arr.push(0, 0);
          }
          geoData.indeice_arr[index] = index++;
        }
      }

      let geo: GeometryBase = new GeometryBase();
      geo.setIndices(new Uint32Array(geoData.indeice_arr));
      geo.setAttribute(
        VertexAttributeName.position,
        new Float32Array(geoData.vertex_arr)
      );
      geo.setAttribute(
        VertexAttributeName.normal,
        new Float32Array(geoData.normal_arr)
      );
      geo.setAttribute(
        VertexAttributeName.uv,
        new Float32Array(geoData.uv_arr)
      );
      geo.setAttribute(
        VertexAttributeName.TEXCOORD_1,
        new Float32Array(geoData.uv_arr)
      );

      geo.addSubGeometry({
        indexStart: 0,
        indexCount: geoData.indeice_arr.length,
        vertexStart: 0,
        vertexCount: 0,
        firstStart: 0,
        index: 0,
        topology: 0,
      });

      let mat = new LitMaterial();
      const matName = geoData.source_mat;
      const matData = matName ? this.matLibs[matName] : undefined;
      if (matData && matData.map_Kd) {
        const texturePath = StringUtil.normalizePath(
          this.baseUrl + matData.map_Kd
        );
        const texture = Engine3D.res.getTexture(texturePath + OBJParser.cloudImageProcessParam);
        if (texture) {
          mat.baseMap = texture;
        }
      }

      let obj = new Object3D();
      let mr = obj.addComponent(MeshRenderer);
      mr.geometry = geo;
      mr.material = mat;
      root.addChild(obj);
    }
    this.data = root;
  }

  /**
   * Verify parsing validity
   * @param ret
   * @returns
   */
  public verification(): boolean {
    if (this.data) {
      return true;
    }
    throw new Error("Method not implemented.");
  }
}
