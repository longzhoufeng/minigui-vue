import { mount } from '@vue/test-utils';
import Vue from 'vue';
import moment from 'moment';
import MockDate from 'mockdate';
import { sleep } from '../../../tests/utils';
import {
  LocaleProvider,
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Popconfirm,
  Table,
  Modal,
  Select,
  Transfer,
} from '../..';
import enGB from '../en_GB';
import enUS from '../en_US';
import esES from '../es_ES';
import zhCN from '../zh_CN';
import zhTW from '../zh_TW';

const locales = [
  enGB,
  enUS,
  esES,
  zhCN,
  zhTW,
];

const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

const App = {
  render() {
    return (
      <div>
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
        <Select showSearch style={{ width: '200px' }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>
        <DatePicker open />
        <TimePicker open defaultOpenValue={moment()} />
        <RangePicker open style={{ width: '200px' }} />
        <Popconfirm title="Question?" visible>
          <a>Click to confirm</a>
        </Popconfirm>
        <Transfer dataSource={[]} showSearch targetKeys={[]} render={item => item.title} />
        <Calendar fullscreen={false} value={moment()} />
        <Table dataSource={[]} columns={columns} />
        <Modal title="Locale Modal" visible>
          <p>Locale Modal</p>
        </Modal>
      </div>
    );
  },
};

describe('Locale Provider', () => {
  beforeAll(() => {
    document.body.innerHTML = '';
    MockDate.set(moment('2017-09-18T03:30:07.795'));
  });

  afterAll(() => {
    MockDate.reset();
  });

  locales.forEach(locale => {
    it(`should display the text as ${locale.locale}`, done => {
      const wrapper = mount(
        {
          render() {
            return (
              <LocaleProvider locale={locale}>
                <App />
              </LocaleProvider>
            );
          },
        },
        { sync: false, attachToDocument: true },
      );
      Vue.nextTick(() => {
        expect(wrapper.html()).toMatchSnapshot();
        done();
      });
    });
  });

  fit('should change locale of Modal.xxx', async () => {
    const ModalDemo = {
      mounted() {
        Modal.confirm({
          title: 'Hello World!',
        });
      },
      render() {
        return null;
      },
    };
    for (let locale of locales) {
      document.body.innerHTML = '';
      mount(
        {
          render() {
            return (
              <LocaleProvider locale={locale}>
                <ModalDemo />
              </LocaleProvider>
            );
          },
        },
        { sync: false, attachToDocument: true },
      );
      await sleep();
      const currentConfirmNode = document.querySelectorAll('.minigui-modal-confirm')[
        document.querySelectorAll('.minigui-modal-confirm').length - 1
      ];
      let cancelButtonText = currentConfirmNode.querySelectorAll(
        '.minigui-btn:not(.minigui-btn-primary) span',
      )[0].innerHTML;
      let okButtonText = currentConfirmNode.querySelectorAll('.minigui-btn-primary span')[0].innerHTML;
      if (locale.locale === 'zh-cn' || locale.locale === 'zh-tw') {
        cancelButtonText = cancelButtonText.replace(' ', '');
        okButtonText = okButtonText.replace(' ', '');
      }
      expect(cancelButtonText).toBe(locale.Modal.cancelText);
      expect(okButtonText).toBe(locale.Modal.okText);
    }
  });

  it('set moment locale when locale changes', async () => {
    document.body.innerHTML = '';
    const Test = {
      data() {
        return {
          locale: zhCN,
        };
      },
      render() {
        return (
          <LocaleProvider locale={this.locale}>
            <div>
              <DatePicker defaultValue={moment()} open />
            </div>
          </LocaleProvider>
        );
      },
    };
    const wrapper = mount(Test, { sync: false, attachToDocument: true });
    await sleep(50);
    expect(document.body.innerHTML).toMatchSnapshot();
    wrapper.setData({ locale: frFR });
    await sleep(50);
    expect(document.body.innerHTML).toMatchSnapshot();
    wrapper.setData({ locale: null });
    await sleep(50);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
