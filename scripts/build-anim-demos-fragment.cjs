/**
 * 从 docs/examples/animation-*.html 生成转义后的 Markdown 片段，
 * 供「动画组件系统」README 内嵌（示例 / 代码 Tab 切换，与物理文档 rings-quick-demo 一致）。
 * 生成后运行 merge-anim-readme.cjs。
 */
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../docs/examples");
const demos = [
  {
    id: "animator",
    title: "AnimatorComponent（glTF + RiggedSimple.glb）",
    file: "animation-animator-demo.html",
  },
  {
    id: "property",
    title: "PropertyAnimation / PropertyAnimClip",
    file: "animation-property-demo.html",
  },
  {
    id: "event",
    title: "PropertyAnimationEvent（COMPLETE）",
    file: "animation-property-event-demo.html",
  },
  {
    id: "skeleton",
    title: "glTF 骨骼动画（eva_unit_01_rigged.glb + AnimatorComponent）",
    file: "animation-skeleton-demo.html",
  },
  {
    id: "morph",
    title: "MorphTargetBlender",
    file: "animation-morph-target-blender-demo.html",
  },
];

function esc(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function block(d) {
  const full = fs.readFileSync(path.join(dir, d.file), "utf8");
  const code = esc(full);
  const name = `rings-anim-${d.id}-tab`;
  const prev = `${name}-preview`;
  const cod = `${name}-code`;
  return (
    `### ${d.title}\n\n` +
    `<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">\n` +
    `  <input type="radio" name="${name}" id="${prev}" checked style="position: absolute; opacity: 0; pointer-events: none;">\n` +
    `  <input type="radio" name="${name}" id="${cod}" style="position: absolute; opacity: 0; pointer-events: none;">\n` +
    `  <style>\n` +
    `    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }\n` +
    `    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }\n` +
    `    .rings-quick-demo #${prev}:checked ~ .rings-tab-bar label[for="${prev}"],\n` +
    `    .rings-quick-demo #${cod}:checked ~ .rings-tab-bar label[for="${cod}"] { font-weight: 600; color: #0f172a; }\n` +
    `    .rings-quick-demo .rings-demo-preview,\n` +
    `    .rings-quick-demo .rings-demo-code { display: none; min-height: 420px; }\n` +
    `    .rings-quick-demo #${prev}:checked ~ .rings-demo-preview,\n` +
    `    .rings-quick-demo #${cod}:checked ~ .rings-demo-code { display: block; }\n` +
    `    .rings-quick-demo #${cod}:checked ~ .rings-demo-code { height: 480px; overflow: auto; }\n` +
    `  </style>\n` +
    `  <div class="rings-tab-bar">\n` +
    `    <label for="${prev}">示例</label>\n` +
    `    <label for="${cod}">代码</label>\n` +
    `  </div>\n` +
    `  <div class="rings-demo-preview" style="background: #0f172a;">\n` +
    `    <iframe src="examples/${d.file}" title="Rings 动画：${d.title}" style="width: 100%; min-height: 420px; border: none; display: block;"></iframe>\n` +
    `  </div>\n` +
    `  <div class="rings-demo-code" style="background: #1e293b;">\n` +
    `    <pre style="margin: 0; padding: 14px; font-size: 11px; line-height: 1.5; color: #e2e8f0; white-space: pre-wrap; word-break: break-all;"><code>${code}</code></pre>\n` +
    `  </div>\n` +
    `</div>\n\n`
  );
}

const intro =
  "文档站需以 **HTTP(S)** 打开；`iframe` 与示例页依赖 **unpkg**、**WebGPU** 与网络。**Animator** 示例从 jsDelivr 加载 **`camcopter_s_100.glb`**（RingsEngine/rings-resource）；**Morph** 示例从 CDN 拉取 glTF。每个块顶栏 **示例** / **代码** 为 **Tab 切换**。运行说明见 [`animation-demos-README.md`](../examples/animation-demos-README.md)。更新 `docs/examples/animation-*.html` 后执行 `node scripts/build-anim-demos-fragment.cjs` 与 `node scripts/merge-anim-readme.cjs`。\n\n";

const out = path.join(__dirname, "../docs/动画组件系统/_anim-demos-fragment.md");
fs.writeFileSync(out, intro + demos.map(block).join(""), "utf8");
console.log("Wrote", out);
