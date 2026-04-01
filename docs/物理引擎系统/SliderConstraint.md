# 滑动约束（SliderConstraint）

```javascript
import { SliderConstraint } from "@rings-webgpu/physics";
```

- **功能**：封装 Bullet `btSliderConstraint`，使两刚体沿**约束坐标系的 X 轴**相对平移（滑动），并限制该轴上的线位移范围；可配置绕相关轴的角度限制与**线性马达**。
- **滑动方向**：由 `pivotSelf` / `pivotTarget` 与 `rotationSelf` / `rotationTarget` 共同定义两侧约束框（`btTransform`）；**未设置四元数时默认为单位旋转**，此时若两刚体也无额外旋转，滑动轴为世界 **X**；若需沿世界 Y/Z 滑动，应设置合适的 `rotationSelf` / `rotationTarget`（使约束框的 X 轴对齐目标方向）。
- **继承自 `ConstraintBase`**（与铰链等相同用法）：

| 属性 | 说明 |
|------|------|
| `targetRigidbody` | 目标刚体（如导轨）；无则为单刚体与世界约束（少见） |
| `pivotSelf` | 自身刚体局部空间中的约束框原点（`frameInA`） |
| `pivotTarget` | 目标刚体局部空间中的约束框原点（`frameInB`） |
| `rotationSelf` | 自身约束框朝向（`Quaternion`，默认 `identity`） |
| `rotationTarget` | 目标约束框朝向（`Quaternion`，默认 `identity`） |
| `disableCollisionsBetweenLinkedBodies` | 是否禁止两连接体互相碰撞（默认 `true`） |
| `breakingThreshold` | 断裂脉冲阈值（可选） |

- **本类专有属性**：

| 属性 | 说明 |
|------|------|
| `useLinearReferenceFrame` | 是否使用线性参考框架，传入 Ammo 构造函数（默认 `true`） |
| `lowerLinLimit` / `upperLinLimit` | 沿滑动轴的线位移下限 / 上限；默认约 `-1e30` / `1e30` 表示几乎无界 |
| `lowerAngLimit` / `upperAngLimit` | 角度限制（弧度）；常与 `0` 配合以抑制绕轴扭转，视场景调整 |
| `poweredLinMotor` | 是否启用线性马达 |
| `maxLinMotorForce` | 线性马达最大推力 |
| `targetLinMotorVelocity` | 线性马达目标速度（沿滑动轴） |

```javascript
const slider = cart.addComponent(SliderConstraint);
slider.targetRigidbody = railRigidbody;
slider.pivotSelf = new Vector3(0, 0, 0);
slider.pivotTarget = new Vector3(-0.9, 0.12, 0); // 导轨局部：与滑块铰接点
slider.lowerLinLimit = -2.2;
slider.upperLinLimit = 2.2;
slider.lowerAngLimit = 0;
slider.upperAngLimit = 0;
slider.useLinearReferenceFrame = true;
slider.maxLinMotorForce = 140;
slider.targetLinMotorVelocity = 0;
slider.poweredLinMotor = false;
```

#### 可运行示例（SliderConstraint）

静态导轨 + 动态滑块；底部按钮切换马达；运行条件与其它物理示例相同（unpkg + `importmap` + HTTP(S)）。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-slider-tab" id="rings-phy-slider-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-slider-tab" id="rings-phy-slider-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-slider-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-slider-tab-preview"],
    .rings-quick-demo #rings-phy-slider-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-slider-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-slider-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-slider-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-slider-tab-preview">示例</label>
    <label for="rings-phy-slider-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/physics-slider-constraint-demo.html" title="Rings 物理：滑动约束" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-slider-constraint-demo.html

要点：CollisionShapeUtil + Rigidbody.shape；slider.targetRigidbody；pivotSelf/pivotTarget；lowerLinLimit/upperLinLimit；poweredLinMotor / targetLinMotorVelocity；Physics.init({ useDrag: true }) 可选</code></pre>
  </div>
</div>

