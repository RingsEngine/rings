# 基础组件

## 相机系统

### Camera3D 相机组件

`Camera3D` 类表示 3D 场景中的相机组件，支持透视投影和正交投影，并提供视锥体裁剪、阴影计算、坐标转换等功能。

#### 属性说明

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| **基础投影参数** |
| `fov` | number | 60 | 视野角度（度），仅用于透视投影 |
| `aspect` | number | 1 | 视口宽高比（宽度/高度） |
| `near` | number | 1 | 近裁剪面距离 |
| `far` | number | 5000 | 远裁剪面距离 |
| **正交投影参数** |
| `left` | number | -100 | 正交投影左边界 |
| `right` | number | 100 | 正交投影右边界 |
| `top` | number | 100 | 正交投影上边界 |
| `bottom` | number | -100 | 正交投影下边界 |
| `frustumSize` | number | 100 | 正交投影视锥体大小 |
| **相机设置** |
| `type` | CameraType | CameraType.perspective | 投影类型（perspective或ortho） |
| `viewPort` | Rect | new Rect() | 相机视口矩形 |
| `isShadowCamera` | boolean | false | 是否为阴影相机 |
| **级联阴影** |
| `enableCSM` | boolean | false | 是否启用级联阴影映射 |
| `csm` | FrustumCSM | null | 级联阴影映射实例 |

#### 方法说明

| 方法名 | 描述 |
|--------|------|
| `perspective(fov, aspect, near, far)` | 设置透视投影参数 |
| `ortho(frustumSize, near, far)` | 设置正交投影参数 |
| `orthoOffCenter(left, right, bottom, top, near, far)` | 设置正交投影边界 |
| `lookAt(pos, target, up)` | 使相机朝向指定目标点 |
| `worldToScreenPoint(point)` | 将世界坐标转换为屏幕坐标 |
| `screenPointToRay(x, y)` | 从屏幕坐标创建射线 |
| `screenPointToWorld(x, y, z)` | 将屏幕坐标转换为世界坐标 |

#### 使用示例

```typescript
import { Object3D, Scene3D, Camera3D, Vector3 } from '@rings/core';

// 创建场景
const scene = new Scene3D();

// 创建相机对象
const cameraObj = new Object3D();
const camera = cameraObj.addComponent(Camera3D);

// 设置透视投影
camera.perspective(60, window.innerWidth / window.innerHeight, 0.1, 1000);

// 设置相机位置
cameraObj.transform.position = new Vector3(0, 5, 10);
cameraObj.transform.lookAt(new Vector3(0, 0, 0));

// 添加到场景
scene.addChild(cameraObj);
```

### 相机控制器

#### 自由相机控制器 (FlyCameraController)

用于实现第一人称自由飞行相机，支持WASD键移动和鼠标控制视角。

**属性说明**

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `moveSpeed` | number | 2.0 | 移动速度 |
| `lookSpeed` | number | 0.1 | 视角转动速度 |

**使用示例**

```typescript
import { Object3D, Scene3D, Camera3D, FlyCameraController, Vector3 } from '@rings/core';

// 创建场景
const scene = new Scene3D();

// 创建相机对象
const cameraObj = new Object3D();
const camera = cameraObj.addComponent(Camera3D);
const controller = cameraObj.addComponent(FlyCameraController);

// 设置相机参数
camera.perspective(60, window.innerWidth / window.innerHeight, 0.1, 1000);
controller.moveSpeed = 5.0;

// 设置初始位置
cameraObj.transform.position = new Vector3(0, 5, 10);
scene.addChild(cameraObj);
```

#### 悬浮相机控制器 (HoverCameraController)

实现围绕目标点的轨道控制，支持鼠标拖拽旋转和滚轮缩放。

**属性说明**

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `distance` | number | 10 | 与目标的距离 |
| `minDistance` | number | 1 | 最小距离限制 |
| `maxDistance` | number | 100 | 最大距离限制 |

**使用示例**

```typescript
import { Object3D, Scene3D, Camera3D, HoverCameraController, Vector3 } from '@rings/core';

// 创建场景
const scene = new Scene3D();

// 创建相机对象
const cameraObj = new Object3D();
const camera = cameraObj.addComponent(Camera3D);
const controller = cameraObj.addComponent(HoverCameraController);

// 设置相机参数
camera.perspective(60, window.innerWidth / window.innerHeight, 0.1, 1000);
controller.distance = 15;
controller.minDistance = 2;
controller.maxDistance = 50;

// 设置初始位置
cameraObj.transform.position = new Vector3(0, 10, 15);
scene.addChild(cameraObj);
```

#### 轨道相机控制器 (OrbitController)

实现围绕目标点的轨道控制，支持鼠标拖拽旋转、缩放和平移。

**属性说明**

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `target` | Vector3 | (0,0,0) | 轨道中心点 |
| `distance` | number | 10 | 与目标的距离 |
| `autoRotate` | boolean | false | 是否自动旋转 |

**使用示例**

```typescript
import { Object3D, Scene3D, Camera3D, OrbitController, Vector3 } from '@rings/core';

// 创建场景
const scene = new Scene3D();

// 创建相机对象
const cameraObj = new Object3D();
const camera = cameraObj.addComponent(Camera3D);
const controller = cameraObj.addComponent(OrbitController);

// 设置相机参数
camera.perspective(60, window.innerWidth / window.innerHeight, 0.1, 1000);
controller.target = new Vector3(0, 0, 0);
controller.distance = 20;
controller.autoRotate = true;

// 设置初始位置
cameraObj.transform.position = new Vector3(0, 10, 20);
scene.addChild(cameraObj);
```

---

## 光照系统

### 光源类型

#### 平行光 (DirectLight)

模拟太阳光等平行光源，光线方向一致，无限范围。

**属性说明**

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `color` | Color | 0xffffff | 光源颜色 |
| `intensity` | number | 1.0 | 光照强度 |
| `castShadow` | boolean | false | 是否投射阴影 |
| `castGI` | boolean | false | 是否参与全局光照 |
| `indirect` | number | 0.3 | 间接光强度 |
| `radius` | number | Number.MAX_SAFE_INTEGER | 光照范围（无限远） |
| `size` | number | 1 | 光源大小 |
| `realTimeShadow` | boolean | true | 是否实时更新阴影 |
| `needUpdateShadow` | boolean | true | 是否需要更新阴影 |
| `iesProfile` | IESProfiles | null | IES光度学文件 |
| `shadowCamera` | Camera3D | null | 阴影相机实例 |

**使用示例**

```typescript
import { Object3D, Scene3D, DirectLight, Color, Vector3 } from '@rings/core';

// 创建场景
const scene = new Scene3D();

// 创建平行光源
const lightObj = new Object3D();
const light = lightObj.addComponent(DirectLight);

// 配置光源属性
light.color = new Color(1, 1, 1);
light.intensity = 1.0;
light.castShadow = true;
light.castGI = true;
light.indirect = 0.5;

// 设置光照方向
lightObj.transform.rotation = new Vector3(-45, 45, 0);

// 添加到场景
scene.addChild(lightObj);
```

#### 点光源 (PointLight)

模拟灯泡等点状光源，光线向四周发散。

**属性说明**

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `color` | Color | 0xffffff | 光源颜色 |
| `intensity` | number | 1.0 | 光照强度 |
| `range` | number | 10 | 光照范围 |
| `castShadow` | boolean | false | 是否投射阴影 |
| `castGI` | boolean | false | 是否参与全局光照 |
| `radius` | number | 0 | 光源半径 |
| `size` | number | 1 | 光源大小 |
| `at` | number | 0 | 线性衰减系数 |
| `quadratic` | number | 1 | 二次衰减系数 |
| `realTimeShadow` | boolean | true | 是否实时更新阴影 |
| `needUpdateShadow` | boolean | true | 是否需要更新阴影 |
| `iesProfile` | IESProfiles | null | IES光度学文件 |

**使用示例**

```typescript
import { Object3D, Scene3D, PointLight, Color, Vector3 } from '@rings/core';

// 创建场景
const scene = new Scene3D();

// 创建点光源
const lightObj = new Object3D();
const light = lightObj.addComponent(PointLight);

// 配置光源属性
light.color = new Color(1, 0.5, 0);
light.intensity = 2.0;
light.range = 15;
light.radius = 1;
light.at = 0.1;
light.quadratic = 0.5;
light.castShadow = true;

// 设置光源位置
lightObj.transform.position = new Vector3(5, 5, 0);

// 添加到场景
scene.addChild(lightObj);
```

#### 聚光灯 (SpotLight)

模拟手电筒等聚光效果，具有方向性和锥形范围。

**属性说明**

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `color` | Color | 0xffffff | 光源颜色 |
| `intensity` | number | 1.0 | 光照强度 |
| `range` | number | 10 | 光照范围 |
| `angle` | number | 30 | 外锥角（度） |
| `penumbra` | number | 0.2 | 边缘衰减 |
| `castShadow` | boolean | false | 是否投射阴影 |
| `castGI` | boolean | false | 是否参与全局光照 |
| `innerAngle` | number | 100 | 内锥角百分比（0-100） |
| `outerAngle` | number | 60 | 外锥角（度，1-179） |
| `radius` | number | 0 | 光源半径 |
| `size` | number | 1 | 光源大小 |
| `at` | number | 0 | 线性衰减系数 |
| `quadratic` | number | 1 | 二次衰减系数 |
| `realTimeShadow` | boolean | true | 是否实时更新阴影 |
| `needUpdateShadow` | boolean | true | 是否需要更新阴影 |
| `iesProfile` | IESProfiles | null | IES光度学文件 |

**使用示例**

```typescript
import { Object3D, Scene3D, SpotLight, Color, Vector3 } from '@rings/core';

// 创建场景
const scene = new Scene3D();

// 创建聚光灯
const lightObj = new Object3D();
const light = lightObj.addComponent(SpotLight);

// 配置光源属性
light.color = new Color(0.8, 0.8, 1);
light.intensity = 3.0;
light.range = 20;
light.outerAngle = 45;
light.innerAngle = 80; // 80%的内锥角
light.at = 0.1;
light.quadratic = 0.5;
light.castShadow = true;

// 设置光源位置和方向
lightObj.transform.position = new Vector3(0, 10, 0);
lightObj.transform.lookAt(new Vector3(0, 0, 0));

// 添加到场景
scene.addChild(lightObj);
```

### 环境光照

#### 环境光 (AmbientLight)

提供场景基础环境照明，无方向性。

**属性说明**

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `color` | Color | 0x404040 | 环境光颜色 |
| `intensity` | number | 0.2 | 光照强度 |

**使用示例**

```typescript
import { Object3D, Scene3D, AmbientLight, Color } from '@rings/core';

// 创建场景
const scene = new Scene3D();

// 创建环境光
const ambientObj = new Object3D();
const ambient = ambientObj.addComponent(AmbientLight);

// 配置环境光属性
ambient.color = new Color(0.2, 0.2, 0.3);
ambient.intensity = 0.3;

// 添加到场景
scene.addChild(ambientObj);
```

---

## 纹理 (Texture)

纹理用于为材质提供表面细节，支持2D纹理、立方体贴图等多种类型。

### 完整属性列表

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| **基础属性** |
| name | string | "" | 纹理名称 |
| url | string | "" | 纹理文件路径 |
| width | number | 32 | 纹理宽度 |
| height | number | 32 | 纹理高度 |
| format | GPUTextureFormat | "rgba8unorm" | 纹理格式 |
| usage | GPUFlagsConstant | GPUTextureUsage.TEXTURE_BINDING | 纹理用途标志 |
| **采样参数** |
| addressModeU | GPUAddressMode | "repeat" | U方向寻址模式 |
| addressModeV | GPUAddressMode | "repeat" | V方向寻址模式 |
| addressModeW | GPUAddressMode | "repeat" | W方向寻址模式 |
| magFilter | GPUFilterMode | "linear" | 放大过滤模式 |
| minFilter | GPUFilterMode | "linear" | 缩小过滤模式 |
| mipmapFilter | GPUMipmapFilterMode | "linear" | Mipmap过滤模式 |
| maxAnisotropy | number | 1 | 最大各向异性过滤 |
| lodMinClamp | number | 0 | LOD最小值 |
| lodMaxClamp | number | 32 | LOD最大值 |
| compare | GPUCompareFunction | "never" | 深度比较函数 |
| **Mipmap相关** |
| useMipmap | boolean | false | 是否使用mipmap |
| mipmapCount | number | 1 | mipmap层级数量(自动计算) |
| flipY | boolean | false | 是否翻转Y轴 |
| **状态管理** |
| isVideoTexture | boolean | false | 是否为视频纹理 |
| isHDRTexture | boolean | false | 是否为HDR纹理 |
| visibility | number | 0 | 着色器可见性标志 |

### 纹理类型系统

#### 支持的纹理类型
| 纹理类型 | 类名 | 描述 | 适用场景 |
|----------|------|------|----------|
| **2D纹理** | `BitmapTexture2D` | 标准2D纹理贴图 | 漫反射、法线、遮罩贴图 |
| **立方体纹理** | `BitmapTextureCube` | 6面立方体纹理 | 天空盒、环境反射 |
| **HDR立方体** | `HDRTextureCube` | HDR格式立方体纹理 | 基于图像的照明(IBL) |
| **HDR纹理** | `HDRTexture` | HDR格式2D纹理 | 高动态范围贴图 |
| **渲染纹理** | `RenderTexture` | 离屏渲染目标 | 后处理、反射探针 |

### 采样设置详解

##### 寻址模式
| 模式 | 值 | 描述 |
|------|----|------|
| `repeat` | "repeat" | 重复平铺(默认) |
| `clamp-to-edge` | "clamp-to-edge" | 边缘拉伸 |
| `mirror-repeat` | "mirror-repeat" | 镜像重复 |

##### 过滤模式
| 模式 | 值 | 描述 |
|------|----|------|
| `nearest` | "nearest" | 最近邻采样(像素化) |
| `linear` | "linear" | 线性插值采样(平滑) |

##### 各向异性过滤
| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `maxAnisotropy` | number | 1 | 各向异性过滤级别(1-16) |

### 主要方法

##### 基础方法
| 方法 | 参数 | 返回值 | 描述 |
|------|------|--------|------|
| `load` | url: string\|string[] | Promise<boolean> | 异步加载纹理 |
| `generate` | image: HTMLImageElement\|ImageBitmap | void | 从图像生成纹理 |
| `init` | - | Texture | 初始化GPU资源 |
| `destroy` | force?: boolean | void | 销毁纹理资源 |

### 2D纹理使用示例

#### 基础2D纹理加载
```typescript
import { BitmapTexture2D, Engine3D } from '@rings/core';

// 创建2D纹理实例
const texture2D = new BitmapTexture2D(true); // 启用Mipmap

// 设置采样参数
texture2D.addressModeU = "repeat";
texture2D.addressModeV = "repeat";
texture2D.magFilter = "linear";
texture2D.minFilter = "linear";
texture2D.mipmapFilter = "linear";
texture2D.maxAnisotropy = 16;

// 异步加载纹理
await texture2D.load("textures/diffuse/brick_wall.jpg");

// 应用到材质
material.setTexture("baseMap", texture2D);
```

#### 程序化创建纹理
```typescript
import { BitmapTexture2D } from '@rings/core';

// 从Canvas创建纹理
const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 512;
const ctx = canvas.getContext('2d');

// 绘制程序化图案
const gradient = ctx.createLinearGradient(0, 0, 512, 512);
gradient.addColorStop(0, '#ff0000');
gradient.addColorStop(1, '#0000ff');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 512, 512);

// 创建纹理
const texture = new BitmapTexture2D();
texture.source = canvas;
```

### 立方体纹理使用示例

#### 标准立方体纹理
```typescript
import { BitmapTextureCube } from '@rings/core';

// 创建立方体纹理
const cubeTexture = new BitmapTextureCube();

// 定义6个面的纹理路径
const faceUrls = [
  "textures/skybox/right.jpg",   // +X
  "textures/skybox/left.jpg",    // -X
  "textures/skybox/top.jpg",     // +Y
  "textures/skybox/bottom.jpg",  // -Y
  "textures/skybox/front.jpg",   // +Z
  "textures/skybox/back.jpg"     // -Z
];

// 加载所有面
await cubeTexture.load(faceUrls);

// 应用到天空盒
skybox.material.setTexture("envMap", cubeTexture);
```

### HDR环境贴图示例

#### HDR立方体纹理
```typescript
import { HDRTextureCube } from '@rings/core';

// 创建HDR立方体纹理
const hdrTexture = new HDRTextureCube();

// 加载HDR全景图并转换为立方体
await hdrTexture.load("environments/studio.hdr");

// 用于IBL照明
scene.envMap = hdrTexture;
```

### 采样过滤设置详解

#### 三线性过滤(高质量)
```typescript
// 三线性过滤(高质量Mipmap)
texture.minFilter = "linear";
texture.magFilter = "linear";
texture.mipmapFilter = "linear";
texture.useMipmap = true;
texture.maxAnisotropy = 16; // 启用各向异性过滤
```

#### 双线性过滤(标准)
```typescript
// 双线性过滤(无Mipmap)
texture.minFilter = "linear";
texture.magFilter = "linear";
texture.useMipmap = false;
```

#### 最近邻过滤(像素化)
```typescript
// 像素化效果
texture.minFilter = "nearest";
texture.magFilter = "nearest";
texture.useMipmap = false;
```

### Mipmap设置详解

#### 自动生成Mipmap
```typescript
import { BitmapTexture2D } from '@rings/core';

const texture = new BitmapTexture2D(true); // 启用Mipmap
await texture.load("textures/terrain/diffuse.png");
// Mipmap自动生成，层级根据纹理大小计算
```

#### 手动控制Mipmap范围
```typescript
// 限制Mipmap使用范围
texture.lodMinClamp = 0;   // 从最高级别开始
texture.lodMaxClamp = 4;   // 最多使用4级Mipmap
```

### 纹理资源管理

#### 预加载纹理
```typescript
import { Engine3D } from '@rings/core';

// 预加载多个纹理
const textures = await Promise.all([
  Engine3D.res.loadTexture("textures/wood_diffuse.jpg"),
  Engine3D.res.loadTexture("textures/wood_normal.jpg"),
  Engine3D.res.loadTexture("textures/wood_roughness.jpg")
]);
```

#### 纹理缓存检查
```typescript
// 检查纹理是否已缓存
const cachedTexture = Engine3D.res.getTexture("textures/brick.jpg");
if (!cachedTexture) {
  await Engine3D.res.loadTexture("textures/brick.jpg");
}
```

### 纹理导入参考表

| 纹理类型 | 导入路径 | 使用场景 |
|----------|----------|----------|
| `BitmapTexture2D` | `@rings/core` | 标准2D纹理贴图 |
| `BitmapTextureCube` | `@rings/core` | 6面立方体纹理 |
| `HDRTextureCube` | `@rings/core` | HDR环境贴图 |
| `HDRTexture` | `@rings/core` | HDR 2D纹理 |
| `RenderTexture` | `@rings/core` | 离屏渲染目标 |

### 完整纹理创建流程示例

```typescript
import { 
  BitmapTexture2D, 
  BitmapTextureCube, 
  HDRTextureCube, 
  Engine3D,
  Scene3D 
} from '@rings/core';

// 1. 创建2D纹理
const diffuseMap = new BitmapTexture2D(true);
await diffuseMap.load("textures/diffuse/wood.jpg");
diffuseMap.addressModeU = "repeat";
diffuseMap.addressModeV = "repeat";

// 2. 创建法线贴图
const normalMap = new BitmapTexture2D(true);
await normalMap.load("textures/normal/wood_normal.jpg");
normalMap.addressModeU = "repeat";
normalMap.addressModeV = "repeat";

// 3. 创建环境贴图
const envMap = new HDRTextureCube();
await envMap.load("environments/studio.hdr");

// 4. 应用到场景
scene.envMap = envMap;
scene.exposure = 1.0;

// 5. 应用到材质
const material = new StandardMaterial();
material.setTexture("baseMap", diffuseMap);
material.setTexture("normalMap", normalMap);
material.envMapIntensity = 1.0;
```

---

## 材质系统

### 基础材质类 (Material)

所有材质都继承自 `Material` 基类，提供了材质系统的核心功能和通用属性。

#### 构造函数
```typescript
constructor()
```

#### 基础属性

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `instanceID` | `string` | `UUID()` | 唯一实例标识符 |
| `name` | `string` | `''` | 材质名称 |
| `enable` | `boolean` | `true` | 是否启用材质 |

#### 渲染状态控制

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `doubleSide` | `boolean` | `false` | 是否双面渲染 |
| `castShadow` | `boolean` | `true` | 是否投射阴影 |
| `acceptShadow` | `boolean` | `true` | 是否接收阴影 |
| `castReflection` | `boolean` | `true` | 是否反射环境 |
| `transparent` | `boolean` | `false` | 是否透明渲染 |

#### 混合与剔除模式

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `blendMode` | `BlendMode` | `BlendMode.NONE` | 混合模式 |
| `cullMode` | `GPUCullMode` | `GPUCullMode.back` | 剔除模式 |
| `depthCompare` | `GPUCompareFunction` | `GPUCompareFunction.less_equal` | 深度比较函数 |
| `depthWriteEnabled` | `boolean` | `true` | 是否写入深度缓冲区 |

#### 混合模式枚举 (BlendMode)

```typescript
enum BlendMode {
  NONE,      // 无混合，提高性能
  ABOVE,     // 显示在背景上方
  ALPHA,     // 透明混合
  NORMAL,    // 正常混合
  ADD,       // 加法混合
  BELOW,     // 显示在背景下方
  ERASE,     // 擦除背景
  MUL,       // 乘法混合
  SCREEN,    // 屏幕混合
  DIVD,      // 除法混合
  SOFT_ADD   // 柔和加法
}
```

#### 剔除模式枚举 (GPUCullMode)

```typescript
enum GPUCullMode {
  none = 'none',    // 不剔除
  front = 'front',  // 剔除正面
  back = 'back',    // 剔除背面（默认）
}
```

#### 通用方法

```typescript
// 纹理设置
setTexture(name: string, texture: Texture): void
getTexture(name: string): Texture

// 统一变量设置
setUniformFloat(name: string, value: number): void
setUniformVector2(name: string, value: Vector2): void
setUniformVector3(name: string, value: Vector3): void
setUniformVector4(name: string, value: Vector4): void
setUniformColor(name: string, value: Color): void

// 着色器宏定义
setDefine(define: string, value: boolean): void

// 材质管理
clone(): Material
destroy(force: boolean): void
```

### 无光照材质 (UnLitMaterial)

不接受光照的表面材质，适用于UI、特效、卡通渲染等场景。

#### 构造函数
```typescript
constructor()
```

#### 专属属性

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `baseMap` | `Texture` | `whiteTexture` | 基础纹理贴图 |
| `baseColor` | `Color` | `Color(1, 1, 1, 1)` | 基础颜色（染色） |

#### 使用示例

```typescript
// 创建无光照材质
const unlitMaterial = new UnLitMaterial();

// 设置纹理和颜色
unlitMaterial.baseMap = Engine3D.res.whiteTexture;
unlitMaterial.baseColor = new Color(1, 0.5, 0.2, 1); // 橙色

// 应用到物体
const cube = new Object3D();
cube.addComponent(MeshRenderer).material = unlitMaterial;
```

### PBR材质 (LitMaterial)

基于物理渲染的材质系统，支持金属度-粗糙度工作流，适用于真实感渲染。

#### 构造函数
```typescript
constructor()
```

#### 核心属性

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `baseMap` | `Texture` | `null` | 基础颜色贴图（反照率） |
| `baseColor` | `Color` | `Color(1, 1, 1, 1)` | 基础颜色 |
| `normalMap` | `Texture` | `null` | 法线贴图 |
| `maskMap` | `Texture` | `null` | 遮罩贴图（R:金属度 G:粗糙度 B:AO A:Alpha） |
| `metallic` | `number` | `0.0` | 金属度 (0-1) |
| `roughness` | `number` | `0.5` | 粗糙度 (0-1) |

#### 光照与反射

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `emissiveMap` | `Texture` | `null` | 自发光贴图 |
| `emissiveColor` | `Color` | `Color(0, 0, 0, 1)` | 自发光颜色 |
| `emissiveIntensity` | `number` | `1.0` | 自发光强度 |
| `aoMap` | `Texture` | `null` | 环境光遮蔽贴图 |
| `ao` | `number` | `1.0` | 环境光遮蔽强度 |

#### 清漆层（Clear Coat）

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `clearcoatColor` | `Color` | `Color(1, 1, 1, 1)` | 清漆颜色 |
| `clearcoatFactor` | `number` | `0.0` | 清漆强度 (0-1) |
| `clearcoatWeight` | `number` | `0.0` | 清漆权重 |
| `clearcoatRoughnessFactor` | `number` | `0.0` | 清漆粗糙度 |
| `ior` | `number` | `1.5` | 折射率 |

#### 透明度控制

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `alphaCutoff` | `number` | `0.5` | Alpha裁剪阈值 |

#### UV变换控制

PBR材质支持UV变换，通过统一变量控制：

| 统一变量名 | 类型 | 描述 |
|------------|------|------|
| `baseMapOffsetSize` | `Vector4` | 基础贴图UV偏移和缩放 (x, y, z, w) |
| `normalMapOffsetSize` | `Vector4` | 法线贴图UV偏移和缩放 |
| `emissiveMapOffsetSize` | `Vector4` | 自发光贴图UV偏移和缩放 |
| `roughnessMapOffsetSize` | `Vector4` | 粗糙度贴图UV偏移和缩放 |
| `metallicMapOffsetSize` | `Vector4` | 金属度贴图UV偏移和缩放 |
| `aoMapOffsetSize` | `Vector4` | AO贴图UV偏移和缩放 |

#### UV变换示例

```typescript
import { LitMaterial, Color, Vector4 } from '@rings/core';

// 创建PBR材质
const pbrMaterial = new LitMaterial();

// 设置基础纹理和颜色
pbrMaterial.baseMap = texture;
pbrMaterial.baseColor = new Color(1, 1, 1, 1);

// 设置金属度和粗糙度
pbrMaterial.metallic = 0.8;  // 高金属度
pbrMaterial.roughness = 0.2; // 低粗糙度（光滑）

// UV变换：偏移(0.1, 0.2)，缩放(2, 3)
pbrMaterial.shader.setUniformVector4('baseMapOffsetSize', new Vector4(0.1, 0.2, 2, 3));
```

#### 混合模式切换示例

```typescript
import { LitMaterial, Color, BlendMode } from '@rings/core';

// 创建透明材质
const transparentMaterial = new LitMaterial();
transparentMaterial.baseColor = new Color(1, 0, 0, 0.5); // 半透明红色
transparentMaterial.blendMode = BlendMode.ALPHA;
transparentMaterial.transparent = true;

// 创建加法混合材质
const additiveMaterial = new LitMaterial();
additiveMaterial.baseColor = new Color(0.2, 0.5, 1, 0.8);
additiveMaterial.blendMode = BlendMode.ADD;

// 创建无混合材质（不透明）
const opaqueMaterial = new LitMaterial();
opaqueMaterial.blendMode = BlendMode.NONE;
opaqueMaterial.transparent = false;
```

#### 剔除模式切换示例

```typescript
import { LitMaterial, GPUCullMode } from '@rings/core';

// 创建双面渲染材质
const doubleSidedMaterial = new LitMaterial();
doubleSidedMaterial.cullMode = GPUCullMode.none; // 不剔除任何面
doubleSidedMaterial.doubleSide = true;

// 创建单面渲染材质（默认）
const singleSidedMaterial = new LitMaterial();
singleSidedMaterial.cullMode = GPUCullMode.back; // 剔除背面
```

#### 完整PBR材质配置示例

```typescript
import { LitMaterial, Color, BlendMode, GPUCullMode } from '@rings/core';

// 创建汽车车漆材质
const carPaintMaterial = new LitMaterial();

// 基础设置
carPaintMaterial.baseMap = carTexture;
carPaintMaterial.baseColor = new Color(0.8, 0.1, 0.1, 1); // 红色车漆

// 金属度-粗糙度设置
carPaintMaterial.metallic = 0.9;
carPaintMaterial.roughness = 0.1;

// 法线贴图
carPaintMaterial.normalMap = normalTexture;

// 环境光遮蔽
carPaintMaterial.aoMap = aoTexture;
carPaintMaterial.ao = 1.0;

// 自发光（车灯）
carPaintMaterial.emissiveMap = emissiveTexture;
carPaintMaterial.emissiveColor = new Color(1, 1, 0.8, 1);
carPaintMaterial.emissiveIntensity = 2.0;

// 清漆层
carPaintMaterial.clearcoatFactor = 0.8;
carPaintMaterial.clearcoatRoughnessFactor = 0.05;

// 渲染设置
carPaintMaterial.blendMode = BlendMode.NONE;
carPaintMaterial.cullMode = GPUCullMode.back;
```

---

## 几何体系统

### 基础几何体类

所有几何体类都继承自 `GeometryBase` 基类，提供统一的顶点数据管理和渲染接口。

### BoxGeometry - 立方体几何体

**类定义：** `class BoxGeometry extends GeometryBase`

#### 构造函数
```typescript
new BoxGeometry(width?: number, height?: number, depth?: number)
```

#### 属性列表
| 属性 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `width` | `number` | `1` | 立方体宽度 |
| `height` | `number` | `1` | 立方体高度 |
| `depth` | `number` | `1` | 立方体深度 |

#### 使用示例
```typescript
import { BoxGeometry } from '@rings/core';

// 创建一个1x1x1的立方体
const box = new BoxGeometry();

// 创建一个2x3x4的立方体
const customBox = new BoxGeometry(2, 3, 4);
```

---

### SphereGeometry - 球体几何体

**类定义：** `class SphereGeometry extends GeometryBase`

#### 构造函数
```typescript
new SphereGeometry(
    radius: number,
    widthSegments: number,
    heightSegments: number,
    phiStart?: number,
    phiLength?: number,
    thetaStart?: number,
    thetaLength?: number
)
```

#### 属性列表
| 属性 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `radius` | `number` | - | 球体半径 |
| `widthSegments` | `number` | - | 水平分段数 |
| `heightSegments` | `number` | - | 垂直分段数 |
| `phiStart` | `number` | `0` | 水平起始角度（弧度） |
| `phiLength` | `number` | `2π` | 水平角度范围（弧度） |
| `thetaStart` | `number` | `0` | 垂直起始角度（弧度） |
| `thetaLength` | `number` | `π` | 垂直角度范围（弧度） |

#### 使用示例
```typescript
import { SphereGeometry } from '@rings/core';

// 创建一个半径为1的完整球体
const sphere = new SphereGeometry(1, 32, 32);

// 创建一个半球体
const hemisphere = new SphereGeometry(1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
```

---

### CylinderGeometry - 圆柱体几何体

**类定义：** `class CylinderGeometry extends GeometryBase`

#### 构造函数
```typescript
new CylinderGeometry(
    radiusTop?: number,
    radiusBottom?: number,
    height?: number,
    radialSegments?: number,
    heightSegments?: number,
    openEnded?: boolean,
    thetaStart?: number,
    thetaLength?: number
)
```

#### 属性列表
| 属性 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `radiusTop` | `number` | `1` | 顶部半径 |
| `radiusBottom` | `number` | `1` | 底部半径 |
| `height` | `number` | `1` | 圆柱高度 |
| `radialSegments` | `number` | `32` | 侧面分段数 |
| `heightSegments` | `number` | `1` | 高度分段数 |
| `openEnded` | `boolean` | `false` | 是否开放底部 |
| `thetaStart` | `number` | `0` | 起始角度 |
| `thetaLength` | `number` | `2π` | 角度范围 |

#### 使用示例
```typescript
import { CylinderGeometry } from '@rings/core';

// 创建一个标准圆柱体
const cylinder = new CylinderGeometry();

// 创建一个圆锥体（顶部半径为0）
const cone = new CylinderGeometry(0, 1, 2, 32);
```

---

### TorusGeometry - 圆环体几何体

**类定义：** `class TorusGeometry extends GeometryBase`

#### 构造函数
```typescript
new TorusGeometry(
    radius?: number,
    tube?: number,
    radialSegments?: number,
    tubularSegments?: number
)
```

#### 属性列表
| 属性 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `radius` | `number` | `1` | 圆环半径 |
| `tube` | `number` | `0.4` | 管道半径 |
| `radialSegments` | `number` | `8` | 圆环分段数 |
| `tubularSegments` | `number` | `16` | 管道分段数 |

#### 使用示例
```typescript
import { TorusGeometry } from '@rings/core';

// 创建一个标准圆环体
const torus = new TorusGeometry();

// 创建一个细圆环
const thinTorus = new TorusGeometry(2, 0.1, 16, 100);
```

---

### PlaneGeometry - 平面几何体

**类定义：** `class PlaneGeometry extends GeometryBase`

#### 构造函数
```typescript
new PlaneGeometry(
    width: number,
    height: number,
    segmentW?: number,
    segmentH?: number,
    up?: Vector3
)
```

#### 属性列表
| 属性 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `width` | `number` | - | 平面宽度 |
| `height` | `number` | - | 平面高度 |
| `segmentW` | `number` | `1` | 宽度分段数 |
| `segmentH` | `number` | `1` | 高度分段数 |
| `up` | `Vector3` | `Vector3.Y_AXIS` | 平面法线方向 |

#### 使用示例
```typescript
import { PlaneGeometry, Vector3 } from '@rings/core';

// 创建一个1x1的平面
const plane = new PlaneGeometry(1, 1);

// 创建一个10x10的网格平面
const gridPlane = new PlaneGeometry(10, 10, 10, 10);

// 创建一个垂直于X轴的平面
const verticalPlane = new PlaneGeometry(5, 5, 1, 1, Vector3.X_AXIS);
```

---

### ExtrudeGeometry - 挤压几何体

**类定义：** `class ExtrudeGeometry extends GeometryBase`

#### 构造函数
```typescript
new ExtrudeGeometry()
```

#### 主要方法
| 方法 | 参数 | 返回值 | 描述 |
| :--- | :--- | :--- | :--- |
| `build` | `shape: Vector3[]`, `isShapeClosed: boolean`, `path: Vector3[]`, `vScale?: number`, `uNegate?: boolean` | `this` | 构建挤压几何体 |

#### 属性列表
| 属性 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `vScale` | `number` | `1.0` | V坐标缩放 |
| `uNegate` | `boolean` | `true` | U坐标反转 |
| `sections` | `Section[]` | `[]` | 截面数据 |

#### 使用示例
```typescript
import { ExtrudeGeometry, Vector3 } from '@rings/core';

const extrude = new ExtrudeGeometry();

// 定义一个2D形状（三角形）
const shape = [
    new Vector3(0, 0, 0),
    new Vector3(1, 0, 0),
    new Vector3(0.5, 1, 0)
];

// 定义挤压路径
const path = [
    new Vector3(0, 0, 0),
    new Vector3(0, 0, 5)
];

// 构建挤压几何体
extrude.build(shape, true, path, 1.0, true);
```

---

### 通用继承属性

所有几何体类都继承自 `GeometryBase`，具有以下通用属性：

| 属性 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `instanceID` | `string` | `UUID()` | 唯一实例ID |
| `name` | `string` | `""` | 几何体名称 |

---

## 网格 (Mesh)

网格是3D场景中的核心渲染对象，由几何体(Geometry)和材质(Material)组成，支持多种渲染特性和优化选项。

### 网格系统架构

| 网格类型 | 类名 | 继承关系 | 主要特性 |
|----------|------|----------|----------|
| **基础网格** | `MeshRenderer` | `RenderNode` → `MeshRenderer` | 标准网格渲染 |
| **网格过滤器** | `MeshFilter` | `MeshRenderer` → `MeshFilter` | 几何体管理 |
| **蒙皮网格** | `SkinnedMeshRenderer` | `MeshRenderer` → `SkinnedMeshRenderer` | 骨骼动画支持 |
| **蒙皮网格2** | `SkinnedMeshRenderer2` | `MeshRenderer` → `SkinnedMeshRenderer2` | 优化版蒙皮渲染 |

### 完整属性列表

#### 基础渲染属性
| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `geometry` | `GeometryBase` | `null` | 几何体数据 |
| `material` | `Material` | `null` | 主材质 |
| `materials` | `Material[]` | `[]` | 多材质数组 |
| `receiveShadow` | `boolean` | `true` | 是否接收阴影 |
| `castShadow` | `boolean` | `true` | 是否投射阴影 |
| `castGI` | `boolean` | `true` | 是否参与全局光照 |
| `castReflection` | `boolean` | `true` | 是否参与反射探针 |

#### LOD和实例化
| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `lodLevel` | `number` | `0` | LOD层级索引 |
| `instanceCount` | `number` | `0` | GPU实例化数量 |
| `alwaysRender` | `boolean` | `false` | 始终渲染标志 |
| `drawType` | `number` | `0` | 绘制类型枚举 |

#### 变形目标
| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `morphData` | `MorphTargetData` | `null` | 变形目标数据 |

#### 渲染控制
| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `renderLayer` | `RenderLayer` | `RenderLayer.None` | 渲染层级 |
| `rendererMask` | `number` | `0` | 渲染遮罩标志 |
| `renderOrder` | `number` | `0` | 渲染排序优先级 |

### 主要方法

#### 基础方法
| 方法 | 参数 | 返回值 | 描述 |
|------|------|--------|------|
| `geometry` | `value: GeometryBase` | `void` | 设置几何体 |
| `material` | `value: Material` | `void` | 设置主材质 |
| `materials` | `value: Material[]` | `void` | 设置多材质数组 |

#### 网格过滤器专用
| 方法 | 参数 | 返回值 | 描述 |
|------|------|--------|------|
| `meshURL` | `value: string` | `void` | 通过URL设置几何体 |

### 网格创建使用示例

#### 基础网格创建
```typescript
import { Object3D, MeshRenderer, GeometryBase, StandardMaterial } from '@rings/core';

// 创建网格对象
const meshObject = new Object3D();
const meshRenderer = meshObject.addComponent(MeshRenderer);

// 设置几何体
const geometry = new BoxGeometry(2, 2, 2); // 2x2x2立方体
meshRenderer.geometry = geometry;

// 设置材质
const material = new StandardMaterial({
  color: 0x00ff00,
  roughness: 0.5,
  metalness: 0.0
});
meshRenderer.material = material;

// 添加到场景
scene.addChild(meshObject);
```

#### 通过URL加载网格
```typescript
import { Object3D, MeshFilter } from '@rings/core';

// 创建网格过滤器
const meshObject = new Object3D();
const meshFilter = meshObject.addComponent(MeshFilter);

// 通过URL加载几何体
meshFilter.meshURL = "models/character.glb";

// 自动处理材质加载
// 如果GLB包含材质，会自动应用到meshFilter.material

scene.addChild(meshObject);
```

#### 多材质网格
```typescript
import { Object3D, MeshRenderer } from '@rings/core';

const meshObject = new Object3D();
const meshRenderer = meshObject.addComponent(MeshRenderer);

// 加载包含多个子网格的几何体
meshRenderer.geometry = await Engine3D.res.loadGeometry("models/house.glb");

// 设置多个材质
const materials = [
  new StandardMaterial({ color: 0x8B4513, roughness: 0.8 }), // 墙面
  new StandardMaterial({ color: 0x696969, roughness: 0.3 }), // 屋顶
  new StandardMaterial({ color: 0x4169E1, roughness: 0.2 })  // 窗户
];
meshRenderer.materials = materials;

scene.addChild(meshObject);
```

#### GPU实例化网格
```typescript
import { Object3D, MeshRenderer, Matrix4 } from '@rings/core';

// 创建基础网格
const meshObject = new Object3D();
const meshRenderer = meshObject.addComponent(MeshRenderer);
meshRenderer.geometry = new BoxGeometry(0.5, 0.5, 0.5);
meshRenderer.material = new StandardMaterial({ color: 0x00ff00 });

// 启用GPU实例化
meshRenderer.instanceCount = 1000; // 1000个实例

// 设置实例变换矩阵
const instanceMatrices: Matrix4[] = [];
for (let i = 0; i < 1000; i++) {
  const matrix = new Matrix4();
  matrix.setPosition(
    Math.random() * 100 - 50,
    Math.random() * 10,
    Math.random() * 100 - 50
  );
  instanceMatrices.push(matrix);
}

// 应用实例数据
// 实际应用中通过UniformBuffer设置

scene.addChild(meshObject);
```

#### 蒙皮网格动画
```typescript
import { Object3D, SkinnedMeshRenderer } from '@rings/core';

// 创建蒙皮网格
const character = new Object3D();
const skinnedMesh = character.addComponent(SkinnedMeshRenderer);

// 加载带骨骼动画的模型
const gltf = await Engine3D.res.loadGLTF("models/character.gltf");
skinnedMesh.geometry = gltf.meshes[0].geometry;
skinnedMesh.material = gltf.materials[0];

// 设置骨骼数据
skinnedMesh.bindPose = gltf.skins[0].bindPose;

// 播放动画
const animation = character.addComponent(AnimationComponent);
animation.play("idle");

scene.addChild(character);
```

#### LOD网格系统
```typescript
import { Object3D, MeshRenderer } from '@rings/core';

// 创建LOD网格组
const lodGroup = new Object3D();

// 高细节网格 (近距离)
const highDetail = new Object3D();
const highRenderer = highDetail.addComponent(MeshRenderer);
highRenderer.geometry = await Engine3D.res.loadGeometry("models/tree_high.glb");
highRenderer.lodLevel = 0;
lodGroup.addChild(highDetail);

// 中细节网格 (中距离)
const mediumDetail = new Object3D();
const mediumRenderer = mediumDetail.addComponent(MeshRenderer);
mediumRenderer.geometry = await Engine3D.res.loadGeometry("models/tree_medium.glb");
mediumRenderer.lodLevel = 1;
lodGroup.addChild(mediumDetail);

// 低细节网格 (远距离)
const lowDetail = new Object3D();
const lowRenderer = lowDetail.addComponent(MeshRenderer);
lowRenderer.geometry = await Engine3D.res.loadGeometry("models/tree_low.glb");
lowRenderer.lodLevel = 2;
lodGroup.addChild(lowDetail);

scene.addChild(lodGroup);
```

### 网格优化配置

#### 阴影优化
```typescript
// 针对性能优化阴影设置
const meshRenderer = meshObject.addComponent(MeshRenderer);
meshRenderer.castShadow = true;      // 投射阴影
meshRenderer.receiveShadow = false;  // 不接收阴影(节省性能)
```

#### 渲染层级控制
```typescript
// 设置渲染层级
meshRenderer.renderLayer = RenderLayer.Opaque;  // 不透明物体
// 或
meshRenderer.renderLayer = RenderLayer.Transparent; // 透明物体
```

#### 动态批处理
```typescript
// 启用动态批处理优化
const meshObject = new Object3D();
const meshRenderer = meshObject.addComponent(MeshRenderer);
meshRenderer.geometry = new BoxGeometry(1, 1, 1);
meshRenderer.material = sharedMaterial; // 使用共享材质

// 多个相同网格会自动批处理
for (let i = 0; i < 100; i++) {
  const instance = meshObject.clone();
  instance.transform.position.set(i * 2, 0, 0);
  scene.addChild(instance);
}
```

### 网格导入参考表

| 网格类型 | 导入路径 | 主要用途 |
|----------|----------|----------|
| `MeshRenderer` | `@rings/core` | 标准网格渲染 |
| `MeshFilter` | `@rings/core` | 几何体管理 |
| `SkinnedMeshRenderer` | `@rings/core` | 骨骼动画网格 |
| `SkinnedMeshRenderer2` | `@rings/core` | 优化版蒙皮网格 |

---

## 全局光照

#### Engine3D.setting.gi

配置全局光照(GI)相关参数，基于DDGI(动态漫反射全局光照)探针系统。

**完整属性列表**

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `enable` | boolean | false | 是否启用全局光照 |
| `debug` | boolean | false | 是否启用调试模式 |
| `debugCamera` | boolean | false | 是否启用调试相机视角 |
| **探针体积设置** |
| `probeXCount` | number | 16 | X轴探针数量 |
| `probeYCount` | number | 8 | Y轴探针数量 |
| `probeZCount` | number | 16 | Z轴探针数量 |
| `probeSpace` | number | 64 | 探针间距(单位：世界空间距离) |
| `probeSize` | number | 1.0 | 探针采样数据大小 |
| `offsetX` | number | 0 | 体积X轴偏移 |
| `offsetY` | number | 0 | 体积Y轴偏移 |
| `offsetZ` | number | 0 | 体积Z轴偏移 |
| **渲染质量设置** |
| `probeSourceTextureSize` | number | 128 | 探针纹理分辨率 |
| `octRTMaxSize` | number | 1024 | 八面体纹理总大小 |
| `octRTSideSize` | number | 8 | 单个八面体纹理边长 |
| `maxDistance` | number | 100 | 探针最大深度距离 |
| `rayNumber` | number | 256 | 每探针光线数量 |
| **光照参数** |
| `indirectIntensity` | number | 1.0 | 间接光强度 |
| `bounceIntensity` | number | 1.0 | 反弹光强度 |
| `ddgiGamma` | number | 2.2 | DDGI伽马校正 |
| **实时更新** |
| `realTimeGI` | boolean | false | 是否启用实时全局光照更新 |
| `autoRenderProbe` | boolean | true | 是否自动渲染探针 |
| **高级参数** |
| `normalBias` | number | 0.5 | 法线偏移 |
| `depthSharpness` | number | 100 | 深度锐度 |
| `hysteresis` | number | 0.01 | 滞后值 |
| `lerpHysteresis` | number | 0.01 | 插值滞后值 |
| `irradianceChebyshevBias` | number | 0.5 | 辐照度切比雪夫偏移 |
| `irradianceDistanceBias` | number | 0.1 | 辐照度距离偏移 |
| `probeRoughness` | number | 0.5 | 探针粗糙度 |

**使用示例**

```typescript
import { Engine3D } from '@rings/core';

// 基础配置
Engine3D.setting.gi.enable = true;
Engine3D.setting.gi.indirectIntensity = 1.5;

// 探针体积配置
Engine3D.setting.gi.probeXCount = 32;
Engine3D.setting.gi.probeYCount = 16;
Engine3D.setting.gi.probeZCount = 32;
Engine3D.setting.gi.probeSpace = 64;

// 质量设置
Engine3D.setting.gi.rayNumber = 512;
Engine3D.setting.gi.probeSourceTextureSize = 256;

// 实时更新
Engine3D.setting.gi.realTimeGI = true;
Engine3D.setting.gi.autoRenderProbe = true;
```

## 阴影设置

#### Engine3D.setting.shadow

配置阴影相关参数，支持PCF、HARD、SOFT三种阴影类型。

**完整属性列表**

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| **基础设置** |
| `enable` | boolean | true | 是否启用阴影 |
| `type` | "PCF" \| "HARD" \| "SOFT" | "HARD" | 阴影类型 |
| **阴影贴图** |
| `shadowSize` | number | 2048 | 方向光阴影贴图分辨率 |
| `pointShadowSize` | number | 2048 | 点光源阴影贴图分辨率 |
| **偏移设置** |
| `shadowBias` | number | 0.05 | 阴影偏移量 |
| `pointShadowBias` | number | 0.005 | 点光源阴影偏移量 |
| **软阴影参数** |
| `shadowSoft` | number | 1.0 | 软阴影强度 |
| **更新控制** |
| `needUpdate` | boolean | true | 是否需要更新阴影 |
| `autoUpdate` | boolean | true | 是否自动更新阴影 |
| `updateFrameRate` | number | 1 | 阴影更新帧率 |
| **级联阴影(CSM)** |
| `csmMargin` | number | 1.0 | CSM边缘扩展 |
| `csmScatteringExp` | number | 1.0 | CSM散射指数 |
| `csmAreaScale` | number | 1.0 | CSM区域缩放 |
| **调试** |
| `debug` | any | null | 调试配置 |
| `shadowBound` | number | - | 阴影边界距离 |

**使用示例**

```typescript
import { Engine3D } from '@rings/core';

// 基础阴影配置
Engine3D.setting.shadow.enable = true;
Engine3D.setting.shadow.type = "PCF";
Engine3D.setting.shadow.shadowSize = 4096;

// 软阴影配置
Engine3D.setting.shadow.shadowSoft = 2.0;

// 性能优化
Engine3D.setting.shadow.autoUpdate = true;
Engine3D.setting.shadow.updateFrameRate = 2;

// 偏移调整
Engine3D.setting.shadow.shadowBias = 0.01;
Engine3D.setting.shadow.pointShadowBias = 0.001;

// CSM配置
Engine3D.setting.shadow.csmMargin = 2.0;
```

## 使用指南

### 性能优化

- **光源限制**：场景中实时阴影光源建议不超过4个
- **分辨率平衡**：使用合适的阴影贴图分辨率平衡质量与性能
- **剔除优化**：合理设置相机远近裁剪面
- **静态光照**：静态场景使用烘焙光照提升性能

### 场景配置示例

#### 室外场景配置

```typescript
import { Object3D, Scene3D, DirectLight, Color, Vector3 } from '@rings/core';

const setupOutdoorLighting = (scene: Scene3D) => {
  // 主光源（太阳）
  const sunObj = new Object3D();
  const sun = sunObj.addComponent(DirectLight);
  sun.color = new Color(1, 0.95, 0.8);
  sun.intensity = 1.2;
  sun.castShadow = true;
  sunObj.transform.rotation = new Vector3(-30, 45, 0);
  scene.addChild(sunObj);

  // 环境照明通过HDR环境贴图
  const hdrTexture = new HDRTextureCube();
  await hdrTexture.load("environments/outdoor_sky.hdr");
  scene.envMap = hdrTexture;
  scene.exposure = 1.2;
};
```

#### 室内场景配置

```typescript
import { Object3D, Scene3D, PointLight, Color, Vector3 } from '@rings/core';

const setupIndoorLighting = (scene: Scene3D) => {
  // 主照明
  const mainLight = new Object3D();
  const point = mainLight.addComponent(PointLight);
  point.color = new Color(1, 0.9, 0.8);
  point.intensity = 1.5;
  point.range = 15;
  point.castShadow = true;
  mainLight.transform.position = new Vector3(0, 8, 0);
  scene.addChild(mainLight);

  // 补光
  const fillLight = new Object3D();
  const fill = fillLight.addComponent(PointLight);
  fill.color = new Color(0.4, 0.5, 0.8);
  fill.intensity = 0.5;
  fill.range = 20;
  fillLight.transform.position = new Vector3(-5, 3, -5);
  scene.addChild(fillLight);

  // 环境照明通过GI系统
  const gi = scene.addComponent(GlobalIlluminationComponent);
  gi.enable = true;
  gi.indirectIntensity = 0.3;
};
```
