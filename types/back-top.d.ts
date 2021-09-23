import { MiniguiComponent } from './component';

export declare class BackTop extends MiniguiComponent {
  /**
   * specifies the scrollable area dom node
   * @default () => window
   * @type Function
   */
  target: () => HTMLElement;

  /**
   * the BackTop button will not show until the scroll height reaches this value
   * @default 400
   * @type number
   */
  visibilityHeight: number;
}
