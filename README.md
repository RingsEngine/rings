引擎初始化与主循环：

Engine3D.ts 是引擎的核心入口，负责初始化 WebGPU 上下文、渲染管线、时间管理（Time）、输入系统（InputSystem）等。
通过 webGPUContext 管理 GPU 设备、画布和渲染上下文。
渲染管线：

前向渲染：ForwardRenderJob.ts 实现了前向渲染逻辑，包括颜色通道（ColorPassRenderer）和 GUI 渲染（GUIPassRenderer）。
阴影渲染：ShadowMapPassRenderer.ts 处理方向光和点光源的阴影贴图生成。
深度预渲染：PreDepthPassRenderer.ts 优化渲染性能，通过预计算深度减少后续渲染的负载。
后处理：FXAAPost.ts 和 PostRenderer.ts 实现抗锯齿和其他后处理效果。
资源管理：

RTResourceMap.ts 管理动态渲染目标（如 RenderTexture），支持多渲染目标（MRT）和资源复用。
GlobalBindGroup.ts 统一管理全局 Uniform 和绑定组，确保光照、相机等数据的高效传递。
光照系统：

ShadowLightsCollect.ts 收集场景中的光源数据，支持动态阴影计算。
DDGIProbeRenderer.ts 实现动态全局光照（DDGI），通过探针（Probe）间接光照增强场景真实感。
ReflectionRenderer.ts 处理环境反射，支持立方体贴图（CubeMap）和预过滤反射。
组件与实体系统：

ComponentCollect.ts 管理组件的生命周期和更新逻辑，支持自定义组件扩展。
View3D.ts 和 Scene3D.ts 提供场景图（Scene Graph）功能，管理实体（Object3D）的层级关系

采用 "按更新频率 + 功能模块" 的分层策略，典型分组结构如下：

分组 绑定内容 更新频率 示例资源
Group 0 全局帧数据 每帧更新 摄像机矩阵、时间、全局光照
Group 1 渲染 Pass 配置 Pass 级别 阴影参数、后处理设置
Group 2 材质共享数据 材质变更时 纹理采样器、PBR 参数
Group 3 实例数据 每物体更新 模型矩阵、变形目标参数

常用资源预留固定槽位：

Binding 资源类型 说明
0 uniform camera 摄像机矩阵
1 storage lights 光源数据
2-5 材质纹理 diffuse/normal 等
6-7 计算着色器输入 粒子/变形目标数据
