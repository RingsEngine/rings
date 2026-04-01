# 约束总览（Constraints）

### 物理约束类型

### 可运行示例（约束类型综合）

同一场景并排展示 **`HingeConstraint`**、**`PointToPointConstraint`**、**`SliderConstraint`**、**`FixedConstraint`**、**`ConeTwistConstraint`**、**`Generic6DofConstraint`**、**`Generic6DofSpringConstraint`**；刚体均通过 **`CollisionShapeUtil`** 设置 **`Rigidbody.shape`**（运行条件与上文物理示例一致：unpkg + `importmap` + HTTP(S)）。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-constraints-all-tab" id="rings-phy-constraints-all-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-constraints-all-tab" id="rings-phy-constraints-all-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-constraints-all-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-constraints-all-tab-preview"],
    .rings-quick-demo #rings-phy-constraints-all-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-constraints-all-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 480px; }
    .rings-quick-demo #rings-phy-constraints-all-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-constraints-all-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-constraints-all-tab-preview">示例</label>
    <label for="rings-phy-constraints-all-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/physics-constraints-showcase-demo.html" title="Rings 物理：约束类型综合" style="width: 100%; height: 100%; border: none; min-height: 480px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-constraints-showcase-demo.html

要点：七类约束各一组；`addComponent(…Constraint)` + `targetRigidbody`（若需要）+ `pivotSelf` / `pivotTarget`；单刚体铰链可无 target。</code></pre>
  </div>
</div>


### 高级物理功能

##### 软体物理 (Soft Body Physics)

基于源码 `packages/physics/Physics.ts` 的软体支持：

```javascript
// 检查是否支持软体物理
if (Physics.isSoftBodyWord) {
  console.log("引擎支持软体物理");
  
  // 获取软体世界信息
  const worldInfo = Physics.worldInfo;
  
  // 创建布料软体
  const cloth = gameObject.addComponent(ClothSoftbody);
  cloth.createFromMesh(mesh, worldInfo);
}
```

##### 物理边界检查

```javascript
// 设置物理边界
Physics.physicBound = new BoundingBox(
  new Vector3(-100, -100, -100),
  new Vector3(100, 100, 100)
);

// 启用边界外销毁
Physics.destroyObjectBeyondBounds = true;

// 检查物体是否在边界内
Physics.checkBound(rigidbody);
```

##### 物理工具类

基于源码的物理工具类：

```javascript
// RigidBodyUtil 工具类
import { RigidBodyUtil } from "@rings-webgpu/physics";

// 激活所有碰撞体
RigidBodyUtil.activateCollisionBodies();

// 清除力和速度
RigidBodyUtil.clearForcesAndVelocities(btRigidbody);

// 物理材质工具
import { PhysicsMaterialUtil } from "@rings-webgpu/physics";

// 创建物理材质
const material = PhysicsMaterialUtil.createMaterial(0.5, 0.3, 0.1);

// 应用材质到刚体
rigidbody.btRigidbody.setMaterial(material);
```

##### 射线检测和扫射检测

```javascript
// 基础射线检测
const from = new Ammo.btVector3(0, 10, 0);
const to = new Ammo.btVector3(0, -10, 0);
const callback = new Ammo.ClosestRayResultCallback(from, to);

Physics.world.rayTest(from, to, callback);

if (callback.hasHit()) {
  const hitPoint = callback.get_m_hitPointWorld();
  const hitNormal = callback.get_m_hitNormalWorld();
  const hitBody = Ammo.castObject(callback.get_m_collisionObject(), Ammo.btRigidBody);
  
  console.log("射线击中物体:", hitBody);
}

// 扫射检测（连续碰撞检测）
const sweepCallback = new Ammo.ClosestConvexResultCallback(from, to);
const shape = new Ammo.btSphereShape(0.5);

Physics.world.convexSweepTest(shape, fromTransform, toTransform, sweepCallback);

// 清理Ammo对象
Ammo.destroy(from);
Ammo.destroy(to);
Ammo.destroy(callback);
Ammo.destroy(shape);
```

1. 优先使用简单约束(Hinge/Fixed/PointToPoint)
2. 复杂约束(6DOF)会显著增加计算量
3. 合理设置约束限制范围
4. 避免过度使用弹簧约束
5. 静态物体作为约束锚点性能更好
6. 批量更新约束参数

### 约束属性配置

所有约束类都继承自 `ConstraintBase`，具有以下通用属性：

| 属性名称      | 类型    | 描述                   | 默认值 |
| ------------- | ------- | ---------------------- | ------ |
| pivotSelf     | Vector3 | 自身刚体的锚点位置     | (0,0,0) |
| pivotTarget   | Vector3 | 目标刚体的锚点位置     | (0,0,0) |
| rotationSelf  | Quaternion | 自身刚体的旋转偏移     | Identity |
| rotationTarget| Quaternion | 目标刚体的旋转偏移     | Identity |
| breakingImpulse | number | 断裂阈值（力的大小）   | Infinity |
| disableCollisions | boolean | 是否禁用约束体间的碰撞 | true |

### 约束事件处理

```javascript
// 约束断裂事件
constraint.onBreak = (impulse) => {
  console.log("约束断裂！冲击力:", impulse);
};

// 约束状态检查
if (constraint.isEnabled) {
  console.log("约束处于激活状态");
}

// 动态启用/禁用约束
constraint.setEnabled(false); // 禁用约束
constraint.setEnabled(true);  // 启用约束
```

### 约束调试

```javascript
// 可视化约束
Physics.debugDrawer.enable = true;
Physics.debugDrawer.debugMode = Physics.debugDrawer.debugModeList.DrawConstraints;

// 约束限制可视化
Physics.debugDrawer.debugMode = Physics.debugDrawer.debugModeList.DrawConstraintLimits;
```
