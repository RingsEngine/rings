export declare class ShaderLib {
    static init(): void;
    static register(keyName: string, code: string): void;
    static getShader(keyName: string): string;
}
