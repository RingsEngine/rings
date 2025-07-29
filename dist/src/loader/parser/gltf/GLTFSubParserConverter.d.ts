import { Object3D } from "../../../core/entities/Object3D";
import { GLTF_Info, GLTF_Node } from "./GLTFInfo";
import { GLTFSubParser } from "./GLTFSubParser";
export declare class GLTFSubParserConverter {
    protected gltf: GLTF_Info;
    protected subParser: GLTFSubParser;
    private _testCount;
    private _hasCastShadow;
    constructor(subParser: GLTFSubParser);
    convertNodeToObject3D(nodeInfo: GLTF_Node, parentNode: any): Promise<Object3D>;
    private convertSkeletonAnim;
    private convertLight;
    private convertprimitives;
    private createGeometryBase;
    private applyMaterialExtensions;
    private parseSkinJoints;
}
