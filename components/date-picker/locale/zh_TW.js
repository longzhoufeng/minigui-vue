import CalendarLocale from '../../vc-calendar/src/locale/zh_TW';
import TimePickerLocale from '../../time-picker/locale/zh_TW';

const locale = {
  lang: {
    placeholder: '請選擇日期',
    rangePlaceholder: ['開始日期', '結束日期'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

locale.lang.ok = '確 定';

export default locale;
