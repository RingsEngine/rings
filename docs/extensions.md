# 扩展组件

## 1. 物理引擎系统

`@rings-webgpu/physics` 各 API 已拆分为独立栏目，与「组件系统」同级侧栏：**[物理引擎系统](/物理引擎系统/README)**。按类分页（物理世界、刚体、各类约束等），含可运行 HTML 示例。

## 动画组件系统

骨骼与属性动画、剪辑、事件与口型等说明已拆为独立栏目：**[动画组件系统](/动画组件系统/README)**（侧栏与「组件系统」同级）。

## 扩展组件 API 参考

| 组件类型           | 属性           | 方法            |
| ------------------ | -------------- | --------------- |
| PhysicsComponent   | mass, shape    | applyForce()    |
| AnimationComponent | clips, speed   | play(), stop()  |
| AudioComponent     | source, volume | play(), pause() |

[返回组件系统 →](/components)
