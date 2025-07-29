import { GeometryBase, Object3D } from "../..";
import { MeshRenderer } from "./MeshRenderer";
export declare class MeshFilter extends MeshRenderer {
    constructor();
    get geometry(): GeometryBase;
    set geometry(value: GeometryBase);
    cloneTo(obj: Object3D): void;
    set meshURL(value: string);
}
