# 布料软体（ClothSoftbody）

用于模拟布料和软体物理效果的高级组件。

#### 导入方式

```javascript
import { ClothSoftbody } from "@rings-webgpu/physics";
```

#### 组件功能

- 模拟真实布料物理行为
- 支持多种材质属性
- 可配置约束条件
- 支持风力影响
- 提供碰撞检测

#### 主要属性

| 属性            | 类型    | 默认值 | 描述           |
| --------------- | ------- | ------ | -------------- |
| mass            | number  | 1.0    | 单位质量       |
| stiffness       | number  | 0.5    | 布料刚度       |
| damping         | number  | 0.02   | 阻尼系数       |
| bendStiffness   | number  | 0.2    | 弯曲刚度       |
| windInfluence   | number  | 0.1    | 风力影响系数   |
| collisionMargin | number  | 0.04   | 碰撞边距       |
| selfCollision   | boolean | false  | 是否启用自碰撞 |

#### 约束类型

| 类型               | 描述                           |
| ------------------ | ------------------------------ |
| DistanceConstraint | 距离约束，保持顶点间距离       |
| BendConstraint     | 弯曲约束，控制布料弯曲程度     |
| PinConstraint      | 固定约束，将顶点固定在空间位置 |

#### 常用方法

```javascript
// 添加固定点约束
cloth.addPinConstraint(vertexIndex, position);

// 移除固定点约束
cloth.removePinConstraint(vertexIndex);

// 设置风力方向
cloth.setWindDirection(direction);

// 重置布料状态
cloth.reset();

// 更新布料参数
cloth.updateParameters({
  stiffness: 0.6,
  damping: 0.03,
});
```

#### 使用示例

```javascript
// 创建布料组件
const cloth = gameObject.addComponent(ClothSoftbody);

// 配置布料参数
cloth.mass = 0.8;
cloth.stiffness = 0.7;
cloth.windInfluence = 0.3;

// 添加固定点约束
cloth.addPinConstraint(0, new Vector3(0, 1, 0));
cloth.addPinConstraint(10, new Vector3(1, 1, 0));

// 设置风力
cloth.setWindDirection(new Vector3(1, 0, 0.5));

// 更新循环中
function update() {
  // 可以动态调整风力
  cloth.setWindDirection(new Vector3(Math.sin(time), 0, Math.cos(time)));
}
```

#### 可运行示例（ClothSoftbody）

`Physics.init({ useSoftBody: true })` + `PlaneGeometry` 分段 + `fixNodeIndices`（运行条件同上）。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-cloth-tab" id="rings-phy-cloth-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-cloth-tab" id="rings-phy-cloth-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-cloth-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-cloth-tab-preview"],
    .rings-quick-demo #rings-phy-cloth-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-cloth-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-cloth-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-cloth-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-cloth-tab-preview">示例</label>
    <label for="rings-phy-cloth-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/physics-cloth-demo.html" title="Rings 物理：布料" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-cloth-demo.html

要点：await Physics.init({ useSoftBody: true })
cloth.fixNodeIndices = ['leftTop', 'rightTop']</code></pre>
  </div>
</div>

#### 性能优化建议

1. 合理设置网格分辨率
2. 按需使用自碰撞功能
3. 减少动态固定点数量
4. 适当降低迭代次数
5. 使用 LOD 技术控制细节
6. 避免频繁参数修改
7. 对不可见布料暂停模拟

