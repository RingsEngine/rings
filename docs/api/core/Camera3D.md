# Camera3D

## Overview
- 场景相机组件，支持透视/正交投影、视锥体裁剪（Frustum）、CSM 阴影、屏幕/世界坐标转换与 TAA 抖动。

## Hierarchy
- `ComponentBase` → `Camera3D`

## Constructor
- `new Camera3D()`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| fov | 视野角度（度），透视投影参数 | number | 60 | 任意数值 |
| aspect | 宽高比 | number | 1 | — |
| near | 近裁剪面 | number | 1 | > 0 |
| far | 远裁剪面 | number | 5000 | > near |
| left/right/top/bottom | 正交投影边界 | number | -100/100/100/-100 | — |
| frustumSize | 正交投影视锥体大小（便捷模式） | number | 100 | — |
| viewPort | 相机视口矩形 | Rect | (0,0,canvasW,canvasH) | — |
| frustum | 视锥体（裁剪与包围盒） | Frustum | — | — |
| sh | 球谐光照系数数组 | Float32Array(36) | 全 0 | — |
| isShadowCamera | 是否为阴影相机 | boolean | false | true/false |
| type | 相机类型 | CameraType | perspective | perspective/ortho |
| enableCSM | 启用 CSM 时自动创建 `FrustumCSM` | boolean | false | true/false |
| csm | 级联阴影对象 | FrustumCSM | — | — |
| cubeShadowCameras | 点光阴影用立方体相机组 | CubeCamera[] | [] | — |
| lookTarget | 观察目标点 | Vector3 | (0,0,0) | — |
| projectionMatrix | 投影矩阵（只读） | Matrix4 | — | — |
| projectionMatrixInv | 投影矩阵逆（只读） | Matrix4 | — | — |
| viewMatrix | 视图矩阵（只读） | Matrix4 | — | — |
| vMatrixInv | 视图矩阵逆（只读） | Matrix4 | — | — |
| pvMatrix | 投影-视图矩阵（只读） | Matrix4 | — | — |
| pvMatrixInv | 投影-视图逆矩阵（只读） | Matrix4 | — | — |
| cameraToWorld | 相机到世界矩阵（只读） | Matrix4 | — | — |
| ndcToView | NDC 到视图空间矩阵（只读） | Matrix4 | — | — |
| jitterFrameIndex | 抖动帧索引（TAA） | number | 0 | — |
| jitterX/jitterY | 当前帧抖动偏移 | number | 0/0 | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| init | 初始化相机（射线/视锥体/视口/投影与尺寸监听） | — | `void` |
| updateProjection | 根据 `type` 更新投影矩阵 | — | `void` |
| perspective | 设置透视投影 | `fov: number, aspect: number, near: number, far: number` | `void` |
| ortho | 基于尺寸设置正交投影 | `frustumSize: number, near: number, far: number` | `void` |
| orthoOffCenter | 基于边界设置正交投影 | `left: number, right: number, bottom: number, top: number, near: number, far: number` | `void` |
| getShadowBias | 计算阴影偏移值 | `depthTexSize: number` | `number` |
| getShadowWorldExtents | 计算阴影世界空间范围 | — | `number` |
| getCSMShadowBiasScale | 计算 CSM 阴影偏移缩放 | `shadowCamera: Camera3D` | `number` |
| getCSMShadowWorldExtents | 获取指定级联的世界范围 | `index: number` | `number` |
| object3DToScreenRay | 世界坐标转屏幕坐标 | `n: Vector3, target?: Vector3` | `Vector3` |
| screenRayToObject3D | 屏幕坐标转世界坐标（基于 NDC） | `n: Vector3, target?: Vector3` | `Vector3` |
| screenPointToRay | 从屏幕点生成拾取射线 | `x: number, y: number` | `Ray` |
| screenPointToWorld | 屏幕到世界坐标 | `x: number, y: number, z: number` | `Vector3` |
| worldToScreenPoint | 世界到屏幕坐标 | `point: Vector3, target?: Vector3` | `Vector3` |
| lookAt | 使相机朝向目标点 | `pos: Vector3, target: Vector3, up?: Vector3` | `void` |
| onUpdate | 每帧更新（抖动/视锥体/CSM） | — | `void` |
| enableJitterProjection | 启用/禁用投影抖动（TAA） | `value: boolean` | `void` |
| unProject | 屏幕到视图/世界的反投影辅助 | `nX: number, nY: number, sZ: number, target?: Vector3` | `Vector3` |
| getWorldDirection | 获取世界空间朝向向量 | `target?: Vector3` | `Vector3` |

## Examples
```ts
const cameraNode = new Object3D();
const camera = cameraNode.addComponent(Camera3D);
camera.perspective(60, Engine3D.aspect, 0.1, 2000);
camera.enableJitterProjection(true);
```


