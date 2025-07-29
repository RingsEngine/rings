import { RenderNode } from "../../../components/renderer/RenderNode";
import { Camera3D } from "../../../core/Camera3D";
import { Scene3D } from "../../../core/Scene3D";
import { Engine3D } from "../../../Engine3D";
import { CollectInfo } from "../collect/CollectInfo";

export class OcclusionSystem {
  public frustumCullingList: Float32Array;
  public zVisibleList: Float32Array;
  private _renderList: Map<Camera3D, Map<RenderNode, number>>;
  public static enable = true;

  constructor() {
    this._renderList = new Map<Camera3D, Map<RenderNode, number>>();
  }

  public occlusionRenderNodeTest(index: number): number {
    if (!Engine3D.setting.occlusionQuery.enable) return 1;
    if (this.frustumCullingList) {
      return this.frustumCullingList[index];
    } else {
      return 0;
    }
  }

  public zDepthRenderNodeTest(index: number): number {
    if (this.zVisibleList) {
      return this.zVisibleList[index];
    } else {
      return 0;
    }
  }

  public update(camera: Camera3D, scene: Scene3D) {}

  collect(nodes: CollectInfo, camera: Camera3D) {}

  renderCommitTesting(camera: Camera3D, renderNode: RenderNode): boolean {
    return true;
  }
}
