# 物理引擎系统

核心物理模拟模块，提供刚体动力学、碰撞检测和物理材质系统。

各功能点（`Physics` 初始化、`CollisionShapeUtil`、`Rigidbody`、调试与拖拽、事件与 `GhostTrigger`、`ClothSoftbody`、铰链与点对点约束等）在**对应类文档**正文之后内嵌 **`rings-quick-demo`**（示例 / 代码 切换 + `iframe`），与《组件系统》中光照、网格等文档一致；示例脚本从 **unpkg** 加载 **`@rings-webgpu/core`** 与 **`@rings-webgpu/physics@0.0.2`**，文档站需以 **HTTP(S)** 打开以便 iframe 与 WebGPU 正常工作。

下文按 **类名** 分文档；本页汇总物理世界配置、使用流程与性能 / API 索引。

### 物理世界与使用流程

#### 1. 物理世界配置
```javascript
// 在Engine3D.init后，物理世界已自动初始化
import { Physics } from "@rings-webgpu/physics";

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

### 性能与 API 索引

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
| Physics               | `@rings-webgpu/physics`          | 物理引擎主类           |
| Rigidbody             | `@rings-webgpu/physics`          | 刚体组件               |
| CollisionShapeUtil    | `@rings-webgpu/physics`          | 碰撞体工具类           |
| HingeConstraint       | `@rings-webgpu/physics`          | 铰链约束               |
| SliderConstraint      | `@rings-webgpu/physics`          | 滑动约束               |
| FixedConstraint       | `@rings-webgpu/physics`          | 固定约束               |
| PointToPointConstraint| `@rings-webgpu/physics`        | 点对点约束             |
| ConeTwistConstraint   | `@rings-webgpu/physics`          | 锥形扭曲约束           |
| Generic6DofConstraint | `@rings-webgpu/physics`          | 6自由度约束            |
| Generic6DofSpringConstraint| `@rings-webgpu/physics`   | 6自由度弹簧约束        |
| ClothSoftbody         | `@rings-webgpu/physics`          | 布料软体组件           |
| ContactProcessedUtil  | `@rings-webgpu/physics`          | 碰撞事件工具类         |
| RigidBodyUtil         | `@rings-webgpu/physics`          | 刚体工具类             |
| PhysicsDragger        | `@rings-webgpu/physics`          | 物理拖拽工具           |

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

### 文档索引

以下链接使用 **站点根相对路径**（`/物理引擎系统/…`），与侧栏 `_sidebar.md` 一致，在 Docsify 中指向 `docs/物理引擎系统/` 下同名 `.md` 文件。

| 文档 | 说明 |
|------|------|
| [物理世界（Physics）](/物理引擎系统/Physics) | 物理世界初始化、重力、步进、射线等 |
| [碰撞形状工具（CollisionShapeUtil）](/物理引擎系统/CollisionShapeUtil) | 碰撞形状创建与 `Rigidbody.shape` |
| [刚体（Rigidbody）](/物理引擎系统/Rigidbody) | 刚体组件 |
| [物理拖拽（PhysicsDragger）](/物理引擎系统/PhysicsDragger) | `useDrag`、内置拖拽与物理调试绘制 |
| [碰撞事件工具（ContactProcessedUtil）](/物理引擎系统/ContactProcessedUtil) | 碰撞事件注册 |
| [幽灵触发器（GhostTrigger）](/物理引擎系统/GhostTrigger) | 触发体示例（与 `collisionEvent`） |
| [布料软体（ClothSoftbody）](/物理引擎系统/ClothSoftbody) | 布料软体 |
| [约束总览（Constraints）](/物理引擎系统/Constraints) | 约束综合示例、高级功能、约束通用属性 |
| [铰链约束（HingeConstraint）](/物理引擎系统/HingeConstraint) | 铰链约束 |
| [滑动约束（SliderConstraint）](/物理引擎系统/SliderConstraint) | 滑动约束 |
| [固定约束（FixedConstraint）](/物理引擎系统/FixedConstraint) | 固定约束 |
| [点对点约束（PointToPointConstraint）](/物理引擎系统/PointToPointConstraint) | 点对点约束 |
| [锥形扭曲约束（ConeTwistConstraint）](/物理引擎系统/ConeTwistConstraint) | 锥形扭曲约束 |
| [通用六自由度约束（Generic6DofConstraint）](/物理引擎系统/Generic6DofConstraint) | 通用 6DOF 约束 |
| [通用六自由度弹簧约束（Generic6DofSpringConstraint）](/物理引擎系统/Generic6DofSpringConstraint) | 6DOF 弹簧约束 |

