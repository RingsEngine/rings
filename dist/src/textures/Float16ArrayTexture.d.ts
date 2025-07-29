import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
/**
 * @internal
 * Float16Array texture
 * @group Texture
 */
export declare class Float16ArrayTexture extends Texture {
    uint16Array: Uint16Array;
    floatArray: number[];
    private _dataBuffer;
    /**
     * 使用数字数组填充纹理，格式为[红0, 绿0, 蓝0, 透明度0, 红1, 绿1, 蓝1, 透明度1...]
     * @param width 纹理宽度
     * @param height 纹理高度
     * @param numbers 每个像素的颜色值数组
     * @param useMipmap 是否生成Mipmap
     * @returns 返回纹理实例
     */
    create(width: number, height: number, numbers?: number[], mipmap?: boolean): this;
    /**
     * 更新纹理内容
     * @param width 纹理宽度
     * @param height 纹理高度
     * @param numbers 像素数据数组
     * @param mipmap 是否生成Mipmap
     */
    updateTexture(width: number, height: number, numbers: number[], mipmap?: boolean): void;
}
