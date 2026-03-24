/**
 * 在修改 docs/examples/lighting-system-demo.html 后运行：
 *   node scripts/sync-lighting-demo-to-md.cjs
 * 将「光照系统」综合可运行示例（Direct+Point+Spot 同框）内嵌到 docs/组件系统/光照系统.md
 * 的「### 光源类型」与「#### 平行光」之间。
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "docs/examples/lighting-system-demo.html");
const mdPath = path.join(root, "docs/组件系统/光照系统.md");

const raw = fs.readFileSync(htmlPath, "utf8");
const esc = raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const header = `#### 可运行示例（光照系统）

### 完整示例

同一场景内同时使用 **DirectLight**（主光 + 阴影）、**PointLight**（暖色侧光）、**SpotLight**（冷色锥光 + 阴影）；右侧滑块调节各光源 \`intensity\`、平行光 \`indirect\`、点光 \`range\`、聚光 \`outerAngle\`。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-lighting-demo-tab" id="rings-lighting-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-lighting-demo-tab" id="rings-lighting-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-lighting-tab-preview:checked ~ .rings-tab-bar label[for="rings-lighting-tab-preview"],
    .rings-quick-demo #rings-lighting-tab-code:checked ~ .rings-tab-bar label[for="rings-lighting-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-lighting-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-lighting-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-lighting-tab-preview">示例</label>
    <label for="rings-lighting-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/lighting-system-demo.html" title="Rings 光照系统演示" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.5; color: #e2e8f0; white-space: pre;"><code>`;

const footer = `</code></pre>
  </div>
</div>

---

`;

const insert = (header + esc + footer).replace(/\r?\n/g, "\r\n");

let md = fs.readFileSync(mdPath, "utf8");
const re =
  /#### 可运行示例（光照系统）[\s\S]*?\r?\n---\r?\n\r?\n(?=#### 平行光 \(DirectLight\))/;

if (re.test(md)) {
  md = md.replace(re, insert);
} else {
  const anchor = "### 光源类型\n\n#### 平行光 (DirectLight)";
  const idx = md.indexOf(anchor);
  if (idx === -1) {
    console.error("光照系统.md: 未找到 ### 光源类型 与 #### 平行光 锚点");
    process.exit(1);
  }
  const before = md.slice(0, idx + "### 光源类型\n\n".length);
  const after = md.slice(idx + "### 光源类型\n\n".length);
  if (before.includes("rings-lighting-demo-tab")) {
    console.log("综合光照演示已存在，跳过插入。");
  } else {
    md = before + insert.replace(/\r\n/g, "\n") + after;
  }
}

fs.writeFileSync(mdPath, md, "utf8");
console.log("Synced lighting system demo embed into docs/组件系统/光照系统.md");
