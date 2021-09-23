import { MiniguiComponent } from '../component';

export declare class MenuItem extends MiniguiComponent {
  /**
   * unique id of the menu item
   * @type string
   */
  key: string;

  /**
   * whether menu item is disabled or not
   * @default false
   * @type boolean
   */
  disabled: boolean;

  /**
   * set display title for collapsed item
   * @type string
   */
  title: string;
}
