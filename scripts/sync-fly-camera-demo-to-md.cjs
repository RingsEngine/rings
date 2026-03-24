/**
 * 在修改 docs/examples/fly-camera-controller-demo.html 后运行：
 *   node scripts/sync-fly-camera-demo-to-md.cjs
 * 将「FlyCameraController 可运行示例」内嵌块同步到 docs/组件系统/相机系统.md。
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "docs/examples/fly-camera-controller-demo.html");
const mdPath = path.join(root, "docs/组件系统/相机系统.md");

const raw = fs.readFileSync(htmlPath, "utf8");
const esc = raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const header = `#### 可运行示例（FlyCameraController）

### 完整示例

下方为 **FlyCameraController** 可运行 HTML：WASD 平移、Q/E 升降、鼠标拖拽转向（需先点击画布）、Shift 加速、F 重置朝向；右侧滑块调节 \`moveSpeed\` / \`shiftMoveScale\`。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-fly-demo-tab" id="rings-fly-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-fly-demo-tab" id="rings-fly-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-fly-tab-preview:checked ~ .rings-tab-bar label[for="rings-fly-tab-preview"],
    .rings-quick-demo #rings-fly-tab-code:checked ~ .rings-tab-bar label[for="rings-fly-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-fly-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-fly-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-fly-tab-preview">示例</label>
    <label for="rings-fly-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/fly-camera-controller-demo.html" title="Rings FlyCameraController 演示" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
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
  /#### 可运行示例（FlyCameraController）[\s\S]*?\r?\n---\r?\n\r?\n(?=#### HoverCameraController)/;

if (re.test(md)) {
  md = md.replace(re, insert);
} else {
  const hoverAnchor = "#### HoverCameraController（悬浮 / 轨道式）";
  const idx = md.indexOf(hoverAnchor);
  if (idx === -1) {
    console.error("相机系统.md: 未找到 HoverCameraController 锚点");
    process.exit(1);
  }
  md = md.slice(0, idx) + insert + md.slice(idx);
}

fs.writeFileSync(mdPath, md, "utf8");
console.log("Synced FlyCameraController demo embed into docs/组件系统/相机系统.md");
