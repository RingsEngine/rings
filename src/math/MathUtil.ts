import { Color } from "./Color";
import { Matrix4 } from "./Matrix4";
import { Quaternion } from "./Quaternion";
import { Rand } from "./Rand";
import { Vector2 } from "./Vector2";
import { Vector3 } from "./Vector3";

export let RADIANS_TO_DEGREES: number = 180 / Math.PI;
export let DEGREES_TO_RADIANS: number = Math.PI / 180;
export let MAX_VALUE: number = 0x7fffffff;
export let MIN_VALUE: number = -0x7fffffff;

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export class MathUtil {
  private static gaussFunction(value, amplitude, center, rmsWidth) {
    let numerator = Math.pow(value - center, 2);
    let denominator = 2 * Math.pow(rmsWidth, 2);
    let exp = -1 * (numerator / denominator);
    let curve = Math.pow(Math.E, exp);
    return Math.round(curve * amplitude);
  }

  private static computeGaussian(n, theta) {
    return (
      (1.0 / Math.sqrt(2 * Math.PI * theta)) *
      Math.exp(-(n * n) / (2 * theta * theta))
    );
  }

  private static gaussCoef(sigma) {
    if (sigma < 0.5) {
      sigma = 0.5;
    }

    let a = Math.exp(0.726 * 0.726) / sigma;
    let g1 = Math.exp(-a);
    let g2 = Math.exp(-2 * a);
    let k = ((1 - g1) * (1 - g1)) / (1 + 2 * a * g1 - g2);

    let a0 = k;
    let a1 = k * (a - 1) * g1;
    let a2 = k * (a + 1) * g1;
    let a3 = -k * g2;
    let b1 = 2 * g1;
    let b2 = -g2;
    let left_corner = (a0 + a1) / (1 - b1 - b2);
    let right_corner = (a2 + a3) / (1 - b1 - b2);

    // Attempt to force type to FP32.
    return new Float32Array([
      a0,
      a1,
      a2,
      a3,
      b1,
      b2,
      left_corner,
      right_corner,
    ]);
  }

  public static clampf(
    value: number,
    min_inclusive: number,
    max_inclusive: number
  ): number {
    if (min_inclusive > max_inclusive) {
      let temp: number = min_inclusive;
      min_inclusive = max_inclusive;
      max_inclusive = temp;
    }
    return value < min_inclusive
      ? min_inclusive
      : value < max_inclusive
      ? value
      : max_inclusive;
  }

  public static normalizeAngle(a: number): number {
    while (a > 180) {
      a -= 360;
    }
    while (a < -180) {
      a += 360;
    }
    return a;
  }

  public static fract(v: number): number {
    return v - Math.floor(v);
  }

  public static getRandDirXZ(r: number) {
    let rr = r * Math.random();
    let ra = 360 * Math.random() * DEGREES_TO_RADIANS;
    let x = Math.cos(ra) * rr;
    let z = Math.sin(ra) * rr;
    return { x: x, z: z };
  }

  public static getRandDirXYZ(r: number) {
    let rr = r * Math.random();
    let ra = 360 * Math.random() * DEGREES_TO_RADIANS;
    let x = Math.cos(ra) * rr;
    let y = Math.tan(ra) * rr;
    let z = Math.sin(ra) * rr;
    return new Vector3(x, y, z);
  }

  public static getCycleXYZ(r: number) {
    let rr = r * Math.random();
    let ra = 360 * Math.random() * DEGREES_TO_RADIANS;
    let x = Math.cos(ra) * rr;
    let y = r * Math.random() - r * 0.5;
    let z = Math.sin(ra) * rr;
    return new Vector3(x, y, z);
  }

  public static angle(p1: Vector3, p2: Vector3): number {
    let v1 = Vector2.HELP_0;
    let v2 = Vector2.HELP_1;

    v1.set(p1.x, p1.z);
    v2.set(p2.x, p2.z);

    return Math.acos((v1.x * v2.x + v1.y * v2.y) / (v1.abs() * v2.abs()));
  }

  public static angle_360(from: Vector3, to: Vector3) {
    let v3 = Vector3.HELP_0;
    from.crossProduct(to, v3);
    if (v3.z > 0) {
      return MathUtil.angle(from, to);
    } else {
      return 360 - MathUtil.angle(from, to);
    }
  }

  public getRotationY(v: Vector3): number {
    let rot = MathUtil.normalizeAngle(
      Math.atan2(v.z, v.x) * RADIANS_TO_DEGREES
    ); //- 90;
    return rot;
  }

  public static fromToRotation(
    fromDirection: Vector3,
    toDirection: Vector3,
    target: Quaternion = null
  ): Quaternion {
    target ||= new Quaternion();
    let mat: Matrix4 = Matrix4.help_matrix_2;
    Matrix4.fromToRotation(fromDirection, toDirection, mat);
    target.fromMatrix(mat);
    return target;
  }

  public static getEularDir_yUp(v: number): Vector3 {
    let q = Quaternion.HELP_0;
    q.fromEulerAngles(0, v, 0);
    q.transformVector(Vector3.Z_AXIS, Vector3.HELP_5);
    return Vector3.HELP_5;
  }

  public static transformVector(
    matrix: Matrix4,
    vector: Vector3,
    result: Vector3 = null
  ): Vector3 {
    result ||= new Vector3();
    let raw = matrix.rawData;
    let a: number = raw[0];
    let e: number = raw[1];
    let i: number = raw[2];
    let m: number = raw[3];
    let b: number = raw[4];
    let f: number = raw[5];
    let j: number = raw[6];
    let n: number = raw[7];
    let c: number = raw[8];
    let g: number = raw[9];
    let k: number = raw[10];
    let o: number = raw[11];
    let d: number = raw[12];
    let h: number = raw[13];
    let l: number = raw[14];
    let p: number = raw[15];

    let x: number = vector.x;
    let y: number = vector.y;
    let z: number = vector.z;
    result.x = a * x + b * y + c * z + d;
    result.y = e * x + f * y + g * z + h;
    result.z = i * x + j * y + k * z + l;
    result.w = m * x + n * y + o * z + p;
    return result;
  }
}

export let lerp = function (v0: number, v1: number, t: number) {
  //return v0 * t + v1 * (1-t) ;
  return v0 * (1 - t) + v1 * t;
};

export function lerpVector3(v0: Vector3, v1: Vector3, t: number) {
  let newV = new Vector3();
  let v0x: number = v0.x;
  let v0y: number = v0.y;
  let v0z: number = v0.z;
  let v0w: number = v0.w;
  let v1x: number = v1.x;
  let v1y: number = v1.y;
  let v1z: number = v1.z;
  let v1w: number = v1.w;

  newV.x = (v1x - v0x) * t + v0x;
  newV.y = (v1y - v0y) * t + v0y;
  newV.z = (v1z - v0z) * t + v0z;
  newV.w = (v1w - v0w) * t + v0w;
  return newV;
}

export function lerpColor(c0: Color, c1: Color, t) {
  let newColor = new Color();
  newColor.r = (1.0 - t) * c0.r + t * c1.r;
  newColor.g = (1.0 - t) * c0.g + t * c1.g;
  newColor.b = (1.0 - t) * c0.b + t * c1.b;
  newColor.a = (1.0 - t) * c0.a + t * c1.a;
  return newColor;
}

export function lerpByte(u0, u1, scale) {
  return (u0 + (((u1 - u0) * scale) >> 8)) & 0xff;
}

export let PingPong = function (t: number, start: number, end: number): number {
  let len = end - start;
  let tt = Math.floor(t / len);
  let sd = tt % 2;
  if (sd == 0) {
    return (t % len) + start;
  } else {
    return end - (t % len) + start;
  }
};

export let RepeatSE = function (t: number, start: number, end: number): number {
  let len = end - start;
  return (t % len) + start;
};

export let GetRepeat = function (datas: any[], element: any): number {
  let count = 0;
  for (let i in datas) {
    if (i == element) {
      count++;
    }
  }
  return count;
};

export class RandomSeed {
  public x: number = 0;
  public y: number = 0;
  public z: number = 0;
  public w: number = 0;

  public randSeedList: number[];
  constructor() {
    this.randSeedList = [];
  }

  public reset() {
    this.x = Math.random() * 1;
    this.y = Math.random() * 1;
    this.z = Math.random() * 1;
    this.w = Math.random() * 1;

    this.randSeedList.length = 0;
    for (let i = 0; i < 20; i++) {
      this.randSeedList.push(Math.random() * 1);
    }
  }
}

export function dot(
  lhs: Vector2 | Quaternion | Vector3,
  rhs: Vector2 | Quaternion | Vector3
) {
  if (lhs instanceof Vector3 && rhs instanceof Vector3) {
    return lhs.x * rhs.x + lhs.y * rhs.y + lhs.z * rhs.z;
  } else if (lhs instanceof Quaternion && rhs instanceof Quaternion) {
    return lhs.x * rhs.x + lhs.y * rhs.y + lhs.z * rhs.z;
  } else {
    return lhs.x * rhs.x + lhs.y * rhs.y;
  }
}

export function scale(lhs: Vector3, rhs: Vector3) {
  return new Vector3(lhs.x * rhs.x, lhs.y * rhs.y, lhs.z * rhs.z);
}

export function sqrtImpl(f: number) {
  return Math.sqrt(f);
}

export function magnitude(inV: Vector2 | Vector3 | Quaternion) {
  return sqrtImpl(dot(inV, inV));
}

export function normalizeSafe(
  inV: Vector2 | Vector3 | Quaternion,
  defaultV?: Vector2 | Vector3 | Quaternion
) {
  let mag = magnitude(inV);
  if (mag > Vector3.EPSILON) {
    return inV.divide(magnitude(inV));
  } else {
    if (inV instanceof Vector2) {
      return new Vector2();
    }
    if (inV instanceof Vector3) {
      return new Vector3();
    }
    if (inV instanceof Quaternion) {
      return new Quaternion();
    }
  }
}

export function getFloatFromInt(value) {
  // take 23 bits of integer, and divide by 2^23-1
  let v = value & 0x007fffff;
  return v * (1.0 / 8388607.0);
}

export function random01(value) {
  // take 23 bits of integer, and divide by 2^23-1
  return value.getFloat();
}

export function rangedRandomFloat(r: Rand, min: number, max: number) {
  let t = r.getFloat();
  t = min * t + (1.0 - t) * max;
  return t;
}

export function rangedRandomInt(r: Rand, min: number, max: number) {
  let dif;
  if (min < max) {
    dif = max - min;
    // let t = r.Get () % dif;
    let t = r.get() % dif;
    t += min;
    return t;
  } else if (min > max) {
    dif = min - max;
    // let t = r.Get () % dif;
    let t = r.get() % dif;
    t = min - t;
    return t;
  } else {
    return min;
  }
}

export function randomUnitVector(rand: Rand) {
  let z = rangedRandomFloat(rand, -1.0, 1.0);
  let a = rangedRandomFloat(rand, 0.0, 2.0 * Math.PI);

  let r = Math.sqrt(1.0 - z * z);

  let x = r * Math.cos(a);
  let y = r * Math.sin(a);

  return new Vector3(x, y, z);
}

export function randomUnitVector2(rand: Rand) {
  let a = rangedRandomFloat(rand, 0.0, 2.0 * Math.PI);

  let x = Math.cos(a);
  let y = Math.sin(a);

  return new Vector2(x, y);
}

export function randomQuaternion(rand: Rand) {
  let q: Quaternion = new Quaternion();
  q.x = rangedRandomFloat(rand, -1.0, 1.0);
  q.y = rangedRandomFloat(rand, -1.0, 1.0);
  q.z = rangedRandomFloat(rand, -1.0, 1.0);
  q.w = rangedRandomFloat(rand, -1.0, 1.0);
  q = normalizeSafe(q) as Quaternion;
  if (dot(q, Quaternion.identity()) < 0.0) {
    return -q;
  } else {
    return q;
  }
}

export function randomQuaternionUniformDistribution(rand: Rand) {
  const two_pi = 2.0 * Math.PI;

  // Employs Hopf fibration to uniformly distribute quaternions
  let u1 = rangedRandomFloat(rand, 0.0, 1.0);
  let theta = rangedRandomFloat(rand, 0.0, two_pi);
  let rho = rangedRandomFloat(rand, 0.0, two_pi);

  let i = Math.sqrt(1.0 - u1);
  let j = Math.sqrt(u1);

  // We do not need to normalize the generated quaternion, because the probability density corresponds to the Haar measure.
  // This means that a random rotation is obtained by picking a point at random on S^3, and forming the unit quaternion.
  let q = new Quaternion(
    i * Math.sin(theta),
    i * Math.cos(theta),
    j * Math.sin(rho),
    j * Math.cos(rho)
  );

  if (dot(q, Quaternion.identity()) < 0.0) {
    return -q;
  } else {
    return q;
  }
}

export function randomPointInsideCube(r: Rand, extents: Vector3) {
  return new Vector3(
    rangedRandomFloat(r, -extents.x, extents.x),
    rangedRandomFloat(r, -extents.y, extents.y),
    rangedRandomFloat(r, -extents.z, extents.z)
  );
}

export function randomPointInsideUnitSphere(r: Rand) {
  let v = randomUnitVector(r);
  v.scaleBy(Math.pow(random01(r), 1.0 / 3.0)); // *= Math.pow (Random01 (r), 1.0 / 3.0);
  return v;
}

export function randomPointInsideEllipsoid(r: Rand, extents: Vector3) {
  return scale(randomPointInsideUnitSphere(r), extents);
}

export function randomPointBetweenSphere(
  r: Rand,
  minRadius: number,
  maxRadius: number
) {
  let v = randomUnitVector(r);
  // As the volume of the sphere increases (x^3) over an interval we have to increase range as well with x^(1/3)
  let range = Math.pow(rangedRandomFloat(r, 0.0, 1.0), 1.0 / 3.0);
  v.scaleBy(minRadius + (maxRadius - minRadius) * range);
  return v;
}

export function randomPointInsideUnitCircle(r: Rand) {
  let v = randomUnitVector2(r);
  // As the volume of the sphere increases (x^3) over an interval we have to increase range as well with x^(1/3)
  v.multiply(Math.pow(rangedRandomFloat(r, 0.0, 1.0), 1.0 / 2.0), v);
  return v;
}

export function randomPointBetweenEllipsoid(
  r: Rand,
  maxExtents: Vector3,
  minRange: number
) {
  let v = scale(randomUnitVector(r), maxExtents);
  // As the volume of the sphere increases (x^3) over an interval we have to increase range as well with x^(1/3)
  let range = Math.pow(rangedRandomFloat(r, minRange, 1.0), 1.0 / 3.0);
  v.scaleBy(range);
  return v;
}

export function randomBarycentricCoord(rand: Rand) {
  let u = rand.getFloat();
  let v = rand.getFloat();
  if (u + v > 1.0) {
    u = 1.0 - u;
    v = 1.0 - v;
  }
  let w = 1.0 - u - v;
  return new Vector3(u, v, w);
}

export function deg2Rad(deg) {
  // TODO : should be deg * kDeg2Rad, but can't be changed,
  // because it changes the order of operations and that affects a replay in some RegressionTests
  return (deg / 360.0) * 2.0 * Math.PI;
}

export function rad2Deg(deg) {
  // TODO : should be deg * kDeg2Rad, but can't be changed,
  // because it changes the order of operations and that affects a replay in some RegressionTests
  return (180 * deg) / Math.PI;
}

export function sin(v: number) {
  return Math.sin(v);
}

export function cos(v: number) {
  return Math.cos(v);
}

export let randomSeed = 0x1337;

export function getGlobalRandomSeed() {
  return ++randomSeed;
}

export function swap(values: any[], i1: number, i2: number) {
  let v1 = values[i1];
  let v2 = values[i2];
  values[i1] = v2;
  values[i2] = v1;
}

export function floorfToIntPos(f) {
  return Math.floor(f);
}

export function roundfToIntPos(f) {
  return floorfToIntPos(f + 0.5);
}

export function normalizedToWord(f) {
  f = Math.max(f, 0.0);
  f = Math.min(f, 1.0);
  return roundfToIntPos(f * 65535.0);
}

export function normalizedToByte(f) {
  f = Math.max(f, 0.0);
  f = Math.min(f, 1.0);
  return roundfToIntPos(f * 255.0);
}

export function fastInvSqrt(f) {
  // The Newton iteration trick used in FastestInvSqrt is a bit faster on
  // Pentium4 / Windows, but lower precision. Doing two iterations is precise enough,
  // but actually a bit slower.
  if (Math.abs(f) == 0.0) {
    return f;
  }
  return 1.0 / Math.sqrt(f);
}

export function normalizeFast(inV: Vector3) {
  let m = sqrMagnitude(inV);
  return inV.scaleBy(fastInvSqrt(m));
}

export function crossProduct(lhs: Vector3, rhs: Vector3) {
  return lhs.crossProduct(rhs);
}

export function sqrMagnitude(inV: Vector3) {
  return dot(inV, inV);
}

export function generateRandom(randomIn) {
  let rand = new Rand(randomIn);
  return random01(rand);
}

export function generateRandom3(randomOut: Vector3, randomIn: number) {
  let rand = new Rand(randomIn);
  randomOut.x = random01(rand);
  randomOut.y = random01(rand);
  randomOut.z = random01(rand);
}

export function clampRepeat(t, t0, t1) {
  if (t < t0) {
    return t1;
  } else if (t > t1) {
    return t0;
  } else {
    return t;
  }
}

export function repeat(t, length) {
  return t - Math.floor(t / length) * length;
}
