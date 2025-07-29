[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GUIGeometryRebuild

# Class: GUIGeometryRebuild

检查和重建GUI网格(包括几何体和材质)，处理UI元素的批量渲染优化

## Table of contents

### Constructors

- [constructor](GUIGeometryRebuild.md#constructor)

### Methods

- [build](GUIGeometryRebuild.md#build)

## Constructors

### constructor

• **new GUIGeometryRebuild**(): [`GUIGeometryRebuild`](GUIGeometryRebuild.md)

#### Returns

[`GUIGeometryRebuild`](GUIGeometryRebuild.md)

## Methods

### build

▸ **build**(`transforms`, `panel`, `forceUpdate`): `boolean`

重建指定的GUI网格
检查并重建GUI网格，包括几何体和材质

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transforms` | [`UITransform`](UITransform.md)[] | 指定GUI Mesh的UITransform列表 |
| `panel` | [`UIPanel`](UIPanel.md) | 指定要重建几何体的GUI Mesh对象 |
| `forceUpdate` | `boolean` | 是否需要强制重构 |

#### Returns

`boolean`

返回构建结果(单个UIPanel的GUIMaterials支持的纹理数量有限制，不能超过限制)

#### Defined in

components/gui/core/GUIGeometryRebuild.ts:27
