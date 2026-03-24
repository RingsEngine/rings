/**
 * 将几何体 / 全局光照 / 阴影 可运行示例内嵌到 docs/组件系统/ 对应 md。
 * （网格见 scripts/sync-mesh-demos-to-md.cjs）
 *   node scripts/sync-geometry-mesh-gi-shadow-demos-to-md.cjs
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildEmbed({ slug, headingLine, blurb, iframeSrc, iframeTitle, htmlFile }) {
  const htmlPath = path.join(root, "docs/examples", htmlFile);
  const raw = fs.readFileSync(htmlPath, "utf8");
  const esc = escapeHtml(raw);
  const tab = `rings-${slug}-sys-demo-tab`;
  const prev = `rings-${slug}-sys-tab-preview`;
  const code = `rings-${slug}-sys-tab-code`;
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

const blocks = {
  geometry: buildEmbed({
    slug: "geometry",
    headingLine:
      "#### 可运行示例（几何体：Box / Sphere / Cylinder / Torus / Plane）",
    blurb:
      "同场景展示 **`BoxGeometry` · `SphereGeometry` · `CylinderGeometry` · `TorusGeometry`** 与作为地面的 **`PlaneGeometry`**；Hover 拖拽观察。",
    iframeSrc: "examples/geometry-types-demo.html",
    iframeTitle: "Rings 几何体演示",
    htmlFile: "geometry-types-demo.html",
  }),
  gi: buildEmbed({
    slug: "gi",
    headingLine:
      "#### 可运行示例（Engine3D.setting.gi）",
    blurb:
      "**`gi.enable` 须在首次 `startRenderView` 前为 `true`** 才创建 DDGI。多数标量需 **`irradianceVolume.setVolumeDataChange()`** 才会重填 GPU uniform；演示在 `applyGi` 内已调用。尺寸类字段仍以管线创建时为准。",
    iframeSrc: "examples/gi-settings-demo.html",
    iframeTitle: "Rings GI 设置演示",
    htmlFile: "gi-settings-demo.html",
  }),
  shadow: buildEmbed({
    slug: "shadow",
    headingLine:
      "#### 可运行示例（Engine3D.setting.shadow）",
    blurb:
      "切换 **`shadow.type`**（HARD / PCF / SOFT），调节 **shadowBias**、**shadowSoft**、**shadowSize**（2 的幂），观察地面与立方体阴影。",
    iframeSrc: "examples/shadow-settings-demo.html",
    iframeTitle: "Rings 阴影设置演示",
    htmlFile: "shadow-settings-demo.html",
  }),
};

const reGeometry =
  /#### 可运行示例（几何体[\s\S]*?---\s*\n\s*\n(?=### SphereGeometry)/;
const reGi = /#### 可运行示例（Engine3D\.setting\.gi[\s\S]*?\n---\n$/m;
const reShadow = /#### 可运行示例（Engine3D\.setting\.shadow[\s\S]*?\n---\n$/m;

function patchFile(relPath, re, block, insertFn) {
  const mdPath = path.join(root, relPath);
  let md = fs.readFileSync(mdPath, "utf8").replace(/\r\n/g, "\n");
  const marker = block.match(/id="(rings-\w+-sys-tab-preview)"/);
  const mid = marker ? marker[1] : "";

  if (mid && md.includes(mid)) {
    if (!re.test(md)) {
      console.warn("marker 存在但正则不匹配:", relPath);
      return;
    }
    md = md.replace(re, block);
    fs.writeFileSync(mdPath, md, "utf8");
    console.log("Updated embed:", relPath);
    return;
  }

  if (insertFn) {
    md = insertFn(md, block);
    fs.writeFileSync(mdPath, md, "utf8");
    console.log("Inserted embed:", relPath);
    return;
  }

  console.error("No insertFn and no marker:", relPath);
  process.exit(1);
}

patchFile(
  "docs/组件系统/几何体系统.md",
  reGeometry,
  blocks.geometry,
  (md, block) => {
    const needle =
      "const customBox = new BoxGeometry(2, 3, 4);\n```\n\n---\n\n### SphereGeometry - 球体几何体";
    if (!md.includes(needle)) {
      console.error("几何体系统.md: 未找到 BoxGeometry 示例锚点");
      process.exit(1);
    }
    return md.replace(
      needle,
      "const customBox = new BoxGeometry(2, 3, 4);\n```\n\n" + block + "### SphereGeometry - 球体几何体"
    );
  }
);

patchFile(
  "docs/组件系统/全局光照.md",
  reGi,
  blocks.gi,
  (md, block) => {
    const needle = "Engine3D.setting.gi.autoRenderProbe = true;\n```";
    if (md.includes("rings-gi-sys-tab-preview")) {
      if (!reGi.test(md)) {
        console.warn("全局光照.md: marker 但正则不匹配");
        return md;
      }
      return md.replace(reGi, block.trimEnd() + "\n");
    }
    if (!md.trimEnd().endsWith(needle)) {
      console.error("全局光照.md: 未找到代码块结尾");
      process.exit(1);
    }
    return md.replace(needle, needle + "\n\n" + block.trimEnd());
  }
);

patchFile(
  "docs/组件系统/阴影设置.md",
  reShadow,
  blocks.shadow,
  (md, block) => {
    const needle = "Engine3D.setting.shadow.csmMargin = 2.0;\n```";
    if (md.includes("rings-shadow-sys-tab-preview")) {
      if (!reShadow.test(md)) {
        console.warn("阴影设置.md: marker 但正则不匹配");
        return md;
      }
      return md.replace(reShadow, block.trimEnd() + "\n");
    }
    if (!md.trimEnd().endsWith(needle)) {
      console.error("阴影设置.md: 未找到代码块结尾");
      process.exit(1);
    }
    return md.replace(needle, needle + "\n\n" + block.trimEnd());
  }
);

console.log("Done.");
