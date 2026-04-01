# 锥形扭曲约束（ConeTwistConstraint）

```javascript
import { ConeTwistConstraint } from "@rings-webgpu/physics";
```

- **功能**：封装 Bullet `btConeTwistConstraint`，常用于**球窝关节**（肩、髋、万向节简化模型）：在枢轴处约束**相对旋转**——在锥形范围内摆动（两轴 swing），并单独限制绕**锥轴**的扭转（twist）。**不**约束平移（两刚体仍可相对平移，除非与其它约束或碰撞共同限制）；若需同时锁相对位置，应配合其它约束或刚体几何。
- **约束框**：`pivotSelf` + `rotationSelf` 构成刚体 A 侧 `transformA`，`pivotTarget` + `rotationTarget` 构成 B 侧 `transformB`（双刚体时）。默认 `Quaternion` 为单位时，框与物体默认朝向一致。
- **双刚体 / 单刚体**：有 `targetRigidbody` 时 `new Ammo.btConeTwistConstraint(selfBody, targetBody, transformA, transformB)`；无目标时 `new Ammo.btConeTwistConstraint(selfBody, transformA)`（单刚体与世界）。

- **继承自 `ConstraintBase`**：与铰链、固定等相同——`targetRigidbody`、`pivotSelf`、`pivotTarget`、`rotationSelf`、`rotationTarget`、`disableCollisionsBetweenLinkedBodies`、`breakingThreshold`、`constraint`、`wait()`、`resetConstraint()`、`destroy()`。

- **`ConeTwistConstraint` 专有属性**（均为**弧度**，内部通过 `btConeTwistConstraint.setLimit` 的**索引**写入，见源码注释）：

| 属性 | 说明 | Bullet `setLimit` 索引（当前封装） |
|------|------|--------------------------------------|
| `twistSpan` | 绕局部 **X** 轴的**扭转**允许半角 | `3` |
| `swingSpan2` | 绕 **Z** 的**摆动**允许半角 | `4` |
| `swingSpan1` | 绕 **Y** 的**摆动**允许半角 | `5` |

设置任一属性时，会调用 `this._constraint.setLimit(索引, value)`。若约束尚未创建，值先保存在 `_twistSpan` / `_swingSpan1` / `_swingSpan2`，在 `createConstraint` 末尾再次应用。

源码注释说明：当前所用 Ammo 版本**未**封装柔软度/偏差/松弛等额外参数。

- **方法**：`ConeTwistConstraint` **无**除 `createConstraint`（`protected`）外的专有方法；行为由上述属性与基类 API 决定。

- **组件式用法示例**：

```javascript
const cone = bob.addComponent(ConeTwistConstraint);
cone.targetRigidbody = anchorRb;
cone.pivotSelf = new Vector3(0, 0.48, 0);
cone.pivotTarget = new Vector3(0, -0.38, 0);
cone.swingSpan1 = 0.62;
cone.swingSpan2 = 0.62;
cone.twistSpan = 0.45;
```

#### 可运行示例（ConeTwistConstraint）

静态锚点球 + 动态球，`ConeTwistConstraint` 连接球顶/球底附近枢轴；运行条件与其它物理示例相同。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-cone-tab" id="rings-phy-cone-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-cone-tab" id="rings-phy-cone-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-cone-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-cone-tab-preview"],
    .rings-quick-demo #rings-phy-cone-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-cone-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-cone-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-cone-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-cone-tab-preview">示例</label>
    <label for="rings-phy-cone-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/physics-cone-twist-constraint-demo.html" title="Rings 物理：锥形扭曲约束" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-cone-twist-constraint-demo.html

要点：ConeTwistConstraint；pivotSelf / pivotTarget；swingSpan1 / swingSpan2 / twistSpan；CollisionShapeUtil；Physics.init({ useDrag: true }) 可选</code></pre>
  </div>
</div>
