export declare class StringUtil {
    private static _filterChar;
    static hasString(fields: Array<string>, str: string): number;
    static getEllipsis(str: any, len?: number): string;
    static getURLName(url: string): string;
    static getFileFormat(url: string): string;
    static readLineProperty(line: string, data: any): void;
    static getPath(url: string): string;
    static normalizePath(url: string): string;
    static getStringList(str: string, char?: string): string[];
    static formatTime(time: number): string[];
    static trim(str: any): any;
    static isEmpty(value: any): boolean;
    static strCut(str: any, len: any): string;
    static toQueryPair(key: any, value: any, isEncodeURI?: boolean): string;
    static stringFormat(str: string, ...params: any[]): string;
    static parseJson2String(json: any, options?: any): string;
    static compareVersion(v1: any, v2: any): 1 | 0 | -1;
    static buildRandomCode(): string;
    static UUID(): string;
    static stringToHash(str: any): number;
    static parseUrl(base: string, url: string): string;
}
