# 动画组件系统

本页按 **先选型、再分组件、再资源与事件、最后工程实践** 组织：

1. **概述** — 组件对比与类型导入一览
2. **AnimatorComponent** — 模型内置剪辑、BlendShape
3. **PropertyAnimation** — 属性关键帧
4. **SkeletonAnimationComponent / Skeleton** — 底层骨骼驱动
5. **剪辑资源** — `PropertyAnimationClip`（Animator）/ `SkeletonAnimationClip` / `PropertyAnimClip`
6. **事件** — PropertyAnimationEvent 等
7. **顶点变形** — `MorphTargetBlender`（组件）
8. **实践** — 加载、混合、性能、排错、进阶示例

**导入说明**：发布包入口为 **`@rings-webgpu/core`**（与仓库根目录 `package.json` 的 `name` 一致）。若本地工程将 **`@rings/core`** 配成指向源码的别名，亦可使用该路径。

## 可运行示例

文档站需以 **HTTP(S)** 打开；`iframe` 与示例页依赖 **unpkg**、**WebGPU** 与网络。**Animator** 示例从 jsDelivr 加载 **`camcopter_s_100.glb`**（RingsEngine/rings-resource）；**Morph** 示例从 CDN 拉取 glTF。每个块顶栏 **示例** / **代码** 为 **Tab 切换**。运行说明见 [`animation-demos-README.md`](../examples/animation-demos-README.md)。更新 `docs/examples/animation-*.html` 后执行 `node scripts/build-anim-demos-fragment.cjs` 与 `node scripts/merge-anim-readme.cjs`。

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
        console.log(root,1111111)
        console.log(GLB,5555555)
        scene.addChild(root);
        let animator = root.getComponentsInChild(AnimatorComponent);
        console.log(animator,4444444)

        root.traverse((child) =&gt; {
          console.log(child,3333333)
          const sm = child.getComponent(SkinnedMeshRenderer2);
          if (sm) {
            sm.castShadow = true;
            sm.receiveShadow = true;
          }
          const ac = child.getComponent(AnimatorComponent);
          console.log(ac,2222222)
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

### PropertyAnimation / PropertyAnimClip

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-anim-property-tab" id="rings-anim-property-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-anim-property-tab" id="rings-anim-property-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-anim-property-tab-preview:checked ~ .rings-tab-bar label[for="rings-anim-property-tab-preview"],
    .rings-quick-demo #rings-anim-property-tab-code:checked ~ .rings-tab-bar label[for="rings-anim-property-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; min-height: 420px; }
    .rings-quick-demo #rings-anim-property-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-anim-property-tab-code:checked ~ .rings-demo-code { display: block; }
    .rings-quick-demo #rings-anim-property-tab-code:checked ~ .rings-demo-code { height: 480px; overflow: auto; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-anim-property-tab-preview">示例</label>
    <label for="rings-anim-property-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #0f172a;">
    <iframe src="examples/animation-property-demo.html" title="Rings 动画：PropertyAnimation / PropertyAnimClip" style="width: 100%; min-height: 420px; border: none; display: block;"></iframe>
  </div>
  <div class="rings-demo-code" style="background: #1e293b;">
    <pre style="margin: 0; padding: 14px; font-size: 11px; line-height: 1.5; color: #e2e8f0; white-space: pre-wrap; word-break: break-all;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;title&gt;Rings — 动画：PropertyAnimation / PropertyAnimClip&lt;/title&gt;
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
    .controls p { margin: 0 0 8px; color: #8b9cb3; line-height: 1.45; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;canvas id="canvas" style="width: 100%; height: 100%;"&gt;&lt;/canvas&gt;
  &lt;div class="hud" id="hud"&gt;&lt;/div&gt;
  &lt;aside class="controls"&gt;
    &lt;h3&gt;PropertyAnimation&lt;/h3&gt;
    &lt;p&gt;
      &lt;code&gt;PropertyAnimClip.parse&lt;/code&gt; 使用 Unity 风格 JSON（&lt;code&gt;m_EditorCurves&lt;/code&gt;）。
      本例对立方体 &lt;code&gt;m_LocalPosition.y&lt;/code&gt; 做循环，并注册 &lt;strong&gt;SEEK&lt;/strong&gt; 关键帧（控制台输出）。&lt;strong&gt;COMPLETE&lt;/strong&gt; 见 &lt;code&gt;animation-property-event-demo.html&lt;/code&gt;。
    &lt;/p&gt;
  &lt;/aside&gt;
  &lt;script type="module"&gt;
    import {
      Engine3D, Scene3D, Object3D, Camera3D, View3D, Color,
      LitMaterial, BoxGeometry, MeshRenderer,
      PropertyAnimation, PropertyAnimClip, WrapMode,
      PropertyAnimationEvent,
      AtmosphericComponent, DirectLight, HoverCameraController,
    } from 'https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js';

    /** Unity AnimationClip 导出风格的最小曲线 */
    function makeLoopClipJson() {
      return {
        AnimationClip: {
          m_Name: 'LoopY',
          m_AnimationClipSettings: { m_LoopTime: true },
          m_WrapMode: WrapMode.Loop,
          m_SampleRate: 60,
          m_EditorCurves: {
            '0': {
              attribute: 'm_LocalPosition.y',
              path: '',
              curve: {
                m_PreInfinity: 2,
                m_PostInfinity: 2,
                m_RotationOrder: 0,
                m_Curve: {
                  '0': { serializedVersion: '2', time: 0, value: 0, inSlope: 0, outSlope: 0, tangentMode: 0 },
                  '1': { serializedVersion: '2', time: 1, value: 0.6, inSlope: 0, outSlope: 0, tangentMode: 0 },
                  '2': { serializedVersion: '2', time: 2, value: 0, inSlope: 0, outSlope: 0, tangentMode: 0 },
                },
              },
            },
          },
        },
      };
    }

    async function main() {
      const canvas = document.getElementById('canvas');
      const hud = document.getElementById('hud');
      if (!canvas) return;
      try {
        await Engine3D.init({ canvasConfig: { canvas } });
      } catch (e) {
        document.body.innerHTML =
          '&lt;p style="padding:1rem;font-family:sans-serif"&gt;WebGPU 初始化失败。&lt;/p&gt;';
        console.error(e);
        return;
      }

      const scene = new Scene3D();
      scene.addComponent(AtmosphericComponent);

      const camObj = new Object3D();
      const camera = camObj.addComponent(Camera3D);
      camera.perspective(55, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.1, 200);
      camObj.addComponent(HoverCameraController).setCamera(4, -6, 3);
      scene.addChild(camObj);

      const sun = new Object3D();
      const dl = sun.addComponent(DirectLight);
      dl.lightColor = new Color(1, 1, 1, 1);
      dl.intensity = 1.1;
      scene.addChild(sun);

      const box = new Object3D();
      box.x = 0;
      box.y = 0.5;
      const mr = box.addComponent(MeshRenderer);
      mr.geometry = new BoxGeometry(0.6, 0.6, 0.6);
      mr.material = new LitMaterial();
      mr.material.baseColor = new Color(0.35, 0.55, 0.95, 1);
      scene.addChild(box);

      const prop = box.addComponent(PropertyAnimation);

      const loopClip = new PropertyAnimClip();
      loopClip.parse(makeLoopClipJson());

      prop.registerEventKeyFrame({
        clipName: 'LoopY',
        time: 1.0,
        data: { note: 'SEEK 经过 t=1s' },
      });
      prop.eventDispatcher.addEventListener(PropertyAnimationEvent.SEEK, (e) =&gt; {
        if (e.frame?.data) console.log('[PropertyAnimation] SEEK', e.frame.time, e.frame.data);
      });

      prop.appendClip(loopClip);
      prop.defaultClip = 'LoopY';
      prop.autoPlay = true;

      const view = new View3D();
      view.scene = scene;
      view.camera = camera;
      Engine3D.startRenderView(view);

      window.addEventListener('resize', () =&gt; {
        camera.perspective(55, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.1, 200);
      });

      function tick() {
        const p = box.transform.localPosition;
        hud.textContent = `PropertyAnimation · localPosition=(${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}) · clip=${prop.currentClip?.name ?? '-'}`;
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

### PropertyAnimationEvent（COMPLETE）

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-anim-event-tab" id="rings-anim-event-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-anim-event-tab" id="rings-anim-event-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-anim-event-tab-preview:checked ~ .rings-tab-bar label[for="rings-anim-event-tab-preview"],
    .rings-quick-demo #rings-anim-event-tab-code:checked ~ .rings-tab-bar label[for="rings-anim-event-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; min-height: 420px; }
    .rings-quick-demo #rings-anim-event-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-anim-event-tab-code:checked ~ .rings-demo-code { display: block; }
    .rings-quick-demo #rings-anim-event-tab-code:checked ~ .rings-demo-code { height: 480px; overflow: auto; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-anim-event-tab-preview">示例</label>
    <label for="rings-anim-event-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #0f172a;">
    <iframe src="examples/animation-property-event-demo.html" title="Rings 动画：PropertyAnimationEvent（COMPLETE）" style="width: 100%; min-height: 420px; border: none; display: block;"></iframe>
  </div>
  <div class="rings-demo-code" style="background: #1e293b;">
    <pre style="margin: 0; padding: 14px; font-size: 11px; line-height: 1.5; color: #e2e8f0; white-space: pre-wrap; word-break: break-all;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;title&gt;Rings — 动画：PropertyAnimationEvent（COMPLETE）&lt;/title&gt;
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
    .controls p { margin: 0; color: #8b9cb3; line-height: 1.45; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;canvas id="canvas" style="width: 100%; height: 100%;"&gt;&lt;/canvas&gt;
  &lt;div class="hud" id="hud"&gt;&lt;/div&gt;
  &lt;aside class="controls"&gt;
    &lt;p&gt;
      单段 &lt;strong&gt;Clamp&lt;/strong&gt; 剪辑（不循环），播完后触发 &lt;code&gt;PropertyAnimationEvent.COMPLETE&lt;/code&gt;。打开开发者工具查看控制台。
    &lt;/p&gt;
  &lt;/aside&gt;
  &lt;script type="module"&gt;
    import {
      Engine3D, Scene3D, Object3D, Camera3D, View3D, Color,
      LitMaterial, BoxGeometry, MeshRenderer,
      PropertyAnimation, PropertyAnimClip, WrapMode,
      PropertyAnimationEvent,
      AtmosphericComponent, DirectLight, HoverCameraController,
    } from 'https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js';

    function makeClampOnceJson() {
      return {
        AnimationClip: {
          m_Name: 'OnceMove',
          m_AnimationClipSettings: { m_LoopTime: false },
          m_WrapMode: WrapMode.Clamp,
          m_SampleRate: 60,
          m_EditorCurves: {
            '0': {
              attribute: 'm_LocalPosition.x',
              path: '',
              curve: {
                m_PreInfinity: 2,
                m_PostInfinity: 2,
                m_RotationOrder: 0,
                m_Curve: {
                  '0': { serializedVersion: '2', time: 0, value: 0, inSlope: 0, outSlope: 0, tangentMode: 0 },
                  '1': { serializedVersion: '2', time: 1.2, value: 0.8, inSlope: 0, outSlope: 0, tangentMode: 0 },
                },
              },
            },
          },
        },
      };
    }

    async function main() {
      const canvas = document.getElementById('canvas');
      const hud = document.getElementById('hud');
      if (!canvas) return;
      try {
        await Engine3D.init({ canvasConfig: { canvas } });
      } catch (e) {
        document.body.innerHTML =
          '&lt;p style="padding:1rem;font-family:sans-serif"&gt;WebGPU 初始化失败。&lt;/p&gt;';
        console.error(e);
        return;
      }

      const scene = new Scene3D();
      scene.addComponent(AtmosphericComponent);

      const camObj = new Object3D();
      const camera = camObj.addComponent(Camera3D);
      camera.perspective(55, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.1, 200);
      camObj.addComponent(HoverCameraController).setCamera(4, -6, 3);
      scene.addChild(camObj);

      const sun = new Object3D();
      const dl = sun.addComponent(DirectLight);
      dl.lightColor = new Color(1, 1, 1, 1);
      dl.intensity = 1.1;
      scene.addChild(sun);

      const box = new Object3D();
      box.y = 0.5;
      const mr = box.addComponent(MeshRenderer);
      mr.geometry = new BoxGeometry(0.5, 0.5, 0.5);
      mr.material = new LitMaterial();
      mr.material.baseColor = new Color(0.35, 0.85, 0.45, 1);
      scene.addChild(box);

      const prop = box.addComponent(PropertyAnimation);
      let completeFired = false;
      prop.eventDispatcher.addEventListener(PropertyAnimationEvent.COMPLETE, (e) =&gt; {
        console.log('[PropertyAnimation] COMPLETE', e.animation?.currentClip?.name);
        completeFired = true;
        hud.textContent = 'COMPLETE 已触发（见控制台）';
      });

      const clip = new PropertyAnimClip();
      clip.parse(makeClampOnceJson());
      prop.appendClip(clip);
      prop.autoPlay = true;

      const view = new View3D();
      view.scene = scene;
      view.camera = camera;
      Engine3D.startRenderView(view);

      window.addEventListener('resize', () =&gt; {
        camera.perspective(55, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.1, 200);
      });

      function tick() {
        if (!completeFired) hud.textContent = '播放 OnceMove（Clamp）…';
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
    &lt;button type="button" id="btnPlay" disabled&gt;播放骨骼动画&lt;/button&gt;
  &lt;/aside&gt;
  &lt;script type="module"&gt;
    import {
      Engine3D, Scene3D, Object3D, Camera3D, View3D, Color,
      LitMaterial, PlaneGeometry, MeshRenderer,
      SkinnedMeshRenderer2, AnimatorComponent,
      AtmosphericComponent, DirectLight, HoverCameraController,
    } from 'https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js';

    const GLB_URL =
      'https://cdn.jsdelivr.net/gh/RingsEngine/rings-resource@resources-0.0.2/glb/eva_unit_01_rigged.glb';

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
      camObj.addComponent(HoverCameraController).setCamera(4.2, -6.5, 2.2);
      scene.addChild(camObj);

      const sun = new Object3D();
      const dl = sun.addComponent(DirectLight);
      dl.lightColor = new Color(1, 0.98, 0.95, 1);
      dl.intensity = 2.0;
      dl.castShadow = true;
      sun.transform.rotationX = -50;
      sun.transform.rotationY = 40;
      scene.addChild(sun);

      const ground = new Object3D();
      const gr = ground.addComponent(MeshRenderer);
      gr.geometry = new PlaneGeometry(24, 24);
      gr.material = new LitMaterial();
      gr.material.baseColor = new Color(0.16, 0.18, 0.22, 1);
      gr.receiveShadow = true;
      ground.transform.rotationX = -90;
      ground.y = 0;
      scene.addChild(ground);

      let playingName = '';
      let clipNames = [];
      let animator = null;

      const btnPlay = document.getElementById('btnPlay');

      try {
        const root = await Engine3D.res.loadGltf(GLB_URL);
        scene.addChild(root);

        root.traverse((child) =&gt; {
          const sm = child.getComponent(SkinnedMeshRenderer2);
          if (sm) {
            sm.castShadow = true;
            sm.receiveShadow = true;
          }
        });

        const animators = root.getComponentsInChild(AnimatorComponent);
        console.log(animators,6666666)
        const ac = animators.find((a) =&gt; a.clips &amp;&amp; a.clips.length);
        if (ac) {
          animator = ac;
          clipNames = ac.clips.map((c) =&gt; c.clipName);
          if (btnPlay) btnPlay.disabled = clipNames.length === 0;
        }
      } catch (err) {
        console.error(err);
        hud.textContent =
          'GLB 加载失败（网络/CORS）。请联网并在 localhost 或 HTTPS 下打开。';
      }

      function playSkeletonAnim() {
        if (!animator || !clipNames.length) return;
        const name = clipNames[0];
        playingName = name;
        animator.playAnim(name, 0, 1);
      }

      btnPlay?.addEventListener('click', () =&gt; {
        playSkeletonAnim();
      });

      const view = new View3D();
      view.scene = scene;
      view.camera = camera;
      Engine3D.startRenderView(view);

      window.addEventListener('resize', () =&gt; {
        camera.perspective(50, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.05, 500);
      });

      function tick() {
        const list = clipNames.length ? clipNames.join(', ') : '—';
        hud.textContent = `AnimatorComponent · 播放「${playingName || '—'}」 · clips=[${list}]`;
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

### MorphTargetBlender

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-anim-morph-tab" id="rings-anim-morph-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-anim-morph-tab" id="rings-anim-morph-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-anim-morph-tab-preview:checked ~ .rings-tab-bar label[for="rings-anim-morph-tab-preview"],
    .rings-quick-demo #rings-anim-morph-tab-code:checked ~ .rings-tab-bar label[for="rings-anim-morph-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; min-height: 420px; }
    .rings-quick-demo #rings-anim-morph-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-anim-morph-tab-code:checked ~ .rings-demo-code { display: block; }
    .rings-quick-demo #rings-anim-morph-tab-code:checked ~ .rings-demo-code { height: 480px; overflow: auto; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-anim-morph-tab-preview">示例</label>
    <label for="rings-anim-morph-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #0f172a;">
    <iframe src="examples/animation-morph-target-blender-demo.html" title="Rings 动画：MorphTargetBlender" style="width: 100%; min-height: 420px; border: none; display: block;"></iframe>
  </div>
  <div class="rings-demo-code" style="background: #1e293b;">
    <pre style="margin: 0; padding: 14px; font-size: 11px; line-height: 1.5; color: #e2e8f0; white-space: pre-wrap; word-break: break-all;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;title&gt;Rings — 动画：MorphTargetBlender&lt;/title&gt;
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
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;canvas id="canvas" style="width: 100%; height: 100%;"&gt;&lt;/canvas&gt;
  &lt;div class="hud" id="hud"&gt;&lt;/div&gt;
  &lt;aside class="controls"&gt;
    &lt;h3&gt;MorphTargetBlender&lt;/h3&gt;
    &lt;p&gt;
      从 jsDelivr 加载 Khronos &lt;strong&gt;MorphPrimitivesTest.glb&lt;/strong&gt;（含 morphTarget）。
      挂载 &lt;code&gt;MorphTargetBlender&lt;/code&gt; 后，在 &lt;code&gt;beforeRender&lt;/code&gt; 中对 &lt;code&gt;cloneMorphRenderers()&lt;/code&gt; 返回的渲染器调用 &lt;code&gt;setMorphInfluence&lt;/code&gt; 做正弦权重。
    &lt;/p&gt;
  &lt;/aside&gt;
  &lt;script type="module"&gt;
    import {
      Engine3D, Scene3D, Object3D, Camera3D, View3D, Color,
      LitMaterial, PlaneGeometry, MeshRenderer,
      MorphTargetBlender,
      AtmosphericComponent, DirectLight, HoverCameraController,
    } from 'https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js';

    /** Khronos glTF-Sample-Assets — MorphPrimitivesTest（glb） */
    const MORPH_GLB =
      'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/MorphPrimitivesTest/glTF-Binary/MorphPrimitivesTest.glb';

    async function main() {
      const canvas = document.getElementById('canvas');
      const hud = document.getElementById('hud');
      if (!canvas) return;

      let blender = null;
      let morphTime = 0;

      try {
        await Engine3D.init({
          canvasConfig: { canvas },
          beforeRender: () =&gt; {
            if (!blender) return;
            morphTime += 0.025;
            const w = Math.sin(morphTime) * 0.5 + 0.5;
            const map = blender.cloneMorphRenderers();
            for (const key of Object.keys(map)) {
              const list = map[key];
              for (const r of list) {
                r.setMorphInfluence(key, w);
              }
            }
          },
        });
      } catch (e) {
        document.body.innerHTML =
          '&lt;p style="padding:1rem;font-family:sans-serif"&gt;WebGPU 初始化失败。&lt;/p&gt;';
        console.error(e);
        return;
      }

      const scene = new Scene3D();
      scene.addComponent(AtmosphericComponent);

      const camObj = new Object3D();
      const camera = camObj.addComponent(Camera3D);
      camera.perspective(50, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.05, 500);
      camObj.addComponent(HoverCameraController).setCamera(2.2, -3.8, 1.6);
      scene.addChild(camObj);

      const sun = new Object3D();
      const dl = sun.addComponent(DirectLight);
      dl.lightColor = new Color(1, 0.98, 0.95, 1);
      dl.intensity = 1.15;
      sun.transform.rotationX = -50;
      sun.transform.rotationY = 30;
      scene.addChild(sun);

      const ground = new Object3D();
      const gr = ground.addComponent(MeshRenderer);
      gr.geometry = new PlaneGeometry(8, 8);
      gr.material = new LitMaterial();
      gr.material.baseColor = new Color(0.16, 0.18, 0.22, 1);
      gr.receiveShadow = true;
      ground.transform.rotationX = -90;
      ground.y = -0.01;
      scene.addChild(ground);

      try {
        const root = await Engine3D.res.loadGltf(MORPH_GLB);
        scene.addChild(root);
        root.traverse((child) =&gt; {
          const mr = child.getComponent(MeshRenderer);
          const dict = mr?.geometry?.morphTargetDictionary;
          if (dict &amp;&amp; Object.keys(dict).length &amp;&amp; !blender) {
            child.addComponent(MorphTargetBlender);
            blender = child.getComponent(MorphTargetBlender);
            mr.castShadow = true;
          }
        });
        if (!blender) {
          hud.textContent = '未找到带 morphTarget 的 MeshRenderer（检查 CDN / CORS）。';
        }
      } catch (err) {
        console.error(err);
        hud.textContent = 'Morph glTF 加载失败（网络/CORS）。';
      }

      const view = new View3D();
      view.scene = scene;
      view.camera = camera;
      Engine3D.startRenderView(view);

      window.addEventListener('resize', () =&gt; {
        camera.perspective(50, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.05, 500);
      });

      function tick() {
        const on = blender ? 'MorphTargetBlender OK' : '—';
        hud.textContent = `${on} · weight≈sin(t) · MorphPrimitivesTest.glb`;
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

---

## 概述

### 组件选型

| 动画类型 | 适用场景 | 性能 | 特点 |
|----------|----------|------|------|
| `AnimatorComponent` | 模型内置动画、骨骼动画、顶点变形 | 中等 | 功能全面，支持混合 |
| `SkeletonAnimationComponent` | 纯骨骼动画 | 高 | 底层控制，性能最佳 |
| `PropertyAnimation` | 属性动画、UI 动画、程序化动画 | 低 | 灵活，支持任意属性 |

### 常用类型导入

| 类名 | 导入路径 | 描述 |
|----------|----------|------|
| `AnimatorComponent` | `@rings-webgpu/core` | 通用动画组件，支持骨骼和 BlendShape |
| `SkeletonAnimationComponent` | `@rings-webgpu/core` | 专用骨骼动画组件 |
| `PropertyAnimation` | `@rings-webgpu/core` | 属性动画组件 |
| `Skeleton` / `Joint` | `@rings-webgpu/core` | 骨骼数据结构 |
| `SkeletonAnimationClip` | `@rings-webgpu/core` | `SkeletonAnimationComponent` 用骨骼剪辑 |
| `PropertyAnimationClip` | `@rings-webgpu/core` | `AnimatorComponent` 用骨骼/蒙皮剪辑（与下者不同） |
| `PropertyAnimClip` | `@rings-webgpu/core` | `PropertyAnimation` 用属性关键帧剪辑 |
| `PropertyAnimationEvent` | `@rings-webgpu/core` | 属性动画事件 |

---

## 一、模型与通用动画：AnimatorComponent

用于 **3D 模型自带动画序列**（骨骼、BlendShape），通过 `avatar` 绑定蒙皮数据。

### 典型用法

```javascript
import { AnimatorComponent } from "@rings-webgpu/core";

// 创建带有动画的模型实体
const animatedModel = new Object3D();
const animator = animatedModel.addComponent(AnimatorComponent);

// 设置骨骼数据（必需）：名称为已注册到 Engine3D.res 的 PrefabAvatarData
animator.avatar = "character_avatar";

// 骨骼动画剪辑由 clips 注入（类型为 PropertyAnimationClip[]，通常来自 glTF 解析或资源）
// animator.clips = [...];

// 播放指定动画
animator.playAnim("walk", 0, 1.0); // 动画名，起始时间，速度

// 动画过渡
animator.crossFade("run", 0.3); // 秒

// 播放顶点变形（BlendShape）动画
animator.playBlendShape("smile", 0, 1.0);
```

`AnimatorComponent` **没有** `pause` / `resume`；需要停表可用 `timeScale = 0` 等自行控制更新节奏。

### 属性

1. **`timeScale: number`**
   - **描述**：全局动画播放速度的缩放因子。
   - **默认值**：`1.0`。
   - **用法**：
     ```typescript
     animator.timeScale = 2.0; // 以双倍速度播放动画
     ```

2. **`avatar: string`**
   - **描述**：绑定骨骼数据的名称（`PrefabAvatarData`），**必需设置**。
   - **用法**：
     ```typescript
     animator.avatar = "character_avatar"; // 绑定骨骼数据
     ```

3. **`playBlendShapeLoop: boolean`**
   - **描述**：控制 BlendShape 动画是否循环播放。
   - **默认值**：`false`。
   - **用法**：
     ```typescript
     animator.playBlendShapeLoop = true; // 启用循环播放
     ```

4. **`clips: PropertyAnimationClip[]`**
   - **描述**：骨骼/蒙皮动画剪辑列表（与 `PropertyAnimClip` 不同）。设置时会建立名称映射并默认播放首段剪辑。
   - **用法**：通常由 glTF 解析或资源管线填充。

5. **`jointMatrixIndexTableBuffer: StorageGPUBuffer`**
   - **描述**：骨骼矩阵索引表，用于 GPU 计算。
   - **注意**：通常由系统自动生成，无需手动设置。

### 方法

1. **`playAnim(anim: string, time?: number, speed?: number)`**
   - **描述**：播放指定的骨骼动画。
   - **参数**：
     - `anim`：动画剪辑名称。
     - `time`：起始时间（秒），默认为 `0`。
     - `speed`：播放速度，默认为 `1`。
   - **用法**：
     ```typescript
     animator.playAnim("walk", 0, 1.5); // 以1.5倍速度播放行走动画
     ```

2. **`playBlendShape(shapeName: string, time?: number, speed?: number)`**
   - **描述**：播放顶点变形动画。
   - **参数**：
     - `shapeName`：变形目标名称。
     - `time`：起始时间（秒），默认为 `0`。
     - `speed`：播放速度，默认为 `1`。
   - **用法**：
     ```typescript
     animator.playBlendShape("smile", 0, 1.0);
     ```

3. **`crossFade(anim: string, crossTime: number)`**
   - **描述**：交叉淡入淡出到另一个动画。
   - **参数**：
     - `anim`：目标动画剪辑名称。
     - `crossTime`：过渡时间（秒）。

4. **`getAnimationClipState(name: string)`**
   - **描述**：获取指定名称的动画剪辑状态。
   - **返回值**：`PropertyAnimationClipState` 或 `null`。

5. **`cloneMorphRenderers()`**
   - **描述**：按变形目标名称收集 `SkinnedMeshRenderer2`，用于与 `MorphTargetBlender` 等配合。

6. **`getJointIndexTable(skinJointsName: string[])`**
   - **描述**：根据蒙皮关节名数组返回与 `PrefabAvatarData` 绑定的骨骼索引表。

---

## 二、属性动画：PropertyAnimation

用于处理对象属性的动画，支持位置、旋转、缩放、颜色等各种属性的动画：

```javascript
import { PropertyAnimation, PropertyAnimClip, WrapMode } from "@rings-webgpu/core";

// 创建属性动画实体
const animatedObject = new Object3D();
const propertyAnimator = animatedObject.addComponent(PropertyAnimation);

// 创建动画剪辑
const moveClip = new PropertyAnimClip();
moveClip.name = "moveAnimation";
moveClip.wrapMode = WrapMode.Loop;

// 从JSON数据加载动画
moveClip.parse(animationJsonData);

// 添加到动画器
propertyAnimator.appendClip(moveClip);

// 设置默认动画和自动播放
propertyAnimator.defaultClip = "moveAnimation";
propertyAnimator.autoPlay = true;

// 播放动画
propertyAnimator.play("moveAnimation");

// 控制播放
propertyAnimator.speed = 2.0; // 双倍速度
propertyAnimator.seek(1.5);   // 跳转到1.5秒
propertyAnimator.stop();      // 停止播放
propertyAnimator.toggle();    // 切换播放/暂停
```

### 属性

| 属性名 | 类型 | 描述 |
|--------|------|------|
| `defaultClip` | `string` | 自动播放的默认动画剪辑名称 |
| `autoPlay` | `boolean` | 是否在组件启动时自动播放默认动画 |
| `speed` | `number` | 动画播放速度，默认1.0 |
| `currentClip` | `PropertyAnimClip` | 当前播放的动画剪辑 |
| `time` | `number` | 当前动画时间（秒） |

### 方法

| 方法名 | 参数 | 返回值 | 描述 |
|--------|------|--------|------|
| `play` | name: string, reset?: boolean | PropertyAnimClip | 播放指定动画剪辑 |
| `stop` | - | void | 停止当前动画 |
| `seek` | time: number | void | 跳转到指定时间 |
| `toggle` | - | void | 切换播放/暂停状态 |
| `getClip` | name: string | PropertyAnimClip | 获取指定名称的动画剪辑 |
| `appendClip` | clip: PropertyAnimClip | void | 添加动画剪辑到动画器 |
| `registerEventKeyFrame` | frame: AnimatorEventKeyframe | void | 注册关键帧事件（配合 `SEEK`） |

---

## 三、骨骼动画：SkeletonAnimationComponent 与 Skeleton

面向需要直接操作 **Skeleton / 关节绑定** 的场景，通常与资源中解析出的骨骼一起使用。

### 典型用法

```javascript
import { SkeletonAnimationComponent, Skeleton, Joint } from "@rings-webgpu/core";

// 创建骨骼动画实体
const animatedEntity = new Object3D();
const skeletonAnimator = animatedEntity.addComponent(SkeletonAnimationComponent);

// 创建骨骼对象
const skeleton = new Skeleton();

// 添加骨骼关节
const rootJoint = new Joint("root");
rootJoint.translation.set(0, 0, 0);
rootJoint.rotation.set(0, 0, 0, 1);
rootJoint.scale.set(1, 1, 1);
skeleton.addJoint(rootJoint);

const childJoint = new Joint("bone_1");
childJoint.translation.set(0, 1, 0);
childJoint.parent = rootJoint; // 设置父子关系
skeleton.addJoint(childJoint);

// 设置骨骼数据（必需）
skeletonAnimator.skeleton = skeleton;

// 添加动画剪辑
const walkClip = new SkeletonAnimationClip("walk", skeleton, 60, bufferData);
skeletonAnimator.addAnimationClip(walkClip);

// 播放动画
skeletonAnimator.play("walk", 1.0, true);
```

### SkeletonAnimationComponent 属性

1. **`isPlaying: boolean`**
   - **描述**：是否正在播放动画。
   - **默认值**：`true`。

2. **`timeScale: number`**
   - **描述**：动画播放速度缩放因子。
   - **默认值**：`1.0`。

3. **`skeleton: Skeleton`**
   - **描述**：骨骼对象，**必需设置**。
   - **用法**：
     ```typescript
     skeletonAnimator.skeleton = skeleton;
     ```

4. **`jointMatrixIndexTableBuffer: StorageGPUBuffer`**
   - **描述**：骨骼矩阵索引缓冲区，用于 GPU 计算。

### SkeletonAnimationComponent 方法

1. **`play(animName: string, speed?: number, reset?: boolean)`**
   - **描述**：播放指定的骨骼动画。
   - **参数**：
     - `animName`：动画剪辑名称。
     - `speed`：播放速度，默认为 `1`。
     - `reset`：是否重置动画，默认为 `false`。
   - **返回值**：成功返回 `true`，失败返回 `false`。

2. **`crossFade(animName: string, crossTime: number)`**
   - **描述**：交叉淡入淡出到另一个动画。
   - **参数**：
     - `animName`：目标动画剪辑名称。
     - `crossTime`：过渡时间（秒）。

3. **`addAnimationClip(clip: SkeletonAnimationClip)`**
   - **描述**：添加动画剪辑到组件。
   - **参数**：
     - `clip`：动画剪辑对象。

4. **`getAnimationClip(name: string)`**
   - **描述**：获取指定名称的动画剪辑。
   - **返回值**：`SkeletonAnimationClip` 或 `null`。

5. **`getAnimationClips()`**
   - **描述**：获取所有动画剪辑。
   - **返回值**：`SkeletonAnimationClip[]`。

6. **`setAnimIsLoop(animName: string, isLoop: boolean)`**
   - **描述**：设置动画是否循环播放。
   - **参数**：
     - `animName`：动画剪辑名称。
     - `isLoop`：是否循环。

7. **`addJointBind(jointName: string, obj: Object3D)`**
   - **描述**：将骨骼绑定到指定对象。
   - **参数**：
     - `jointName`：骨骼名称。
     - `obj`：要绑定的对象。

8. **`removeJointBind(obj: Object3D)`**
   - **描述**：移除对象的骨骼绑定。
   - **参数**：
     - `obj`：已绑定到关节上的对象。

9. **`pause()` / `resume()`**
   - **描述**：暂停 / 恢复 `onUpdate` 中的动画推进（`isPlaying` 置为 `false` / `true`）。

### Skeleton 与 Joint

`Skeleton` 对象是骨骼动画系统的核心数据结构，用于存储和管理骨骼层次结构：

**结构组成**：
- `joints: Array<Joint>` - 骨骼关节数组，按层级顺序存储
- `numJoint: number` - 关节数量（只读属性）

**Joint 关节结构**：
- `name: string` - 关节名称，用于标识和查找
- `index: number` - 关节在数组中的索引
- `instanceID: string` - 唯一实例标识符
- `parent: Joint` - 父关节引用，形成骨骼层次
- `scale: Vector3` - 缩放向量
- `rotation: Quaternion` - 旋转四元数
- `translation: Vector3` - 平移向量

**创建骨骼层次示例**：

```javascript
import { Skeleton, Joint, Vector3, Quaternion } from "@rings-webgpu/core";

// 创建骨骼对象
const skeleton = new Skeleton();

// 创建根关节（通常对应模型原点）
const root = new Joint("Root");
root.translation.set(0, 0, 0);
root.rotation.set(0, 0, 0, 1); // 单位四元数
root.scale.set(1, 1, 1);
skeleton.addJoint(root);

// 创建脊柱关节
const spine = new Joint("Spine");
spine.translation.set(0, 1.0, 0); // 位于根关节上方1单位
spine.parent = root; // 设置父关节
skeleton.addJoint(spine);

// 创建头部关节
const head = new Joint("Head");
head.translation.set(0, 0.5, 0); // 位于脊柱上方0.5单位
head.parent = spine;
skeleton.addJoint(head);

// 创建左臂关节
const leftShoulder = new Joint("LeftShoulder");
leftShoulder.translation.set(-0.3, 0.2, 0);
leftShoulder.parent = spine;
skeleton.addJoint(leftShoulder);

const leftElbow = new Joint("LeftElbow");
leftElbow.translation.set(-0.8, 0, 0);
leftElbow.parent = leftShoulder;
skeleton.addJoint(leftElbow);

// 验证骨骼结构
console.log(`总关节数: ${skeleton.numJoint}`);
console.log(`头部关节索引: ${head.index}`);
console.log(`左肘父关节: ${skeleton.getJointName(leftElbow.parent.index)}`);

// 通过名称查找关节
const foundSpine = skeleton.getJointByName("Spine");
if (foundSpine) {
  console.log(`找到脊柱关节，父关节索引: ${skeleton.getJointParentIndex(foundSpine.index)}`);
}
```

**实际应用中的骨骼来源**：

含蒙皮的 glTF / glB 在 **`Engine3D.res.loadGltf(url)`** 解析时，带 `skeleton` 的节点会由转换器挂上 **`AnimatorComponent`** 并设置 **`avatar` / `clips`**（见源码 `GLTFSubParserConverter`）。若使用 **`SkeletonAnimationComponent`**，需自行从资源或自定义管线取得 **`Skeleton`** 与 **`SkeletonAnimationClip`** 后调用 **`addAnimationClip`**。

```javascript
import { Engine3D } from "@rings-webgpu/core";

const root = await Engine3D.res.loadGltf("character.gltf");
// 同一 URL 的解析结果可通过 Engine3D.res.getGltf(url) 取 GLTF_Info（含 animations 等）

// 调试：遍历自建 Skeleton
// skeleton.joints.forEach((joint, i) => { ... });
```

---

## 四、动画剪辑资源

注意：**`PropertyAnimationClip`**（`AnimatorComponent` / glTF 蒙皮动画）与 **`PropertyAnimClip`**（`PropertyAnimation` 属性曲线）是两类剪辑，勿混用。

### 蒙皮动画剪辑（PropertyAnimationClip）

类定义在 **`math/AnimationCurveClip`**（导出类名为 **`PropertyAnimationClip`**），供 **`AnimatorComponent.clips`** 使用。glTF 解析路径中（如 **`GLTFSubParserConverter.convertSkeletonAnim`**）会根据 `PrefabAvatarData` 与动画通道生成 **`PropertyAnimationClip[]`** 并赋给 `animator.clips`。一般业务侧少手写构造，多由加载器完成。

### 骨骼动画剪辑（SkeletonAnimationClip）

用于存储骨骼动画数据：

```javascript
import { SkeletonAnimationClip } from "@rings-webgpu/core";

// 创建骨骼动画剪辑
const clip = new SkeletonAnimationClip(
  "walk",           // 动画名称
  skeleton,         // 骨骼对象
  60,              // 帧数
  bufferData       // Float32Array动画数据
);

// 获取动画信息
console.log('总时长:', clip.totalTime);
console.log('帧率:', clip.frameRate);
console.log('帧数:', clip.numFrame);

// 添加动画事件
clip.addEvent("eventName", 1.5); // 在1.5秒添加事件
```

### 属性动画剪辑（PropertyAnimClip）

用于存储对象属性动画数据：

```javascript
import { PropertyAnimClip, WrapMode } from "@rings-webgpu/core";

// 创建属性动画剪辑
const clip = new PropertyAnimClip();
clip.name = "colorChange";
clip.wrapMode = WrapMode.Loop; // 循环播放
clip.parse(animationJson);     // 从JSON解析动画数据

// 支持的包装模式
// WrapMode.Default = 0
// WrapMode.Clamp = 1    // 播放一次后停止
// WrapMode.Loop = 2     // 循环播放
// WrapMode.PingPong = 4 // 往返播放
// WrapMode.ClampForever = 8 // 保持最后一帧
```

---

## 五、动画事件

动画系统支持事件回调，可以在动画播放过程中的特定时间点触发事件：

```javascript
import { PropertyAnimation, PropertyAnimationEvent } from "@rings-webgpu/core";

// 创建属性动画并添加事件监听
const animator = entity.addComponent(PropertyAnimation);

// 监听动画完成事件
animator.eventDispatcher.addEventListener(PropertyAnimationEvent.COMPLETE, (e) => {
  console.log('动画播放完成:', e.animation.currentClip.name);
});

// 监听关键帧事件
animator.eventDispatcher.addEventListener(PropertyAnimationEvent.SEEK, (e) => {
  console.log('到达关键帧:', e.frame.time, '数据:', e.frame.data);
});

// 注册关键帧事件
const keyframe = {
  clipName: "moveAnimation",
  time: 2.5,  // 2.5秒时触发
  data: { message: "到达中点" }
};
animator.registerEventKeyFrame(keyframe);
```

---

## 六、顶点变形：MorphTargetBlender

`MorphTargetBlender` 继承 **`ComponentBase`**，挂在包含带 **MorphTarget** 网格的 **`Object3D`** 上。在 **`init`** 中会遍历子树中的 **`SkinnedMeshRenderer2`** 与 **`MeshRenderer`**，按几何体 **`morphTargetDictionary`** 建立「变形目标名 → 渲染器列表」映射，并对需要变形的网格 **`selfCloneMaterials`**。

### 主要 API（与 `MorphTargetBlender.ts` 一致）

| 方法 | 说明 |
|------|------|
| **`getMorphRenderersByKey(key: string)`** | 返回该变形目标名对应的 `SkinnedMeshRenderer2[]`。 |
| **`cloneMorphRenderers()`** | 返回 `{ [morphKey: string]: SkinnedMeshRenderer2[] }` 的拷贝引用表。 |
| **`applyBlendShape(frame, keyMapper, multiplier?)`** | 根据 **`MorphTargetFrame`**（含 `transform` 与 `texture` 权重）与 **`MorphTargetMapper`**（模型通道 → 标准通道映射），对渲染器调用 **`setMorphInfluence`**，并更新挂载物体位姿。 |

类型 **`MorphTargetFrame`**、**`MorphTargetMapper`** 见 **`MorphTargetFrame.ts`**、**`MorphTargetKey.ts`**。

本仓库 **不包含** 独立 **`LipSync` / `@rings/animation`** 模块；口型或表情需由业务侧生成 **`MorphTargetFrame`**（或等价数据）后调用 **`applyBlendShape`**。

```typescript
import { MorphTargetBlender } from "@rings-webgpu/core";

const blender = entity.addComponent(MorphTargetBlender);
// init 由组件生命周期触发；子节点需已有含 morphTargetDictionary 的几何体

const list = blender.getMorphRenderersByKey("某变形通道名");
// blender.applyBlendShape(frame, keyMapper, 1);
```

---

## 七、资源加载与实践

### 7.1 必需设置
- `AnimatorComponent` 必须设置 `avatar` 属性
- `SkeletonAnimationComponent` 必须设置 `skeleton` 属性
- `PropertyAnimation` 需要添加至少一个动画剪辑

### 7.2 动画数据加载

```javascript
import { Engine3D, PropertyAnimation, PropertyAnimClip } from "@rings-webgpu/core";

// glTF / glB：根节点为 Object3D；含骨骼的网格会在解析流程中自动挂 AnimatorComponent（见 GLTFSubParserConverter）
const root = await Engine3D.res.loadGltf("model.gltf");
// 如需原始解析数据：Engine3D.res.getGltf("model.gltf") → GLTF_Info

// 手动挂 Animator（若未由解析器自动完成）：先 Engine3D.res.addObj(avatarName, prefabAvatarData)，再 animator.avatar = avatarName；animator.clips = propertyAnimationClipArray

// 属性动画（程序化 / JSON 曲线）
const propertyAnimator = entity.addComponent(PropertyAnimation);
const clip = new PropertyAnimClip();
clip.parse(animationJsonData);
propertyAnimator.appendClip(clip);
```

组件选型与适用场景见文首 **概述 → 组件选型**。

### 7.3 动画混合与过渡
```javascript
// AnimatorComponent动画混合
animator.playAnim("walk", 0, 1.0);
animator.crossFade("run", 0.5); // 秒

// SkeletonAnimationComponent：过渡用 crossFade
skeletonAnimator.crossFade("run", 0.3);

// play(animName, speed?, reset?) 的第二个参数是速度，不是权重；当前实现中 play 会将其它 clip 的 weight 置 0
skeletonAnimator.play("walk", 1.0);
// 多轨混合由 crossFade 内部维护 clipState.weight；不要误用「连续两次 play」当作双通道权重混合
```

### 7.4 性能优化建议
- **骨骼动画优化**：
  - 减少骨骼数量（建议<50根）
  - 使用GPU蒙皮而非CPU蒙皮
  - 避免每帧更新骨骼矩阵

- **动画剪辑优化**：
  - 压缩动画数据（减少关键帧）
  - 使用合理的帧率（24-30fps）
  - 避免过长的动画剪辑

- **运行时优化**：
  - 使用动画LOD（距离远时降低精度）
  - 批量更新动画组件
  - 禁用不可见对象的动画

### 7.5 常见问题与解决方案

**问题1：动画不播放**
```javascript
// 检查必需设置（Animator 的 avatar 仅有 setter，无 getter，请用已赋值的名称或 clips 数量排查）
console.log('clips:', animator.clips?.length);
console.log('skeleton:', skeletonAnimator.skeleton);
```

**问题2：动画抖动**
```javascript
// 确保骨骼数据匹配
console.log('骨骼关节数:', skeleton.numJoint);
console.log('动画骨骼数:', clip.skeleton.numJoint);
```

**问题3：性能问题**
```javascript
// 监控动画性能
const stats = {
  activeAnimators: 0,
  totalBones: 0,
  updateTime: 0
};
// 使用引擎统计工具监控
```

### 7.6 高级功能示例

**动画状态机**：
```javascript
// 创建简单的动画状态机
class AnimationStateMachine {
  constructor(animator) {
    this.animator = animator;
    this.currentState = "idle";
    this.states = {
      idle: { next: ["walk", "run"] },
      walk: { next: ["idle", "run"] },
      run: { next: ["walk", "idle"] }
    };
  }
  
  transitionTo(newState) {
    if (this.states[this.currentState].next.includes(newState)) {
      this.animator.crossFade(newState, 0.3);
      this.currentState = newState;
    }
  }
}
```

**骨骼绑定高级用法**：
```javascript
// 动态绑定武器到骨骼
const weapon = new Object3D();
const skeletonAnimator = character.getComponent(SkeletonAnimationComponent);

// 绑定到右手骨骼
skeletonAnimator.addJointBind("RightHand", weapon);

// 动态切换绑定
skeletonAnimator.removeJointBind(weapon);
skeletonAnimator.addJointBind("LeftHand", weapon);
```

[← 扩展组件](/extensions)
