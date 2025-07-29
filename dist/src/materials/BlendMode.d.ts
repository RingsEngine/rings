export declare enum BlendMode {
    /**
     * Working only in WebGPU may improve the performance of large background images without alpha.
     * The source pixel is not mixed with the target pixel, so the GPU will not read colors from the target pixel.
     */
    NONE = 0,
    /**
     * Display objects above the background. When the background is transparent,
     * the pixel values of the displayed object are not visible.
     */
    ABOVE = 1,
    /**
     * Transparent mode
     */
    ALPHA = 2,
    /**
     * Normal blend mode
     */
    NORMAL = 3,
    /**
     * Add the values of the component colors of the displayed object to its background color
     */
    ADD = 4,
    /**
     * Add the values of the component colors of the displayed object to its background color
     */
    BELOW = 5,
    /**
     * Erase the background based on the alpha value of the displayed object.
     */
    ERASE = 6,
    /**
     * Multiply the values of the displayed object's constituent colors by the background color,
     * and then divide by 0xFF for normalization to obtain a darker color.
     */
    MUL = 7,
    /**
     * Multiply the inverse of the components of the source and target images, and then calculate the inverse result.
     */
    SCREEN = 8,
    DIVD = 9,
    SOFT_ADD = 10
}
/**
 * @internal
 * @group Material
 */
export declare enum Blend {
    src_a = 0,
    dest_a = 1
}
/**
 * @internal
 * @group Material
 */
export declare class BlendFactor {
    static getBlend(blendMode: BlendMode): any;
}
