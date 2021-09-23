import { MiniguiComponent } from '../component';
import { Tree } from './tree';

export declare class DictionaryTree extends Tree {
  /**
   * Directory open logic, optional false 'click' 'dblclick'
   * @default 'click'
   * @type string
   */
  expandAction: string;
}
