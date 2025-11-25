import { Vector3 } from '../../../../math/Vector3';
import { Matrix4 } from '../../../../math/Matrix4';
import { BoundingBox } from '../../../../core/bound/BoundingBox';
import { BoundingSphere } from '../../../../core/bound/BoundingSphere';
import { Frustum } from '../../../../core/bound/Frustum';
import { BoundingVolumeData } from './TileSet';

export type BoundingVolumeType = 'box' | 'sphere' | 'region';

export class BoundingVolume {
  static s_tmpMatrix:Matrix4 = null;
  private _type: BoundingVolumeType;
  private _data: BoundingVolumeData;
  private _box?: BoundingBox;
  private _sphere?: BoundingSphere;
  private _matrix?: Matrix4;

  constructor(data: BoundingVolumeData) {
    if (!BoundingVolume.s_tmpMatrix) {
      BoundingVolume.s_tmpMatrix = new Matrix4();
    }
    this._data = data;

    if (data.box) {
      this._type = 'box';
      this._parseBox(data.box);
    } else if (data.sphere) {
      this._type = 'sphere';
      this._parseSphere(data.sphere);
    } else if (data.region) {
      this._type = 'region';
      this._parseRegion(data.region);
    } else {
      throw new Error('BoundingVolume: Invalid bounding volume data');
    }
  }

  private _parseBox(box: number[]): void {
    if (box.length !== 12) {
      throw new Error('BoundingVolume: Box must have 12 elements');
    }

    const center = new Vector3(box[0], box[1], box[2]);
    const xAxis = new Vector3(box[3], box[4], box[5]);
    const yAxis = new Vector3(box[6], box[7], box[8]);
    const zAxis = new Vector3(box[9], box[10], box[11]);

    const xHalfLength = xAxis.length;
    const yHalfLength = yAxis.length;
    const zHalfLength = zAxis.length;

    const xDir = xAxis.clone().normalize();
    const yDir = yAxis.clone().normalize();
    const zDir = zAxis.clone().normalize();

    this._matrix = new Matrix4();
    const rawData = this._matrix.rawData;
    rawData[0] = xDir.x;
    rawData[1] = xDir.y;
    rawData[2] = xDir.z;
    rawData[3] = 0;

    rawData[4] = yDir.x;
    rawData[5] = yDir.y;
    rawData[6] = yDir.z;
    rawData[7] = 0;

    rawData[8] = zDir.x;
    rawData[9] = zDir.y;
    rawData[10] = zDir.z;
    rawData[11] = 0;

    rawData[12] = center.x;
    rawData[13] = center.y;
    rawData[14] = center.z;
    rawData[15] = 1;

    // 创建轴对齐包围盒（在局部坐标系中）
    const size = new Vector3(
      xHalfLength * 2,
      yHalfLength * 2,
      zHalfLength * 2
    );
    this._box = new BoundingBox(new Vector3(0, 0, 0), size);
  }

  private _parseSphere(sphere: number[]): void {
    if (sphere.length !== 4) {
      throw new Error('BoundingVolume: Sphere must have 4 elements');
    }

    const center = new Vector3(sphere[0], sphere[1], sphere[2]);
    const radius = sphere[3];

    this._sphere = new BoundingSphere(center, radius);
  }

  private _parseRegion(region: number[]): void {
    if (region.length !== 6) {
      throw new Error('BoundingVolume: Region must have 6 elements');
    }
    // TODO: Convert region to box
    // it need the geospatial coordinate system conversion, can be implemented in Phase 2
    const [west, south, east, north, minHeight, maxHeight] = region;

    const center = new Vector3(
      (west + east) / 2,
      (south + north) / 2,
      (minHeight + maxHeight) / 2
    );

    const size = new Vector3(
      Math.abs(east - west),
      Math.abs(north - south),
      Math.abs(maxHeight - minHeight)
    );

    this._box = new BoundingBox(center, size);
    this._matrix = new Matrix4();
    this._matrix.identity();
  }

  /**
   * get the axis aligned bounding box
   * @param target the target bounding box
   * @param parentTransform the optional parent transform (accumulated transform)
   */
  getAABB(target: BoundingBox, parentTransform?: Matrix4): BoundingBox {
    if (this._type === 'sphere' && this._sphere) {
      const center = this._sphere.center;
      const radius = this._sphere.radius;
      const min = new Vector3(
        center.x - radius,
        center.y - radius,
        center.z - radius
      );
      const max = new Vector3(
        center.x + radius,
        center.y + radius,
        center.z + radius
      );
      target.setFromMinMax(min, max);
      
      // 如果有父级 transform，需要变换球体的 8 个顶点
      if (parentTransform) {
        const corners = [
          new Vector3(min.x, min.y, min.z),
          new Vector3(max.x, min.y, min.z),
          new Vector3(min.x, max.y, min.z),
          new Vector3(max.x, max.y, min.z),
          new Vector3(min.x, min.y, max.z),
          new Vector3(max.x, min.y, max.z),
          new Vector3(min.x, max.y, max.z),
          new Vector3(max.x, max.y, max.z),
        ];
        
        corners.forEach(corner => {
          const temp = new Vector3();
          parentTransform.transformPoint(corner, temp);
          corner.copyFrom(temp);
        });
        
        target.makeEmpty();
        corners.forEach(corner => {
          target.expandByPoint(corner);
        });
      }
      
      return target;
    } else if (this._box) {
      // calculate the accumulated transform matrix: worldMatrix = parentTransform * localMatrix
      const worldMatrix: Matrix4 = BoundingVolume.s_tmpMatrix;
      worldMatrix.identity();
      if (this._matrix) {
        if (parentTransform) {
          worldMatrix.multiplyMatrices(parentTransform, this._matrix);
        } else {
          worldMatrix.copyFrom(this._matrix);
        }
      } else if (parentTransform) {
        worldMatrix.copyFrom(parentTransform);
      }
      
      if (worldMatrix) {
        const localBox = this._box;
        const corners = [
          new Vector3(localBox.min.x, localBox.min.y, localBox.min.z),
          new Vector3(localBox.max.x, localBox.min.y, localBox.min.z),
          new Vector3(localBox.min.x, localBox.max.y, localBox.min.z),
          new Vector3(localBox.max.x, localBox.max.y, localBox.min.z),
          new Vector3(localBox.min.x, localBox.min.y, localBox.max.z),
          new Vector3(localBox.max.x, localBox.min.y, localBox.max.z),
          new Vector3(localBox.min.x, localBox.max.y, localBox.max.z),
          new Vector3(localBox.max.x, localBox.max.y, localBox.max.z),
        ];

        corners.forEach(corner => {
          const temp = new Vector3();
          worldMatrix!.transformPoint(corner, temp);
          corner.copyFrom(temp);
        });

        target.makeEmpty();
        corners.forEach(corner => {
          target.expandByPoint(corner);
        });
      } else {
        target.setFromMinMax(this._box.min, this._box.max);
      }
      return target;
    }

    throw new Error('BoundingVolume: Invalid state');
  }

  /**
   * get the oriented bounding box (OBB)
   */
  getOBB(targetBox: BoundingBox, targetMatrix: Matrix4): void {
    if (this._type === 'box' && this._box && this._matrix) {
      targetBox.setFromMinMax(this._box.min, this._box.max);
      targetMatrix.copyFrom(this._matrix);
    } else {
      // 对于 Sphere 和 Region，转换为 Box
      this.getAABB(targetBox);
      targetMatrix.identity();
    }
  }

  /**
   * get the bounding sphere
   */
  getSphere(target: BoundingSphere): BoundingSphere {
    if (this._type === 'sphere' && this._sphere) {
      target.center.copyFrom(this._sphere.center);
      target.radius = this._sphere.radius;
      return target;
    }

    // for box and region, convert to sphere
    const aabb = new BoundingBox();
    this.getAABB(aabb);
    const center = aabb.center;
    const size = aabb.size;
    const radius = size.length * 0.5;

    target.center.copyFrom(center);
    target.radius = radius;
    return target;
  }

  /**
   * get the type of the bounding volume
   */
  get type(): BoundingVolumeType {
    return this._type;
  }

  /**
   * calculate the distance to the point
   */
  /**
   * calculate the distance to the point
   * @param point the target point (world coordinate system)
   * @param parentTransform the optional parent transform (accumulated transform)
   */
  distanceToPoint(point: Vector3, parentTransform?: Matrix4): number {
    if (this._type === 'sphere' && this._sphere) {
      const center = this._sphere.center;
      let worldCenter = center;
      
      if (parentTransform) {
        const temp = new Vector3();
        parentTransform.transformPoint(center, temp);
        worldCenter = temp;
      }
      
      const radius = this._sphere.radius;
      const distance = point.clone().subtract(worldCenter).length;
      return Math.max(0, distance - radius);
    } else if (this._box) {
      const aabb = new BoundingBox();
      this.getAABB(aabb, parentTransform);
      const center = aabb.center;
      const size = aabb.size;
      
      const dx = Math.max(0, Math.abs(point.x - center.x) - size.x * 0.5);
      const dy = Math.max(0, Math.abs(point.y - center.y) - size.y * 0.5);
      const dz = Math.max(0, Math.abs(point.z - center.z) - size.z * 0.5);
      
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    
    return Infinity;
  }

  /**
   * check if intersects with the frustum
   * @param frustum the frustum (world coordinate system)
   * @param parentTransform the optional parent transform (accumulated transform)
   */
  intersectsFrustum(frustum: Frustum, parentTransform?: Matrix4): boolean {
    if (this._type === 'sphere' && this._sphere) {
      const tempBox = new BoundingBox();
      this.getAABB(tempBox, parentTransform);
      const result = frustum.containsBox2(tempBox);
      return result > 0;
    } else if (this._box) {
      const aabb = new BoundingBox();
      this.getAABB(aabb, parentTransform);
      const result = frustum.containsBox2(aabb);
      return result > 0;
    }
    
    return false;
  }
}

