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
    &lt;p style="margin-top:8px"&gt;
      若 glTF 单位很小，示例会对根节点放大并对 &lt;code&gt;BoundUtil.genMeshBounds&lt;/code&gt; 结果做 &lt;code&gt;focusByBounds&lt;/code&gt;，
      避免相机仍在原点附近、视距过近而「在模型内部」或模型只占亚像素。
    &lt;/p&gt;
    &lt;button type="button" id="btnPlay" disabled&gt;播放骨骼动画&lt;/button&gt;
  &lt;/aside&gt;
  &lt;script type="module"&gt;
    import {
      Engine3D, Scene3D, Object3D, Camera3D, View3D, Color,
      LitMaterial, PlaneGeometry, MeshRenderer,
      SkinnedMeshRenderer2, AnimatorComponent,
      AtmosphericComponent, DirectLight, HoverCameraController,
      BoundUtil,
    } from 'https://unpkg.com/@rings-webgpu/core@1.0.55/dist/rings.es.js';

    /** glTF 常为真实比例，整体偏小；放大后需按包围盒拉远相机，否则会「在模型肚子里」看不到。 */
    const MODEL_ROOT_SCALE = 100;

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
      ground.transform.rotationX = -90;
      ground.y = 0;
      scene.addChild(ground);

      let playingName = '';
      let clipNames = [];
      let animator = null;

      const btnPlay = document.getElementById('btnPlay');

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
        camera.perspective(50, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.05, 5000);
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

