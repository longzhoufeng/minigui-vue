import { MiniguiComponent } from '../component';

export default class LayoutHeader extends MiniguiComponent {
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
