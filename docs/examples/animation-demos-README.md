# 动画组件系统 · 可运行示例

## 文档内嵌

**[动画组件系统 README](../动画组件系统/README.md)** 中 **「可运行示例」** 一节已内嵌各示例：顶栏 **示例** / **代码** 为 **Tab 切换**（与物理文档 `rings-quick-demo` 相同），分别显示 `iframe` 与转义后的完整 HTML。维护源码后请执行 `node scripts/build-anim-demos-fragment.cjs` 与 `node scripts/merge-anim-readme.cjs`。

## 运行条件

1. **脚本来源**：与 [physics-demos-README.md](./physics-demos-README.md) 相同，通过 **unpkg** 加载 **`@rings-webgpu/core@1.0.52`**（`dist/rings.es.js`）。
2. **HTTP 访问**：在仓库根目录执行 `npx serve .`（或等价静态服务），用浏览器打开 `http://localhost:端口/docs/examples/animation-xxx-demo.html`；**勿使用 `file://`**。
3. **WebGPU**：需 Chrome/Edge 等，并在 **localhost** 或 **HTTPS** 下打开。

## 示例列表

| 文件 | 对应能力 |
|------|----------|
| [animation-animator-demo.html](./animation-animator-demo.html) | **`AnimatorComponent`** + jsDelivr **`camcopter_s_100.glb`**（`playAnim` / `crossFade`） |
| [animation-property-demo.html](./animation-property-demo.html) | **`PropertyAnimation`** + **`PropertyAnimClip.parse`**（循环位移 + **`SEEK`** 关键帧） |
| [animation-property-event-demo.html](./animation-property-event-demo.html) | **`PropertyAnimationEvent.COMPLETE`**（Clamp 单段剪辑） |
| [animation-skeleton-demo.html](./animation-skeleton-demo.html) | **glTF 骨骼动画**：CDN `eva_unit_01_rigged.glb`（resources-0.0.2），`AnimatorComponent` + `SkinnedMeshRenderer2` |
| [animation-morph-target-blender-demo.html](./animation-morph-target-blender-demo.html) | **`MorphTargetBlender`** + CDN **MorphPrimitivesTest.glb**（`setMorphInfluence` 正弦权重） |

**剪辑类型说明**：`PropertyAnimationClip`（`AnimatorComponent` / glTF）与 `PropertyAnimClip`（`PropertyAnimation`）已分别体现在 **Animator** 与 **Property** 示例中；**`SkeletonAnimationClip`** 见 **Skeleton** 示例。

**合并脚本**：`scripts/build-anim-demos-fragment.cjs`（生成转义片段）、`scripts/merge-anim-readme.cjs`（写入 `docs/动画组件系统/README.md`）。
