import { Object3D } from "../../../core/entities/Object3D";
import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
import { LASLoader } from "./LASLoader";
import { LASData, LASBinaryData, LASParsedData, LASVisualizationMode } from "./LASTypes";
import { PointCloudRenderer } from "../../../components/renderer/PointCloudRenderer";
import { FatLineRenderer } from "../../../components/renderer/FatLineRenderer";
import { FatLineGeometry } from "../../../core/geometry/FatLineGeometry";
import { FatLineMaterial } from "../../../materials/FatLineMaterial";
import { Color } from "../../../math/Color";

/**
 * LAS format parser
 * Organizes parsed LAS data (from LASLoader) into renderable objects
 * Supports multiple visualization modes: point cloud, curve, and well trajectory
 */
export class LASParser extends ParserBase {
  static format: ParserFormat = ParserFormat.BIN; // Can handle both binary and text

  public visualizationMode: LASVisualizationMode = LASVisualizationMode.PointCloud;

  public async parseBuffer(buffer: ArrayBuffer) {
    const loader = new LASLoader();
    const parsedData = await loader.parse(buffer);
    await this.createVisualization(parsedData);
  }

  /**
   * Create visualization from parsed LAS data
   */
  private async createVisualization(parsedData: LASParsedData) {
    if ('format' in parsedData && parsedData.format === 'binary') {
      this.data = this.createBinaryPointCloudVisualization(parsedData as LASBinaryData);
    } else {
      const asciiData = parsedData as LASData;
      let result: Object3D;

      switch (this.visualizationMode) {
        case LASVisualizationMode.PointCloud:
          result = this.createPointCloudVisualization(asciiData);
          break;
        case LASVisualizationMode.Curve:
          result = this.createCurveVisualization(asciiData);
          break;
        case LASVisualizationMode.WellTrajectory:
          result = this.createWellTrajectoryVisualization(asciiData);
          break;
        default:
          result = this.createPointCloudVisualization(asciiData);
      }

      result["lasData"] = asciiData;
      result["wellParams"] = asciiData.wellParams;
      result["curveParams"] = asciiData.curveParams;

      this.data = result;
    }
  }

  /**
   * Create point cloud visualization from binary LAS data
   */
  private createBinaryPointCloudVisualization(binaryData: LASBinaryData): Object3D {
    const pointCloudObj = new Object3D();
    pointCloudObj.name = 'LASPointCloud';
    const pointCloudObjRoot = new Object3D();
    pointCloudObjRoot.name = 'LASPointCloudRoot';
    pointCloudObj.addChild(pointCloudObjRoot);
    
    const renderer = pointCloudObjRoot.addComponent(PointCloudRenderer);
    renderer.initFromData(binaryData.positions, binaryData.colors, binaryData.numPoints);
    renderer.setPointShape('circle');
    renderer.setPointSize(4.0);
    
    pointCloudObj["lasFormat"] = 'binary';
    pointCloudObj["lasVersion"] = binaryData.version;
    pointCloudObj["numPoints"] = binaryData.numPoints;
    pointCloudObj["pointDataFormat"] = binaryData.pointDataFormat;
    pointCloudObj["bbox"] = binaryData.bbox;
    
    return pointCloudObj;
  }


  public verification(): boolean {
    if (this.data) {
      return true;
    }
    throw new Error("LASParser: Parse failed");
  }

  /**
   * Create point cloud visualization from LAS data
   * Depth as Z axis, curve values as X/Y axes
   */
  private createPointCloudVisualization(lasData: LASData): Object3D {
    const { headers, data, nullValue } = lasData;

    const depthIndex = headers.findIndex(
      h => h.toUpperCase() === 'DEPTH' || h.toUpperCase() === 'DEPT'
    );

    if (depthIndex < 0) {
      throw new Error('LASParser: DEPTH column not found');
    }

    const curveIndices = headers
      .map((_, i) => i)
      .filter(i => i !== depthIndex)
      .slice(0, 2);

    const validData = data.filter(row =>
      !row.some(val => val === nullValue || val === +nullValue)
    );

    if (validData.length === 0) {
      throw new Error('LASParser: No valid data points after filtering');
    }

    const pointCount = validData.length;
    const positions = new Float32Array(pointCount * 3);
    const colors = new Uint8Array(pointCount * 4);

    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;

    if (curveIndices.length > 0) {
      const xValues = validData.map(row => +row[curveIndices[0]]).filter(v => !isNaN(v));
      minX = Math.min(...xValues);
      maxX = Math.max(...xValues);

      if (curveIndices.length > 1) {
        const yValues = validData.map(row => +row[curveIndices[1]]).filter(v => !isNaN(v));
        minY = Math.min(...yValues);
        maxY = Math.max(...yValues);
      }
    }

    for (let i = 0; i < validData.length; i++) {
      const row = validData[i];
      const idx = i * 3;
      const colorIdx = i * 4;

      positions[idx + 2] = +row[depthIndex];

      if (curveIndices.length > 0) {
        const xValue = +row[curveIndices[0]];
        const normalizedX = maxX !== minX ? (xValue - minX) / (maxX - minX) : 0;
        positions[idx + 0] = normalizedX * 10;

        if (curveIndices.length > 1) {
          const yValue = +row[curveIndices[1]];
          const normalizedY = maxY !== minY ? (yValue - minY) / (maxY - minY) : 0;
          positions[idx + 1] = normalizedY * 10;
        } else {
          positions[idx + 1] = 0;
        }
      } else {
        positions[idx + 0] = 0;
        positions[idx + 1] = 0;
      }

      if (curveIndices.length > 0) {
        const curveValue = +row[curveIndices[0]];
        const normalizedValue = maxX !== minX ? (curveValue - minX) / (maxX - minX) : 0;
        this.mapValueToColor(normalizedValue, colors, colorIdx);
      } else {
        colors[colorIdx + 0] = 255;
        colors[colorIdx + 1] = 255;
        colors[colorIdx + 2] = 255;
        colors[colorIdx + 3] = 255;
      }
    }

    const pointCloudObj = new Object3D();
    pointCloudObj.name = 'LASPointCloud';
    const renderer = pointCloudObj.addComponent(PointCloudRenderer);
    renderer.initFromData(positions, colors, pointCount);
    renderer.setPointShape('circle');
    renderer.setPointSize(4.0);

    return pointCloudObj;
  }

  /**
   * Create curve visualization using FatLineRenderer
   * Depth as Z axis, normalized curve value as X axis
   */
  private createCurveVisualization(lasData: LASData): Object3D {
    const { headers, data, nullValue } = lasData;

    const depthIndex = headers.findIndex(
      h => h.toUpperCase() === 'DEPTH' || h.toUpperCase() === 'DEPT'
    );

    if (depthIndex < 0) {
      throw new Error('LASParser: DEPTH column not found');
    }

    const curveIndex = headers
      .map((_, i) => i)
      .find(i => i !== depthIndex);

    if (curveIndex === undefined) {
      throw new Error('LASParser: No curve column found');
    }

    const validData = data.filter(row => {
      const depth = +row[depthIndex];
      const curveValue = +row[curveIndex];
      return !isNaN(depth) && !isNaN(curveValue) &&
        curveValue !== nullValue && curveValue !== +nullValue;
    });

    if (validData.length === 0) {
      throw new Error('LASParser: No valid data points');
    }

    const curveValues = validData.map(row => +row[curveIndex]);
    const minCurve = Math.min(...curveValues);
    const maxCurve = Math.max(...curveValues);
    const curveRange = maxCurve - minCurve;

    const positions = new Float32Array(validData.length * 3);
    for (let i = 0; i < validData.length; i++) {
      const row = validData[i];
      const idx = i * 3;
      const depth = +row[depthIndex];
      const curveValue = +row[curveIndex];

      positions[idx + 2] = depth;

      const normalizedCurve = curveRange > 0
        ? (curveValue - minCurve) / curveRange
        : 0;
      positions[idx + 0] = normalizedCurve * 10;
      positions[idx + 1] = 0;
    }

    const geometry = new FatLineGeometry();
    geometry.setPositions(positions);

    const material = new FatLineMaterial();
    material.baseColor = new Color(1, 0, 0, 1);
    material.lineWidth = 2.0;

    const curveObj = new Object3D();
    curveObj.name = `LASCurve_${headers[curveIndex]}`;
    const renderer = curveObj.addComponent(FatLineRenderer);
    renderer.geometry = geometry;
    renderer.material = material;

    return curveObj;
  }

  /**
   * Create well trajectory visualization
   * TODO: Implement when well trajectory data is available
   */
  private createWellTrajectoryVisualization(lasData: LASData): Object3D {
    // TODO: Implement well trajectory visualization
    // This would require well trajectory parameters in LAS file
    throw new Error('LASParser: Well trajectory visualization not yet implemented');
  }

  private normalizeValue(
    value: number,
    data: Array<Array<string | number>>,
    columnIndex: number
  ): number {
    const values = data.map(row => +row[columnIndex]).filter(v => !isNaN(v));
    const min = Math.min(...values);
    const max = Math.max(...values);
    return max !== min ? (value - min) / (max - min) : 0;
  }

  private mapValueToColor(
    normalizedValue: number,
    colors: Uint8Array,
    index: number
  ) {
    const r = Math.floor(normalizedValue * 255);
    const b = Math.floor((1 - normalizedValue) * 255);
    colors[index + 0] = r;
    colors[index + 1] = 0;
    colors[index + 2] = b;
    colors[index + 3] = 255;
  }
}

