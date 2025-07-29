import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
export declare enum GeoType {
    Point = "Point",
    LineString = "LineString",
    MultiPolygon = "MultiPolygon"
}
export interface GeoJsonGeometryStruct {
    type: GeoType;
    coordinates: any;
}
export interface GeoJsonPropertiesStruct {
    prop0: string;
    prop1: any;
}
export interface GeoJsonNodeStruct {
    type: string;
    geometry: GeoJsonGeometryStruct;
    properties: GeoJsonPropertiesStruct;
}
export interface GeoJsonStruct {
    type: string;
    features: GeoJsonNodeStruct[];
}
export declare class GeoJsonParser extends ParserBase {
    static format: ParserFormat;
    json: string;
    parseString(data: any): Promise<void>;
}
