import { Object3D } from "../core/entities/Object3D";
import { BoxGeometry } from "../shape/BoxGeometry";
import { SphereGeometry } from "../shape/SphereGeometry";
import { PointLight } from "../components/lights/PointLight";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { Vector3 } from "../math/Vector3";
import { Material } from "../materials/Material";
export declare class Object3DUtil {
    private static boxGeo;
    private static planeGeo;
    private static sphere;
    private static material;
    private static materialMap;
    private static initHeap;
    static get CubeMesh(): BoxGeometry;
    static get SphereMesh(): SphereGeometry;
    static GetCube(): Object3D;
    static GetMaterial(tex: Texture): Material;
    static GetPlane(tex: Texture): Object3D;
    static GetSingleCube(sizeX: number, sizeY: number, sizeZ: number, r: number, g: number, b: number): Object3D;
    static GetSingleSphere(radius: number, r: number, g: number, b: number): Object3D;
    static get Sphere(): Object3D;
    static GetSingleCube2(mat: Material, size?: number): Object3D;
    static GetPointLight(pos: Vector3, rotation: Vector3, radius: number, r: number, g: number, b: number, intensity?: number, castShadow?: boolean): PointLight;
}
