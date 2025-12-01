import { GSplatRenderer } from "../../../components/renderer/GSplatRenderer";
import { MeshRenderer } from "../../../components/renderer/MeshRenderer";
import { Object3D } from "../../../core/entities/Object3D";
import { GeometryBase } from "../../../core/geometry/GeometryBase";
import { VertexAttributeName } from "../../../core/geometry/VertexAttributeName";
import { LitMaterial } from "../../../materials/LitMaterial";
import { Engine3D } from "../../../Engine3D";
import { StringUtil } from "../../../util/StringUtil";
import { computeAABBFromPositions, GaussianSplatAsset } from "../3dgs/GaussianSplatAsset";
import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
import { parsePlyGaussianSplat, parsePlyHeader, parsePlyMesh } from "./PlyLoader";
import { PlyMode } from "./PlyTypes";

export class PlyParser extends ParserBase {
    static format: ParserFormat = ParserFormat.BIN;
    public async parseBuffer(buffer: ArrayBuffer): Promise<void> {
        const header = parsePlyHeader(buffer);
        switch (header.mode) {
            case PlyMode.Splat: {
                const plyData = parsePlyGaussianSplat(buffer);
                const asset: GaussianSplatAsset = {
                    count: plyData.vertexCount,
                    position: plyData.position,
                    rotation: plyData.rotation,
                    scale: plyData.scale,
                    opacity: plyData.opacity,
                    sh: plyData.sh,
                };
                asset.bbox = computeAABBFromPositions(plyData.position);
                
                const gsplatObj = new Object3D();
                gsplatObj.name = 'GaussianSplat';
                const renderer = gsplatObj.addComponent(GSplatRenderer);
                renderer.initAsset(asset);
                this.data = gsplatObj;
                break;
            }
            case PlyMode.PointCloud: {
                break;
            }
            case PlyMode.Mesh: {
                const plyData = parsePlyMesh(buffer);
                
                // Create root object
                const rootObj = new Object3D();
                rootObj.name = 'PLYMesh';
                
                // Group triangles by texture number
                const textureGroups = new Map<number, number[]>(); // texnumber -> triangle indices
                
                if (plyData.triangleTexnumbers && plyData.triangleTexnumbers.length > 0) {
                    // Group triangles by texture number
                    for (let i = 0; i < plyData.triangleTexnumbers.length; i++) {
                        const texnum = plyData.triangleTexnumbers[i];
                        if (!textureGroups.has(texnum)) {
                            textureGroups.set(texnum, []);
                        }
                        textureGroups.get(texnum)!.push(i);
                    }
                } else {
                    // No texture numbers, use single group with all triangles
                    const triangleCount = plyData.indices.length / 3;
                    const allTriangles: number[] = [];
                    for (let i = 0; i < triangleCount; i++) {
                        allTriangles.push(i);
                    }
                    textureGroups.set(0, allTriangles);
                }
                
                // Create materials for each texture
                const materials = new Map<number, LitMaterial>();
                if (plyData.textureFiles && plyData.textureFiles.length > 0) {
                    const promiseList = [];
                    for (let texnum = 0; texnum < plyData.textureFiles.length; texnum++) {
                        const material = new LitMaterial();
                        const texturePath = StringUtil.normalizePath(
                            this.baseUrl + plyData.textureFiles[texnum]
                        );
                        // const texture = Engine3D.res.getTexture(texturePath);
                        // if (texture) {
                        //     material.baseMap = texture;
                        // }
                        // materials.set(texnum, material);
                        promiseList.push(Engine3D.res.loadTexture(texturePath).then((texture) => {
                            material.baseMap = texture;
                            materials.set(texnum, material);
                        }));
                    }
                    await Promise.all(promiseList);
                }
                
                // Create default material if no textures
                if (materials.size === 0) {
                    materials.set(0, new LitMaterial());
                }
                
                // Create geometry and MeshRenderer for each texture group
                for (const [texnum, triangleIndices] of textureGroups) {
                    // Build indices for this texture group
                    const groupIndices: number[] = [];
                    for (const triIdx of triangleIndices) {
                        const baseIdx = triIdx * 3;
                        groupIndices.push(
                            plyData.indices[baseIdx + 0],
                            plyData.indices[baseIdx + 1],
                            plyData.indices[baseIdx + 2]
                        );
                    }
                    
                    // Create geometry for this group
                    const geometry = new GeometryBase();
                    geometry.setAttribute(
                        VertexAttributeName.position,
                        plyData.position
                    );
                    
                    geometry.setAttribute(
                        VertexAttributeName.normal,
                        plyData.normal
                    );
                    
                    if (plyData.uv) {
                        geometry.setAttribute(
                            VertexAttributeName.uv,
                            plyData.uv
                        );
                    }
                    
                    if (plyData.color) {
                        geometry.setAttribute(
                            VertexAttributeName.color,
                            plyData.color
                        );
                    }
                    
                    geometry.setIndices(new Uint32Array(groupIndices));
                    
                    geometry.addSubGeometry({
                        indexStart: 0,
                        indexCount: groupIndices.length,
                        vertexStart: 0,
                        vertexCount: 0,
                        firstStart: 0,
                        index: 0,
                        topology: 0,
                    });
                    
                    // Get or create material for this texture
                    let material = materials.get(texnum);
                    if (!material) {
                        // Fallback: use first available material or create default
                        material = materials.values().next().value || new LitMaterial();
                    }
                    
                    // Create mesh object for this group
                    const meshObj = new Object3D();
                    meshObj.name = `PLYMesh_Texture_${texnum}`;
                    const renderer = meshObj.addComponent(MeshRenderer);
                    renderer.geometry = geometry;
                    renderer.material = material;
                    
                    rootObj.addChild(meshObj);
                }
                
                this.data = rootObj;
                break;
            }
        }
    }

    public verification(): boolean {
        return !!this.data;
    }
}