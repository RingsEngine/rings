/**
 * 在修改 docs/examples/material-demo.html 后运行：
 *   node scripts/sync-material-demo-to-md.cjs
 * 将「材质」可运行示例内嵌块同步到 docs/组件系统/材质系统.md。
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "docs/examples/material-demo.html");
const mdPath = path.join(root, "docs/组件系统/材质系统.md");

const raw = fs.readFileSync(htmlPath, "utf8");
const esc = raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const header = `#### 可运行示例（材质）

### 完整示例

**LitMaterial**：程序化棋盘格 \`BitmapTexture2D\` 作 \`baseMap\`，滑条调节 **metallic / roughness / emissiveIntensity / envIntensity（shader）/ clearcoatFactor** 与 **doubleSide**。**UnLitMaterial**：左侧立方体仅 **baseColor**（不受场景光）。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-material-demo-tab" id="rings-material-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-material-demo-tab" id="rings-material-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-material-tab-preview:checked ~ .rings-tab-bar label[for="rings-material-tab-preview"],
    .rings-quick-demo #rings-material-tab-code:checked ~ .rings-tab-bar label[for="rings-material-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-material-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-material-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-material-tab-preview">示例</label>
    <label for="rings-material-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/material-demo.html" title="Rings 材质演示" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
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
  /#### 可运行示例（材质）[\s\S]*?\r?\n---\r?\n\r?\n(?=### 无光照材质)/;

if (re.test(md)) {
  md = md.replace(re, insert);
} else {
  const anchor = "### 无光照材质 (UnLitMaterial)";
  const idx = md.indexOf(anchor);
  if (idx === -1) {
    console.error("材质系统.md: 未找到 ### 无光照材质 (UnLitMaterial)");
    process.exit(1);
  }
  const lookBack = md.slice(Math.max(0, idx - 120000), idx);
  if (lookBack.includes("rings-material-demo-tab")) {
    console.log("Material demo embed already present before UnLitMaterial, skip insert.");
  } else {
    md = md.slice(0, idx) + insert + md.slice(idx);
  }
}

fs.writeFileSync(mdPath, md, "utf8");
console.log("Synced material demo embed into docs/组件系统/材质系统.md");
