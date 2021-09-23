import { MiniguiComponent } from '../component';
import { RadioGroup } from './radio-group';
import { RadioButton } from './radio-button';

export declare class Radio extends MiniguiComponent {
  static Group: typeof RadioGroup;
  static Button: typeof RadioButton;

  /**
   * get focus when component mounted
   * @default false
   * @type boolean
   */
  autoFocus: boolean;

  /**
   * Specifies whether the radio is selected.
   * @type boolean
   */
  checked: boolean;

  /**
   * Specifies the initial state: whether or not the radio is selected.
   * @type boolean
   */
  defaultChecked: boolean;

  /**
   * Disable radio
   * @default false
   * @type boolean
   */
  disabled: boolean;

  /**
   * According to value for comparison, to determine whether the selected
   * @type any
   */
  value: any;

  /**
   * remove focus
   */
  blur(): void;

  /**
   * get focus
   */
  focus(): void;
}
