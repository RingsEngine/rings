# 物理世界（Physics）

核心物理模拟模块，提供刚体动力学、碰撞检测和物理材质系统。

各功能点（`Physics` 初始化、`CollisionShapeUtil`、`Rigidbody`、调试与拖拽、事件与 `GhostTrigger`、`ClothSoftbody`、铰链与点对点约束等）在**对应小节正文之后**内嵌 **`rings-quick-demo`**（示例 / 代码 切换 + `iframe`），与《组件系统》中光照、网格等文档一致；示例脚本从 **unpkg** 加载 **`@rings-webgpu/core`** 与 **`@rings-webgpu/physics@0.0.2`**，文档站需以 **HTTP(S)** 打开以便 iframe 与 WebGPU 正常工作。

#### 导入方式

```javascript
// 物理引擎主模块
import { Physics } from "@rings-webgpu/physics";
// 刚体组件
import { Rigidbody } from "@rings-webgpu/physics";
// 碰撞体工具
import { CollisionShapeUtil } from "@rings-webgpu/physics";
// 碰撞体形状
import { BoxColliderShape, SphereColliderShape, CapsuleColliderShape } from "@rings-webgpu/core";
```

#### 核心功能

- 刚体动力学模拟
- 多种碰撞体形状(Box, Sphere, Capsule, Mesh)
- 物理材质系统
- 射线检测和扫射检测
- 物理事件系统(碰撞、触发)

#### 详细属性说明

基于源码 `packages/physics/Physics.ts` 的实际实现：

| 属性            | 类型    | 默认值       | 描述                      | 源码对应 |
| --------------- | ------- | ------------ | ------------------------- | -------- |
| gravity         | Vector3 | (0, -9.8, 0) | 全局重力加速度向量        | ✅ `_gravity` |
| maxSubSteps     | number  | 10           | 最大子步数量              | ✅ `maxSubSteps` |
| fixedTimeStep   | number  | 1/60         | 固定物理更新时间步长(秒)  | ✅ `fixedTimeStep` |

**注意**：源码中Physics类主要提供基础物理世界配置，部分高级属性如solverIterations等需要通过刚体组件或Ammo.js直接配置。

#### 属性使用示例

```javascript
// 配置物理世界参数（Physics 类仅有 gravity / fixedTimeStep / maxSubSteps 等）
Physics.gravity = new Vector3(0, -15, 0); // 增强重力
Physics.fixedTimeStep = 1 / 90; // 90Hz 固定子步
Physics.maxSubSteps = 10;

// 求解迭代次数、CCD 等不在 Physics 上暴露，需对 btRigidBody / Ammo 直接配置

// 获取当前配置
console.log("当前重力:", Physics.gravity);
console.log("物理步长:", Physics.fixedTimeStep);
```

#### 常用方法

基于源码 `packages/physics/Physics.ts` 和实际使用：

```javascript
// 初始化：需业务侧显式 await，核心引擎不会自动调用 Physics.init
import { Physics, Ammo } from "@rings-webgpu/physics";

await Physics.init({ useSoftBody: false, useDrag: false });

// 设置重力
Physics.gravity = new Vector3(0, -9.8, 0);

// 设置物理模拟参数
Physics.fixedTimeStep = 1 / 60;
Physics.maxSubSteps = 10;

// 每帧步进：需在渲染循环中调用（默认 timeStep = Time.delta * 0.001）
Physics.update();

// 射线检测：使用 Ammo API
const rayCallback = new Ammo.ClosestRayResultCallback(fromVec, toVec);
Physics.world.rayTest(fromVec, toVec, rayCallback);

// 调试绘制：先 initDebugDrawer，再使用 debugDrawer
// Physics.initDebugDrawer(graphic3D, options);
// Physics.debugDrawer.enable = true;
```

**注意**：源码中 Physics 类主要管理物理世界，具体材质创建、约束添加等功能需要通过刚体组件或 Ammo.js API 实现。

#### 可运行示例（Physics 初始化与步进 + 场景）

示例 HTML 在 **`import` 中直接写 URL**：**`https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js`** 与 **`https://unpkg.com/@rings-webgpu/physics@0.0.2/dist/physics.es.js`**。因 **`physics.es.js`** 仍以裸说明符依赖 **`@rings-webgpu/core`** 与 **`@rings-webgpu/ammo`**，页面需在 **`<head>`** 内加入 **`type="importmap"`**，将二者映射到与主脚本一致的 unpkg URL（见各 `physics-*-demo.html`）。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-basics-tab" id="rings-phy-basics-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-basics-tab" id="rings-phy-basics-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-basics-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-basics-tab-preview"],
    .rings-quick-demo #rings-phy-basics-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-basics-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-basics-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-basics-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-basics-tab-preview">示例</label>
    <label for="rings-phy-basics-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/physics-basics-demo.html" title="Rings 物理：世界与刚体基础" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-basics-demo.html

要点：
• `script type="importmap"`：`@rings-webgpu/core` → 同上 `rings.es.js` URL，`@rings-webgpu/ammo` → `https://unpkg.com/@rings-webgpu/ammo@0.2.1/ammo.js`
• `import { … } from 'https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js'`；`import { Physics, … } from 'https://unpkg.com/@rings-webgpu/physics@0.0.2/dist/physics.es.js'`
• await Engine3D.init({ canvasConfig: { canvas }, beforeRender: () => { if (Physics.isInited) Physics.update(); } })
• await Physics.init({ useSoftBody: false, useDrag: false })
• 地面 Rigidbody.mass = 0 + ColliderComponent；掉落体 Rigidbody + ColliderComponent</code></pre>
  </div>
</div>

#### 与真实物理/工程实践的差距及待补充

| 类别 | 说明 |
|------|------|
| 仿真模型 | 基于 Bullet 离散时间步与子步，高速物体仍可能穿透；非「连续介质」真实流体/软体。 |
| 单位与尺度 | 建议与渲染统一为米级；重力默认 `(0,-9.8,0)` 为地表近似，未建模纬度/海拔。 |
| 集成方式 | `Physics.init` / `Physics.update` 需业务接入；核心 `Engine3D` 不会自动步进物理。 |
| 变换同步 | 刚体结果常写回 `localPosition` / `localQuaternion`，有父节点时层级与表现需自行校验；`PhysicsTransformSync` 默认关闭。 |
| 形状能力 | `Rigidbody` + `ColliderComponent` 自动建形目前主要为 Box/Capsule/Sphere；复杂形状需 `CollisionShapeUtil` 或自定义。 |
| 包依赖 | 已发布包 peer 为 **`@rings-webgpu/core`**，需与主工程核心包版本一致。 |

