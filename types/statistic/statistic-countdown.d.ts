import { MiniguiComponent } from '../component';
import { VNode } from 'vue';

export declare class StatisticCountdown extends MiniguiComponent {
  format: string;
  /**
   * prefix node of value
   * @type string | VNode
   */
  prefix: string | VNode;

  /**
   * suffix node of value
   * @type string | VNode
   */
  suffix: string | VNode;

  /**
   * Display title
   * @type string | VNode
   */
  title: string | VNode;

  /**
   * Display value
   * @type string or number
   */
  value: string | number;
  valueStyle: object;
}
