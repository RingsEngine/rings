# 基础组件 API 参考

## 渲染核心组件

### 1. 相机组件(CameraComponent)

控制场景视图和投影设置

```javascript
entity.addComponent(CameraComponent, {
  type: "perspective",
  fov: 60,
  near: 0.1,
  far: 1000,
});
```

#### 属性说明

| 属性名 | 类型   | 默认值        | 描述                                                |
| ------ | ------ | ------------- | --------------------------------------------------- |
| type   | string | "perspective" | 相机类型："perspective"(透视)或"orthographic"(正交) |
| fov    | number | 60            | 视角范围(度)，仅对透视相机有效                      |
| near   | number | 0.1           | 近裁剪面距离，小于此距离的物体不可见                |
| far    | number | 1000          | 远裁剪面距离，大于此距离的物体不可见                |
| aspect | number | 自动计算      | 宽高比，通常根据渲染器尺寸自动设置                  |
| zoom   | number | 1             | 相机缩放系数，仅对正交相机有效                      |

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

### 3. 阴影组件(ShadowComponent)

配置物体投射和接收阴影

```javascript
entity.addComponent(ShadowComponent, {
  castShadow: true,
  receiveShadow: true,
  shadowMapSize: 2048,
});
```

#### 属性说明

| 属性名           | 类型    | 默认值 | 描述                                             |
| ---------------- | ------- | ------ | ------------------------------------------------ |
| castShadow       | boolean | true   | 是否投射阴影到其他物体                           |
| receiveShadow    | boolean | true   | 是否接收其他物体投射的阴影                       |
| shadowMapSize    | number  | 2048   | 阴影贴图分辨率，值越高阴影质量越好但性能消耗越大 |
| shadowBias       | number  | 0.0    | 阴影偏移量，用于消除阴影失真                     |
| shadowNormalBias | number  | 0.0    | 法线方向偏移量，进一步消除阴影失真               |
| shadowRadius     | number  | 1.0    | 阴影边缘模糊半径                                 |
| shadowDarkness   | number  | 0.5    | 阴影暗度系数(0.0-1.0)                            |
| shadowCameraNear | number  | 0.5    | 阴影相机近裁剪面                                 |
| shadowCameraFar  | number  | 500.0  | 阴影相机远裁剪面                                 |

### 4. 材质组件(MaterialComponent)

定义物体表面着色属性

```javascript
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
