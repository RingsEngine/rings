export interface ITexture {
    /**
     * create binding layout description
     */
    internalCreateBindingLayoutDesc(): any;
    /**
     * create texture instance
     */
    internalCreateTexture(): any;
    /**
     * create GPU View
     */
    internalCreateView(): any;
    /**
     * create CPU Sample
     */
    internalCreateSampler(): any;
}
