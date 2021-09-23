import { MiniguiComponent } from './component';

export declare class Divider extends MiniguiComponent {
  /**
   * whether line is dashed
   * @default false
   * @type boolean
   */
  dashed: boolean;

  /**
   * position of title inside divider
   * @default 'center'
   * @type string
   */
  orientation: 'left' | 'right' | 'center';

  /**
   * direction type of divider
   * @default 'horizontal'
   * @type string
   */
  type: 'horizontal' | 'vertical';
}
