# WASM Splat Sort

WebAssembly-based high-performance sorting module for Gaussian Splatting rendering.

## 概述

这个模块将高斯泼溅（Gaussian Splatting）的排序逻辑从 JavaScript 迁移到 WebAssembly，以提升性能。排序算法使用计数排序（Counting Sort）对 splat 进行深度排序。

## 构建步骤

### 1. 安装 Emscripten SDK

首先需要安装并激活 Emscripten SDK：

**Windows:**
```bash
# 下载并安装 Emscripten SDK
# 访问: https://emscripten.org/docs/getting_started/downloads.html

# 激活环境（在 Emscripten SDK 目录下）
emsdk activate latest
emsdk_env.bat
```

**Linux/Mac:**
```bash
# 下载并安装 Emscripten SDK
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
```

### 2. 编译 WASM 模块

**Windows:**
```bash
cd packages/wasm-splat-sort
build.bat
```

**Linux/Mac:**
```bash
cd packages/wasm-splat-sort
chmod +x build.sh
./build.sh
```

编译完成后会生成：
- `sort.js` - JavaScript 包装器
- `sort.wasm` - WebAssembly 二进制文件

### 3. 使用模块

#### 在 Worker 中使用

```typescript
import { WasmSplatSort } from "@rings/wasm-splat-sort";

// 创建实例（推荐使用工厂方法）
const sorter = await WasmSplatSort.create();

// 设置中心点数据（会自动初始化排序状态）
const centers = new Float32Array([...]); // x, y, z per point
sorter.setCenters(centers);

// 设置相机
sorter.setCamera(px, py, pz, dx, dy, dz);

// 执行排序
const order = new Uint32Array(numVertices);
const visibleCount = sorter.sort(order);

// 清理资源
sorter.cleanup();
```

#### 在 GSplatStreamRenderer 中使用

修改 `GSplatStreamRenderer.ts` 中的 `createSortWorker` 方法：

```typescript
private createSortWorker(): Worker {
  // 使用 WASM Worker
  return this.createWasmSortWorker();
}
```

## API 文档

### WasmSplatSort

`WasmSplatSort` 是一个实例类，每个实例管理自己的 WASM 模块和状态。

#### 创建实例

```typescript
// 方式 1: 使用工厂方法（推荐）
const sorter = await WasmSplatSort.create();

// 方式 2: 使用构造函数 + init()
const sorter = new WasmSplatSort();
await sorter.init();
```

#### `async init(): Promise<void>`
初始化 WASM 模块。如果构造函数中未提供模块，则必须调用此方法。

#### `initSort(maxVertices: number): void`
初始化排序状态，设置最大顶点数。通常不需要手动调用，`setCenters()` 会自动处理。

#### `setCenters(centers: Float32Array): void`
设置中心点数据。数据会被复制到 WASM 内存中，并自动计算边界框。

#### `setCamera(px: number, py: number, pz: number, dx: number, dy: number, dz: number): void`
设置相机位置和方向。

#### `shouldUpdate(): boolean`
检查是否需要更新排序（相机是否改变）。

#### `sort(orderOut: Uint32Array): number`
执行排序，返回可见 splat 的数量（背面剔除后）。

#### `cleanup(): void`
清理 WASM 资源。应在不再使用实例时调用。

#### `static async create(wasmModule?: typeof sortModule): Promise<WasmSplatSort>`
工厂方法，创建并初始化新实例。


## 性能优化

- 使用计数排序（O(N) 时间复杂度）
- 内存预分配，减少分配开销
- 相机变化检测，避免不必要的排序
- 背面剔除优化

## 注意事项

1. **内存管理**: WASM 内存需要手动管理，确保调用 `cleanup()` 释放资源
2. **线程安全**: WASM 模块不是线程安全的，每个 Worker 需要独立的实例
3. **路径配置**: 确保 WASM 文件路径正确，可能需要配置构建工具

## 故障排除

### WASM 文件加载失败
- 检查 `sort.wasm` 文件路径是否正确
- 确保服务器配置支持 `.wasm` MIME 类型

### 内存不足
- 增加 `ALLOW_MEMORY_GROWTH=1` 选项（已在构建脚本中设置）
- 检查是否有内存泄漏（确保调用 `cleanup()`）

### 编译错误
- 确保 Emscripten SDK 已正确安装和激活
- 检查 C++ 编译器是否可用

## 开发

### 修改排序逻辑

编辑 `sort.cpp` 文件，然后重新编译：

```bash
# Windows
build.bat

# Linux/Mac
./build.sh
```

### 调试

使用 Emscripten 的调试选项：

```bash
emcc sort.cpp -O0 -g -s WASM=1 ... -o sort.js
```

## 许可证

MIT License
