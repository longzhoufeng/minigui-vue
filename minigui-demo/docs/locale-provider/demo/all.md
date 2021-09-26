<cn>
#### 所有组件
此处列出 Ant Design 中需要国际化支持的组件，你可以在演示里切换语言。
</cn>

<us>
#### All components
Components which need localization support are listed here, you can toggle the language in the demo.
</us>

```vue
<template>
  <div>
    <div class="change-locale">
      <span :style="{ marginRight: '16px' }">Change locale of components: </span>
      <m-radio-group :default-value="null" @change="changeLocale">
        <m-radio-button key="en" :value="null">
          English
        </m-radio-button>
        <m-radio-button key="cn" :value="zhCN">
          中文
        </m-radio-button>
      </m-radio-group>
    </div>
    <m-locale-provider :locale="locale">
      <div :key="(!!locale).toString()" class="locale-components">
        <!-- HACK: just refresh in production environment-->
        <div class="example">
          <m-pagination :default-current="1" :total="50" show-size-changer />
        </div>
        <div class="example">
          <m-select show-search style="width: 200px">
            <m-select-option value="jack">
              jack
            </m-select-option>
            <m-select-option value="lucy">
              lucy
            </m-select-option>
          </m-select>
          <m-date-picker />
          <m-time-picker />
          <m-range-picker style=" width: 200px " />
        </div>
        <div class="example">
          <m-button type="primary" @click="showModal">
            Show Modal
          </m-button>
          <m-button @click="info">
            Show info
          </m-button>
          <m-button @click="confirm">
            Show confirm
          </m-button>
          <m-popconfirm title="Question?">
            <a href="#">Click to confirm</a>
          </m-popconfirm>
        </div>
        <div className="example">
          <m-transfer
            :data-source="[]"
            show-search
            :target-keys="[]"
            :render="item => item.title"
          />
        </div>
        <div :style="{ width: '319px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
          <m-calendar :fullscreen="false" :value="moment()" />
        </div>
        <m-modal v-model="visible" title="Locale Modal">
          <p>Locale Modal</p>
        </m-modal>
      </div>
    </m-locale-provider>
  </div>
</template>
<script>
// you should use import zhCN from 'minigui-vue/es/locale-provider/zh_CN'
import zhCN from 'minigui-vue/es/locale-provider/zh_CN';
import { Modal } from 'minigui-vue';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('en');
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
export default {
  data() {
    return {
      visible: false,
      locale: null,
      zhCN,
    };
  },
  methods: {
    moment,
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    info() {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    },
    confirm() {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    },
    changeLocale(e) {
      const localeValue = e.target.value;
      this.locale = localeValue;
      if (!localeValue) {
        moment.locale('en');
      } else {
        moment.locale('zh-cn');
      }
    },
  },
};
</script>

<style scoped>
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
</style>
```
