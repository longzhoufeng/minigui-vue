<cn>
#### 国际化
此处列出 Ant Design Vue 中需要国际化支持的组件，你可以在演示里切换语言。
</cn>

<us>
#### Locale
Components which need localization support are listed here, you can toggle the language in the demo.
</us>

```vue
<template>
  <div>
    <div class="change-locale">
      <span style="margin-right: 16px">Change locale of components: </span>
      <m-radio-group :value="locale" @change="changeLocale">
        <m-radio-button key="en" :value="enUS">
          English
        </m-radio-button>
        <m-radio-button key="cn" :value="zhCN">
          中文
        </m-radio-button>
      </m-radio-group>
    </div>
    <m-config-provider :locale="locale">
      <div :key="locale ? locale.locale : 'en'" class="locale-components">
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
          <m-range-picker style="width: 200px" />
        </div>
        <div class="example">
          <m-button type="primary" @click="visible = true">
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
        <div class="example">
          <m-transfer
            :data-source="[]"
            show-search
            :target-keys="[]"
            :render="item => item.title"
          />
        </div>
        <div style="width: 319px; border: 1px solid #d9d9d9; border-radius: 4px">
          <m-calendar :fullscreen="false" :value="moment()" />
        </div>
        <div class="example">
          <m-table :data-source="[]" :columns="columns" />
        </div>
        <m-modal v-model="visible" title="Locale Modal">
          <p>Locale Modal</p>
        </m-modal>
      </div>
    </m-config-provider>
  </div>
</template>
<script>
import enUS from 'minigui-vue/es/locale/en_US';
import zhCN from 'minigui-vue/es/locale/zh_CN';
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
      columns,
      visible: false,
      locale: enUS,
      moment,
      enUS,
      zhCN,
    };
  },
  methods: {
    changeLocale(e) {
      const localeValue = e.target.value;
      this.locale = localeValue;
      if (!localeValue) {
        moment.locale('en');
      } else {
        moment.locale('zh-cn');
      }
    },
    info() {
      this.$info({
        title: 'some info',
        content: 'some info',
      });
    },
    confirm() {
      this.$confirm({
        title: 'some info',
        content: 'some info',
      });
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
