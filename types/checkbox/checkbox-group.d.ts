import { MiniguiComponent } from '../component';

export declare class CheckboxGroup extends MiniguiComponent {
  /**
   * Default selected value
   * @type string[]
   */
  defaultValue: string[];

  /**
   * Disable all checkboxes
   * @default false
   * @type boolean
   */
  disabled: boolean;

  /**
   * Specifies options, you can customize `label` with slot = "label" slot-scope = "option"
   * @type Array<string | { label: string, value: string, disabled?: boolean, onChange?: Function }>
   */
  options: Array<
    string | { label: string; value: string; disabled?: boolean; onChange?: Function }
  >;

  /**
   * Used for setting the currently selected value.
   * @type string[]
   */
  value: string[];
  name?: string;
}
