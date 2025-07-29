# Shader 开发

## Shader 基础

Rings 使用 WebGPU 的 WGSL 语言编写 Shader。一个基本的 Shader 包含：

```wgsl
// 顶点Shader
struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv: vec2<f32>
};

@vertex
fn vs_main(@location(0) position: vec3<f32>) -> VertexOutput {
    var output: VertexOutput;
    output.position = vec4<f32>(position, 1.0);
    return output;
}

// 片段Shader
@fragment
fn fs_main() -> @location(0) vec4<f32> {
    return vec4<f32>(1.0, 0.0, 0.0, 1.0); // 红色
}
```

## 内置 Shader

Rings 提供多种内置 Shader：

1. **标准 PBR Shader**：基于物理的渲染
2. **Unlit Shader**：无光照渲染
3. **Skybox Shader**：天空盒渲染
4. **UI Shader**：UI 元素渲染

## 自定义 Shader 开发

### 1. 创建自定义 Shader

```javascript
import { Shader } from "@rings/webgpu";

const myShader = new Shader({
  vertex: vertexWGSL,
  fragment: fragmentWGSL,
  defines: {
    USE_NORMAL: true,
  },
});
```

### 2. 材质与 Shader 配合

```javascript
class MyMaterial extends Material {
  constructor() {
    super();
    this.shader = myShader;
  }
}
```

[了解后处理效果 →](/post-processing)
