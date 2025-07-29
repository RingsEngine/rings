/**
 * @internal
 * 均匀实数分布函数
 * @param min 最小值
 * @param max 最大值
 * @returns 区间[min,max]内的随机数
 */
export function uniform_real_distribution(min, max) {
  return (
    Math.random() * max + Math.random() * min + (max - min) * Math.random()
  );
}

/**
 * @internal
 * 带随机数生成器的均匀实数分布
 * @param min 最小值
 * @param max 最大值
 * @param rng 随机数生成器
 * @returns 区间[min,max]内的随机数
 */
export function uniform_real_distribution2(min, max, rng) {
  let rd = rng * Math.random();
  return (
    Math.random() * max * rd +
    Math.random() * min * rd +
    (max - min) * Math.random() * rd
  );
}

/**
 * @internal
 * 正态(高斯)分布函数
 * @param min 最小值
 * @param max 最大值
 * @param skew 偏度系数
 * @returns 符合正态分布的随机数
 */
export function normal_distribution(min, max, skew) {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) num = normal_distribution(min, max, skew); // resample between 0 and 1 if out of range
  num = Math.pow(num, skew); // Skew
  num *= max - min; // Stretch to fill range
  num += min; // offset to min
  return num;
}

/*
 * 本实现是Ken Perlin在Siggraph 2001"实时着色"课程中提出的"Simplex噪声"算法，
 */
export function FASTFLOOR(x) {
  return x > 0 ? Math.floor(x) : Math.floor(x) - 1;
}

/*
 * 排列表：这是0-255所有数字的随机乱序排列，重复两次以避免每次查找时在255处回绕。
 * 该表在所有平台的所有实例中必须完全一致，因此最简单的做法是将其保留为静态显式数据。
 * 这也消除了对此类进行初始化的需要。
 *
 * 注意：在需要对非对齐单字节寻址惩罚较高的平台上，使用int[]而非char[]可能使代码运行更快。
 * Intel x86架构通常对单字节友好，但其他一些CPU使用4字节对齐读取更快。
 * 但char[]更小，可避免缓存抖动，这在大多数架构上可能是最重要的考量因素。
 * 噪声函数会频繁访问此数组——3D向量噪声访问96次，4D浮点噪声访问64次，
 * 因此我们希望它能够放入缓存！
 */
/**
 * @internal
 */
export let perm = [
  151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140,
  36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234,
  75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237,
  149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48,
  27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105,
  92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73,
  209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86,
  164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38,
  147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189,
  28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101,
  155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232,
  178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12,
  191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31,
  181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
  138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215,
  61, 156, 180, 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233,
  7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148,
  247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57,
  177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165,
  71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133,
  230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1,
  216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116,
  188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124,
  123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16,
  58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163,
  70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110,
  79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193,
  238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
  49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45,
  127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128,
  195, 78, 66, 215, 61, 156, 180,
];

/*
 * 辅助函数：计算梯度向量与残差向量的点积（1D到4D）
 * 注意：这些函数生成的梯度长度大于单位长度。为了与经典Perlin噪声的值域紧密匹配，
 * 最终噪声值需要重新缩放以适应[-1,1]范围。
 * （Simplex噪声函数本身也有不同的缩放比例。）
 * 还需注意：这些噪声函数是Perlin噪声最实用、最有用的有符号版本。
 * 若要按照RenderMan规范从SL noise()和pnoise()函数返回值，
 * 需要将噪声值缩放和偏移到[0,1]范围，例如：
 * float SLnoise = (noise(x,y,z) + 1.0) * 0.5;
 */
/**
 * @internal
 */
export function grad1(hash, x) {
  let h = hash & 15;
  let grad = 1.0 + (h & 7); // Gradient value 1.0, 2.0, ..., 8.0
  if (h & 8) grad = -grad; // Set a random sign for the gradient
  return grad * x; // Multiply the gradient with the distance
}

/**
 * @internal
 */
export function grad2(hash, x, y) {
  let h = hash & 7; // Convert low 3 bits of hash code
  let u = h < 4 ? x : y; // into 8 simple gradient directions,
  let v = h < 4 ? y : x; // and compute the dot product with (x,y).
  return (h & 1 ? -u : u) + (h & 2 ? -2.0 * v : 2.0 * v);
}

/**
 * @internal
 */
export function grad3(hash, x, y, z) {
  let h = hash & 15; // Convert low 4 bits of hash code into 12 simple
  let u = h < 8 ? x : y; // gradient directions, and compute dot product.
  let v = h < 4 ? y : h == 12 || h == 14 ? x : z; // Fix repeats at h = 12 to 15
  return (h & 1 ? -u : u) + (h & 2 ? -v : v);
}

/**
 * @internal
 */
export function grad4(hash, x, y, z, t) {
  let h = hash & 31; // Convert low 5 bits of hash code into 32 simple
  let u = h < 24 ? x : y; // gradient directions, and compute dot product.
  let v = h < 16 ? y : z;
  let w = h < 8 ? z : t;
  return (h & 1 ? -u : u) + (h & 2 ? -v : v) + (h & 4 ? -w : w);
}

/**
 * @internal
 */
export let simplex = [
  [0, 1, 2, 3],
  [0, 1, 3, 2],
  [0, 0, 0, 0],
  [0, 2, 3, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 2, 3, 0],
  [0, 2, 1, 3],
  [0, 0, 0, 0],
  [0, 3, 1, 2],
  [0, 3, 2, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 3, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 2, 0, 3],
  [0, 0, 0, 0],
  [1, 3, 0, 2],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 3, 0, 1],
  [2, 3, 1, 0],
  [1, 0, 2, 3],
  [1, 0, 3, 2],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 0, 3, 1],
  [0, 0, 0, 0],
  [2, 1, 3, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 0, 1, 3],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [3, 0, 1, 2],
  [3, 0, 2, 1],
  [0, 0, 0, 0],
  [3, 1, 2, 0],
  [2, 1, 0, 3],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [3, 1, 0, 2],
  [0, 0, 0, 0],
  [3, 2, 0, 1],
  [3, 2, 1, 0],
];

/**
 * @internal
 */
export function snoise1(x) {
  let i0 = FASTFLOOR(x);
  let i1 = i0 + 1;
  let x0 = x - i0;
  let x1 = x0 - 1.0;

  let n0, n1;

  let t0 = 1.0 - x0 * x0;
  t0 *= t0;
  n0 = t0 * t0 * grad1(perm[i0 & 0xff], x0);

  let t1 = 1.0 - x1 * x1;
  t1 *= t1;
  n1 = t1 * t1 * grad1(perm[i1 & 0xff], x1);
  return 0.25 * (n0 + n1);
}

/**
 * @internal
 */
export function snoise2(x, y) {
  const F2 = 0.366025403; // F2 = 0.5*(sqrt(3.0)-1.0)
  const G2 = 0.211324865; // G2 = (3.0-Math.sqrt(3.0))/6.0

  let n0, n1, n2; // Noise contributions from the three corners

  // Skew the input space to determine which simplex cell we're in
  let s = (x + y) * F2; // Hairy factor for 2D
  let xs = x + s;
  let ys = y + s;
  let i = FASTFLOOR(xs);
  let j = FASTFLOOR(ys);

  let t = (i + j) * G2;
  let X0 = i - t; // Unskew the cell origin back to (x,y) space
  let Y0 = j - t;
  let x0 = x - X0; // The x,y distances from the cell origin
  let y0 = y - Y0;

  let i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
  if (x0 > y0) {
    i1 = 1;
    j1 = 0;
  } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
  else {
    i1 = 0;
    j1 = 1;
  } // upper triangle, YX order: (0,0)->(0,1)->(1,1)

  let x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
  let y1 = y0 - j1 + G2;
  let x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
  let y2 = y0 - 1.0 + 2.0 * G2;

  // Wrap the integer indices at 256, to avoid indexing perm[] out of bounds
  let ii = i & 0xff;
  let jj = j & 0xff;

  // Calculate the contribution from the three corners
  let t0 = 0.5 - x0 * x0 - y0 * y0;
  if (t0 < 0.0) n0 = 0.0;
  else {
    t0 *= t0;
    n0 = t0 * t0 * grad2(perm[ii + perm[jj]], x0, y0);
  }

  let t1 = 0.5 - x1 * x1 - y1 * y1;
  if (t1 < 0.0) n1 = 0.0;
  else {
    t1 *= t1;
    n1 = t1 * t1 * grad2(perm[ii + i1 + perm[jj + j1]], x1, y1);
  }

  let t2 = 0.5 - x2 * x2 - y2 * y2;
  if (t2 < 0.0) n2 = 0.0;
  else {
    t2 *= t2;
    n2 = t2 * t2 * grad2(perm[ii + 1 + perm[jj + 1]], x2, y2);
  }

  return 40.0 * (n0 + n1 + n2);
}

// 3D simplex noise
/**
 * @internal
 */
export function snoise3(x, y, z) {
  const F3 = 0.333333333;
  const G3 = 0.166666667;

  let n0, n1, n2, n3;

  let s = (x + y + z) * F3;
  let xs = x + s;
  let ys = y + s;
  let zs = z + s;
  let i = FASTFLOOR(xs);
  let j = FASTFLOOR(ys);
  let k = FASTFLOOR(zs);

  let t = (i + j + k) * G3;
  let X0 = i - t; // Unskew the cell origin back to (x,y,z) space
  let Y0 = j - t;
  let Z0 = k - t;
  let x0 = x - X0; // The x,y,z distances from the cell origin
  let y0 = y - Y0;
  let z0 = z - Z0;

  let i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
  let i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords

  if (x0 >= y0) {
    if (y0 >= z0) {
      i1 = 1;
      j1 = 0;
      k1 = 0;
      i2 = 1;
      j2 = 1;
      k2 = 0;
    } // X Y Z order
    else if (x0 >= z0) {
      i1 = 1;
      j1 = 0;
      k1 = 0;
      i2 = 1;
      j2 = 0;
      k2 = 1;
    } // X Z Y order
    else {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 1;
      j2 = 0;
      k2 = 1;
    } // Z X Y order
  } else {
    // x0<y0
    if (y0 < z0) {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 0;
      j2 = 1;
      k2 = 1;
    } // Z Y X order
    else if (x0 < z0) {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 0;
      j2 = 1;
      k2 = 1;
    } // Y Z X order
    else {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 1;
      j2 = 1;
      k2 = 0;
    } // Y X Z order
  }

  let x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
  let y1 = y0 - j1 + G3;
  let z1 = z0 - k1 + G3;
  let x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
  let y2 = y0 - j2 + 2.0 * G3;
  let z2 = z0 - k2 + 2.0 * G3;
  let x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
  let y3 = y0 - 1.0 + 3.0 * G3;
  let z3 = z0 - 1.0 + 3.0 * G3;

  let ii = i & 0xff;
  let jj = j & 0xff;
  let kk = k & 0xff;

  let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
  if (t0 < 0.0) n0 = 0.0;
  else {
    t0 *= t0;
    n0 = t0 * t0 * grad3(perm[ii + perm[jj + perm[kk]]], x0, y0, z0);
  }

  let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
  if (t1 < 0.0) n1 = 0.0;
  else {
    t1 *= t1;
    n1 =
      t1 *
      t1 *
      grad3(perm[ii + i1 + perm[jj + j1 + perm[kk + k1]]], x1, y1, z1);
  }

  let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
  if (t2 < 0.0) n2 = 0.0;
  else {
    t2 *= t2;
    n2 =
      t2 *
      t2 *
      grad3(perm[ii + i2 + perm[jj + j2 + perm[kk + k2]]], x2, y2, z2);
  }

  let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
  if (t3 < 0.0) n3 = 0.0;
  else {
    t3 *= t3;
    n3 =
      t3 * t3 * grad3(perm[ii + 1 + perm[jj + 1 + perm[kk + 1]]], x3, y3, z3);
  }
  return 32.0 * (n0 + n1 + n2 + n3); // TODO: The scale factor is preliminary!
}

// 4D simplex noise
/**
 * @internal
 */
export function snoise4(x, y, z, w) {
  const F4 = 0.309016994; // F4 = (Math.sqrt(5.0)-1.0)/4.0
  const G4 = 0.138196601; // G4 = (5.0-Math.sqrt(5.0))/20.0

  let n0, n1, n2, n3, n4; // Noise contributions from the five corners

  let s = (x + y + z + w) * F4; // Factor for 4D skewing
  let xs = x + s;
  let ys = y + s;
  let zs = z + s;
  let ws = w + s;
  let i = FASTFLOOR(xs);
  let j = FASTFLOOR(ys);
  let k = FASTFLOOR(zs);
  let l = FASTFLOOR(ws);

  let t = (i + j + k + l) * G4; // Factor for 4D unskewing
  let X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
  let Y0 = j - t;
  let Z0 = k - t;
  let W0 = l - t;

  let x0 = x - X0; // The x,y,z,w distances from the cell origin
  let y0 = y - Y0;
  let z0 = z - Z0;
  let w0 = w - W0;

  let c1 = x0 > y0 ? 32 : 0;
  let c2 = x0 > z0 ? 16 : 0;
  let c3 = y0 > z0 ? 8 : 0;
  let c4 = x0 > w0 ? 4 : 0;
  let c5 = y0 > w0 ? 2 : 0;
  let c6 = z0 > w0 ? 1 : 0;
  let c = c1 + c2 + c3 + c4 + c5 + c6;

  let i1, j1, k1, l1; // The integer offsets for the second simplex corner
  let i2, j2, k2, l2; // The integer offsets for the third simplex corner
  let i3, j3, k3, l3; // The integer offsets for the fourth simplex corner

  i1 = simplex[c][0] >= 3 ? 1 : 0;
  j1 = simplex[c][1] >= 3 ? 1 : 0;
  k1 = simplex[c][2] >= 3 ? 1 : 0;
  l1 = simplex[c][3] >= 3 ? 1 : 0;
  // The number 2 in the "simplex" array is at the second largest coordinate.
  i2 = simplex[c][0] >= 2 ? 1 : 0;
  j2 = simplex[c][1] >= 2 ? 1 : 0;
  k2 = simplex[c][2] >= 2 ? 1 : 0;
  l2 = simplex[c][3] >= 2 ? 1 : 0;
  // The number 1 in the "simplex" array is at the second smallest coordinate.
  i3 = simplex[c][0] >= 1 ? 1 : 0;
  j3 = simplex[c][1] >= 1 ? 1 : 0;
  k3 = simplex[c][2] >= 1 ? 1 : 0;
  l3 = simplex[c][3] >= 1 ? 1 : 0;
  // The fifth corner has all coordinate offsets = 1, so no need to look that up.

  let x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
  let y1 = y0 - j1 + G4;
  let z1 = z0 - k1 + G4;
  let w1 = w0 - l1 + G4;
  let x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
  let y2 = y0 - j2 + 2.0 * G4;
  let z2 = z0 - k2 + 2.0 * G4;
  let w2 = w0 - l2 + 2.0 * G4;
  let x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
  let y3 = y0 - j3 + 3.0 * G4;
  let z3 = z0 - k3 + 3.0 * G4;
  let w3 = w0 - l3 + 3.0 * G4;
  let x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
  let y4 = y0 - 1.0 + 4.0 * G4;
  let z4 = z0 - 1.0 + 4.0 * G4;
  let w4 = w0 - 1.0 + 4.0 * G4;

  // Wrap the integer indices at 256, to avoid indexing perm[] out of bounds
  let ii = i & 0xff;
  let jj = j & 0xff;
  let kk = k & 0xff;
  let ll = l & 0xff;

  // Calculate the contribution from the five corners
  let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
  if (t0 < 0.0) n0 = 0.0;
  else {
    t0 *= t0;
    n0 =
      t0 *
      t0 *
      grad4(perm[ii + perm[jj + perm[kk + perm[ll]]]], x0, y0, z0, w0);
  }

  let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
  if (t1 < 0.0) n1 = 0.0;
  else {
    t1 *= t1;
    n1 =
      t1 *
      t1 *
      grad4(
        perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]],
        x1,
        y1,
        z1,
        w1
      );
  }

  let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
  if (t2 < 0.0) n2 = 0.0;
  else {
    t2 *= t2;
    n2 =
      t2 *
      t2 *
      grad4(
        perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]],
        x2,
        y2,
        z2,
        w2
      );
  }

  let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
  if (t3 < 0.0) n3 = 0.0;
  else {
    t3 *= t3;
    n3 =
      t3 *
      t3 *
      grad4(
        perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]],
        x3,
        y3,
        z3,
        w3
      );
  }

  let t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
  if (t4 < 0.0) n4 = 0.0;
  else {
    t4 *= t4;
    n4 =
      t4 *
      t4 *
      grad4(
        perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]],
        x4,
        y4,
        z4,
        w4
      );
  }

  return 27.0 * (n0 + n1 + n2 + n3 + n4);
}
