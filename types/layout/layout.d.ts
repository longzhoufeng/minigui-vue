import { MiniguiComponent } from '../component';
import { LayoutSider } from './layout-sider';
import LayoutHeader from './layout-header';
import LayoutContent from './layout-content';
import LayoutFooter from './layout-footer';

export declare class Layout extends MiniguiComponent {
  static Header: typeof LayoutHeader;
  static Content: typeof LayoutContent;
  static Footer: typeof LayoutFooter;
  static Sider: typeof LayoutSider;

  /**
   * container className
   * @default undefined
   * @type string
   */
  class: string;

  /**
   * to customize the styles
   * @type string | object
   */
  style: string | object;

  /**
   * whether contain Sider in children, don't have to assign it normally. Useful in ssr avoid style flickering
   * @type boolean
   */
  hasSider: boolean;
}
