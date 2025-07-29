# 基础组件 API

## 相机组件 (Camera3D)

### 基本用法

```javascript
const camera = new Object3D();
camera.addComponent(Camera3D, {
  type: "perspective", // 或'orthographic'
  fov: 60, // 视野角度(仅透视相机)
  near: 0.1, // 近裁剪面
  far: 1000, // 远裁剪面
  aspect: 1.0, // 宽高比
});
scene.addChild(camera);
```

### 主要 API

- `lookAt(target: Vector3)` - 设置相机看向的目标点
- `setViewOffset(fullWidth, fullHeight, x, y, width, height)` - 设置视口偏移
- `updateProjectionMatrix()` - 手动更新投影矩阵

## 灯光组件

### 1. 平行光 (DirectionalLight)

```javascript
const light = new Object3D();
light.addComponent(DirectionalLight, {
  color: 0xffffff,
  intensity: 1.0,
  castShadow: true,
});
```

### 2. 点光源 (PointLight)

```javascript
light.addComponent(PointLight, {
  color: 0xff0000,
  intensity: 1.0,
  distance: 100,
  decay: 2.0,
});
```

### 3. 聚光灯 (SpotLight)

```javascript
light.addComponent(SpotLight, {
  angle: Math.PI / 4,
  penumbra: 0.1,
  distance: 100,
});
```

## 阴影系统

### 阴影配置

```javascript
// 在灯光上配置
light.getComponent(DirectionalLight).shadow = {
  mapSize: [2048, 2048],
  bias: 0.001,
  normalBias: 0.02,
};

// 在接收阴影的物体上
mesh.castShadow = true;
mesh.receiveShadow = true;
```

## 材质系统

### 标准材质 (StandardMaterial)

```javascript
const material = new StandardMaterial({
  color: 0x00ff00,
  roughness: 0.5,
  metalness: 0.5,
  transparent: true,
  opacity: 0.8,
});
```

### 主要属性

- `.map` - 基础颜色纹理
- `.normalMap` - 法线贴图
- `.roughnessMap` - 粗糙度贴图
- `.envMap` - 环境贴图
- `.side` - 渲染面(0=正面,1=背面,2=双面)

## 纹理系统

### 纹理加载

```javascript
const texture = new TextureLoader().load("path/to/texture.jpg", {
  wrapS: RepeatWrapping,
  wrapT: RepeatWrapping,
  anisotropy: 16,
});
```

### 纹理转换

```javascript
texture.center.set(0.5, 0.5);
texture.rotation = Math.PI / 4;
texture.repeat.set(2, 2);
```

## 几何体与网格

### 几何体创建

```javascript
const geometry = new BoxGeometry(1, 1, 1, 32, 32, 32);
const sphereGeometry = new SphereGeometry(1, 32, 32);
```

### 网格组件

```javascript
const mesh = new Object3D();
mesh.addComponent(MeshRenderer, {
  geometry: geometry,
  material: material,
});
mesh.castShadow = true;
scene.addChild(mesh);
```

### 几何体操作

```javascript
geometry.computeVertexNormals();
geometry.center(); // 几何体居中
geometry.rotateX(Math.PI / 2);
```

[返回组件系统 →](/components)
