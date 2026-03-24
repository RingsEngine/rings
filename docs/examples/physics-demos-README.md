# 物理引擎可运行示例

## 运行条件

1. **构建物理包**：在仓库根目录执行 `npm run build:physics`，生成 `packages/physics/dist/physics.es.js`。
2. **HTTP 访问**：在仓库根目录启动静态服务，例如：
   - `npx serve .`
   - 或 `npx http-server .`
3. 浏览器打开：`http://localhost:端口/docs/examples/physics-basics-demo.html`（端口以工具提示为准）。

勿使用 `file://` 直接打开 HTML，否则 import map 与相对路径可能无法正确解析 `@rings-webgpu/physics`。

## 示例列表

| 文件 | 内容 |
|------|------|
| `physics-basics-demo.html` | 初始化、步进、静态地面、刚体 + Collider |
| `physics-collision-shapes-demo.html` | `CollisionShapeUtil` 与 `Rigidbody.shape` |
| `physics-hinge-demo.html` | `HingeConstraint` |
| `physics-point-constraint-demo.html` | `PointToPointConstraint` |
| `physics-ghost-trigger-demo.html` | `GhostTrigger` |
| `physics-drag-demo.html` | `PhysicsDragger`（`useDrag: true`） |
| `physics-cloth-demo.html` | 软体世界 + `ClothSoftbody` |

各功能点下的 **内嵌 iframe 示例** 见 **[扩展组件 — 物理引擎](../extensions.md)** 物理引擎章节（与光照/网格等文档同一套 `rings-quick-demo` 组件）。
