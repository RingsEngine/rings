# 自定义组件开发指南

## 创建自定义组件

1. 继承 BaseComponent 基类
2. 实现必要生命周期方法
3. 注册组件类型

```javascript
class MyComponent extends BaseComponent {
  properties = {
    speed: { type: Number, default: 1.0 },
  };

  onInit() {
    // 初始化逻辑
  }

  onUpdate(delta) {
    // 每帧更新逻辑
  }
}
```

## 组件注册

```javascript
// 全局注册
ComponentRegistry.register("my-component", MyComponent);

// 使用组件
entity.addComponent("my-component", {
  speed: 2.5,
});
```

## 最佳实践

1. 保持组件单一职责
2. 使用明确的属性定义
3. 避免在组件中直接操作其他实体
4. 提供清晰的文档注释

```javascript
/**
 * 移动组件
 * @property {number} speed - 移动速度(单位/秒)
 */
class MovementComponent extends BaseComponent {
  // ...
}
```

[返回组件系统 →](/components)
