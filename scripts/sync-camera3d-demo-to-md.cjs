/**
 * 在修改 docs/examples/camera3d-component-demo.html 后运行：
 *   node scripts/sync-camera3d-demo-to-md.cjs
 * 将「Camera3D 可运行示例」内嵌块同步到 docs/组件系统/相机系统.md
 * （与 docs/quick-start.md「第一个3D场景」同结构：iframe + 示例/代码）。
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "docs/examples/camera3d-component-demo.html");
const mdPath = path.join(root, "docs/组件系统/相机系统.md");

const raw = fs.readFileSync(htmlPath, "utf8");
const esc = raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const header = `#### 可运行示例（Camera3D · perspective / ortho / 屏幕射线）

### 完整示例

下方为仓库内自带的 **可运行 HTML**：

- **在文档页内嵌预览**（若当前文档站点支持内联 HTML，可直接看到运行效果；左侧为示例，右侧为代码，可切换）：

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-camera-demo-tab" id="rings-camera-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-camera-demo-tab" id="rings-camera-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-camera-tab-preview:checked ~ .rings-tab-bar label[for="rings-camera-tab-preview"],
    .rings-quick-demo #rings-camera-tab-code:checked ~ .rings-tab-bar label[for="rings-camera-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-camera-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-camera-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-camera-tab-preview">示例</label>
    <label for="rings-camera-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/camera3d-component-demo.html" title="Rings Camera3D 演示" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
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
  /#### 可运行示例（Camera3D · perspective \/ ortho \/ 屏幕射线）[\s\S]*?\r?\n---\r?\n\r?\n(?=### 相机控制器)/;
if (!re.test(md)) {
  console.error(
    "相机系统.md: 未找到 Camera3D「可运行示例」锚点（#### 可运行示例（Camera3D ·…）/ --- / ### 相机控制器）"
  );
  process.exit(1);
}
md = md.replace(re, insert);
fs.writeFileSync(mdPath, md, "utf8");
console.log("Synced Camera3D demo embed into docs/组件系统/相机系统.md");
