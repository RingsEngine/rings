/**
 * One-off / maintenance: split docs/extensions.md physics block into docs/物理引擎系统/*.md
 * Run: node scripts/split-physics-docs.cjs
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const extensionsPath = path.join(root, "docs", "extensions.md");
const outDir = path.join(root, "docs", "物理引擎系统");

const raw = fs.readFileSync(extensionsPath, "utf8");
const lines = raw.split(/\r?\n/);

function slice1Based(start, endInclusive) {
  return lines.slice(start - 1, endInclusive).join("\n");
}

/** 与 Docsify 及《组件系统》一致：iframe 使用相对站点根的 examples/，勿使用 ../examples/ */
function fixDemoPaths(s) {
  return s;
}

function writeFile(name, body) {
  fs.writeFileSync(path.join(outDir, name), fixDemoPaths(body) + "\n", "utf8");
}

fs.mkdirSync(outDir, { recursive: true });

// --- README: intro + workflow + performance/API table
const intro = slice1Based(5, 8);
const workflow = slice1Based(432, 461);
const perfApi = slice1Based(567, 621);

const readme = `# 物理引擎系统

${intro}

各功能点按 **类名** 分文档说明，内嵌可运行示例（与《组件系统》光照、网格等文档一致）。

## 物理世界与使用流程

${workflow}

## 性能与 API 索引

${perfApi}

## 文档索引

| 类 / 主题 | 说明 |
|-----------|------|
| [Physics](Physics) | 物理世界初始化、重力、步进、射线等 |
| [CollisionShapeUtil](CollisionShapeUtil) | 碰撞形状创建与 \`Rigidbody.shape\` |
| [Rigidbody](Rigidbody) | 刚体组件 |
| [PhysicsDragger](PhysicsDragger) | 调试绘制与拖拽交互 |
| [ContactProcessedUtil](ContactProcessedUtil) | 碰撞事件注册 |
| [GhostTrigger](GhostTrigger) | 触发体示例（与 \`collisionEvent\`） |
| [ClothSoftbody](ClothSoftbody) | 布料软体 |
| [Constraints](Constraints) | 约束综合示例、高级功能、约束通用属性 |
| [HingeConstraint](HingeConstraint) | 铰链约束 |
| [SliderConstraint](SliderConstraint) | 滑动约束 |
| [FixedConstraint](FixedConstraint) | 固定约束 |
| [PointToPointConstraint](PointToPointConstraint) | 点对点约束 |
| [ConeTwistConstraint](ConeTwistConstraint) | 锥形扭曲约束 |
| [Generic6DofConstraint](Generic6DofConstraint) | 通用 6DOF 约束 |
| [Generic6DofSpringConstraint](Generic6DofSpringConstraint) | 6DOF 弹簧约束 |
`;

writeFile("README.md", readme);

// Physics
let physics = slice1Based(3, 134);
physics = physics.replace(/^## 1\.物理引擎\s*$/m, "# Physics");
writeFile("Physics.md", physics);

// CollisionShapeUtil
let c = slice1Based(135, 238);
c = c.replace(/^### CollisionShapeUtil[^\n]*/, "# CollisionShapeUtil");
writeFile("CollisionShapeUtil.md", c);

// Rigidbody
let r = slice1Based(239, 427);
r = r.replace(/^### Rigidbody[^\n]*/, "# Rigidbody");
writeFile("Rigidbody.md", r);

// PhysicsDragger (debug + demo)
let d = slice1Based(463, 506);
d = `# PhysicsDragger\n\n` + d.replace(/^#### 3\. 物理调试\s*$/, "## 物理调试").replace(/^#### 可运行示例（PhysicsDragger）\s*$/, "## 可运行示例（PhysicsDragger）");
writeFile("PhysicsDragger.md", d);

// ContactProcessedUtil
let cp = slice1Based(508, 534);
cp = "# ContactProcessedUtil\n\n" + cp.replace(/^#### 4\. 物理事件系统\s*$/m, "## 物理事件系统");
writeFile("ContactProcessedUtil.md", cp);

// GhostTrigger
let g = slice1Based(536, 565);
g = g.replace(
  /^#### 可运行示例（GhostTrigger[^\n]*/,
  "# GhostTrigger\n\n## 可运行示例（GhostTrigger / 触发与回调）"
);
writeFile("GhostTrigger.md", g);

// ClothSoftbody
let cloth = slice1Based(623, 749);
cloth = cloth.replace(/^### ClothSoftbody[^\n]*/, "# ClothSoftbody");
writeFile("ClothSoftbody.md", cloth);

// Constraints overview + advanced + common
let cons = slice1Based(750, 782) + "\n\n" + slice1Based(1218, 1356);
cons = cons.replace(/^### 物理约束类型\s*$/m, "# Constraints\n\n## 物理约束类型");
cons = cons.replace(/^#### 可运行示例（约束类型综合）\s*$/m, "### 可运行示例（约束类型综合）");
cons = cons.replace(/^#### 高级物理功能\s*$/m, "### 高级物理功能");
cons = cons.replace(/^#### 约束属性配置\s*$/m, "### 约束属性配置");
cons = cons.replace(/^#### 约束事件处理\s*$/m, "### 约束事件处理");
cons = cons.replace(/^#### 约束调试\s*$/m, "### 约束调试");
writeFile("Constraints.md", cons);

const constraintPages = [
  ["HingeConstraint.md", 783, 886, "#### HingeConstraint", "# HingeConstraint"],
  ["SliderConstraint.md", 887, 963, "#### SliderConstraint", "# SliderConstraint"],
  ["FixedConstraint.md", 964, 1033, "#### FixedConstraint", "# FixedConstraint"],
  ["PointToPointConstraint.md", 1034, 1105, "#### PointToPointConstraint", "# PointToPointConstraint"],
  ["ConeTwistConstraint.md", 1107, 1174, "#### ConeTwistConstraint", "# ConeTwistConstraint"],
  ["Generic6DofConstraint.md", 1176, 1196, "#### Generic6DofConstraint", "# Generic6DofConstraint"],
  ["Generic6DofSpringConstraint.md", 1197, 1217, "#### Generic6DofSpringConstraint", "# Generic6DofSpringConstraint"],
];

for (const [name, a, b, fromRe, toRe] of constraintPages) {
  let chunk = slice1Based(a, b);
  chunk = chunk.replace(new RegExp("^" + fromRe.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[^\n]*"), toRe);
  writeFile(name, chunk);
}

console.log("Wrote docs/物理引擎系统/*.md from extensions.md ranges.");
