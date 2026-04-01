# 通用六自由度约束（Generic6DofConstraint）

封装 Bullet 的 **`btGeneric6DofConstraint`**：在**约束局部坐标系**中分别限制三个**线自由度**与三个**角自由度**（每轴为一对上下限）。适合滑槽、万向节式限位、柜门多轴组合等；需要**弹性恢复力**时用 **`Generic6DofSpringConstraint`**（在其上扩展弹簧参数）。

组件挂在**自身刚体**所在的 `Object3D` 上，通过 **`targetRigidbody`** 指向另一 **`Rigidbody`**；若目标为 **`null`**，Ammo 构造为**单刚体对世界**的 6DOF 版本（源码分支 `targetBody == null`）。

```typescript
import { Generic6DofConstraint } from "@rings-webgpu/physics";
```

### 继承自 ConstraintBase 的成员

| 成员 | 说明 |
|------|------|
| **`targetRigidbody`** | 目标 **`Rigidbody`**；两体约束时必填。 |
| **`pivotSelf`** | **`Vector3`**，自身刚体局部空间中的约束框原点（`frameInA` 的平移）。 |
| **`pivotTarget`** | **`Vector3`**，目标刚体局部空间中的约束框原点（`frameInB` 的平移）。 |
| **`rotationSelf`** | **`Quaternion`**，自身侧约束框旋转（`frameInA`）；默认单位四元数。 |
| **`rotationTarget`** | **`Quaternion`**，目标侧约束框旋转（`frameInB`）。 |
| **`disableCollisionsBetweenLinkedBodies`** | 加入世界时是否禁止两刚体间碰撞（默认 **`true`**）。 |
| **`breakingThreshold`** | 断裂冲量阈值；越大越不易断开。 |
| **`constraint`** | 只读，底层 **`Ammo.btGeneric6DofConstraint`**（未初始化时访问会 `console.warn`）。 |
| **`wait()`** | **`Promise<btGeneric6DofConstraint>`**，等待 **`start()`** 完成后再取底层实例。 |
| **`resetConstraint()`** | 销毁当前约束并 **`start()`** 重建（异步）。 |
| **`destroy()`** | 从世界移除约束并清理引用。 |

**`start()`**（基类）：要求本物体带 **`Rigidbody`**；若自身或目标刚体尚未初始化会 **`await wait()`**；再调用子类 **`createConstraint`**，最后 **`Physics.world.addConstraint`**。

### 本类属性

| 属性 | 说明 |
|------|------|
| **`linearLowerLimit`** | **`Vector3`**，三轴线位移**下界**（米，约束空间）。默认 **`(-1e30, -1e30, -1e30)`** 近似无限制。 |
| **`linearUpperLimit`** | **`Vector3`**，三轴线位移**上界**。默认 **`(1e30, 1e30, 1e30)`**。 |
| **`angularLowerLimit`** | **`Vector3`**，三轴角位移**下界**（**弧度**）。默认 **`(-π, -π, -π)`**。 |
| **`angularUpperLimit`** | **`Vector3`**，三轴角位移**上界**。默认 **`(π, π, π)`**。 |
| **`useLinearFrameReferenceFrame`** | **`boolean`**，传入 Ammo 构造的 `useLinearFrameReferenceFrame`（默认 **`true`**）。**必须在约束创建前设定**；创建后修改不会重建约束，需 **`resetConstraint()`** 才生效。 |

赋值时会 **`copyFrom`** 到内部缓存，并在 **`_constraint` 已存在**时同步调用 **`setLinearLowerLimit`** / **`setLinearUpperLimit`** / **`setAngularLowerLimit`** / **`setAngularUpperLimit`**。

### 本类方法

除继承的 **`wait` / `resetConstraint` / `destroy`** 外，无额外公开实例方法；**`createConstraint`** 为 **`protected`**，由 **`start()`** 调用。

### 轴与限位含义（Bullet）

- 线位移、角位移均在 **`frameInA` / `frameInB`** 定义的**约束框**下解释；两框在初始对齐关系下，各轴的「滑动 / 转动」方向由 **`rotationSelf` / `rotationTarget`** 与物体世界姿态共同决定。
- **锁定某一轴线位移**：令该轴 **`linearLowerLimit[i] === linearUpperLimit[i]`**（常为 `0`）。
- **近似放开某一轴**：将该轴上下限设为很大相反数（或使用类内默认大值）。
- 本封装**未暴露** Bullet 的**马达** API；若需 `enableMotor` / `setMotorTarget` 等，可在 **`await wait()`** 后对 **`constraint`** 调用 Ammo 绑定中已暴露的方法（视 `@rings-webgpu/ammo` 类型定义而定）。

### 使用示例

```typescript
import { Object3D, Vector3 } from "@rings-webgpu/core";
import {
  Physics,
  Rigidbody,
  Generic6DofConstraint,
  CollisionShapeUtil,
} from "@rings-webgpu/physics";

await Physics.init({});

const frame = new Object3D();
/* MeshRenderer + Rigidbody, mass = 0 … */
const frameRb = frame.getComponent(Rigidbody);

const block = new Object3D();
/* MeshRenderer + Rigidbody, mass > 0 … */
scene.addChild(frame);
scene.addChild(block);

const gen6 = block.addComponent(Generic6DofConstraint);
gen6.targetRigidbody = frameRb;
gen6.pivotSelf.setTo(0, 0.3, 0);
gen6.pivotTarget.setTo(0, -0.95, 0);
gen6.linearLowerLimit = new Vector3(-0.02, -0.85, -0.02);
gen6.linearUpperLimit = new Vector3(0.02, 0.85, 0.02);
gen6.angularLowerLimit = new Vector3(-0.15, -0.15, -0.15);
gen6.angularUpperLimit = new Vector3(0.15, 0.15, 0.15);

const bt = await gen6.wait();
// 可选：使用 bt 调用 Ammo 层额外 API
```

### 使用注意

1. **组件顺序**：在 **`scene.addChild`** 触发 **`start()`** 前，应已设置好 **`targetRigidbody`**、**`pivot*`**、**`rotation*`** 及各类 **limit**（**`useLinearFrameReferenceFrame`** 也须在创建前确定）。
2. **与 SliderConstraint**：若仅需沿**单轴**滑动且要用**线性马达**，优先 **`SliderConstraint`**；6DOF 适合多轴组合限位。
3. **`Physics.TEMP_TRANSFORM`**：创建约束时基类/子类会使用全局临时 **`btTransform`**，避免在同帧其它逻辑中与其并发复用。

### 可运行示例（Generic6DofConstraint）

**1 个静态横梁锚点 + 10 个动态链节**，用 **10 个** `Generic6DofConstraint` 串联（第 `i` 节约束挂在第 `i` 节刚体上，`targetRigidbody` 为第 `i-1` 节，`i=0` 时指向横梁）。单节线/角限位与 **`physics-constraints-showcase-demo.html`** 中单组 Generic6Dof 思路相近，可拖拽任一节。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-6dof-tab" id="rings-phy-6dof-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-6dof-tab" id="rings-phy-6dof-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-6dof-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-6dof-tab-preview"],
    .rings-quick-demo #rings-phy-6dof-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-6dof-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-6dof-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-6dof-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-6dof-tab-preview">示例</label>
    <label for="rings-phy-6dof-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff; min-height: 420px;">
    <iframe src="examples/physics-generic-6dof-constraint-demo.html" title="Rings 物理：Generic6DofConstraint" style="width: 100%; min-height: 420px; border: none; display: block;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-generic-6dof-constraint-demo.html

要点：循环创建链节 → 第一节约束接横梁，后续各节 targetRigidbody 为上一节；pivotSelf（链节顶）/ pivotTarget（上一节底）；Physics.init({ useDrag: true }) 拖拽。</code></pre>
  </div>
</div>
