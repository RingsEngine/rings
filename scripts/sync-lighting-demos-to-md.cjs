/**
 * 在修改 docs/examples/*light*.html 或 ambient-environment-demo.html 后运行：
 *   node scripts/sync-lighting-demos-to-md.cjs
 * 将各光源可运行示例内嵌到 docs/组件系统/光照系统.md。
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const mdPath = path.join(root, "docs/组件系统/光照系统.md");

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildEmbed({ slug, headingLine, blurb, iframeSrc, iframeTitle, htmlFile }) {
  const htmlPath = path.join(root, "docs/examples", htmlFile);
  const raw = fs.readFileSync(htmlPath, "utf8");
  const esc = escapeHtml(raw);
  const tab = `rings-${slug}-light-demo-tab`;
  const prev = `rings-${slug}-light-tab-preview`;
  const code = `rings-${slug}-light-tab-code`;
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

const demos = [
  {
    marker: "rings-direct-light-tab-preview",
    re: /#### 可运行示例（DirectLight[^]*?---\r?\n\r?\n(?=#### 点光源)/,
    insertNeedle:
      "// 添加到场景\nscene.addChild(lightObj);\n```\n\n#### 点光源 (PointLight)",
    block: buildEmbed({
      slug: "direct",
      headingLine:
        "#### 可运行示例（DirectLight）",
      blurb:
        "仅 **DirectLight**：调节 **intensity**、**indirect**，投射阴影；**Hover** 拖拽观察。光源颜色请设置 **`lightColor`**。",
      iframeSrc: "examples/direct-light-demo.html",
      iframeTitle: "Rings 平行光演示",
      htmlFile: "direct-light-demo.html",
    }),
  },
  {
    marker: "rings-point-light-tab-preview",
    re: /#### 可运行示例（PointLight[^]*?---\r?\n\r?\n(?=#### 聚光灯)/,
    insertNeedle:
      "// 添加到场景\nscene.addChild(lightObj);\n```\n\n#### 聚光灯 (SpotLight)",
    block: buildEmbed({
      slug: "point",
      headingLine:
        "#### 可运行示例（PointLight）",
      blurb:
        "单侧 **PointLight**：**range**、**at**、**quadratic** 控制衰减；右侧调强度与范围。",
      iframeSrc: "examples/point-light-demo.html",
      iframeTitle: "Rings 点光源演示",
      htmlFile: "point-light-demo.html",
    }),
  },
  {
    marker: "rings-spot-light-tab-preview",
    re: /#### 可运行示例（SpotLight[^]*?---\r?\n\r?\n(?=### 环境光照)/,
    insertNeedle:
      "// 添加到场景\nscene.addChild(lightObj);\n```\n\n### 环境光照",
    block: buildEmbed({
      slug: "spot",
      headingLine:
        "#### 可运行示例（SpotLight）",
      blurb:
        "**outerAngle** / **innerAngle**、**range**、**intensity**；`transform.lookAt` 对准目标。可开 **castShadow**。",
      iframeSrc: "examples/spot-light-demo.html",
      iframeTitle: "Rings 聚光灯演示",
      htmlFile: "spot-light-demo.html",
    }),
  },
  {
    marker: "rings-ambient-light-tab-preview",
    re: /#### 可运行示例（环境基础照明[\s\S]*?\n---\n$/m,
    insertNeedle:
      "scene.addChild(fillB);\n```\n\n#### 可运行示例（环境基础照明）",
    block: buildEmbed({
      slug: "ambient",
      headingLine:
        "#### 可运行示例（环境基础照明）",
      blurb:
        "**AtmosphericComponent** + 两盏大范围弱 **PointLight** 模拟均匀搭光（当前包未导出 **AmbientLight** 时的常见做法）。",
      iframeSrc: "examples/ambient-environment-demo.html",
      iframeTitle: "Rings 环境照明演示",
      htmlFile: "ambient-environment-demo.html",
    }),
  },
];

function normalizeLf(s) {
  return s.replace(/\r\n/g, "\n");
}

let md = normalizeLf(fs.readFileSync(mdPath, "utf8"));

for (const d of demos) {
  if (md.includes(d.marker)) {
    if (!d.re.test(md)) {
      console.warn("marker 存在但正则不匹配，跳过:", d.marker);
      continue;
    }
    md = md.replace(d.re, d.block);
    continue;
  }
  if (!md.includes(d.insertNeedle)) {
    console.error("未找到插入锚点:", d.marker, d.insertNeedle.slice(0, 60));
    process.exit(1);
  }
  md = md.replace(d.insertNeedle, d.insertNeedle.replace(/```\n\n/, "```\n\n" + d.block));
}

fs.writeFileSync(mdPath, md, "utf8");
console.log("Synced lighting demos into docs/组件系统/光照系统.md");
