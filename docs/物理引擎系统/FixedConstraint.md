# 固定约束（FixedConstraint）

```javascript
import { FixedConstraint } from "@rings-webgpu/physics";
```

- **功能**：封装 Bullet `btFixedConstraint`，将**两个刚体**的相对位姿完全锁定：在物理模拟中，两刚体在约束连接处保持**固定的相对平移与相对旋转**（整体仍可随外力在空间中运动，例如两体一起下落，但彼此不分离、不扭转）。适用于焊接、螺栓连接、刚体组合体等。
- **必须双刚体**：`FixedConstraint` **没有**单刚体模式。若未设置 `targetRigidbody`，`createConstraint` 会 **`throw new Error('FixedConstraint requires a target rigidbody')`**。
- **几何含义**：在各自刚体局部空间中定义两个约束框 `frameInA`、`frameInB`（与 `btFixedConstraint` 一致）。模拟时使 **A 上 `frameInA` 与 B 上 `frameInB` 在世界中重合且朝向一致**，从而锁定两体的相对位姿。
  - `pivotSelf` + `rotationSelf` → `frameInA` 的原点与旋转（刚体 A 为挂载该组件的物体）。
  - `pivotTarget` + `rotationTarget` → `frameInB` 的原点与旋转（刚体 B 为 `targetRigidbody`）。
  - 默认 `rotationSelf` / `rotationTarget` 为 **单位四元数** 时，约束框与各自刚体默认朝向对齐；若需错开焊接角度，应显式设置两侧 `Quaternion`。

- **继承自 `ConstraintBase`**（与铰链、滑动等相同，见上文表格）：`targetRigidbody`（**必填**）、`pivotSelf`、`pivotTarget`、`rotationSelf`、`rotationTarget`、`disableCollisionsBetweenLinkedBodies`、`breakingThreshold`、`constraint`、`wait()`、`resetConstraint()`、`destroy()`。

- **`FixedConstraint` 类自身**：
  - **无**除 `createConstraint` 以外的专有属性或方法；不增加马达、限位等 API。
  - 行为完全由两侧 **枢轴 + 旋转** 与基类字段决定。

| 成员 | 说明 |
|------|------|
| `createConstraint`（`protected`，内部调用） | 使用 `pivotSelf`/`rotationSelf`/`pivotTarget`/`rotationTarget` 构造 `Ammo.btFixedConstraint(selfBody, targetBody, frameInA, frameInB)` |

- **组件式用法示例**：

```javascript
const fixed = partB.addComponent(FixedConstraint);
fixed.targetRigidbody = partA_Rigidbody;
fixed.pivotSelf = new Vector3(0, 0.2, 0);      // B 上连接点
fixed.pivotTarget = new Vector3(0, -0.2, 0);  // A 上对应点
// fixed.rotationSelf = ...; fixed.rotationTarget = ...; // 若需相对旋转偏移再设
```

- **调参提示**：

  | 现象 | 建议 |
  |------|------|
  | 两体分离或抖动 | 检查 `pivotSelf` / `pivotTarget` 是否在两侧局部空间中对应**同一世界位置**；必要时微调碰撞边距或求解器 |
  | 需要“焊死后整体旋转” | 仍只锁**相对**位姿；若要对整组施加旋转，应移动父物体或同时驱动两刚体 |
  | 与碰撞冲突 | 可设 `disableCollisionsBetweenLinkedBodies = true`（默认）减少两体间接触穿透 |

- **可运行示例（单独）**：**`examples/physics-fixed-constraint-demo.html`** — 上下两长方体均为动态刚体，接缝处 `FixedConstraint`；亦可对照 **`physics-constraints-showcase-demo.html`** 七类同屏。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-fixed-tab" id="rings-phy-fixed-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-fixed-tab" id="rings-phy-fixed-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-fixed-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-fixed-tab-preview"],
    .rings-quick-demo #rings-phy-fixed-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-fixed-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-fixed-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-fixed-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-fixed-tab-preview">示例</label>
    <label for="rings-phy-fixed-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/physics-fixed-constraint-demo.html" title="Rings 物理：固定约束" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-fixed-constraint-demo.html

要点：FixedConstraint 必须 targetRigidbody；pivotSelf / pivotTarget 对齐接缝；双动态体 + CollisionShapeUtil</code></pre>
  </div>
</div>

