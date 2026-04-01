const fs = require("fs");
const path = require("path");

const readmePath = path.join(__dirname, "../docs/动画组件系统/README.md");
const fragPath = path.join(__dirname, "../docs/动画组件系统/_anim-demos-fragment.md");

const readme = fs.readFileSync(readmePath, "utf8");
const frag = fs.readFileSync(fragPath, "utf8").trim();

const start = readme.indexOf("## 可运行示例");
const rest = readme.indexOf("\n## 概述", start);
if (start < 0 || rest < 0) {
  console.error("markers not found", { start, rest });
  process.exit(1);
}

const merged =
  readme.slice(0, start) +
  "## 可运行示例\n\n" +
  frag +
  "\n\n---\n\n" +
  readme.slice(rest + 1);

fs.writeFileSync(readmePath, merged, "utf8");
console.log("Merged into README.md");
