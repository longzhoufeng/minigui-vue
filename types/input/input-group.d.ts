import { MiniguiComponent } from '../component';

export declare class InputGroup extends MiniguiComponent {
  /**
   * Whether use compact style
   * @default false
   * @type boolean
   */
  compact: boolean;

  /**
   * The size of Input.Group specifies the size of the included Input fields. Available: large default small
   * @default 'default'
   * @type string
   */
  size: 'small' | 'large' | 'default';
}
