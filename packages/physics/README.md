## 安装

```bash
npm install @rings-webgpu/core --save
npm install @rings-webgpu/ammo --save
npm install @rings-webgpu/physics --save
```

`@rings-webgpu/physics` 依赖 **`@rings-webgpu/ammo`**，并声明 peer **`@rings-webgpu/core`**（需与主工程核心包版本匹配）。

在本仓库内：根目录 **`package.json`** 使用 **`overrides`** 将任意对 `@rings-webgpu/ammo` 的依赖固定为 **`file:./packages/ammo`**，避免未发布到 npm 时误解析成 `github:packages/ammo` 并走 SSH。请在**仓库根目录**执行 `npm install`（建议 npm 8.3+，以支持 `overrides`）。使用 **pnpm** 时已提供 **`pnpm-workspace.yaml`**，会在安装时优先使用工作区内的 `packages/ammo`。

## 使用

```ts
import { Scene3D } from "@rings-webgpu/core";
import { Physics, Rigidbody } from "@rings-webgpu/physics";
```

浏览器 ESM（与 `docs/examples` 中演示一致）：`physics.es.js` 构建为 **external** peer，页面需先提供 **`importmap`**，将裸说明符解析到与主脚本相同的 unpkg URL（保证只加载一份 `rings.es.js`）：

```html
<script type="importmap">
{
  "imports": {
    "@rings-webgpu/core": "https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js",
    "@rings-webgpu/ammo": "https://unpkg.com/@rings-webgpu/ammo@0.2.1/ammo.js"
  }
}
</script>
<script type="module">
import { Engine3D } from "https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js";
import { Physics, Rigidbody } from "https://unpkg.com/@rings-webgpu/physics@0.0.2/dist/physics.es.js";
</script>
```

## 从本仓库单独发布到 npm

在仓库根目录：

```bash
npm run build:physics
npm run publish:physics
```

首次或 bump 了 ammo 时，可先发布 ammo：

```bash
npm run publish:ammo
```

`packages/physics` 在发布前会通过 **`prepublishOnly`** 自动执行 `npm run build`。
