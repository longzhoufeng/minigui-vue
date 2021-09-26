<cn>
#### 位置
有四个位置，`tabPosition="left|right|top|bottom"`。
</cn>

<us>
#### Position
Tab's position: left, right, top or bottom.
</us>

```vue
<template>
  <div style="width: 500px">
    <m-radio-group v-model="tabPosition" style="margin:8px">
      <m-radio-button value="top">
        top
      </m-radio-button>
      <m-radio-button value="bottom">
        bottom
      </m-radio-button>
      <m-radio-button value="left">
        left
      </m-radio-button>
      <m-radio-button value="right">
        right
      </m-radio-button>
    </m-radio-group>
    <m-tabs default-active-key="1" :tab-position="tabPosition">
      <m-tab-pane key="1" tab="Tab 1">
        Content of Tab 1
      </m-tab-pane>
      <m-tab-pane key="2" tab="Tab 2">
        Content of Tab 2
      </m-tab-pane>
      <m-tab-pane key="3" tab="Tab 3">
        Content of Tab 3
      </m-tab-pane>
    </m-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: 'top',
    };
  },
  methods: {
    callback(val) {
      console.log(val);
    },
  },
};
</script>
```
