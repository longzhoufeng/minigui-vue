import { MiniguiComponent } from './component';
import { Moment } from 'moment';
export interface RenderHeader {
  value: Moment;
  onChange?: (value: Moment) => void;
  type: string;
  onTypeChange: (type: string) => void;
}
export declare class Calendar extends MiniguiComponent {
  headerRender: (headerRender: RenderHeader) => any;
  /**
   * Customize the display of the date cell by setting a scoped slot,
   * the returned content will be appended to the cell
   * @type Function
   */
  dateCellRender: (date: Moment) => any;

  /**
   * Customize the display of the date cell by setting a scoped slot,
   * the returned content will override the cell
   * @type Function
   */
  dateFullCellRender: (date: Moment) => any;

  /**
   * The date selected by default
   * @default default date
   * @type Moment
   */
  defaultValue: Moment | string;

  /**
   * Function that specifies the dates that cannot be selected
   * @type Function
   */
  disabledDate: (currentDate: Moment) => boolean;

  /**
   * Whether to display in full-screen
   * @default true
   * @type boolean
   */
  fullscreen: boolean;

  /**
   * The calendar's locale
   * @default [default]
   * @type object
   */
  locale: object;

  /**
   * The display mode of the calendar
   * @default 'month'
   * @type string
   */
  mode: 'month' | 'year';

  /**
   * Customize the display of the month cell by setting a scoped slot, the returned content will be appended to the cell
   * @type Function
   */
  monthCellRender: (date: Moment) => any;

  /**
   * Customize the display of the month cell by setting a scoped slot, the returned content will override the cell
   * @type Function
   */
  monthFullCellRender: (date: Moment) => any;

  /**
   * to set valid range
   * @type [Moment, Moment]
   */
  validRange: [Moment, Moment];

  /**
   * The current selected date
   * @default current date
   * @type Moment
   */
  value: Moment | string;
  valueFormat: string;
}
