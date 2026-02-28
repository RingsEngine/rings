import { GSplatRenderer } from "../../../components/renderer/gsplat/GSplatRenderer";
import { MeshRenderer } from "../../../components/renderer/MeshRenderer";
import { PointCloudRenderer } from "../../../components/renderer/PointCloudRenderer";
import { Object3D } from "../../../core/entities/Object3D";
import { GeometryBase } from "../../../core/geometry/GeometryBase";
import { VertexAttributeName } from "../../../core/geometry/VertexAttributeName";
import { LitMaterial } from "../../../materials/LitMaterial";
import { Engine3D } from "../../../Engine3D";
import { StringUtil } from "../../../util/StringUtil";
import { computeAABBFromPositions, GaussianSplatAsset } from "../3dgs/GaussianSplatAsset";
import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
import { parsePlyGaussianSplat, parsePlyHeader, parsePlyMesh, parsePlyPointCloud } from "./PlyLoader";
import { PlyMode } from "./PlyTypes";

export class PlyParser extends ParserBase {
    static format: ParserFormat = ParserFormat.BIN;
    static cloudImageProcessParam: string = '';
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
                const plyData = parsePlyPointCloud(buffer);
                
                const pointCloudObj = new Object3D();
                pointCloudObj.name = 'PLYPointCloud';
                const pointCloudObjRoot= new Object3D(); // use for center offset
                pointCloudObjRoot.name = 'PLYPointCloudRoot';
                pointCloudObj.addChild(pointCloudObjRoot);
                const renderer = pointCloudObjRoot.addComponent(PointCloudRenderer);
                
                if (plyData.color) {
                    renderer.initFromData(plyData.position, plyData.color, plyData.vertexCount);
                } else {
                    const defaultColors = new Uint8Array(plyData.vertexCount * 4);
                    defaultColors.fill(255);
                    renderer.initFromData(plyData.position, defaultColors, plyData.vertexCount);
                }
                renderer.setPointShape('circle');
                renderer.setPointSize(4);
                
                this.data = pointCloudObj;
                break;
            }
            case PlyMode.Mesh: {
                const plyData = parsePlyMesh(buffer);
                
                const rootObj = new Object3D();
                rootObj.name = 'PLYMesh';
                
                const textureGroups = new Map<number, number[]>();
                
                if (plyData.triangleTexnumbers && plyData.triangleTexnumbers.length > 0) {
                    for (let i = 0; i < plyData.triangleTexnumbers.length; i++) {
                        const texnum = plyData.triangleTexnumbers[i];
                        if (!textureGroups.has(texnum)) {
                            textureGroups.set(texnum, []);
                        }
                        textureGroups.get(texnum)!.push(i);
                    }
                } else {
                    const triangleCount = plyData.indices.length / 3;
                    const allTriangles: number[] = [];
                    for (let i = 0; i < triangleCount; i++) {
                        allTriangles.push(i);
                    }
                    textureGroups.set(0, allTriangles);
                }
                
                const materials = new Map<number, LitMaterial>();
                if (plyData.textureFiles && plyData.textureFiles.length > 0) {
                    const promiseList = [];
                    for (let texnum = 0; texnum < plyData.textureFiles.length; texnum++) {
                        const material = new LitMaterial();
                        const texturePath = StringUtil.normalizePath(
                            this.baseUrl + plyData.textureFiles[texnum]
                        );
                        promiseList.push(Engine3D.res.loadTexture(texturePath + PlyParser.cloudImageProcessParam).then((texture) => {
                            material.baseMap = texture;
                            materials.set(texnum, material);
                        }));
                    }
                    await Promise.all(promiseList);
                }
                
                if (materials.size === 0) {
                    materials.set(0, new LitMaterial());
                }
                
                for (const [texnum, triangleIndices] of textureGroups) {
                    const groupIndices: number[] = [];
                    for (const triIdx of triangleIndices) {
                        const baseIdx = triIdx * 3;
                        groupIndices.push(
                            plyData.indices[baseIdx + 0],
                            plyData.indices[baseIdx + 1],
                            plyData.indices[baseIdx + 2]
                        );
                    }
                    
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
                    
                    let material = materials.get(texnum);
                    if (!material) {
                        material = materials.values().next().value || new LitMaterial();
                    }
                    
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