文档站需以 **HTTP(S)** 打开；`iframe` 与示例页依赖 **unpkg**、**WebGPU** 与网络。**Animator** 示例从 jsDelivr 加载 **`camcopter_s_100.glb`**、**`car.glb`**（RingsEngine/rings-resource）；**骨骼** 示例从 CDN 拉取 glTF。每个块顶栏 **示例** / **代码** 为 **Tab 切换**。运行说明见 [`animation-demos-README.md`](../examples/animation-demos-README.md)。更新 `docs/examples/animation-*.html` 后执行 `node scripts/build-anim-demos-fragment.cjs` 与 `node scripts/merge-anim-readme.cjs`。

### AnimatorComponent（glTF + RiggedSimple.glb）

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-anim-animator-tab" id="rings-anim-animator-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-anim-animator-tab" id="rings-anim-animator-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-anim-animator-tab-preview:checked ~ .rings-tab-bar label[for="rings-anim-animator-tab-preview"],
    .rings-quick-demo #rings-anim-animator-tab-code:checked ~ .rings-tab-bar label[for="rings-anim-animator-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; min-height: 420px; }
    .rings-quick-demo #rings-anim-animator-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-anim-animator-tab-code:checked ~ .rings-demo-code { display: block; }
    .rings-quick-demo #rings-anim-animator-tab-code:checked ~ .rings-demo-code { height: 480px; overflow: auto; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-anim-animator-tab-preview">示例</label>
    <label for="rings-anim-animator-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #0f172a;">
    <iframe src="examples/animation-animator-demo.html" title="Rings 动画：AnimatorComponent（glTF + RiggedSimple.glb）" style="width: 100%; min-height: 420px; border: none; display: block;"></iframe>
  </div>
  <div class="rings-demo-code" style="background: #1e293b;">
    <pre style="margin: 0; padding: 14px; font-size: 11px; line-height: 1.5; color: #e2e8f0; white-space: pre-wrap; word-break: break-all;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;title&gt;Rings — 动画：AnimatorComponent&lt;/title&gt;
  &lt;style&gt;
    html, body { margin: 0; height: 100%; width: 100%; overflow: hidden; }
    body { position: relative; font-family: system-ui, "Segoe UI", sans-serif; }
    #canvas { display: block; width: 100%; height: 100%; }
    .hud {
      position: absolute; left: 8px; top: 8px; right: 220px; pointer-events: none;
      font-size: 11px; line-height: 1.45; color: #e6edf3; text-shadow: 0 1px 3px #000;
      font-family: ui-monospace, monospace;
    }
    .controls {
      position: absolute; top: 0; right: 0; bottom: 0; width: 200px; padding: 10px;
      display: flex; flex-direction: column; gap: 8px;
      background: rgba(15, 20, 25, 0.92); color: #e6edf3;
      font-size: 0.72rem; border-left: 1px solid #2d3a4d;
    }
    .controls button {
      pointer-events: auto; cursor: pointer; padding: 6px 8px;
      background: #2d3f5c; color: #e6edf3; border: 1px solid #4a6a8c; border-radius: 4px;
    }
    .controls p { margin: 0; color: #8b9cb3; line-height: 1.45; font-size: 0.7rem; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;canvas id="canvas" style="width: 100%; height: 100%;"&gt;&lt;/canvas&gt;
  &lt;div class="hud" id="hud"&gt;&lt;/div&gt;
  &lt;aside class="controls"&gt;
    &lt;p&gt;&lt;strong&gt;AnimatorComponent&lt;/strong&gt;：&lt;code&gt;camcopter_s_100.glb&lt;/code&gt; 动画剪辑名为 &lt;code&gt;Take 001&lt;/code&gt;。&lt;/p&gt;
    &lt;button type="button" id="btnA"&gt;播放 Take 001&lt;/button&gt;
    &lt;button type="button" id="btnB"&gt;CrossFade → 下一剪辑&lt;/button&gt;
  &lt;/aside&gt;
  &lt;script type="module"&gt;
    import {
      Engine3D, Scene3D, Object3D, Camera3D, View3D, Color,
      LitMaterial, PlaneGeometry, MeshRenderer,
      SkinnedMeshRenderer2, AnimatorComponent,
      AtmosphericComponent, DirectLight, HoverCameraController,
    } from 'https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js';

    const GLB =
      'https://cdn.jsdelivr.net/gh/RingsEngine/rings-resource@resources-0.0.1/glb/camcopter_s_100.glb';
    /** 本 glb 内骨骼动画剪辑名（与 DCC / glTF 导出一致） */
    const CLIP_TAKE_001 = 'Take 001';

    async function main() {
      const canvas = document.getElementById('canvas');
      const hud = document.getElementById('hud');
      if (!canvas) return;
      try {
        await Engine3D.init({ canvasConfig: { canvas } });
      } catch (e) {
        document.body.innerHTML =
          '&lt;p style="padding:1rem;font-family:sans-serif"&gt;WebGPU 初始化失败，请使用 Chrome/Edge 并在 localhost 或 HTTPS 下打开。&lt;/p&gt;';
        console.error(e);
        return;
      }

      const scene = new Scene3D();
      scene.addComponent(AtmosphericComponent);

      const camObj = new Object3D();
      const camera = camObj.addComponent(Camera3D);
      camera.perspective(50, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.05, 500);
      camObj.addComponent(HoverCameraController).setCamera(-15.2, -4.5, 150.85);
      scene.addChild(camObj);

      const sun = new Object3D();
      const dl = sun.addComponent(DirectLight);
      dl.lightColor = new Color(1, 0.98, 0.95, 1);
      dl.intensity = 2.35;
      dl.castShadow = true;
      sun.transform.rotationX = -55;
      sun.transform.rotationY = 35;
      scene.addChild(sun);

      const ground = new Object3D();
      const gr = ground.addComponent(MeshRenderer);
      gr.geometry = new PlaneGeometry(24, 24);
      gr.material = new LitMaterial();
      gr.material.baseColor = new Color(0.18, 0.2, 0.24, 1);
      gr.receiveShadow = true;
      ground.transform.rotationX = -90;
      ground.y = -0.01;
      scene.addChild(ground);

      let animator = null;
      let clipNames = [];

      try {
        const root = await Engine3D.res.loadGltf(GLB);
        scene.addChild(root);
        let animator = root.getComponentsInChild(AnimatorComponent);
        root.traverse((child) =&gt; {
          const sm = child.getComponent(SkinnedMeshRenderer2);
          if (sm) {
            sm.castShadow = true;
            sm.receiveShadow = true;
          }
          const ac = child.getComponent(AnimatorComponent);
          if (ac &amp;&amp; ac.clips &amp;&amp; ac.clips.length &amp;&amp; !animator) {
            animator = ac;
            clipNames = ac.clips.map((c) =&gt; c.clipName);
            const startName = clipNames.includes(CLIP_TAKE_001)
              ? CLIP_TAKE_001
              : clipNames[0];
            ac.playAnim(startName, 0, 1);
          }
        });
        const btnB = document.getElementById('btnB');
        if (btnB &amp;&amp; clipNames.length &lt; 2) {
          btnB.textContent = '从头重播';
        }
      } catch (err) {
        console.error(err);
        hud.textContent = 'GLB 加载失败（网络/CORS）。请联网并在 localhost 或 HTTPS 下打开。';
      }

      document.getElementById('btnA')?.addEventListener('click', () =&gt; {
        if (!animator) return;
        const name = clipNames.includes(CLIP_TAKE_001) ? CLIP_TAKE_001 : clipNames[0];
        if (name) animator.playAnim(name, 0, 1);
      });
      document.getElementById('btnB')?.addEventListener('click', () =&gt; {
        if (!animator) return;
        if (clipNames.length &gt;= 2) {
          animator.crossFade(clipNames[1], 0.35);
          return;
        }
        const name = clipNames.includes(CLIP_TAKE_001) ? CLIP_TAKE_001 : clipNames[0];
        if (name) animator.playAnim(name, 0, 1);
      });

      const view = new View3D();
      view.scene = scene;
      view.camera = camera;
      Engine3D.startRenderView(view);

      window.addEventListener('resize', () =&gt; {
        camera.perspective(50, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.05, 500);
      });

      function tick() {
        const names = clipNames.join(', ');
        hud.textContent = `AnimatorComponent · clips=[${names}] · ${GLB.split('/').pop()}`;
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    main();
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
  </div>
</div>

### AnimatorComponent（car.glb · 五段剪辑）

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-anim-animator-car-tab" id="rings-anim-animator-car-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-anim-animator-car-tab" id="rings-anim-animator-car-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-anim-animator-car-tab-preview:checked ~ .rings-tab-bar label[for="rings-anim-animator-car-tab-preview"],
    .rings-quick-demo #rings-anim-animator-car-tab-code:checked ~ .rings-tab-bar label[for="rings-anim-animator-car-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; min-height: 420px; }
    .rings-quick-demo #rings-anim-animator-car-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-anim-animator-car-tab-code:checked ~ .rings-demo-code { display: block; }
    .rings-quick-demo #rings-anim-animator-car-tab-code:checked ~ .rings-demo-code { height: 480px; overflow: auto; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-anim-animator-car-tab-preview">示例</label>
    <label for="rings-anim-animator-car-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #0f172a;">
    <iframe src="examples/animation-animator-car-demo.html" title="Rings 动画：AnimatorComponent（car.glb · 五段剪辑）" style="width: 100%; min-height: 420px; border: none; display: block;"></iframe>
  </div>
  <div class="rings-demo-code" style="background: #1e293b;">
    <pre style="margin: 0; padding: 14px; font-size: 11px; line-height: 1.5; color: #e2e8f0; white-space: pre-wrap; word-break: break-all;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;title&gt;Rings — 动画：AnimatorComponent（car.glb · 多剪辑）&lt;/title&gt;
  &lt;style&gt;
    html, body { margin: 0; height: 100%; width: 100%; overflow: hidden; }
    body { position: relative; font-family: system-ui, "Segoe UI", sans-serif; }
    #canvas { display: block; width: 100%; height: 100%; }
    .hud {
      position: absolute; left: 8px; top: 8px; right: 300px; pointer-events: none;
      font-size: 11px; line-height: 1.45; color: #e6edf3; text-shadow: 0 1px 3px #000;
      font-family: ui-monospace, monospace;
    }
    .controls {
      position: absolute; top: 0; right: 0; bottom: 0; width: 280px; padding: 10px;
      overflow: auto; background: rgba(15, 20, 25, 0.92); color: #e6edf3;
      font-size: 0.72rem; border-left: 1px solid #2d3a4d;
    }
    .controls h3 { margin: 0 0 8px; font-size: 0.75rem; color: #8b9cb3; font-weight: 600; }
    .controls p { margin: 0; color: #8b9cb3; line-height: 1.45; }
    .controls button {
      pointer-events: auto; cursor: pointer; margin-top: 10px; padding: 8px 10px; width: 100%;
      background: #2d3f5c; color: #e6edf3; border: 1px solid #4a6a8c; border-radius: 4px;
      font-size: 0.72rem;
    }
    .controls button:hover { background: #354a66; }
    .controls button:disabled { opacity: 0.45; cursor: not-allowed; }
    .clip-buttons { margin-top: 6px; }
    .clip-buttons button { margin-top: 8px; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;canvas id="canvas" style="width: 100%; height: 100%;"&gt;&lt;/canvas&gt;
  &lt;div class="hud" id="hud"&gt;&lt;/div&gt;
  &lt;aside class="controls"&gt;
    &lt;h3&gt;AnimatorComponent · car.glb&lt;/h3&gt;
    &lt;p&gt;
      资源：&lt;code&gt;rings-resource@resources-0.0.4/glb/car.glb&lt;/code&gt;。加载后由 glTF 解析挂接
      &lt;code&gt;AnimatorComponent&lt;/code&gt;；本示例&lt;strong&gt;仅列出第 1、第 4 条&lt;/strong&gt;剪辑（按 glTF 解析顺序），
      对每个名称调用 &lt;code&gt;playAnim(name, 0, 1)&lt;/code&gt;。
    &lt;/p&gt;
    &lt;p style="margin-top:8px"&gt;
      流程：&lt;code&gt;startRenderView&lt;/code&gt; → &lt;code&gt;loadGltf&lt;/code&gt; → &lt;code&gt;BoundUtil.genMeshBounds&lt;/code&gt; 对焦。
    &lt;/p&gt;
    &lt;div id="clipButtons" class="clip-buttons" aria-live="polite"&gt;&lt;/div&gt;
  &lt;/aside&gt;
  &lt;script type="module"&gt;
    import {
      AnimatorComponent,
      BoundUtil,
      Color,
      Scene3D,
      Object3D,
      Engine3D,
      Camera3D,
      View3D,
      MeshRenderer,
      AtmosphericComponent,
      DirectLight,
      HoverCameraController,
      LitMaterial,
      PlaneGeometry,
      SkinnedMeshRenderer2,
    } from '../../src/index.ts';

    const GLB_URL =
      'https://cdn.jsdelivr.net/gh/RingsEngine/rings-resource@resources-0.0.4/glb/car.glb';

    /** 若车体在世界坐标里过小/过大，可改此系数再对焦 */
    const MODEL_ROOT_SCALE = 0.02;
    /** 绕世界 Y 轴旋转（度），校正 glTF 朝向前可用 */
    const MODEL_ROOT_ROT_Y_DEG = 180;

    /** 只暴露/播放的剪辑下标（0 起）：第 1、第 4 条 */
    const PLAY_CLIP_INDICES = [0, 3];

    function pickClipsByIndex(allNames) {
      const out = [];
      for (const i of PLAY_CLIP_INDICES) {
        if (i &gt;= 0 &amp;&amp; i &lt; allNames.length) out.push(allNames[i]);
      }
      return out;
    }

    function frameSkinnedModel(hover, root) {
      const bound = BoundUtil.genMeshBounds(root);
      const sx = bound.size.x;
      const sy = bound.size.y;
      const sz = bound.size.z;
      if (sx &lt; 1e-8 &amp;&amp; sy &lt; 1e-8 &amp;&amp; sz &lt; 1e-8) return;

      hover.focusByBounds(root);
      const ex = bound.extents.x;
      const ey = bound.extents.y;
      const ez = bound.extents.z;
      const radius = Math.sqrt(ex * ex + ey * ey + ez * ez);
      const dist = Math.max(radius * 2.75, 4);
      hover.distance = dist;
      hover.maxDistance = Math.max(dist * 6, 800);
    }

    async function main() {
      const canvas = document.getElementById('canvas');
      const hud = document.getElementById('hud');
      const clipButtons = document.getElementById('clipButtons');
      if (!canvas || !clipButtons) return;

      try {
        await Engine3D.init({ canvasConfig: { canvas } });
      } catch (e) {
        document.body.innerHTML =
          '&lt;p style="padding:1rem;font-family:sans-serif"&gt;WebGPU 初始化失败，请使用 Chrome/Edge 并在 localhost 或 HTTPS 下打开。&lt;/p&gt;';
        console.error(e);
        return;
      }

      const scene = new Scene3D();
      const atm = scene.addComponent(AtmosphericComponent);
      atm.sunBrightness = 1.65;
      atm.sunRadiance = 22;

      const camObj = new Object3D();
      const camera = camObj.addComponent(Camera3D);
      camera.perspective(50, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.05, 5000);
      const hover = camObj.addComponent(HoverCameraController);
      hover.setCamera(22, -12, 80);
      scene.addChild(camObj);

      const sun = new Object3D();
      const dl = sun.addComponent(DirectLight);
      dl.lightColor = new Color(1, 0.98, 0.95, 1);
      dl.intensity = 14.8;
      dl.castShadow = true;
      sun.transform.rotationX = -50;
      sun.transform.rotationY = 40;
      scene.addChild(sun);

      /* —— 主光 + 补光 + 轮廓光（与 animation-skeleton-demo 一致） —— */
      const key = new Object3D();
      key.rotationX = 52;
      key.rotationY = -38;
      const keyL = key.addComponent(DirectLight);
      keyL.intensity = 2.35;
      keyL.lightColor = new Color(1, 0.97, 0.92, 1);
      scene.addChild(key);

      const fill = new Object3D();
      fill.rotationX = 18;
      fill.rotationY = 140;
      const fillL = fill.addComponent(DirectLight);
      fillL.intensity = 0.72;
      fillL.lightColor = new Color(0.78, 0.86, 1, 1);
      scene.addChild(fill);

      const rim = new Object3D();
      rim.rotationX = 12;
      rim.rotationY = 200;
      const rimL = rim.addComponent(DirectLight);
      rimL.intensity = 0.55;
      rimL.lightColor = new Color(0.95, 0.82, 1, 1);
      scene.addChild(rim);

      const ground = new Object3D();
      const gr = ground.addComponent(MeshRenderer);
      gr.geometry = new PlaneGeometry(400, 400);
      gr.material = new LitMaterial();
      gr.material.baseColor = new Color(0.16, 0.18, 0.22, 1);
      gr.receiveShadow = true;
      ground.transform.rotationX = 0;
      ground.y = 0;
      scene.addChild(ground);

      let animator = null;
      let clipNames = [];
      let playingName = '';

      const view = new View3D();
      view.scene = scene;
      view.camera = camera;
      Engine3D.startRenderView(view);

      window.addEventListener('resize', () =&gt; {
        camera.perspective(50, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.05, 5000);
      });

      function mountClipButtons(names) {
        clipButtons.textContent = '';
        names.forEach((name) =&gt; {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.textContent = `播放：${name}`;
          btn.addEventListener('click', () =&gt; {
            if (!animator) return;
            playingName = name;
            animator.playAnim(name, 0, 1);
            animator.timeScale = 1;
          });
          clipButtons.appendChild(btn);
        });
      }

      try {
        const root = await Engine3D.res.loadGltf(GLB_URL);
        root.transform.scaleX = MODEL_ROOT_SCALE;
        root.transform.scaleY = MODEL_ROOT_SCALE;
        root.transform.scaleZ = MODEL_ROOT_SCALE;

        scene.addChild(root);
        frameSkinnedModel(hover, root);

        root.traverse((child) =&gt; {
          const sm = child.getComponent(SkinnedMeshRenderer2);
          if (sm) {
            sm.castShadow = true;
            sm.receiveShadow = true;
          }
        });

        const animators = root.getComponentsInChild(AnimatorComponent);
        const ac = animators.find((a) =&gt; a.clips &amp;&amp; a.clips.length &gt; 0);
        if (ac) {
          animator = ac;
          const allNames = ac.clips.map((c) =&gt; c.clipName);
          clipNames = pickClipsByIndex(allNames);
          if (clipNames.length === 0) {
            clipButtons.innerHTML =
              '&lt;p style="margin-top:8px;color:#c98"&gt;剪辑数量不足，无法取第 1 / 第 4 条。&lt;/p&gt;';
          } else {
            mountClipButtons(clipNames);
          }
          playingName = clipNames[0] ?? '';
          if (playingName) {
            ac.playAnim(playingName, 0, 1);
            ac.timeScale = 1;
          }
          if (allNames.length !== 5) {
            console.warn(
              `[animation-animator-car-demo] 期望 5 条剪辑，实际 ${allNames.length}：`,
              allNames
            );
          }
        } else {
          clipButtons.innerHTML =
            '&lt;p style="margin-top:8px;color:#c98"&gt;未找到带 clips 的 AnimatorComponent。&lt;/p&gt;';
        }
      } catch (err) {
        console.error(err);
        hud.textContent =
          'GLB 加载失败（网络/CORS）。请联网并在 localhost 或 HTTPS 下打开。';
        clipButtons.innerHTML =
          '&lt;p style="margin-top:8px;color:#c98"&gt;加载失败，无法生成剪辑按钮。&lt;/p&gt;';
      }

      function tick() {
        const list = clipNames.length ? clipNames.join(', ') : '—';
        hud.textContent = `AnimatorComponent · 当前「${playingName || '—'}」 · clips=[${list}]`;
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    main();
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
  </div>
</div>

### glTF 骨骼动画（eva_unit_01_rigged.glb + AnimatorComponent）

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-anim-skeleton-tab" id="rings-anim-skeleton-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-anim-skeleton-tab" id="rings-anim-skeleton-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-anim-skeleton-tab-preview:checked ~ .rings-tab-bar label[for="rings-anim-skeleton-tab-preview"],
    .rings-quick-demo #rings-anim-skeleton-tab-code:checked ~ .rings-tab-bar label[for="rings-anim-skeleton-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; min-height: 420px; }
    .rings-quick-demo #rings-anim-skeleton-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-anim-skeleton-tab-code:checked ~ .rings-demo-code { display: block; }
    .rings-quick-demo #rings-anim-skeleton-tab-code:checked ~ .rings-demo-code { height: 480px; overflow: auto; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-anim-skeleton-tab-preview">示例</label>
    <label for="rings-anim-skeleton-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #0f172a;">
    <iframe src="examples/animation-skeleton-demo.html" title="Rings 动画：glTF 骨骼动画（eva_unit_01_rigged.glb + AnimatorComponent）" style="width: 100%; min-height: 420px; border: none; display: block;"></iframe>
  </div>
  <div class="rings-demo-code" style="background: #1e293b;">
    <pre style="margin: 0; padding: 14px; font-size: 11px; line-height: 1.5; color: #e2e8f0; white-space: pre-wrap; word-break: break-all;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;title&gt;Rings — 动画：glTF 骨骼动画（eva_unit_01_rigged.glb）&lt;/title&gt;
  &lt;style&gt;
    html, body { margin: 0; height: 100%; width: 100%; overflow: hidden; }
    body { position: relative; font-family: system-ui, "Segoe UI", sans-serif; }
    #canvas { display: block; width: 100%; height: 100%; }
    .hud {
      position: absolute; left: 8px; top: 8px; right: 280px; pointer-events: none;
      font-size: 11px; line-height: 1.45; color: #e6edf3; text-shadow: 0 1px 3px #000;
      font-family: ui-monospace, monospace;
    }
    .controls {
      position: absolute; top: 0; right: 0; bottom: 0; width: 260px; padding: 10px;
      overflow: auto; background: rgba(15, 20, 25, 0.92); color: #e6edf3;
      font-size: 0.72rem; border-left: 1px solid #2d3a4d;
    }
    .controls h3 { margin: 0 0 8px; font-size: 0.75rem; color: #8b9cb3; font-weight: 600; }
    .controls p { margin: 0; color: #8b9cb3; line-height: 1.45; }
    .controls button {
      pointer-events: auto; cursor: pointer; margin-top: 10px; padding: 8px 10px; width: 100%;
      background: #2d3f5c; color: #e6edf3; border: 1px solid #4a6a8c; border-radius: 4px;
      font-size: 0.75rem;
    }
    .controls button:hover { background: #354a66; }
    .controls button:disabled { opacity: 0.45; cursor: not-allowed; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;canvas id="canvas" style="width: 100%; height: 100%;"&gt;&lt;/canvas&gt;
  &lt;div class="hud" id="hud"&gt;&lt;/div&gt;
  &lt;aside class="controls"&gt;
    &lt;h3&gt;glTF 骨骼动画&lt;/h3&gt;
    &lt;p&gt;
      使用 CDN 上的 &lt;code&gt;eva_unit_01_rigged.glb&lt;/code&gt;（&lt;code&gt;resources-0.0.2&lt;/code&gt;）。&lt;code&gt;loadGltf&lt;/code&gt; 会为带蒙皮的节点挂上
      &lt;code&gt;AnimatorComponent&lt;/code&gt;，并将 glTF 动画解析为 &lt;code&gt;PropertyAnimationClip&lt;/code&gt;；
      蒙皮网格由 &lt;code&gt;SkinnedMeshRenderer2&lt;/code&gt; 读取骨骼矩阵。程序化 &lt;code&gt;SkeletonAnimationClip&lt;/code&gt; +
      &lt;code&gt;SkeletonAnimationComponent&lt;/code&gt; 的写法见本仓库其它示例（手写 buffer 管线）。
    &lt;/p&gt;
    &lt;p style="margin-top:8px"&gt;
      若 glTF 单位很小，示例会对根节点放大并对 &lt;code&gt;BoundUtil.genMeshBounds&lt;/code&gt; 结果做 &lt;code&gt;focusByBounds&lt;/code&gt;，
      避免相机仍在原点附近、视距过近而「在模型内部」或模型只占亚像素。
    &lt;/p&gt;
    &lt;button type="button" id="btnPlay" disabled&gt;播放骨骼动画&lt;/button&gt;
    &lt;button type="button" id="btnPause" disabled&gt;静止&lt;/button&gt;
  &lt;/aside&gt;
  &lt;script type="module"&gt;
    import {
      AnimatorComponent,
      BoundUtil,
      Color,
      Scene3D,
      Object3D,
      Engine3D,
      Camera3D,
      View3D,
      MeshRenderer,
      AtmosphericComponent,
      DirectLight,
      HoverCameraController,
      LitMaterial,
      PlaneGeometry,
      SkinnedMeshRenderer2,
    } from '../../src/index.ts';
    /** glTF 常为真实比例，整体偏小；放大后需按包围盒拉远相机，否则会「在模型肚子里」看不到。 */
    const MODEL_ROOT_SCALE = 0.1;

    function frameSkinnedModel(hover, root) {
      const bound = BoundUtil.genMeshBounds(root);
      const sx = bound.size.x;
      const sy = bound.size.y;
      const sz = bound.size.z;
      if (sx &lt; 1e-8 &amp;&amp; sy &lt; 1e-8 &amp;&amp; sz &lt; 1e-8) return;

      hover.focusByBounds(root);
      const ex = bound.extents.x;
      const ey = bound.extents.y;
      const ez = bound.extents.z;
      const radius = Math.sqrt(ex * ex + ey * ey + ez * ez);
      const dist = Math.max(radius * 2.75, 4);
      hover.distance = dist;
      hover.maxDistance = Math.max(dist * 6, 800);
    }

    const GLB_URL =
      'https://cdn.jsdelivr.net/gh/RingsEngine/rings-resource@resources-0.0.3/glb/eva_unit_01_rigged.glb';

    async function main() {
      const canvas = document.getElementById('canvas');
      const hud = document.getElementById('hud');
      if (!canvas) return;

      try {
        await Engine3D.init({ canvasConfig: { canvas } });
      } catch (e) {
        document.body.innerHTML =
          '&lt;p style="padding:1rem;font-family:sans-serif"&gt;WebGPU 初始化失败，请使用 Chrome/Edge 并在 localhost 或 HTTPS 下打开。&lt;/p&gt;';
        console.error(e);
        return;
      }

      const scene = new Scene3D();
      const atm = scene.addComponent(AtmosphericComponent);
      atm.sunBrightness = 1.65;
      atm.sunRadiance = 22;

      const camObj = new Object3D();
      const camera = camObj.addComponent(Camera3D);
      camera.perspective(50, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.05, 5000);
      const hover = camObj.addComponent(HoverCameraController);
      hover.setCamera(22, -12, 80);
      scene.addChild(camObj);

      const sun = new Object3D();
      const dl = sun.addComponent(DirectLight);
      dl.lightColor = new Color(1, 0.98, 0.95, 1);
      dl.intensity = 14.8;
      dl.castShadow = true;
      sun.transform.rotationX = -50;
      sun.transform.rotationY = 40;
      scene.addChild(sun);

      /* —— 主光 + 补光 + 轮廓光 —— */
      const key = new Object3D();
      key.rotationX = 52;
      key.rotationY = -38;
      const keyL = key.addComponent(DirectLight);
      keyL.intensity = 2.35;
      keyL.lightColor = new Color(1, 0.97, 0.92, 1);
      scene.addChild(key);

      const fill = new Object3D();
      fill.rotationX = 18;
      fill.rotationY = 140;
      const fillL = fill.addComponent(DirectLight);
      fillL.intensity = 0.72;
      fillL.lightColor = new Color(0.78, 0.86, 1, 1);
      scene.addChild(fill);

      const rim = new Object3D();
      rim.rotationX = 12;
      rim.rotationY = 200;
      const rimL = rim.addComponent(DirectLight);
      rimL.intensity = 0.55;
      rimL.lightColor = new Color(0.95, 0.82, 1, 1);
      scene.addChild(rim);

      const ground = new Object3D();
      const gr = ground.addComponent(MeshRenderer);
      gr.geometry = new PlaneGeometry(400, 400);
      gr.material = new LitMaterial();
      gr.material.baseColor = new Color(0.16, 0.18, 0.22, 1);
      gr.receiveShadow = true;
      ground.transform.rotationX = 0;
      ground.y = 0;
      scene.addChild(ground);

      let playingName = '';
      let clipNames = [];
      let animator = null;

      const btnPlay = document.getElementById('btnPlay');
      const btnPause = document.getElementById('btnPause');

      const view = new View3D();
      view.scene = scene;
      view.camera = camera;
      Engine3D.startRenderView(view);

      window.addEventListener('resize', () =&gt; {
        camera.perspective(50, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.05, 5000);
      });

      function setSkeletonPlaybackButtonsEnabled(ok) {
        if (btnPlay) btnPlay.disabled = !ok;
        if (btnPause) btnPause.disabled = !ok;
      }

      btnPlay?.addEventListener('click', () =&gt; {
        if (!animator || clipNames.length === 0) return;
        animator.timeScale = 1;
        playingName = clipNames[0] || playingName;
      });

      btnPause?.addEventListener('click', () =&gt; {
        if (!animator || clipNames.length === 0) return;
        animator.timeScale = 0;
      });

      try {
        const root = await Engine3D.res.loadGltf(GLB_URL);
        root.transform.scaleX = MODEL_ROOT_SCALE;
        root.transform.scaleY = MODEL_ROOT_SCALE;
        root.transform.scaleZ = MODEL_ROOT_SCALE;

        scene.addChild(root);
        frameSkinnedModel(hover, root);

        root.traverse((child) =&gt; {
          const sm = child.getComponent(SkinnedMeshRenderer2);
          if (sm) {
            sm.castShadow = true;
            sm.receiveShadow = true;
          }
        });

        const animators = root.getComponentsInChild(AnimatorComponent);
        const ac = animators.find((a) =&gt; a.clips &amp;&amp; a.clips.length &gt; 0);
        if (ac) {
          animator = ac;
          clipNames = ac.clips.map((c) =&gt; c.clipName);
          playingName = clipNames[0];
          animator.timeScale = 1;
          animator.playAnim(playingName, 0, 1);
          setSkeletonPlaybackButtonsEnabled(true);
        } else {
          setSkeletonPlaybackButtonsEnabled(false);
        }
      } catch (err) {
        console.error(err);
        hud.textContent =
          'GLB 加载失败（网络/CORS）。请联网并在 localhost 或 HTTPS 下打开。';
        setSkeletonPlaybackButtonsEnabled(false);
      }

      function tick() {
        const list = clipNames.length ? clipNames.join(', ') : '—';
        const motion =
          animator &amp;&amp; animator.timeScale !== 0 ? '播放中' : '静止';
        hud.textContent = `AnimatorComponent · ${motion} ·「${playingName || '—'}」 · clips=[${list}]`;
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    main();
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
  </div>
</div>

