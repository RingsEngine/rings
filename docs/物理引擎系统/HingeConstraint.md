# 铰链约束（HingeConstraint）

```javascript
import { HingeConstraint } from "@rings-webgpu/physics";
```

- **功能**：封装 Bullet `btHingeConstraint`，将两个刚体（或单刚体与世界）约束为**仅绕一根轴**相对旋转；适用于门轴、机械关节、摆等。
- **构造路径**（由 `targetRigidbody` 与 `useTwoBodiesTransformOverload` 决定，见 `createConstraint`）：

| 条件 | 使用的 Ammo 重载 | 说明 |
|------|------------------|------|
| 无 `targetRigidbody` | 单刚体 + `frameA`（`pivotSelf` + `rotationSelf`） | 门、摆锤等：铰链点与朝向由自身局部框定义 |
| 有 `targetRigidbody` 且 `useTwoBodiesTransformOverload === false`（默认） | 双刚体 **枢轴 + 轴**：`pivotInA`、`pivotInB`、`axisSelf`、`axisTarget` | 最常用；两锚点 + 两局部轴应对齐（通常取世界同一方向） |
| 有 `targetRigidbody` 且 `useTwoBodiesTransformOverload === true` | 双刚体 **双变换**：`frameA` / `frameB`（`pivot*` + `rotation*`） | 需完整控制两侧约束框时用 |

- **继承自 `ConstraintBase`**：

| 属性 | 说明 |
|------|------|
| `targetRigidbody` | 目标刚体组件；不赋值则走**单刚体**铰链 |
| `pivotSelf` | 自身刚体局部空间中的铰链锚点（`Vector3`） |
| `pivotTarget` | 目标刚体局部空间中的铰链锚点（双刚体模式） |
| `rotationSelf` | 自身约束框旋转（`Quaternion`，默认 `identity`） |
| `rotationTarget` | 目标约束框旋转（双刚体 **Transform** 模式使用） |
| `disableCollisionsBetweenLinkedBodies` | 是否禁止两体互相碰撞（默认 `true`） |
| `breakingThreshold` | 断裂脉冲阈值（可选） |
| `constraint` | 同步获取底层 `btHingeConstraint`（未初始化时有警告） |
| `wait()` | `Promise`，待约束加入世界后解析 |
| `resetConstraint()` | 销毁并重建约束（异步） |
| `destroy()` | 销毁约束与组件 |

- **`HingeConstraint` 专有属性**：

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `axisSelf` | `Vector3` | `Vector3.UP` | 自身刚体上**铰链轴方向**（双刚体 **枢轴模式** 使用；建议与目标轴平行、同向） |
| `axisTarget` | `Vector3` | `Vector3.UP` | 目标刚体上铰链轴方向 |
| `useReferenceFrameA` | `boolean` | `true` | 传入 Bullet 构造，是否使用 A 侧参考框架 |
| `useTwoBodiesTransformOverload` | `boolean` | `false` | `true` 时用双 `btTransform` 构造双刚体铰链，**不再**走 `axisSelf` / `axisTarget` 枢轴分支 |

- **方法**：

| 方法 | 说明 |
|------|------|
| `setLimit(low, high, softness, biasFactor, relaxationFactor?)` | 设置**角度限制**（弧度）。`low`/`high`：相对铰链零位的最小/最大角；`softness`：软限制（0–1，越大越“硬”的表述以 Bullet 为准，通常 0.1–0.3）；`biasFactor`：限制恢复力度（常取 0.1–0.5）；`relaxationFactor`：可选，松弛，影响回弹速度。约束创建后若已调用过 `setLimit`，内部会缓存并在重建时再次应用。 |
| `enableAngularMotor(enableMotor, targetVelocity, maxMotorImpulse)` | **铰链马达**：是否启用、`targetVelocity` 目标角速度、`maxMotorImpulse` 最大冲量。用于主动驱动门、关节等。 |
| `limitInfo`（getter） | 只读：当前最近一次 `setLimit` 的参数元组 `[low, high, softness, biasFactor, relaxation?]`（若未设置则可能为 `undefined`） |
| `motorConfigInfo`（getter） | 只读：当前马达参数 `[enableMotor, targetVelocity, maxMotorImpulse]`（若未调用过 `enableAngularMotor` 则可能为 `undefined`） |

- **组件式用法示例**（与引擎一致）：

```javascript
const hinge = door.addComponent(HingeConstraint);
hinge.targetRigidbody = frameRb; // 无则单刚体铰链
hinge.pivotSelf = new Vector3(0, 1, 0.05);
hinge.pivotTarget = new Vector3(0, 1, 0);
hinge.axisSelf = new Vector3(0, 1, 0);
hinge.axisTarget = new Vector3(0, 1, 0);
hinge.setLimit(-Math.PI / 2, Math.PI / 4, 0.2, 0.3);
// hinge.enableAngularMotor(true, 2.0, 5.0);
```

- **适用场景**：门/窗、机械臂关节、连杆、单轴摆动结构。

- **调参与常见问题**：

  | 现象 | 建议 |
  |------|------|
  | 轴不转或乱转 | 检查 `axisSelf` / `axisTarget` 是否共线同向；枢轴是否在两侧刚体上对齐到同一世界点 |
  | 抖动 | 略降 `setLimit` 的 `biasFactor` 或 `softness`；提高求解迭代（Ammo / `Physics.world` 侧配置） |
  | 穿模 | 缩小 `low`/`high` 范围；加厚碰撞体 |
  | 双刚体模式选错 | 需要完整框时用 `useTwoBodiesTransformOverload = true` 并设置 `rotationSelf` / `rotationTarget` |

#### 可运行示例（HingeConstraint）

组件式铰链：`door.addComponent(HingeConstraint)`，单刚体模式可无 `targetRigidbody`（运行条件同上）。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-hinge-tab" id="rings-phy-hinge-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-hinge-tab" id="rings-phy-hinge-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-hinge-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-hinge-tab-preview"],
    .rings-quick-demo #rings-phy-hinge-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-hinge-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-hinge-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-hinge-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-hinge-tab-preview">示例</label>
    <label for="rings-phy-hinge-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/physics-hinge-demo.html" title="Rings 物理：铰链" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-hinge-demo.html

要点：targetRigidbody；pivotSelf / pivotTarget；axisSelf / axisTarget；setLimit；可选 useTwoBodiesTransformOverload、enableAngularMotor</code></pre>
  </div>
</div>

