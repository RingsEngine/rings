# 基础组件 API 参考

## 渲染核心组件

### 1. 相机组件(Camera3D)

`Camera3D` 类表示 3D 场景中的相机组件，支持透视投影和正交投影，并提供视锥体裁剪、阴影计算、坐标转换等功能。

#### 属性说明

| 属性名           | 类型       | 默认值        | 描述                                 |
| ---------------- | ---------- | ------------- | ------------------------------------ |
| `fov`            | number     | 60            | 视野角度（度），用于透视投影         |
| `name`           | string     | ""            | 相机名称                             |
| `aspect`         | number     | 1             | 视口宽高比（宽度/高度）              |
| `near`           | number     | 1             | 近裁剪面距离                         |
| `far`            | number     | 5000          | 远裁剪面距离                         |
| `left`           | number     | -100          | 正交投影左边界                       |
| `right`          | number     | 100           | 正交投影右边界                       |
| `top`            | number     | 100           | 正交投影上边界                       |
| `bottom`         | number     | -100          | 正交投影下边界                       |
| `frustumSize`    | number     | 100           | 正交投影视锥体大小                   |
| `isShadowCamera` | boolean    | false         | 标记是否为阴影相机                   |
| `type`           | CameraType | `perspective` | 相机类型（`perspective` 或 `ortho`） |
| `enableCSM`      | boolean    | false         | 是否启用级联阴影映射（CSM）          |

#### 方法说明

| 方法名                                                | 描述                                       |
| ----------------------------------------------------- | ------------------------------------------ |
| `init()`                                              | 初始化相机，创建射线、视锥体和观察目标     |
| `updateProjection()`                                  | 根据当前相机类型更新投影矩阵（透视或正交） |
| `perspective(fov, aspect, near, far)`                 | 设置透视投影参数                           |
| `ortho(frustumSize, near, far)`                       | 设置正交投影参数（基于尺寸）               |
| `orthoOffCenter(left, right, bottom, top, near, far)` | 设置正交投影参数（基于边界）               |
| `getShadowBias(depthTexSize)`                         | 计算阴影偏移值，用于阴影贴图采样           |
| `getShadowWorldExtents()`                             | 获取阴影世界空间范围                       |
| `object3DToScreenRay(n, target)`                      | 将 3D 对象坐标转换为屏幕坐标               |
| `screenRayToObject3D(n, target)`                      | 将屏幕坐标转换为 3D 对象坐标               |
| `viewMatrix`                                          | 获取视图矩阵（相机世界矩阵的逆矩阵）       |
| `shadowViewMatrix`                                    | 获取阴影视图矩阵                           |
| `pvMatrix`                                            | 获取投影-视图组合矩阵                      |

#### 示例代码

```typescript
import { Camera3D, CameraType } from "@rings/core";

// 创建相机实例
const camera = new Camera3D();
camera.name = "MainCamera";

// 设置透视投影
camera.perspective(60, 1.0, 0.1, 1000);

// 设置正交投影（可选）
// camera.ortho(100, 0.1, 1000);

// 初始化相机
camera.init();

// 更新投影矩阵（例如窗口大小变化时）
camera.updateProjection();

// 获取视图矩阵
const viewMatrix = camera.viewMatrix;
console.log("View Matrix:", viewMatrix);
```

### 1.1 自由相机(FlyCameraController)

`FlyCameraController` 是一个基于 `Camera3D` 的控制器，用于实现自由飞行相机效果，支持键盘和鼠标控制相机的移动和旋转。

##### 属性说明

| 属性名      | 类型    | 默认值                     | 描述                                                               |
| ----------- | ------- | -------------------------- | ------------------------------------------------------------------ |
| `moveSpeed` | number  | 2                          | 相机移动速度。                                                     |
| `targetPos` | Vector3 | (0,0,10)                   | 相机目标位置。                                                     |
| `lookAtPos` | Vector3 | (0,0,0)                    | 相机看向的位置。                                                   |
| `config`    | object  | `{ shiftMoveScale: 20.0 }` | 配置对象，包含 `shiftMoveScale`（按住 Shift 键时的移动速度倍数）。 |

##### 方法说明

| 方法名                                           | 描述                                         |
| ------------------------------------------------ | -------------------------------------------- |
| `setCamera(cameraPos: Vector3, lookAt: Vector3)` | 设置相机初始位置和目标位置。                 |
| `start()`                                        | 初始化相机控制器，绑定键盘和鼠标事件。       |
| `onUpdate()`                                     | 每帧更新相机位置和旋转，处理键盘和鼠标输入。 |
| `destroy(force?: boolean)`                       | 销毁控制器，移除事件监听。                   |

##### 示例代码

```typescript
import { Scene3D, Camera3D, FlyCameraController } from "@rings/core";

// 创建场景和相机
const scene = new Scene3D();
const camera = new Camera3D();
camera.perspective(60, 1.0, 0.1, 1000);

// 创建自由相机控制器
const flyController = new FlyCameraController();
flyController.moveSpeed = 5.0; // 设置移动速度
flyController.setCamera(new Vector3(0, 0, 10), new Vector3(0, 0, 0)); // 设置初始位置和目标
flyController.start(); // 启动控制器

// 在渲染循环中更新控制器
function update() {
  requestAnimationFrame(update);
  flyController.onUpdate(); // 更新相机状态
}
update();
```

### 1.2 悬浮相机(HoverCameraController)

`HoverCameraController` 是一个基于 `Camera3D` 的控制器，用于实现悬浮相机效果，支持鼠标控制相机的旋转和平移。

#### 属性说明

| 属性名             | 类型    | 默认值 | 描述                               |
| ------------------ | ------- | ------ | ---------------------------------- |
| `minDistance`      | number  | 0.1    | 相机与目标点的最小距离。           |
| `maxDistance`      | number  | 500    | 相机与目标点的最大距离。           |
| `rollSmooth`       | number  | 15.0   | 旋转平滑系数。                     |
| `dragSmooth`       | number  | 20     | 平移平滑系数。                     |
| `wheelSmooth`      | number  | 10     | 滚轮平滑系数。                     |
| `wheelStep`        | number  | 0.002  | 滚轮步长。                         |
| `mouseRightFactor` | number  | 0.25   | 鼠标右键移动系数。                 |
| `mouseLeftFactor`  | number  | 20     | 鼠标左键移动系数。                 |
| `smooth`           | boolean | true   | 是否启用平滑过渡效果。             |
| `distance`         | number  | 10     | 相机与目标点的当前距离。           |
| `roll`             | number  | 0      | 相机的当前水平旋转角度（偏航角）。 |
| `pitch`            | number  | 0      | 相机的当前垂直旋转角度（俯仰角）。 |

#### 方法说明

| 方法名                                                                       | 描述                                     |
| ---------------------------------------------------------------------------- | ---------------------------------------- |
| `setCamera(roll: number, pitch: number, distance: number, target?: Vector3)` | 设置相机的初始旋转角度、距离和目标位置。 |
| `start()`                                                                    | 初始化相机控制器，绑定鼠标事件。         |
| `onBeforeUpdate(view?: View3D)`                                              | 每帧更新相机位置和旋转，处理鼠标输入。   |
| `destroy(force?: boolean)`                                                   | 销毁控制器，移除事件监听。               |
| `flowTarget(target: Object3D, offset: Vector3)`                              | 设置相机跟随的目标对象和偏移量。         |
| `focusByBounds(obj: Object3D)`                                               | 根据对象的包围盒自动调整相机位置和目标。 |

#### 示例代码

```typescript
import { Scene3D, Camera3D, HoverCameraController } from "@rings/core";

// 创建场景和相机
const scene = new Scene3D();
const camera = new Camera3D();
camera.perspective(60, 1.0, 0.1, 1000);

// 创建悬浮相机控制器
const hoverController = new HoverCameraController();
hoverController.distance = 10.0; // 设置初始距离
hoverController.setCamera(0, 0, 10, new Vector3(0, 0, 0)); // 设置初始旋转和目标
hoverController.start(); // 启动控制器

// 在渲染循环中更新控制器
function update() {
  requestAnimationFrame(update);
  hoverController.onBeforeUpdate(); // 更新相机状态
}
update();
```

### 1.3 轨道相机(OrbitController)

`OrbitController` 是一个基于 `Camera3D` 的控制器，用于实现围绕目标点的轨道运动效果，支持鼠标控制相机的旋转、平移和缩放。

#### 属性说明

| 属性名            | 类型    | 默认值 | 描述                                 |
| ----------------- | ------- | ------ | ------------------------------------ |
| `autoRotate`      | boolean | false  | 是否启用自动旋转。                   |
| `autoRotateSpeed` | number  | 0.1    | 自动旋转速度系数。                   |
| `rotateFactor`    | number  | 0.5    | 旋转速度系数。                       |
| `zoomFactor`      | number  | 0.1    | 缩放速度系数。                       |
| `panFactor`       | number  | 0.25   | 平移速度系数。                       |
| `smooth`          | number  | 5      | 平滑过渡系数。                       |
| `minDistance`     | number  | 1      | 相机与目标点的最小距离。             |
| `maxDistance`     | number  | 100000 | 相机与目标点的最大距离。             |
| `minPolarAngle`   | number  | -90    | 相机的最低俯仰角（相对于 xz 平面）。 |
| `maxPolarAngle`   | number  | 90     | 相机的最高俯仰角（相对于 xz 平面）。 |

#### 方法说明

| 方法名                     | 描述                                   |
| -------------------------- | -------------------------------------- |
| `start()`                  | 初始化相机控制器，绑定鼠标事件。       |
| `onUpdate()`               | 每帧更新相机位置和旋转，处理鼠标输入。 |
| `destroy(force?: boolean)` | 销毁控制器，移除事件监听。             |

#### 示例代码

```typescript
import { Scene3D, Camera3D, OrbitController } from "@rings/core";

// 创建场景和相机
const scene = new Scene3D();
const camera = new Camera3D();
camera.perspective(60, 1.0, 0.1, 1000);

// 创建轨道相机控制器
const orbitController = new OrbitController();
orbitController.autoRotate = true; // 启用自动旋转
orbitController.minDistance = 1.0; // 设置最小距离
orbitController.maxDistance = 100.0; // 设置最大距离
orbitController.start(); // 启动控制器

// 在渲染循环中更新控制器
function update() {
  requestAnimationFrame(update);
  orbitController.onUpdate(); // 更新相机状态
}
update();
```

### 2. 光照组件(LightComponent)

管理场景光源和照明效果

```javascript
entity.addComponent(LightComponent, {
  type: "directional",
  color: 0xffffff,
  intensity: 1.0,
});
```

#### 属性说明

| 属性名    | 类型    | 默认值        | 描述                                                           |
| --------- | ------- | ------------- | -------------------------------------------------------------- |
| type      | string  | "directional" | 光源类型："directional"(平行光),"point"(点光源),"spot"(聚光灯) |
| color     | number  | 0xffffff      | 光源颜色，十六进制 RGB 格式                                    |
| intensity | number  | 1.0           | 光照强度，数值越大光线越亮                                     |
| distance  | number  | 0             | 光照距离(仅点光源和聚光灯有效)，0 表示无限远                   |
| angle     | number  | Math.PI/3     | 聚光灯锥角(弧度，仅聚光灯有效)                                 |
| penumbra  | number  | 0.0           | 聚光灯光晕衰减(0.0-1.0，仅聚光灯有效)                          |
| decay     | number  | 1.0           | 光照衰减系数(仅点光源和聚光灯有效)                             |
| position  | Vector3 | (0,0,0)       | 光源位置(仅点光源和聚光灯有效)                                 |
| target    | Vector3 | (0,0,0)       | 光源照射目标(仅平行光和聚光灯有效)                             |

### 2 基础光源(LightBase)

`LightBase` 是所有光源组件的基类，定义了光源的通用属性和方法。

#### 属性说明

| 属性名       | 类型    | 默认值   | 描述                            |
| ------------ | ------- | -------- | ------------------------------- |
| `type`       | string  | "light"  | 光源类型标识符。                |
| `color`      | number  | 0xffffff | 光源颜色（十六进制 RGB 格式）。 |
| `intensity`  | number  | 1.0      | 光照强度。                      |
| `visible`    | boolean | true     | 是否启用光源。                  |
| `castShadow` | boolean | false    | 是否投射阴影。                  |
| `shadowBias` | number  | 0.0      | 阴影偏移量，用于消除阴影失真。  |

#### 方法说明

| 方法名     | 描述             |
| ---------- | ---------------- |
| `init()`   | 初始化光源参数。 |
| `start()`  | 启用光源组件。   |
| `stop()`   | 禁用光源组件。   |
| `update()` | 更新光源状态。   |
| `debug()`  | 调试用方法。     |

#### 示例代码

```typescript
import { Scene3D, Camera3D, LightBase } from "@rings/core";

// 创建场景和相机
const scene = new Scene3D();
const camera = new Camera3D();
camera.perspective(60, 1.0, 0.1, 1000);

// 创建基础光源
const light = new LightBase();
light.color = 0xff0000; // 设置光源颜色为红色
light.intensity = 0.8; // 设置光照强度
light.castShadow = true; // 启用阴影投射
scene.addChild(light.object3D); // 将光源添加到场景
```

### 2.1 平行光(DirectLight)

`DirectLight` 是一个继承自 `LightBase` 的平行光组件，用于模拟太阳光等无限远光源效果。

#### 属性说明

| 属性名     | 类型    | 默认值           | 描述               |
| ---------- | ------- | ---------------- | ------------------ |
| `radius`   | number  | MAX_SAFE_INTEGER | 光照影响范围。     |
| `indirect` | number  | 0.3              | 间接光照强度系数。 |
| `castGI`   | boolean | true             | 是否启用全局光照。 |

#### 方法说明

| 方法名    | 描述             |
| --------- | ---------------- |
| `init()`  | 初始化光源参数。 |
| `start()` | 启用光源组件。   |
| `debug()` | 调试用方法。     |

#### 示例代码

```typescript
import { Scene3D, Camera3D, DirectLight } from "@rings/core";

// 创建场景和相机
const scene = new Scene3D();
const camera = new Camera3D();
camera.perspective(60, 1.0, 0.1, 1000);

// 创建平行光
const directLight = new DirectLight();
directLight.radius = 1000; // 设置光照范围
directLight.indirect = 0.5; // 设置间接光照强度
directLight.castGI = true; // 启用全局光照
scene.addChild(directLight.object3D); // 将光源添加到场景
```

### 2.2 点光源(PointLight)

`PointLight` 是一个继承自 `LightBase` 的点光源组件，用于模拟灯泡等点状光源效果。

#### 属性说明

| 属性名         | 类型    | 默认值  | 描述                           |
| -------------- | ------- | ------- | ------------------------------ |
| `distance`     | number  | 0       | 光照影响距离，0 表示无限远。   |
| `decay`        | number  | 1.0     | 光照衰减系数，值越大衰减越快。 |
| `position`     | Vector3 | (0,0,0) | 光源位置。                     |
| `shadowRadius` | number  | 1.0     | 阴影边缘模糊半径。             |

#### 方法说明

| 方法名     | 描述             |
| ---------- | ---------------- |
| `init()`   | 初始化光源参数。 |
| `start()`  | 启用光源组件。   |
| `update()` | 更新光源状态。   |
| `debug()`  | 调试用方法。     |

#### 示例代码

```typescript
import { Scene3D, Camera3D, PointLight } from "@rings/core";

// 创建场景和相机
const scene = new Scene3D();
const camera = new Camera3D();
camera.perspective(60, 1.0, 0.1, 1000);

// 创建点光源
const pointLight = new PointLight();
pointLight.color = 0xff8800; // 设置光源颜色为橙色
pointLight.distance = 100; // 设置光照距离
pointLight.position.set(0, 10, 0); // 设置光源位置
pointLight.castShadow = true; // 启用阴影投射
scene.addChild(pointLight.object3D); // 将光源添加到场景
```

### 2.3 聚光灯(SpotLight)

`SpotLight` 是一个继承自 `LightBase` 的聚光灯组件，用于模拟手电筒等锥形光源效果。

#### 属性说明

| 属性名       | 类型    | 默认值    | 描述                         |
| ------------ | ------- | --------- | ---------------------------- |
| `angle`      | number  | Math.PI/3 | 聚光灯锥角（弧度）。         |
| `penumbra`   | number  | 0.0       | 光晕衰减系数（0.0-1.0）。    |
| `distance`   | number  | 0         | 光照影响距离，0 表示无限远。 |
| `decay`      | number  | 1.0       | 光照衰减系数。               |
| `position`   | Vector3 | (0,0,0)   | 光源位置。                   |
| `target`     | Vector3 | (0,0,0)   | 光源照射目标。               |
| `shadowBias` | number  | 0.0       | 阴影偏移量。                 |

#### 方法说明

| 方法名     | 描述             |
| ---------- | ---------------- |
| `init()`   | 初始化光源参数。 |
| `start()`  | 启用光源组件。   |
| `update()` | 更新光源状态。   |
| `debug()`  | 调试用方法。     |

#### 示例代码

```typescript
import { Scene3D, Camera3D, SpotLight } from "@rings/core";

// 创建场景和相机
const scene = new Scene3D();
const camera = new Camera3D();
camera.perspective(60, 1.0, 0.1, 1000);

// 创建聚光灯
const spotLight = new SpotLight();
spotLight.color = 0xffffff; // 设置光源颜色为白色
spotLight.angle = Math.PI / 4; // 设置锥角为45度
spotLight.penumbra = 0.5; // 设置光晕衰减
spotLight.position.set(0, 10, 0); // 设置光源位置
spotLight.target.set(0, 0, 0); // 设置照射目标
spotLight.castShadow = true; // 启用阴影投射
scene.addChild(spotLight.object3D); // 将光源添加到场景
```

### 2.4 全局光照(GlobalIlluminationComponent)

`GlobalIlluminationComponent` 是一个用于实现全局光照效果的组件，支持间接光照和环境光遮蔽等高级光照特性。

#### 属性说明

| 属性名        | 类型    | 默认值 | 描述                 |
| ------------- | ------- | ------ | -------------------- |
| `enabled`     | boolean | true   | 是否启用全局光照。   |
| `intensity`   | number  | 1.0    | 全局光照强度。       |
| `bounces`     | number  | 3      | 光线反弹次数。       |
| `resolution`  | number  | 256    | 光照贴图分辨率。     |
| `aoEnabled`   | boolean | true   | 是否启用环境光遮蔽。 |
| `aoRadius`    | number  | 1.0    | 环境光遮蔽半径。     |
| `aoIntensity` | number  | 1.0    | 环境光遮蔽强度。     |

#### 方法说明

| 方法名     | 描述                 |
| ---------- | -------------------- |
| `init()`   | 初始化全局光照参数。 |
| `start()`  | 启用全局光照组件。   |
| `stop()`   | 禁用全局光照组件。   |
| `update()` | 更新全局光照状态。   |
| `debug()`  | 调试用方法。         |

#### 示例代码

```typescript
import { Scene3D, Camera3D, GlobalIlluminationComponent } from "@rings/core";

// 创建场景和相机
const scene = new Scene3D();
const camera = new Camera3D();
camera.perspective(60, 1.0, 0.1, 1000);

// 创建全局光照组件
const gi = new GlobalIlluminationComponent();
gi.intensity = 0.8; // 设置全局光照强度
gi.bounces = 2; // 设置光线反弹次数
gi.aoRadius = 0.5; // 设置环境光遮蔽半径
scene.addComponent(gi); // 将组件添加到场景
```

### 全局光照属性设置(Engine3D.setting.gi)

`Engine3D.setting.gi` 是用于配置全局光照(GI)相关参数的设置对象。

#### 属性说明

| 属性名                                        | 类型    | 默认值          | 描述                                             |
| --------------------------------------------- | ------- | --------------- | ------------------------------------------------ |
| `enable`                                      | boolean | `false`         | 是否启用全局光照（GI）。                         |
| `offsetX` / `offsetY` / `offsetZ`             | number  | `0`             | 光照探针的偏移量（X/Y/Z 轴）。                   |
| `probeSpace`                                  | number  | `64`            | 探针之间的间距（单位：米）。                     |
| `probeXCount` / `probeYCount` / `probeZCount` | number  | `4` / `2` / `4` | 探针在 X/Y/Z 轴上的数量。                        |
| `probeSize`                                   | number  | `32`            | 单个探针的尺寸（单位：像素）。                   |
| `probeSourceTextureSize`                      | number  | `2048`          | 探针源纹理的分辨率。                             |
| `octRTMaxSize`                                | number  | `2048`          | 八叉树渲染目标的最大尺寸。                       |
| `octRTSideSize`                               | number  | `16`            | 八叉树渲染目标的单边尺寸。                       |
| `maxDistance`                                 | number  | `64 * 1.73`     | 光照的最大影响距离。                             |
| `normalBias`                                  | number  | `0.25`          | 法线偏移量，用于减少阴影失真。                   |
| `depthSharpness`                              | number  | `1`             | 深度锐度，控制光照边缘的锐利程度。               |
| `hysteresis`                                  | number  | `0.98`          | 滞后系数，用于平滑光照变化（值越小，反应越慢）。 |
| `lerpHysteresis`                              | number  | `0.01`          | 插值滞后系数，防止闪烁。                         |
| `irradianceChebyshevBias`                     | number  | `0.01`          | 减少漏光的偏差值。                               |
| `rayNumber`                                   | number  | `144`           | 每条光线的采样数。                               |
| `irradianceDistanceBias`                      | number  | `32`            | 光照距离的偏差值。                               |
| `indirectIntensity`                           | number  | `1.0`           | 间接光强度。                                     |
| `ddgiGamma`                                   | number  | `2.2`           | DDGI（动态漫反射全局光照）的伽马值。             |
| `bounceIntensity`                             | number  | `0.025`         | 光线反弹的强度。                                 |
| `probeRoughness`                              | number  | `1`             | 探针的粗糙度。                                   |
| `realTimeGI`                                  | boolean | `false`         | 是否启用实时全局光照（性能开销较大）。           |
| `debug`                                       | boolean | `false`         | 是否启用调试模式（可视化探针或光照贴图）。       |
| `autoRenderProbe`                             | boolean | `false`         | 是否自动渲染探针（动态场景需启用）。             |

#### 示例代码

```typescript
import { Scene3D, Camera3D, Engine3D } from "@rings/core";

// 创建场景和相机
const scene = new Scene3D();
const camera = new Camera3D();
camera.perspective(60, 1.0, 0.1, 1000);

// 配置全局光照（GI）
Engine3D.setting.gi.enable = true; // 启用 GI
Engine3D.setting.gi.probeSpace = 128; // 增大探针间距
Engine3D.setting.gi.indirectIntensity = 1.5; // 增强间接光
Engine3D.setting.gi.debug = true; // 启用调试模式

// 启动引擎
Engine3D.start(scene, camera);
Engine3D.setting.gi.specularIntensity = 0.5;
Engine3D.setting.gi.bounces = 2;
Engine3D.setting.gi.apply(); // 应用设置

// 将相机添加到场景
scene.addChild(camera.object3D);
```

### 3. 阴影设置(Engine3D.setting.shadow)

`Engine3D.setting.shadow` 是用于配置阴影相关参数的设置对象。

#### 属性说明

| 属性名             | 类型    | 默认值   | 描述                                   |
| ------------------ | ------- | -------- | -------------------------------------- |
| `enable`           | boolean | `true`   | 是否启用阴影。                         |
| `type`             | string  | `"HARD"` | 阴影类型（`"HARD"` 或 `"SOFT"`）。     |
| `pointShadowBias`  | number  | `0.0005` | 点光源阴影的偏移量。                   |
| `shadowSize`       | number  | `2048`   | 阴影贴图的分辨率（单位：像素）。       |
| `pointShadowSize`  | number  | `1024`   | 点光源阴影贴图的分辨率（单位：像素）。 |
| `shadowSoft`       | number  | `0.005`  | 阴影边缘模糊程度。                     |
| `shadowBound`      | number  | `100`    | 阴影的最大影响范围（单位：米）。       |
| `shadowBias`       | number  | `0.05`   | 阴影偏移量，用于减少阴影失真。         |
| `needUpdate`       | boolean | `true`   | 是否需要更新阴影贴图。                 |
| `autoUpdate`       | boolean | `true`   | 是否自动更新阴影贴图。                 |
| `updateFrameRate`  | number  | `2`      | 阴影贴图更新的帧率。                   |
| `csmMargin`        | number  | `0.1`    | 级联阴影贴图的边界扩展量。             |
| `csmScatteringExp` | number  | `0.7`    | 级联阴影的散射系数。                   |
| `csmAreaScale`     | number  | `0.4`    | 级联阴影的区域缩放系数。               |
| `debug`            | boolean | `false`  | 是否启用调试模式（可视化阴影贴图）。   |

#### 示例代码

```typescript
import { Scene3D, Camera3D, Engine3D } from "@rings/core";

// 创建场景和相机
const scene = new Scene3D();
const camera = new Camera3D();
camera.perspective(60, 1.0, 0.1, 1000);

// 配置阴影参数
Engine3D.setting.shadow.enable = true; // 启用阴影
Engine3D.setting.shadow.type = "SOFT"; // 使用软阴影
Engine3D.setting.shadow.shadowSize = 4096; // 提高阴影贴图分辨率
Engine3D.setting.shadow.debug = true; // 启用调试模式

// 启动引擎
Engine3D.start(scene, camera);
entity.addComponent(MaterialComponent, {
  type: "standard",
  color: 0xff0000,
  roughness: 0.5,
  metalness: 0.0,
});
```

#### 属性说明

| 属性名            | 类型    | 默认值     | 描述                                                                    |
| ----------------- | ------- | ---------- | ----------------------------------------------------------------------- |
| type              | string  | "standard" | 材质类型："standard"(标准),"basic"(基础),"phong"(冯氏),"physical"(物理) |
| color             | number  | 0xffffff   | 基础颜色，十六进制 RGB 格式                                             |
| roughness         | number  | 0.5        | 表面粗糙度(0.0-1.0)，0 表示完全光滑                                     |
| metalness         | number  | 0.0        | 金属质感(0.0-1.0)，1 表示完全金属                                       |
| emissive          | number  | 0x000000   | 自发光颜色                                                              |
| emissiveIntensity | number  | 1.0        | 自发光强度                                                              |
| transparent       | boolean | false      | 是否透明                                                                |
| opacity           | number  | 1.0        | 透明度(0.0-1.0)，1 表示完全不透明                                       |
| wireframe         | boolean | false      | 是否显示为线框模式                                                      |
| side              | number  | 2          | 渲染面：0(背面),1(正面),2(双面)                                         |

### 5. 纹理组件(TextureComponent)

管理材质使用的纹理贴图

```javascript
entity.addComponent(TextureComponent, {
  baseColor: "textures/diffuse.jpg",
  normalMap: "textures/normal.png",
});
```

#### 属性说明

| 属性名          | 类型    | 默认值 | 描述                                                 |
| --------------- | ------- | ------ | ---------------------------------------------------- |
| baseColor       | string  | ""     | 基础颜色贴图路径，控制物体表面颜色                   |
| normalMap       | string  | ""     | 法线贴图路径，用于表面细节凹凸效果                   |
| roughnessMap    | string  | ""     | 粗糙度贴图路径，控制表面粗糙度分布                   |
| metalnessMap    | string  | ""     | 金属度贴图路径，控制表面金属质感分布                 |
| aoMap           | string  | ""     | 环境光遮蔽贴图路径，增强表面阴影细节                 |
| emissiveMap     | string  | ""     | 自发光贴图路径，控制表面发光区域                     |
| displacementMap | string  | ""     | 置换贴图路径，实际改变几何形状                       |
| alphaMap        | string  | ""     | 透明度贴图路径，控制透明区域                         |
| wrapS           | number  | 1001   | 水平重复方式：1000(不重复),1001(重复),1002(镜像重复) |
| wrapT           | number  | 1001   | 垂直重复方式：1000(不重复),1001(重复),1002(镜像重复) |
| repeat          | Vector2 | (1,1)  | 纹理重复次数                                         |
| offset          | Vector2 | (0,0)  | 纹理偏移量                                           |

### 4. 网格渲染器(MeshRenderer)

`MeshRenderer` 是用于渲染网格的核心组件，负责将几何体和材质组合成可视对象。

#### 属性说明

| 属性名          | 类型       | 默认值       | 描述                                                                 |
|----------------|------------|--------------|----------------------------------------------------------------------|
| `geometry`     | `Geometry` | `undefined`  | 几何体对象，定义物体的形状（如立方体、球体等）。                     |
| `material`     | `Material` | `undefined`  | 材质对象，定义物体的表面属性（如颜色、纹理、光照效果等）。           |
| `castShadow`   | `boolean`  | `false`      | 是否投射阴影到其他物体。                                             |
| `receiveShadow`| `boolean`  | `false`      | 是否接收其他物体投射的阴影。                                         |
| `frustumCulled`| `boolean`  | `true`       | 是否启用视锥体剔除（优化性能）。                                     |
| `visible`      | `boolean`  | `true`       | 是否可见。                                                          |

#### 方法说明

| 方法名                | 描述                                                                 |
|----------------------|----------------------------------------------------------------------|
| `setGeometry(geometry)` | 设置几何体对象。                                                   |
| `setMaterial(material)` | 设置材质对象。                                                     |
| `update()`           | 更新网格渲染器的状态（通常在修改几何体或材质后调用）。             |

#### 示例代码

```typescript
import { Object3D, MeshRenderer, BoxGeometry } from '@rings/core';

// 创建一个立方体网格
const cube = new Object3D();
const geometry = new BoxGeometry(1, 1, 1); // 创建立方体几何体
const material = new Material(); // 创建材质（假设 Material 已定义）

// 添加 MeshRenderer 组件
const meshRenderer = cube.addComponent(MeshRenderer);
meshRenderer.geometry = geometry;
meshRenderer.material = material;
meshRenderer.castShadow = true;
meshRenderer.receiveShadow = true;

// 将立方体添加到场景
scene.addChild(cube);
```

### 6. 几何体组件(GeometryComponent)

定义物体基础形状

```javascript
entity.addComponent(GeometryComponent, {
  type: "box",
  width: 1,
  height: 1,
  depth: 1,
});
```

#### 属性说明

| 属性名         | 类型    | 默认值       | 描述                                                                    |
| -------------- | ------- | ------------ | ----------------------------------------------------------------------- |
| type           | string  | "box"        | 几何体类型："box"(立方体),"sphere"(球体),"cylinder"(圆柱),"plane"(平面) |
| width          | number  | 1            | 宽度(立方体、平面)                                                      |
| height         | number  | 1            | 高度(立方体、圆柱)                                                      |
| depth          | number  | 1            | 深度(立方体)                                                            |
| radius         | number  | 1            | 半径(球体、圆柱)                                                        |
| widthSegments  | number  | 1            | 宽度分段数(提高曲面精度)                                                |
| heightSegments | number  | 1            | 高度分段数(提高曲面精度)                                                |
| depthSegments  | number  | 1            | 深度分段数(提高曲面精度)                                                |
| radialSegments | number  | 8            | 径向分段数(圆柱、球体)                                                  |
| openEnded      | boolean | false        | 圆柱体是否无顶无底                                                      |
| thetaStart     | number  | 0            | 起始角度(弧度)                                                          |
| thetaLength    | number  | Math.PI \* 2 | 覆盖角度(弧度)                                                          |

### 7. 网格组件(MeshComponent)

组合几何体和材质的可视对象

```javascript
entity.addComponent(MeshComponent, {
  geometry: "box",
  material: "standard",
});
```

#### 属性说明

| 属性名           | 类型    | 默认值     | 描述                     |
| ---------------- | ------- | ---------- | ------------------------ |
| geometry         | string  | "box"      | 引用的几何体名称         |
| material         | string  | "standard" | 引用的材质名称           |
| castShadow       | boolean | true       | 是否投射阴影             |
| receiveShadow    | boolean | true       | 是否接收阴影             |
| frustumCulled    | boolean | true       | 是否启用视锥体剔除       |
| renderOrder      | number  | 0          | 渲染顺序，数值大的后渲染 |
| visible          | boolean | true       | 是否可见                 |
| userData         | object  | {}         | 自定义数据对象           |
| matrixAutoUpdate | boolean | true       | 是否自动更新变换矩阵     |
| position         | Vector3 | (0,0,0)    | 局部空间位置             |
| rotation         | Euler   | (0,0,0)    | 局部空间旋转             |
| scale            | Vector3 | (1,1,1)    | 局部空间缩放             |

### 5. 几何体(Geometry)

`@rings/core` 提供了多种内置几何体类型，用于定义物体的基础形状。以下是常用几何体的属性和方法说明。

#### 1. 立方体(BoxGeometry)

```typescript
import { BoxGeometry } from '@rings/core';

// 创建立方体几何体
const geometry = new BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
```

| 参数名           | 类型    | 默认值 | 描述                     |
|------------------|---------|--------|--------------------------|
| `width`          | number  | 1      | 立方体的宽度             |
| `height`         | number  | 1      | 立方体的高度             |
| `depth`          | number  | 1      | 立方体的深度             |
| `widthSegments`  | number  | 1      | 宽度方向的分段数         |
| `heightSegments` | number  | 1      | 高度方向的分段数         |
| `depthSegments`  | number  | 1      | 深度方向的分段数         |

#### 2. 球体(SphereGeometry)

```typescript
import { SphereGeometry } from '@rings/core';

// 创建球体几何体
const geometry = new SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
```

| 参数名           | 类型    | 默认值       | 描述                     |
|------------------|---------|--------------|--------------------------|
| `radius`        | number  | 1            | 球体的半径               |
| `widthSegments` | number  | 8            | 水平方向的分段数         |
| `heightSegments`| number  | 6            | 垂直方向的分段数         |
| `phiStart`      | number  | 0            | 水平起始角度（弧度）     |
| `phiLength`     | number  | Math.PI * 2  | 水平覆盖角度（弧度）     |
| `thetaStart`    | number  | 0            | 垂直起始角度（弧度）     |
| `thetaLength`   | number  | Math.PI      | 垂直覆盖角度（弧度）     |

#### 3. 圆柱体(CylinderGeometry)

```typescript
import { CylinderGeometry } from '@rings/core';

// 创建圆柱体几何体
const geometry = new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
```

| 参数名           | 类型    | 默认值       | 描述                     |
|------------------|---------|--------------|--------------------------|
| `radiusTop`     | number  | 1            | 顶部半径                 |
| `radiusBottom`  | number  | 1            | 底部半径                 |
| `height`        | number  | 1            | 圆柱体的高度             |
| `radialSegments`| number  | 8            | 侧面分段数               |
| `heightSegments`| number  | 1            | 高度方向的分段数         |
| `openEnded`     | boolean | false        | 是否无顶无底             |
| `thetaStart`    | number  | 0            | 起始角度（弧度）         |
| `thetaLength`   | number  | Math.PI * 2  | 覆盖角度（弧度）         |

#### 4. 圆环(TorusGeometry)

```typescript
import { TorusGeometry } from '@rings/core';

// 创建圆环几何体
const geometry = new TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
```

| 参数名           | 类型    | 默认值       | 描述                     |
|------------------|---------|--------------|--------------------------|
| `radius`        | number  | 1            | 圆环的半径               |
| `tube`          | number  | 0.4          | 管道的半径               |
| `radialSegments`| number  | 8            | 侧面分段数               |
| `tubularSegments`| number | 6            | 管道分段数               |
| `arc`           | number  | Math.PI * 2  | 圆环的覆盖角度（弧度）   |

#### 5. 平面(PlaneGeometry)

```typescript
import { PlaneGeometry } from '@rings/core';

// 创建平面几何体
const geometry = new PlaneGeometry(width, height, widthSegments, heightSegments);
```

| 参数名           | 类型    | 默认值 | 描述                     |
|------------------|---------|--------|--------------------------|
| `width`         | number  | 1      | 平面的宽度               |
| `height`        | number  | 1      | 平面的高度               |
| `widthSegments` | number  | 1      | 宽度方向的分段数         |
| `heightSegments`| number  | 1      | 高度方向的分段数         |

#### 6. 挤出几何体(ExtrudeGeometry)

```typescript
import { ExtrudeGeometry } from '@rings/core';

// 创建挤出几何体
const geometry = new ExtrudeGeometry(shape, options);
```

| 参数名    | 类型    | 默认值 | 描述                     |
|-----------|---------|--------|--------------------------|
| `shape`   | Shape   | -      | 基础形状（如圆形、矩形） |
| `options` | object  | {}     | 挤出参数（如深度、分段） |

### 6.1 不感光材质(UnLitMaterial)

`UnLitMaterial` 是一种不依赖光照的材质，适用于不需要光照计算的场景（如 UI 元素、特效等）。以下是其核心属性和方法：

```typescript
import { Object3D, MeshRenderer, UnLitMaterial, SphereGeometry } from '@rings/core';

// 创建 UnLitMaterial 实例
const material = new UnLitMaterial({
  baseColor: 0xffffff, // 基础颜色
  alphaCutoff: 0.5,    // Alpha 测试阈值
});

// 创建球体几何体
const geometry = new SphereGeometry(1, 32, 32);

// 创建物体并应用材质
const object = new Object3D();
const renderer = object.addComponent(MeshRenderer);
renderer.material = material;
renderer.geometry = geometry;
```

#### 属性说明

| 属性名              | 类型    | 默认值     | 描述                     |
|---------------------|---------|------------|--------------------------|
| `baseColor`        | number  | 0xffffff   | 基础颜色（十六进制）      |
| `alphaCutoff`      | number  | 0.0        | Alpha 测试阈值（0-1）     |
| `baseMap`         | Texture | null       | 基础颜色贴图             |

#### 方法说明

- **`clone()`**: 克隆当前材质实例。
- **`dispose()`**: 释放材质占用的资源。

### 6. 材质(LitMaterial)

### 7. 纹理基础属性

`Texture` 是纹理的基类，提供了纹理的基本属性和方法，支持多种纹理类型（如 2D 纹理、立方体贴图等）。

#### 属性
- `name`: 纹理名称。
- `url`: 纹理源 URL。
- `format`: 纹理格式（如 `rgba8unorm`）。
- `width` 和 `height`: 纹理的宽度和高度。
- `useMipmap`: 是否启用 Mipmap。
- `flipY`: 是否垂直翻转纹理。
- `isHDRTexture`: 标识是否为 HDR 纹理。
- `isVideoTexture`: 标识是否为视频纹理。
- `magFilter`: 纹理放大过滤模式（如 `linear` 或 `nearest`）。
- `addressModeU`: 纹理 U 轴（水平方向）的寻址模式（如 `repeat`、`clamp-to-edge`）。
- `addressModeV`: 纹理 V 轴（垂直方向）的寻址模式（如 `repeat`、`clamp-to-edge`）。

#### 方法
- `init()`: 初始化纹理。
- `createTextureDescriptor()`: 创建纹理描述符。
- `getGPUTexture()`: 获取 GPU 纹理对象。
- `updateTextureDescription()`: 更新纹理描述。

#### 示例
```typescript
import { Texture } from '@rings/core';

// 创建一个 2D 纹理
const texture = new Texture(512, 512);
texture.name = 'example_texture';
texture.format = 'rgba8unorm';
texture.useMipmap = true;
texture.init();

console.log('Texture created:', texture);
```

### 7. 纹理

#### 7.1 BitmapTexture2D
`BitmapTexture2D` 是基础的 2D 纹理类，支持从图片文件或 Canvas 加载纹理。

**属性**：
- `source`: 纹理源（HTMLCanvasElement、ImageBitmap、OffscreenCanvas 或 HTMLImageElement）。
- `premultiplyAlpha`: 是否预乘 Alpha 通道。

**方法**：
- `load(url: string, loaderFunctions?: LoaderFunctions)`: 从 URL 加载纹理。
- `loadFromBlob(imgData: Blob)`: 从 Blob 加载纹理。

**示例**：
```typescript
import { BitmapTexture2D } from '@rings/core';

const texture = new BitmapTexture2D();
texture.load('path/to/image.png').then(() => {
  console.log('Texture loaded');
});
```

#### 7.2 BitmapTextureCube
`BitmapTextureCube` 是立方体贴图纹理类，支持从 6 张图片或 Canvas 加载纹理。

**属性**：
- `images`: 纹理源数组（HTMLCanvasElement、ImageBitmap 或 OffscreenCanvas）。

**方法**：
- `generateImages(images: any[])`: 从图片数组生成立方体贴图。

**示例**：
```typescript
import { BitmapTextureCube } from '@rings/core';

const cubeTexture = new BitmapTextureCube();
cubeTexture.generateImages([image1, image2, image3, image4, image5, image6]);
```

#### 7.3 LDRTextureCube
`LDRTextureCube` 是低动态范围（LDR）立方体贴图纹理类。

**属性**：
- `ldrImageUrl`: 纹理源 URL。

**方法**：
- `load(url: string, loaderFunctions?: LoaderFunctions)`: 从 URL 加载纹理。

**示例**：
```typescript
import { LDRTextureCube } from '@rings/core';

const ldrTexture = new LDRTextureCube();
ldrTexture.load('path/to/ldr_image.hdr').then(() => {
  console.log('LDR texture loaded');
});
```

#### 7.4 HDRTexture
`HDRTexture` 是高动态范围（HDR）2D 纹理类。

**属性**：
- `isHDRTexture`: 标识是否为 HDR 纹理。

**方法**：
- `load(url: string, loaderFunctions?: LoaderFunctions)`: 从 URL 加载纹理。

**示例**：
```typescript
import { HDRTexture } from '@rings/core';

const hdrTexture = new HDRTexture();
hdrTexture.load('path/to/hdr_image.hdr').then(() => {
  console.log('HDR texture loaded');
});
```

#### 7.5 HDRTextureCube
`HDRTextureCube` 是高动态范围（HDR）立方体贴图纹理类。

**属性**：
- `isHDRTexture`: 标识是否为 HDR 纹理。

**方法**：
- `load(url: string, loaderFunctions?: LoaderFunctions)`: 从 URL 加载纹理。

**示例**：
```typescript
import { HDRTextureCube } from '@rings/core';

const hdrCubeTexture = new HDRTextureCube();
hdrCubeTexture.load('path/to/hdr_cube_image.hdr').then(() => {
  console.log('HDR cube texture loaded');
});
```

`LitMaterial` 是一种基于物理渲染（PBR）的材质，支持光照、阴影和反射效果。以下是其核心属性和方法：

```typescript
import { LitMaterial } from '@rings/core';

// 创建 LitMaterial 实例
const material = new LitMaterial({
  baseColor: 0xffffff, // 基础颜色
  metallic: 0.5,      // 金属度
  roughness: 0.5,     // 粗糙度
  emissive: 0x000000, // 自发光颜色
  emissiveIntensity: 1.0, // 自发光强度
});
```

#### 属性说明

| 属性名              | 类型    | 默认值     | 描述                     |
|---------------------|---------|------------|--------------------------|
| `baseColor`        | number  | 0xffffff   | 基础颜色（十六进制）      |
| `metallic`        | number  | 0.5        | 金属度（0-1）            |
| `roughness`       | number  | 0.5        | 粗糙度（0-1）            |
| `emissive`        | number  | 0x000000   | 自发光颜色（十六进制）    |
| `emissiveIntensity`| number  | 1.0        | 自发光强度（0-1）         |
| `transparent`     | boolean | false      | 是否透明                 |
| `opacity`        | number  | 1.0        | 透明度（0-1）            |
| `alphaTest`      | number  | 0.0        | Alpha 测试阈值（0-1）     |
| `side`           | number  | 0          | 渲染面（0: 正面，1: 背面）|
| `shadowBias`     | number  | 0.0        | 阴影偏移量               |
| `specularColor`  | number  | 0xffffff   | 高光颜色（十六进制）      |
| `materialF0`     | number  | 0.04       | 基础反射率               |
| `envIntensity`   | number  | 1.0        | 环境光强度               |
| `normalScale`    | number  | 1.0        | 法线贴图缩放             |
| `ao`            | number  | 1.0        | 环境光遮蔽强度           |
| `ior`           | number  | 1.5        | 折射率                   |
| `clearcoatFactor`| number  | 0.0        | 清漆层强度               |
| `clearcoatRoughnessFactor`| number | 0.0 | 清漆层粗糙度             |
| `clearcoatColor` | number  | 0xffffff   | 清漆层颜色（十六进制）    |
| `clearcoatWeight`| number  | 1.0        | 清漆层权重               |
| `clearcoatIor`   | number  | 1.5        | 清漆层折射率             |
| `baseMap`        | Texture | null       | 基础颜色贴图             |
| `normalMap`      | Texture | null       | 法线贴图                 |
| `emissiveMap`    | Texture | null       | 自发光贴图               |
| `aoMap`         | Texture | null       | 环境光遮蔽贴图           |
| `maskMap`       | Texture | null       | 遮罩贴图                 |

#### 方法说明

| 方法名              | 参数                  | 返回值 | 描述                     |
|---------------------|-----------------------|--------|--------------------------|
| `setBaseColor`     | `color: number`       | void   | 设置基础颜色             |
| `setMetallic`      | `value: number`       | void   | 设置金属度               |
| `setRoughness`     | `value: number`       | void   | 设置粗糙度               |
| `setEmissive`      | `color: number`       | void   | 设置自发光颜色           |
| `setEmissiveIntensity`| `intensity: number` | void   | 设置自发光强度           |
| `setTransparent`   | `value: boolean`      | void   | 设置是否透明             |
| `setOpacity`      | `value: number`       | void   | 设置透明度               |
| `setAlphaTest`    | `value: number`       | void   | 设置 Alpha 测试阈值       |
| `setSide`        | `side: number`        | void   | 设置渲染面               |
| `setShadowBias`   | `value: number`       | void   | 设置阴影偏移量           |
| `setSpecularColor`| `color: number`       | void   | 设置高光颜色             |
| `setMaterialF0`   | `value: number`       | void   | 设置基础反射率           |
| `setEnvIntensity` | `value: number`       | void   | 设置环境光强度           |
| `setNormalScale`  | `value: number`       | void   | 设置法线贴图缩放         |
| `setAo`          | `value: number`       | void   | 设置环境光遮蔽强度       |
| `setIor`         | `value: number`       | void   | 设置折射率               |
| `setClearcoatFactor`| `value: number`     | void   | 设置清漆层强度           |
| `setClearcoatRoughnessFactor`| `value: number` | void | 设置清漆层粗糙度         |
| `setClearcoatColor`| `color: number`       | void   | 设置清漆层颜色           |
| `setClearcoatWeight`| `value: number`      | void   | 设置清漆层权重           |
| `setClearcoatIor` | `value: number`       | void   | 设置清漆层折射率         |

### 8. 高性能网格组件(InstancedMeshComponent)

优化大量相同物体的渲染性能

```javascript
entity.addComponent(InstancedMeshComponent, {
  baseMesh: "tree",
  count: 100,
  positions: [...],
});
```

#### 属性说明

| 属性名           | 类型            | 默认值 | 描述                             |
| ---------------- | --------------- | ------ | -------------------------------- |
| baseMesh         | string          | ""     | 基础网格名称，所有实例共享的网格 |
| count            | number          | 0      | 实例数量                         |
| positions        | Array           | []     | 实例位置数组，每个元素是 Vector3 |
| rotations        | Array           | []     | 实例旋转数组，每个元素是 Euler   |
| scales           | Array           | []     | 实例缩放数组，每个元素是 Vector3 |
| colors           | Array           | []     | 实例颜色数组，每个元素是 Color   |
| matrixAutoUpdate | boolean         | true   | 是否自动更新实例矩阵             |
| instanceMatrix   | BufferAttribute | null   | 实例变换矩阵数据                 |
| frustumCulled    | boolean         | true   | 是否启用视锥体剔除               |
| visible          | boolean         | true   | 是否可见                         |
| castShadow       | boolean         | true   | 是否投射阴影                     |
| receiveShadow    | boolean         | true   | 是否接收阴影                     |

### 9. 线框组件(WireframeComponent)

为几何体添加线框可视化效果

```javascript
entity.addComponent(WireframeComponent, {
  enabled: true,
  color: 0x00ff00,
  lineWidth: 1,
  dashed: false,
  dashSize: 3,
  gapSize: 1,
});
```

#### 属性说明

| 属性名    | 类型    | 默认值   | 描述                                           |
| --------- | ------- | -------- | ---------------------------------------------- |
| enabled   | boolean | true     | 是否启用线框效果                               |
| color     | number  | 0x00ff00 | 线框颜色，十六进制 RGB 格式                    |
| lineWidth | number  | 1        | 线框宽度(像素)                                 |
| dashed    | boolean | false    | 是否使用虚线样式                               |
| dashSize  | number  | 3        | 虚线片段长度(像素)，仅当 dashed 为 true 时有效 |
| gapSize   | number  | 1        | 虚线间隔长度(像素)，仅当 dashed 为 true 时有效 |
| opacity   | number  | 1.0      | 线框透明度(0.0-1.0)                            |
| depthTest | boolean | true     | 是否启用深度测试，禁用后线框将始终显示在最前面 |
| visible   | boolean | true     | 线框是否可见                                   |

### 10. 辅助线框组件(AuxiliaryWireframeComponent)

通过引用@rings/graphic 获取 Graphic3D 对象，提供高级线框控制功能

```javascript
import { Graphic3D } from "@rings/graphic";

entity.addComponent(AuxiliaryWireframeComponent, {
  graphic: new Graphic3D(),
  autoUpdate: true,
});
```

#### Graphic3D 对象说明

##### 基础属性

| 属性名           | 类型     | 默认值 | 描述                 |
| ---------------- | -------- | ------ | -------------------- |
| geometry         | Geometry | null   | 关联的几何体对象     |
| material         | Material | null   | 关联的材质对象       |
| visible          | boolean  | true   | 是否可见             |
| matrixAutoUpdate | boolean  | true   | 是否自动更新变换矩阵 |
| castShadow       | boolean  | true   | 是否投射阴影         |
| receiveShadow    | boolean  | true   | 是否接收阴影         |

##### 几何体操作方法

| 方法名               | 参数           | 返回值   | 描述           |
| -------------------- | -------------- | -------- | -------------- |
| setGeometry(geom)    | geom: Geometry | void     | 设置几何体     |
| getGeometry()        | -              | Geometry | 获取当前几何体 |
| computeBoundingBox() | -              | void     | 计算包围盒     |

##### 材质控制方法

| 方法名           | 参数          | 返回值   | 描述             |
| ---------------- | ------------- | -------- | ---------------- |
| setMaterial(mat) | mat: Material | void     | 设置材质         |
| getMaterial()    | -             | Material | 获取当前材质     |
| updateMaterial() | -             | void     | 强制更新材质属性 |

##### 渲染控制方法

| 方法名             | 参数                 | 返回值 | 描述             |
| ------------------ | -------------------- | ------ | ---------------- |
| raycast(raycaster) | raycaster: Raycaster | Array  | 执行光线投射检测 |
| updateMatrix()     | -                    | void   | 手动更新变换矩阵 |
| dispose()          | -                    | void   | 释放资源         |

#### 组件属性说明

| 属性名     | 类型      | 默认值 | 描述                        |
| ---------- | --------- | ------ | --------------------------- |
| graphic    | Graphic3D | null   | 关联的 Graphic3D 实例       |
| autoUpdate | boolean   | true   | 是否自动更新 Graphic3D 属性 |
| precision  | number    | 0.01   | 线框计算精度                |

## 基础组件 API 参考表

| 组件类型               | 关键属性                   | 主要方法                       |
| ---------------------- | -------------------------- | ------------------------------ |
| CameraComponent        | type, fov, near, far       | setFOV(), lookAt()             |
| LightComponent         | type, color, intensity     | setIntensity(), setColor()     |
| ShadowComponent        | castShadow, receiveShadow  | enable(), disable()            |
| MaterialComponent      | type, color, roughness     | setColor(), setRoughness()     |
| TextureComponent       | baseColor, normalMap       | load(), dispose()              |
| GeometryComponent      | type, width, height, depth | update(), computeBoundingBox() |
| MeshComponent          | geometry, material         | clone(), raycast()             |
| InstancedMeshComponent | baseMesh, count, positions | setPositionAt(), getMatrixAt() |

[返回组件概述 →](/components)
