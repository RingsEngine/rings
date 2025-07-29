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
export declare class OBJParser extends ParserBase {
    static format: ParserFormat;
    private textData;
    private source_vertices;
    private source_normals;
    private source_tangents;
    private source_textureCoords;
    matLibs: {
        [name: string]: MatData;
    };
    geometrys: {
        [name: string]: GeometryData;
    };
    private activeGeo;
    facesMaterialsIndex: {
        materialName: string;
        materialStartIndex: number;
    }[];
    mtl: string;
    mtlUrl: string;
    parseString(obj: string): Promise<string>;
    private applyVector2;
    private applyVector3;
    private applyVector4;
    private loadMTL;
    private load_textures;
    private parserLine;
    private parserOBJ;
    private parser_mesh;
    /**
     * Verify parsing validity
     * @param ret
     * @returns
     */
    verification(): boolean;
}
export {};
