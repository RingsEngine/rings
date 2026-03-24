## 安装

```bash
npm install @rings-webgpu/core --save
npm install @rings-webgpu/ammo --save
npm install @rings-webgpu/physics --save
```

`@rings-webgpu/physics` 依赖 **`@rings-webgpu/ammo`**，并声明 peer **`@rings-webgpu/core`**（需与主工程核心包版本匹配）。

## 使用

```ts
import { Scene3D } from "@rings-webgpu/core";
import { Physics, Rigidbody } from "@rings-webgpu/physics";
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
