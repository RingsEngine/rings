import { TemplateFile } from './template'
import { WaylineFile } from './wayline'

export interface KmzFile {
  /**
   * Wayline template file
   */
  template: TemplateFile
  /**
   * Wayline execution file
   */
  waylines: WaylineFile
}
