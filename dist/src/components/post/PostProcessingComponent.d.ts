import { PostBase } from "../../gfx/renderJob/post/PostBase";
import { Ctor } from "../../util/Global";
import { ComponentBase } from "../ComponentBase";
export declare class PostProcessingComponent extends ComponentBase {
    private _postList;
    init(param?: any): void;
    start(): void;
    stop(): void;
    onEnable(): void;
    onDisable(): void;
    private activePost;
    private unActivePost;
    addPost<T extends PostBase>(c: Ctor<T>): T;
    removePost<T extends PostBase>(c: Ctor<T>): void;
    getPost<T extends PostBase>(c: Ctor<T>): T;
}
