# 物理引擎系统 · 可运行示例

## 运行条件

1. **脚本来源**：示例通过 **unpkg** 加载 **`@rings-webgpu/core@1.0.52`** 与 **`@rings-webgpu/physics@0.0.2`**（`dist/rings.es.js`、`dist/physics.es.js`），**无需**本地 `npm run build:physics` 即可运行已发布版本。`physics.es.js` 内部仍 `import` **`@rings-webgpu/core`** / **`@rings-webgpu/ammo`**，故页面 `<head>` 内含 **`type="importmap"`**，将二者映射到与主脚本一致的 unpkg URL。
2. **HTTP 访问**：在仓库根目录启动静态服务（如 `npx serve .`），用浏览器打开 `http://localhost:端口/docs/examples/physics-basics-demo.html` 等；**勿使用 `file://`**，否则模块与 WebGPU 环境受限。
3. **WebGPU**：需 Chrome/Edge 等，并在 **localhost** 或 **HTTPS** 下打开。

## 示例列表

| 文件 | 内容 |
|------|------|
| `physics-basics-demo.html` | 初始化、步进、静态地面、刚体 + Collider |
| `physics-collision-shapes-demo.html` | `CollisionShapeUtil` 与 `Rigidbody.shape` |
| `physics-hinge-demo.html` | `HingeConstraint` |
| `physics-point-constraint-demo.html` | `PointToPointConstraint` |
| `physics-slider-constraint-demo.html` | `SliderConstraint`（导轨 + 滑块 + 线性马达按钮） |
| `physics-generic-6dof-constraint-demo.html` | `Generic6DofConstraint`×10 串联链（横梁 + 10 链节 + 拖拽） |
| `physics-generic-6dof-spring-constraint-demo.html` | `Generic6DofSpringConstraint` 极简（顶板 + 方块 + 线弹簧） |
| `physics-fixed-constraint-demo.html` | `FixedConstraint`（双动态刚体焊接） |
| `physics-cone-twist-constraint-demo.html` | `ConeTwistConstraint`（球窝式锥摆 + 扭转） |
| `physics-constraints-showcase-demo.html` | 七类约束同屏：`Hinge` / `PointToPoint` / `Slider` / `Fixed` / `ConeTwist` / `Generic6Dof` / `Generic6DofSpring` |
| `physics-ghost-trigger-demo.html` | `GhostTrigger` |
| `physics-drag-demo.html` | `PhysicsDragger`（`useDrag: true`） |
| `physics-contact-processed-util-demo.html` | `ContactProcessedUtil`（碰撞回调注册、忽略列表、`checkCollision` / `performCollisionTest`） |
| `physics-cloth-demo.html` | 软体世界 + `ClothSoftbody` |

各功能点下的 **内嵌 iframe 示例** 见 **[物理引擎系统](../物理引擎系统/README.md)** 各分类文档。

## 本地调试未发布物理包

若需改源码后立刻在示例里验证，可将对应 HTML 中的 physics `import` 改回相对路径 **`../../packages/physics/dist/physics.es.js`**，并执行 **`npm run build:physics`**。
