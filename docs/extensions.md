# 扩展组件

## 1.物理引擎

核心物理模拟模块，提供刚体动力学、碰撞检测和物理材质系统。

#### 导入方式

```javascript
import { Physics } from "@rings/physics";
```

#### 核心功能

- 刚体动力学模拟
- 多种碰撞体形状(Box, Sphere, Capsule, Mesh)
- 物理材质系统
- 射线检测和扫射检测
- 物理事件系统(碰撞、触发)

#### 详细属性说明

| 属性                   | 类型            | 默认值       | 取值范围            | 描述                                    | 性能影响                         | 使用建议                               |
| ---------------------- | --------------- | ------------ | ------------------- | --------------------------------------- | -------------------------------- | -------------------------------------- |
| gravity                | Vector3         | (0, -9.8, 0) | 任意实数            | 全局重力加速度向量，单位为 m/s²         | 几乎不影响性能                   | 建议保持 y 轴为负值模拟地球重力        |
| solverIterations       | number          | 10           | 1-50                | 约束求解器每帧迭代次数，影响物理稳定性  | 每增加 1 次迭代增加约 5%CPU 开销 | 简单场景用 5-10，复杂约束用 15-20      |
| fixedTimeStep          | number          | 1/60         | 0.001-0.1           | 固定物理更新时间步长(秒)，值越小越精确  | 直接影响 CPU 负载                | 60FPS 用 1/60，VR 应用建议 1/90        |
| allowSleep             | boolean         | true         | true/false          | 是否允许不活跃的刚体进入休眠状态        | 显著减少 CPU 计算量              | 除非需要持续受力，否则保持开启         |
| maxSubSteps            | number          | 10           | 1-20                | 最大子步数量，用于追赶落后物理模拟      | 子步越多 CPU 开销越大            | 通常 3-5 足够，高速物体需要更多        |
| collisionDetectionMode | enum            | Discrete     | Discrete/Continuous | 碰撞检测模式，Continuous 更精确但更耗能 | Continuous 模式增加 50%+CPU 开销 | 高速物体用 Continuous，普通用 Discrete |
| defaultMaterial        | PhysicsMaterial | 默认材质     | -                   | 全局默认物理材质                        | 不影响性能                       | 可配置默认摩擦/弹性系数                |
| enableCCD              | boolean         | false        | true/false          | 是否启用连续碰撞检测                    | 显著增加 CPU 开销                | 仅对高速移动物体启用                   |
| debugDraw              | boolean         | false        | true/false          | 是否绘制物理调试信息                    | 增加 GPU 绘制开销                | 开发调试时启用，发布时关闭             |

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

```javascript
// 初始化物理世界
Physics.init(scene);

// 创建物理材质
const material = Physics.createMaterial({
  friction: 0.5,
  restitution: 0.3,
});

// 射线检测
const hit = Physics.raycast(origin, direction, distance);

// 添加物理约束
Physics.addConstraint(bodyA, bodyB, constraintType);
```

#### 性能优化

```javascript
// 批量更新物理状态
Physics.beginUpdate();
// ...执行多个物理操作
Physics.endUpdate();

// 设置物理模拟频率
Physics.setSubSteps(4);
```

### CollisionShapeUtil 碰撞体工具

用于创建和管理各种物理碰撞体的实用工具类。

#### 导入方式

```javascript
import { CollisionShapeUtil } from "@orillusion/physics";
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

```javascript
// 创建长方体碰撞体
const boxShape = CollisionShapeUtil.createBox(size);

// 创建球体碰撞体
const sphereShape = CollisionShapeUtil.createSphere(radius);

// 创建胶囊体碰撞体
const capsuleShape = CollisionShapeUtil.createCapsule(radius, height);

// 从几何体创建凸包碰撞体
const convexShape = CollisionShapeUtil.createConvexHull(geometry);

// 从几何体创建三角形网格碰撞体
const meshShape = CollisionShapeUtil.createTriangleMesh(geometry);

// 设置碰撞体材质
CollisionShapeUtil.setMaterial(shape, {
  friction: 0.5,
  restitution: 0.3,
});

// 计算碰撞体包围盒
const aabb = CollisionShapeUtil.computeAABB(shape);
```

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
import { Rigidbody } from "@orillusion/physics";
```

#### 组件功能

- 为物体添加物理模拟能力
- 响应碰撞和触发事件
- 支持多种刚体类型
- 可配置物理材质
- 支持各种约束

#### 刚体类型

| 类型      | 值  | 描述                     |
| --------- | --- | ------------------------ |
| Static    | 0   | 静态刚体，不受力影响     |
| Dynamic   | 1   | 动态刚体，完全物理模拟   |
| Kinematic | 2   | 运动学刚体，通过代码控制 |

#### 主要属性

| 属性            | 类型    | 默认值  | 描述             |
| --------------- | ------- | ------- | ---------------- |
| mass            | number  | 1.0     | 质量(kg)         |
| linearDamping   | number  | 0.1     | 线性阻尼         |
| angularDamping  | number  | 0.1     | 角阻尼           |
| restitution     | number  | 0.5     | 弹性系数         |
| friction        | number  | 0.5     | 摩擦系数         |
| linearVelocity  | Vector3 | (0,0,0) | 线速度           |
| angularVelocity | Vector3 | (0,0,0) | 角速度           |
| isKinematic     | boolean | false   | 是否为运动学刚体 |
| useGravity      | boolean | true    | 是否受重力影响   |

#### 常用方法

```javascript
// 添加力
rigidbody.addForce(force, mode);

// 添加扭矩
rigidbody.addTorque(torque, mode);

// 设置位置和旋转
rigidbody.setPosition(position);
rigidbody.setRotation(rotation);

// 获取碰撞体
const shape = rigidbody.getCollisionShape();

// 设置碰撞体
rigidbody.setCollisionShape(shape);

// 设置刚体类型
rigidbody.setType(type);

// 设置是否受重力影响
rigidbody.setUseGravity(useGravity);
```

#### 使用示例

```javascript
// 创建刚体组件
const rigidbody = gameObject.addComponent(Rigidbody);

// 配置刚体属性
rigidbody.mass = 10;
rigidbody.type = 1; // Dynamic
rigidbody.restitution = 0.7;
rigidbody.friction = 0.3;

// 添加力
rigidbody.addForce(new Vector3(0, 100, 0));

// 设置碰撞体
rigidbody.setCollisionShape(CollisionShapeUtil.createSphere(1.0));

// 运动学控制示例
rigidbody.type = 2; // Kinematic
function update() {
  rigidbody.setPosition(new Vector3(0, Math.sin(time), 0));
}
```

#### 性能建议

1. 静态物体使用 Static 类型
2. 不需要物理模拟的物体移除刚体组件
3. 适当调整阻尼减少抖动
4. 批量更新物理状态
5. 避免每帧修改刚体属性
6. 运动学刚体适合程序控制的物体
7. 合理设置质量比例避免不稳定

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

#### 约束使用建议

1. 优先使用简单约束(Hinge/Fixed/PointToPoint)
2. 复杂约束(6DOF)会显著增加计算量
3. 合理设置约束限制范围
4. 避免过度使用弹簧约束
5. 静态物体作为约束锚点性能更好
6. 批量更新约束参数

## 2. 动画组件

管理骨骼动画和状态切换

### 2.1 模型内置动画

用于处理 3D 模型自带的动画序列，支持骨骼动画、顶点变形动画等模型内置动画类型：

```javascript
import { AnimatorComponent } from "@rings/core";

// 创建带有动画的模型实体
const animatedModel = new Entity();
animatedModel.addComponent(AnimatorComponent, {
  clips: ["idle", "walk", "run", "attack"], // 可用动画剪辑列表
  default: "idle", // 默认播放的动画
  speed: 1.0, // 播放速度
  loop: true, // 是否循环播放
});

// 获取动画组件
const animator = animatedModel.getComponent(AnimatorComponent);

// 播放指定动画
animator.play("walk");

// 动画过渡
animator.crossFade("run", 0.3); // 0.3秒淡入淡出过渡

// 动画事件监听
animator.on("attack:start", () => {
  console.log("攻击动画开始");
});

// 动画混合
animator.setBlendWeight("upperBody", 0.5); // 上半身动画权重0.5

// 暂停/恢复动画
animator.pause();
animator.resume();

// 获取动画状态
console.log(animator.currentClip); // 当前播放的动画
console.log(animator.isPlaying); // 是否正在播放
```

#### 属性列表

1. **`timeScale: number`**

   - **描述**：全局动画播放速度的缩放因子。
   - **默认值**：`1.0`。
   - **用法**：
     ```typescript
     animator.timeScale = 2.0; // 以双倍速度播放动画
     ```

2. **`avatar: string`**

   - **描述**：绑定骨骼数据的名称（`PrefabAvatarData`）。
   - **用法**：
     ```typescript
     animator.avatar = "character_avatar"; // 绑定骨骼数据
     ```

3. **`clips: PropertyAnimationClip[]`**

   - **描述**：动画剪辑列表，用于管理骨骼动画。
   - **用法**：
     ```typescript
     animator.clips = [walkClip, runClip]; // 设置动画剪辑
     ```

4. **`playBlendShapeLoop: boolean`**

   - **描述**：控制 BlendShape 动画是否循环播放。
   - **默认值**：`false`。
   - **用法**：
     ```typescript
     animator.playBlendShapeLoop = true; // 启用循环播放
     ```

5. **`jointMatrixIndexTableBuffer: StorageGPUBuffer`**
   - **描述**：骨骼矩阵索引表，用于 GPU 计算。
   - **注意**：通常由系统自动生成，无需手动设置。

##### 方法列表

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

2. **`crossFade(anim: string, crossTime: number)`**

   - **描述**：交叉淡入淡出到另一个动画。
   - **参数**：
     - `anim`：目标动画剪辑名称。
     - `crossTime`：淡入淡出时间（秒）。
   - **用法**：
     ```typescript
     animator.crossFade("run", 0.5); // 在0.5秒内淡入跑步动画
     ```

3. **`playBlendShape(shapeName: string, time?: number, speed?: number)`**

   - **描述**：播放指定的 BlendShape 动画。
   - **参数**：
     - `shapeName`：BlendShape 名称。
     - `time`：起始时间（秒），默认为 `0`。
     - `speed`：播放速度，默认为 `1`。
   - **用法**：
     ```typescript
     animator.playBlendShape("smile", 0, 0.5); // 以0.5倍速度播放微笑动画
     ```

4. **`getJointIndexTable(skinJointsName: string[])`**

   - **描述**：获取骨骼索引表。
   - **参数**：
     - `skinJointsName`：骨骼名称数组。
   - **返回值**：骨骼索引数组。
   - **用法**：
     ```typescript
     let indices = animator.getJointIndexTable(["arm_L", "arm_R"]);
     ```

5. 多动画剪辑管理
6. 平滑过渡和混合
7. 精确的动画事件系统
8. 播放控制（暂停/恢复/速度调节）
9. 支持 GLTF/GLB、FBX 等主流动画格式
10. 动画遮罩和分层控制

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
