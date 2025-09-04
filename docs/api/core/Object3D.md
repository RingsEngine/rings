# Object3D

## Overview
- 场景图节点与组件容器，继承自 `Entity`。提供层级关系、组件管理与常用变换访问器，作为大多数可见对象与容器的基础类型。

## Hierarchy
- `Entity` → `Object3D`

## Constructor
- `new Object3D()`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| transform | 变换组件（构造时自动添加并监听本地变换变化） | Transform | — | — |
| isScene3D | 是否为 `Scene3D` | boolean | false | true/false |
| prefabRef | 预制体引用标识 | string | — | — |
| serializeTag | 序列化标记 | SerializeTag | — | — |
| parent | 父级变换 | Transform | — | — |
| parentObject | 父级 `Object3D` | Object3D | — | — |
| localPosition/Rotation/Scale | 本地位置/欧拉角/缩放 | Vector3 | (0,0,0) | — |
| localQuaternion | 本地旋转四元数 | Quaternion | (0,0,0,1) | — |
| x/y/z | 世界空间位置便捷访问器 | number | 0/0/0 | — |
| scaleX/scaleY/scaleZ | 世界空间缩放便捷访问器 | number | 1/1/1 | — |
| rotationX/rotationY/rotationZ | 世界空间欧拉角便捷访问器 | number | 0/0/0 | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| addComponent | 添加并初始化组件，加入待启动队列 | `Ctor<T>, param?: any` | `T` |
| getOrAddComponent | 获取或添加组件 | `Ctor<T>` | `T` |
| removeComponent | 停止并销毁组件 | `Ctor<T>` | `void` |
| hasComponent | 是否包含组件 | `Ctor<T>` | `boolean` |
| getComponent | 获取组件 | `Ctor<T>` | `T` |
| getComponentFromParent | 递归向父层查找组件 | `Ctor<T>` | `T | null` |
| getComponents | 获取当前及子级组件，可选包含禁用组件 | `Ctor<T>, outList?: T[], includeInactive?: boolean` | `T[]` |
| getComponentsExt | 深度优先查找组件（只返回第一个分支命中的） | `Ctor<T>, ret?: T[], includeInactive?: boolean` | `T[]` |
| getComponentsByProperty | 按属性值查找组件（可控制首次命中即返回） | `key: string, value: any, findedAndBreak?: boolean, ret?: T[], includeInactive?: boolean` | `T[]` |
| forChild | 深度遍历仅子级（不含自身） | `(child) => void` | `void` |
| traverse | 深度遍历包含自身 | `(child) => void` | `void` |
| clone | 克隆为新对象（别名：`instantiate`） | — | `Object3D` |
| instantiate | 复制层级与组件（通过 `cloneTo`） | — | `Object3D` |
| notifyChange | 标记变换更新 | — | `void` |
| destroy | 释放对象与组件资源 | `force?: boolean` | `void` |

## Examples
```ts
const root = new Object3D();
const mesh = new Object3D();
root.addChild(mesh);
mesh.x = 1; mesh.y = 2; mesh.z = 3;
```


