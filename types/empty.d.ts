import { MiniguiComponent } from './component';
import { VNode } from 'vue';

export declare class Empty extends MiniguiComponent {
  /**
   * customize description
   * @type string | VNode
   */
  description: string | VNode;

  /**
   * customize image. Will tread as image url when string provided
   * @default false
   * @type string | VNode
   */
  image: string | VNode;
  imageStyle: object;
}
