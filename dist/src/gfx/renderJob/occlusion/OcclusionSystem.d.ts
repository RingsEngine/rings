import { RenderNode } from "../../../components/renderer/RenderNode";
import { Camera3D } from "../../../core/Camera3D";
import { Scene3D } from "../../../core/Scene3D";
import { CollectInfo } from "../collect/CollectInfo";
export declare class OcclusionSystem {
    frustumCullingList: Float32Array;
    zVisibleList: Float32Array;
    private _renderList;
    static enable: boolean;
    constructor();
    occlusionRenderNodeTest(index: number): number;
    zDepthRenderNodeTest(index: number): number;
    update(camera: Camera3D, scene: Scene3D): void;
    collect(nodes: CollectInfo, camera: Camera3D): void;
    renderCommitTesting(camera: Camera3D, renderNode: RenderNode): boolean;
}
