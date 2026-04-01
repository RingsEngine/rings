# 物理拖拽（PhysicsDragger）

### 物理调试
```javascript
// 启用物理调试绘制
Physics.debugDrawer.enable = true;

// 使用PhysicsDragger进行交互
const dragger = new PhysicsDragger(view);

// 调试绘制模式设置
Physics.debugDrawer.debugMode = Physics.debugDrawer.debugModeList.DrawWireframe;
Physics.debugDrawer.updateFreq = 1; // 每帧更新
Physics.debugDrawer.maxLineCount = 25000; // 最大线数限制
```

### 可运行示例（PhysicsDragger）

`Physics.init({ useDrag: true })` 后由内置拖拽器配合输入与射线拾取刚体（运行条件同上）。

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-phy-drag-tab" id="rings-phy-drag-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-phy-drag-tab" id="rings-phy-drag-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-phy-drag-tab-preview:checked ~ .rings-tab-bar label[for="rings-phy-drag-tab-preview"],
    .rings-quick-demo #rings-phy-drag-tab-code:checked ~ .rings-tab-bar label[for="rings-phy-drag-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-phy-drag-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-phy-drag-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-phy-drag-tab-preview">示例</label>
    <label for="rings-phy-drag-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/physics-drag-demo.html" title="Rings 物理：拖拽" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.55; color: #e2e8f0; white-space: pre-wrap;"><code>完整 HTML：examples/physics-drag-demo.html

要点：await Physics.init({ useDrag: true })</code></pre>
  </div>
</div>
