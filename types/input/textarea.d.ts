import { MiniguiComponent } from '../component';

export declare class TextArea extends MiniguiComponent {
  /**
   * Height autosize feature, can be set to true|false or an object { minRows: 2, maxRows: 6 }
   * @default false
   * @type boolean | object
   */
  autosize: boolean | { minRows: number; maxRows: number };
  autoSize: boolean | { minRows: number; maxRows: number };

  /**
   * The initial input content
   * @type string | number
   */
  defaultValue: string | number;

  /**
   * The input content value
   * @type string | number
   */
  value: string | number;
}
