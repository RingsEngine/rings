/**
 * 屏幕空间全局光照
 *  GBuffer数据读取：从GBuffer中获取位置、法线和颜色信息
    屏幕空间光线追踪：在屏幕空间追踪光线来收集间接光照
    结果混合：将间接光照结果与直接光照结合
 */
export declare let SSGI2_cs: string;
