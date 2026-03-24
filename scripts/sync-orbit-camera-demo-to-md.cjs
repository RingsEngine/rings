/**
 * 在修改 docs/examples/orbit-controller-demo.html 后运行：
 *   node scripts/sync-orbit-camera-demo-to-md.cjs
 * 将「OrbitController 可运行示例」内嵌块同步到 docs/组件系统/相机系统.md。
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "docs/examples/orbit-controller-demo.html");
const mdPath = path.join(root, "docs/组件系统/相机系统.md");

const raw = fs.readFileSync(htmlPath, "utf8");
const esc = raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const header = `#### 可运行示例（OrbitController）

### 完整示例

下方为 **OrbitController** 可运行 HTML：左键旋转、右键平移、滚轮缩放；右侧调节 \`minDistance\` / \`maxDistance\`（\`minDistance\` 滑块值÷10）、\`autoRotate\`、\`autoRotateSpeed\`。HUD 显示 \`spherical.radius\` 与 \`target\`。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-orbit-demo-tab" id="rings-orbit-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-orbit-demo-tab" id="rings-orbit-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-orbit-tab-preview:checked ~ .rings-tab-bar label[for="rings-orbit-tab-preview"],
    .rings-quick-demo #rings-orbit-tab-code:checked ~ .rings-tab-bar label[for="rings-orbit-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-orbit-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-orbit-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-orbit-tab-preview">示例</label>
    <label for="rings-orbit-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/orbit-controller-demo.html" title="Rings OrbitController 演示" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
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
  /#### 可运行示例（OrbitController）[\s\S]*?\r?\n---\r?\n\r?\n(?=#### 第一人称相机控制器)/;

if (re.test(md)) {
  md = md.replace(re, insert);
} else {
  const orbitStart = md.indexOf("#### OrbitController（轨道）");
  if (orbitStart === -1) {
    console.error("相机系统.md: 未找到 #### OrbitController（轨道）");
    process.exit(1);
  }
  let needle =
    "```\r\n\r\n---\r\n\r\n#### 第一人称相机控制器 (FirstPersonCameraController)";
  let idx = md.indexOf(needle, orbitStart);
  if (idx === -1) {
    needle = "```\n\n---\n\n#### 第一人称相机控制器 (FirstPersonCameraController)";
    idx = md.indexOf(needle, orbitStart);
  }
  if (idx === -1) {
    console.error(
      "相机系统.md: 未找到 Orbit 代码块后的 ``` --- #### 第一人称相机控制器 锚点"
    );
    process.exit(1);
  }
  const rest = md.slice(idx + needle.length);
  md =
    md.slice(0, idx) +
    "```\r\n\r\n" +
    insert +
    "#### 第一人称相机控制器 (FirstPersonCameraController)" +
    rest;
}

fs.writeFileSync(mdPath, md, "utf8");
console.log("Synced OrbitController demo embed into docs/组件系统/相机系统.md");
