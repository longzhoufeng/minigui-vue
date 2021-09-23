import { MiniguiComponent } from '../component';

export declare class TabPane extends MiniguiComponent {
  /**
   * Forced render of content in tabs, not lazy render after clicking on tabs
   * @default false
   * @type boolean
   */
  forceRender: boolean;

  /**
   * TabPane's key
   * @type string
   */
  key: string;

  /**
   * Show text in TabPane's head
   * @type any (string | slot)
   */
  tab: any;
}
