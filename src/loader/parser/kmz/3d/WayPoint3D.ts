import { MeshRenderer } from "../../../../components/renderer/MeshRenderer";
import { Object3D } from "../../../../core/entities/Object3D";
import { LitMaterial } from "../../../../materials/LitMaterial";
import { Color } from "../../../../math/Color";
import { Vector3 } from "../../../../math/Vector3";
import { SphereGeometry } from "../../../../shape/SphereGeometry";
import { PointType } from "../dataDef/point";

export class WayPoint3D extends Object3D {
    static register3DRepresentation: (wayPoint3D: WayPoint3D) => Object3D = null;
    public positionIndex: number = -1;
    public positionValid: boolean = false;
    public marker: Object3D;
    
    constructor(placemark: PointType) {
        super();
        this.parsePlacemark(placemark);
        this.setup3DRepresentation();
    }

    private parsePlacemark(placemark: PointType) {
        if (!placemark.slamPositionInfo) {
            console.warn("WayPoint3D: slamPositionInfo is not found");
            return;
        }
        const slamPosition = placemark.slamPositionInfo.slamPosition.split(",").map(Number);
        this.localPosition = new Vector3(slamPosition[0], slamPosition[1], slamPosition[2]);
        this.positionIndex = Number(placemark.slamPositionInfo.slamPositionIndex);
        this.positionValid = placemark.slamPositionInfo.slamPositionValid === "1";
    }

    public setup3DRepresentation() {
        if (this.marker) {
            this.removeChild(this.marker);
            this.marker = null;
        }
        if (WayPoint3D.register3DRepresentation) {
            this.marker = WayPoint3D.register3DRepresentation(this);
            if (this.marker) {
                this.addChild(this.marker);
            }
        } else {
            this.marker = new Object3D();
            const markerRenderer = this.marker.addComponent(MeshRenderer);
            markerRenderer.geometry = new SphereGeometry(0.1, 32, 16);
            markerRenderer.material = new LitMaterial();
            markerRenderer.material.baseColor = this.positionValid ? new Color(0, 1, 0, 1) : new Color(1, 0, 0, 1);
            this.addChild(this.marker);
            this.marker.name = "WayPoint3DMarker";
        }
    }
}