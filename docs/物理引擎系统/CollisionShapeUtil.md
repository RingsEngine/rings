# 碰撞形状工具（CollisionShapeUtil）

用于创建和管理各种物理碰撞体的实用工具类。

#### 导入方式

```javascript
// 通过Rigidbody类访问（源码中CollisionShapeUtil作为Rigidbody的静态属性）
import { Rigidbody } from "@rings-webgpu/physics";
// 直接使用CollisionShapeUtil工具类
import { CollisionShapeUtil } from "@rings-webgpu/physics";
```

#### 支持的碰撞体类型

| 类型              | 描述             | 适用场景                 |
| ----------------- | ---------------- | ------------------------ |
| BoxShape          | 长方体碰撞体     | 适合方形物体如箱子、墙壁 |
| SphereShape       | 球体碰撞体       | 适合球形物体如球、行星   |
| CapsuleShape      | 胶囊体碰撞体     | 适合角色控制器           |
| CylinderShape     | 圆柱体碰撞体     | 适合柱状物体             |
| ConeShape         | 圆锥体碰撞体     | 适合锥形物体             |
| ConvexHullShape   | 凸包碰撞体       | 适合复杂形状的近似       |
| TriangleMeshShape | 三角形网格碰撞体 | 适合静态复杂网格         |

#### 主要方法

基于源码 `packages/physics/utils/CollisionShapeUtil.ts` 的实际实现：

```javascript
// 基本形状：首参为 Object3D，尺寸/半径可从包围盒推断，也可显式传入
const boxShape = CollisionShapeUtil.createBoxShape(object3D /*, size? */);
const sphereShape = CollisionShapeUtil.createSphereShape(object3D /*, radius? */);
const capsuleShape = CollisionShapeUtil.createCapsuleShape(object3D /*, radius?, height? */);
const cylinderShape = CollisionShapeUtil.createCylinderShape(object3D /*, radius?, height? */);
const coneShape = CollisionShapeUtil.createConeShape(object3D /*, radius?, height? */);

// 复杂形状：基于 Object3D 或显式 vertices/indices
const convexShape = CollisionShapeUtil.createConvexHullShape(object3D);
// 静态复杂网格优先 BVH；动态凸网格见 createConvexTriangleMeshShape / GImpact
const meshShape = CollisionShapeUtil.createBvhTriangleMeshShape(object3D);

// 创建复合碰撞形状
const compoundShape = CollisionShapeUtil.createCompoundShape(childShapes);

// 从 Object3D 创建复合形状（包含子对象）
const compoundFromScene = CollisionShapeUtil.createCompoundShapeFromObject(object3D);

// 从单个 Object3D 按几何类型自动选择形状
const shape = CollisionShapeUtil.createShapeFromObject(object3D);
```

**注意**：源码中CollisionShapeUtil主要提供形状创建功能，材质设置通过刚体组件实现。

#### 可运行示例（CollisionShapeUtil + Rigidbody.shape）

`Rigidbody.shape` 绑定 `createCylinderShape` / `createSphereShape` / `createBoxShape` 等（运行条件同上）。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-shapes-tab" id="rings-phy-shapes-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-shapes-tab" id="rings-phy-shapes-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-shapes-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-shapes-tab-preview"],
    .rings-quick-demo #rings-phy-shapes-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-shapes-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-shapes-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-shapes-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-shapes-tab-preview">示例</label>
    <label for="rings-phy-shapes-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/physics-collision-shapes-demo.html" title="Rings 物理：CollisionShapeUtil" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-collision-shapes-demo.html

要点：
• const rb = obj.addComponent(Rigidbody);
• rb.shape = CollisionShapeUtil.createCylinderShape(obj); // 首参为 Object3D
• 静态地面同样可用 CollisionShapeUtil.createBoxShape(ground) + mass = 0</code></pre>
  </div>
</div>

#### 碰撞体参数配置

| 参数         | 类型    | 描述           |
| ------------ | ------- | -------------- |
| margin       | number  | 碰撞体膨胀边距 |
| localScaling | Vector3 | 局部缩放系数   |
| isTrigger    | boolean | 是否作为触发器 |

#### 性能优化建议

1. 简单形状优先使用基本碰撞体(Box/Sphere)
2. 动态物体使用凸包而非三角网格
3. 静态复杂场景使用 TriangleMeshShape
4. 适当调整 margin 减少穿透现象
5. 重用相同形状的碰撞体实例

