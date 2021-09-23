import { MiniguiComponent } from '../component';

export declare class AnchorLink extends MiniguiComponent {
  /**
   * target of hyperlink
   * @type string
   */
  href: string;

  /**
   * content of hyperlink
   * @type any (string | slot)
   */
  title: any;
}
