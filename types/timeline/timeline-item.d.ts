import { MiniguiComponent } from '../component';

export declare class TimelineItem extends MiniguiComponent {
  /**
   * Set the circle's color to blue, red, green or other custom colors
   * @default 'blue'
   * @type string
   */
  color: string;

  /**
   * Customize timeline dot
   * @type any (string | slot)
   */
  dot: any;
}
