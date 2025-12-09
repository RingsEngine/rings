/**
 * Utility functions for LAS file parsing
 */

export class LASUtils {
  /**
   * Split array into chunks of specified size
   */
  static chunk<T>(arr: T[], size: number): T[][] {
    const overall = [];
    let index = 0;
    while (index < arr.length) {
      overall.push(arr.slice(index, index + size));
      index += size;
    }
    return overall;
  }

  /**
   * Remove comments from text (lines starting with #)
   */
  static removeComment(str: string): string {
    return str
      .split('\n')
      .filter(f => !(f.trim().charAt(0) === '#'))
      .join('\n');
  }

  /**
   * Convert string to number or string
   * Returns number if string represents a valid number, otherwise returns string
   */
  static convertToValue(s: string): number | string {
    return Boolean(+s) || /^0|0$/.test(s) ? +s : s;
  }

  /**
   * Parse a LAS section from text
   * @param text Full LAS file text
   * @param sectionName Section name (e.g., 'VERSION', 'WELL', 'CURVE')
   * @returns Section content as string
   */
  static parseSection(text: string, sectionName: string): string {
    const regex = new RegExp(`~${sectionName}(?:\\w*\\s*)*\\n\\s*`, 'i');
    const parts = text.split(regex);
    if (parts.length > 1) {
      return parts[1].split(/~/)[0];
    }
    return '';
  }

  /**
   * Parse a parameter line from LAS file
   * Format: MNEM.UNIT  VALUE  :DESCRIPTION
   * @param line Parameter line text
   * @returns Parsed parameter object
   */
  static parseParameterLine(line: string): {
    mnemonic: string;
    unit: string;
    value: string;
    description: string;
  } {
    // Remove leading/trailing whitespace
    const trimmed = line.trim();
    if (!trimmed) {
      return { mnemonic: '', unit: '', value: '', description: '' };
    }

    // Split by colon to separate description
    const colonIndex = trimmed.indexOf(':');
    const beforeColon = colonIndex >= 0 ? trimmed.substring(0, colonIndex).trim() : trimmed;
    const description = colonIndex >= 0 ? trimmed.substring(colonIndex + 1).trim() : 'none';

    // Parse mnemonic, unit, and value
    // Format: MNEM.UNIT  VALUE
    const parts = beforeColon.split(/\s{2,}|\s+/);
    const mnemonicPart = parts[0] || '';
    const dotIndex = mnemonicPart.indexOf('.');

    let mnemonic = '';
    let unit = 'none';
    if (dotIndex >= 0) {
      mnemonic = mnemonicPart.substring(0, dotIndex).trim();
      unit = mnemonicPart.substring(dotIndex + 1).trim() || 'none';
    } else {
      mnemonic = mnemonicPart.trim();
    }

    // Value is the last part (or second part if mnemonic has no unit)
    const value = parts.length > 1 ? parts[parts.length - 1].trim() : '';

    return {
      mnemonic: mnemonic.toUpperCase(),
      unit: unit,
      value: value,
      description: description || 'none'
    };
  }
}

