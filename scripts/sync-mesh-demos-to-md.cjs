/**
 * 将 docs/examples 下四种网格可运行示例内嵌到 docs/组件系统/网格.md
 *   node scripts/sync-mesh-demos-to-md.cjs
 * 支持占位符 <<EMBED_*>>（首次插入）或按标题正则替换（更新内嵌代码）。
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
  const tab = `rings-${slug}-mesh-demo-tab`;
  const prev = `rings-${slug}-mesh-tab-preview`;
  const code = `rings-${slug}-mesh-tab-code`;
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

const configs = [
  {
    marker: "<<EMBED_MESH_RENDERER>>",
    re: /#### 可运行示例（MeshRenderer \/ LitMaterial）[\s\S]*?---\s*\n\s*\n(?=```typescript)/,
    embed: {
      slug: "mr",
      headingLine: "#### 可运行示例（MeshRenderer / LitMaterial）",
      blurb:
        "**`MeshRenderer.geometry` + `material`**（`LitMaterial`），开关 **`castShadow` / `receiveShadow`**，调节 **roughness**。",
      iframeSrc: "examples/mesh-renderer-demo.html",
      iframeTitle: "Rings MeshRenderer 演示",
      htmlFile: "mesh-renderer-demo.html",
    },
  },
  {
    marker: "<<EMBED_MESH_FILTER>>",
    re: /#### 可运行示例（MeshFilter \+ Engine3D\.res\.addGeometry）[\s\S]*?---\s*\n\s*\n(?=```typescript)/,
    embed: {
      slug: "mf",
      headingLine: "#### 可运行示例（MeshFilter + Engine3D.res.addGeometry）",
      blurb:
        "先用 **`Engine3D.res.addGeometry(key, geo)`** 注册，再用 **`MeshRenderer.geometry = res.getGeometry(key)`**（与 **`MeshFilter.meshURL`** 等价，避免旧版 CDN 上 MeshFilter 未写入几何体导致白屏）。",
      iframeSrc: "examples/mesh-filter-demo.html",
      iframeTitle: "Rings MeshFilter 演示",
      htmlFile: "mesh-filter-demo.html",
    },
  },
  {
    marker: "<<EMBED_SKINNED_MESH_RENDERER>>",
    re: /#### 可运行示例（SkinnedMeshRenderer — GLTF 对照）[\s\S]*?---\s*\n\s*\n(?=```typescript)/,
    embed: {
      slug: "sk1",
      headingLine: "#### 可运行示例（SkinnedMeshRenderer — GLTF 对照）",
      blurb:
        "**`docs/examples/RiggedSimple.glb`**（与 HTML 同目录）：GLTF 蒙皮由 **`SkinnedMeshRenderer2`** 渲染；HUD 统计 **`SkinnedMeshRenderer`（旧）**（通常为 **0**）。",
      iframeSrc: "examples/skinned-mesh-renderer-demo.html",
      iframeTitle: "Rings SkinnedMeshRenderer 说明",
      htmlFile: "skinned-mesh-renderer-demo.html",
    },
  },
  {
    marker: "<<EMBED_SKINNED_MESH_RENDERER2>>",
    re: /#### 可运行示例（SkinnedMeshRenderer2 \/ GLTF）[\s\S]*?---\s*\n\s*\n(?=```typescript)/,
    embed: {
      slug: "sk2",
      headingLine: "#### 可运行示例（SkinnedMeshRenderer2 / GLTF）",
      blurb:
        "**`docs/examples/RiggedSimple.glb`**：解析器挂载 **`SkinnedMeshRenderer2`**，并尝试播放 **`AnimatorComponent`** 首段动画。",
      iframeSrc: "examples/skinned-mesh-renderer2-demo.html",
      iframeTitle: "Rings SkinnedMeshRenderer2 演示",
      htmlFile: "skinned-mesh-renderer2-demo.html",
    },
  },
];

const mdPath = path.join(root, "docs/组件系统/网格.md");
let md = fs.readFileSync(mdPath, "utf8").replace(/\r\n/g, "\n");

for (const { marker, re, embed } of configs) {
  const block = buildEmbed(embed);
  if (md.includes(marker)) {
    md = md.split(marker).join(block);
  } else if (re.test(md)) {
    md = md.replace(re, block);
  } else {
    console.error("网格.md: 未找到占位符或匹配块:", marker);
    process.exit(1);
  }
}

fs.writeFileSync(mdPath, md, "utf8");
console.log("Synced mesh demos into docs/组件系统/网格.md");
