# Shader 开发

## 概述

Rings引擎基于WebGPU构建了一套完整的着色器系统，支持**RenderShader**（渲染着色器）和**ComputeShader**（计算着色器）两种类型，提供灵活的着色器注册、创建、变体管理和Buffer操作机制。

## 1. RenderShader 渲染着色器

### 1.1 基础架构

RenderShader系统基于以下核心类构建：

- **Shader**: 着色器主类，管理多个渲染通道
- **RenderShaderPass**: 单个渲染通道实现
- **ShaderState**: 着色器状态控制（混合、深度测试等）

### 1.2 着色器注册机制

#### 1.2.1 使用装饰器注册（基于源码实际实现）
```typescript
import { RegisterShader } from "@rings/core";
import { Shader } from "@rings/core";

@RegisterShader("MyCustomShader") // 基于实际装饰器实现
export class MyCustomShader extends Shader {
    constructor() {
        super();
        // 实际源码中装饰器会自动注册到ShaderLib
    }
}
```

#### 1.2.2 手动注册着色器代码
```typescript
import { ShaderLib } from "@rings/core";

// 注册顶点着色器（基于源码实际实现）
ShaderLib.register("MyVertexShader", `
    @vertex
    fn VertMain(@location(0) position: vec3<f32>) -> @builtin(position) vec4<f32> {
        return vec4<f32>(position, 1.0);
    }
`);

// 注册片段着色器（基于源码实际实现）
ShaderLib.register("MyFragmentShader", `
    @fragment
    fn FragMain() -> @location(0) vec4<f32> {
        return vec4<f32>(1.0, 0.0, 0.0, 1.0);
    }
`);

// 实际源码中ShaderLib.register会将key转为小写
// 例如："MyVertexShader" -> "myvertexshader"
```

### 1.3 创建渲染着色器

#### 1.3.1 完整创建流程（基于源码实际API）
```typescript
import { Shader, RenderShaderPass } from "@rings/core";
import { PassType } from "@rings/core";
import { ShaderState } from "@rings/core";

class CustomLitShader extends Shader {
    constructor() {
        super();
        
        // 1. 创建渲染通道（基于源码实际构造函数）
        const colorPass = new RenderShaderPass("vertexShaderName", "fragmentShaderName");
        
        // 2. 设置着色器入口函数（源码中实际方法）
        colorPass.setShaderEntry("VertMain", "FragMain");
        
        // 3. 配置渲染状态（基于ShaderState实际属性）
        colorPass.shaderState.acceptShadow = true;
        colorPass.shaderState.castShadow = true;
        colorPass.shaderState.receiveEnv = true;
        colorPass.shaderState.useLight = true;
        
        // 4. 添加渲染通道到着色器（基于源码addRenderPass）
        this.addRenderPass(colorPass);
        
        // 5. 设置宏定义（基于源码setDefine实现）
        this.setDefine("USE_PBR", true);
        this.setDefine("USE_NORMAL_MAP", true);
        
        // 6. 设置默认uniform值（基于实际Material类实现）
        // 注意：实际设置uniform通过RenderShaderPass的setUniform方法
        colorPass.setUniform("baseColor", [1.0, 1.0, 1.0, 1.0]);
        colorPass.setUniform("metallic", 0.0);
        colorPass.setUniform("roughness", 1.0);
    }
}

// 基于源码的实际使用方式
const shader = new CustomLitShader();
```

#### 1.3.2 设置着色器主函数
```typescript
// 设置顶点着色器入口
renderPass.setShaderEntry("VertMain", "FragMain");

// WGSL代码示例
const vertexWGSL = `
    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) uv: vec2<f32>,
        @location(1) normal: vec3<f32>
    };

    @vertex
    fn VertMain(
        @location(0) position: vec3<f32>,
        @location(1) uv: vec2<f32>,
        @location(2) normal: vec3<f32>
    ) -> VertexOutput {
        var output: VertexOutput;
        output.position = uniforms.projectionMatrix * uniforms.viewMatrix * 
                         uniforms.modelMatrix * vec4<f32>(position, 1.0);
        output.uv = uv;
        output.normal = normalize((uniforms.normalMatrix * vec4<f32>(normal, 0.0)).xyz);
        return output;
    }
`;
```

### 1.4 着色器宏定义系统

#### 1.4.1 设置宏定义
```typescript
// 布尔宏定义
shader.setDefine("USE_NORMAL_MAP", true);
shader.setDefine("USE_PBR", true);

// 数值宏定义
shader.setDefine("MAX_LIGHTS", 4);

// 条件编译示例
const fragmentWGSL = `
    #ifdef USE_NORMAL_MAP
        var normal = textureSample(normalTexture, normalSampler, input.uv).xyz * 2.0 - 1.0;
    #else
        var normal = input.normal;
    #endif
`;
```

#### 1.4.2 动态宏控制
```typescript
// 运行时启用/禁用宏
if (useNormalMap) {
    shader.setDefine("USE_NORMAL_MAP", true);
} else {
    shader.deleteDefine("USE_NORMAL_MAP");
}

// 检查宏是否定义
const hasNormalMap = shader.hasDefine("USE_NORMAL_MAP");
```

### 1.5 代码引入和防止重复定义

#### 1.5.1 ShaderLib 代码管理（基于源码实际实现）
```typescript
// 引擎内置的ShaderLib系统防止重复定义
import { ShaderLib } from "@rings/core";

// 注册公共函数库（基于实际ShaderLib实现）
ShaderLib.register("CommonMath`, `
    fn saturate(x: f32) -> f32 {
        return clamp(x, 0.0, 1.0);
    }
    
    fn lerp(a: f32, b: f32, t: f32) -> f32 {
        return a + t * (b - a);
    }
`);

// 在着色器中使用（实际通过#include系统）
const shaderCode = `
    #include "CommonMath"
    
    @fragment
    fn FragMain() -> vec4<f32> {
        let value = saturate(1.5);
        return vec4<f32>(value);
    }
`;
```

#### 1.5.2 着色器变体系统
```typescript
// 基于宏的着色器变体
class PBRShader extends Shader {
    constructor() {
        super();
        
        // 基础变体
        this.setDefine("PBR_WORKFLOW", "METALLIC_ROUGHNESS");
        
        // 可选功能变体
        this.setDefine("USE_CLEARCOAT", false);
        this.setDefine("USE_SUBSURFACE", false);
        this.setDefine("USE_ANISOTROPY", false);
        
        // 质量变体
        this.setDefine("SHADOW_SAMPLES", 16);
        this.setDefine("ENV_LOD_LEVEL", 3);
    }
}
```

### 1.6 着色器内置变量（基于源码实际实现）

#### 1.6.1 全局内置变量（GlobalUniformGroup.ts）

基于`GlobalUniformGroup.ts`源码，系统提供以下全局内置变量：

```wgsl
// 全局uniform结构（实际源码定义）
struct GlobalUniform {
    // 相机矩阵
    projectionMatrix: mat4x4<f32>,      // 投影矩阵
    viewMatrix: mat4x4<f32>,          // 视图矩阵
    cameraWorldMatrix: mat4x4<f32>,   // 相机世界矩阵
    
    // 相机参数
    cameraPosition: vec3<f32>,        // 相机世界坐标位置
    cameraDirection: vec3<f32>,       // 相机朝向
    
    // 时间参数
    time: f32,                        // 总时间（秒）
    delta: f32,                       // 帧间隔时间（秒）
    frame: f32,                       // 当前帧数
    
    // 渲染设置
    skyExposure: f32,                 // 天空曝光强度
    hdrExposure: f32,                 // HDR曝光值
    shadowBias: f32,                 // 阴影偏移
    
    // 屏幕参数
    screenWidth: f32,                 // 屏幕宽度
    screenHeight: f32,                // 屏幕高度
    screenRatio: f32,                 // 屏幕宽高比
    
    // 阴影参数
    shadowMatrixRaw: mat4x4<f32>,     // 原始阴影矩阵
    csmMatrixRaw: array<mat4x4<f32>, 4>, // 级联阴影矩阵数组
    csmShadowBias: array<f32, 4>,    // 级联阴影偏移数组
    
    // 反射探针
    reflectionProbeSize: vec3<f32>,   // 反射探针尺寸
    reflectionCount: f32,             // 反射探针数量
    
    // 系统设置
    renderState: f32,                 // 渲染状态标志
    mouseX: f32,                      // 鼠标X坐标
    mouseY: f32,                      // 鼠标Y坐标
};

@group(0) @binding(0) var<uniform> globalUniform: GlobalUniform;
```

#### 1.6.2 材质内置变量（PhysicMaterialUniform_frag.ts）

基于`PhysicMaterialUniform_frag.ts`源码，PBR材质提供以下内置变量：

```wgsl
// 物理材质uniform结构（实际源码定义）
struct MaterialUniform {
    // 基础属性
    baseColor: vec4<f32>,             // 基础颜色 (RGBA)
    emissiveColor: vec4<f32>,         // 自发光颜色 (RGB) + 强度(A)
    
    // PBR属性
    materialF0: vec4<f32>,            // F0反射率 (RGB) + 金属度(A)
    specularColor: vec4<f32>,         // 高光颜色 (RGB) + 高光强度(A)
    
    // 材质参数
    envIntensity: f32,                // 环境光强度
    normalScale: f32,                 // 法线贴图强度
    roughness: f32,                   // 粗糙度
    metallic: f32,                    // 金属度
    ao: f32,                          // 环境光遮蔽
    
    // 粗糙度/金属度范围控制
    roughness_min: f32,               // 粗糙度最小值
    roughness_max: f32,               // 粗糙度最大值
    metallic_min: f32,                // 金属度最小值
    metallic_max: f32,                // 金属度最大值
    
    // 自发光参数
    emissiveIntensity: f32,           // 自发光强度
    
    // 透明度和折射
    alphaCutoff: f32,                 // Alpha测试阈值
    ior: f32,                         // 折射率 (Index of Refraction)
    
    // 清漆层参数
    clearcoatColor: vec4<f32>,        // 清漆颜色 (RGB) + 权重(A)
    clearcoatWeight: f32,             // 清漆权重
    clearcoatFactor: f32,             // 清漆因子
    clearcoatRoughnessFactor: f32,    // 清漆粗糙度
    clearcoatIor: f32,                // 清漆折射率
    
    // UV偏移和缩放
    baseMapOffsetSize: vec4<f32>,     // 基础贴图UV偏移(XY) + 缩放(ZW)
    normalMapOffsetSize: vec4<f32>,   // 法线贴图UV偏移(XY) + 缩放(ZW)
    emissiveMapOffsetSize: vec4<f32>, // 自发光贴图UV偏移(XY) + 缩放(ZW)
    roughnessMapOffsetSize: vec4<f32>, // 粗糙度贴图UV偏移(XY) + 缩放(ZW)
    metallicMapOffsetSize: vec4<f32>,  // 金属度贴图UV偏移(XY) + 缩放(ZW)
    aoMapOffsetSize: vec4<f32>,        // AO贴图UV偏移(XY) + 缩放(ZW)
};

@group(2) @binding(0) var<uniform> materialUniform: MaterialUniform;
```

#### 1.6.3 光源内置变量（GlobalFog_shader.ts）

基于`GlobalFog_shader.ts`源码，光照系统提供以下内置变量：

```wgsl
// 光源数据结构（实际源码定义）
struct LightData {
    index: f32,                      // 光源索引
    lightType: i32,                  // 光源类型 (0:平行光, 1:点光源, 2:聚光灯)
    radius: f32,                     // 光源半径
    linear: f32,                     // 线性衰减系数
    
    position: vec3<f32>,             // 光源世界坐标位置
    lightMatrixIndex: f32,           // 光源矩阵索引
    
    direction: vec3<f32>,            // 光源方向
    quadratic: f32,                  // 二次衰减系数
    
    lightColor: vec3<f32>,           // 光源颜色 (RGB)
    intensity: f32,                  // 光源强度
    
    innerCutOff: f32,                // 聚光灯内切角
    outerCutOff: f32,                // 聚光灯外切角
    range: f32,                      // 光源影响范围
    castShadow: i32,                 // 是否投射阴影
    
    lightTangent: vec3<f32>,         // 光源切线
    ies: f32,                        // IES光域网索引
};

// 光源缓冲区
@group(0) @binding(3) var<storage, read> lightBuffer: array<LightData>;

// 雾效uniform数据
struct FogUniformData {
    fogColor: vec4<f32>,             // 雾颜色 (RGBA)
    
    fogType: f32,                    // 雾类型
    fogHeightScale: f32,             // 雾高度缩放
    start: f32,                      // 雾起始距离
    end: f32,                        // 雾结束距离
    
    density: f32,                    // 雾密度
    ins: f32,                        // 雾插入值
    falloff: f32,                    // 雾衰减
    rayLength: f32,                  // 射线长度
    
    scatteringExponent: f32,         // 散射指数
    dirHeightLine: f32,              // 方向高度线
    skyFactor: f32,                  // 天空因子
    skyRoughness: f32,               // 天空粗糙度
    
    overrideSkyFactor: f32,          // 覆盖天空因子
    isSkyHDR: f32,                   // 是否HDR天空
    slot0: f32,                      // 保留槽位0
    slot1: f32,                      // 保留槽位1
};

@group(0) @binding(2) var<uniform> fogUniform: FogUniformData;
```

#### 1.6.4 变量使用说明

- **全局变量**：通过`globalUniform`访问，包含相机、时间、渲染设置等系统级参数
- **材质变量**：通过`materialUniform`访问，包含PBR材质的所有物理属性
- **光源变量**：通过`lightBuffer`数组访问，支持多光源并行处理
- **雾效变量**：通过`fogUniform`访问，控制雾效渲染参数
- **纹理采样**：使用对应的纹理和采样器绑定点进行采样

所有内置变量都已根据实际源码定义，确保与引擎内部实现完全一致。

### 1.7 着色器内置结构体（基于源码实际实现）

#### 1.7.1 ORI_VertexOut - 顶点输出结构体

**源码位置**：`src/assets/shader/core/struct/VertexAttributes.ts`

```wgsl
struct VertexOutput {
    @location(auto) index: f32,                    // 实例索引
    @location(auto) varying_UV0: vec2<f32>,       // 第一套UV坐标
    @location(auto) varying_UV1: vec2<f32>,       // 第二套UV坐标
    @location(auto) varying_ViewPos: vec4<f32>,   // 视图空间位置
    @location(auto) varying_Clip: vec4<f32>,       // 裁剪空间位置
    @location(auto) varying_WPos: vec4<f32>,      // 世界空间位置
    @location(auto) varying_WNormal: vec3<f32>,   // 世界空间法线
    @location(auto) varying_Color: vec4<f32>,      // 顶点颜色

    #if USE_SHADOWMAPING
        @location(auto) varying_ShadowPos: vec4<f32>,  // 阴影空间位置
    #endif

    #if USE_TANGENT
        @location(auto) varying_Tangent: vec4<f32>,     // 切线向量
    #endif

    @builtin(position) member: vec4<f32>  // 最终顶点位置
};

var<private> ORI_VertexOut: VertexOutput;
```

**使用示例**：
```wgsl
fn vert(inputData: VertexAttributes) -> VertexOutput {
    ORI_Vert(inputData);  // 调用内置顶点处理函数
    return ORI_VertexOut; // 返回处理后的顶点数据
}
```

#### 1.7.2 ORI_VertexVarying - 片元输入插值结构体

**源码位置**：`src/assets/shader/core/struct/FragmentVarying.ts`

```wgsl
struct FragmentVarying {
    @location(auto) index: f32,              // 实例索引
    @location(auto) fragUV0: vec2<f32>,      // 第一套UV坐标（插值后）
    @location(auto) fragUV1: vec2<f32>,      // 第二套UV坐标（插值后）
    @location(auto) viewPosition: vec4<f32>, // 视图空间位置（插值后）
    @location(auto) fragPosition: vec4<f32>, // 裁剪空间位置（插值后）
    @location(auto) vWorldPos: vec4<f32>,   // 世界空间位置（插值后）
    @location(auto) vWorldNormal: vec3<f32>, // 世界空间法线（插值后）
    @location(auto) vColor: vec4<f32>,        // 顶点颜色（插值后）

    #if USE_SHADOWMAPING
        @location(auto) vShadowPos: vec4<f32>,  // 阴影空间位置（插值后）
    #endif

    #if USE_TANGENT
        @location(auto) TANGENT: vec4<f32>,      // 切线向量（插值后）
    #endif

    @builtin(front_facing) face: bool,         // 是否正面
    @builtin(position) fragCoord: vec4<f32>   // 片元屏幕坐标
};

var<private> ORI_VertexVarying: FragmentVarying;
```

**使用示例**：
```wgsl
@fragment
fn FragMain(vertex_varying: FragmentVarying) -> FragmentOutput {
    ORI_VertexVarying = vertex_varying; // 接收插值后的顶点数据
    ORI_VertexVarying.vWorldNormal = normalize(vertex_varying.vWorldNormal);
    
    // 使用插值后的数据计算光照
    let worldPos = ORI_VertexVarying.vWorldPos.xyz;
    let normal = ORI_VertexVarying.vWorldNormal;
    let uv = ORI_VertexVarying.fragUV0;
}
```

#### 1.7.3 ORI_ShadingInput - 着色输入结构体

**源码位置**：`src/assets/shader/core/struct/ShadingInput.ts`

```wgsl
struct ShadingInput {
    BaseColor: vec4<f32>,           // 基础颜色（RGBA）
    Roughness: f32,                 // 粗糙度 [0,1]
    Metallic: f32,                  // 金属度 [0,1]
    Specular: f32,                  // 镜面反射强度 [0,1]
    EmissiveColor: vec4<f32>,       // 自发光颜色（RGB）和强度（A）
    SurfaceColor: vec4<f32>,        // 表面颜色（用于特殊效果）
    Normal: vec3<f32>,              // 法线向量（世界空间）
    HairNormal: vec3<f32>,          // 头发法线（用于头发渲染）
    Tangent: vec4<f32>,             // 切线向量（世界空间）
    WorldPositionOffset: vec3<f32>, // 世界空间位置偏移
    AmbientOcclusion: f32,          // 环境光遮蔽 [0,1]
    PixelDepthOffset: f32,          // 像素深度偏移
    Opacity: f32,                   // 透明度 [0,1]
    OpacityMask: f32,               // 透明度遮罩（用于硬边缘透明）
    Refraction: f32,                // 折射强度
    FragDepth: f32,                 // 自定义片元深度
    SSS: vec3f,                     // 次表面散射颜色
};

var<private> ORI_ShadingInput: ShadingInput;
```

**使用示例**：
```wgsl
fn frag() {
    // 设置基础颜色
    ORI_ShadingInput.BaseColor = materialUniform.baseColor;
    
    // 设置PBR材质参数
    ORI_ShadingInput.Roughness = materialUniform.roughness;
    ORI_ShadingInput.Metallic = materialUniform.metallic;
    ORI_ShadingInput.Specular = 0.5;
    
    // 设置法线和位置
    ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb;
    ORI_ShadingInput.AmbientOcclusion = 1.0;
    
    // 调用着色函数
    BxDFShading();
}
```

#### 1.7.4 ORI_FragmentOut - 片元输出结构体

**源码位置**：`src/assets/shader/core/struct/FragmentOutput.ts`

**基础版本**（USE_CASTREFLECTION = false）：
```wgsl
struct FragmentOutput {
    @location(auto) color: vec4<f32>,      // 最终颜色输出
    @location(auto) gBuffer: vec4<f32>,    // G-Buffer数据（延迟渲染）
    
    #if USE_OUTDEPTH
        @builtin(frag_depth) out_depth: f32  // 自定义深度
    #endif
};

var<private> ORI_FragmentOutput: FragmentOutput;
```

**反射版本**（USE_CASTREFLECTION = true）：
```wgsl
struct FragmentOutput {
    @location(auto) gBuffer: vec4<f32>,     // G-Buffer数据
    
    #if USE_OUTDEPTH
        @builtin(frag_depth) out_depth: f32  // 自定义深度
    #endif
};
```

**使用示例**：
```wgsl
@fragment
fn FragMain(vertex_varying: FragmentVarying) -> FragmentOutput {
    ORI_VertexVarying = vertex_varying;
    
    // 执行片元着色
    frag();
    
    // ORI_FragmentOutput已在frag()中填充
    return ORI_FragmentOutput;
}

fn frag() {
    // 计算最终颜色
    let finalColor = vec4<f32>(1.0, 0.0, 0.0, 1.0);
    
    // 设置输出
    ORI_FragmentOutput.color = finalColor;
    ORI_FragmentOutput.gBuffer = packGBufferData(...);
}
```

#### 1.7.5 结构体使用注意事项

1. **生命周期**：
   - ORI_VertexOut：顶点着色器阶段有效
   - ORI_VertexVarying：片元着色器阶段有效
   - ORI_ShadingInput：片元着色阶段有效
   - ORI_FragmentOut：片元输出阶段有效

2. **数据流**：
   ```
   顶点输入 → ORI_VertexOut → 光栅化插值 → ORI_VertexVarying → ORI_ShadingInput → ORI_FragmentOut
   ```

3. **初始化**：
   - 所有ORI结构体都由系统自动初始化
   - 不需要手动创建实例
   - 直接赋值即可使用

4. **命名规范**：
   - 所有内置变量都以大写字母开头
   - ORI_前缀表示引擎内置结构体
   - 避免与用户自定义变量冲突

5. **性能优化**：
   - 合理使用条件编译减少插值变量
   - 避免在顶点着色器中输出过多数据
   - 使用适当的数据精度（f32 vs f16）

### 1.8 自定义材质示例（基于源码实际实现）
  
  #### 1.8.1 完整自定义材质实现（基于实际Material类）
```typescript
import { Material } from "@rings/core";
import { Shader } from "@rings/core";
import { RenderShaderPass } from "@rings/core";
import { Color } from "@rings/core";
import { Texture } from "@rings/core";

class CustomPBRMaterial extends Material {
    private _baseColor: Color = new Color(1, 1, 1);
    private _metallic: number = 0.0;
    private _roughness: number = 1.0;
    private _baseTexture: Texture | null = null;
    
    constructor() {
        super();
        this.initShader();
    }
    
    private initShader() {
        // 创建PBR着色器（基于实际Shader类）
        const shader = new Shader();
        
        // 设置渲染通道（基于实际RenderShaderPass）
        const pass = new RenderShaderPass("pbr_vert", "pbr_frag");
        pass.setShaderEntry("VertMain", "FragMain");
        
        // 配置状态（基于实际ShaderState）
        pass.shaderState.acceptShadow = true;
        pass.shaderState.castShadow = true;
        pass.shaderState.receiveEnv = true;
        
        // 添加通道（基于实际addRenderPass）
        shader.addRenderPass(pass);
        
        // 设置默认uniform（基于实际setUniform方法）
        // 注意：实际通过RenderShaderPass设置
        pass.setUniform("baseColor", [this._baseColor.r, this._baseColor.g, this._baseColor.b, this._baseColor.a]);
        pass.setUniform("metallic", this._metallic);
        pass.setUniform("roughness", this._roughness);
        
        this.shader = shader;
    }
    
    // 材质属性访问器（基于实际Material.shader属性）
    get baseColor(): Color {
        return this._baseColor;
    }
    
    set baseColor(value: Color) {
        this._baseColor = value;
        // 基于实际渲染通道设置uniform
        const defaultShader = this.shader?.getDefaultColorShader();
        if (defaultShader) {
            defaultShader.setUniform("baseColor", [value.r, value.g, value.b, value.a]);
        }
    }
    
    get metallic(): number {
        return this._metallic;
    }
    
    set metallic(value: number) {
        this._metallic = value;
        const defaultShader = this.shader?.getDefaultColorShader();
        if (defaultShader) {
            defaultShader.setUniform("metallic", value);
        }
    }
    
    set baseTexture(texture: Texture | null) {
        this._baseTexture = texture;
        const defaultShader = this.shader?.getDefaultColorShader();
        if (defaultShader) {
            if (texture) {
                defaultShader.setTexture("baseTexture", texture);
                defaultShader.setDefine("USE_BASE_TEXTURE", true);
            } else {
                defaultShader.deleteDefine("USE_BASE_TEXTURE");
            }
        }
    }
}
```

## 2. ComputeShader 计算着色器

### 2.1 ComputeShader 基础（基于源码实际实现）

ComputeShader用于GPU通用计算，支持并行数据处理：

```typescript
import { ComputeShader } from "@rings/core";

// 创建计算着色器（基于源码实际构造函数）
const computeShader = new ComputeShader(`
    @group(0) @binding(0) var<storage, read_write> data: array<f32>;
    
    @compute @workgroup_size(64, 1, 1)
    fn CsMain(@builtin(global_invocation_id) id: vec3<u32>) {
        let index = id.x;
        if (index < arrayLength(&data)) {
            data[index] = data[index] * 2.0;
        }
    }
`);

// 设置工作组大小（基于源码实际属性）
computeShader.workerSizeX = 64;
computeShader.workerSizeY = 1;
computeShader.workerSizeZ = 1;

// 实际入口函数名默认为"CsMain"
computeShader.entryPoint = "CsMain";
```

### 2.2 RenderShaderCompute 集成

#### 2.2.1 创建计算任务（基于源码实际实现）
```typescript
import { RenderShaderCompute } from "@rings/core";

class MyComputeTask extends RenderShaderCompute {
    constructor(shader: Shader) {
        super(computeShaderCode, shader);
    }
    
    protected init() {
        // 初始化计算资源
        const texture = new VirtualTexture(512, 512, GPUTextureFormat.rgba8unorm);
        this.compute.setStorageTexture("outputTexture", texture);
        
        // 设置工作大小
        this.compute.workerSizeX = 512 / 8;
        this.compute.workerSizeY = 512 / 8;
    }
    
    public onFrame() {
        // 每帧执行计算
        const commandEncoder = GPUContext.beginCommandEncoder();
        GPUContext.computeCommand(commandEncoder, [this.compute]);
        GPUContext.endCommandEncoder(commandEncoder);
    }
}
```

#### 2.2.2 预集成计算示例
```typescript
// 预积分BRDF计算
class PreIntegratedLutCompute extends RenderShaderCompute {
    constructor(shader: Shader) {
        super(PreIntegratedLut, shader);
    }
    
    protected init() {
        const texture = new VirtualTexture(
            256, 256, 
            GPUTextureFormat.rgba8unorm,
            false,
            GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        );
        this.compute.setStorageTexture("sssMap", texture);
        this.sourceShader.setTexture("lutMap", texture);
        return texture;
    }
}
```

## 3. WebGPU Buffer 系统

### 3.1 Buffer 类型概览

| Buffer类型 | 用途 | 访问模式 | 示例用途 |
|-----------|------|----------|----------|
| **UniformGPUBuffer** | 常量uniform数据 | 只读 | 变换矩阵、材质参数 |
| **StorageGPUBuffer** | 通用存储 | 读写 | 粒子系统、计算数据 |
| **StructStorageGPUBuffer** | 结构化存储 | 读写 | 复杂数据结构 |
| **MaterialDataUniformGPUBuffer** | 材质uniform | 只读 | PBR材质参数 |

### 3.2 UniformGPUBuffer 用法

#### 3.2.1 创建Uniform Buffer（基于源码实际实现）
```typescript
import { UniformGPUBuffer } from "@rings/core";

// 创建uniform buffer（基于源码实际构造函数）
const uniformBuffer = new UniformGPUBuffer(256); // 256字节

// 设置uniform数据（基于GPUBufferBase的方法）
uniformBuffer.setVector3("cameraPosition", new Vector3(0, 10, 5));
uniformBuffer.setMatrix4("modelMatrix", Matrix4.identity());
uniformBuffer.setColor("baseColor", new Color(1, 0.5, 0.2));

// 绑定到着色器
shader.setUniformBuffer("globalUniform", uniformBuffer);
```

#### 3.2.2 WGSL中的Uniform定义
```wgsl
struct GlobalUniform {
    projectionMatrix: mat4x4<f32>,
    viewMatrix: mat4x4<f32>,
    modelMatrix: mat4x4<f32>,
    cameraPosition: vec3<f32>,
    time: f32
};

@group(0) @binding(0) var<uniform> global: GlobalUniform;
```

### 3.3 StorageGPUBuffer 用法

#### 3.3 StorageGPUBuffer（基于源码实际实现）
```typescript
import { StorageGPUBuffer } from "@rings/core";

// 创建存储缓冲区（基于源码实际构造函数）
const particleBuffer = new StorageGPUBuffer(
    1024 * 4 * 4, // 1000个粒子 * 4个float * 4字节
    GPUBufferUsage.COPY_DST, // 可选的额外usage
    new Float32Array(1000 * 4) // 初始化数据
);

// 初始化粒子数据
const particleData = new Float32Array(1000 * 4);
for (let i = 0; i < particleData.length; i += 4) {
    particleData[i] = Math.random() * 100 - 50;     // x
    particleData[i + 1] = Math.random() * 100;       // y
    particleData[i + 2] = Math.random() * 100 - 50;  // z
    particleData[i + 3] = 1.0;                        // life
}

// 通过父类GPUBufferBase设置数据
particleBuffer.setData(particleData);

// 绑定到计算着色器
computeShader.setStorageBuffer("particles", particleBuffer);
```

#### 3.3.2 WGSL中的Storage定义
```wgsl
struct Particle {
    position: vec3<f32>,
    life: f32,
    velocity: vec3<f32>,
    mass: f32
};

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;

@compute @workgroup_size(64)
fn updateParticles(@builtin(global_invocation_id) id: vec3<u32>) {
    let index = id.x;
    if (index < arrayLength(&particles)) {
        particles[index].life -= 0.01;
        particles[index].position += particles[index].velocity * 0.016;
    }
}
```

### 3.4 结构化存储缓冲区

#### 3.4.1 创建结构化Buffer（基于源码实际实现）
```typescript
import { StructStorageGPUBuffer } from "@rings/core";

interface LightData {
    position: Vector3;
    color: Color;
    intensity: number;
    range: number;
}

// 创建结构化buffer
const lightBuffer = new StructStorageGPUBuffer(100 * 48); // 100个光源 * 48字节

// 设置光源数据
const light: LightData = {
    position: new Vector3(10, 10, 10),
    color: new Color(1, 1, 1),
    intensity: 1000,
    range: 50
};

lightBuffer.setStruct("light0", light);
```

#### 3.4.2 WGSL结构体定义
```wgsl
struct Light {
    position: vec3<f32>,
    intensity: f32,
    color: vec3<f32>,
    range: f32
};

@group(0) @binding(1) var<storage> lights: array<Light>;
```

## 4. 高级特性

### 4.1 着色器调试
```typescript
// 调试uniform值
const value = shader.getUniformFloat("metallic");
console.log("Current metallic:", value);

// 调试纹理
const texture = shader.getTexture("baseMap");
console.log("Base texture:", texture);
```

### 4.2 性能优化建议

1. **Uniform Buffer优化**: 最小化uniform buffer大小，按16字节对齐
2. **Storage Buffer优化**: 使用合适的访问模式（read/read_write）
3. **纹理优化**: 合理使用纹理数组和纹理图集
4. **计算着色器优化**: 合理设置workgroup大小（通常为8、16、32的倍数）

### 4.3 最佳实践

```typescript
// 1. 预定义常用uniform结构
const DEFAULT_MATERIAL_UNIFORM = {
    baseColor: new Color(1, 1, 1),
    metallic: 0.0,
    roughness: 1.0,
    normalScale: 1.0
};

// 2. 使用宏控制功能开关
class OptimizedPBRShader extends Shader {
    constructor() {
        super();
        this.setDefine("USE_IBL", true);
        this.setDefine("USE_SHADOW", true);
        this.setDefine("MAX_LIGHTS", 4);
    }
}
```

## 5. 导入参考（基于源码实际路径）

### 5.1 核心类导入路径（统一使用@rings/core）
| 类名 | 导入路径 |
|------|----------|
| Shader | `@rings/core` |
| ComputeShader | `@rings/core` |
| RenderShaderPass | `@rings/core` |
| UniformGPUBuffer | `@rings/core` |
| StorageGPUBuffer | `@rings/core` |
| ShaderState | `@rings/core` |
| ShaderLib | `@rings/core` |
| RegisterShader | `@rings/core` |
| Material | `@rings/core` |
| Texture | `@rings/core` |
| Color | `@rings/core` |
| PassType | `@rings/core` |

### 5.2 实际源码路径参考（仅供调试查看）
| 类名 | 源码文件路径 |
|------|--------------|
| Shader | `src/gfx/graphics/webGpu/shader/Shader.ts` |
| ComputeShader | `src/gfx/graphics/webGpu/shader/ComputeShader.ts` |
| RenderShaderPass | `src/gfx/graphics/webGpu/shader/RenderShaderPass.ts` |
| UniformGPUBuffer | `src/gfx/graphics/webGpu/core/buffer/UniformGPUBuffer.ts` |
| StorageGPUBuffer | `src/gfx/graphics/webGpu/core/buffer/StorageGPUBuffer.ts` |
| ShaderState | `src/gfx/graphics/webGpu/shader/ShaderState.ts` |
| ShaderLib | `src/assets/shader/ShaderLib.ts` |
| RegisterShader | `src/util/SerializeDecoration.ts` |
| Material | `src/materials/Material.ts` |

```typescript
// 统一导入方式（推荐）
import { 
    Shader, 
    RenderShaderPass, 
    ComputeShader, 
    UniformGPUBuffer, 
    StorageGPUBuffer,
    ShaderLib,
    Material,
    Texture,
    Color
} from "@rings/core";
```}]}
