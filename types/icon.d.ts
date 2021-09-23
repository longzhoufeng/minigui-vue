import { MiniguiComponent } from './component';
import { Component } from 'vue/types/options';

export interface IconOptions {
  /**
   * The URL generated by iconfont.cn project.
   * @type string
   */
  scriptUrl: string;

  /**
   * Define extra properties to the component
   * @default {}
   * @type object
   */
  extraCommonProps?: { [key: string]: any };
}

export declare class Icon extends MiniguiComponent {
  static getTwoToneColor(): string;
  static setTwoToneColor(colorString: string): void;
  static createFromIconfontCN(iconOptions: IconOptions): Icon;

  /**
   * Type of the ant design icon
   * @type string
   */
  type: string;

  /**
   * Style properties of icon, like fontSize and color
   * @type string
   */
  style: string;

  /**
   * The component used for the root node. This will override the type property.
   * @type Component
   */
  component: Component;

  /**
   * Rotate icon with animation
   * @default false
   * @type boolean
   */
  spin: boolean;

  /**
   * Theme of the ant design icon
   * @default 'outlined'
   * @type string
   */
  theme: 'filled' | 'outlined' | 'twoTone';

  /**
   * Only support the two-tone icon. Specific the primary color.
   * @type string
   */
  twoToneColor: string;
}
