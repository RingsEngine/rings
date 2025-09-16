# 扩展组件

## 1.物理引擎

核心物理模拟模块，提供刚体动力学、碰撞检测和物理材质系统。

#### 导入方式

```javascript
// 物理引擎主模块
import { Physics } from "@rings/physics";
// 刚体组件
import { Rigidbody } from "@rings/physics";
// 碰撞体工具
import { CollisionShapeUtil } from "@rings/physics";
// 碰撞体形状
import { BoxColliderShape, SphereColliderShape, CapsuleColliderShape } from "@rings/core";
```

#### 核心功能

- 刚体动力学模拟
- 多种碰撞体形状(Box, Sphere, Capsule, Mesh)
- 物理材质系统
- 射线检测和扫射检测
- 物理事件系统(碰撞、触发)

#### 详细属性说明

基于源码 `packages/physics/Physics.ts` 的实际实现：

| 属性            | 类型    | 默认值       | 描述                      | 源码对应 |
| --------------- | ------- | ------------ | ------------------------- | -------- |
| gravity         | Vector3 | (0, -9.8, 0) | 全局重力加速度向量        | ✅ `_gravity` |
| maxSubSteps     | number  | 10           | 最大子步数量              | ✅ `maxSubSteps` |
| fixedTimeStep   | number  | 1/60         | 固定物理更新时间步长(秒)  | ✅ `fixedTimeStep` |

**注意**：源码中Physics类主要提供基础物理世界配置，部分高级属性如solverIterations等需要通过刚体组件或Ammo.js直接配置。

#### 属性使用示例

```javascript
// 配置物理世界参数
Physics.gravity = new Vector3(0, -15, 0); // 增强重力
Physics.solverIterations = 15; // 更稳定的约束求解
Physics.fixedTimeStep = 1 / 90; // 90Hz物理更新
Physics.enableCCD = true; // 启用连续碰撞检测

// 获取当前配置
console.log("当前重力:", Physics.gravity);
console.log("物理步长:", Physics.fixedTimeStep);
```

#### 常用方法

基于源码 `packages/physics/Physics.ts` 和实际使用：

```javascript
// 初始化物理世界（通常在Engine3D.init后自动完成）
import { Physics } from "@rings/physics";

// 设置重力
Physics.gravity = new Vector3(0, -9.8, 0);

// 设置物理模拟参数
Physics.fixedTimeStep = 1/60;
Physics.maxSubSteps = 10;

// 射线检测（通过PhysicsDragger或自定义实现）
// 实际射线检测需使用Ammo.js API：
const rayCallback = new Ammo.ClosestRayResultCallback(fromVec, toVec);
Physics.world.rayTest(fromVec, toVec, rayCallback);

// 调试绘制
Physics.debugDrawer.enable = true;
```

**注意**：源码中Physics类主要管理物理世界，具体材质创建、约束添加等功能需要通过刚体组件或Ammo.js API实现。

### CollisionShapeUtil 碰撞体工具

用于创建和管理各种物理碰撞体的实用工具类。

#### 导入方式

```javascript
// 通过Rigidbody类访问（源码中CollisionShapeUtil作为Rigidbody的静态属性）
import { Rigidbody } from "@rings/physics";
// 直接使用CollisionShapeUtil工具类
import { CollisionShapeUtil } from "@rings/physics";
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
// 创建基本形状碰撞体
const boxShape = CollisionShapeUtil.createBoxShape(size);
const sphereShape = CollisionShapeUtil.createSphereShape(radius);
const capsuleShape = CollisionShapeUtil.createCapsuleShape(radius, height);
const cylinderShape = CollisionShapeUtil.createCylinderShape(radius, height);
const coneShape = CollisionShapeUtil.createConeShape(radius, height);

// 从几何体创建复杂形状
const convexShape = CollisionShapeUtil.createConvexHull(geometry);
const meshShape = CollisionShapeUtil.createTriangleMesh(geometry);

// 创建复合碰撞形状
const compoundShape = CollisionShapeUtil.createCompoundShape(childShapes);

// 从Object3D对象创建复合形状（包含所有子对象）
const compoundShape = CollisionShapeUtil.createCompoundShapeFromObject(object3D);

// 从单个Object3D创建形状
const shape = CollisionShapeUtil.createShapeFromObject(object3D);
```

**注意**：源码中CollisionShapeUtil主要提供形状创建功能，材质设置通过刚体组件实现。

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

### Rigidbody 刚体组件

用于为物体添加物理模拟行为的核心组件。

#### 导入方式

```javascript
import { Rigidbody } from "@rings/physics";
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

### 物理引擎使用总结

基于源码分析，物理引擎的实际使用方式如下：

#### 1. 物理世界配置
```javascript
// 在Engine3D.init后，物理世界已自动初始化
import { Physics } from "@rings/physics";

// 可配置参数
Physics.gravity = new Vector3(0, -9.8, 0);
Physics.fixedTimeStep = 1/60;
Physics.maxSubSteps = 10;
```

#### 2. 完整使用流程
```javascript
// 1. 创建游戏对象
const box = new Object3D();

// 2. 添加刚体组件
const rigidbody = box.addComponent(Rigidbody);

// 3. 设置物理属性
rigidbody.mass = 5;
rigidbody.restitution = 0.3;
rigidbody.friction = 0.5;

// 4. 设置碰撞形状
rigidbody.shape = CollisionShapeUtil.createBoxShape(new Vector3(1, 1, 1));

// 5. 设置刚体类型
rigidbody.collisionFlags = 0; // Dynamic
```

#### 3. 物理调试
```javascript
// 启用物理调试绘制
Physics.debugDrawer.enable = true;

// 使用PhysicsDragger进行交互
const dragger = new PhysicsDragger(view);

// 调试绘制模式设置
Physics.debugDrawer.debugMode = Physics.debugDrawer.debugModeList.DrawWireframe;
Physics.debugDrawer.updateFreq = 1; // 每帧更新
Physics.debugDrawer.maxLineCount = 25000; // 最大线数限制
```

#### 4. 物理事件系统

基于源码 `packages/physics/utils/ContactProcessedUtil.ts`：

```javascript
import { ContactProcessedUtil } from "@rings/physics";

// 注册碰撞事件
ContactProcessedUtil.registerCollisionCallback(
  rigidbody.btRigidbody.kB,
  (contactPoint, bodyA, bodyB) => {
    console.log("发生碰撞！", contactPoint);
  }
);

// 注销碰撞事件
ContactProcessedUtil.unregisterCollisionCallback(rigidbody.btRigidbody.kB);

// 忽略特定物体的碰撞事件
ContactProcessedUtil.addIgnoredPointer(rigidbody.btRigidbody.kB);

// 执行一次性碰撞测试
const collision = ContactProcessedUtil.performCollisionTest(bodyA.btRigidbody, bodyB.btRigidbody);
if (collision) {
  console.log("检测到碰撞");
}
```

#### 性能建议

1. 静态物体使用 Static 类型（collisionFlags = 1）
2. 不需要物理模拟的物体移除刚体组件
3. 适当调整margin减少穿透（建议0.02-0.04）
4. 合理设置mass避免不稳定（默认0.01起）
5. 运动学刚体适合程序控制的物体（collisionFlags = 2）
6. 重用碰撞形状实例减少内存分配
7. 使用CompoundShape处理复杂几何体

#### 完整API参考表

##### 核心类导入路径

| 类名                  | 导入路径                  | 描述                   |
| --------------------- | ------------------------- | ---------------------- |
| Physics               | `@rings/physics`          | 物理引擎主类           |
| Rigidbody             | `@rings/physics`          | 刚体组件               |
| CollisionShapeUtil    | `@rings/physics`          | 碰撞体工具类           |
| HingeConstraint       | `@rings/physics`          | 铰链约束               |
| SliderConstraint      | `@rings/physics`          | 滑动约束               |
| FixedConstraint       | `@rings/physics`          | 固定约束               |
| PointToPointConstraint| `@rings/physics`        | 点对点约束             |
| ConeTwistConstraint   | `@rings/physics`          | 锥形扭曲约束           |
| Generic6DofConstraint | `@rings/physics`          | 6自由度约束            |
| Generic6DofSpringConstraint| `@rings/physics`   | 6自由度弹簧约束        |
| ClothSoftbody         | `@rings/physics`          | 布料软体组件           |
| ContactProcessedUtil  | `@rings/physics`          | 碰撞事件工具类         |
| RigidBodyUtil         | `@rings/physics`          | 刚体工具类             |
| PhysicsDragger        | `@rings/physics`          | 物理拖拽工具           |

##### 调试模式常量

基于源码 `packages/physics/visualDebug/DebugDrawModeEnum.ts`：

| 模式名称               | 值    | 描述             |
| ---------------------- | ----- | ---------------- |
| NoDebug                | 0     | 无调试绘制       |
| DrawWireframe          | 1     | 绘制线框         |
| DrawAabb               | 2     | 绘制AABB包围盒   |
| DrawContactPoints      | 4     | 绘制接触点       |
| DrawConstraints        | 128   | 绘制约束         |
| DrawConstraintLimits   | 256   | 绘制约束限制     |
| DrawSoftBodies         | 16384 | 绘制软体         |

#### 性能优化建议

1. **内存管理**：及时销毁Ammo.js临时对象
2. **碰撞形状**：重用相同形状的碰撞体实例
3. **约束数量**：限制场景中约束的总数
4. **射线检测**：避免每帧进行大量射线检测
5. **调试绘制**：生产环境关闭调试绘制
6. **休眠机制**：允许物体休眠减少计算
7. **边界检查**：设置合理的物理边界
8. **材质优化**：使用共享材质减少实例数量

### ClothSoftbody 布料软体组件

用于模拟布料和软体物理效果的高级组件。

#### 导入方式

```javascript
import { ClothSoftbody } from "@rings/physics";
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

#### 性能优化建议

1. 合理设置网格分辨率
2. 按需使用自碰撞功能
3. 减少动态固定点数量
4. 适当降低迭代次数
5. 使用 LOD 技术控制细节
6. 避免频繁参数修改
7. 对不可见布料暂停模拟

### 物理约束类型

#### HingeConstraint 铰链约束

```javascript
import { HingeConstraint } from "@rings/physics";
```

- **功能**：创建单轴旋转约束，模拟门铰链、关节等旋转行为
- **物理原理**：基于角动量守恒，限制物体只能绕指定轴旋转
- **属性详解**：

  - `pivotA/B`: Vector3 - 两个物体的局部空间锚点位置(单位：米)
    - 决定约束的连接点
    - 示例：`new Vector3(0,1,0)`表示物体 Y 轴上 1 米处
  - `axisA/B`: Vector3 - 旋转轴方向(需归一化)
    - 两物体的旋转轴方向应一致
    - 示例：`new Vector3(0,0,1)`表示绕 Z 轴旋转
  - `limit`: Object - 旋转角度限制(弧度制)
    - `lower`: 最小角度(默认-π)
    - `upper`: 最大角度(默认 π)
    - `softness`: 约束柔软度(0-1)，值越大约束越"松"
    - `biasFactor`: 纠正速度系数(0-1)，值越小抖动越少
    - `relaxationFactor`: 松弛系数(0-1)，影响约束刚度

- **适用场景**：

  - 门、窗铰链
  - 机械臂关节
  - 旋转杠杆装置
  - 任何需要单轴旋转的物理连接

- **参数调整指南**：
  | 参数 | 效果 | 推荐值 |
  |------|------|--------|
  | softness | 增大使约束更"松" | 0.1-0.3 |
  | biasFactor | 降低减少抖动 | 0.2-0.5 |
  | limit 范围 | 避免穿模 | 根据实际需要 |

- **常见问题解决**：

  1. **旋转轴不对齐**：确保 axisA/B 方向一致
  2. **抖动严重**：降低 biasFactor，增加 solverIterations
  3. **约束失效**：检查锚点位置是否合理
  4. **穿模问题**：适当减小 limit 范围

- **完整示例**：

```javascript
// 创建门铰链
const doorHinge = new HingeConstraint(doorBody, frameBody, {
  pivotA: new Vector3(0, 1.5, 0.1), // 门上的铰链位置
  pivotB: new Vector3(0, 1.5, 0), // 门框上的铰链位置
  axisA: new Vector3(0, 1, 0), // 旋转轴(Y轴)
  axisB: new Vector3(0, 1, 0),
  limit: {
    lower: -Math.PI / 2, // -90度
    upper: Math.PI / 4, // 45度
    softness: 0.2,
    biasFactor: 0.3,
  },
});

// 动态调整限制
function updateDoor() {
  doorHinge.setLimit(-Math.PI / 2, currentAngle);
}
```

#### SliderConstraint 滑动约束

```javascript
import { SliderConstraint } from "@rings/physics";
```

- 功能：限制物体沿指定轴滑动
- 属性：
  - frameA/B: 局部坐标系
  - linearLimit: 滑动范围限制
- 示例：

```javascript
const slider = new SliderConstraint(bodyA, bodyB, {
  frameA: new Transform(),
  linearLimit: { lower: -2, upper: 2 },
});
```

#### FixedConstraint 固定约束

```javascript
import { FixedConstraint } from "@rings/physics";
```

- 功能：完全固定两个物体的相对位置和旋转
- 属性：
  - pivotA/B: 锚点位置
- 示例：

```javascript
const fixed = new FixedConstraint(bodyA, bodyB, {
  pivotA: new Vector3(0, 0, 0),
  pivotB: new Vector3(0, 0.5, 0),
});
```

#### PointToPointConstraint 点对点约束

```javascript
import { PointToPointConstraint } from "@rings/physics";
```

- 功能：将两个物体的特定点连接在一起
- 属性：
  - pivotA/B: 锚点位置
- 示例：

```javascript
const p2p = new PointToPointConstraint(bodyA, bodyB, {
  pivotA: new Vector3(0, 1, 0),
  pivotB: new Vector3(0, 0, 0),
});
```

#### ConeTwistConstraint 锥形扭曲约束

```javascript
import { ConeTwistConstraint } from "@rings/physics";
```

- 功能：模拟球窝关节，限制旋转角度
- 属性：
  - pivotA/B: 锚点位置
  - swingSpan: 摆动范围
  - twistSpan: 扭曲范围
- 示例：

```javascript
const coneTwist = new ConeTwistConstraint(bodyA, bodyB, {
  pivotA: new Vector3(0, 1, 0),
  swingSpan: Math.PI / 4,
  twistSpan: Math.PI / 2,
});
```

#### Generic6DofConstraint 通用 6 自由度约束

```javascript
import { Generic6DofConstraint } from "@rings/physics";
```

- 功能：提供 6 个自由度的完全控制
- 属性：
  - frameA/B: 局部
  - linearLower/Upper: 线性限制
  - angularLower/Upper: 角度限制
- 示例：

```javascript
const dof = new Generic6DofConstraint(bodyA, bodyB, {
  frameA: new Transform(),
  linearLower: new Vector3(-1, -1, -1),
  linearUpper: new Vector3(1, 1, 1),
});
```

#### Generic6DofSpringConstraint 通用 6 自由度弹簧约束

```javascript
import { Generic6DofSpringConstraint } from "@rings/physics";
```

- 功能：带弹簧效果的 6 自由度约束
- 属性：
  - 继承 Generic6DofConstraint 所有属性
  - springStiffness: 弹簧刚度
  - springDamping: 弹簧阻尼
- 示例：

```javascript
const spring = new Generic6DofSpringConstraint(bodyA, bodyB, {
  frameA: new Transform(),
  springStiffness: [10, 10, 10],
  springDamping: [0.5, 0.5, 0.5],
});
```

#### 高级物理功能

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
import { RigidBodyUtil } from "@rings/physics";

// 激活所有碰撞体
RigidBodyUtil.activateCollisionBodies();

// 清除力和速度
RigidBodyUtil.clearForcesAndVelocities(btRigidbody);

// 物理材质工具
import { PhysicsMaterialUtil } from "@rings/physics";

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

#### 约束属性配置

所有约束类都继承自 `ConstraintBase`，具有以下通用属性：

| 属性名称      | 类型    | 描述                   | 默认值 |
| ------------- | ------- | ---------------------- | ------ |
| pivotSelf     | Vector3 | 自身刚体的锚点位置     | (0,0,0) |
| pivotTarget   | Vector3 | 目标刚体的锚点位置     | (0,0,0) |
| rotationSelf  | Quaternion | 自身刚体的旋转偏移     | Identity |
| rotationTarget| Quaternion | 目标刚体的旋转偏移     | Identity |
| breakingImpulse | number | 断裂阈值（力的大小）   | Infinity |
| disableCollisions | boolean | 是否禁用约束体间的碰撞 | true |

#### 约束事件处理

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

#### 约束调试

```javascript
// 可视化约束
Physics.debugDrawer.enable = true;
Physics.debugDrawer.debugMode = Physics.debugDrawer.debugModeList.DrawConstraints;

// 约束限制可视化
Physics.debugDrawer.debugMode = Physics.debugDrawer.debugModeList.DrawConstraintLimits;
```

## 2. 动画组件

管理骨骼动画和状态切换

### 2.1 模型内置动画

用于处理 3D 模型自带的动画序列，支持骨骼动画、顶点变形动画等模型内置动画类型：

```javascript
import { AnimatorComponent } from "@rings/core";

// 创建带有动画的模型实体
const animatedModel = new Object3D();
const animator = animatedModel.addComponent(AnimatorComponent);

// 设置骨骼数据（必需）
animator.avatar = "character_avatar"; // 绑定PrefabAvatarData

// 播放指定动画
animator.playAnim("walk", 0, 1.0); // 动画名，起始时间，速度

// 动画过渡
animator.crossFade("run", 0.3); // 0.3秒淡入淡出过渡

// 播放顶点变形动画
animator.playBlendShape("smile", 0, 1.0);

// 暂停/恢复动画
animator.pause();
animator.resume();
```

### 2.2 属性动画组件（PropertyAnimation）

用于处理对象属性的动画，支持位置、旋转、缩放、颜色等各种属性的动画：

```javascript
import { PropertyAnimation, PropertyAnimClip } from "@rings/core";

// 创建属性动画实体
const animatedObject = new Object3D();
const propertyAnimator = animatedObject.addComponent(PropertyAnimation);

// 创建动画剪辑
const moveClip = new PropertyAnimClip();
moveClip.name = "moveAnimation";
moveClip.wrapMode = WrapMode.Loop;

// 从JSON数据加载动画
moveClip.parse(animationJsonData);

// 添加到动画器
propertyAnimator.appendClip(moveClip);

// 设置默认动画和自动播放
propertyAnimator.defaultClip = "moveAnimation";
propertyAnimator.autoPlay = true;

// 播放动画
propertyAnimator.play("moveAnimation");

// 控制播放
propertyAnimator.speed = 2.0; // 双倍速度
propertyAnimator.seek(1.5);   // 跳转到1.5秒
propertyAnimator.stop();      // 停止播放
propertyAnimator.toggle();    // 切换播放/暂停
```

#### PropertyAnimation 属性列表

| 属性名 | 类型 | 描述 |
|--------|------|------|
| `defaultClip` | `string` | 自动播放的默认动画剪辑名称 |
| `autoPlay` | `boolean` | 是否在组件启动时自动播放默认动画 |
| `speed` | `number` | 动画播放速度，默认1.0 |
| `currentClip` | `PropertyAnimClip` | 当前播放的动画剪辑 |
| `time` | `number` | 当前动画时间（秒） |

#### PropertyAnimation 方法列表

| 方法名 | 参数 | 返回值 | 描述 |
|--------|------|--------|------|
| `play` | name: string, reset?: boolean | PropertyAnimClip | 播放指定动画剪辑 |
| `stop` | - | void | 停止当前动画 |
| `seek` | time: number | void | 跳转到指定时间 |
| `toggle` | - | void | 切换播放/暂停状态 |
| `getClip` | name: string | PropertyAnimClip | 获取指定名称的动画剪辑 |
| `appendClip` | clip: PropertyAnimClip | void | 添加动画剪辑到动画器 |

### 2.3 骨骼动画组件（SkeletonAnimationComponent）

用于处理更底层的骨骼动画系统：

```javascript
import { SkeletonAnimationComponent, Skeleton, Joint } from "@rings/core";

// 创建骨骼动画实体
const animatedEntity = new Object3D();
const skeletonAnimator = animatedEntity.addComponent(SkeletonAnimationComponent);

// 创建骨骼对象
const skeleton = new Skeleton();

// 添加骨骼关节
const rootJoint = new Joint("root");
rootJoint.translation.set(0, 0, 0);
rootJoint.rotation.set(0, 0, 0, 1);
rootJoint.scale.set(1, 1, 1);
skeleton.addJoint(rootJoint);

const childJoint = new Joint("bone_1");
childJoint.translation.set(0, 1, 0);
childJoint.parent = rootJoint; // 设置父子关系
skeleton.addJoint(childJoint);

// 设置骨骼数据（必需）
skeletonAnimator.skeleton = skeleton;

// 添加动画剪辑
const walkClip = new SkeletonAnimationClip("walk", skeleton, 60, bufferData);
skeletonAnimator.addAnimationClip(walkClip);

// 播放动画
skeletonAnimator.play("walk", 1.0, true);
```

#### AnimatorComponent 属性列表

1. **`timeScale: number`**
   - **描述**：全局动画播放速度的缩放因子。
   - **默认值**：`1.0`。
   - **用法**：
     ```typescript
     animator.timeScale = 2.0; // 以双倍速度播放动画
     ```

2. **`avatar: string`**
   - **描述**：绑定骨骼数据的名称（`PrefabAvatarData`），**必需设置**。
   - **用法**：
     ```typescript
     animator.avatar = "character_avatar"; // 绑定骨骼数据
     ```

3. **`playBlendShapeLoop: boolean`**
   - **描述**：控制 BlendShape 动画是否循环播放。
   - **默认值**：`false`。
   - **用法**：
     ```typescript
     animator.playBlendShapeLoop = true; // 启用循环播放
     ```

4. **`jointMatrixIndexTableBuffer: StorageGPUBuffer`**
   - **描述**：骨骼矩阵索引表，用于 GPU 计算。
   - **注意**：通常由系统自动生成，无需手动设置。

#### SkeletonAnimationComponent 属性列表

1. **`isPlaying: boolean`**
   - **描述**：是否正在播放动画。
   - **默认值**：`true`。

2. **`timeScale: number`**
   - **描述**：动画播放速度缩放因子。
   - **默认值**：`1.0`。

3. **`skeleton: Skeleton`**
   - **描述**：骨骼对象，**必需设置**。
   - **用法**：
     ```typescript
     skeletonAnimator.skeleton = skeleton;
     ```

4. **`jointMatrixIndexTableBuffer: StorageGPUBuffer`**
   - **描述**：骨骼矩阵索引缓冲区，用于 GPU 计算。

##### AnimatorComponent 方法列表

1. **`playAnim(anim: string, time?: number, speed?: number)`**
   - **描述**：播放指定的骨骼动画。
   - **参数**：
     - `anim`：动画剪辑名称。
     - `time`：起始时间（秒），默认为 `0`。
     - `speed`：播放速度，默认为 `1`。
   - **用法**：
     ```typescript
     animator.playAnim("walk", 0, 1.5); // 以1.5倍速度播放行走动画
     ```

2. **`playBlendShape(shapeName: string, time?: number, speed?: number)`**
   - **描述**：播放顶点变形动画。
   - **参数**：
     - `shapeName`：变形目标名称。
     - `time`：起始时间（秒），默认为 `0`。
     - `speed`：播放速度，默认为 `1`。
   - **用法**：
     ```typescript
     animator.playBlendShape("smile", 0, 1.0);
     ```

3. **`crossFade(anim: string, crossTime: number)`**
   - **描述**：交叉淡入淡出到另一个动画。
   - **参数**：
     - `anim`：目标动画剪辑名称。
     - `crossTime`：过渡时间（秒）。

4. **`getAnimationClipState(name: string)`**
   - **描述**：获取指定名称的动画剪辑状态。
   - **返回值**：`PropertyAnimationClipState` 或 `null`。

##### SkeletonAnimationComponent 方法列表

1. **`play(animName: string, speed?: number, reset?: boolean)`**
   - **描述**：播放指定的骨骼动画。
   - **参数**：
     - `animName`：动画剪辑名称。
     - `speed`：播放速度，默认为 `1`。
     - `reset`：是否重置动画，默认为 `false`。
   - **返回值**：成功返回 `true`，失败返回 `false`。

2. **`crossFade(animName: string, crossTime: number)`**
   - **描述**：交叉淡入淡出到另一个动画。
   - **参数**：
     - `animName`：目标动画剪辑名称。
     - `crossTime`：过渡时间（秒）。

3. **`addAnimationClip(clip: SkeletonAnimationClip)`**
   - **描述**：添加动画剪辑到组件。
   - **参数**：
     - `clip`：动画剪辑对象。

4. **`getAnimationClip(name: string)`**
   - **描述**：获取指定名称的动画剪辑。
   - **返回值**：`SkeletonAnimationClip` 或 `null`。

5. **`getAnimationClips()`**
   - **描述**：获取所有动画剪辑。
   - **返回值**：`SkeletonAnimationClip[]`。

6. **`setAnimIsLoop(animName: string, isLoop: boolean)`**
   - **描述**：设置动画是否循环播放。
   - **参数**：
     - `animName`：动画剪辑名称。
     - `isLoop`：是否循环。

7. **`addJointBind(jointName: string, obj: Object3D)`**
   - **描述**：将骨骼绑定到指定对象。
   - **参数**：
     - `jointName`：骨骼名称。
     - `obj`：要绑定的对象。

8. **`removeJointBind(obj: Object3D)`**
   - **描述**：移除对象的骨骼绑定。
   - **参数**：
     - `obj`：要移除绑定的对象。

#### Skeleton 对象详解

`Skeleton` 对象是骨骼动画系统的核心数据结构，用于存储和管理骨骼层次结构：

**结构组成**：
- `joints: Array<Joint>` - 骨骼关节数组，按层级顺序存储
- `numJoint: number` - 关节数量（只读属性）

**Joint 关节结构**：
- `name: string` - 关节名称，用于标识和查找
- `index: number` - 关节在数组中的索引
- `instanceID: string` - 唯一实例标识符
- `parent: Joint` - 父关节引用，形成骨骼层次
- `scale: Vector3` - 缩放向量
- `rotation: Quaternion` - 旋转四元数
- `translation: Vector3` - 平移向量

**创建骨骼层次示例**：

```javascript
import { Skeleton, Joint, Vector3, Quaternion } from "@rings/core";

// 创建骨骼对象
const skeleton = new Skeleton();

// 创建根关节（通常对应模型原点）
const root = new Joint("Root");
root.translation.set(0, 0, 0);
root.rotation.set(0, 0, 0, 1); // 单位四元数
root.scale.set(1, 1, 1);
skeleton.addJoint(root);

// 创建脊柱关节
const spine = new Joint("Spine");
spine.translation.set(0, 1.0, 0); // 位于根关节上方1单位
spine.parent = root; // 设置父关节
skeleton.addJoint(spine);

// 创建头部关节
const head = new Joint("Head");
head.translation.set(0, 0.5, 0); // 位于脊柱上方0.5单位
head.parent = spine;
skeleton.addJoint(head);

// 创建左臂关节
const leftShoulder = new Joint("LeftShoulder");
leftShoulder.translation.set(-0.3, 0.2, 0);
leftShoulder.parent = spine;
skeleton.addJoint(leftShoulder);

const leftElbow = new Joint("LeftElbow");
leftElbow.translation.set(-0.8, 0, 0);
leftElbow.parent = leftShoulder;
skeleton.addJoint(leftElbow);

// 验证骨骼结构
console.log(`总关节数: ${skeleton.numJoint}`);
console.log(`头部关节索引: ${head.index}`);
console.log(`左肘父关节: ${skeleton.getJointName(leftElbow.parent.index)}`);

// 通过名称查找关节
const foundSpine = skeleton.getJointByName("Spine");
if (foundSpine) {
  console.log(`找到脊柱关节，父关节索引: ${skeleton.getJointParentIndex(foundSpine.index)}`);
}
```

**实际应用中的骨骼来源**：

在实际项目中，骨骼通常从模型文件自动加载：

```javascript
// 从GLTF模型加载骨骼
const gltf = await engine.loader.load("character.gltf");
const skeleton = gltf.skeleton; // 自动解析的骨骼

// 应用到动画组件
const skeletonAnimator = entity.addComponent(SkeletonAnimationComponent);
skeletonAnimator.skeleton = skeleton;

// 骨骼调试可视化
skeleton.joints.forEach((joint, index) => {
  console.log(`关节 ${index}: ${joint.name}, 父级: ${joint.parent ? joint.parent.name : '无'}`);
});
```

### 2.4 动画事件系统

动画系统支持事件回调，可以在动画播放过程中的特定时间点触发事件：

```javascript
import { PropertyAnimation, PropertyAnimationEvent } from "@rings/core";

// 创建属性动画并添加事件监听
const animator = entity.addComponent(PropertyAnimation);

// 监听动画完成事件
animator.eventDispatcher.addEventListener(PropertyAnimationEvent.COMPLETE, (e) => {
  console.log('动画播放完成:', e.animation.currentClip.name);
});

// 监听关键帧事件
animator.eventDispatcher.addEventListener(PropertyAnimationEvent.SEEK, (e) => {
  console.log('到达关键帧:', e.frame.time, '数据:', e.frame.data);
});

// 注册关键帧事件
const keyframe = {
  clipName: "moveAnimation",
  time: 2.5,  // 2.5秒时触发
  data: { message: "到达中点" }
};
animator.registerEventKeyFrame(keyframe);
```

### 2.5 动画剪辑详解

#### 骨骼动画剪辑（SkeletonAnimationClip）

用于存储骨骼动画数据：

```javascript
import { SkeletonAnimationClip } from "@rings/core";

// 创建骨骼动画剪辑
const clip = new SkeletonAnimationClip(
  "walk",           // 动画名称
  skeleton,         // 骨骼对象
  60,              // 帧数
  bufferData       // Float32Array动画数据
);

// 获取动画信息
console.log('总时长:', clip.totalTime);
console.log('帧率:', clip.frameRate);
console.log('帧数:', clip.numFrame);

// 添加动画事件
clip.addEvent("eventName", 1.5); // 在1.5秒添加事件
```

#### 属性动画剪辑（PropertyAnimClip）

用于存储对象属性动画数据：

```javascript
import { PropertyAnimClip, WrapMode } from "@rings/core";

// 创建属性动画剪辑
const clip = new PropertyAnimClip();
clip.name = "colorChange";
clip.wrapMode = WrapMode.Loop; // 循环播放
clip.parse(animationJson);     // 从JSON解析动画数据

// 支持的包装模式
// WrapMode.Default = 0
// WrapMode.Clamp = 1    // 播放一次后停止
// WrapMode.Loop = 2     // 循环播放
// WrapMode.PingPong = 4 // 往返播放
// WrapMode.ClampForever = 8 // 保持最后一帧
```

### 动画系统导入路径

| 类名 | 导入路径 | 描述 |
|----------|----------|------|
| `AnimatorComponent` | `@rings/core` | 通用动画组件，支持骨骼和变形动画 |
| `SkeletonAnimationComponent` | `@rings/core` | 专用骨骼动画组件 |
| `PropertyAnimation` | `@rings/core` | 属性动画组件 |
| `Skeleton` | `@rings/core` | 骨骼数据结构 |
| `Joint` | `@rings/core` | 骨骼关节类 |
| `SkeletonAnimationClip` | `@rings/core` | 骨骼动画剪辑 |
| `PropertyAnimClip` | `@rings/core` | 属性动画剪辑 |
| `PropertyAnimationEvent` | `@rings/core` | 动画事件类 |

### 动画系统使用注意事项

#### 1. 必需设置
- `AnimatorComponent` 必须设置 `avatar` 属性
- `SkeletonAnimationComponent` 必须设置 `skeleton` 属性
- `PropertyAnimation` 需要添加至少一个动画剪辑

#### 2. 动画数据加载
```javascript
// 从GLTF加载完整的动画系统
const gltf = await Engine3D.res.loadGLTF("model.gltf");

// 顶点变形动画（适用于FBX/GLTF模型）
const animator = entity.addComponent(AnimatorComponent);
animator.avatar = gltf.skeletonData.name;
animator.clips = gltf.animations;

// 骨骼动画（更底层控制）
const skeletonAnimator = entity.addComponent(SkeletonAnimationComponent);
skeletonAnimator.skeleton = gltf.skeleton;
for (let anim of gltf.skeletonAnimations) {
  skeletonAnimator.addAnimationClip(anim);
}

// 属性动画（适用于程序化动画）
const propertyAnimator = entity.addComponent(PropertyAnimation);
const clip = new PropertyAnimClip();
clip.parse(animationJsonData);
propertyAnimator.appendClip(clip);
```

#### 3. 动画类型选择指南
| 动画类型 | 适用场景 | 性能 | 特点 |
|----------|----------|------|------|
| `AnimatorComponent` | 模型内置动画、骨骼动画、顶点变形 | 中等 | 功能全面，支持混合 |
| `SkeletonAnimationComponent` | 纯骨骼动画 | 高 | 底层控制，性能最佳 |
| `PropertyAnimation` | 属性动画、UI动画、程序化动画 | 低 | 灵活，支持任意属性 |

#### 4. 动画混合与过渡
```javascript
// AnimatorComponent动画混合
animator.playAnim("walk", 0, 1.0);
animator.crossFade("run", 0.5); // 0.5秒平滑过渡

// SkeletonAnimationComponent动画混合
skeletonAnimator.crossFade("run", 0.3);

// 同时播放多个动画（权重混合）
skeletonAnimator.play("walk", 0.7); // 70%权重
skeletonAnimator.play("strafe", 0.3); // 30%权重
```

#### 5. 性能优化建议
- **骨骼动画优化**：
  - 减少骨骼数量（建议<50根）
  - 使用GPU蒙皮而非CPU蒙皮
  - 避免每帧更新骨骼矩阵

- **动画剪辑优化**：
  - 压缩动画数据（减少关键帧）
  - 使用合理的帧率（24-30fps）
  - 避免过长的动画剪辑

- **运行时优化**：
  - 使用动画LOD（距离远时降低精度）
  - 批量更新动画组件
  - 禁用不可见对象的动画

#### 6. 常见问题与解决方案

**问题1：动画不播放**
```javascript
// 检查必需设置
console.log('avatar设置:', animator.avatar);
console.log('骨骼设置:', skeletonAnimator.skeleton);
console.log('动画剪辑数量:', animator.clips?.length);
```

**问题2：动画抖动**
```javascript
// 确保骨骼数据匹配
console.log('骨骼关节数:', skeleton.numJoint);
console.log('动画骨骼数:', clip.skeleton.numJoint);
```

**问题3：性能问题**
```javascript
// 监控动画性能
const stats = {
  activeAnimators: 0,
  totalBones: 0,
  updateTime: 0
};
// 使用引擎统计工具监控
```

#### 7. 高级功能示例

**动画状态机**：
```javascript
// 创建简单的动画状态机
class AnimationStateMachine {
  constructor(animator) {
    this.animator = animator;
    this.currentState = "idle";
    this.states = {
      idle: { next: ["walk", "run"] },
      walk: { next: ["idle", "run"] },
      run: { next: ["walk", "idle"] }
    };
  }
  
  transitionTo(newState) {
    if (this.states[this.currentState].next.includes(newState)) {
      this.animator.crossFade(newState, 0.3);
      this.currentState = newState;
    }
  }
}
```

**骨骼绑定高级用法**：
```javascript
// 动态绑定武器到骨骼
const weapon = new Object3D();
const skeletonAnimator = character.getComponent(SkeletonAnimationComponent);

// 绑定到右手骨骼
skeletonAnimator.addJointBind("RightHand", weapon);

// 动态切换绑定
skeletonAnimator.removeJointBind(weapon);
skeletonAnimator.addJointBind("LeftHand", weapon);
```

### 2.2 属性动画

`PropertyAnimator` 是用于驱动属性动画的核心组件，支持对任意对象的属性进行插值动画。

```typescript
import { PropertyAnimation } from "@rings/core";
```

**功能**：

- 通过关键帧动画控制对象的属性变化（如位置、旋转、缩放、颜色等）。
- 支持数值、向量、颜色等属性的插值动画。
- 提供事件系统（完成、循环、关键帧触发）。

**核心属性**：

| 属性       | 类型             | 默认值 | 描述                         |
| ---------- | ---------------- | ------ | ---------------------------- |
| `clip`     | PropertyAnimClip | null   | 动画剪辑资源，包含关键帧数据 |
| `speed`    | number           | 1.0    | 播放速度（1.0 为正常速度）   |
| `loop`     | boolean          | false  | 是否循环播放                 |
| `autoPlay` | boolean          | true   | 是否自动播放                 |

**常用方法**：

```typescript
play(): void;    // 开始播放
pause(): void;   // 暂停动画
stop(): void;    // 停止并重置动画
seek(time: number): void; // 跳转到指定时间点
```

**事件系统**：

```typescript
// 动画播放完成时触发
onComplete: () => void;

// 每次循环时触发（仅当loop=true）
onLoop: () => void;

// 到达关键帧时触发
onFrame: (frameIndex: number) => void;
```

**示例代码**：

```typescript
// 创建属性动画组件
const anim = obj.addComponent(PropertyAnimation);

// 加载动画剪辑
anim.clip = await Engine3D.res.load("anim/scaleAnim.json");

// 配置动画参数
anim.speed = 1.5;
anim.loop = true;

// 监听事件
anim.onComplete = () => console.log("动画播放完成");
anim.onFrame = (idx) => console.log(`到达关键帧: ${idx}`);

// 手动播放
anim.play();
```

### 2.3 口型动画

```typescript
import { MorphTargetBlender } from "@rings/core";
```

**MorphTargetBlender 口型混合器**

**功能**：

- 用于混合多个 MorphTarget（变形目标）的权重，实现平滑过渡效果。
- 支持动态调整权重，适用于口型同步、表情动画等场景。

**核心属性**：

| 属性         | 类型              | 默认值 | 描述                 |
| ------------ | ----------------- | ------ | -------------------- |
| `targets`    | MorphTargetData[] | []     | 绑定的变形目标数据   |
| `blendSpeed` | number            | 0.1    | 权重混合速度（0-1）  |
| `isPlaying`  | boolean           | false  | 是否正在播放混合动画 |

**常用方法**：

```typescript
// 添加变形目标
addTarget(target: MorphTargetData): void;

// 移除变形目标
removeTarget(name: string): void;

// 设置目标权重
setWeight(name: string, weight: number): void;

// 开始混合动画
play(): void;

// 停止混合动画
stop(): void;

// 更新混合状态（每帧调用）
update(deltaTime: number): void;
```

**示例代码**：

```typescript
// 创建混合器
const blender = new MorphTargetBlender();

// 添加口型目标
blender.addTarget({ name: "A", weight: 0 });
blender.addTarget({ name: "B", weight: 0 });

// 设置权重并播放
blender.setWeight("A", 1.0);
blender.setWeight("B", 0.5);
blender.play();

// 每帧更新
function update() {
  blender.update(deltaTime);
}
```

用于语音同步的嘴部动画：

```javascript
import { LipSync } from "@rings/animation";

const character = new TalkingCharacter();
const lipSync = new LipSync(character);

// 加载音素映射
lipSync.loadPhonemeMap("assets/lipsync/default.json");

// 开始口型同步
lipSync.startSync(audioStream, (phoneme) => {
  // 根据当前音素更新嘴型
  character.updateMouth(phoneme);
});

// 停止同步
lipSync.stopSync();
```

```javascript
entity.addComponent(AnimationComponent, {
  clips: ["walk", "run", "jump"],
  default: "idle",
});
```

## 扩展组件 API 参考

| 组件类型           | 属性           | 方法            |
| ------------------ | -------------- | --------------- |
| PhysicsComponent   | mass, shape    | applyForce()    |
| AnimationComponent | clips, speed   | play(), stop()  |
| AudioComponent     | source, volume | play(), pause() |

[返回组件系统 →](/components)
