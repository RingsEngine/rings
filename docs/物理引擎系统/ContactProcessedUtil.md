# 碰撞事件工具（ContactProcessedUtil）还在升级该功能暂不可用

基于 Bullet 的 **接触处理（contact processed）** 钩子，在 `Physics.world` 上注册**全局**回调；按 **刚体在引擎内部使用的指针 `kB`**（与接触流里 `colObj0WrapPtr` / `colObj1WrapPtr` 一致）登记「当该物体参与接触时」要执行的回调。

类为**纯静态工具**，无实例；内部维护 `callbacks`、`ignoredPointers` 等，**首个** `registerCollisionCallback` 时向 `Physics.world.setContactProcessedCallback` 挂接，**最后一个** `unregisterCollisionCallback` 时卸载。

### 回调签名

```typescript
type ContactCallback = (
  contactPoint: Ammo.btManifoldPoint,
  bodyA: Ammo.btRigidBody,
  bodyB: Ammo.btRigidBody
) => void;
```

- 对某次接触，若**仅一侧**在 `callbacks` 中注册了该指针，则**只**调用该侧一次回调（参数中 `bodyA`/`bodyB` 与 Bullet 侧一致）。
- 若**两侧**都注册了回调，则**两侧各调用一次**（第二次调用时参数中 `bodyA`/`bodyB` 互换），便于只关心「本物体」逻辑时仍写同一套代码。

### 指针与 `Rigidbody.btRigidbody.kB`

注册 / 忽略 / 查询时使用的 `pointer` 必须与内部 `contactProcessedCallback` 里用于 `Map` 查找的键一致。  
项目中 **`rigidbody.btRigidbody.kB`** 即为该碰撞对象包装指针，与 `Rigidbody` 内 `collisionEventHandler` / `addIgnoredPointer` 等用法一致。

```javascript
import { ContactProcessedUtil } from "@rings-webgpu/physics";

const rb = box.getComponent(Rigidbody);
const p = rb.btRigidbody.kB;
ContactProcessedUtil.registerCollisionCallback(p, (cp, bodyA, bodyB) => {
  // cp：btManifoldPoint；bodyA、bodyB：参与接触的两刚体
});
```

### 静态方法

| 方法 | 说明 |
|------|------|
| `registerCollisionCallback(pointer, callback)` | 为指针 `pointer` 注册碰撞回调；`pointer == null` 时直接返回。首次注册时内部会 `Physics.world.setContactProcessedCallback(...)`。 |
| `unregisterCollisionCallback(pointer)` | 注销该指针的回调；若已无注册项，则 `setContactProcessedCallback(null)` 关闭全局钩子。 |
| `addIgnoredPointer(pointer)` | 将指针加入忽略集合；**若某次接触中任一侧指针在忽略集合中**，则**整次接触不再**向任何用户回调派发（`contactProcessedCallback` 提前 `return 0`）。 |
| `removeIgnoredPointer(pointer)` | 从忽略集合移除。 |
| `isIgnored(pointer)` | 当前指针是否在忽略集合中。 |
| `isCollision(pointer)` | 是否已为该指针注册过「碰撞回调」（即 `callbacks.has(pointer)`）。 |
| `performCollisionTest(bodyA, bodyB?)` | **一次性**接触测试：若传入 `bodyB`，则 `contactPairTest(bodyA, bodyB, callback)`；否则 `contactTest(bodyA, callback)`。返回 `null` 或包含 `cpPtr`、`colObj0Wrap`、`colObj1Wrap`、`partId0`、`index0` 等字段的对象。 |
| `checkCollision(bodyA, bodyB)` | 遍历当前 `dispatcher` 中**已有流形**，判断两 `btRigidBody` 是否成对出现（用于「当前是否处于接触」的粗判，非射线测试）。 |

### 使用注意

1. **持续接触会高频触发**：物体静止叠放时，Bullet 仍会在子步内多次处理接触，**回调累计次数会很大**，属正常现象；若只需「首次碰撞」或「进入/离开」，需自行在业务层做状态机或节流。
2. **`ignore` 是整次接触短路**：任一侧在 `ignoredPointers` 中，则**该接触对**不会分发到任何已注册的 `callback`。
3. **`performCollisionTest` 与 `checkCollision` 语义不同**：前者主动发起一次 `contactTest`/`contactPairTest`；后者扫当前流形列表，适合与「持续碰撞」展示配合使用。

### 可运行示例（ContactProcessedUtil）

静态地面注册 `registerCollisionCallback`；定时生成落球（与 `physics-basics-demo` 同结构）；侧栏展示回调累计与地面 `kB` / `isIgnored`。可勾选「忽略地面」演示 `addIgnoredPointer` / `removeIgnoredPointer`。文档站内嵌 iframe 的相对地址由 `docs/index.html` 里 Docsify 插件解析为绝对 URL，避免空白。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-cpu-tab" id="rings-phy-cpu-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-cpu-tab" id="rings-phy-cpu-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-cpu-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-cpu-tab-preview"],
    .rings-quick-demo #rings-phy-cpu-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-cpu-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-cpu-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-cpu-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-cpu-tab-preview">示例</label>
    <label for="rings-phy-cpu-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff; min-height: 420px;">
    <iframe src="examples/physics-contact-processed-util-demo.html" title="Rings 物理：ContactProcessedUtil" style="width: 100%; min-height: 420px; border: none; display: block;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-contact-processed-util-demo.html

要点：buildGround → await wait → registerCollisionCallback(ptr, …)；beforeRender 仅 Physics.update + 定时 spawnDrop；勾选为 addIgnoredPointer / removeIgnoredPointer</code></pre>
  </div>
</div>
