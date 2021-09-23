import { MiniguiComponent } from '../component';
import { MenuItem } from './menu-item';

export declare class MenuItemGroup extends MiniguiComponent {
  /**
   * sub menu items
   * @type MenuItem[]
   */
  children: MenuItem[];

  /**
   * title of the group
   * @type string | slot
   */
  title: any;
}
