export class StringUtil {
  private static _filterChar: string[] = [
    " ",
    "  ",
    ";",
    "\n",
    "\r",
    "\t",
    "\n",
    "\r",
    "\t",
  ];

  public static hasString(fields: Array<string>, str: string): number {
    for (var i: number = 0; i < fields.length; ++i) {
      if (fields[i] == str) {
        return i;
      }
    }

    return -1;
  }

  public static getEllipsis(str, len: number = 4): string {
    let name = str;
    if (name.length > len) name = name.slice(0, len) + "...";

    return name;
  }

  public static getURLName(url: string): string {
    var urlArray: string[];
    urlArray = url.split("/");
    let name = urlArray[urlArray.length - 1];
    name = name.split(".")[0];
    return name;
  }

  public static getFileFormat(url: string): string {
    var startPos: number = url.lastIndexOf(".");
    startPos++;
    var endPos = url.length;
    if (url.indexOf("?", startPos) !== -1) {
      endPos = url.indexOf("?", startPos);
    }
    var fileFormat: string = url.substr(startPos, endPos - startPos);
    fileFormat = fileFormat.toLowerCase();
    return fileFormat;
  }

  public static readLineProperty(line: string, data: any) {
    line
      .trim()
      .split(" ")
      .forEach((v, i) => {
        let strArr = v.split("=");
        if (strArr.length > 1) {
          let key = strArr[0];
          let value = strArr[1];
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            if (value.indexOf('"') == -1) {
              data[key] = parseFloat(strArr[1]);
            } else {
              data[key] = value.replace('"', "").replace('"', "");
            }
          }
        }
      });
  }

  public static getPath(url: string): string {
    var s_pos: number = url.lastIndexOf("/");
    s_pos++;
    return url.substring(0, s_pos);
  }

  public static normalizePath(url: string): string {
    if (!url) {
      return url;
    }

    let normalized = url.replace(/\\/g, "/");
    const preserveLeadingDoubleSlash = normalized.startsWith("//");
    const protectedTokens: string[] = [];
    let tokenIndex = 0;

    normalized = normalized.replace(
      /([a-zA-Z][a-zA-Z0-9+\-.]*):\/{2}/g,
      (match: string, scheme: string, offset: number) => {
        if (scheme.length === 1 && offset === 0) {
          return match;
        }

        const token = `__SCHEME_SLASH_${tokenIndex++}__`;
        protectedTokens.push(token);
        return `${scheme}:${token}`;
      }
    );

    normalized = normalized.replace(/\/{2,}/g, "/");

    protectedTokens.forEach((token) => {
      normalized = normalized.replace(token, "//");
    });

    if (preserveLeadingDoubleSlash) {
      normalized = `//${normalized.replace(/^\/+/, "")}`;
    }

    return normalized;
  }

  public static getStringList(str: string, char: string = ";"): string[] {
    return str.split(char);
  }

  public static formatTime(time: number): string[] {
    let t = time / 1000;
    let temp = t / 60;
    let m = Math.floor(temp);
    let s = Math.floor(temp - m);

    return [m.toString(), s.toString()];
  }

  static trim(str) {
    return str.replace(/^\s+/g, "").replace(/\s+$/g, "");
  }

  static isEmpty(value) {
    return (
      !value ||
      typeof value == "undefined" ||
      value == null ||
      (typeof value === "string" && this.trim(value) === "") ||
      value === "null"
    );
  }

  static strCut(str, len): string {
    if (str.length * 2 <= len) {
      return str;
    }
    var strlen = 0;
    var s = "";
    for (var i = 0; i < str.length; i++) {
      s = s + str.charAt(i);
      if (str.charCodeAt(i) > 128) {
        strlen = strlen + 2;
        if (strlen >= len) {
          return s.substring(0, s.length - 1) + "...";
        }
      } else {
        strlen = strlen + 1;
        if (strlen >= len) {
          return s.substring(0, s.length - 2) + "...";
        }
      }
    }
    return s;
  }

  static toQueryPair(key, value, isEncodeURI = false): string {
    return key + "=" + (isEncodeURI ? encodeURIComponent(value) : value);
  }

  static stringFormat(str: string, ...params): string {
    if (arguments.length === 0)
      throw new Error("please give arg at least one !");

    if (arguments.length === 2 && typeof arguments[1] === "object") {
      for (let key in arguments[1]) {
        let reg = new RegExp("({" + key + "})", "g");
        str = str.replace(reg, arguments[1][key]);
      }
    } else {
      for (let i = 0; i < params.length; i++) {
        if (params[i] == undefined) {
          return str;
        } else {
          let reg = new RegExp("({[" + i + "]})", "g");
          str = str.replace(reg, params[i]);
        }
      }
    }
    return str;
  }

  static parseJson2String(json, options?): string {
    let reg = null,
      formatted = "",
      pad = 0,
      PADDING = "    ";
    options = options || {};
    options.newlineAfterColonIfBeforeBraceOrBracket =
      options.newlineAfterColonIfBeforeBraceOrBracket === true ? true : false;
    options.spaceAfterColon = options.spaceAfterColon === false ? false : true;
    if (typeof json !== "string") {
      json = JSON.stringify(json);
    } else {
      json = JSON.parse(json);
      json = JSON.stringify(json);
    }
    reg = /([\{\}])/g;
    json = json.replace(reg, "\r\n$1\r\n");
    reg = /([\[\]])/g;
    json = json.replace(reg, "\r\n$1\r\n");
    reg = /(\,)/g;
    json = json.replace(reg, "$1\r\n");
    reg = /(\r\n\r\n)/g;
    json = json.replace(reg, "\r\n");
    reg = /\r\n\,/g;
    json = json.replace(reg, ",");

    if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
      reg = /\:\r\n\{/g;
      json = json.replace(reg, ":{");
      reg = /\:\r\n\[/g;
      json = json.replace(reg, ":[");
    }
    if (options.spaceAfterColon) {
      reg = /\:/g;
      json = json.replace(reg, ":");
    }
    json.split("\r\n").forEach(function (node, index) {
      let i = 0,
        indent = 0,
        padding = "";

      if (node.match(/\{$/) || node.match(/\[$/)) {
        indent = 1;
      } else if (node.match(/\}/) || node.match(/\]/)) {
        if (pad !== 0) {
          pad -= 1;
        }
      } else {
        indent = 0;
      }

      for (i = 0; i < pad; i++) {
        padding += PADDING;
      }

      formatted += padding + node + "\r\n";
      pad += indent;
    });
    return formatted;
  }

  static compareVersion(v1, v2) {
    v1 = v1.split(".");
    v2 = v2.split(".");
    let len = Math.max(v1.length, v2.length);

    while (v1.length < len) {
      v1.push("0");
    }
    while (v2.length < len) {
      v2.push("0");
    }

    for (let i = 0; i < len; i++) {
      let num1 = parseInt(v1[i]);
      let num2 = parseInt(v2[i]);

      if (num1 > num2) {
        return 1;
      } else if (num1 < num2) {
        return -1;
      }
    }

    return 0;
  }

  static buildRandomCode() {
    let words =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let len = words.length;
    let str = "";
    for (let i = 0; i < 26; i++) {
      let rand = Math.floor(Math.random() * len);
      str += words.charAt(rand);
    }
    let millisecond = new Date().getTime();
    return `${millisecond}-${str}`;
  }

  static UUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  public static stringToHash(str) {
    let hash = 0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  public static parseUrl(base: string, url: string) {
    return url.match(/^(blob|http|https):/) ? url : base + url;
  }
}
