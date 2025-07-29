import { RenderNode } from "../../../components/renderer/RenderNode";
import { KDTreeEntity } from "../kdTree/KDTreeEntity";
/**
 * @internal
 * @group Core
 */
export declare class IKDTreeUserData {
    get data(): RenderNode;
    entity: KDTreeEntity;
}
