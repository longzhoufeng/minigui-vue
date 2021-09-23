import { MiniguiComponent } from '../component';
import { Meta } from '../meta';

export declare class ListItem extends MiniguiComponent {
  static Meta: typeof Meta;

  /**
   * The actions content of list item. If itemLayout is vertical, shows the content on bottom,
   * otherwise shows content on the far right.
   * @type any (VNode[] | slot)
   */
  actions: any;

  /**
   * The extra content of list item. If itemLayout is vertical, shows the content on right,
   * otherwise shows content on the far right.
   * @type any (string | slot)
   */
  extra: any;
}
