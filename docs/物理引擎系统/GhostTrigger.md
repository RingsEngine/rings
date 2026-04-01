# 幽灵触发器（GhostTrigger）

挂在 `Object3D` 上的物理组件，底层为 Bullet 的 **`btPairCachingGhostObject`**，参与 **重叠与碰撞检测**，默认 **不产生接触力**（传送门、安全区、拾取范围等）。通过 `Physics.world.addCollisionObject` 加入世界，与 `Rigidbody` 不同，不是 `btRigidBody`。

### 生命周期与变换同步

- **`start()`** 前必须为 **`shape`** 赋值，否则抛出 `Ghost object need collision shape`。
- **`start()`** 内根据物体当前 **`localPosition` / `localRotation`** 创建幽灵体并加入世界；随后绑定：
  - **`onPositionChange`** → 更新幽灵 `worldTransform` 的 origin；
  - **`onRotationChange`** → 更新 rotation（欧拉转四元数）；
  - **`onScaleChange`** → **`shape.setLocalScaling`**。
- 需要确保幽灵已就绪时再访问底层对象时，使用 **`await ghost.wait()`**（与 `Rigidbody.wait()` 类似）。

### 碰撞回调与指针

碰撞通知经 **`CollisionEventHandler`**，内部与 **`ContactProcessedUtil`** 配合。幽灵侧注册使用的指针为 **`Ammo.getPointer(this._ghostObject)`**，与刚体使用 **`Rigidbody.btRigidbody.kB`** 不同，但 **`collisionEvent` / `enableCollisionEvent`** 的用法与 `Rigidbody` 一致。

回调签名：

```typescript
(
  contactPoint: Ammo.btManifoldPoint,
  selfBody: Ammo.btRigidBody,
  otherBody: Ammo.btRigidBody
) => void;
```

类型上 `selfBody` / `otherBody` 为 `btRigidBody`；重叠场景以 Bullet 实际传入为准。**持续重叠时回调会高频触发**，若只需「进入/离开」需在业务层做状态或节流（参见 `ContactProcessedUtil` 文档说明）。

### 属性

| 属性 | 说明 |
|------|------|
| **`shape`** | `Ammo.btCollisionShape`。创建幽灵前必须设置。若幽灵已存在，赋值时会 `destroy` 旧碰撞形状再 `setCollisionShape`。 |
| **`userIndex`** | 用户自定义整数，同步到 `ghostObject.setUserIndex`（可选作对象标识）。 |
| **`collisionFlags`**（只读） | 幽灵已创建时返回 `ghostObject.getCollisionFlags()`；否则返回组件内部缓存标志。默认内部初值含 **`CollisionFlags.NO_CONTACT_RESPONSE`（4）**：无接触响应，仍可检测/回调。 |
| **`ghostObject`** | 只读，底层 `Ammo.btPairCachingGhostObject`；`start()` 完成前不可用。 |
| **`enableCollisionEvent`** | 是否启用并向 `ContactProcessedUtil` 注册该幽灵的碰撞回调。 |
| **`collisionEvent`** | 碰撞回调；设为函数后即按上述签名触发（需 `enableCollisionEvent` 为 true）。 |

### 方法

| 方法 | 说明 |
|------|------|
| **`start()`** | 组件生命周期：校验 `shape` → 创建并加入世界的幽灵体 → 绑定变换同步 → `collisionEventHandler.configure(Ammo.getPointer(ghost))`。 |
| **`wait(): Promise<btPairCachingGhostObject>`** | 等待 `start()` 完成，返回已初始化的幽灵对象。 |
| **`addCollisionFlag(value: CollisionFlags)`** | 与当前 `collisionFlags` 按位或后写回幽灵。 |
| **`removeCollisionFlag(value: CollisionFlags)`** | 清除指定位后写回幽灵。 |
| **`destroy(force?)`** | `removeCollisionObject`，销毁形状与幽灵对象，解除 `transform` 监听，`collisionEventHandler.destroy()`，再 `super.destroy`。 |
| **`static createAndAddGhostObject(shape, position, rotation, collisionFlags?, userIndex?)`** | 不挂组件时也可用的工厂：`new btPairCachingGhostObject()` → 设置位姿与形状 → 默认合并 `NO_CONTACT_RESPONSE` → 可选 `userIndex` → `Physics.world.addCollisionObject`。返回幽灵实例；生命周期需自行与世界保持一致。 |

### 使用示例

### 1. 组件方式：触发区域 + 形状（与 `physics-ghost-trigger-demo.html` 一致）

先 **`await Physics.init(...)`**，再在已挂网格的 `Object3D` 上添加 `GhostTrigger`，并在 **`scene.addChild` 之前** 设置 **`shape`**（`start()` 会读取位姿与形状）。

```typescript
import { Object3D, Vector3 } from "@rings-webgpu/core";
import { Physics, GhostTrigger, CollisionShapeUtil } from "@rings-webgpu/physics";

await Physics.init({});

const zone = new Object3D();
zone.y = 1.15;
// 可选：半透明网格仅用于可视化，物理形状单独用 CollisionShapeUtil 与区域尺寸一致
zone.addComponent(MeshRenderer /* ... */);

const ghost = zone.addComponent(GhostTrigger);
ghost.shape = CollisionShapeUtil.createBoxShape(zone);

scene.addChild(zone);

// 需要底层 btPairCachingGhostObject 时（例如调试）：
await ghost.wait();
// ghost.ghostObject 已可用
```

要点：**必须先 `Physics.init`**；**`shape` 在进场景触发 `start()` 前赋值**；移动 `zone` 的 `localPosition` / 旋转 / 缩放会由组件同步到幽灵体。

### 2. 碰撞回调（`collisionEvent`）

与 `Rigidbody` 相同，通过 **`collisionEvent`** 接收接触流回调；内部走 `ContactProcessedUtil`，**持续重叠时调用次数很高**，业务上常自己做节流或「进/出」状态机。

```typescript
const ghost = zone.addComponent(GhostTrigger);
ghost.shape = CollisionShapeUtil.createBoxShape(zone);
ghost.enableCollisionEvent = true;
ghost.collisionEvent = (_cp, _self, other) => {
  // other：与触发体重叠的另一侧刚体（类型为 btRigidBody，以运行时为准）
  // console.log("overlap", other);
};
scene.addChild(zone);
```

临时关闭回调可设 **`ghost.enableCollisionEvent = false`**。

### 3. `userIndex` 与碰撞标志

```typescript
import { CollisionFlags } from "@rings-webgpu/physics";

ghost.userIndex = 1001;
ghost.addCollisionFlag(CollisionFlags.STATIC_OBJECT); // 按项目需要组合 RigidbodyEnum 中的标志
// ghost.removeCollisionFlag(CollisionFlags.STATIC_OBJECT);
```

具体标志含义见 **`RigidbodyEnum` / Bullet** 文档；默认已含 **`NO_CONTACT_RESPONSE`**。

### 4. 静态工厂 `createAndAddGhostObject`（不挂组件）

适合自行管理对象、不经过 `ComponentBase` 生命周期的场景；**仍需**先 **`Physics.init`**，且**从世界移除与销毁**要自行成对调用，避免泄漏。

```typescript
import { Object3D, Vector3 } from "@rings-webgpu/core";
import { Physics, GhostTrigger, CollisionShapeUtil, Ammo } from "@rings-webgpu/physics";

await Physics.init({});

// 用临时 Object3D 的尺寸生成盒形状（不必加入场景）
const sizeRef = new Object3D();
sizeRef.localScale = new Vector3(2, 2, 2);
const boxShape = CollisionShapeUtil.createBoxShape(sizeRef);

const pos = new Vector3(0, 1, 0);
const rot = new Vector3(0, 0, 0);

const ghostObj = GhostTrigger.createAndAddGhostObject(
  boxShape,
  pos,
  rot,
  undefined,
  42 // userIndex 可选
);

// 不用时：
Physics.world.removeCollisionObject(ghostObj);
Ammo.destroy(ghostObj.getCollisionShape());
Ammo.destroy(ghostObj);
```

若同一块形状既用于 **`createAndAddGhostObject`，又挂到 `GhostTrigger`** 组件上，只能在一处负责 `Ammo.destroy(shape)`，避免双重释放。

### 使用注意

1. **`shape` 建议独占**：`destroy` 会 `Ammo.destroy(ghostObject.getCollisionShape())`，若与其它对象共享同一 shape 实例可能导致重复释放。
2. **`createAndAddGhostObject`** 使用 **`Physics.TEMP_TRANSFORM`** 写入位姿，避免在其它线程/回调中并发依赖该临时变换的代码与其交错。
3. 与 **`Rigidbody`** 的 **碰撞组/掩码** 未在本组件中暴露；若需与特定层交互，需结合项目中对 `addCollisionObject` 的扩展或后续 API。

### 可运行示例（GhostTrigger / 触发与回调）

`GhostTrigger` + `CollisionShapeUtil.createBoxShape`；可与 `collisionEvent` 配合观察与刚体重叠（运行条件同上）。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-ghost-tab" id="rings-phy-ghost-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-ghost-tab" id="rings-phy-ghost-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-ghost-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-ghost-tab-preview"],
    .rings-quick-demo #rings-phy-ghost-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-ghost-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-ghost-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-ghost-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-ghost-tab-preview">示例</label>
    <label for="rings-phy-ghost-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/physics-ghost-trigger-demo.html" title="Rings 物理：GhostTrigger" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-ghost-trigger-demo.html

要点：ghost.shape = CollisionShapeUtil.createBoxShape(zoneObj);</code></pre>
  </div>
</div>
