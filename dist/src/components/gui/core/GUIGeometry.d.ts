import { GeometryBase } from "../../../core/geometry/GeometryBase";
import { StorageGPUBuffer } from "../../../gfx/graphics/webGpu/core/buffer/StorageGPUBuffer";
import { Vector3 } from "../../../math/Vector3";
import { UITransform } from "../uiComponents/UITransform";
import { GUIQuad } from "./GUIQuad";
/**
 * composite geometry of gui, holding and updating attribute data
 * @group GPU GUI
 */
export declare class GUIGeometry extends GeometryBase {
    private _attributeUV;
    private _attributeVIndex;
    private _faceIndexes;
    private _uvSize;
    private _vIndexSize;
    private _posAttribute;
    private _spriteAttribute;
    private _colorAttribute;
    private _onPositionChange;
    private _onSpriteChange;
    private _onColorChange;
    readonly maxQuadCount: number;
    constructor(max: number);
    updateSubGeometry(index: number, start: number, count: number): import("../../..").SubGeometry;
    resetSubGeometries(): void;
    updateBounds(min?: Vector3, max?: Vector3): this;
    getPositionBuffer(): StorageGPUBuffer;
    getSpriteBuffer(): StorageGPUBuffer;
    getColorBuffer(): StorageGPUBuffer;
    create(): this;
    private createBuffer;
    fillQuad(quad: GUIQuad, transform: UITransform): void;
    private fillQuadPosition;
    private fillQuadColor;
    private fillQuadSprite;
}
