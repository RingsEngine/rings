import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
import { KmzFile } from "./dataDef";
import * as fflate from '../../../../libs/fflate'
import { WayLines3D } from "./3d/WayLines3D";

export class KMZParser extends ParserBase {
    static format: ParserFormat = ParserFormat.BIN;

    public parseBuffer(buffer: ArrayBuffer) {
        try {
            const kmzObj: KmzFile = {
                template: null,
                waylines: null,
            }
            const zip = fflate.unzipSync(new Uint8Array(buffer));

            for (const path in zip) {
                const fileData = zip[path];
                const domParser = new DOMParser();
                const xmlDoc = domParser.parseFromString(fflate.strFromU8(fileData), 'application/xml');

                const obj: Record<string, any> = {};
                this.parseNode(xmlDoc, obj);
                const objName = path.replace('wpmz/', '').split('.')[0];

                Object.assign(kmzObj, {
                    [objName]: obj['#document'].kml.Document
                });
            }

            const wayline3D = new WayLines3D(kmzObj.waylines);
            this.data = wayline3D;
        } catch (error) {
            this.parserError(`KMZ parsing failed: ${error}`, -1);
        }
    }

    private parseNode(xml: Document | Element, obj: Record<string, any>) {
        const arrayLikeName: string[] = ['Placemark', 'actionGroup', 'action'];
        const attr = xml.nodeName.replace('wpml:', '');

        if (!xml.childNodes.length) {
            obj[attr] = undefined;
        } else {
            let textValue = null;
            let hasElementChildren = false;

            for (let i = 0; i < xml.childNodes.length; ++i) {
                const childNode = xml.childNodes[i];
                if (childNode.nodeType == Node.TEXT_NODE) {
                    const text = childNode.nodeValue?.trim();
                    if (text && text.length > 0) {
                        textValue = text;
                    }
                } else if (childNode.nodeType == Node.ELEMENT_NODE) {
                    hasElementChildren = true;
                }
            }

            if (textValue && !hasElementChildren) {
                obj[attr] = textValue;
            } else if (hasElementChildren) {
                if (arrayLikeName.includes(attr)) {
                    if (obj[attr]?.length) {
                        obj[attr].push({});
                    } else {
                        obj[attr] = [{}];
                    }
                } else {
                    obj[attr] = {};
                }

                for (let i = 0; i < xml.childNodes.length; ++i) {
                    const childNode = xml.childNodes[i];
                    if (childNode.nodeType == Node.ELEMENT_NODE) {
                        this.parseNode(
                            childNode as Element, 
                            !Array.isArray(obj[attr]) ?
                                obj[attr] : obj[attr].at(-1)
                        );
                    }
                }
            } else {
                obj[attr] = undefined;
            }
        }
    }

    public verification(): boolean {
        if (this.data) {
            return true;
        }
        throw new Error("verify failed.");
    }
}