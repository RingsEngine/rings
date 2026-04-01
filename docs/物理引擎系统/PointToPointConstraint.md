# 点对点约束（PointToPointConstraint）

```javascript
import { PointToPointConstraint } from "@rings-webgpu/physics";
```

- **功能**：封装 Bullet `btPoint2PointConstraint`（源码中类名为 `Point2Point`）。在**自身刚体**与**目标刚体**（可选）上各指定一个**局部空间锚点**，约束使这两点在世界坐标系中**尽量重合**，相当于无长度的“球关节”连杆：三轴平移被约束，**不**约束相对旋转（两体仍可相对任意转动），故与 `FixedConstraint`（锁死相对旋转）不同。
- **枢轴**：实现中**仅使用** `pivotSelf`、`pivotTarget` 转为 `btVector3`；**不使用** `rotationSelf` / `rotationTarget`（设置也不参与构造，可忽略）。
- **双刚体模式**：设置 `targetRigidbody` 时，构造 `btPoint2PointConstraint(selfBody, targetBody, pivotInA, pivotInB)`。
- **单刚体模式**：**不**设置 `targetRigidbody` 时，构造 `btPoint2PointConstraint(selfBody, pivotInA)`，用于将刚体上一点约束到世界（具体行为以 Bullet 版本为准，场景中较少用）。

- **继承自 `ConstraintBase`**：

| 属性 / 方法 | 说明 |
|-------------|------|
| `targetRigidbody` | 目标 `Rigidbody` 组件；不赋值则为单刚体约束 |
| `pivotSelf` | 自身刚体局部空间中的锚点（`Vector3`） |
| `pivotTarget` | 目标刚体局部空间中的锚点（双刚体时有效） |
| `rotationSelf` / `rotationTarget` | 本约束**未参与**创建，可忽略 |
| `disableCollisionsBetweenLinkedBodies`、`breakingThreshold` | 同其它约束 |
| `constraint` | 底层 `btPoint2PointConstraint`（初始化前访问有警告） |
| `wait()` | `Promise`，约束加入世界后解析 |
| `resetConstraint()` | 异步销毁并重建 |
| `destroy()` | 销毁约束与组件 |

- **`PointToPointConstraint` 类自身**：无额外属性或方法；逻辑均在 `createConstraint` 内完成。

| 成员 | 说明 |
|------|------|
| `createConstraint`（`protected`） | 根据是否有 `targetBody` 选择 Bullet 单/双刚体构造函数 |

- **组件式用法示例**：

```javascript
const p2p = bob.addComponent(PointToPointConstraint);
p2p.targetRigidbody = anchorRigidbody;
p2p.pivotSelf = new Vector3(0, 0.5, 0);   // bob 局部：例如球顶附近
p2p.pivotTarget = new Vector3(0, -0.45, 0); // anchor 局部：与绳/链另一端对齐
```

- **调参提示**：两锚点应在几何上对应同一“连接点”；摆长由两锚点在世界中的初始距离与动力学共同决定；抖动时可检查质量、阻尼与求解器。

#### 可运行示例（PointToPointConstraint）

静态锚点球 + 动态摆球，枢轴在球体上下端附近；运行条件与其它物理示例相同（unpkg + `importmap` + HTTP(S)）。完整页面见下。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-p2p-tab" id="rings-phy-p2p-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-p2p-tab" id="rings-phy-p2p-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-p2p-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-p2p-tab-preview"],
    .rings-quick-demo #rings-phy-p2p-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-p2p-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-p2p-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-p2p-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-p2p-tab-preview">示例</label>
    <label for="rings-phy-p2p-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/physics-point-constraint-demo.html" title="Rings 物理：点对点约束" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-point-constraint-demo.html

要点：PointToPointConstraint；targetRigidbody；pivotSelf / pivotTarget；CollisionShapeUtil + Rigidbody.shape；Physics.init({ useDrag: true }) 可选</code></pre>
  </div>
</div>
