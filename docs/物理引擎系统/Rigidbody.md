# 刚体（Rigidbody）

用于为物体添加物理模拟行为的核心组件。

#### 导入方式

```javascript
import { Rigidbody } from "@rings-webgpu/physics";
```

#### 组件功能

- 为物体添加物理模拟能力
- 响应碰撞和触发事件
- 支持多种刚体类型
- 可配置物理材质
- 支持各种约束

#### 刚体类型

基于源码 `packages/physics/rigidbody/RigidbodyEnum.ts`：

| 类型      | 值  | 描述                     | 源码枚举 |
| --------- | --- | ------------------------ | -------- |
| Static    | 1   | 静态刚体，不受力影响     | `CollisionFlags.Static` |
| Dynamic   | 0   | 动态刚体，完全物理模拟   | `CollisionFlags.Dynamic` |
| Kinematic | 2   | 运动学刚体，通过代码控制 | `CollisionFlags.Kinematic` |

#### 碰撞标志 (CollisionFlags)

基于源码的完整碰撞标志枚举：

| 标志名称                    | 值    | 描述                             |
| --------------------------- | ----- | -------------------------------- |
| DEFAULT                     | 0     | 默认动态刚体标志                 |
| STATIC_OBJECT               | 1     | 静态物体标志                     |
| KINEMATIC_OBJECT            | 2     | 运动学物体标志                   |
| NO_CONTACT_RESPONSE         | 4     | 无碰撞响应，仅触发事件           |
| CUSTOM_MATERIAL_CALLBACK    | 8     | 使用自定义材质回调               |
| CHARACTER_OBJECT            | 16    | 角色控制器专用标志               |
| DISABLE_VISUALIZE_OBJECT    | 32    | 调试视图中隐藏                   |
| DISABLE_SPU_COLLISION_PROCESSING | 64 | 禁用SPU碰撞处理                  |
| HAS_CONTACT_STIFFNESS_DAMPING | 128 | 启用自定义接触刚度和阻尼         |
| HAS_CUSTOM_DEBUG_RENDERING_COLOR | 256 | 自定义调试颜色                   |
| HAS_FRICTION_ANCHOR         | 512   | 启用摩擦锚点（车辆轮胎）         |
| HAS_COLLISION_SOUND_TRIGGER | 1024  | 碰撞时触发音效                   |

#### 激活状态 (ActivationState)

| 状态名称            | 值 | 描述                     |
| ------------------- | -- | ------------------------ |
| ACTIVE_TAG          | 1  | 活跃状态                 |
| ISLAND_SLEEPING     | 2  | 休眠状态                 |
| WANTS_DEACTIVATION  | 3  | 请求休眠                 |
| DISABLE_DEACTIVATION | 4 | 禁止休眠                 |
| DISABLE_SIMULATION  | 5  | 禁用物理模拟             |

#### 主要属性

基于源码 `packages/physics/rigidbody/Rigidbody.ts`：

| 属性               | 类型    | 默认值 | 描述               | 源码对应 |
| ------------------ | ------- | ------ | ------------------ | -------- |
| mass               | number  | 0.01   | 质量(kg)           | ✅ `_mass` |
| restitution        | number  | 0.5    | 弹性系数           | ✅ `_restitution` |
| friction           | number  | 0.5    | 摩擦系数           | ✅ `_friction` |
| margin             | number  | 0.02   | 碰撞体膨胀边距     | ✅ `_margin` |
| linearDamping      | number  | 0.1    | 线性阻尼           | 通过 `_damping` 设置 |
| angularDamping     | number  | 0.1    | 角阻尼             | 通过 `_damping` 设置 |
| useGravity         | boolean  | true   | 是否受重力影响     | 通过 `_gravity` 设置 |
| collisionFlags     | number  | 0      | 碰撞标志           | ✅ `_collisionFlags` |

**注意**：部分属性需要通过Ammo.js API设置，如：
```javascript
rigidbody.btRigidbody.setDamping(linearDamping, angularDamping);
```

#### 常用方法

基于源码 `packages/physics/rigidbody/Rigidbody.ts` 和 Ammo.js API：

```javascript
// 获取Ammo.js刚体对象（底层API访问）
const btRigidbody = rigidbody.btRigidbody;

// 添加力（通过Ammo.js API）
btRigidbody.applyCentralForce(new Ammo.btVector3(0, 100, 0));
btRigidbody.applyTorque(new Ammo.btVector3(0, 10, 0));

// 设置速度和角速度
btRigidbody.setLinearVelocity(new Ammo.btVector3(velocity.x, velocity.y, velocity.z));
btRigidbody.setAngularVelocity(new Ammo.btVector3(angular.x, angular.y, angular.z));

// 设置阻尼
btRigidbody.setDamping(linearDamping, angularDamping);

// 设置碰撞形状（通过Rigidbody属性）
rigidbody.shape = boxShape;

// 设置刚体类型（通过collisionFlags）
rigidbody.collisionFlags = 0; // Dynamic
rigidbody.collisionFlags = 1; // Static  
rigidbody.collisionFlags = 2; // Kinematic

// 清除所有力和速度
RigidBodyUtil.clearForcesAndVelocities(btRigidbody);

// 激活刚体（防止休眠）
btRigidbody.activate();

// 设置重力影响
btRigidbody.setGravity(new Ammo.btVector3(0, -9.8, 0));

// 启用连续碰撞检测
btRigidbody.setCcdMotionThreshold(0.001);
btRigidbody.setCcdSweptSphereRadius(0.2);
```

#### 使用示例

基于源码 `packages/physics/rigidbody/Rigidbody.ts`：

```javascript
// 创建刚体组件
const rigidbody = gameObject.addComponent(Rigidbody);

// 配置刚体属性（通过组件属性）
rigidbody.mass = 10; // 质量
rigidbody.restitution = 0.7; // 弹性系数
rigidbody.friction = 0.3; // 摩擦系数
rigidbody.margin = 0.02; // 碰撞边距

// 设置碰撞形状（通过CollisionShapeUtil）
rigidbody.shape = CollisionShapeUtil.createSphereShape(1.0);
// 或者：
rigidbody.shape = CollisionShapeUtil.createBoxShape(new Vector3(1, 1, 1));

// 设置刚体类型（通过collisionFlags）
rigidbody.collisionFlags = 0; // Dynamic
rigidbody.collisionFlags = 1; // Static
rigidbody.collisionFlags = 2; // Kinematic

// 通过Ammo.js API控制运动学刚体
const btRigidbody = rigidbody.btRigidbody;
function update() {
  const transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin(new Ammo.btVector3(0, Math.sin(time), 0));
  btRigidbody.setWorldTransform(transform);
}

// 添加力（通过Ammo.js API）
function applyForce() {
  btRigidbody.activate(); // 激活刚体
  btRigidbody.applyCentralForce(new Ammo.btVector3(0, 100, 0));
}
```

#### 可运行示例（Rigidbody + ColliderComponent）

与 **Physics「常用方法」** 下「世界与刚体基础」示例相同：`ColliderComponent` 提供盒/球/胶囊枚举形状，与 `Rigidbody` 同挂于 `Object3D`。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-rigid-tab" id="rings-phy-rigid-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-rigid-tab" id="rings-phy-rigid-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-rigid-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-rigid-tab-preview"],
    .rings-quick-demo #rings-phy-rigid-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-rigid-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-rigid-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-rigid-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-rigid-tab-preview">示例</label>
    <label for="rings-phy-rigid-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/physics-basics-demo.html" title="Rings 物理：刚体与碰撞体" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>与 physics-basics-demo.html 相同；见上文「Physics 初始化与步进」代码页要点。

Collider：col.shape.setFromCenterAndSize(center, size) 或 BoxColliderShape 等。</code></pre>
  </div>
</div>

