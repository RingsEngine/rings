# 通用六自由度弹簧约束（Generic6DofSpringConstraint）

封装 Bullet 的 **`btGeneric6DofSpringConstraint`**：在 **6 个标量自由度**上可同时配置**线/角位移限位**（与 `Generic6DofConstraint` 相同语义）以及**按索引开启的弹簧**（刚度、阻尼、平衡点）。适用于软悬挂、减震关节、可振荡机构等。

类**直接继承 `ConstraintBase<Ammo.btGeneric6DofSpringConstraint>`**，**不**继承 `Generic6DofConstraint`；与后者的关系是「同属 6DOF 家族、Bullet 类型不同」。

```typescript
import { Generic6DofSpringConstraint } from "@rings-webgpu/physics";
```

### 继承自 ConstraintBase 的成员

| 成员 | 说明 |
|------|------|
| **`targetRigidbody`** | 目标 **`Rigidbody`**；两体约束时指向锚点/另一刚体。 |
| **`pivotSelf`** | **`Vector3`**，自身刚体局部空间中约束框原点（`frameInA` 平移）。 |
| **`pivotTarget`** | **`Vector3`**，目标刚体局部空间中约束框原点（`frameInB` 平移）。 |
| **`rotationSelf`** | **`Quaternion`**，`frameInA` 旋转；默认单位四元数。 |
| **`rotationTarget`** | **`Quaternion`**，`frameInB` 旋转。 |
| **`disableCollisionsBetweenLinkedBodies`** | 加入世界时是否禁止两刚体间碰撞（默认 **`true`**）。 |
| **`breakingThreshold`** | 断裂冲量阈值；越大越不易断开。 |
| **`constraint`** | 只读，底层 **`Ammo.btGeneric6DofSpringConstraint`**。 |
| **`wait()`** | **`Promise<btGeneric6DofSpringConstraint>`**，等待 **`start()`** 完成。 |
| **`resetConstraint()`** | 销毁并重建约束。 |
| **`destroy()`** | 从世界移除约束并清理。 |

**`start()`**（基类）：本物体必须有 **`Rigidbody`**；等待自身与目标刚体初始化后 **`createConstraint`** → **`setConstraint()`**（子类私有，应用限位与**延迟缓存的弹簧参数**）→ **`Physics.world.addConstraint`**。

### 线角限位属性

与 **`Generic6DofConstraint`** 一致，默认值为「近似无界」线位移与 ±π 角位移；含义见 **[Generic6DofConstraint](Generic6DofConstraint)** 文档中的限位说明。

| 属性 | 说明 |
|------|------|
| **`linearLowerLimit`** / **`linearUpperLimit`** | **`Vector3`**，三轴线位移下/上界（米，约束局部空间）。 |
| **`angularLowerLimit`** / **`angularUpperLimit`** | **`Vector3`**，三轴角位移下/上界（**弧度**）。 |
| **`useLinearFrameReferenceFrame`** | **`boolean`**，传入 Ammo 构造（默认 **`true`**）。须在**约束创建前**设定；修改后需 **`resetConstraint()`** 才生效。 |

赋值后在 **`_constraint` 已存在**时立即同步到 Bullet；创建时在 **`setConstraint()`** 中一次性写入。

### 弹簧索引（Bullet）

每个自由度对应一个**整数索引**，用于 **`enableSpring` / `setStiffness` / `setDamping` / `setEquilibriumPoint`**：

| index | 含义 |
|-------|------|
| **0, 1, 2** | 线自由度沿约束框 **X、Y、Z** 的平移 |
| **3, 4, 5** | 绕 **X、Y、Z** 的角自由度 |

竖直软悬挂时，若约束框与 world 对齐，常用 **`index = 1`** 表示**线方向 Y** 的弹簧；若约束框旋转，需按实际轴向选择 **0/1/2**。

### 方法

| 方法 | 说明 |
|------|------|
| **`enableSpring(index, onOff)`** | 对第 **`index`** 个自由度**开启/关闭**弹簧。若在 **`start()`** 完成前、约束尚未创建时调用，**会缓存**，待 **`setConstraint()`** 内按顺序应用到 `btGeneric6DofSpringConstraint`。 |
| **`setStiffness(index, stiffness)`** | 设置该索引的**刚度**。可提前调用并缓存。 |
| **`setDamping(index, damping)`** | 设置该索引的**阻尼**。可提前调用并缓存。 |
| **`setEquilibriumPoint(index?, val?)`** | 与 Bullet 对齐的重载：**无参** → 重置所有弹簧平衡点；**仅 `index`** → 调用底层单参形式；**`index` + `val`** → 将该自由度平衡点设为 **`val`**。未创建约束时，调用进入**缓存队列**，创建后按序执行。 |

**`createConstraint` / `setConstraint`** 为 **`protected` / `private`**，由引擎在 **`start()`** 中调用，业务侧无需直接调用。

### 使用示例（悬挂：线弹簧 Y）

组件挂在**悬挂物**所在 `Object3D` 上，**`targetRigidbody`** 指向**天花板**（或锚点）的 **`Rigidbody`**。典型顺序：先 **`await Physics.init()`**，再 `new Object3D()`、添加网格与刚体、**`addComponent(Generic6DofSpringConstraint)`** 并配置限位与弹簧参数（见下方「引擎初始化顺序」）。

```typescript
import { Object3D, Vector3 } from "@rings-webgpu/core";
import {
  Physics,
  Rigidbody,
  Generic6DofSpringConstraint,
  CollisionShapeUtil,
} from "@rings-webgpu/physics";

await Physics.init({});

const ceiling = new Object3D();
ceiling.y = 4.5;
/* MeshRenderer + Rigidbody mass=0 … */
const ceilingRb = ceiling.getComponent(Rigidbody);

const hang = new Object3D();
hang.y = 2.9;
/* MeshRenderer + Rigidbody mass>0 … */
scene.addChild(ceiling);
scene.addChild(hang);

const spring = hang.addComponent(Generic6DofSpringConstraint);
spring.targetRigidbody = ceilingRb;
spring.pivotSelf.setTo(0, 0.28, 0);
spring.pivotTarget.setTo(0, -0.125, 0);
spring.linearLowerLimit = new Vector3(-0.4, -1.8, -0.4);
spring.linearUpperLimit = new Vector3(0.4, 1.2, 0.4);
spring.angularLowerLimit = new Vector3(-0.5, -0.5, -0.5);
spring.angularUpperLimit = new Vector3(0.5, 0.5, 0.5);

spring.enableSpring(1, true);
spring.setStiffness(1, 96);
spring.setDamping(1, 5.5);
spring.setEquilibriumPoint(1, 0);

await spring.wait();
```

### 引擎初始化顺序（重要）

在 Rings 中，**必须先 `await Engine3D.init(...)`，再 `await Physics.init(...)`，再 `new Object3D()`**。若在 `Engine3D.init` 之前创建 `Object3D`，可能触发运行时错误（如内部缓冲未初始化）。完整可运行示例见 **`docs/examples/physics-generic-6dof-spring-constraint-demo.html`**。

### 与 Generic6DofConstraint 的取舍

- 只要**硬限位**、不要弹性恢复：用 **`Generic6DofConstraint`**。
- 需要**弹簧刚度、阻尼、平衡点**：用 **`Generic6DofSpringConstraint`**。
- 仅单轴滑动且需要**滑动马达**：优先考虑 **`SliderConstraint`**。

### 使用注意

1. **刚度过大**易导致数值不稳定，可配合 **`setDamping`**、**`Rigidbody.damping`** 或调整物理步长。
2. **`setEquilibriumPoint`** 三种重载语义不同，请与 Bullet / Ammo 文档对照使用。
3. **`resetConstraint()`** 后约束会重建，弹簧参数若在子类逻辑中仅依赖缓存数组，以当前实现会再次经 **`setConstraint()`** 应用；约束已存在时**动态**改 `enableSpring`/`setStiffness` 等会直接调底层。

### 可运行示例（Generic6DofSpringConstraint）

**极简页面**：地面 + 静态顶板 + 一方块、`Generic6DofSpringConstraint` 与 **`enableSpring(1)`** 及刚度/阻尼/平衡点；单光源、无侧栏。角限位未写时使用类默认（±π）。与综合演示中弹簧思路相同，代码更短。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-6dof-spring-tab" id="rings-phy-6dof-spring-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-6dof-spring-tab" id="rings-phy-6dof-spring-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-6dof-spring-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-6dof-spring-tab-preview"],
    .rings-quick-demo #rings-phy-6dof-spring-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-6dof-spring-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-6dof-spring-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-6dof-spring-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-6dof-spring-tab-preview">示例</label>
    <label for="rings-phy-6dof-spring-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff; min-height: 420px;">
    <iframe src="examples/physics-generic-6dof-spring-constraint-demo.html" title="Rings 物理：Generic6DofSpringConstraint" style="width: 100%; min-height: 420px; border: none; display: block;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-generic-6dof-spring-constraint-demo.html

要点：init 顺序 → 顶板/方块 Rigidbody → 方块上 addComponent(Generic6DofSpringConstraint) → enableSpring(1) + setStiffness/setDamping/setEquilibriumPoint；角限位可省略。</code></pre>
  </div>
</div>
