import { MiniguiComponent } from '../component';

export declare class Option extends MiniguiComponent {
  /**
   * Disable this option
   * @default false
   * @type boolean
   */
  disabled: boolean;

  /**
   * Same usage as value. If Vue request you to set this property, you can set it to value of option, and then omit value property.
   * @type string
   */
  key: string;

  /**
   * title of Select after select this Option
   * @type string
   */
  title: string;

  /**
   * default to filter with this property
   * @type string | number
   */
  value: string | number;

  /**
   * additional class to option
   * @type string
   */
  class: string;
}
