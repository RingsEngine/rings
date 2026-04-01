import { Vector3 as d, Quaternion as S, DEGREES_TO_RADIANS as H, Color as G, GetCountInstanceID as Q, Engine3D as B, PointerEvent3D as I, BoundingBox as q, Time as K, Matrix4 as W, MeshRenderer as M, CylinderGeometry as J, PlaneGeometry as D, SphereGeometry as Y, BoxGeometry as X, VertexAttributeName as w, BoundUtil as Z, BiMap as $, ComponentBase as v, ColliderComponent as tt, BoxColliderShape as it, CapsuleColliderShape as et, SphereColliderShape as st, GeometryBase as ot } from "@rings-webgpu/core";
import r from "@rings-webgpu/ammo";
import { default as Tt } from "@rings-webgpu/ammo";
class u {
  static callbacks = /* @__PURE__ */ new Map();
  static ignoredPointers = /* @__PURE__ */ new Set();
  static contactProcessedCallbackPointer = null;
  /**
   * 注册碰撞事件
   * @param pointer 物理对象指针
   * @param callback 事件回调
   */
  static registerCollisionCallback(t, i) {
    t != null && (u.callbacks.set(t, i), u.callbacks.size === 1 && u.registerContactProcessedCallback());
  }
  /**
   * 注销碰撞事件
   * @param pointer 物理对象指针
   */
  static unregisterCollisionCallback(t) {
    u.callbacks.delete(t), u.callbacks.size === 0 && u.unregisterContactProcessedCallback();
  }
  /**
   * 注册全局碰撞处理回调
   */
  static registerContactProcessedCallback() {
    u.contactProcessedCallbackPointer === null && (u.contactProcessedCallbackPointer = r.addFunction(
      u.contactProcessedCallback
    ), g.world.setContactProcessedCallback(
      u.contactProcessedCallbackPointer
    ));
  }
  /**
   * 注销全局碰撞处理回调
   */
  static unregisterContactProcessedCallback() {
    u.contactProcessedCallbackPointer !== null && (g.world.setContactProcessedCallback(null), u.contactProcessedCallbackPointer = null);
  }
  /**
   * 将指针添加到忽略集合中，添加后，任何物体与该指针对象碰撞时都无法触发碰撞事件
   * @param pointer 物理对象指针
   */
  static addIgnoredPointer(t) {
    t != null && u.ignoredPointers.add(t);
  }
  /**
   * 从忽略集合中移除指针
   * @param pointer 物理对象指针
   */
  static removeIgnoredPointer(t) {
    u.ignoredPointers.delete(t);
  }
  /**
   * 检查指针是否在忽略集合中
   * @param pointer 物理对象指针
   */
  static isIgnored(t) {
    return u.ignoredPointers.has(t);
  }
  /**
   * 检查指针是否注册了碰撞事件
   * @param pointer 物理对象指针
   */
  static isCollision(t) {
    return u.callbacks.has(t);
  }
  /**
   * 全局接触（碰撞）事件回调函数
   */
  static contactProcessedCallback(t, i, e) {
    if (u.ignoredPointers.has(i) || u.ignoredPointers.has(e))
      return 0;
    const s = u.callbacks.get(i), n = u.callbacks.get(e);
    if (s || n) {
      const a = r.wrapPointer(t, r.btManifoldPoint), c = r.wrapPointer(i, r.btRigidBody), h = r.wrapPointer(e, r.btRigidBody);
      s?.(a, c, h), n?.(a, h, c);
    }
    return 0;
  }
  /**
   * 执行一次性的碰撞测试。
   * 如果提供了 bodyB，则检测 bodyA 与 bodyB 是否碰撞。
   * 否则，检测 bodyA 是否与其他所有刚体碰撞。
   * @param bodyA - 第一个刚体。
   * @param bodyB - （可选）第二个刚体。
   * @returns 如果发生碰撞，返回包含碰撞信息的对象；否则返回 null。
   */
  static performCollisionTest(t, i) {
    const e = new r.ConcreteContactResultCallback();
    let s = null;
    return e.addSingleResult = (n, a, c, h, m, _, y) => {
      let f = r.wrapPointer(
        a,
        r.btCollisionObjectWrapper
      ), p = r.wrapPointer(
        m,
        r.btCollisionObjectWrapper
      );
      return s = {
        cpPtr: n,
        colObj0Wrap: f,
        colObj1Wrap: p,
        partId0: c,
        index0: h,
        partId1: _,
        index1: y
      }, 0;
    }, i ? g.world.contactPairTest(t, i, e) : g.world.contactTest(t, e), r.destroy(e), s;
  }
  /**
   * 碰撞检测，判断两个刚体是否正在发生碰撞
   * @param bodyA
   * @param bodyB
   * @returns boolean
   */
  static checkCollision(t, i) {
    const e = g.world.getDispatcher(), s = e.getNumManifolds();
    for (let n = 0; n < s; n++) {
      const a = e.getManifoldByIndexInternal(n), c = r.castObject(a.getBody0(), r.btRigidBody), h = r.castObject(a.getBody1(), r.btRigidBody);
      if (c === t && h === i || c === i && h === t)
        return !0;
    }
    return !1;
  }
}
class o {
  static tmpVecA;
  static tmpVecB;
  static tmpVecC;
  static tmpVecD;
  static tmpQuaA;
  static tmpQuaB;
  /**
   * 初始化 Ammo 后创建预定义的 btVector3 和 btQuaternion 实例，以便复用
   */
  static init() {
    this.tmpVecA = new r.btVector3(0, 0, 0), this.tmpVecB = new r.btVector3(0, 0, 0), this.tmpVecC = new r.btVector3(0, 0, 0), this.tmpVecD = new r.btVector3(0, 0, 0), this.tmpQuaA = new r.btQuaternion(0, 0, 0, 1), this.tmpQuaB = new r.btQuaternion(0, 0, 0, 1);
  }
  /**
   * Quaternion to Ammo.btQuaternion
   */
  static toBtQua(t, i) {
    return i ||= this.tmpQuaA, i.setValue(t.x, t.y, t.z, t.w), i;
  }
  /**
   * Vector3 to Ammo.btVector3
   */
  static toBtVec(t, i) {
    return i ||= this.tmpVecA, i.setValue(t.x, t.y, t.z), i;
  }
  /**
   * Set Ammo.btVector3 using x, y, z
   */
  static setBtVec(t, i, e, s) {
    return s ||= this.tmpVecA, s.setValue(t, i, e), s;
  }
  /**
   * Set Ammo.btQuaternion using x, y, z, w
   */
  static setBtQua(t, i, e, s, n) {
    return n ||= this.tmpQuaA, n.setValue(t, i, e, s), n;
  }
  /**
   * Ammo.btVector3 to Vector3
   */
  static fromBtVec(t, i) {
    return i ||= new d(), i.set(t.x(), t.y(), t.z()), i;
  }
  /**
   * Ammo.btQuaternion to Quaternion
   */
  static fromBtQua(t, i) {
    return i ||= new S(), i.set(t.x(), t.y(), t.z(), t.w()), i;
  }
  /**
   * Euler Vector3 to Ammo.Quaternion
   */
  static eulerToBtQua(t, i) {
    return i ||= this.tmpQuaA, i.setEulerZYX(
      t.z * H,
      t.y * H,
      t.x * H
    ), i;
  }
  /**
   * Sets the given Ammo.btVector3 to (0, 0, 0)
   */
  static zeroBtVec(t) {
    return this.setBtVec(0, 0, 0, t);
  }
  /**
   * Sets the given Ammo.btQuaternion to (0, 0, 0, 1)
   */
  static resetBtQua(t) {
    return this.setBtQua(0, 0, 0, 1, t);
  }
}
class E {
  /**
   * 创建 Ammo 刚体。
   * @param object3D - 三维对象。
   * @param shape - 碰撞形状。
   * @param mass - 碰撞体的质量。
   * @param position - 可选参数，刚体的位置，默认使用三维对象的 `localPosition`
   * @param rotation - 可选参数，刚体的旋转，默认使用三维对象的 `localRotation`
   * @returns 新创建的 Ammo.btRigidBody 对象。
   */
  static createRigidBody(t, i, e, s, n) {
    s ||= t.localPosition, n ||= t.localRotation;
    const a = g.TEMP_TRANSFORM;
    a.setIdentity(), a.setOrigin(o.toBtVec(s));
    let c = n instanceof d ? o.eulerToBtQua(n) : o.toBtQua(n);
    a.setRotation(c);
    const h = new r.btDefaultMotionState(a), m = o.zeroBtVec();
    i.calculateLocalInertia(e, m);
    const _ = new r.btRigidBodyConstructionInfo(
      e,
      h,
      i,
      m
    );
    return new r.btRigidBody(_);
  }
  /**
   * 更新刚体的位置和旋转。
   * 此函数将新的位置和旋转应用到刚体上。
   * @param bodyRb - 刚体对象。
   * @param position - 刚体的新位置，以 Vector3 形式表示。
   * @param rotation - 刚体的新旋转，可选，可以是 Vector3 形式表示的欧拉角（将自动转换为四元数），默认为四元数零值。
   * @param clearFV - 清除力和速度，可选，默认为 false 。
   */
  static updateTransform(t, i, e, s) {
    e ||= S._zero;
    const n = t.getWorldTransform();
    n.setOrigin(o.toBtVec(i));
    let a = e instanceof d ? o.eulerToBtQua(e) : o.toBtQua(e);
    n.setRotation(a), t.setWorldTransform(n), t.getMotionState().setWorldTransform(n), t.activate(), s && this.clearForcesAndVelocities(t);
  }
  /**
   * 更新刚体位置
   * @param bodyRb
   * @param value
   */
  static updatePosition(t, i) {
    t.isKinematicObject() ? (t.getMotionState().getWorldTransform(g.TEMP_TRANSFORM), g.TEMP_TRANSFORM.setOrigin(o.toBtVec(i)), t.getMotionState().setWorldTransform(g.TEMP_TRANSFORM)) : (t.getWorldTransform().getOrigin().setValue(i.x, i.y, i.z), t.activate());
  }
  /**
   * 更新刚体旋转
   * @param bodyRb
   * @param value
   */
  static updateRotation(t, i) {
    t.isKinematicObject() ? (t.getMotionState().getWorldTransform(g.TEMP_TRANSFORM), g.TEMP_TRANSFORM.setRotation(o.eulerToBtQua(i)), t.getMotionState().setWorldTransform(g.TEMP_TRANSFORM)) : (t.getWorldTransform().setRotation(o.eulerToBtQua(i)), t.activate());
  }
  /**
   * 更新刚体缩放
   * @param bodyRb
   * @param value
   * @param mass
   */
  static updateScale(t, i, e) {
    const s = t.getCollisionShape();
    if (s.setLocalScaling(o.toBtVec(i)), e > 0) {
      const n = o.zeroBtVec();
      s.calculateLocalInertia(e, n), t.setMassProps(e, n), t.activate();
    }
  }
  /**
   * 清除力和速度
   * @param bodyRb
   */
  static clearForcesAndVelocities(t) {
    t.clearForces(), t.setLinearVelocity(o.zeroBtVec()), t.setAngularVelocity(o.zeroBtVec());
  }
  /**
   * 激活物理世界中的全部碰撞对
   */
  static activateCollisionBodies() {
    const t = g.world.getDispatcher(), i = t.getNumManifolds();
    for (let e = 0; e < i; e++) {
      const s = t.getManifoldByIndexInternal(e), n = r.castObject(s.getBody0(), r.btRigidBody), a = r.castObject(s.getBody1(), r.btRigidBody);
      n && n.getMotionState() && n.activate(), a && a.getMotionState() && a.activate();
    }
  }
  /**
   * 销毁刚体及其状态和形状
   * @param bodyRb
   */
  static destroyRigidBody(t) {
    if (!t) return console.warn("There is no rigid body");
    g.world.removeRigidBody(t), r.destroy(t.getCollisionShape()), r.destroy(t.getMotionState()), r.destroy(t);
  }
  /**
   * 销毁约束
   * @param constraint
   */
  static destroyConstraint(t) {
    t && (g.world.removeConstraint(t), r.destroy(t), t = null);
  }
}
var b = /* @__PURE__ */ ((l) => (l[l.NoDebug = 0] = "NoDebug", l[l.DrawWireframe = 1] = "DrawWireframe", l[l.DrawAabb = 2] = "DrawAabb", l[l.DrawFeaturesText = 4] = "DrawFeaturesText", l[l.DrawContactPoints = 8] = "DrawContactPoints", l[l.NoDeactivation = 16] = "NoDeactivation", l[l.NoHelpText = 32] = "NoHelpText", l[l.DrawText = 64] = "DrawText", l[l.ProfileTimings = 128] = "ProfileTimings", l[l.EnableSatComparison = 256] = "EnableSatComparison", l[l.DisableBulletLCP = 512] = "DisableBulletLCP", l[l.EnableCCD = 1024] = "EnableCCD", l[l.DrawConstraints = 2048] = "DrawConstraints", l[l.DrawConstraintLimits = 4096] = "DrawConstraintLimits", l[l.FastWireframe = 8192] = "FastWireframe", l[l.DrawAabbDynamic = 16384] = "DrawAabbDynamic", l[l.DrawSoftBodies = 32768] = "DrawSoftBodies", l))(b || {});
class nt {
  debugDrawer;
  _enable = !0;
  frameCount = 0;
  /**
   * A graphic object used to draw lines
   *
   * Type: `Graphic3D`
   */
  graphic3D;
  // Exceeding 32,000 lines may cause engine crash.
  lineCount = 0;
  lineNameList = [];
  _tmpCor = new G();
  _tmpVecA = new d();
  _tmpVecB = new d();
  world;
  debugMode;
  updateFreq;
  maxLineCount;
  debugModeList = {
    NoDebug: b.NoDebug,
    DrawWireframe: b.DrawWireframe,
    DrawAabb: b.DrawAabb,
    DrawFeaturesText: b.DrawFeaturesText,
    DrawContactPoints: b.DrawContactPoints,
    NoDeactivation: b.NoDeactivation,
    NoHelpText: b.NoHelpText,
    DrawText: b.DrawText,
    ProfileTimings: b.ProfileTimings,
    EnableSatComparison: b.EnableSatComparison,
    DisableBulletLCP: b.DisableBulletLCP,
    EnableCCD: b.EnableCCD,
    DrawConstraints: b.DrawConstraints,
    DrawConstraintLimits: b.DrawConstraintLimits,
    FastWireframe: b.FastWireframe,
    DrawAabbDynamic: b.DrawAabbDynamic,
    DrawSoftBodies: b.DrawSoftBodies
  };
  constructor(t, i, e = {}) {
    if (!i)
      throw new Error("Physics Debug Drawer requires a Graphic3D object.");
    this.world = t, this.graphic3D = i, this._enable = e.enable || !1, this.debugMode = e.debugDrawMode ?? b.DrawWireframe, this.updateFreq = e.updateFreq || 1, this.maxLineCount = e.maxLineCount || 25e3, this.debugDrawer = new r.DebugDrawer(), this.debugDrawer.drawLine = this.drawLine.bind(this), this.debugDrawer.drawContactPoint = this.drawContactPoint.bind(this), this.debugDrawer.reportErrorWarning = this.reportErrorWarning.bind(this), this.debugDrawer.draw3dText = this.draw3dText.bind(this), this.debugDrawer.setDebugMode = this.setDebugMode.bind(this), this.debugDrawer.getDebugMode = this.getDebugMode.bind(this), this.world.setDebugDrawer(this.debugDrawer);
  }
  /**
   * 启用/禁用物理调试绘制
   */
  set enable(t) {
    this._enable = t, this.lineNameList.length > 0 && this.clearLines();
  }
  get enable() {
    return this._enable;
  }
  setDebugMode(t) {
    this.debugMode = t;
  }
  getDebugMode() {
    return this.debugMode;
  }
  update() {
    this._enable && ++this.frameCount % this.updateFreq === 0 && (this.clearLines(), this.world.debugDrawWorld(), this.lineCount = 0);
  }
  drawLine(t, i, e) {
    if (!this._enable || ++this.lineCount > this.maxLineCount) return;
    const s = r.wrapPointer(
      t,
      r.btVector3
    ), n = r.wrapPointer(i, r.btVector3), a = r.wrapPointer(
      e,
      r.btVector3
    ), c = this._tmpCor.copyFromVector(
      o.fromBtVec(a, this._tmpVecA)
    ), h = o.fromBtVec(s, this._tmpVecA), m = o.fromBtVec(n, this._tmpVecB), _ = `AmmoLine_${this.lineCount}`;
    this.lineNameList.push(_), this.graphic3D.drawLines(_, [h, m], c);
  }
  drawContactPoint(t, i, e, s, n) {
    if (!this._enable || ++this.lineCount > this.maxLineCount) return;
    const a = r.wrapPointer(
      n,
      r.btVector3
    ), c = r.wrapPointer(
      t,
      r.btVector3
    ), h = r.wrapPointer(
      i,
      r.btVector3
    ), m = this._tmpCor.copyFromVector(
      o.fromBtVec(a, this._tmpVecA)
    ), _ = o.fromBtVec(c, this._tmpVecA), y = o.fromBtVec(h, this._tmpVecB), f = _.add(y.multiplyScalar(e), this._tmpVecB), p = `AmmoContactPoint_${Q()}`;
    this.lineNameList.push(p), this.graphic3D.drawLines(p, [_, f], m);
  }
  reportErrorWarning(t) {
    const i = r.UTF8ToString(t);
    console.error(i);
  }
  draw3dText(t, i) {
    const e = r.wrapPointer(
      t,
      r.btVector3
    ), s = r.UTF8ToString(i);
    console.log("draw3dText", e, s);
  }
  clearLines() {
    this.lineNameList.forEach((t) => this.graphic3D.Clear(t)), this.lineNameList.length = 0;
  }
}
var R = /* @__PURE__ */ ((l) => (l[l.DEFAULT = 0] = "DEFAULT", l[l.STATIC_OBJECT = 1] = "STATIC_OBJECT", l[l.KINEMATIC_OBJECT = 2] = "KINEMATIC_OBJECT", l[l.NO_CONTACT_RESPONSE = 4] = "NO_CONTACT_RESPONSE", l[l.CUSTOM_MATERIAL_CALLBACK = 8] = "CUSTOM_MATERIAL_CALLBACK", l[l.CHARACTER_OBJECT = 16] = "CHARACTER_OBJECT", l[l.DISABLE_VISUALIZE_OBJECT = 32] = "DISABLE_VISUALIZE_OBJECT", l[l.DISABLE_SPU_COLLISION_PROCESSING = 64] = "DISABLE_SPU_COLLISION_PROCESSING", l[l.HAS_CONTACT_STIFFNESS_DAMPING = 128] = "HAS_CONTACT_STIFFNESS_DAMPING", l[l.HAS_CUSTOM_DEBUG_RENDERING_COLOR = 256] = "HAS_CUSTOM_DEBUG_RENDERING_COLOR", l[l.HAS_FRICTION_ANCHOR = 512] = "HAS_FRICTION_ANCHOR", l[l.HAS_COLLISION_SOUND_TRIGGER = 1024] = "HAS_COLLISION_SOUND_TRIGGER", l))(R || {}), x = /* @__PURE__ */ ((l) => (l[l.ACTIVE_TAG = 1] = "ACTIVE_TAG", l[l.ISLAND_SLEEPING = 2] = "ISLAND_SLEEPING", l[l.WANTS_DEACTIVATION = 3] = "WANTS_DEACTIVATION", l[l.DISABLE_DEACTIVATION = 4] = "DISABLE_DEACTIVATION", l[l.DISABLE_SIMULATION = 5] = "DISABLE_SIMULATION", l))(x || {});
class F {
  _view;
  _lockDragToSurface;
  _interactionDepth;
  _offset = new d();
  _grabLocal = new d();
  _allHitsResult;
  _rigidBody;
  _rayStart;
  _rayEnd;
  _raycastResult;
  _isDragging = !1;
  _hitPoint = new d();
  _enable = !0;
  static RAY_LEN = 2e3;
  get enable() {
    return this._enable;
  }
  set enable(t) {
    this._enable !== t && (this._enable = t, t ? this.registerEvents() : this.unregisterEvents());
  }
  filterStatic = !0;
  set collisionFilterGroup(t) {
    this._raycastResult?.set_m_collisionFilterGroup(t), this._allHitsResult?.set_m_collisionFilterGroup(t);
  }
  set collisionFilterMask(t) {
    this._raycastResult?.set_m_collisionFilterMask(t), this._allHitsResult?.set_m_collisionFilterMask(t);
  }
  constructor(t) {
    this._lockDragToSurface = t?.lockDragToSurface === !0, this.initRaycast(), this.tryRegisterEvents();
  }
  initRaycast() {
    this._rayStart = new r.btVector3(), this._rayEnd = new r.btVector3(), this._raycastResult = new r.ClosestRayResultCallback(
      this._rayStart,
      this._rayEnd
    );
  }
  ensureAllHits() {
    return this._allHitsResult || (this._allHitsResult = new r.AllHitsRayResultCallback(
      this._rayStart,
      this._rayEnd
    )), this._allHitsResult;
  }
  pickHitPointOnRigidBody(t) {
    const i = this.ensureAllHits();
    i.set_m_rayFromWorld(this._rayStart), i.set_m_rayToWorld(this._rayEnd), g.world.rayTest(this._rayStart, this._rayEnd, i);
    const e = i.get_m_collisionObjects();
    if (!e || e.size() === 0) return null;
    const s = i.get_m_hitFractions(), n = i.get_m_hitPointWorld(), a = r.getPointer(t);
    let c = 1.0001, h = null;
    for (let m = 0, _ = e.size(); m < _; m++) {
      const y = e.at(m);
      if (this.filterStatic && y.isStaticObject()) continue;
      const f = r.castObject(y, r.btRigidBody);
      if (!f || r.getPointer(f) !== a) continue;
      const p = s.at(m);
      p < c && (c = p, h = n.at(m));
    }
    return h;
  }
  tryRegisterEvents() {
    const t = setInterval(() => {
      B.inputSystem && (this.registerEvents(), clearInterval(t));
    }, 100);
  }
  registerEvents() {
    this._view = B.views[0], B.inputSystem?.addEventListener(
      I.POINTER_DOWN,
      this.onMouseDown,
      this
    ), B.inputSystem?.addEventListener(
      I.POINTER_MOVE,
      this.onMouseMove,
      this,
      null,
      20
    ), B.inputSystem?.addEventListener(
      I.POINTER_UP,
      this.onMouseUp,
      this,
      null,
      20
    ), B.inputSystem?.addEventListener(
      I.POINTER_WHEEL,
      this.onMouseWheel,
      this,
      null,
      20
    );
  }
  unregisterEvents() {
    B.inputSystem?.removeEventListener(
      I.POINTER_DOWN,
      this.onMouseDown,
      this
    ), B.inputSystem?.removeEventListener(
      I.POINTER_MOVE,
      this.onMouseMove,
      this
    ), B.inputSystem?.removeEventListener(
      I.POINTER_UP,
      this.onMouseUp,
      this
    ), B.inputSystem?.removeEventListener(
      I.POINTER_WHEEL,
      this.onMouseWheel,
      this
    ), this.resetState(), this._view = null;
  }
  onMouseDown(t) {
    if (this._enable && t.mouseCode === 0) {
      const i = this._view.camera;
      if (this._lockDragToSurface) {
        const e = i.screenPointToRay(t.mouseX, t.mouseY), s = d.HELP_0;
        s.copyFrom(e.direction), s.normalize(), s.multiplyScalar(F.RAY_LEN);
        const n = d.add(e.origin, s, d.HELP_1);
        this._rayStart.setValue(e.origin.x, e.origin.y, e.origin.z), this._rayEnd.setValue(n.x, n.y, n.z), this.beginDragFromRay();
      } else {
        const e = i.screenPointToRay(t.mouseX, t.mouseY), s = e.direction.normalize(), n = e.origin.add(
          s.multiplyScalar(1e3),
          e.origin
        );
        this.resetRayCallback(this._raycastResult), this.castRay(i.object3D.localPosition, n);
      }
      if (this._isDragging && (t.stopImmediatePropagation(), !this._lockDragToSurface)) {
        const e = i.worldToScreenPoint(
          this._hitPoint,
          d.HELP_1
        );
        this._interactionDepth = e.z;
      }
    }
  }
  beginDragFromRay() {
    if (this.resetRayCallback(this._raycastResult), this._raycastResult.set_m_rayFromWorld(this._rayStart), this._raycastResult.set_m_rayToWorld(this._rayEnd), g.world.rayTest(this._rayStart, this._rayEnd, this._raycastResult), !this._raycastResult.hasHit()) return;
    const t = this._raycastResult.get_m_collisionObject();
    if (this.filterStatic && t.isStaticObject()) return;
    this._rigidBody = r.castObject(t, r.btRigidBody), o.fromBtVec(
      this._raycastResult.get_m_hitPointWorld(),
      this._hitPoint
    ), this._rigidBody.setCollisionFlags(
      this._rigidBody.getCollisionFlags() | R.KINEMATIC_OBJECT
    ), this._rigidBody.getMotionState().getWorldTransform(g.TEMP_TRANSFORM);
    const i = o.fromBtVec(
      g.TEMP_TRANSFORM.getOrigin(),
      d.HELP_0
    ), e = o.fromBtQua(
      g.TEMP_TRANSFORM.getRotation(),
      S.HELP_0
    ).inverse(S.HELP_1), s = d.sub(this._hitPoint, i, d.HELP_2);
    e.transformVector(s, this._grabLocal), this._isDragging = !0, document.body.style.cursor = "grab";
  }
  onMouseMove(t) {
    !this._enable || !this._isDragging || (t.stopImmediatePropagation(), this.updateRigidBody());
  }
  onMouseUp(t) {
    !this._enable || !this._isDragging || t.mouseCode === 0 && this.resetState();
  }
  onMouseWheel(t) {
    !this._enable || !this._isDragging || this.updateRigidBody();
  }
  resetRayCallback(t) {
    t.set_m_closestHitFraction(1), t.set_m_collisionObject(null);
  }
  castRay(t, i) {
    if (this._rayStart.setValue(t.x, t.y, t.z), this._rayEnd.setValue(i.x, i.y, i.z), this._raycastResult.set_m_rayFromWorld(this._rayStart), this._raycastResult.set_m_rayToWorld(this._rayEnd), g.world.rayTest(this._rayStart, this._rayEnd, this._raycastResult), this._raycastResult.hasHit()) {
      const e = this._raycastResult.get_m_collisionObject();
      if (this.filterStatic && e.isStaticObject()) return;
      this._rigidBody = r.castObject(e, r.btRigidBody), o.fromBtVec(
        this._raycastResult.get_m_hitPointWorld(),
        this._hitPoint
      ), this._rigidBody.setCollisionFlags(
        this._rigidBody.getCollisionFlags() | R.KINEMATIC_OBJECT
      ), this._rigidBody.getMotionState().getWorldTransform(g.TEMP_TRANSFORM);
      let s = o.fromBtVec(
        g.TEMP_TRANSFORM.getOrigin(),
        d.HELP_0
      );
      d.sub(s, this._hitPoint, this._offset), this._isDragging = !0, document.body.style.cursor = "grab";
    }
  }
  updateRigidBody() {
    if (this._lockDragToSurface) {
      const s = this._view.camera.screenPointToRay(
        B.inputSystem.mouseX,
        B.inputSystem.mouseY
      ), n = d.HELP_0;
      n.copyFrom(s.direction), n.normalize(), n.multiplyScalar(F.RAY_LEN);
      const a = d.add(s.origin, n, d.HELP_1);
      this._rayStart.setValue(s.origin.x, s.origin.y, s.origin.z), this._rayEnd.setValue(a.x, a.y, a.z);
      const c = this.pickHitPointOnRigidBody(this._rigidBody);
      if (!c) return;
      const h = o.fromBtVec(c, d.HELP_2);
      this._rigidBody.getMotionState().getWorldTransform(g.TEMP_TRANSFORM);
      const _ = o.fromBtQua(
        g.TEMP_TRANSFORM.getRotation(),
        S.HELP_0
      ).transformVector(this._grabLocal, d.HELP_1), y = d.sub(h, _, d.HELP_0);
      g.TEMP_TRANSFORM.setOrigin(o.toBtVec(y)), this._rigidBody.getMotionState().setWorldTransform(g.TEMP_TRANSFORM), this._rigidBody.getWorldTransform().setOrigin(g.TEMP_TRANSFORM.getOrigin()), this._rigidBody.activate(!0), document.body.style.cursor = "grabbing";
      return;
    }
    let t = this._view.camera.screenPointToWorld(
      B.inputSystem.mouseX,
      B.inputSystem.mouseY,
      this._interactionDepth
    ), i = t.add(this._offset, t);
    this._rigidBody.getMotionState().getWorldTransform(g.TEMP_TRANSFORM), g.TEMP_TRANSFORM.setOrigin(o.toBtVec(i)), this._rigidBody.getMotionState().setWorldTransform(g.TEMP_TRANSFORM), this._rigidBody.getWorldTransform().setOrigin(g.TEMP_TRANSFORM.getOrigin()), this._rigidBody.activate(!0), document.body.style.cursor = "grabbing";
  }
  resetState() {
    this._rigidBody && (this._rigidBody.setCollisionFlags(
      this._rigidBody.getCollisionFlags() & ~R.KINEMATIC_OBJECT
    ), this._rigidBody.activate(!0), this._rigidBody = null), this._isDragging = !1, document.body.style.cursor = "default";
  }
}
class rt {
  _world;
  _isInited = !1;
  _isStop = !1;
  _gravity = new d(0, -9.8, 0);
  _worldInfo = null;
  _debugDrawer;
  _physicsDragger;
  _physicBound;
  _destroyObjectBeyondBounds;
  contactProcessedUtil = u;
  rigidBodyUtil = E;
  maxSubSteps = 10;
  fixedTimeStep = 1 / 60;
  /**
   * 物理调试绘制器
   */
  get debugDrawer() {
    return this._debugDrawer || console.warn(
      "To enable debugging, configure with: Physics.initDebugDrawer"
    ), this._debugDrawer;
  }
  /**
   * 物理拖拽器
   */
  get physicsDragger() {
    return this._physicsDragger || console.warn(
      "To enable the dragger, set useDrag: true in Physics.init() during initialization."
    ), this._physicsDragger;
  }
  TEMP_TRANSFORM;
  // Temp cache, save results from body.getWorldTransform()
  /**
   * 初始化物理引擎和相关配置。
   *
   * @param options - 初始化选项参数对象。
   * @param options.useSoftBody - 是否启用软体模拟。
   * @param options.useDrag - 是否启用刚体拖拽功能。
   * @param options.dragLockToSurface - 为 true 时拖拽点约束在当前刚体碰撞表面上（多连杆场景建议开启）。默认 `false`。
   * @param options.physicBound - 物理边界，默认范围：2000 2000 2000，超出边界时将会销毁该刚体。
   * @param options.destroyObjectBeyondBounds - 是否在超出边界时销毁3D对象。默认 `false` 仅销毁刚体。
   */
  async init(t = {}) {
    await r.bind(window)(r), o.init(), this.TEMP_TRANSFORM = new r.btTransform(), this.initWorld(t.useSoftBody), t.useDrag && (this._physicsDragger = new F({
      lockDragToSurface: t.dragLockToSurface === !0
    })), this._isInited = !0, this._destroyObjectBeyondBounds = t.destroyObjectBeyondBounds, this._physicBound = new q(
      new d(),
      t.physicBound || new d(2e3, 2e3, 2e3)
    );
  }
  /**
   * 初始化物理调试绘制器
   *
   * @param {Graphic3D} graphic3D - Type: `Graphic3D` A graphic object used to draw lines.
   * @param {DebugDrawerOptions} [options] - 调试绘制选项，用于配置物理调试绘制器。 {@link DebugDrawerOptions}
   */
  initDebugDrawer(t, i) {
    this._debugDrawer = new nt(this.world, t, i);
  }
  initWorld(t) {
    const i = t ? new r.btSoftBodyRigidBodyCollisionConfiguration() : new r.btDefaultCollisionConfiguration(), e = new r.btCollisionDispatcher(i), s = new r.btDbvtBroadphase(), n = new r.btSequentialImpulseConstraintSolver();
    if (t) {
      const a = new r.btDefaultSoftBodySolver();
      this._world = new r.btSoftRigidDynamicsWorld(
        e,
        s,
        n,
        i,
        a
      ), this._worldInfo = this.world.getWorldInfo(), this._worldInfo.set_m_broadphase(s), this._worldInfo.set_m_dispatcher(e), this._worldInfo.set_m_gravity(o.toBtVec(this._gravity)), this._worldInfo.set_air_density(1.2), this._worldInfo.set_water_density(0), this._worldInfo.set_water_offset(0), this._worldInfo.set_water_normal(o.setBtVec(0, 0, 0)), this._worldInfo.set_m_maxDisplacement(0.5);
    } else
      this._world = new r.btDiscreteDynamicsWorld(
        e,
        s,
        n,
        i
      );
    this._world.setGravity(o.toBtVec(this._gravity));
  }
  /**
   * 物理模拟更新
   * @param timeStep - 时间步长
   * @default Time.delta * 0.001
   */
  update(t = K.delta * 1e-3) {
    !this._isInited || this.isStop || (this.world.stepSimulation(t, this.maxSubSteps, this.fixedTimeStep), this._debugDrawer?.update());
  }
  get world() {
    return this._world;
  }
  get isInited() {
    return this._isInited;
  }
  set isStop(t) {
    this._isStop = t;
  }
  get isStop() {
    return this._isStop;
  }
  set gravity(t) {
    this._gravity.copyFrom(t), this._world?.setGravity(o.toBtVec(t)), this._worldInfo?.set_m_gravity(o.toBtVec(t));
  }
  get gravity() {
    return this._gravity;
  }
  get worldInfo() {
    return this._worldInfo;
  }
  get isSoftBodyWord() {
    return this._world instanceof r.btSoftRigidDynamicsWorld;
  }
  checkBound(t) {
    if (t) {
      let i = t.transform.worldPosition;
      this._physicBound.containsPoint(i) || (this._destroyObjectBeyondBounds ? t.object3D.destroy() : (t.btRigidbody.activate(!1), t.destroy()));
    }
  }
  /**
   * 将物理对象的位置和旋转同步至三维对象
   * @param object3D - 三维对象
   * @param tm - 物理对象变换
   */
  syncGraphic(t, i) {
    t.localPosition = o.fromBtVec(
      i.getOrigin(),
      d.HELP_0
    ), t.localQuaternion = o.fromBtQua(
      i.getRotation(),
      S.HELP_0
    );
  }
}
let g = new rt();
class at {
  /**
   * 创建静态平面碰撞形状，适用于静态无限平面的碰撞，如地面或墙壁。
   * @param planeNormal - 平面法向量，默认值为 Vector3.UP。
   * @param planeConstant - 平面常数，表示平面距离原点的距离，默认值为 0。
   * @returns Ammo.btStaticPlaneShape - 静态平面碰撞形状实例。
   */
  static createStaticPlaneShape(t = d.UP, i = 0) {
    const e = o.toBtVec(t);
    return new r.btStaticPlaneShape(e, i);
  }
  /**
   * 创建盒型碰撞形状，适用于具有明确尺寸的盒形物体。
   * 如果未指定尺寸，则使用三维对象的包围盒大小。
   * @param object3D - 用于创建碰撞体的三维对象。
   * @param size - 可选参数，盒型碰撞体的尺寸。
   * @returns Ammo.btBoxShape - 盒型碰撞形状实例。
   */
  static createBoxShape(t, i) {
    i ||= this.calculateLocalBoundingBox(t).size;
    const e = o.setBtVec(
      i.x / 2,
      i.y / 2,
      i.z / 2
    );
    return new r.btBoxShape(e);
  }
  /**
   * 创建球型碰撞形状，适用于球形物体。
   * 如果未指定半径，则使用三维对象的包围盒半径 `X`。
   * @param object3D - 用于创建碰撞体的三维对象。
   * @param radius - 可选参数，球型碰撞体的半径。
   * @returns Ammo.btSphereShape - 球型碰撞形状实例。
   */
  static createSphereShape(t, i) {
    return i ||= this.calculateLocalBoundingBox(t).extents.x, new r.btSphereShape(i);
  }
  /**
   * 创建胶囊型碰撞形状，适用于胶囊形物体。
   * 如果未指定尺寸，则使用三维对象的包围盒半径 `X` 和高度 `Y`。
   * @param object3D - 用于创建碰撞体的三维对象。
   * @param radius - 可选参数，胶囊的半径。
   * @param height - 可选参数，胶囊中间的圆柱部分的高度。
   * @returns Ammo.btCapsuleShape - 胶囊型碰撞形状实例。
   */
  static createCapsuleShape(t, i, e) {
    let s;
    return (!i || !e) && (s = this.calculateLocalBoundingBox(t).size), i ||= s.x / 2, e ||= s.y - i * 2, new r.btCapsuleShape(i, e);
  }
  /**
   * 创建圆柱型碰撞形状，适用于圆柱形物体。
   * 如果未指定尺寸，则使用三维对象的包围盒半径 `X` 和高度 `Y`。
   * @param object3D - 用于创建碰撞体的三维对象。
   * @param radius - 可选参数，圆柱的半径。
   * @param height - 可选参数，圆柱的完整高度。
   * @returns Ammo.btCylinderShape - 圆柱型碰撞形状实例。
   */
  static createCylinderShape(t, i, e) {
    let s;
    (!i || !e) && (s = this.calculateLocalBoundingBox(t).size), i ||= s.x / 2, e ||= s.y;
    const n = o.setBtVec(i, e / 2, i);
    return new r.btCylinderShape(n);
  }
  /**
   * 创建圆锥形碰撞形状，适用于圆锥形物体。
   * 如果未指定尺寸，则使用三维对象的包围盒半径 `X` 和高度 `Y`。
   * @param object3D - 用于创建碰撞体的三维对象。
   * @param radius - 可选参数，圆锥的半径。
   * @param height - 可选参数，圆锥的高度。
   * @returns Ammo.btConeShape - 圆锥形碰撞形状实例。
   */
  static createConeShape(t, i, e) {
    let s;
    return (!i || !e) && (s = this.calculateLocalBoundingBox(t).size), i ||= s.x / 2, e ||= s.y, new r.btConeShape(i, e);
  }
  /**
   * 创建复合形状，将多个子形状组合成一个形状。
   * @param childShapes - 包含子形状实例与位置、旋转属性的数组。
   * @returns Ammo.btCompoundShape - 复合形状实例。
   */
  static createCompoundShape(t) {
    const i = new r.btCompoundShape(), e = g.TEMP_TRANSFORM;
    return t.forEach((s) => {
      e.setIdentity(), e.setOrigin(o.toBtVec(s.position)), e.setRotation(o.toBtQua(s.rotation)), i.addChildShape(e, s.shape);
    }), i;
  }
  /**
   * 根据 Object3D 对象及其子对象创建复合碰撞形状。
   * @param object3D - 三维对象，包含多个子对象。
   * @param includeParent - 是否包含父对象的几何体，默认值为 `true`。
   * @returns 复合碰撞形状。
   */
  static createCompoundShapeFromObject(t, i = !0) {
    const e = [];
    if (i) {
      const a = this.createShapeFromObject(t);
      if (a) {
        const c = new d(), h = new S();
        e.push({ shape: a, position: c, rotation: h });
      }
    }
    const s = t.transform.worldMatrix.clone();
    return s.invert(), t.forChild((a) => {
      const c = this.createShapeFromObject(a);
      if (c) {
        const h = a.transform.worldMatrix, m = W.help_matrix_0;
        m.multiplyMatrices(s, h);
        const _ = new d(), y = new S();
        m.decompose("quaternion", [
          _,
          y,
          d.HELP_0
        ]), e.push({ shape: c, position: _, rotation: y });
      }
    }), this.createCompoundShape(e);
  }
  /**
   * 根据 Object3D 对象的几何体类型创建相应的碰撞形状。
   *
   * 仅支持Box、Sphere、Plane、Cylinder类型的几何体。对于不匹配的几何体类型，返回 btConvexHullShape 凸包形状。
   * @param object3D
   * @returns Ammo.btCollisionShape
   */
  static createShapeFromObject(t) {
    const i = t.getComponent(M)?.geometry;
    if (!i) return null;
    let e, s = d.HELP_0.copyFrom(t.localScale);
    switch (!0) {
      case i instanceof X: {
        const { width: n, height: a, depth: c } = i, h = new d(n, a, c).scale(s);
        e = this.createBoxShape(t, h);
        break;
      }
      case i instanceof Y: {
        const n = i.radius * s.x;
        e = this.createSphereShape(t, n);
        break;
      }
      case i instanceof D: {
        const { width: n, height: a } = i, c = new d(n, 0, a).scale(s);
        e = this.createBoxShape(t, c);
        break;
      }
      case i instanceof J: {
        const n = i.radiusBottom * s.x, a = i.height * s.y;
        i.radiusTop === i.radiusBottom ? e = this.createCylinderShape(t, n, a) : i.radiusTop <= 0.1 ? e = this.createConeShape(t, n, a) : e = this.createConvexHullShape(t);
        break;
      }
      default: {
        e = this.createConvexHullShape(t);
        break;
      }
    }
    return e;
  }
  /**
   * 创建高度场形状，基于平面顶点数据模拟地形。
   * @param object3D - 用于创建碰撞体的三维对象。
   * @param heightScale - 高度缩放比例，默认值为 `1`。
   * @param upAxis - 高度场的上轴，默认值为 `1`。
   * @param hdt - 高度场的数据类型，默认值为 `Ammo.PHY_FLOAT`。
   * @param flipQuadEdges - 是否翻转四边形的边，默认值为 `false`。
   * @returns Ammo.btHeightfieldTerrainShape - 高度场形状实例。
   */
  static createHeightfieldTerrainShape(t, i = 1, e = 1, s = "PHY_FLOAT", n = !1) {
    let a = t.getComponent(M)?.geometry;
    if (!(a instanceof D))
      throw new Error("Wrong geometry type");
    const { width: c, height: h, segmentW: m, segmentH: _ } = a;
    let y = a.getAttribute(w.position);
    const f = new Float32Array(y.data.length / 3);
    let p = 1 / 0, T = -1 / 0;
    for (let V = 0, j = y.data.length / 3; V < j; V++) {
      let O = y.data[V * 3 + 1];
      f[V] = O, O < p && (p = O), O > T && (T = O);
    }
    let C = r._malloc(f.length * 4);
    new Float32Array(
      r.HEAPF32.buffer,
      C,
      f.length
    ).set(f);
    let P = new r.btHeightfieldTerrainShape(
      m + 1,
      _ + 1,
      C,
      i,
      p,
      T,
      e,
      s,
      n
    ), L = o.setBtVec(
      c / m,
      1,
      h / _
    );
    return P.setLocalScaling(L), P.averageHeight = (p + T) / 2, P;
  }
  /**
   * 创建凸包形状，适用于具有凹陷填充的模型。
   * 此形状适用于动态物体并提供快速的碰撞检测。
   * @param object3D - 用于创建碰撞体的三维对象。
   * @param modelVertices - 可选参数，提供碰撞体所需的顶点数据，默认为三维对象的顶点数据。
   * @returns Ammo.btConvexHullShape - 凸包形状实例。
   */
  static createConvexHullShape(t, i) {
    let e = i || this.getAllMeshVerticesAndIndices(t).vertices, s = new r.btConvexHullShape();
    for (let a = 0, c = e.length / 3; a < c; a++) {
      let h = o.setBtVec(
        e[3 * a],
        e[3 * a + 1],
        e[3 * a + 2]
      );
      s.addPoint(h, !0);
    }
    let n = o.toBtVec(t.localScale);
    return s.setLocalScaling(n), s;
  }
  /**
   * 创建凸包网格形状，适用于需要复杂几何表示的动态物体。
   * 此形状不要求额外的凸包生成步骤，适用于凸的三角形网格。
   * @param object3D - 用于创建碰撞体的三维对象。
   * @param modelVertices - 可选参数，提供碰撞体所需的顶点数据。
   * @param modelIndices - 可选参数，提供碰撞体所需的索引数据。
   * @returns Ammo.btConvexTriangleMeshShape - 凸包网格形状实例。
   */
  static createConvexTriangleMeshShape(t, i, e) {
    (i && !e || !i && e) && console.warn(
      "createConvexTriangleMeshShape: Both modelVertices and modelIndices must be provided or neither should be provided."
    );
    const { vertices: s, indices: n } = i && e ? { vertices: i, indices: e } : this.getAllMeshVerticesAndIndices(t, !1), a = this.buildTriangleMesh(s, n), c = new r.btConvexTriangleMeshShape(a, !0), h = o.toBtVec(t.localScale);
    return c.setLocalScaling(h), c;
  }
  /**
   * 创建边界体积层次（BVH）网格形状，适用于需要复杂几何表示的静态物体。
   * 此形状适合大规模静态网格，但对动态对象不适用。
   * @param object3D - 用于创建碰撞体的三维对象。
   * @param modelVertices - 可选参数，提供碰撞体所需的顶点数据。
   * @param modelIndices - 可选参数，提供碰撞体所需的索引数据。
   * @returns Ammo.btBvhTriangleMeshShape - BVH 网格形状实例。
   */
  static createBvhTriangleMeshShape(t, i, e) {
    (i && !e || !i && e) && console.warn(
      "createBvhTriangleMeshShape: Both modelVertices and modelIndices must be provided or neither should be provided."
    );
    const { vertices: s, indices: n } = i && e ? { vertices: i, indices: e } : this.getAllMeshVerticesAndIndices(t, !1), a = this.buildTriangleMesh(s, n), c = new r.btBvhTriangleMeshShape(a, !0, !0), h = o.toBtVec(t.localScale);
    return c.setLocalScaling(h), c;
  }
  /**
   * 创建 GImpact 网格形状，适用于需要复杂几何表示的动态物体。
   * 基于 GIMPACT 算法，可以用于复杂的三角网格碰撞检测，包括动态物体的交互，此形状性能消耗较高，但提供更精确的碰撞检测。
   * @param object3D - 用于创建碰撞体的三维对象。
   * @param modelVertices - 可选参数，提供碰撞体所需的顶点数据。
   * @param modelIndices - 可选参数，提供碰撞体所需的索引数据。
   * @returns Ammo.btGImpactMeshShape - GImpact 网格形状实例。
   */
  static createGImpactMeshShape(t, i, e) {
    (i && !e || !i && e) && console.warn(
      "createGImpactMeshShape: Both modelVertices and modelIndices must be provided or neither should be provided."
    );
    const { vertices: s, indices: n } = i && e ? { vertices: i, indices: e } : this.getAllMeshVerticesAndIndices(t, !1), a = this.buildTriangleMesh(s, n), c = new r.btGImpactMeshShape(a);
    c.updateBound();
    const h = o.toBtVec(t.localScale);
    return c.setLocalScaling(h), c;
  }
  /**
   * 构建 btTriangleMesh 对象，用于创建网格形状。
   * @param vertices - 顶点数据，按 xyz 顺序排列。
   * @param indices - 索引数据，定义三角形的顶点索引。
   * @returns Ammo.btTriangleMesh - 构建的三角形网格。
   */
  static buildTriangleMesh(t, i) {
    let e = new r.btTriangleMesh();
    for (let s = 0; s < i.length; s += 3) {
      const n = i[s] * 3, a = i[s + 1] * 3, c = i[s + 2] * 3, h = o.setBtVec(
        t[n],
        t[n + 1],
        t[n + 2],
        o.tmpVecA
      ), m = o.setBtVec(
        t[a],
        t[a + 1],
        t[a + 2],
        o.tmpVecB
      ), _ = o.setBtVec(
        t[c],
        t[c + 1],
        t[c + 2],
        o.tmpVecC
      );
      e.addTriangle(h, m, _, !0);
    }
    return e;
  }
  /**
   * 获取3D对象所有网格的顶点与索引。
   * @param object3D - 三维对象。
   * @param isTransformChildren - 是否将子对象的顶点转换到父对象的局部坐标系。默认值为 `true`。
   * @returns 顶点数据和索引数据。
   */
  static getAllMeshVerticesAndIndices(t, i = !0) {
    let e = t.getComponents(M);
    if (e.length === 1 && !i)
      return {
        vertices: e[0].geometry.getAttribute(
          w.position
        ).data,
        indices: e[0].geometry.getAttribute(
          w.indices
        ).data
      };
    let s = 0, n = 0;
    e.forEach((f) => {
      s += f.geometry.getAttribute(
        w.position
      ).data.length, n += f.geometry.getAttribute(
        w.indices
      ).data.length;
    });
    let a = new Float32Array(s), c = new Uint16Array(n), h = 0, m = 0, _ = 0, y;
    return i && (y = t.transform.worldMatrix.clone(), y.invert()), e.forEach((f) => {
      let p = f.geometry.getAttribute(
        w.position
      ).data;
      if (i) {
        const C = f.object3D.transform.worldMatrix;
        let N = W.help_matrix_1;
        N.multiplyMatrices(y, C);
        let P = new Float32Array(p.length);
        for (let L = 0; L < p.length / 3; L++)
          d.HELP_0.set(
            p[L * 3],
            p[L * 3 + 1],
            p[L * 3 + 2]
          ), d.HELP_0.applyMatrix4(N), P[L * 3] = d.HELP_0.x, P[L * 3 + 1] = d.HELP_0.y, P[L * 3 + 2] = d.HELP_0.z;
        p = P;
      }
      a.set(p, h), h += p.length;
      let T = f.geometry.getAttribute(
        w.indices
      ).data;
      for (let C = 0; C < T.length; C++)
        c[m + C] = T[C] + _;
      m += T.length, _ += p.length / 3;
    }), { vertices: a, indices: c };
  }
  /**
   * 计算三维对象的局部包围盒
   * @param object3D - 三维对象
   * @returns 局部包围盒
   */
  static calculateLocalBoundingBox(t) {
    if (t.renderNode && !t.numChildren)
      return t.renderNode.geometry.bounds;
    let i = t.localRotation.clone();
    t.localRotation = d.ZERO;
    let e = Z.genMeshBounds(t);
    return t.localRotation = i, e;
  }
}
class gt {
  static mapping = new $();
  /**
   * Retrieves the entire mapping of all RigidBody objects.
   * @returns A map of RigidBody objects to 3D objects.
   */
  static get getAllPhysicsObjectMap() {
    return this.mapping.negtive;
  }
  /**
   * Retrieves the entire mapping of all 3D objects.
   * @returns A map of 3D objects to RigidBody objects.
   */
  static get getAllGraphicObjectMap() {
    return this.mapping;
  }
  /**
   * Adds a mapping between a 3D object and a RigidBody object.
   * @param object3D The 3D object.
   * @param physics The RigidBody object.
   */
  static addMapping(t, i) {
    this.mapping.set(t, i);
  }
  /**
   * Retrieves the RigidBody object associated with a given 3D object.
   * @param object3D The 3D object.
   * @returns The associated RigidBody object, or undefined if not found.
   */
  static getPhysicsObject(t) {
    return this.mapping.get(t);
  }
  /**
   * Retrieves the 3D object associated with a given RigidBody object.
   * @param physics The RigidBody object.
   * @returns The associated 3D object, or undefined if not found.
   */
  static getGraphicObject(t) {
    return this.mapping.getKey(t);
  }
  /**
   * Removes the mapping associated with a given 3D object.
   * @param object3D The 3D object.
   */
  static removeMappingByGraphic(t) {
    this.mapping.delete(t);
  }
  /**
   * Removes the mapping associated with a given RigidBody object.
   * @param physics The RigidBody object.
   */
  static removeMappingByPhysics(t) {
    this.mapping.deleteValue(t);
  }
}
class lt {
  isUpdatingFromPhysics = !1;
  _btRigidbody;
  _mass;
  _enablePhysicsTransformSync = !1;
  transform;
  constructor(t) {
    this.transform = t;
  }
  configure(t, i) {
    this._btRigidbody = t, this._mass = i;
  }
  /**
   * Enables or disables the transform sync with physics.
   * If enabled, changes to the transform will automatically update the physics body.
   */
  set enablePhysicsTransformSync(t) {
    this._enablePhysicsTransformSync !== t && (this._enablePhysicsTransformSync = t, this.isUpdatingFromPhysics = !t, this.transform.onPositionChange = t ? this.onPositionChange.bind(this) : null, this.transform.onRotationChange = t ? this.onRotationChange.bind(this) : null, this.transform.onScaleChange = t ? this.onScaleChange.bind(this) : null, t && this._btRigidbody && (E.updateTransform(
      this._btRigidbody,
      this.transform.localPosition,
      this.transform.localRotation,
      !1
    ), g.syncGraphic(
      this.transform.object3D,
      this._btRigidbody.getWorldTransform()
    ), this.onScaleChange()));
  }
  get enablePhysicsTransformSync() {
    return this._enablePhysicsTransformSync;
  }
  onPositionChange(t, i) {
    this.isUpdatingFromPhysics || (i ||= this.transform.localPosition, E.updatePosition(this._btRigidbody, i));
  }
  onRotationChange(t, i) {
    this.isUpdatingFromPhysics || (i ||= this.transform.localRotation, E.updateRotation(this._btRigidbody, i));
  }
  onScaleChange(t, i) {
    i ||= this.transform.localScale, E.updateScale(this._btRigidbody, i, this._mass);
  }
  destroy() {
    this._btRigidbody = null, this._enablePhysicsTransformSync && (this.transform.onPositionChange = null, this.transform.onRotationChange = null, this.transform.onScaleChange = null), this.transform = null;
  }
}
class k {
  _pointer;
  _collisionEvent;
  _enableCollisionEvent = !0;
  configure(t) {
    this._pointer && u.unregisterCollisionCallback(this._pointer), this._pointer = t, this.configureCollisionEvent();
  }
  get enableCollisionEvent() {
    return this._enableCollisionEvent;
  }
  set enableCollisionEvent(t) {
    this._enableCollisionEvent !== t && (this._enableCollisionEvent = t, this.configureCollisionEvent());
  }
  get collisionEvent() {
    return this._collisionEvent;
  }
  set collisionEvent(t) {
    this._collisionEvent = t, this.configureCollisionEvent();
  }
  configureCollisionEvent() {
    this._pointer && this._collisionEvent && (this._enableCollisionEvent ? u.registerCollisionCallback(
      this._pointer,
      this.collisionEvent
    ) : u.unregisterCollisionCallback(this._pointer));
  }
  destroy() {
    u.unregisterCollisionCallback(this._pointer), this._collisionEvent = null;
  }
}
class ct extends v {
  _initResolve;
  _initializationPromise = new Promise(
    (t) => this._initResolve = t
  );
  _btBodyInited = !1;
  _btRigidbody;
  _shape;
  _mass = 0.01;
  _margin = 0.02;
  _velocity = new d();
  _angularVelocity = new d();
  _linearVelocity = new d();
  _gravity = g.gravity.clone();
  _restitution = 0.5;
  // 低恢复系数以减少弹跳
  _friction = 0.5;
  // 高摩擦系数以防止滑动
  _rollingFriction;
  _contactProcessingThreshold;
  // 接触处理阈值 值越小，精度越高
  _damping;
  _ccdSettings;
  _activationState;
  _collisionFlags;
  // Default static: 1, dynamic: 0
  _userIndex;
  _isSilent = !1;
  collisionEventHandler;
  physicsTransformSync;
  static collisionShape = at;
  init() {
    this.physicsTransformSync = new lt(this.transform), this.collisionEventHandler = new k();
  }
  start() {
    this.initRigidbody(), this.physicsTransformSync.configure(this._btRigidbody, this._mass), this.collisionEventHandler.configure(this._btRigidbody.kB), this._isSilent && u.addIgnoredPointer(this._btRigidbody.kB), this._btBodyInited = !0, this._initResolve();
  }
  initRigidbody() {
    this._shape || (this._shape = this.createColliderComponentShape());
    let t = this.object3D.localPosition;
    this._shape instanceof r.btHeightfieldTerrainShape && (t = t.clone(), t.y += this._shape?.averageHeight || 0), this._shape.setMargin(this._margin), this._btRigidbody = E.createRigidBody(
      this.object3D,
      this._shape,
      this._mass,
      t
    ), this._btRigidbody.setRestitution(this._restitution), this._btRigidbody.setFriction(this._friction), this._rollingFriction != null && this._btRigidbody.setRollingFriction(this._rollingFriction), this._damping != null && this._btRigidbody.setDamping(...this._damping), this._userIndex != null && this._btRigidbody.setUserIndex(this._userIndex), this._activationState != null && this._btRigidbody.setActivationState(this._activationState), this._contactProcessingThreshold != null && this._btRigidbody.setContactProcessingThreshold(
      this._contactProcessingThreshold
    ), this._collisionFlags != null && this._btRigidbody.setCollisionFlags(this._collisionFlags), this.group != null && this.mask != null ? g.world.addRigidBody(this._btRigidbody, this.group, this.mask) : g.world.addRigidBody(this._btRigidbody), this._gravity.equals(g.gravity) || this._btRigidbody.setGravity(o.toBtVec(this._gravity)), this._ccdSettings != null && (this._btRigidbody.setCcdMotionThreshold(this._ccdSettings[0]), this._btRigidbody.setCcdSweptSphereRadius(this._ccdSettings[1]));
  }
  onUpdate() {
    if (this._btRigidbody?.isActive()) {
      this._btRigidbody.getMotionState().getWorldTransform(g.TEMP_TRANSFORM);
      let t = g.TEMP_TRANSFORM.getOrigin(), i = g.TEMP_TRANSFORM.getRotation();
      this.physicsTransformSync.isUpdatingFromPhysics = !0, this.transform.localPosition = d.HELP_0.set(
        t.x(),
        t.y(),
        t.z()
      ), this.transform.localRotQuat = S.HELP_0.set(
        i.x(),
        i.y(),
        i.z(),
        i.w()
      ), this.physicsTransformSync.isUpdatingFromPhysics = !1, g.checkBound(this);
    }
  }
  createColliderComponentShape() {
    let t = this.object3D.getComponent(tt);
    if (!t) throw new Error("Rigid bodies need collision shape");
    let i = t.shape, e;
    if (i instanceof it)
      e = new r.btBoxShape(o.toBtVec(i.halfSize));
    else if (i instanceof et)
      e = new r.btCapsuleShape(
        i.radius,
        i.height
      );
    else if (i instanceof st)
      e = new r.btSphereShape(i.radius);
    else
      throw new Error("Wrong collision shape");
    return e;
  }
  /**
   * 更新刚体的位置和旋转，并同步三维对象
   * @param position 可选，默认为三维对象的位置
   * @param rotation 可选，默认为三维对象的欧拉角旋转
   * @param clearFV  可选，清除刚体的力和速度，默认为 false
   */
  updateTransform(t, i, e) {
    this._btRigidbody && (t ||= this.transform.localPosition, i ||= this.transform.localRotation, E.updateTransform(
      this._btRigidbody,
      t,
      i,
      e
    ), g.syncGraphic(this.object3D, this._btRigidbody.getWorldTransform()));
  }
  /**
   * Remove the force and velocity of the rigid body
   */
  clearForcesAndVelocities() {
    this._btRigidbody && E.clearForcesAndVelocities(this._btRigidbody);
  }
  /**
   * Check if rigidbody inited
   */
  get btBodyInited() {
    return this._btBodyInited;
  }
  /**
   * Return internal Ammo.btRigidBody
   */
  get btRigidbody() {
    return this._btRigidbody;
  }
  /**
   * Asynchronously retrieves the fully initialized rigid body instance.
   */
  async wait() {
    return await this._initializationPromise, this._btRigidbody;
  }
  /**
   * The collision shape of the rigid body.
   */
  get shape() {
    return this._shape;
  }
  set shape(t) {
    this._shape = t, this._btRigidbody && (r.destroy(this._btRigidbody.getCollisionShape()), this._btRigidbody.setCollisionShape(t), t instanceof r.btHeightfieldTerrainShape && this._btRigidbody.getWorldTransform().getOrigin().setY(t.averageHeight + this.object3D.y));
  }
  /**
   * The collision group of the rigid body.
   */
  group;
  /**
   * The collision mask of the rigid body.
   */
  mask;
  /**
   * User index, which can be used as an identifier for the rigid body.
   */
  get userIndex() {
    return this._userIndex;
  }
  /**
   * Sets the user index for the rigid body.
   */
  set userIndex(t) {
    this._userIndex = t, this._btRigidbody?.setUserIndex(t);
  }
  /**
   * Activation state of the rigid body.
   */
  get activationState() {
    return this._activationState;
  }
  /**
   * Sets the activation state of the rigid body.
   */
  set activationState(t) {
    this._activationState = t, this._btRigidbody?.setActivationState(t);
  }
  /**
   * Collision flags of the rigid body.
   */
  get collisionFlags() {
    return this._btRigidbody?.getCollisionFlags() ?? (this.mass === 0 ? 1 : 0);
  }
  /**
   * Adds a collision flag to the rigid body.
   */
  addCollisionFlag(t) {
    this._collisionFlags = this.collisionFlags | t, this._btRigidbody?.setCollisionFlags(this._collisionFlags);
  }
  /**
   * Removes a collision flag from the rigid body.
   */
  removeCollisionFlag(t) {
    this._collisionFlags = this.collisionFlags & ~t, this._btRigidbody?.setCollisionFlags(this._collisionFlags);
  }
  /**
   * Check if the rigidbody affect physics system
   */
  get isKinematic() {
    return !!this._btRigidbody?.isKinematicObject();
  }
  /**
   * Set the rigid body to a kinematic object
   */
  set isKinematic(t) {
    if (t === this.isKinematic) return;
    let i = R.KINEMATIC_OBJECT;
    if (t ? this.addCollisionFlag(i) : this.removeCollisionFlag(i), !!this._btRigidbody)
      if (this.enablePhysicsTransformSync = t, t)
        this.enable = !1, this._btRigidbody.setActivationState(
          x.DISABLE_DEACTIVATION
        ), this.updateTransform();
      else {
        this.enable = !0;
        const e = this._activationState ?? (this._btRigidbody.isStaticObject() ? x.ISLAND_SLEEPING : x.ACTIVE_TAG);
        this._btRigidbody.forceActivationState(e), this._btRigidbody.activate();
      }
  }
  /**
   * Check if the rigid body is a trigger
   */
  get isTrigger() {
    return (this.collisionFlags & R.NO_CONTACT_RESPONSE) !== 0;
  }
  /**
   * Set the rigid body as a trigger
   */
  set isTrigger(t) {
    let i = R.NO_CONTACT_RESPONSE;
    t ? this.addCollisionFlag(i) : this.removeCollisionFlag(i);
  }
  /**
   * Check if the rigid body is visible in debug mode
   */
  get isDisableDebugVisible() {
    return (this.collisionFlags & R.DISABLE_VISUALIZE_OBJECT) !== 0;
  }
  /**
   * Set the rigid body to be visible in debug mode
   */
  set isDisableDebugVisible(t) {
    let i = R.DISABLE_VISUALIZE_OBJECT;
    t ? this.addCollisionFlag(i) : this.removeCollisionFlag(i);
  }
  /**
   * Margin of the collision shape.
   */
  get margin() {
    return this._margin;
  }
  /**
   * Sets the margin of the collision shape.
   * @default 0.02
   */
  set margin(t) {
    this._margin = t, this._shape?.setMargin(t);
  }
  /**
   * Damping of the rigid body.
   *
   * Sets the damping parameters. The first value is the linear damping, the second is the angular damping.
   * @param params - [linear damping, angular damping]
   */
  get damping() {
    return this._damping;
  }
  set damping(t) {
    this._damping = [t[0], t[1]], this._btRigidbody?.setDamping(...t);
  }
  /**
   * Contact processing threshold of the rigid body.
   */
  get contactProcessingThreshold() {
    return this._contactProcessingThreshold;
  }
  /**
   * Sets the contact processing threshold of the rigid body.
   */
  set contactProcessingThreshold(t) {
    this._contactProcessingThreshold = t, this._btRigidbody?.setContactProcessingThreshold(t);
  }
  /**
   * Gravity vector applied to the rigid body.
   */
  get gravity() {
    return this._gravity;
  }
  /**
   * Sets the gravity vector applied to the rigid body.
   */
  set gravity(t) {
    this._gravity.copyFrom(t), this._btRigidbody?.setGravity(o.toBtVec(t));
  }
  /**
   * Get friction value
   */
  get friction() {
    return this._friction;
  }
  /**
   * Set friction value. default `0.5`
   */
  set friction(t) {
    this._friction = t, this._btRigidbody?.setFriction(t);
  }
  /**
   * Get rolling friction value
   */
  get rollingFriction() {
    return this._rollingFriction;
  }
  /**
   * Set rolling friction value
   */
  set rollingFriction(t) {
    this._rollingFriction = t, this._btRigidbody?.setRollingFriction(t);
  }
  /**
   * Get restitution value
   */
  get restitution() {
    return this._restitution;
  }
  /**
   * Set restitution value default `0.5`
   */
  set restitution(t) {
    this._restitution = t, this._btRigidbody?.setRestitution(t);
  }
  /**
   * Get velocity value of current object
   */
  get velocity() {
    return this._velocity;
  }
  /**
   * Set velocity value of current object
   */
  set velocity(t) {
    this._velocity.copyFrom(t), this.wait().then(
      (i) => i.applyForce(
        o.toBtVec(this._velocity),
        o.zeroBtVec(o.tmpVecB)
      )
    );
  }
  /**
   * Get the angular velocity value of current object
   */
  get angularVelocity() {
    return this._btBodyInited ? o.fromBtVec(
      this._btRigidbody.getAngularVelocity(),
      this._angularVelocity
    ) : this._angularVelocity;
  }
  /**
   * Set the angular velocity value of current object
   */
  set angularVelocity(t) {
    this._angularVelocity.copyFrom(t), this.wait().then(
      (i) => i.setAngularVelocity(o.toBtVec(this._angularVelocity))
    );
  }
  /**
   * Get the linear velocity value of current object
   */
  get linearVelocity() {
    return this._btBodyInited ? o.fromBtVec(
      this._btRigidbody.getLinearVelocity(),
      this._linearVelocity
    ) : this._linearVelocity;
  }
  /**
   * Set the linear velocity value of current object
   */
  set linearVelocity(t) {
    this._linearVelocity.copyFrom(t), this.wait().then(
      (i) => i.setLinearVelocity(o.toBtVec(this._linearVelocity))
    );
  }
  /**
   * Get mass value
   */
  get mass() {
    return this._mass;
  }
  /**
   * Set mass value. default `0.01`
   */
  set mass(t) {
    const i = this._mass;
    if (this._mass = t, this._btRigidbody && i !== t) {
      if (i === 0 || t === 0)
        u.removeIgnoredPointer(this._btRigidbody.kB), g.world.removeRigidBody(this._btRigidbody), this.initRigidbody(), this.collisionEventHandler.configure(this._btRigidbody.kB), this._isSilent && u.addIgnoredPointer(this._btRigidbody.kB);
      else {
        const e = o.zeroBtVec();
        this._btRigidbody.getCollisionShape().calculateLocalInertia(t, e), this._btRigidbody.setMassProps(t, e), this._btRigidbody.updateInertiaTensor(), this.clearForcesAndVelocities();
      }
      this.physicsTransformSync.configure(this._btRigidbody, t);
    }
  }
  /**
   * 刚体的静默状态。
   * 如果为 true 则任何物理对象与静默状态的对象发生碰撞时都不会触发双方的碰撞回调。
   */
  get isSilent() {
    return this._isSilent;
  }
  set isSilent(t) {
    this._isSilent = t, t ? u.addIgnoredPointer(this._btRigidbody?.kB) : u.removeIgnoredPointer(this._btRigidbody?.kB);
  }
  /**
   * CCD (Continuous Collision Detection)
   *
   * Sets the CCD parameters. The first value is the motion threshold, the second is the swept sphere radius.
   * @param params - [motion threshold, swept sphere radius]
   */
  set ccdSettings(t) {
    this._ccdSettings = [t[0], t[1]], this._btRigidbody?.setCcdMotionThreshold(t[0]), this._btRigidbody?.setCcdSweptSphereRadius(t[1]);
  }
  get ccdSettings() {
    return this._ccdSettings;
  }
  /**
   * Enable/disable collision callbacks
   */
  get enableCollisionEvent() {
    return this.collisionEventHandler.enableCollisionEvent;
  }
  set enableCollisionEvent(t) {
    this.collisionEventHandler.enableCollisionEvent = t;
  }
  /**
   * Collision callbacks
   */
  get collisionEvent() {
    return this.collisionEventHandler.collisionEvent;
  }
  set collisionEvent(t) {
    this.collisionEventHandler.collisionEvent = t;
  }
  /**
   * Enables or disables the transform sync with physics.
   * If enabled, changes to the transform will automatically update the physics body.
   */
  get enablePhysicsTransformSync() {
    return this.physicsTransformSync.enablePhysicsTransformSync;
  }
  set enablePhysicsTransformSync(t) {
    this.isDestroyed || (this.physicsTransformSync.enablePhysicsTransformSync = t);
  }
  destroy(t) {
    this._btRigidbody && (u.removeIgnoredPointer(this._btRigidbody.kB), E.destroyRigidBody(this._btRigidbody)), this._btRigidbody = null, this._btBodyInited = !1, this._shape = null, this.physicsTransformSync.destroy(), this.collisionEventHandler.destroy(), super.destroy(t);
  }
}
class U extends v {
  _initResolve;
  _initializationPromise = new Promise(
    (t) => this._initResolve = t
  );
  _ghostObject;
  _userIndex;
  _shape;
  collisionEventHandler = new k();
  get shape() {
    return this._shape;
  }
  set shape(t) {
    this._shape = t, this._ghostObject && (r.destroy(this._ghostObject.getCollisionShape()), this._ghostObject.setCollisionShape(t));
  }
  get userIndex() {
    return this._userIndex;
  }
  set userIndex(t) {
    this._userIndex = t, this._ghostObject?.setUserIndex(t);
  }
  _collisionFlags = R.NO_CONTACT_RESPONSE;
  /**
   * 获取碰撞标志
   */
  get collisionFlags() {
    return this._ghostObject?.getCollisionFlags() ?? this._collisionFlags;
  }
  /**
   * 添加单个碰撞标志
   */
  addCollisionFlag(t) {
    this._collisionFlags = this.collisionFlags | t, this._ghostObject?.setCollisionFlags(this._collisionFlags);
  }
  /**
   * 删除单个碰撞标志
   */
  removeCollisionFlag(t) {
    this._collisionFlags = this.collisionFlags & ~t, this._ghostObject?.setCollisionFlags(this._collisionFlags);
  }
  async start() {
    if (!this._shape) throw new Error("Ghost object need collision shape");
    let t = this.object3D.localPosition, i = this.object3D.localRotation;
    this._ghostObject = U.createAndAddGhostObject(
      this._shape,
      t,
      i,
      this._collisionFlags,
      this._userIndex
    ), this.transform.onPositionChange = (e, s) => {
      s ||= this.transform.localPosition, this._ghostObject.getWorldTransform().setOrigin(o.toBtVec(s));
    }, this.transform.onRotationChange = (e, s) => {
      s ||= this.transform.localRotation, this._ghostObject.getWorldTransform().setRotation(o.eulerToBtQua(s));
    }, this.transform.onScaleChange = (e, s) => {
      s ||= this.transform.localScale, this._shape.setLocalScaling(o.toBtVec(s));
    }, this._initResolve(), this.collisionEventHandler.configure(r.getPointer(this._ghostObject));
  }
  /**
   * 创建幽灵对象并添加到物理世界。
   * @param shape - 碰撞形状。
   * @param position - 幽灵对象的位置。
   * @param rotation - 幽灵对象的旋转。
   * @param collisionFlags - 可选参数，碰撞标志，默认值为 4 `NO_CONTACT_RESPONSE` 表示对象不参与碰撞响应，但仍会触发碰撞事件。
   * @param userIndex - 可选参数，用户索引，可作为物理对象标识。
   * @returns 新创建的 Ammo.btPairCachingGhostObject 对象。
   */
  static createAndAddGhostObject(t, i, e, s, n) {
    let a = new r.btPairCachingGhostObject(), c = g.TEMP_TRANSFORM;
    return c.setIdentity(), c.setOrigin(o.toBtVec(i)), c.setRotation(o.eulerToBtQua(e)), a.setWorldTransform(c), a.setCollisionShape(t), s ??= R.NO_CONTACT_RESPONSE, a.setCollisionFlags(
      a.getCollisionFlags() | s
    ), n != null && a.setUserIndex(n), g.world.addCollisionObject(a), a;
  }
  /**
   * 获取幽灵对象
   */
  get ghostObject() {
    return this._ghostObject;
  }
  /**
   * 异步获取完成初始化的幽灵对象
   */
  async wait() {
    return await this._initializationPromise, this._ghostObject;
  }
  /**
   * 启用/禁用碰撞回调
   */
  get enableCollisionEvent() {
    return this.collisionEventHandler.enableCollisionEvent;
  }
  set enableCollisionEvent(t) {
    this.collisionEventHandler.enableCollisionEvent = t;
  }
  /**
   * 碰撞事件回调
   */
  get collisionEvent() {
    return this.collisionEventHandler.collisionEvent;
  }
  set collisionEvent(t) {
    this.collisionEventHandler.collisionEvent = t;
  }
  destroy(t) {
    this._ghostObject && (g.world.removeCollisionObject(this._ghostObject), r.destroy(this._ghostObject.getCollisionShape()), r.destroy(this._ghostObject), this._ghostObject = null), this._shape = null, this.transform.onPositionChange = null, this.transform.onRotationChange = null, this.transform.onScaleChange = null, this.collisionEventHandler.destroy(), super.destroy(t);
  }
}
class z extends v {
  _initResolve;
  _initializationPromise = new Promise(
    (t) => this._initResolve = t
  );
  _btBodyInited = !1;
  _btSoftbody;
  _geometry;
  /**
   * 软体的总质量，默认值为 `1`
   */
  mass = 1;
  /**
   * 碰撞边距，默认值为 `0.15`
   */
  margin = 0.15;
  /**
   * 碰撞组，默认值为 `1`
   */
  group = 1;
  /**
   * 碰撞掩码，默认值为 `-1`
   */
  mask = -1;
  /**
   * 锚点的影响力。影响力值越大，软体节点越紧密地跟随刚体的运动。通常，这个值在0到1之间。默认值为 `1`。
   */
  influence = 1;
  /**
   * 是否禁用与锚定刚体之间的碰撞，默认值为 `false`。
   */
  disableCollision = !1;
  /**
   * 设置软体激活状态。
   */
  set activationState(t) {
    this.wait().then((i) => i.setActivationState(t));
  }
  get btBodyInited() {
    return this._btBodyInited;
  }
  get btSoftBody() {
    return this._btSoftbody;
  }
  init() {
    if (!g.isSoftBodyWord)
      throw new Error(
        "Enable soft body simulation by setting Physics.init({useSoftBody: true}) during initialization."
      );
    if (this._geometry = this.object3D.getComponent(M)?.geometry, !this._geometry)
      throw new Error("SoftBody requires valid geometry.");
  }
  async start() {
    const t = this._btSoftbody = this.initSoftBody();
    this.configureSoftBody(t), t.setTotalMass(this.mass, !1), r.castObject(t, r.btCollisionObject).getCollisionShape().setMargin(this.margin), g.world.addSoftBody(
      t,
      this.group,
      this.mask
    ), this.transform.worldMatrix.identity(), this._btBodyInited = !0, this._initResolve();
  }
  /**
   * Asynchronously retrieves the fully initialized soft body instance.
   */
  async wait() {
    return await this._initializationPromise, this._btSoftbody;
  }
  /**
   * Wraps the native soft body's `appendAnchor` method to anchor a node to a rigid body.
   * @param nodeIndex - Index of the node to anchor.
   * @param targetRigidbody - The rigid body to anchor to.
   * @param disCollision - Optional. Disable collisions if true.
   * @param influence - Optional. Anchor's influence.
   */
  appendAnchor(t, i, e, s) {
    e ??= this.disableCollision, s ??= this.influence, i.wait().then((n) => {
      this.wait().then((a) => {
        a.appendAnchor(
          t,
          n,
          e,
          s
        );
      });
    });
  }
  /**
   * 固定软体节点。
   * @param fixedNodeIndices 需要固定的节点索引。
   */
  applyFixedNodes(t) {
    this.wait().then((i) => {
      const e = i.get_m_nodes();
      t.forEach((s) => {
        s >= 0 && s < e.size() ? (e.at(s).get_m_v().setValue(0, 0, 0), e.at(s).get_m_f().setValue(0, 0, 0), e.at(s).set_m_im(0)) : console.warn(`Index ${s} is out of bounds for nodes array.`);
      });
    });
  }
  /**
   * 清除固定节点
   * @param index 需要清除的节点索引，如果未提供，则清除所有节点。
   */
  clearFixedNodes(t) {
    const i = this._btSoftbody.get_m_nodes(), e = i.size();
    let s = 1 / this.mass * e;
    if (t != null) {
      i.at(t).set_m_im(s);
      return;
    }
    for (let n = 0; n < e; n++)
      i.at(n).set_m_im(s);
  }
  destroy(t) {
    this._btBodyInited && (g.world instanceof r.btSoftRigidDynamicsWorld && (g.world.removeSoftBody(this._btSoftbody), r.destroy(this._btSoftbody)), this._geometry = null, this._btSoftbody = null, this._btBodyInited = !1), super.destroy(t);
  }
}
class _t extends z {
  _segmentW;
  _segmentH;
  _offset = new d();
  _btRigidbody;
  // 通过锚点附加的 Ammo 刚体实例
  /**
   * 布料的四个角，默认以平面法向量计算各角。
   */
  clothCorners;
  /**
   * 固定节点索引。
   */
  fixNodeIndices = [];
  /**
   * 添加锚点时需要的刚体。
   */
  anchorRigidbody;
  /**
   * 布料的锚点。
   */
  anchorIndices = [];
  /**
   * 仅在设置 `anchorRigidbody` 后有效，表示布料软体相对刚体的位置。
   */
  anchorPosition = new d();
  /**
   * 仅在设置 `anchorRigidbody` 后有效，表示布料软体相对刚体的旋转。
   */
  anchorRotation = new d();
  async start() {
    if (!(this._geometry instanceof D))
      throw new Error("The cloth softbody requires plane geometry.");
    this.anchorRigidbody && (this._btRigidbody = await this.anchorRigidbody.wait()), this._segmentW = this._geometry.segmentW, this._segmentH = this._geometry.segmentH, super.start();
  }
  initSoftBody() {
    let t, i, e, s;
    if (this.clothCorners)
      t = o.toBtVec(
        this.clothCorners[0],
        o.tmpVecA
      ), i = o.toBtVec(
        this.clothCorners[1],
        o.tmpVecB
      ), e = o.toBtVec(
        this.clothCorners[2],
        o.tmpVecC
      ), s = o.toBtVec(
        this.clothCorners[3],
        o.tmpVecD
      );
    else {
      const a = this._geometry.up;
      let c = a.equals(d.X_AXIS) ? d.BACK : d.X_AXIS;
      c = a.crossProduct(c).normalize();
      const h = c.crossProduct(a).normalize(), m = this._geometry.width / 2, _ = this._geometry.height / 2, y = c.mul(m).add(h.mul(-_)), f = c.mul(m).add(h.mul(_)), p = c.mul(-m).add(h.mul(-_)), T = c.mul(-m).add(h.mul(_));
      t = o.toBtVec(y, o.tmpVecA), i = o.toBtVec(f, o.tmpVecB), e = o.toBtVec(p, o.tmpVecC), s = o.toBtVec(T, o.tmpVecD);
    }
    return new r.btSoftBodyHelpers().CreatePatch(
      g.worldInfo,
      t,
      i,
      e,
      s,
      this._segmentW + 1,
      this._segmentH + 1,
      0,
      !0
    );
  }
  configureSoftBody(t) {
    const i = t.get_m_cfg();
    if (i.set_viterations(10), i.set_piterations(10), t.generateBendingConstraints(
      2,
      t.get_m_materials().at(0)
    ), this.fixNodeIndices.length > 0 && this.applyFixedNodes(this.fixNodeIndices), this.anchorIndices.length > 0) {
      if (!this._btRigidbody) throw new Error("Needs a rigid body");
      this.applyAnchor(t);
    } else
      t.rotate(
        o.eulerToBtQua(this.transform.localRotation)
      ), t.translate(
        o.toBtVec(this.transform.localPosition)
      );
  }
  applyAnchor(t) {
    let i = this._btRigidbody.getWorldTransform();
    o.fromBtVec(i.getOrigin(), d.HELP_0), d.HELP_0.add(this.anchorPosition, d.HELP_1), o.fromBtQua(i.getRotation(), S.HELP_0), S.HELP_1.fromEulerAngles(
      this.anchorRotation.x,
      this.anchorRotation.y,
      this.anchorRotation.z
    ), S.HELP_1.multiply(S.HELP_0, S.HELP_1), t.rotate(o.toBtQua(S.HELP_1)), t.translate(o.toBtVec(d.HELP_1)), this.getCornerIndices(this.anchorIndices).forEach((s) => {
      t.appendAnchor(
        s,
        this._btRigidbody,
        this.disableCollision,
        this.influence
      );
    });
  }
  /**
   * 将 CornerType 数组转换成节点索引数组。
   * @param cornerList 需要转换的 CornerType 数组。
   * @returns 节点索引数组
   */
  getCornerIndices(t) {
    if (typeof t[0] == "number") return t;
    const i = this._segmentW, e = this._segmentH;
    return t.map((s) => {
      switch (s) {
        case "left":
          return this.getVertexIndex(0, Math.floor(e / 2));
        case "right":
          return this.getVertexIndex(i, Math.floor(e / 2));
        case "top":
          return this.getVertexIndex(Math.floor(i / 2), 0);
        case "bottom":
          return this.getVertexIndex(Math.floor(i / 2), e);
        case "center":
          return this.getVertexIndex(Math.floor(i / 2), Math.floor(e / 2));
        case "leftTop":
          return 0;
        case "rightTop":
          return i;
        case "leftBottom":
          return this.getVertexIndex(0, e);
        case "rightBottom":
          return this.getVertexIndex(i, e);
        default:
          throw new Error("Invalid corner");
      }
    });
  }
  getVertexIndex(t, i) {
    return i * (this._segmentW + 1) + t;
  }
  /**
   * 固定软体节点。
   * @param fixedNodeIndices 表示需要固定的节点索引或 CornerType 数组。
   */
  applyFixedNodes(t) {
    this.wait().then(() => {
      const i = this.getCornerIndices(t);
      super.applyFixedNodes(i);
    });
  }
  /**
   * 清除锚点，软体将会从附加的刚体上脱落
   */
  clearAnchors() {
    this._btSoftbody.get_m_anchors().clear(), this._offset.set(0, 0, 0), this._btRigidbody = null, this.anchorRigidbody = null;
  }
  onUpdate() {
    if (!this._btBodyInited) return;
    if (this._btRigidbody) {
      this._btRigidbody.getMotionState().getWorldTransform(g.TEMP_TRANSFORM);
      const s = this._btRigidbody.getWorldTransform().getOrigin();
      o.fromBtVec(g.TEMP_TRANSFORM.getOrigin(), d.HELP_0), o.fromBtVec(s, d.HELP_1), d.sub(d.HELP_0, d.HELP_1, this._offset);
    }
    const t = this._geometry.getAttribute(w.position), i = this._geometry.getAttribute(w.normal), e = this._btSoftbody.get_m_nodes();
    for (let s = 0; s < e.size(); s++) {
      const n = e.at(s), a = n.get_m_x();
      t.data[3 * s] = a.x() + this._offset.x, t.data[3 * s + 1] = a.y() + this._offset.y, t.data[3 * s + 2] = a.z() + this._offset.z;
      const c = n.get_m_n();
      i.data[3 * s] = -c.x(), i.data[3 * s + 1] = -c.y(), i.data[3 * s + 2] = -c.z();
    }
    this._geometry.vertexBuffer.upload(w.position, t), this._geometry.vertexBuffer.upload(w.normal, i);
  }
  destroy(t) {
    this._btRigidbody = null, this.anchorRigidbody = null, super.destroy(t);
  }
}
class mt extends z {
  /**
   * 绳索两端的固定选项，默认值为 `0`
   *
   * `0`：两端不固定，`1`：起点固定，`2`：终点固定，`3`：两端固定
   */
  fixeds = 0;
  /**
   * 固定节点索引，与 `fixeds` 属性作用相同，但可以更自由的控制任意节点。
   */
  fixNodeIndices = [];
  /**
   * 绳索弹性，值越大弹性越低，通常设置为 0 到 1 之间，默认值为 `0.5`。
   */
  elasticity = 0.5;
  /**
   * 绳索起点处锚定的刚体，设置此项后绳索的起点将与该刚体的位置相同。
   */
  anchorRigidbodyHead;
  /**
   * 绳索终点处锚定的刚体，设置此项后绳索的终点将与该刚体的位置相同。
   */
  anchorRigidbodyTail;
  /**
   * 锚点的起点偏移量，表示起点与锚定的刚体之间的相对位置。
   */
  anchorOffsetHead = new d();
  /**
   * 锚点的终点偏移量，表示终点与锚定的刚体之间的相对位置。
   */
  anchorOffsetTail = new d();
  _positionHead;
  _positionTail;
  async start() {
    if (this.anchorRigidbodyHead) {
      const t = await this.anchorRigidbodyHead.wait();
      this._positionHead = o.fromBtVec(
        t.getWorldTransform().getOrigin()
      ), this._positionHead.add(this.anchorOffsetHead, this._positionHead);
    }
    if (this.anchorRigidbodyTail) {
      const t = await this.anchorRigidbodyTail.wait();
      this._positionTail = o.fromBtVec(
        t.getWorldTransform().getOrigin()
      ), this._positionTail.add(this.anchorOffsetTail, this._positionTail);
    }
    super.start();
  }
  initSoftBody() {
    const t = this._geometry.getAttribute(
      w.position
    ).data;
    this._positionHead ||= new d(
      t[0],
      t[1],
      t[2]
    ), this._positionTail ||= new d(
      t.at(-3),
      t.at(-2),
      t.at(-1)
    );
    const i = o.toBtVec(
      this._positionHead,
      o.tmpVecA
    ), e = o.toBtVec(
      this._positionTail,
      o.tmpVecB
    ), s = this._geometry.vertexCount - 1;
    return new r.btSoftBodyHelpers().CreateRope(
      g.worldInfo,
      i,
      e,
      s - 1,
      this.fixeds
    );
  }
  configureSoftBody(t) {
    const i = t.get_m_cfg();
    if (i.set_viterations(10), i.set_piterations(10), this.setElasticity(this.elasticity), this.fixNodeIndices.length > 0 && this.applyFixedNodes(this.fixNodeIndices), this.anchorRigidbodyHead) {
      const e = this.anchorRigidbodyHead.btRigidbody;
      t.appendAnchor(0, e, this.disableCollision, this.influence);
    }
    if (this.anchorRigidbodyTail) {
      const e = this.anchorRigidbodyTail.btRigidbody;
      t.appendAnchor(
        this._geometry.vertexCount - 1,
        e,
        this.disableCollision,
        this.influence
      );
    }
  }
  /**
   * set rope elasticity to 0~1
   */
  setElasticity(t) {
    this.elasticity = t, this.wait().then((i) => {
      const e = i.get_m_materials().at(0);
      e.set_m_kLST(t), e.set_m_kAST(t);
    });
  }
  /**
   * 清除锚点，软体将会从附加的刚体上脱落
   * @param isPopBack 是否只删除一个锚点，当存在首尾两个锚点时，删除终点的锚点。
   */
  clearAnchors(t) {
    t ? this._btSoftbody.get_m_anchors().pop_back() : this._btSoftbody.get_m_anchors().clear();
  }
  onUpdate() {
    if (!this._btBodyInited) return;
    const t = this._btSoftbody.get_m_nodes(), i = this._geometry.getAttribute(w.position);
    for (let e = 0; e < t.size(); e++) {
      const s = t.at(e).get_m_x();
      i.data[3 * e] = s.x(), i.data[3 * e + 1] = s.y(), i.data[3 * e + 2] = s.z();
    }
    this._geometry.vertexBuffer.upload(w.position, i);
  }
  destroy(t) {
    this.anchorRigidbodyHead = null, this.anchorRigidbodyTail = null, super.destroy(t);
  }
  /**
   * 构建绳索（线条）几何体，注意添加材质时需要将拓扑结构 `topology` 设置为 `'line-list'`。
   * @param segmentCount 分段数
   * @param startPos 起点
   * @param endPos 终点
   * @returns GeometryBase
   */
  static buildRopeGeometry(t, i, e) {
    let s = new Float32Array((t + 1) * 3), n = new Uint16Array(t * 2);
    for (let _ = 0; _ < t; _++)
      n[_ * 2] = _, n[_ * 2 + 1] = _ + 1;
    const a = (e.x - i.x) / t, c = (e.y - i.y) / t, h = (e.z - i.z) / t;
    for (let _ = 0; _ <= t; _++)
      s[_ * 3] = i.x + a * _, s[_ * 3 + 1] = i.y + c * _, s[_ * 3 + 2] = i.z + h * _;
    const m = new ot();
    return m.setIndices(n), m.setAttribute(w.position, s), m.addSubGeometry({
      indexStart: 0,
      indexCount: n.length,
      vertexStart: 0,
      vertexCount: 0,
      firstStart: 0,
      index: 0,
      topology: 0
    }), m;
  }
}
class A extends v {
  _targetRigidbody;
  _constraint;
  _initResolve;
  _initializationPromise = new Promise(
    (t) => this._initResolve = t
  );
  _breakingThreshold;
  /**
   * The pivot point for the self body
   * `FrameInA Origin`
   */
  pivotSelf = new d();
  /**
   * The pivot point for the target body
   * `FrameInB Origin`
   */
  pivotTarget = new d();
  /**
   * The rotation for the self body
   * `FrameInA Rotation`
   */
  rotationSelf = new S();
  /**
   * The rotation for the target body
   * `FrameInB Rotation`
   */
  rotationTarget = new S();
  disableCollisionsBetweenLinkedBodies = !0;
  /**
   * 断裂脉冲阈值，值越大，约束越不易断裂。
   */
  get breakingThreshold() {
    return this._breakingThreshold;
  }
  set breakingThreshold(t) {
    this._breakingThreshold = t, this._constraint?.setBreakingImpulseThreshold(t);
  }
  async start() {
    const t = this.object3D.getComponent(ct);
    if (!t)
      throw new Error(
        `${this.constructor.name} requires a rigidbody on the object.`
      );
    t.btBodyInited || await t.wait(), this._targetRigidbody && !this._targetRigidbody.btBodyInited && await this._targetRigidbody.wait(), this.createConstraint(
      t.btRigidbody,
      this._targetRigidbody?.btRigidbody
    ), this._constraint && (this._breakingThreshold != null && this._constraint.setBreakingImpulseThreshold(this._breakingThreshold), g.world.addConstraint(
      this._constraint,
      this.disableCollisionsBetweenLinkedBodies
    ), this._initResolve());
  }
  /**
   * 子类实现具体的约束创建逻辑
   * @param selfBody
   * @param targetBody
   */
  createConstraint(t, i) {
  }
  /**
   * 获取约束实例
   */
  get constraint() {
    return this._constraint || console.warn(
      "Constraint has not been initialized. Please use wait() to get the constraint instance asynchronously."
    ), this._constraint;
  }
  /**
   * 异步获取完成初始化的约束实例
   */
  async wait() {
    return await this._initializationPromise, this._constraint;
  }
  /**
   * 重置约束，销毁当前约束实例后重新创建并返回新的约束实例
   */
  async resetConstraint() {
    if (this._constraint)
      return g.rigidBodyUtil.destroyConstraint(this._constraint), this._constraint = null, await this.start(), this._constraint;
    console.warn("No constraint to reset.");
  }
  /**
   * 目标刚体组件
   */
  get targetRigidbody() {
    return this._targetRigidbody;
  }
  set targetRigidbody(t) {
    this._targetRigidbody = t;
  }
  destroy(t) {
    g.rigidBodyUtil.destroyConstraint(this._constraint), this._constraint = null, this._targetRigidbody = null, super.destroy(t);
  }
}
class ut extends A {
  _twistSpan = Math.PI;
  _swingSpan1 = Math.PI;
  _swingSpan2 = Math.PI;
  /**
   * 扭转角度限制，绕 X 轴的扭转范围。
   * 默认值 `Math.PI` 
   */
  get twistSpan() {
    return this._twistSpan;
  }
  set twistSpan(t) {
    this._twistSpan = t, this._constraint?.setLimit(3, t);
  }
  /**
   * 摆动角度限制1，绕 Y 轴的摆动范围。
   * 默认值 `Math.PI` 
   */
  get swingSpan1() {
    return this._swingSpan1;
  }
  set swingSpan1(t) {
    this._swingSpan1 = t, this._constraint?.setLimit(5, t);
  }
  /**
   * 摆动角度限制2，绕 Z 轴的摆动范围。
   * 默认值 `Math.PI` 
   */
  get swingSpan2() {
    return this._swingSpan2;
  }
  set swingSpan2(t) {
    this._swingSpan2 = t, this._constraint?.setLimit(4, t);
  }
  createConstraint(t, i) {
    const e = o.toBtVec(this.pivotSelf), s = o.toBtQua(this.rotationSelf), n = g.TEMP_TRANSFORM;
    if (n.setIdentity(), n.setOrigin(e), n.setRotation(s), i) {
      const a = o.toBtVec(this.pivotTarget, o.tmpVecB), c = o.toBtQua(this.rotationTarget, o.tmpQuaB), h = new r.btTransform();
      h.setIdentity(), h.setOrigin(a), h.setRotation(c), this._constraint = new r.btConeTwistConstraint(t, i, n, h), r.destroy(h);
    } else
      this._constraint = new r.btConeTwistConstraint(t, n);
    this._constraint.setLimit(3, this.twistSpan), this._constraint.setLimit(5, this.swingSpan1), this._constraint.setLimit(4, this.swingSpan2);
  }
}
class pt extends A {
  createConstraint(t, i) {
    if (!i) throw new Error("FixedConstraint requires a target rigidbody");
    const e = o.toBtVec(this.pivotSelf), s = o.toBtQua(this.rotationSelf), n = g.TEMP_TRANSFORM;
    n.setIdentity(), n.setOrigin(e), n.setRotation(s);
    const a = o.toBtVec(this.pivotTarget, o.tmpVecB), c = o.toBtQua(this.rotationTarget, o.tmpQuaB), h = new r.btTransform();
    h.setIdentity(), h.setOrigin(a), h.setRotation(c), this._constraint = new r.btFixedConstraint(t, i, n, h), r.destroy(h);
  }
}
class yt extends A {
  _linearLowerLimit = new d(-1e30, -1e30, -1e30);
  _linearUpperLimit = new d(1e30, 1e30, 1e30);
  _angularLowerLimit = new d(
    -Math.PI,
    -Math.PI,
    -Math.PI
  );
  _angularUpperLimit = new d(Math.PI, Math.PI, Math.PI);
  /**
   * default: `-1e30, -1e30, -1e30`
   */
  get linearLowerLimit() {
    return this._linearLowerLimit;
  }
  set linearLowerLimit(t) {
    this._linearLowerLimit.copyFrom(t), this._constraint?.setLinearLowerLimit(o.toBtVec(t));
  }
  /**
   * default: `1e30, 1e30, 1e30`
   */
  get linearUpperLimit() {
    return this._linearUpperLimit;
  }
  set linearUpperLimit(t) {
    this._linearUpperLimit.copyFrom(t), this._constraint?.setLinearUpperLimit(o.toBtVec(t));
  }
  /**
   * default: `-Math.PI, -Math.PI, -Math.PI`
   */
  get angularLowerLimit() {
    return this._angularLowerLimit;
  }
  set angularLowerLimit(t) {
    this._angularLowerLimit.copyFrom(t), this._constraint?.setAngularLowerLimit(o.toBtVec(t));
  }
  /**
   * default: `Math.PI, Math.PI, Math.PI`
   */
  get angularUpperLimit() {
    return this._angularUpperLimit;
  }
  set angularUpperLimit(t) {
    this._angularUpperLimit.copyFrom(t), this._constraint?.setAngularUpperLimit(o.toBtVec(t));
  }
  /**
   * 是否使用线性参考坐标系。
   * 默认值: `true`
   */
  useLinearFrameReferenceFrame = !0;
  createConstraint(t, i) {
    const e = o.toBtVec(this.pivotSelf), s = o.toBtQua(this.rotationSelf), n = g.TEMP_TRANSFORM;
    if (n.setIdentity(), n.setOrigin(e), n.setRotation(s), i) {
      const a = o.toBtVec(
        this.pivotTarget,
        o.tmpVecB
      ), c = o.toBtQua(
        this.rotationTarget,
        o.tmpQuaB
      ), h = new r.btTransform();
      h.setIdentity(), h.setOrigin(a), h.setRotation(c), this._constraint = new r.btGeneric6DofConstraint(
        t,
        i,
        n,
        h,
        this.useLinearFrameReferenceFrame
      ), r.destroy(h);
    } else
      this._constraint = new r.btGeneric6DofConstraint(
        t,
        n,
        this.useLinearFrameReferenceFrame
      );
    this._constraint.setLinearLowerLimit(
      o.toBtVec(this._linearLowerLimit)
    ), this._constraint.setLinearUpperLimit(
      o.toBtVec(this._linearUpperLimit)
    ), this._constraint.setAngularLowerLimit(
      o.toBtVec(this._angularLowerLimit)
    ), this._constraint.setAngularUpperLimit(
      o.toBtVec(this._angularUpperLimit)
    );
  }
}
class ft extends A {
  _linearLowerLimit = new d(-1e30, -1e30, -1e30);
  _linearUpperLimit = new d(1e30, 1e30, 1e30);
  _angularLowerLimit = new d(
    -Math.PI,
    -Math.PI,
    -Math.PI
  );
  _angularUpperLimit = new d(Math.PI, Math.PI, Math.PI);
  // 缓存约束配置参数
  _springParams = [];
  _stiffnessParams = [];
  _dampingParams = [];
  _equilibriumPointParams = [];
  /**
   * default: `-1e30, -1e30, -1e30`
   */
  get linearLowerLimit() {
    return this._linearLowerLimit;
  }
  set linearLowerLimit(t) {
    this._linearLowerLimit.copyFrom(t), this._constraint?.setLinearLowerLimit(o.toBtVec(t));
  }
  /**
   * default: `1e30, 1e30, 1e30`
   */
  get linearUpperLimit() {
    return this._linearUpperLimit;
  }
  set linearUpperLimit(t) {
    this._linearUpperLimit.copyFrom(t), this._constraint?.setLinearUpperLimit(o.toBtVec(t));
  }
  /**
   * default: `-Math.PI, -Math.PI, -Math.PI`
   */
  get angularLowerLimit() {
    return this._angularLowerLimit;
  }
  set angularLowerLimit(t) {
    this._angularLowerLimit.copyFrom(t), this._constraint?.setAngularLowerLimit(o.toBtVec(t));
  }
  /**
   * default: `Math.PI, Math.PI, Math.PI`
   */
  get angularUpperLimit() {
    return this._angularUpperLimit;
  }
  set angularUpperLimit(t) {
    this._angularUpperLimit.copyFrom(t), this._constraint?.setAngularUpperLimit(o.toBtVec(t));
  }
  /**
   * 启用或禁用弹簧功能。
   * @param index 弹簧的索引
   * @param onOff 是否启用
   */
  enableSpring(t, i) {
    this._constraint ? this._constraint.enableSpring(t, i) : this._springParams.push({ index: t, onOff: i });
  }
  /**
   * 设置弹簧的刚度。
   * @param index 弹簧的索引
   * @param stiffness 刚度值
   */
  setStiffness(t, i) {
    this._constraint ? this._constraint.setStiffness(t, i) : this._stiffnessParams.push({ index: t, stiffness: i });
  }
  /**
   * 设置弹簧的阻尼。
   * @param index 弹簧的索引
   * @param damping 阻尼值
   */
  setDamping(t, i) {
    this._constraint ? this._constraint.setDamping(t, i) : this._dampingParams.push({ index: t, damping: i });
  }
  /**
   * 设置弹簧的平衡点。
   *
   * @param index 弹簧的索引（可选）。如果不提供，则重置所有弹簧的平衡点。
   * @param val 平衡点值（可选）。如果提供，则设置指定弹簧的平衡点为该值。
   *
   * - 不带参数时，重置所有弹簧的平衡点。
   * - 只带 `index` 参数时，设置指定弹簧的平衡点（值由系统内部处理）。
   * - 带 `index` 和 `val` 参数时，设置指定弹簧的平衡点为 `val`。
   */
  setEquilibriumPoint(t, i) {
    this._constraint ? t == null ? this._constraint.setEquilibriumPoint() : i == null ? this._constraint.setEquilibriumPoint(t) : this._constraint.setEquilibriumPoint(t, i) : this._equilibriumPointParams.push({ index: t, val: i });
  }
  /**
   * 是否使用线性参考坐标系。
   * 默认值 `true`
   */
  useLinearFrameReferenceFrame = !0;
  createConstraint(t, i) {
    const e = o.toBtVec(this.pivotSelf), s = o.toBtQua(this.rotationSelf), n = g.TEMP_TRANSFORM;
    if (n.setIdentity(), n.setOrigin(e), n.setRotation(s), i) {
      const a = o.toBtVec(
        this.pivotTarget,
        o.tmpVecB
      ), c = o.toBtQua(
        this.rotationTarget,
        o.tmpQuaB
      ), h = new r.btTransform();
      h.setIdentity(), h.setOrigin(a), h.setRotation(c), this._constraint = new r.btGeneric6DofSpringConstraint(
        t,
        i,
        n,
        h,
        this.useLinearFrameReferenceFrame
      ), r.destroy(h);
    } else
      this._constraint = new r.btGeneric6DofSpringConstraint(
        t,
        n,
        this.useLinearFrameReferenceFrame
      );
    this.setConstraint();
  }
  setConstraint() {
    this._constraint.setLinearLowerLimit(
      o.toBtVec(this._linearLowerLimit)
    ), this._constraint.setLinearUpperLimit(
      o.toBtVec(this._linearUpperLimit)
    ), this._constraint.setAngularLowerLimit(
      o.toBtVec(this._angularLowerLimit)
    ), this._constraint.setAngularUpperLimit(
      o.toBtVec(this._angularUpperLimit)
    ), this._springParams.forEach(
      (t) => this._constraint.enableSpring(t.index, t.onOff)
    ), this._stiffnessParams.forEach(
      (t) => this._constraint.setStiffness(t.index, t.stiffness)
    ), this._dampingParams.forEach(
      (t) => this._constraint.setDamping(t.index, t.damping)
    ), this._equilibriumPointParams.forEach(
      (t) => this.setEquilibriumPoint(t.index, t.val)
    ), this._springParams = [], this._stiffnessParams = [], this._dampingParams = [], this._equilibriumPointParams = [];
  }
}
class bt extends A {
  /**
   * 自身刚体上的铰链轴方向。
   * 默认值 `Vector3.UP`
   */
  axisSelf = d.UP;
  /**
   * 目标刚体上的铰链轴方向。
   * 默认值 `Vector3.UP`
   */
  axisTarget = d.UP;
  /**
   * 是否使用自身刚体的参考框架。
   * 默认值 `true`
   */
  useReferenceFrameA = !0;
  /**
   * 是否使用两个刚体的变换重载方式。
   * 如果为 true，则使用两个刚体的变换作为约束的参考框架。
   * 默认值 `false`
   */
  useTwoBodiesTransformOverload = !1;
  _pendingLimits;
  _pendingMotorConfig;
  /**
   * 获取当前的限制参数。
   */
  get limitInfo() {
    return this._pendingLimits;
  }
  /**
   * 获取当前的马达配置参数。
   */
  get motorConfigInfo() {
    return this._pendingMotorConfig;
  }
  /**
   * 设置铰链约束的旋转限制。
   * @param low - 铰链旋转的最小角度（下限）。
   * @param high - 铰链旋转的最大角度（上限）。
   * @param softness - 软限制系数，表示限制的柔软程度。值在0到1之间，1表示完全刚性。
   * @param biasFactor - 偏置因子，用于控制限制恢复力的力度。值通常在0到1之间。
   * @param relaxationFactor -（可选）松弛因子，控制限制恢复的速度。值越大，恢复越快。
   */
  setLimit(t, i, e, s, n) {
    this._pendingLimits = [t, i, e, s, n], this._constraint?.setLimit(...this._pendingLimits);
  }
  /**
   * 启用或禁用角度马达。
   * @param enableMotor - 是否启用马达。
   * @param targetVelocity - 马达的目标速度。
   * @param maxMotorImpulse - 马达的最大推力。
   */
  enableAngularMotor(t, i, e) {
    this._pendingMotorConfig = [t, i, e], this._constraint?.enableAngularMotor(...this._pendingMotorConfig);
  }
  createConstraint(t, i) {
    const e = i ? this.useTwoBodiesTransformOverload ? "TWO_BODIES_TRANSFORM" : "TWO_BODIES_PIVOT" : "SINGLE_BODY_TRANSFORM", s = o.toBtVec(this.pivotSelf, o.tmpVecA), n = o.toBtVec(this.pivotTarget, o.tmpVecB);
    switch (e) {
      case "SINGLE_BODY_TRANSFORM":
        const a = g.TEMP_TRANSFORM;
        a.setIdentity(), a.setOrigin(s), a.setRotation(o.toBtQua(this.rotationSelf)), this._constraint = new r.btHingeConstraint(
          t,
          a,
          this.useReferenceFrameA
        );
        break;
      case "TWO_BODIES_TRANSFORM":
        const c = g.TEMP_TRANSFORM;
        c.setIdentity(), c.setOrigin(s), c.setRotation(o.toBtQua(this.rotationSelf));
        const h = new r.btTransform();
        h.setIdentity(), h.setOrigin(n), h.setRotation(
          o.toBtQua(this.rotationTarget, o.tmpQuaB)
        ), this._constraint = new r.btHingeConstraint(
          t,
          i,
          c,
          h,
          this.useReferenceFrameA
        ), r.destroy(h);
        break;
      case "TWO_BODIES_PIVOT":
        const m = o.toBtVec(
          this.axisSelf,
          o.tmpVecC
        ), _ = o.toBtVec(
          this.axisTarget,
          o.tmpVecD
        );
        this._constraint = new r.btHingeConstraint(
          t,
          i,
          s,
          n,
          m,
          _
        );
        break;
      default:
        console.error("Invalid constraint type");
        return;
    }
    this._pendingLimits && this.setLimit(...this._pendingLimits), this._pendingMotorConfig && this.enableAngularMotor(...this._pendingMotorConfig);
  }
}
class St extends A {
  createConstraint(t, i) {
    const e = o.toBtVec(this.pivotSelf);
    if (i) {
      const s = o.toBtVec(this.pivotTarget, o.tmpVecB);
      this._constraint = new r.btPoint2PointConstraint(t, i, e, s);
    } else
      this._constraint = new r.btPoint2PointConstraint(t, e);
  }
}
class wt extends A {
  _lowerLinLimit = -1e30;
  _upperLinLimit = 1e30;
  _lowerAngLimit = -Math.PI;
  _upperAngLimit = Math.PI;
  _poweredLinMotor = !1;
  _maxLinMotorForce = 0;
  _targetLinMotorVelocity = 0;
  /**
   * 是否使用线性参考框架。
   * 默认值 `true`
   */
  useLinearReferenceFrame = !0;
  createConstraint(t, i) {
    const e = o.toBtVec(this.pivotSelf), s = o.toBtQua(this.rotationSelf), n = g.TEMP_TRANSFORM;
    if (n.setIdentity(), n.setOrigin(e), n.setRotation(s), i) {
      const a = o.toBtVec(this.pivotTarget, o.tmpVecB), c = o.toBtQua(this.rotationTarget, o.tmpQuaB), h = new r.btTransform();
      h.setIdentity(), h.setOrigin(a), h.setRotation(c), this._constraint = new r.btSliderConstraint(t, i, n, h, this.useLinearReferenceFrame), r.destroy(h);
    } else
      this._constraint = new r.btSliderConstraint(t, n, this.useLinearReferenceFrame);
    this._constraint.setLowerLinLimit(this._lowerLinLimit), this._constraint.setUpperLinLimit(this._upperLinLimit), this._constraint.setLowerAngLimit(this._lowerAngLimit), this._constraint.setUpperAngLimit(this._upperAngLimit), this._constraint.setPoweredLinMotor(this._poweredLinMotor), this._constraint.setMaxLinMotorForce(this._maxLinMotorForce), this._constraint.setTargetLinMotorVelocity(this._targetLinMotorVelocity);
  }
  /**
   * 线性运动的下限限制。
   * 默认值 `-1e30` 表示无限制
   */
  get lowerLinLimit() {
    return this._lowerLinLimit;
  }
  set lowerLinLimit(t) {
    this._lowerLinLimit = t, this._constraint?.setLowerLinLimit(t);
  }
  /**
   * 线性运动的上限限制。
   * 默认值 `1e30` 表示无限制
   */
  get upperLinLimit() {
    return this._upperLinLimit;
  }
  set upperLinLimit(t) {
    this._upperLinLimit = t, this._constraint?.setUpperLinLimit(t);
  }
  /**
   * 角度运动的下限限制。
   * 默认值 `-Math.PI`
   */
  get lowerAngLimit() {
    return this._lowerAngLimit;
  }
  set lowerAngLimit(t) {
    this._lowerAngLimit = t, this._constraint?.setLowerAngLimit(t);
  }
  /**
   * 角度运动的上限限制。
   * 默认值 `Math.PI`
   */
  get upperAngLimit() {
    return this._upperAngLimit;
  }
  set upperAngLimit(t) {
    this._upperAngLimit = t, this._constraint?.setUpperAngLimit(t);
  }
  /**
   * 是否启用线性马达。
   * 默认值 `false`
   */
  get poweredLinMotor() {
    return this._poweredLinMotor;
  }
  set poweredLinMotor(t) {
    this._poweredLinMotor = t, this._constraint?.setPoweredLinMotor(t);
  }
  /**
   * 线性马达的最大推力。
   * 默认值 `0`
   */
  get maxLinMotorForce() {
    return this._maxLinMotorForce;
  }
  set maxLinMotorForce(t) {
    this._maxLinMotorForce = t, this._constraint?.setMaxLinMotorForce(t);
  }
  /**
   * 线性马达的目标速度。
   * 默认值 `0`
   */
  get targetLinMotorVelocity() {
    return this._targetLinMotorVelocity;
  }
  set targetLinMotorVelocity(t) {
    this._targetLinMotorVelocity = t, this._constraint?.setTargetLinMotorVelocity(t);
  }
}
export {
  x as ActivationState,
  Tt as Ammo,
  _t as ClothSoftbody,
  R as CollisionFlags,
  at as CollisionShapeUtil,
  ut as ConeTwistConstraint,
  u as ContactProcessedUtil,
  b as DebugDrawMode,
  pt as FixedConstraint,
  yt as Generic6DofConstraint,
  ft as Generic6DofSpringConstraint,
  U as GhostTrigger,
  bt as HingeConstraint,
  g as Physics,
  F as PhysicsDragger,
  St as PointToPointConstraint,
  gt as RigidBodyMapping,
  E as RigidBodyUtil,
  ct as Rigidbody,
  mt as RopeSoftbody,
  wt as SliderConstraint,
  o as TempPhyMath
};
