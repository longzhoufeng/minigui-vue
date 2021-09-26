<cn>
#### 大小
大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。
</cn>

<us>
#### Size
Large size tabs are usally used in page header, and small size could be used in Modal.
</us>

```vue
<template>
  <div>
    <m-radio-group v-model="size" style="margin-bottom: 16px">
      <m-radio-button value="small">
        Small
      </m-radio-button>
      <m-radio-button value="default">
        Default
      </m-radio-button>
      <m-radio-button value="large">
        Large
      </m-radio-button>
    </m-radio-group>
    <m-tabs default-active-key="2" :size="size">
      <m-tab-pane key="1" tab="Tab 1">
        Content of tab 1
      </m-tab-pane>
      <m-tab-pane key="2" tab="Tab 2">
        Content of tab 2
      </m-tab-pane>
      <m-tab-pane key="3" tab="Tab 3">
        Content of tab 3
      </m-tab-pane>
    </m-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 'small',
    };
  },
};
</script>
```
