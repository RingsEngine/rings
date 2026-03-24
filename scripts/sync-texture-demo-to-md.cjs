/**
 * 在修改 docs/examples/texture-demo.html 后运行：
 *   node scripts/sync-texture-demo-to-md.cjs
 * 将「纹理」可运行示例内嵌块同步到 docs/组件系统/纹理.md。
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "docs/examples/texture-demo.html");
const mdPath = path.join(root, "docs/组件系统/纹理.md");

const raw = fs.readFileSync(htmlPath, "utf8");
const esc = raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const header = `#### 可运行示例（纹理）

### 完整示例

**BitmapTexture2D**：程序化 Canvas 棋盘格 → \`source\` 上传；**LitMaterial** \`baseMap\` + \`baseMapOffsetSize\` UV 平铺，\`doubleSide\`；\`PlaneGeometry(..., Vector3.Z_AXIS)\` 法线 +Z，**Hover** \`setCamera(0,-12,13)\` 从正面观察。右侧可切换 **addressModeU/V**、**min/mag filter**、**useMipmap** / **mipmapFilter**、**maxAnisotropy**、平铺次数。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-texture-demo-tab" id="rings-texture-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-texture-demo-tab" id="rings-texture-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-texture-tab-preview:checked ~ .rings-tab-bar label[for="rings-texture-tab-preview"],
    .rings-quick-demo #rings-texture-tab-code:checked ~ .rings-tab-bar label[for="rings-texture-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-texture-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-texture-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-texture-tab-preview">示例</label>
    <label for="rings-texture-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/texture-demo.html" title="Rings 纹理演示" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
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
// 仅匹配「纹理」章节：getTexture 资源表行 与 内嵌块 之间，避免误伤前文其它 ### 完整示例
const re =
  /\| `getTexture` \| `\([^)]+\)` \|[^\n]*\r?\n\r?\n(?:#### 可运行示例（纹理）\r?\n\r?\n)?### 完整示例[\s\S]*?rings-texture-demo-tab[\s\S]*?\r?\n---\r?\n\r?\n(?=### 2D纹理使用示例)/;

if (re.test(md)) {
  md = md.replace(re, insert);
} else {
  const anchor = "### 2D纹理使用示例";
  const idx = md.indexOf(anchor);
  if (idx === -1) {
    console.error("纹理.md: 未找到 ### 2D纹理使用示例");
    process.exit(1);
  }
  const lookBack = md.slice(Math.max(0, idx - 80000), idx);
  if (lookBack.includes("rings-texture-demo-tab")) {
    console.log("Texture demo embed already present before ### 2D纹理使用示例, skip insert.");
  } else {
    md = md.slice(0, idx) + insert + md.slice(idx);
  }
}

fs.writeFileSync(mdPath, md, "utf8");
console.log("Synced texture demo embed into docs/组件系统/纹理.md");
