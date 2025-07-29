import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
import { PrefabAvatarData } from "./prefabData/PrefabAvatarData";
import { PrefabNode } from "./prefabData/PrefabNode";
export declare class PrefabParser extends ParserBase {
    static useWebp: boolean;
    static format: ParserFormat;
    avatarDic: {
        [name: string]: PrefabAvatarData;
    };
    nodeData: PrefabNode;
    parseBuffer(buffer: ArrayBuffer): Promise<void>;
    private parserPrefabNode;
    private parserNodeTree;
    verification(): boolean;
}
