<cn>
#### 基本用法
默认选中第一项。
</cn>

<us>
#### basic Usage
Default activate first tab.
</us>

```vue
<template>
  <div>
    <m-tabs default-active-key="1" @change="callback">
      <m-tab-pane key="1" tab="Tab 1">
        Content of Tab Pane 1
      </m-tab-pane>
      <m-tab-pane key="2" tab="Tab 2" force-render>
        Content of Tab Pane 2
      </m-tab-pane>
      <m-tab-pane key="3" tab="Tab 3">
        Content of Tab Pane 3
      </m-tab-pane>
    </m-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>
```
