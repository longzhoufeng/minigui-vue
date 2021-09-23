import { MiniguiComponent } from './component';

export declare class Space extends MiniguiComponent {
  /**
   * 对齐方式
   */
  align: 'start' | 'end' | 'center' | 'baseline';
  /**
   * 间距方向
   */
  direction: 'vertical' | 'horizontal';
  /**
   * 间距大小
   */
  size: 'small' | 'middle' | 'large' | number;
}
