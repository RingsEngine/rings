import { MeshRenderer } from "../../../../components/renderer/MeshRenderer";
import { Object3D } from "../../../../core/entities/Object3D";
import { GeometryBase } from "../../../../core/geometry/GeometryBase";
import { VertexAttributeName } from "../../../../core/geometry/VertexAttributeName";
import { BlendMode } from "../../../../materials/BlendMode";
import { UnLitMaterial } from "../../../../materials/UnLitMaterial";
import { Color } from "../../../../math/Color";
import { Vector3 } from "../../../../math/Vector3";
import { WaylineFile } from "../dataDef/wayline";
import { WayPoint3D } from "./WayPoint3D";

export class WayLines3D extends Object3D {
    static register3DRepresentation: (wayLines3D: WayLines3D) => Object3D = null;
    public line: Object3D;
    constructor(wayLineFile: WaylineFile) {
        super();
        this.parseWayLineFile(wayLineFile);
        this.setup3DRepresentation();
    }

    private parseWayLineFile(wayLineFile: WaylineFile) {
        for (const placemark of wayLineFile.Folder.Placemark) {
            const wayPoint3D = new WayPoint3D(placemark);
            this.addChild(wayPoint3D);
        }

        this.entityChildren = this.entityChildren.sort((a: WayPoint3D, b: WayPoint3D) => {
            return a.positionIndex - b.positionIndex;
        });
    }

    public setup3DRepresentation() {
        if (this.line) {
            this.removeChild(this.line);
            this.line = null;
        }
        if (WayLines3D.register3DRepresentation) {
            this.line = WayLines3D.register3DRepresentation(this);
            if (this.line) {
                this.addChild(this.line);
            }
        } else {
            this.line = this.createMultiLine(this.entityChildren.map((child: WayPoint3D) => child.localPosition), new Color(1, 1, 1, 1));
            this.addChild(this.line);
            this.line.name = "WayLines3DLine";
        }
    }

    private createMultiLine(positions: Vector3[], color: Color) {
        if (positions.length < 2) {
            return null;
        }
        
        const lineGeometry = new GeometryBase();

        const vertices = new Float32Array(positions.length * 3);
        for (let i = 0; i < positions.length; i++) {
            vertices[i * 3] = positions[i].x;
            vertices[i * 3 + 1] = positions[i].y;
            vertices[i * 3 + 2] = positions[i].z;
        }
        
        const indices = new Uint16Array((positions.length - 1) * 2);
        for (let i = 0; i < positions.length - 1; i++) {
            indices[i * 2] = i;
            indices[i * 2 + 1] = i + 1;
        }
        
        lineGeometry.setIndices(indices);
        lineGeometry.setAttribute(VertexAttributeName.position, vertices);
        lineGeometry.addSubGeometry({
            indexStart: 0,
            indexCount: indices.length,
            vertexStart: 0,
            vertexCount: 0,
            firstStart: 0,
            index: 0,
            topology: 0,
        });

        const lineObject = new Object3D();
        const lineRenderer = lineObject.addComponent(MeshRenderer);
        
        const material = new UnLitMaterial();
        material.topology = "line-list";
        material.baseColor = color;
        material.blendMode = BlendMode.ADD;
        material.castReflection = false;

        lineRenderer.geometry = lineGeometry;
        lineRenderer.material = material;

        return lineObject;
    }
}