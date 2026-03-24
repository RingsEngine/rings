/**
 * 在修改 docs/examples/*camera*demo.html 或 orbit-controller-demo.html 后运行：
 *   node scripts/sync-camera-demos-to-md.cjs
 * 将各相机可运行示例内嵌到 docs/组件系统/相机系统.md。
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const mdPath = path.join(root, "docs/组件系统/相机系统.md");

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildEmbed({ slug, headingLine, blurb, iframeSrc, iframeTitle, htmlFile }) {
  const htmlPath = path.join(root, "docs/examples", htmlFile);
  const raw = fs.readFileSync(htmlPath, "utf8");
  const esc = escapeHtml(raw);
  const tab = `rings-${slug}-cam-demo-tab`;
  const prev = `rings-${slug}-cam-tab-preview`;
  const code = `rings-${slug}-cam-tab-code`;
  return (
    `${headingLine}\n\n` +
    `${blurb}\n\n` +
    `<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">\n` +
    `  <input type="radio" name="${tab}" id="${prev}" checked style="position: absolute; opacity: 0; pointer-events: none;">\n` +
    `  <input type="radio" name="${tab}" id="${code}" style="position: absolute; opacity: 0; pointer-events: none;">\n` +
    `  <style>\n` +
    `    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }\n` +
    `    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }\n` +
    `    .rings-quick-demo #${prev}:checked ~ .rings-tab-bar label[for="${prev}"],\n` +
    `    .rings-quick-demo #${code}:checked ~ .rings-tab-bar label[for="${code}"] { font-weight: 600; color: #0f172a; }\n` +
    `    .rings-quick-demo .rings-demo-preview,\n` +
    `    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }\n` +
    `    .rings-quick-demo #${prev}:checked ~ .rings-demo-preview,\n` +
    `    .rings-quick-demo #${code}:checked ~ .rings-demo-code { display: block; }\n` +
    `  </style>\n` +
    `  <div class="rings-tab-bar">\n` +
    `    <label for="${prev}">示例</label>\n` +
    `    <label for="${code}">代码</label>\n` +
    `  </div>\n` +
    `  <div class="rings-demo-preview" style="background: #fff;">\n` +
    `    <iframe src="${iframeSrc}" title="${iframeTitle}" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>\n` +
    `  </div>\n` +
    `  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">\n` +
    `    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.5; color: #e2e8f0; white-space: pre;"><code>` +
    esc +
    `</code></pre>\n` +
    `  </div>\n` +
    `</div>\n\n` +
    `---\n\n`
  );
}

const fpTpMarkdown = `#### 第一人称相机控制器 (FirstPersonCameraController)

与 **Camera3D** 挂在同一 **Object3D** 上，通过 **\`focus\`** 引用目标物体（如角色根节点）。每帧将相机置于焦点附近，拖拽指针修改旋转，滚轮调节 **\`distance\`**。

**使用示例**

\`\`\`typescript
import { Object3D, Camera3D, FirstPersonCameraController } from '@rings/core';

const camObj = new Object3D();
const camera = camObj.addComponent(Camera3D);
camera.perspective(70, window.innerWidth / window.innerHeight, 0.1, 500);
const fp = camObj.addComponent(FirstPersonCameraController);
fp.focus = playerRoot;
fp.distance = 0.2;
\`\`\`

#### 第三人称相机控制器 (ThirdPersonCameraController)

相机位于 **\`focus\`** 世界位置沿相机朝向前向反方向 **\`distance\`** 处；拖拽环绕目标，滚轮调节距离。

**使用示例**

\`\`\`typescript
import { Object3D, Camera3D, ThirdPersonCameraController } from '@rings/core';

const camObj = new Object3D();
const camera = camObj.addComponent(Camera3D);
camera.perspective(55, window.innerWidth / window.innerHeight, 0.1, 500);
const tp = camObj.addComponent(ThirdPersonCameraController);
tp.focus = targetRoot;
tp.distance = 6;
\`\`\`
`;

const demos = [
  {
    marker: "rings-camera3d-cam-tab-preview",
    re: /#### 可运行示例（Camera3D[^]*?---\r?\n\r?\n(?=### 相机控制器)/,
    insertNeedle:
      "cameraObj.transform.lookAt(new Vector3(0, 0, 0));\n\n// 添加到场景\nscene.addChild(cameraObj);\n```\n\n### 相机控制器",
    block: buildEmbed({
      slug: "camera3d",
      headingLine:
        "#### 可运行示例（Camera3D · perspective / ortho / 屏幕射线）",
      blurb:
        "**Camera3D**：切换透视/正交、调节 fov/near/far；点击画布查看 `screenPointToRay` / `screenPointToWorld`。场景内用 **HoverCameraController** 拖拽观察。",
      iframeSrc: "examples/camera3d-component-demo.html",
      iframeTitle: "Rings Camera3D 演示",
      htmlFile: "camera3d-component-demo.html",
    }),
  },
  {
    marker: "rings-fly-cam-tab-preview",
    re: /#### 可运行示例（FlyCameraController[^]*?---\r?\n\r?\n(?=#### 悬浮相机控制器)/,
    insertNeedle:
      "controller.moveSpeed = 5.0;\n\n// 设置初始位置\ncameraObj.transform.position = new Vector3(0, 5, 10);\nscene.addChild(cameraObj);\n```\n\n#### 悬浮相机控制器 (HoverCameraController)",
    block: buildEmbed({
      slug: "fly",
      headingLine:
        "#### 可运行示例（FlyCameraController）",
      blurb:
        "**WASD** 移动，**Q/E** 升降，**Shift** 加速，**F** 重置；先点击画布再拖拽转向。右侧调 `moveSpeed` / `shiftMoveScale`。",
      iframeSrc: "examples/fly-camera-controller-demo.html",
      iframeTitle: "Rings FlyCamera 演示",
      htmlFile: "fly-camera-controller-demo.html",
    }),
  },
  {
    marker: "rings-hover-cam-tab-preview",
    re: /#### 可运行示例（HoverCameraController[^]*?---\r?\n\r?\n(?=#### 轨道相机控制器)/,
    insertNeedle:
      "controller.maxDistance = 50;\n\n// 设置初始位置\ncameraObj.transform.position = new Vector3(0, 10, 15);\nscene.addChild(cameraObj);\n```\n\n#### 轨道相机控制器 (OrbitController)",
    block: buildEmbed({
      slug: "hover",
      headingLine:
        "#### 可运行示例（HoverCameraController）",
      blurb:
        "**左键**旋转、**右键**平移、**滚轮**缩放；右侧调 `minDistance` / `maxDistance`。",
      iframeSrc: "examples/hover-camera-controller-demo.html",
      iframeTitle: "Rings HoverCamera 演示",
      htmlFile: "hover-camera-controller-demo.html",
    }),
  },
  {
    marker: "rings-orbit-cam-tab-preview",
    re: /#### 可运行示例（OrbitController[^]*?---\r?\n\r?\n(?=#### 第一人称相机控制器)/,
    insertNeedle:
      "controller.autoRotate = true;\n\n// 设置初始位置\ncameraObj.transform.position = new Vector3(0, 10, 20);\nscene.addChild(cameraObj);\n```\n\n#### 第一人称相机控制器 (FirstPersonCameraController)",
    block: buildEmbed({
      slug: "orbit",
      headingLine: "#### 可运行示例（OrbitController）",
      blurb:
        "**左键**旋转、**右键**平移、**滚轮**缩放；可勾选 **autoRotate**。",
      iframeSrc: "examples/orbit-controller-demo.html",
      iframeTitle: "Rings OrbitController 演示",
      htmlFile: "orbit-controller-demo.html",
    }),
  },
  {
    marker: "rings-firstperson-cam-tab-preview",
    re: /#### 可运行示例（FirstPersonCameraController[^]*?---\r?\n\r?\n(?=#### 第三人称相机控制器)/,
    insertNeedle:
      "fp.focus = playerRoot;\nfp.distance = 0.2;\n```\n\n#### 第三人称相机控制器 (ThirdPersonCameraController)",
    block: buildEmbed({
      slug: "firstperson",
      headingLine:
        "#### 可运行示例（FirstPersonCameraController）",
      blurb:
        "相机组件与控制器挂在同一物体上，**`focus`** 为角色根物体；点击画布后拖拽环顾，滚轮调 `distance`。",
      iframeSrc: "examples/first-person-camera-demo.html",
      iframeTitle: "Rings 第一人称相机演示",
      htmlFile: "first-person-camera-demo.html",
    }),
  },
  {
    marker: "rings-thirdperson-cam-tab-preview",
    re: /#### 可运行示例（ThirdPersonCameraController[\s\S]*?\n---\n$/m,
    insertNeedle:
      "tp.focus = targetRoot;\ntp.distance = 6;\n```\n\n#### 可运行示例（ThirdPersonCameraController）",
    block: buildEmbed({
      slug: "thirdperson",
      headingLine:
        "#### 可运行示例（ThirdPersonCameraController）",
      blurb: "相机在目标后方 **distance** 处；拖拽环绕，滚轮缩放距离。",
      iframeSrc: "examples/third-person-camera-demo.html",
      iframeTitle: "Rings 第三人称相机演示",
      htmlFile: "third-person-camera-demo.html",
    }),
  },
];

function normalizeLf(s) {
  return s.replace(/\r\n/g, "\n");
}

let md = normalizeLf(fs.readFileSync(mdPath, "utf8"));

const orbitEndBeforeFp =
  "cameraObj.transform.position = new Vector3(0, 10, 20);\nscene.addChild(cameraObj);\n```\n\n---\n\n#### 第一人称相机控制器 (FirstPersonCameraController)";
const orbitEndBeforeLightLegacy =
  "cameraObj.transform.position = new Vector3(0, 10, 20);\nscene.addChild(cameraObj);\n```\n\n---\n\n## 光照系统";

if (!md.includes("#### 第一人称相机控制器 (FirstPersonCameraController)")) {
  if (md.includes(orbitEndBeforeFp)) {
    md = md.replace(
      orbitEndBeforeFp,
      "cameraObj.transform.position = new Vector3(0, 10, 20);\nscene.addChild(cameraObj);\n```\n\n" +
        fpTpMarkdown +
        "\n---\n\n#### 第一人称相机控制器 (FirstPersonCameraController)"
    );
  } else if (md.includes(orbitEndBeforeLightLegacy)) {
    md = md.replace(
      orbitEndBeforeLightLegacy,
      orbitEndBeforeLightLegacy.replace(
        "```\n\n---\n\n## 光照系统",
        "```\n\n" + fpTpMarkdown + "\n---\n\n## 光照系统"
      )
    );
  } else {
    console.error(
      "相机系统.md: 未找到 Orbit 代码块后插入第一/第三人称小节的锚点"
    );
    process.exit(1);
  }
}

for (const d of demos) {
  if (md.includes(d.marker)) {
    if (!d.re.test(md)) {
      console.warn("marker 存在但正则不匹配，跳过替换:", d.marker);
      continue;
    }
    md = md.replace(d.re, d.block);
    continue;
  }
  if (!md.includes(d.insertNeedle)) {
    console.error("未找到插入锚点:", d.marker);
    process.exit(1);
  }
  const repl =
    typeof d.insertTransform === "function"
      ? d.insertTransform(d.insertNeedle, d.block)
      : d.insertNeedle.replace(/```\n\n/, "```\n\n" + d.block);
  md = md.replace(d.insertNeedle, repl);
}

fs.writeFileSync(mdPath, md, "utf8");
console.log("Synced camera demos into docs/组件系统/相机系统.md");
