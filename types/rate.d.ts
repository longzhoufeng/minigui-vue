import { MiniguiComponent } from './component';

export declare class Rate extends MiniguiComponent {
  /**
   * whether to allow clear when click again
   * @default true
   * @type boolean
   */
  allowClear: boolean;

  /**
   * whether to allow semi selection
   * @default false
   * @type boolean
   */
  allowHalf: boolean;

  /**
   * get focus when component mounted
   * @default false
   * @type boolean
   */
  autoFocus: boolean;

  /**
   * custom character of rate
   * @default <Icon type="star" />
   * @type any (String or slot="character")
   */
  character: any;

  /**
   * star count
   * @default 5
   * @type number
   */
  count: number;

  /**
   * default value
   * @default 0
   * @type number
   */
  defaultValue: number;

  /**
   * read only, unable to interact
   * @default false
   * @type boolean
   */
  disabled: boolean;

  /**
   * current value
   * @type number
   */
  value: number;

  tooltips: Array<string>;

  /**
   * remove focus
   */
  blur(): void;

  /**
   * get focus
   */
  focus(): void;
}
