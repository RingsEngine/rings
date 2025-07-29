import { Vector3 } from "../math/Vector3";

export class Vector3Ex {
  public static add(v1: Vector3, v2: Vector3, target?: Vector3): Vector3 {
    if (!target) {
      target = new Vector3();
    }
    target.x = v1.x + v2.x;
    target.y = v1.y + v2.y;
    target.z = v1.z + v2.z;
    return target;
  }

  public static sub(v1: Vector3, v2: Vector3, target?: Vector3): Vector3 {
    if (!target) {
      target = new Vector3();
    }
    target.x = v1.x - v2.x;
    target.y = v1.y - v2.y;
    target.z = v1.z - v2.z;
    return target;
  }

  public static mul(v1: Vector3, v2: Vector3, target?: Vector3): Vector3 {
    if (!target) {
      target = new Vector3();
    }
    target.x = v1.x * v2.x;
    target.y = v1.y * v2.y;
    target.z = v1.z * v2.z;
    return target;
  }

  public static mulScale(v1: Vector3, v: number, target?: Vector3): Vector3 {
    if (!target) {
      target = new Vector3();
    }
    target.x = v1.x * v;
    target.y = v1.y * v;
    target.z = v1.z * v;
    return target;
  }

  public static div(v1: Vector3, v2: Vector3, target?: Vector3): Vector3 {
    if (!target) {
      target = new Vector3();
    }
    target.x = v1.x / v2.x;
    target.y = v1.y / v2.y;
    target.z = v1.z / v2.z;
    return target;
  }

  public static normalize(v1: Vector3) {
    let t = v1.clone();
    return t.normalize();
  }

  public static dot(v1: Vector3, v2: Vector3): number {
    let v = Vector3.HELP_0;
    v.copyFrom(v1);
    return v.dotProduct(v2);
  }

  public static calculateVectorAngle_xz(v1: Vector3, v2: Vector3) {
    return Math.acos(
      (v1.x * v2.x + v1.y * v2.y) /
        Math.sqrt((v1.x * v1.x + v1.y * v1.y) * (v2.x * v2.x + v2.y * v2.y))
    );
  }

  public static distance(v1: Vector3, v2: Vector3) {
    return Vector3.distance(v1, v2);
  }

  public static getRandomXYZ(min: number = -100, max: number = 100): Vector3 {
    return new Vector3(
      Math.random() * (max - min) + min,
      Math.random() * (max - min) + min,
      Math.random() * (max - min) + min
    );
  }

  public static getRandomV3(
    min: number = -100,
    max: number = 100,
    yMin: number,
    yMax: number
  ): Vector3 {
    return new Vector3(
      Math.random() * max + min,
      Math.random() * yMax + yMin,
      Math.random() * max + min
    );
  }

  public static sphere(radius: number) {
    let r = radius * Math.random();
    let randomDir = new Vector3(
      Math.random() * 1 - 0.5,
      Math.random() * 1 - 0.5,
      Math.random() * 1 - 0.5
    );
    randomDir.normalize();
    randomDir.scaleBy(r);
    return randomDir;
  }

  public static sphereXYZ(
    radiusMin: number,
    radiusMax: number,
    x: number = 1,
    y: number = 1,
    z: number = 1
  ) {
    let r = radiusMin + (radiusMax - radiusMin) * Math.random();
    let randomDir = new Vector3(
      Math.random() * x - x * 0.5,
      Math.random() * y - y * 0.5,
      Math.random() * z - z * 0.5
    );
    randomDir.normalize();
    randomDir.scaleBy(r);
    return randomDir;
  }
}
