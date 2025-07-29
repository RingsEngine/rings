/**
 * @internal
 * 均匀实数分布函数
 * @param min 最小值
 * @param max 最大值
 * @returns 区间[min,max]内的随机数
 */
export declare function uniform_real_distribution(min: any, max: any): number;
/**
 * @internal
 * 带随机数生成器的均匀实数分布
 * @param min 最小值
 * @param max 最大值
 * @param rng 随机数生成器
 * @returns 区间[min,max]内的随机数
 */
export declare function uniform_real_distribution2(min: any, max: any, rng: any): number;
/**
 * @internal
 * 正态(高斯)分布函数
 * @param min 最小值
 * @param max 最大值
 * @param skew 偏度系数
 * @returns 符合正态分布的随机数
 */
export declare function normal_distribution(min: any, max: any, skew: any): number;
export declare function FASTFLOOR(x: any): number;
/**
 * @internal
 */
export declare let perm: number[];
/**
 * @internal
 */
export declare function grad1(hash: any, x: any): number;
/**
 * @internal
 */
export declare function grad2(hash: any, x: any, y: any): any;
/**
 * @internal
 */
export declare function grad3(hash: any, x: any, y: any, z: any): any;
/**
 * @internal
 */
export declare function grad4(hash: any, x: any, y: any, z: any, t: any): any;
/**
 * @internal
 */
export declare let simplex: number[][];
/**
 * @internal
 */
export declare function snoise1(x: any): number;
/**
 * @internal
 */
export declare function snoise2(x: any, y: any): number;
/**
 * @internal
 */
export declare function snoise3(x: any, y: any, z: any): number;
/**
 * @internal
 */
export declare function snoise4(x: any, y: any, z: any, w: any): number;
