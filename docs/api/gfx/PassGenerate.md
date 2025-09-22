# PassGenerate

## Overview
- 渲染通道生成器，负责为渲染节点自动生成各种渲染通道，包括GI、阴影、深度和反射通道。

## Hierarchy
- `Object` → `PassGenerate`

## Constructor
- 静态类，无需实例化

## Methods (static)
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| createGIPass | 创建全局光照通道 | `renderNode: RenderNode, shader: Shader` | `void` |
| castGBufferPass | 创建GBuffer通道 | `renderNode: RenderNode, shader: Shader` | `void` |
| createShadowPass | 创建阴影通道 | `renderNode: RenderNode, shader: Shader` | `void` |
| createDepthPass | 创建深度通道 | `renderNode: RenderNode, shader: Shader` | `void` |
| createReflectionPass | 创建反射通道 | `renderNode: RenderNode, shader: Shader` | `void` |

## Examples
```ts
const shader = new Shader();
PassGenerate.createGIPass(renderNode, shader);
PassGenerate.createShadowPass(renderNode, shader);
```