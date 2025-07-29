import { UITransform } from "../uiComponents/UITransform";
import { UIPanel } from "../uiComponents/UIPanel";
/**
 * 检查和重建GUI网格(包括几何体和材质)，处理UI元素的批量渲染优化
 * @group GPU GUI
 */
export declare class GUIGeometryRebuild {
    private _textureMap;
    private _textureList;
    /**
     * 重建指定的GUI网格
     * 检查并重建GUI网格，包括几何体和材质
     * @param transforms 指定GUI Mesh的UITransform列表
     * @param panel 指定要重建几何体的GUI Mesh对象
     * @param forceUpdate 是否需要强制重构
     * @returns 返回构建结果(单个UIPanel的GUIMaterials支持的纹理数量有限制，不能超过限制)
     */
    build(transforms: UITransform[], panel: UIPanel, forceUpdate: boolean): boolean;
    private collectQuads;
    private push;
}
