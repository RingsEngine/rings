import { CEventDispatcher } from "../event/CEventDispatcher";
import { ParserBase } from "./parser/ParserBase";
/**
 * @internal
 * 加载管理
 * @group Loader
 */
export declare class LoaderManager extends CEventDispatcher {
    private static _instance;
    private _maxRetry;
    /**
     * 同时加载多个同类型资源
     * @param urls 资源URL列表
     * @param c 资源解析器类型
     * @returns 返回解析器数组的Promise
     */
    loadAll<T extends ParserBase>(urls: string[], c: {
        new (): T;
    }): Promise<T[]>;
    constructor();
    static getInstance(): LoaderManager;
    /**
     * 加载多个URL资源
     * @param urls 资源URL列表
     * @param c 资源解析器类型
     * @returns 返回解析器数组的Promise
     */
    loadUrls(urls: string[], c: {
        new (): ParserBase;
    }): Promise<ParserBase[]>;
    get maxRetry(): number;
    set maxRetry(value: number);
    load<T extends ParserBase>(url: string, c: {
        new (): T;
    }): Promise<T>;
}
