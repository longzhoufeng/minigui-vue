import { MiniguiComponent } from './component';

export declare class Affix extends MiniguiComponent {
  /**
   * Pixels to offset from top when calculating position of scroll
   * @default 0
   * @type number
   */
  offsetTop: number;

  /**
   * Pixels to offset from bottom when calculating position of scroll
   * @type number
   */
  offsetBottom: number;

  /**
   * specifies the scrollable area dom node
   * @default () => window
   * @type Function
   */
  target: () => HTMLElement;
}
