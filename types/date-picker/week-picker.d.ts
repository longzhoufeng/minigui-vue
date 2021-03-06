import { DatepickerCommon } from './common';
import { Moment } from 'moment';

export declare class WeekPicker extends DatepickerCommon {
  /**
   * to set default date
   * @type Moment
   */
  defaultValue: Moment | string;

  /**
   * to set default picker date
   * @type Moment
   */
  defaultPickerValue: Moment | string;

  /**
   * to set the date format, refer to moment.js
   * @default 'YYYY-wos'
   * @type string
   * @see http://momentjs.com
   */
  format: string;

  /**
   * to set date
   * @type Moment
   */
  value: Moment | string;
}
